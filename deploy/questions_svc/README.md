# Deploying questions_svc behind HTTPS (Caddy)

The Jekyll site is served over HTTPS. Browsers block an HTTPS page from
fetching a plain-`http://` resource ("mixed content"), so `questions_svc`
must be reachable over HTTPS too — not just have CORS enabled. This folder
sets that up with [Caddy](https://caddyserver.com/), which requests and
renews the Let's Encrypt certificate automatically.

## One-time setup

1. **DNS** — at whichever provider manages the DNS for
   `engineeringprotocolstack.com`, add an **A record**:

   | Type | Name | Value           |
   |------|------|-----------------|
   | A    | api  | 16.171.32.190   |

   This makes `api.engineeringprotocolstack.com` resolve to the server
   currently running `questions_svc`. (Replace the IP if the server ever
   moves — the rest of this setup doesn't need to change.) Give DNS a few
   minutes to propagate before continuing.

2. **Firewall / security group** — make sure ports **80** and **443** are
   open on this server. Port 80 is required for Caddy's ACME HTTP
   challenge (it also auto-redirects `http://` to `https://`); port 443
   serves the actual HTTPS traffic.

3. **Place these files next to your `questions_svc` project** on the
   server, so the folder layout looks like:

   ```
   some-directory/
     questions_svc/        <- your existing Rust project
     docker-compose.yml     <- this file
     Caddyfile               <- this file
   ```

   If your layout is different, edit the `build: ./questions_svc` line in
   `docker-compose.yml` to point at the right path (or build the image
   once yourself and reference it via `image:` instead — see the comments
   in that file).

4. **Start it**:

   ```bash
   docker compose up -d
   ```

   Caddy will obtain a certificate for `api.engineeringprotocolstack.com`
   automatically on first request — check `docker compose logs -f caddy`
   if it doesn't come up within a minute or two.

5. **Verify**:

   ```bash
   curl -sD - -o /dev/null "https://api.engineeringprotocolstack.com/health"
   curl -sD - -o /dev/null "https://api.engineeringprotocolstack.com/questions?lang=en" \
     -H "Origin: https://engineeringprotocolstack.com"
   ```

   Both should return `HTTP/2 200` with an `access-control-allow-origin`
   header on the second one.

## Update the site's config

In the Jekyll site's `_config.yml`, point the assessment quiz at the new
HTTPS URL instead of `http://localhost:8080`:

```yaml
assessment_service:
  base_url: "https://api.engineeringprotocolstack.com"
```

Rebuild/redeploy the site after this change. `http://localhost:8080` still
works fine for local development (`jekyll serve` on your own machine) —
only the deployed site's config needs the HTTPS URL.
