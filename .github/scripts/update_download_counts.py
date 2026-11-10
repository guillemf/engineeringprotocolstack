#!/usr/bin/env python3
"""Write _data/<tool>_downloads.yml from the GitHub Releases API, for each tool.

Run by .github/workflows/update-download-counts.yml, and safe to run by hand
from the repository root:

    python3 .github/scripts/update_download_counts.py [tool ...]

With no arguments it refreshes every tool in TOOLS.

Standard library only, so the workflow needs no pip install step. Sets an
Authorization header when GITHUB_TOKEN is present (5,000 requests/hour) and
falls back to anonymous access when it is not, which is what makes a local run
work without a token.
"""

import datetime
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
CONFIG_FILE = REPO_ROOT / "_config.yml"
TOOLS = ("trustline", "threadline")

TEMPLATE = '''\
# {name} release download counts.
#
# GENERATED FILE — do not edit by hand. Overwritten by
# .github/scripts/update_download_counts.py, which reads the GitHub Releases
# API for the repository named in `{tool}.releases_repo` in _config.yml.
#
# It is committed rather than fetched in the browser on purpose: the counts do
# not need to be live, and a build-time value keeps the number in the HTML
# instead of adding a request to api.github.com on every visit to the download
# page.
#
# Whether the number is rendered at all is decided by
# `{tool}.downloads_min_display` in _config.yml, not by this file.

# When the counts below were read, UTC.
updated: "{updated}"

# Every asset of every published, non-draft, non-prerelease release added
# together. This is the number the page shows: it answers "how many times has
# {name} been downloaded", which is the only question a visitor is asking.
total: {total}

# How many published releases those downloads are spread across.
releases: {releases}

# The newest published release on its own. Not currently rendered — it is here
# because it resets to near zero on every version bump, which makes it the
# wrong number for social proof and the right one for judging whether a release
# is being picked up.
latest:
  tag: "{latest_tag}"
  total: {latest_total}
'''


def read_releases_repo(tool: str) -> str:
    """Return the `owner/repo` holding `tool`'s releases, from _config.yml.

    Parsed with a regex rather than a YAML library to keep this script on the
    standard library. _config.yml is the single source of truth because the
    download buttons already build their URLs from the same key — a repository
    rename must not need editing in two places.
    """
    config = CONFIG_FILE.read_text(encoding="utf-8")
    # Only the indented body of the `<tool>:` block counts: both tools define
    # the same key, so an unscoped search would return the first one's repo.
    block = re.search(rf"^{tool}:\n((?:[ \t]+.*\n|[ \t]*\n)+)", config, re.M)
    match = block and re.search(
        r'^\s*releases_repo:\s*"?([^"\n]+?)"?\s*$', block.group(1), re.M
    )
    if not match:
        sys.exit(f"No {tool}.releases_repo found in {CONFIG_FILE}")
    return match.group(1)


def fetch_releases(repo: str) -> list:
    """Return every release of `repo`, newest first, as the API reports them."""
    headers = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "engineeringprotocolstack-download-counts",
    }
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    url = f"https://api.github.com/repos/{repo}/releases?per_page=100"
    try:
        with urllib.request.urlopen(
            urllib.request.Request(url, headers=headers), timeout=30
        ) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        sys.exit(f"GitHub API returned {error.code} for {url}: {error.reason}")
    except urllib.error.URLError as error:
        sys.exit(f"Could not reach the GitHub API: {error.reason}")


def refresh(tool: str) -> None:
    repo = read_releases_repo(tool)
    releases = fetch_releases(repo)
    output_file = REPO_ROOT / "_data" / f"{tool}_downloads.yml"

    # Drafts have no public download URL, and a prerelease is not what
    # `releases/latest/download/...` serves, so neither belongs in a total
    # presented to visitors as "downloads of <tool>".
    published = [r for r in releases if not r["draft"] and not r["prerelease"]]
    if not published:
        # Skipping rather than writing 0 matters: a transient API change or an
        # accidentally-unpublished release would otherwise silently replace a
        # real count with a zero and commit it. Skipped, not fatal, so one tool
        # that has not shipped yet cannot block the other's refresh.
        print(f"{repo}: no published releases, leaving {output_file.name} as it is.")
        return

    total = sum(asset["download_count"] for r in published for asset in r["assets"])
    latest = published[0]  # the API returns releases newest first
    latest_total = sum(asset["download_count"] for asset in latest["assets"])

    output_file.write_text(
        TEMPLATE.format(
            name=tool.capitalize(),
            tool=tool,
            updated=datetime.datetime.now(datetime.timezone.utc).strftime(
                "%Y-%m-%dT%H:%M:%SZ"
            ),
            total=total,
            releases=len(published),
            latest_tag=latest["tag_name"],
            latest_total=latest_total,
        ),
        encoding="utf-8",
    )

    print(
        f"{repo}: {total} downloads across {len(published)} releases "
        f"(latest {latest['tag_name']}: {latest_total}) -> "
        f"{output_file.relative_to(REPO_ROOT)}"
    )


def main() -> None:
    tools = sys.argv[1:] or TOOLS
    unknown = [t for t in tools if t not in TOOLS]
    if unknown:
        sys.exit(f"Unknown tool(s) {unknown}; expected any of {list(TOOLS)}")
    for tool in tools:
        refresh(tool)


if __name__ == "__main__":
    main()
