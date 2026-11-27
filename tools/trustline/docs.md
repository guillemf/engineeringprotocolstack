---
layout: default
title: "Trustline User Guide & LAN Protocol Documentation"
subtitle: "The LAN Layer of The Engineering Protocol Stack"
description: "Comprehensive guide and reference for Trustline v1.2.0 — run structured one-to-ones, keep a career path your team can see, and make team health visible as an engineering leader."
needs_tools: true
permalink: /tools/trustline/docs/
lang: en
alt_lang_url: /es/tools/trustline/docs/
---

<div class="docs-wrap">
  <header class="docs-header">
    <div class="docs-meta">
      <span class="badge">App v1.2.0</span>
      <span class="badge">LAN Layer Architecture</span>
      <span>Published for <a href="https://engineeringprotocolstack.com">The Engineering Protocol Stack</a></span>
    </div>
    <h1>Trustline User Guide &amp; Documentation</h1>
    <div class="docs-subtitle">Leading Your Team Through Structure, Trust, and Visible Growth</div>
    <p>Trustline is the <strong>LAN layer</strong> of <em>The Engineering Protocol Stack</em> made into software. It turns the team protocols from Part II of the book—one-to-ones with a fixed agenda, a career path built on trust, explicit team roles, and recurring health checks—into a calm, local-first desktop application. It is the companion to <a href="{{ '/tools/threadline/docs/' | relative_url }}">Threadline</a>, which manages the CPU layer: yourself.</p>
  </header>

  <div class="docs-layout">
    <!-- Sticky Navigation Sidebar -->
    <aside class="docs-sidebar">
      <div class="docs-nav-group">
        <div class="docs-nav-title">Foundations</div>
        <ul class="docs-nav-list">
          <li><a href="#the-lan-layer">The LAN Layer Model</a></li>
          <li><a href="#layer-check">LAN Layer Diagnostic</a></li>
          <li><a href="#getting-started">Getting Started</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">One-to-Ones</div>
        <ul class="docs-nav-list">
          <li><a href="#direct-reports">Direct Reports</a></li>
          <li><a href="#sessions">Sessions &amp; Action Items</a></li>
          <li><a href="#replies">Checking for Replies</a></li>
          <li><a href="#exports">Exports &amp; Email</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Career Path</div>
        <ul class="docs-nav-list">
          <li><a href="#career-path">The Career Path Canvas</a></li>
          <li><a href="#career-positions">Positions &amp; Levels</a></li>
          <li><a href="#career-tracks">Tracks</a></li>
          <li><a href="#career-canvas-controls">Arranging the Canvas</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Teams &amp; Rituals</div>
        <ul class="docs-nav-list">
          <li><a href="#teams">Teams</a></li>
          <li><a href="#team-roster">Roster</a></li>
          <li><a href="#team-agreements">Working Agreements</a></li>
          <li><a href="#team-decisions">Decisions</a></li>
          <li><a href="#team-health">Health</a></li>
          <li><a href="#team-experiments">Experiments</a></li>
          <li><a href="#team-scoreboard">Scoreboard</a></li>
          <li><a href="#team-interactions">Interactions</a></li>
          <li><a href="#team-page">Team Page Export</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">System Reference</div>
        <ul class="docs-nav-list">
          <li><a href="#preferences">Preferences</a></li>
          <li><a href="#updates">Updates</a></li>
          <li><a href="#privacy">Privacy &amp; Data</a></li>
          <li><a href="#keyboard-shortcuts">Keyboard Shortcuts</a></li>
        </ul>
      </div>
    </aside>

    <!-- Main Content Area -->
    <article class="docs-body">

      <!-- SECTION: THE LAN LAYER -->
      <section id="the-lan-layer" class="docs-section">
        <h2>🔗 The LAN Layer: Leading Your Team</h2>
        <p><em>The Engineering Protocol Stack</em> organizes engineering leadership into three layers named after the systems they resemble: <strong>CPU</strong> (managing yourself), <strong>LAN</strong> (leading your team), and <strong>WAN</strong> (connecting outward). Each layer has its own protocols, and the book is explicit about why the layers must not be confused: a team communication problem is not fixed with a personal productivity trick, for the same reason a routing problem is never solved by reinstalling the operating system.</p>

        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Part II — LAN (Chapters 6–10.1)</div>
          <p><em>"A team is not a group of people who work together. A team is a group of people who trust each other."</em> — Simon Sinek, quoted at the opening of Part II. The book adds that a team which is not clear about priorities, agreements, and principles "is just a group of people working together."</p>
        </div>

        <p>The LAN layer covers the people closest to you: how they communicate, grow, take on roles, and build the trust that turns a group of individuals into a team. Part II walks through it in five moves, and Trustline gives each move a place to live:</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Book chapter</th>
              <th>The protocol</th>
              <th>Where it lives in Trustline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Chapter 6 — Identifying Team Status</strong></td>
              <td>See each person through role, skills, and personality, and revisit the picture on a cadence.</td>
              <td><a href="#team-roster">Team roster</a>: roles filled, unfilled suggested roles, single points of failure.</td>
            </tr>
            <tr>
              <td><strong>Chapter 7 — Team Roles</strong></td>
              <td>Roles are about clarity, balance, and responsibility, not status.</td>
              <td>The role each person plays on a team, kept separately from their job title and career position.</td>
            </tr>
            <tr>
              <td><strong>Chapter 8 — Career Path</strong></td>
              <td>A visible path of positions, levels, and trust, with explicit promotion criteria.</td>
              <td><a href="#career-path">Career path canvas</a>.</td>
            </tr>
            <tr>
              <td><strong>Chapters 9 and 9.1 — Onboarding and Communication</strong></td>
              <td>A deliberate path for new joiners, and 1:1s that serve the person rather than the status report.</td>
              <td><a href="#sessions">One-to-one sessions</a> and <a href="#team-agreements">working agreements</a>.</td>
            </tr>
            <tr>
              <td><strong>Chapter 10 — Team Management</strong></td>
              <td>Five dysfunctions, Team Topologies, 1-on-1s and feedback loops, and team health checks.</td>
              <td>Sessions, decisions, <a href="#team-health">health checks</a>, <a href="#team-experiments">experiments</a>, <a href="#team-scoreboard">scoreboard</a>, and <a href="#team-interactions">interactions</a>.</td>
            </tr>
          </tbody>
        </table>

        <h3>How Trustline relates to Threadline</h3>
        <p>Threadline protects your attention; Trustline protects your relationships. They share a design language and a privacy model, and they are linked by a single, deliberately small bridge: the action items you own in one-to-ones can be handed to Threadline's Inbox as plain files (see <a href="#preferences-handoff">Threadline hand-off</a>). The apps share no process, database, or network call. A commitment you make to a report in Trustline becomes a task you process in Threadline, which is exactly how the book wants it: the commitment is made at the LAN layer and kept at the CPU layer.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Shell-direct-reports-overview.png' | relative_url }}" alt="Trustline main window with the Direct reports section open and a scheduled one-to-one session for Mara Lindqvist displayed">
          <figcaption>The Trustline window: an icon rail on the left to choose a section, a sidebar listing that section's records, and a main pane that reads like a note.</figcaption>
        </figure>
      </section>

      <!-- SECTION: LAN LAYER CHECK -->
      <section id="layer-check" class="docs-section">
        <h2>✅ The LAN Layer Diagnostic</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10.1 — Layer check: LAN</div>
          <p><em>"Use this as a quick diagnostic, not as a scorecard. A team does not need to be perfect before it can improve, but it does need an honest picture of where it is."</em></p>
        </div>

        <p>The book closes Part II with eight statements. Read them with your team in mind; answer honestly. The table that follows maps each statement to the Trustline features that support it, and says plainly where the app does not, because a tool that claims to solve a statement it cannot touch is another job to maintain.</p>

        <ul class="check-list">
          <li>We have a shared understanding of the team's purpose, priorities, and current constraints.</li>
          <li>People know what they own, where they contribute, and where they depend on others.</li>
          <li>We can discuss problems, disagreement, and mistakes without turning them into personal attacks.</li>
          <li>New team members have a deliberate onboarding path, not just a collection of links and meetings.</li>
          <li>People can see how their skills, responsibilities, and scope can grow over time.</li>
          <li>Regular 1-on-1s and feedback conversations lead to clear follow-up actions.</li>
          <li>We make team health visible through recurring conversations or checks, not only when delivery is already failing.</li>
          <li>Our rituals, roles, and processes help the team collaborate instead of adding ceremony.</li>
        </ul>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Statement</th>
              <th>What Trustline gives you</th>
              <th>What stays with you</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Shared purpose, priorities, constraints</strong></td>
              <td>A team's <em>purpose</em> (set when you <a href="#teams">add the team</a> and editable under Team settings), its <a href="#team-agreements">working agreements</a>, and the <a href="#team-scoreboard">scoreboard</a> of numbers the whole team can recite.</td>
              <td>Agreeing the priorities themselves with the team. The app records them; it does not decide them.</td>
            </tr>
            <tr>
              <td><strong>Ownership and dependencies</strong></td>
              <td>The <a href="#team-roster">roster</a> lists each person's role on the team, flags unfilled suggested roles and single points of failure, and <a href="#team-interactions">interactions</a> record how two teams are meant to work together.</td>
              <td>Naming roles honestly. The app counts people per role; it cannot tell you whether the role is real.</td>
            </tr>
            <tr>
              <td><strong>Disagreement without personal attacks</strong></td>
              <td>Working agreements for the rules of respectful debate, a <a href="#team-decisions">decisions log</a> so a disagreement ends in something written, and the <em>Feedback exchange</em> slot in every session.</td>
              <td>The conversation. Trustline keeps the record, never the courage.</td>
            </tr>
            <tr>
              <td><strong>A deliberate onboarding path</strong></td>
              <td>Indirect only: a weekly <a href="#direct-reports">cadence</a> for a new joiner, the <em>Career development</em> slot for the 30/60/90 conversations, working agreements as the written "how we work", and the career path as the answer to "what does good look like here".</td>
              <td>The onboarding plan itself. Trustline has no onboarding module; the 30/60/90 plan from Chapter 9 remains a document you keep.</td>
            </tr>
            <tr>
              <td><strong>Visible growth</strong></td>
              <td>The <a href="#career-path">career path canvas</a>: positions, levels, trust tiers, promotion criteria, and the routes between positions, exportable for a calibration meeting.</td>
              <td>The leveling assessment (self, manager, peers) from Chapter 8. The app stores the ladder and each person's place on it, not the evidence.</td>
            </tr>
            <tr>
              <td><strong>1-on-1s lead to follow-up</strong></td>
              <td>Action items with an owner, carried forward until done, shown at the top of the next session. The <a href="#sessions">fixed five-part agenda</a>. Handing your own items to Threadline.</td>
              <td>Doing the follow-up, and the discipline to hold the session on its cadence.</td>
            </tr>
            <tr>
              <td><strong>Health made visible</strong></td>
              <td>The <a href="#team-health">health check</a> with a due-date prompt, a trend line for each of ten themes, and <a href="#team-experiments">experiments</a> that answer what the check found.</td>
              <td>Running the session with the team. The app records scores; the conversation produces them.</td>
            </tr>
            <tr>
              <td><strong>Rituals help instead of adding ceremony</strong></td>
              <td>Every ritual is optional and local. Nothing nags except one soft "a check is due" line. The <a href="#team-page">team page</a> shares the team's side without exposing individuals.</td>
              <td>Retiring a ritual that no longer pays for itself.</td>
            </tr>
          </tbody>
        </table>

        <p>The book's advice if several answers are "not yet" is not to redesign everything at once: start with one shared agreement. In Trustline terms, that is usually the smallest first step: add your direct reports, schedule the first one-to-one, and write one line in a team's working agreements.</p>
      </section>

      <!-- SECTION: GETTING STARTED -->
      <section id="getting-started" class="docs-section">
        <h2>🚀 Getting Started</h2>
        <p>Trustline is <strong>local-first and privacy-native</strong>. There is no account, no sign-up, no backend, and no telemetry. Your notes about people are ordinary files in your own user directory. The subject matter is private notes about identifiable people, which is the strongest argument there is against storing it on someone else's computer.</p>

        <h3>Install</h3>
        <p>Download the installer for your platform from the <a href="{{ '/tools/trustline/' | relative_url }}">Trustline page</a>. It is free and requires no email address.</p>
        <ul>
          <li><strong>macOS:</strong> a universal build for Intel and Apple silicon. It is signed and notarised by Apple, so it opens without a warning.</li>
          <li><strong>Windows:</strong> Windows 10 or later, 64-bit. The installer is not yet signed with a paid developer certificate, so Windows will say the publisher cannot be verified. Choose <strong>More info</strong>, then <strong>Run anyway</strong>.</li>
          <li><strong>Linux:</strong> an AppImage for Ubuntu 22.04 and equivalents, or a <code>.deb</code> package for Debian 12+, Ubuntu 22.04+, and derivatives.</li>
        </ul>
        <p>The window opens at 1100 by 720 pixels and cannot be made smaller, so the team header, the tab row, and the cards keep their full layout.</p>

        <h3>First launch</h3>
        <p>Trustline opens with no onboarding sequence and no sample data. The main pane reads <em>"Select a direct report on the left, or add your first one, to start a 1-on-1."</em></p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Start-first-launch-empty.png' | relative_url }}" alt="Trustline on first launch with an empty Direct reports list and a prompt to add the first direct report">
          <figcaption>First launch on a clean install: an empty roster and one instruction.</figcaption>
        </figure>

        <p>The order in which things depend on one another is worth knowing, because the app enforces it with hints rather than errors:</p>
        <ol>
          <li><strong>Define your career path first.</strong> Every direct report is linked to a position on the ladder, so the <em>Add report</em> form tells you <em>"Define a position on the career path first — every report needs one to link to"</em> until at least one position exists. This is Chapter 8's logic made literal: trust is read from the position, never typed onto a person.</li>
          <li><strong>Add your direct reports.</strong> One entry per person who reports to you.</li>
          <li><strong>Schedule the first one-to-one</strong> from a report's page.</li>
          <li><strong>Group reports into teams</strong> once you want the team-level rituals. A team is built from the people who report to you, so the <em>Add team</em> form waits for at least one report.</li>
        </ol>

        <h3>The window at a glance</h3>
        <p>The narrow <strong>activity bar</strong> on the far left picks which section's data you are working on. Its three sections are <strong>Direct reports</strong>, <strong>Career path</strong>, and <strong>Teams</strong>; two buttons sit lower down. <strong>Help</strong> (a question-mark icon) sits above the footer divider and opens this user guide in your browser, and <strong>Preferences</strong> (the gear) sits in the footer, level with the sidebar's own footer. The <strong>sidebar</strong> lists that section's records and holds its "Add" forms. The <strong>main pane</strong> shows whichever record you have selected.</p>

        <h3>Where your data lives</h3>
        <p>Everything is stored in your operating system's standard application-data folder, in a folder named <code>trustline</code>:</p>
        <ul>
          <li><strong>macOS:</strong> <code>~/Library/Application Support/trustline</code></li>
          <li><strong>Windows:</strong> <code>%APPDATA%\trustline</code></li>
          <li><strong>Linux:</strong> <code>~/.local/share/trustline</code></li>
        </ul>
        <p>You can choose a different location in <a href="#preferences-data">Preferences → Data</a>. The files are readable without the app: each one-to-one is a Markdown file, and the rest are plain JSON. <a href="#privacy">Privacy &amp; Data</a> lists them.</p>

        <h3>Light, dark, or the system's choice</h3>
        <p>Trustline follows Obsidian's three-way choice: <strong>Adapt to system</strong>, <strong>Light</strong>, or <strong>Dark</strong>. Change it in <a href="#preferences-appearance">Preferences → Appearance</a>; it applies immediately, and in the "Adapt to system" setting it follows the operating system live.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Start-dark-theme.png' | relative_url }}" alt="Trustline in dark theme with the Direct reports section open and a one-to-one displayed">
          <figcaption>The same window in the dark theme. Every colour in the app is a theme token, so nothing is hard-coded to one mode.</figcaption>
        </figure>
      </section>

      <!-- SECTION: DIRECT REPORTS -->
      <section id="direct-reports" class="docs-section">
        <h2>👥 Direct Reports</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 6 — Identifying Team Status, and Chapter 8 — Career Path</div>
          <p><em>"The question to ask isn't 'what's their role?' It's 'what would break if they were out for a month, and who else could catch it?'"</em> (Chapter 6). And from Chapter 8, the question that decides a level: Junior, <em>"Can I trust them to deliver a clear task correctly?"</em> Mid, <em>"Can I trust them with a problem, not just a task?"</em> Senior, <em>"Can I trust them to guide others and improve the system over time?"</em></p>
        </div>

        <p>The <strong>Direct reports</strong> section lists the people who report to you. Each row shows an initials avatar, the name, and a second line with the person's role and one-to-one cadence, for example <em>Payments Engineer · biweekly</em>. The avatar colour is fixed by the person, so the same report is always the same colour.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-roster-and-header.png' | relative_url }}" alt="Direct reports sidebar listing five people, with Mara Lindqvist selected and her header showing role, trust tier, cadence and email">
          <figcaption>The roster and a selected report's header. Trust tier is read from the career path position, never typed onto the person.</figcaption>
        </figure>

        <h3>Adding a report</h3>
        <p>Open <strong>Add report</strong> at the foot of the sidebar. The form asks for:</p>
        <ul>
          <li><strong>Name:</strong> required.</li>
          <li><strong>Position on your career path:</strong> required. A drop-down of the positions you defined, each shown with its trust tier, such as <em>Senior Software Engineer — Mid</em>. This is where the person stands on the ladder.</li>
          <li><strong>Role:</strong> required, free text. Choosing a position fills this in with the position's title, and you can overwrite it. Chapter 6 draws the distinction that this field exists for: <em>"Titles drift."</em> The position is the formal rung; the role is what the person actually does, such as <em>Payments Engineer</em> or <em>Platform Engineer</em>.</li>
          <li><strong>Email (optional):</strong> used to send the person the agenda before a one-to-one, and to recognise their reply. Without it, the report works fully but <em>Send agenda</em> is replaced by a hint to add an address.</li>
          <li><strong>Level (optional):</strong> available only when the chosen position has levels. The options read <em>Level N</em>, followed by the level's description, plus <em>no specific level</em>.</li>
          <li><strong>Cadence:</strong> <em>Weekly</em> (the default), <em>Biweekly</em>, or <em>Monthly</em>. It decides when the next session is proposed (see <a href="#sessions">Sessions</a>).</li>
        </ul>
        <p>The book's guidance on rhythm is clear: <em>"Weekly or bi-weekly is ideal—consistency builds psychological safety and prevents the meeting from becoming a status update."</em> Monthly is available, but treat it as the exception, and make sure the rhythm you choose is one you will keep. A cancelled one-to-one, the book warns, signals that your team is not the priority.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-add-report-form.png' | relative_url }}" alt="Add report form open in the sidebar with the position picker expanded showing the four career path positions">
          <figcaption>The Add report form with the position picker open. Add and Cancel sit at the foot; Escape also cancels and clears the fields.</figcaption>
        </figure>

        <h3>The report's page</h3>
        <p>Selecting a report opens their page. The header shows the name, then a line such as <em>Payments Engineer (Level N) · Mid trust · biweekly cadence</em> (the level appears when one is set), and the email address if one is on file. Three buttons sit beside it: <strong>Edit</strong>, <strong>Export this report's data</strong>, and <strong>Delete report</strong>. Below the header are the session picker and the current session, covered in the next section.</p>

        <h3>Editing a report</h3>
        <p><strong>Edit</strong> replaces the page with a form titled <em>Edit &lt;name&gt;</em> carrying the same six fields. A promotion is recorded here: change the <strong>Position</strong> (and <strong>Level</strong>) and the trust tier shown on the page changes with it, because it is always read through the position. The form ends with <strong>Save</strong>, <strong>Cancel</strong>, and <strong>Delete report</strong>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-edit-report-form.png' | relative_url }}" alt="Edit Mara Lindqvist form showing name, position, role, email, level and cadence fields with Save, Cancel and Delete report buttons">
          <figcaption>Editing a report. Changing the position is how a promotion enters the record.</figcaption>
        </figure>

        <h3>Deleting a report, and getting them back</h3>
        <p>Deleting never destroys anything immediately. The confirmation offers three choices:</p>
        <ul>
          <li><strong>Cancel:</strong> nothing happens. The dialog also closes on Escape or a click outside it.</li>
          <li><strong>Export first:</strong> opens the folder picker and saves a plain-Markdown copy of the report's record and every session (the same export as <a href="#exports-report">Export this report's data</a>), then deletes. If you cancel the picker or the export fails, nothing is deleted and Trustline says so.</li>
          <li><strong>Delete:</strong> moves the report to the Trash.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-delete-dialog.png' | relative_url }}" alt="Delete Owen Castellanos confirmation dialog offering Cancel, Export first and Delete">
          <figcaption>The delete confirmation. Because the action is destructive, focus starts on Cancel so a stray Enter cannot delete anything.</figcaption>
        </figure>

        <p>A deleted report leaves the roster, and is taken off every team they were on. A toast then reads <em>"&lt;name&gt; moved to Trash."</em> with an <strong>Undo</strong> button that stays for fifteen seconds. After that, the report waits in <a href="#preferences-trash">Preferences → Data → Trash</a> for 30 days, together with their sessions and team memberships, and can be restored from there. Restoring brings back all three.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-undo-toast.png' | relative_url }}" alt="Toast reading Noor Haddadi moved to Trash with an Undo button in the corner of the window">
          <figcaption>The Undo toast after a delete: fifteen seconds to change your mind without opening Preferences.</figcaption>
        </figure>
      </section>

      <!-- SECTION: SESSIONS -->
      <section id="sessions" class="docs-section">
        <h2>🗓️ One-to-One Sessions &amp; Action Items</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — 1-on-1s &amp; Feedback Loops</div>
          <p><em>"Structure beats spontaneity."</em> The chapter asks for a template that keeps track of previous meetings while listing what both people want to talk about. And: <em>"Document action items at the end of every session and review them next time—accountability flows both ways."</em></p>
        </div>

        <p>Every report has a history of sessions, one per one-to-one. A session is a Markdown file made of a fixed agenda and a list of action items, so the record stays readable long after you stop using any particular tool.</p>

        <h3>Scheduling a session</h3>
        <p>A report with no sessions shows <em>"No 1-on-1s recorded yet with &lt;name&gt;."</em> and a <strong>Schedule next 1-on-1</strong> button. The first session is dated today. When the newest session is complete, the page tells you so, for example <em>"The last 1-on-1 with Priya Raghunathan (2026-09-08) is complete."</em>, and offers the same button.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-schedule-next-nudge.png' | relative_url }}" alt="Priya Raghunathan's page showing that the last one-to-one is complete, with a Schedule next 1-on-1 button">
          <figcaption>The nudge after a completed session. Nothing is scheduled until you press the button.</figcaption>
        </figure>

        <p>The next session is dated the <em>later of</em> today and the last session plus the report's cadence (7 days for weekly, 14 for biweekly, 30 for monthly). It is never earlier than the person's normal rhythm, and it is not pushed further out just because you are running late. Every <em>open</em> action item from the previous session is carried into the new one; finished items are not.</p>

        <h3>The session page</h3>
        <p>When a report has more than one session, a picker above the session lists them all, newest first, as <em>date · status</em>, for example <em>2026-09-29 · scheduled</em>. A session is either <strong>scheduled</strong> or <strong>completed</strong>. Choose another to read the history.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-session-picker.png' | relative_url }}" alt="Session picker open on Mara Lindqvist's page listing a scheduled session on 2026-09-29 and a completed session on 2026-09-15">
          <figcaption>The session picker: the whole history of one relationship, newest first.</figcaption>
        </figure>

        <p>An open session has three blocks and a row of buttons.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-active-session-agenda.png' | relative_url }}" alt="Mara Lindqvist's scheduled session for 2026-09-29 showing the Send agenda button, the action items and the five agenda categories with prepared notes">
          <figcaption>A scheduled session with its agenda prepared before the meeting, which is the realistic state and the reason <em>Send agenda</em> exists.</figcaption>
        </figure>

        <h3>The five-part agenda</h3>
        <p>The agenda is always the same five categories, in the same order, because structure is what keeps a one-to-one from drifting into a status meeting. They are the book's own framework:</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Agenda category</th>
              <th>What the book says it is for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Personal check-in</strong></td>
              <td>Build trust with genuine conversation beyond work. <em>How are they really doing?</em> (The book suggests 5–10 minutes.)</td>
            </tr>
            <tr>
              <td><strong>Progress &amp; blockers</strong></td>
              <td>Review current work, but focus on removing obstacles, not micromanaging details. (About 10 minutes.)</td>
            </tr>
            <tr>
              <td><strong>Feedback exchange</strong></td>
              <td>A two-way street: give specific feedback and invite theirs on your leadership. Pair it with the SBI model (Situation, Behavior, Impact) from the same chapter. (About 10 minutes.)</td>
            </tr>
            <tr>
              <td><strong>Career development</strong></td>
              <td>Long-term goals, skill gaps, and learning opportunities. <em>"This separates great managers from task managers."</em> (5–10 minutes.)</td>
            </tr>
            <tr>
              <td><strong>Open topics</strong></td>
              <td>Their space to raise anything. Listen 80% of the time. (5–10 minutes.)</td>
            </tr>
          </tbody>
        </table>

        <p>Each category shows the notes already recorded under it, then an empty field reading <em>"Add a note for this session…"</em>. A note typed there is saved under that category. A note that came from the person's own emailed reply is marked <em>(from their reply)</em> and set apart with a quoted-reply rail, because it is a quote, not your shorthand. The book is just as clear about what a one-to-one must not become: a project status meeting, a cancelled slot when things get busy, or a conversation in which you do more than 20% of the talking.</p>

        <h3>Saving and closing</h3>
        <ul>
          <li><strong>Save notes</strong> writes the agenda notes you typed, the new action items, and any boxes you ticked, and leaves the session open.</li>
          <li><strong>Save &amp; close session</strong> does the same and marks the session <em>completed</em>. A session with nothing written in the agenda cannot be closed: a session with zero notes was never run, it was skipped.</li>
          <li><strong>Export</strong> opens the menu described in <a href="#exports">Exports &amp; Email</a>.</li>
        </ul>

        <h3>Action items</h3>
        <p>The <strong>Action items</strong> block lists every commitment, each with a checkbox, its description, and an owner label: <em>you</em> or <em>them</em>. The book is explicit that commitments are not only the report's to keep, and the owner field is how Trustline honours that.</p>
        <p>To add one, type in the <em>New action item…</em> field, choose <em>Owner: them</em> (the default) or <em>Owner: you</em>, and press the <strong>+</strong> button or <kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd>. The field grows to fit several lines, and line breaks are kept. A new item appears in the list marked <em>(new)</em> and is stored when you press <strong>Save notes</strong> or <strong>Save &amp; close session</strong>.</p>
        <p>Tick a box to mark an item done, then save. A saved, finished item is locked, and it is not carried into the next session. An item that is still open appears again at the top of the next one, which is how last time's commitments show up this time.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-action-items.png' | relative_url }}" alt="Action items block with two existing items, one new item marked as new, and the new action item field with the owner drop-down set to Owner: you">
          <figcaption>Adding an action item. The owner is chosen per item, and open items follow the relationship from session to session.</figcaption>
        </figure>

        <h3>Reading a completed session</h3>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-completed-session.png' | relative_url }}" alt="Mara Lindqvist's completed session from 2026-09-15 with agenda notes under four categories and one finished action item">
          <figcaption>A completed session from the picker: what was said, what was agreed, and what is finished.</figcaption>
        </figure>
      </section>

      <!-- SECTION: REPLIES -->
      <section id="replies" class="docs-section">
        <h2>📬 Sending the Agenda &amp; Checking for Replies</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Agenda Framework, and Chapter 9.1 — Communication</div>
          <p><em>"Create a shared agenda where both of you contribute topics before the meeting."</em> Chapter 10 asks for a template that keeps track of previous meetings while listing what both people want to talk about. Chapter 9.1 adds that a one-to-one is the place to talk about <em>the person</em>, which is only possible if they have a chance to say so first.</p>
        </div>

        <p>The email relay lets the agenda be shared before the meeting and lets the person's proposals come back into the session. It is optional, it runs through the mail accounts you configure yourself, and it is off until you set it up in <a href="#preferences-email">Preferences → Email relay</a>.</p>

        <h3>Send agenda</h3>
        <p>At the top of an open session, <strong>Send agenda</strong> emails the report the current agenda. The email is titled <em>"Agenda for our 1-on-1 on September 29"</em> (for that session's date), greets the person by name, and lists the five categories with whatever you have already written under each, or <em>"(nothing noted yet)"</em>. It ends by inviting a reply, asking for this shape so it can be read cleanly:</p>
        <pre><code># Answer

Your message here.

- New topic 1
- New topic 2</code></pre>
        <p>Once sent, the button reads <strong>Resend agenda</strong> and a line beside it says <em>Sent to &lt;address&gt;</em>. If the report has no email address on file, the block shows <em>"Add an email address to this report to send them the agenda."</em> instead. The agenda email is never signed with the Trustline mark: the reply has to stay in a format the app can read back.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Replies-send-agenda-block.png' | relative_url }}" alt="Top of Mara Lindqvist's session showing the Send agenda button above the action items">
          <figcaption>The Send agenda block. It is available only for reports with an email address on file.</figcaption>
        </figure>

        <h3>Check for replies</h3>
        <p>The circular-arrows button in the Direct reports header, <strong>Check for replies</strong>, looks in your mailbox for answers to agendas you sent. It needs the optional IMAP settings (see <a href="#preferences-email">Email relay</a>). While it runs, a toast reads <em>"Checking for replies…"</em>; it then becomes one of:</p>
        <ul>
          <li><em>"No new replies."</em></li>
          <li><em>"Added N proposed topics."</em> (or <em>topic</em> for one)</li>
          <li>A plain-language failure with a <strong>Try again</strong> button, for example after a dropped connection.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Replies-check-for-replies-button.png' | relative_url }}" alt="Direct reports sidebar header with the Check for replies button highlighted and its tooltip visible">
          <figcaption>The Check for replies button, in the sidebar header.</figcaption>
        </figure>

        <p>A reply is accepted only when it clears two checks. First, it must belong to the thread of an agenda this app sent. Second, its sender must be the address recorded for that report. A message that fails either test is skipped silently, not filed under the person's name, because a note in this record reads as that person's own words and a forged one would corrupt it permanently. A dropped topic is a nuisance you can fix by asking again.</p>
        <p>An accepted reply is read as follows. If it contains a line reading <code># Answer</code>, only what follows that line is used. Paragraphs made entirely of list items (<code>-</code>, <code>*</code>, or <code>•</code>) become one topic per item; any other paragraph becomes a single topic; and common "sent from my phone" signature lines are dropped. Each topic is filed under <strong>Open topics</strong> and marked <em>(from their reply)</em>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Replies-reply-notes-in-agenda.png' | relative_url }}" alt="Agenda block in which notes contributed by the report are marked from their reply and set apart with a quoted rail">
          <figcaption>Topics that came from the person's own reply, kept visibly apart from the manager's notes.</figcaption>
        </figure>
      </section>

      <!-- SECTION: EXPORTS -->
      <section id="exports" class="docs-section">
        <h2>📤 Exports &amp; Email</h2>
        <p>Trustline exports at four scales: one session, one report, the career path, and one team. (The whole-data export and backup are in <a href="#preferences-backup">Preferences</a>.) Nothing is uploaded anywhere; each export is a file or a folder you choose.</p>

        <h3 id="exports-session">Exporting a session</h3>
        <p>The <strong>Export</strong> menu, beside <em>Save notes</em> at the foot of an open session, turns the session you are looking at into a file. It has four actions:</p>
        <ul>
          <li><strong>Save as Markdown</strong> and <strong>Save as PDF</strong> open the system's save dialog, and a short <em>Saved.</em> appears beside the button.</li>
          <li><strong>Email as Markdown</strong> and <strong>Email as PDF</strong> ask <em>"Send to this email address:"</em>, pre-filled with the report's address (you may enter another), and send the file as an attachment through your configured relay, then confirm <em>Sent to &lt;address&gt;.</em></li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Exports-session-export-menu.png' | relative_url }}" alt="Export menu open on a session showing Save as Markdown, Save as PDF, Email as Markdown and Email as PDF">
          <figcaption>The session Export menu: the same rendering whether you save it or send it.</figcaption>
        </figure>

        <p>PDFs are set in an embedded Inter typeface, so extended Latin, Greek, and Cyrillic names survive. A character the font cannot draw, such as an emoji, appears as a diamond (◇) rather than disappearing, and Trustline tells you when that happened. Open action items have an empty box and finished ones a ticked box. The look of the PDF follows <a href="#preferences-appearance">Preferences → Appearance → PDF export theme</a>. An emailed export can carry the Trustline mark and a line of credit, or go as plain text, depending on the <em>Signature</em> setting under Email relay.</p>

        <h3 id="exports-report">Exporting a report's data</h3>
        <p><strong>Export this report's data</strong>, in the report header, hands you everything Trustline holds about one person, for example to answer a data access request. Choose a folder; Trustline creates a subfolder named after the report's email address (or their identifier if they have none) containing <code>report.md</code>, with their name, role, position, level, trust tier, email, cadence, and the teams they are on with their role in each, plus one Markdown file per session. A toast confirms <em>"Exported &lt;name&gt;'s record and N sessions to &lt;folder&gt;."</em> Exporting again overwrites the same file names. Team-level records are not linked to a person and stay out of this export.</p>

        <h3>Exporting the career path and a team page</h3>
        <p>The career path exports as Markdown or PDF from its own <strong>Export</strong> menu (see <a href="#career-export">Career path</a>), and a team's shared side exports as one Markdown file (see <a href="#team-page">Team page export</a>).</p>
      </section>

      <!-- SECTION: CAREER PATH -->
      <section id="career-path" class="docs-section">
        <h2>🧭 The Career Path Canvas</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 8 — Career Path</div>
          <p><em>"A career path is the roadmap that helps anyone in a company understand how they can grow over time in skills, responsibilities, and salary."</em> A good one makes explicit the current role, the next possible roles, the skills needed for each step, and the milestones for growth, and it covers both vertical growth and lateral moves. Without it, <em>"people assume they must leave the company to progress."</em></p>
        </div>

        <p>The <strong>Career path</strong> section is where you define the ladder your team grows on. Two ideas from Chapter 8 shape it. First, a career path is a <strong>graph, not a line</strong>: a senior engineer may become a staff engineer <em>or</em> move into engineering management, both legitimate, from the same position. Second, <strong>trust belongs to the position, not the person</strong>: each position declares a trust tier, and a person's tier is always read through the position they hold. The two can therefore never quietly disagree about how much trust someone has earned.</p>

        <p>With no position selected, the main pane shows the whole ladder as a diagram: a heading <em>Career path</em>, the hint <em>"Click a position to edit it, or drag one to arrange the ladder."</em>, a <strong>Reset layout</strong> button, and the canvas. Each position is a box carrying its title and trust tier, coloured by tier. Arrows run from a position to every position it can be promoted into, and an outline behind a group of boxes is a named track.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-canvas-overview.png' | relative_url }}" alt="Career path canvas showing an Individual contributor track with Software Engineer, Senior Software Engineer and Staff Engineer, and a Leadership track with Engineering Manager, joined by promotion arrows">
          <figcaption>The canvas: the book's own branching ladder, with an individual contributor track, a leadership track, and the routes between positions drawn as arrows.</figcaption>
        </figure>

        <p>The sidebar lists the same positions as rows (title and trust tier), with <strong>Add position</strong> and <strong>Tracks</strong> disclosures below, and an <strong>Export</strong> menu in its header once at least one position exists.</p>

        <h3 id="career-positions">Positions and levels</h3>
        <p>Open <strong>Add position</strong> to define a rung:</p>
        <ul>
          <li><strong>Title:</strong> required, for example <em>Senior Software Engineer L2</em>.</li>
          <li><strong>Trust tier:</strong> <em>Junior — trust with a clear task</em>, <em>Mid — trust with a problem</em> (the default), or <em>Senior — trust to guide others</em>. These are distilled from Chapter 8's three trust tests: a clear task, a problem, and guiding others.</li>
          <li><strong>Core theme (optional):</strong> a short phrase, such as <em>Owning execution</em>.</li>
          <li><strong>Promotion criteria (optional):</strong> what you want to see before promoting out of this position. Chapter 8 asks for observable behaviours, not gut feeling, and also says someone should operate at the next level for two to three months before promotion. The field is where you write that down.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-add-position-form.png' | relative_url }}" alt="Add position form open in the Career path sidebar with title, trust tier, core theme and promotion criteria fields">
          <figcaption>Defining a position. The trust tier is the book's trust test; the criteria are yours.</figcaption>
        </figure>

        <p>Selecting a position, from the sidebar or by clicking its box, opens its editor with a <strong>← View full schema</strong> link back to the canvas. The header reads, for example, <em>Mid trust · rung 2 of 4</em>. The form carries:</p>
        <ul>
          <li><strong>Title</strong> and <strong>Trust tier</strong>, as above.</li>
          <li><strong>Track:</strong> which named track the position sits on, or <em>— no track —</em>. It saves as soon as you change it.</li>
          <li><strong>Core theme</strong> and <strong>Promotion criteria — what you want to see before promoting out</strong>.</li>
          <li><strong>Can promote to:</strong> a checklist of every other position. Tick more than one for a branch point: in the demo ladder, Senior Software Engineer can promote to both Staff Engineer and Engineering Manager. Ticks become the arrows on the canvas.</li>
          <li><strong>Save</strong> stores the form.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-position-editor.png' | relative_url }}" alt="Senior Software Engineer position editor with trust tier Mid, track Individual contributor, and Can promote to ticked for Staff Engineer and Engineering Manager">
          <figcaption>A position with two promotion routes: the book's Staff-or-Management branch.</figcaption>
        </figure>

        <p>Below the form is a <strong>Levels</strong> section. Chapter 8's own example is that "Software Developer" is not one flat rung but three numbered levels, each with its own description and promotion write-up. Each existing level is a small form with a <strong>Description</strong>, a <strong>Promotion criteria — signals, anti-patterns, how to evaluate</strong> field, and its own <strong>Save level N</strong> button. The last form, <strong>Add level N</strong>, appends the next level (<strong>Add level</strong> button). When a position has levels, you can choose one for a report, and it appears in their header.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-levels.png' | relative_url }}" alt="Levels section of the Senior Software Engineer position with two saved levels and a form to add the next one">
          <figcaption>Levels within a position, each with its own description and promotion criteria.</figcaption>
        </figure>

        <h3 id="career-tracks">Tracks</h3>
        <p>A <strong>track</strong> is a named branch of the ladder, such as <em>Individual contributor</em> (<em>Depth of craft, widening scope of influence</em>) or <em>Leadership</em> (<em>Scope shifts from the work to the people doing it</em>). It is drawn as an outline behind its positions on the canvas, and it is how Chapter 8's two-branch diagram is represented.</p>
        <p>Open the <strong>Tracks</strong> disclosure in the sidebar. It lists your tracks, each with its position count (<em>3 positions</em>) and <strong>Move up</strong> and <strong>Move down</strong> arrow buttons that set their order. At the bottom, a form adds one: <strong>Track name</strong> (required) and <strong>What this track is for (optional)</strong>, then <strong>Add track</strong>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-tracks-sidebar.png' | relative_url }}" alt="Tracks disclosure open in the Career path sidebar listing Individual contributor and Leadership with reorder arrows and the add track form below">
          <figcaption>The Tracks disclosure: list, reorder, and add.</figcaption>
        </figure>

        <p>Selecting a track opens its editor: its <strong>Track name</strong> and <strong>What this track is for</strong> with a <strong>Save</strong> button; a <strong>Positions on this track</strong> checklist with <strong>Save positions</strong> (a position sits on one track, so ticking one that is on another moves it, and the list says <em>— on &lt;track&gt;</em> beside it); and a red <strong>Delete track</strong>. Deleting asks <em>"Delete this track? The positions on it stay on the ladder — they just stop being grouped."</em></p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-track-editor.png' | relative_url }}" alt="Track editor for Individual contributor showing name, purpose, a checklist of positions on the track and a Delete track button">
          <figcaption>A track's editor. Tracks are presentation: deleting one never deletes a position.</figcaption>
        </figure>

        <h3 id="career-canvas-controls">Arranging the canvas</h3>
        <p>The canvas lays the ladder out automatically, and you can rearrange it. The arrangement is saved, and the whole diagram refits as the window changes size. In a narrow pane the boxes shrink and drop their trust-tier subtitle; the tier is still conveyed by colour and by the label read to a screen reader.</p>
        <ul>
          <li><strong>Drag a position</strong> to move it. It snaps to an 8-unit grid. Hold <kbd>Alt</kbd> while dragging to place it freely between grid stops. A drag begins only after the pointer moves a few pixels, so a slightly unsteady click still opens the position.</li>
          <li><strong>Drag a track's label</strong> to move the whole track and every position on it together.</li>
          <li><strong>Press <kbd>Esc</kbd> during a drag</strong> to cancel and return the box or track to where it started.</li>
          <li><strong>Reset layout</strong> returns every position to the automatic layout, after confirming <em>"Reset all positions to the automatic layout? Your manual arrangement will be lost."</em> This cannot be undone.</li>
        </ul>
        <p>The canvas is fully operable from the keyboard: every box and every track label is a tab stop. <kbd>Enter</kbd> or <kbd>Space</kbd> opens it, <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> move it by one grid step, and <kbd>Shift</kbd> with an arrow moves it four steps. A burst of key presses is saved once, a fraction of a second after the last one.</p>
        <p>The focused box is outlined by its own ring, drawn in the accent colour just outside its border, so you can always see which position <kbd>Enter</kbd> will open.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-canvas-focused-position.png' | relative_url }}" alt="Career path canvas with the Senior Software Engineer box wrapped in a separate keyboard focus ring outside its border">
          <figcaption>A focused position on the canvas: a separate accent ring sits outside the box's own border, ready for Enter or the arrow keys.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-reset-layout-dialog.png' | relative_url }}" alt="Confirmation dialog asking whether to reset all positions to the automatic layout with a Reset layout button">
          <figcaption>The one confirmation on the canvas: a manual arrangement is the only thing that cannot be recovered.</figcaption>
        </figure>

        <h3 id="career-export">Exporting the career path</h3>
        <p>The <strong>Export</strong> menu in the sidebar header offers <strong>Save as Markdown</strong> and <strong>Save as PDF</strong>, a whole-ladder document you can take into a calibration meeting, a promotion committee, or a conversation with your own manager. A toast confirms <em>"Career path saved as Markdown."</em> (or PDF). Escape closes the menu and returns focus to its button.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-export-menu.png' | relative_url }}" alt="Export menu open in the Career path sidebar header offering Save as Markdown and Save as PDF">
          <figcaption>Exporting the ladder for a calibration conversation.</figcaption>
        </figure>

        <div class="protocol-box amber">
          <div class="protocol-box__title">📖 Book Reference: Chapter 8 — Leveling Your Team Members</div>
          <p><em>"Everyone should be paid in line with their level. New joiners should be hired within the compensation boundaries of the level they are joining."</em> Chapter 8's leveling method (scope, autonomy and impact, assessed by self, manager, and peers, then calibrated) is a practice, not a form. Trustline stores the ladder and each person's place on it; the evidence and the calibration conversation stay with you, and compensation bands are outside its scope.</p>
        </div>

        <p>A shared ladder is also supported: in <a href="#preferences-shared-path">Preferences → Data → Shared career path</a> you can point the career path at a folder shared with other managers, so everyone works from the same definition of what a level means. The book's rule is that a role should mean the same thing in every team.</p>
      </section>

      <!-- SECTION: TEAMS -->
      <section id="teams" class="docs-section">
        <h2>🏢 Teams</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Team Management</div>
          <p><em>"We could say that team management is somehow an art, not in the sense of artistic creation, but in the sense of imagination, intuition, and care."</em> The chapter's practical frame is three questions: what can break a team from within (the five dysfunctions), what can break it from the outside (structure, via Team Topologies), and what habits keep it healthy (1-on-1s, feedback, and regular health checks).</p>
        </div>

        <p>The <strong>Teams</strong> section groups your direct reports into teams and gives each team its own set of records. To create one, open <strong>Add team</strong> in the sidebar and enter a <strong>Name</strong> (required, for example <em>Platform</em>) and an optional <strong>Purpose</strong>. A team can only be made from reports you already have; until you do, the sidebar says <em>"Add a direct report first — a team is built from the people who report to you."</em> The sidebar lists each team with its member count.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-add-team-form.png' | relative_url }}" alt="Add team form open in the Teams sidebar with name and purpose fields above the list of Payments Platform and Checkout Experience">
          <figcaption>Adding a team. The purpose answers the first LAN-layer statement: a shared understanding of why the team exists.</figcaption>
        </figure>

        <p>Selecting a team opens a header with the team's name and purpose, a <strong>Topology</strong> selector, and an <strong>Export team page…</strong> button, above seven tabs: <strong>Roster</strong>, <strong>Working agreements</strong>, <strong>Decisions</strong>, <strong>Health</strong>, <strong>Experiments</strong>, <strong>Scoreboard</strong>, and <strong>Interactions</strong>.</p>

        <h3>Topology</h3>
        <p>Chapter 10's Team Topologies section says: <em>"Structure is not bureaucracy—it is clarity."</em> The <strong>Topology</strong> selector classifies the team as one of the four types the chapter describes:</p>
        <ul>
          <li><strong>Stream-aligned:</strong> cross-functional and end-to-end responsible for a flow of work. The chapter's default: if you build one kind of team well, build this one.</li>
          <li><strong>Platform:</strong> reduces the cognitive load of stream-aligned teams through internal tools and shared capabilities.</li>
          <li><strong>Enabling:</strong> temporary by design; helps another team build a capability, then steps back.</li>
          <li><strong>Complicated subsystem:</strong> owns an area that needs deep specialist expertise. Create one only when the complexity demands it.</li>
        </ul>
        <p>The default is <em>Not classified</em>. Classifying a team is a deliberate act, and the app does not assume a type for you. The choice saves immediately.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-topology-picker.png' | relative_url }}" alt="Team header for Payments Platform with the Topology drop-down open showing Not classified, Stream-aligned, Platform, Enabling and Complicated subsystem">
          <figcaption>The team header: topology on the left, the team-page export on the right.</figcaption>
        </figure>

        <h3 id="team-roster">Roster</h3>
        <div class="protocol-box amber">
          <div class="protocol-box__title">📖 Book Reference: Part II Introduction, Chapter 6 — Building a Simple Status Snapshot, and Chapter 7 — Team Roles</div>
          <p><em>"You cannot improve what you cannot see, and you cannot measure progress without a clear baseline."</em> Chapter 6's snapshot, one row per person, already tells you more than most org charts: in its example, one person is <em>"a single point of failure."</em> Part II's introduction adds that, in a healthy team, roles <em>"are not about status; they are about clarity, balance, and responsibility."</em></p>
        </div>

        <p>The <strong>Roster</strong> tab is the team's status snapshot. It opens with, when it applies, a reminder about the next health check (see <a href="#team-health">Health</a>), then three derived lists, then a four-part summary of the team's rituals, then the members.</p>
        <p>The three lists are computed from the roles you give people, and nothing in them is stored, so they cannot go stale:</p>
        <ul>
          <li><strong>Roles filled:</strong> every distinct role on the team. <em>"No roles yet."</em> if empty.</li>
          <li><strong>Unfilled suggested roles:</strong> which of seven suggested roles nobody holds: <em>Tech Lead</em>, <em>Software Engineer</em>, <em>Product</em>, <em>Design</em>, <em>QA</em>, <em>Data</em>, and <em>Platform/DevOps</em>, in that order. These come from the cross-functional roles Chapter 6 names (product, engineering, QA, UX, DevOps, and data) plus the tech lead. They are a prompt, not a rule: a team that leaves some empty is not broken, it simply knows what it has chosen not to staff. Matching ignores capitalisation and spacing.</li>
          <li><strong>Single points of failure:</strong> any role held by exactly one person. This is Chapter 6's question, <em>what would break if they were out for a month</em>, asked automatically.</li>
        </ul>
        <p>In the demo data, Payments Platform names three roles of its own (<em>Service owner</em>, <em>Technical direction</em>, and <em>On-call lead</em>), each held by exactly one person, so all three appear under <em>Single points of failure</em>. Checkout Experience has two people sharing the role <em>Engineer</em>, so it has no single point of failure on that role.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-roster-tab.png' | relative_url }}" alt="Payments Platform roster tab showing a health check due reminder, roles filled, unfilled suggested roles, single points of failure and the ritual summary">
          <figcaption>The Roster tab: the team's snapshot at a glance, and the one soft reminder the app shows.</figcaption>
        </figure>

        <p>The ritual summary beneath it shows four short groups: <strong>Last health check</strong> (<em>date · N of 5 on average</em>, or <em>Never checked.</em>), <strong>Active experiments</strong> (each with its review date, marked <em>overdue</em> when past), <strong>Scoreboard</strong> (<em>metric: now → target</em>), and <strong>Interactions</strong> (<em>other team · mode</em>).</p>

        <p>Under the summary is the member list. Each member row shows an avatar, the name, and <em>job title · career position</em>. A text field holds <strong>the person's role on this team</strong> (changes when you leave the field), and a <strong>Remove</strong> button takes them off the team after asking <em>"Remove from team?"</em>. Removing keeps them as a direct report. Three fields are deliberately distinct: the <em>position</em> is their rung on the ladder, the <em>job title</em> is what their employer calls them, and the <em>team role</em> is the part they play here.</p>
        <p>The <strong>Add member</strong> disclosure offers a <strong>Direct report</strong> drop-down (only reports not already on the team) and <strong>Role on this team</strong>, a free-text field that suggests the roles above. <strong>Team settings</strong> holds <strong>Name</strong> and <strong>Purpose</strong> with <strong>Save</strong>, and a red <strong>Delete team</strong> that warns <em>"Its working agreements, decisions log, health checks, experiments, scoreboard and interactions with other teams all go with it. Everyone on it stays one of your direct reports. This can't be undone."</em></p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-roster-members.png' | relative_url }}" alt="Member rows for Mara Lindqvist, Priya Raghunathan and Noor Haddadi each with an editable team role and a Remove button, with the Add member and Team settings disclosures open below">
          <figcaption>Members, their roles on the team, and the Add member and Team settings forms.</figcaption>
        </figure>

        <p>The book is clear that a snapshot is not a photograph but a live feed: revisit it quarterly, after a reorganization, and after a major incident. In practice, that is when you edit roles here.</p>

        <h3 id="team-agreements">Working agreements</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Fear of Conflict and Avoidance of Accountability</div>
          <p><em>"No one should fear conflict if the basic rules of conduct are clear. As the team leader, you should ensure that these rules are explicit, clear, and known by everyone."</em> The accountability checklist adds that <em>"standards (quality, communication, ways of working) are explicit and shared."</em></p>
        </div>

        <p>The <strong>Working agreements</strong> tab is one large free-text field for <em>"how this team works together"</em>, saved as a Markdown file you can read without the app. Press <strong>Save</strong> and a quiet <em>Saved.</em> appears. There is no structure the app looks for: write headings and lists as you see fit. In the demo, Payments Platform records what the team agreed not to do on Fridays, who holds the interrupt shield each week, what the team owns, and how to reach it.</p>
        <p>Working agreements are not part of the team page export, since the file is already yours to share. It is also the natural home for the "how we work" a new joiner reads in their first week.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-working-agreements.png' | relative_url }}" alt="Working agreements tab for Payments Platform showing a Markdown text area with sections on how the team works, what it owns and how to reach it">
          <figcaption>Working agreements: plain Markdown, kept on your machine and readable without Trustline.</figcaption>
        </figure>

        <h3 id="team-decisions">Decisions</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Lack of Commitment</div>
          <p><em>"Make decisions clear and visible: who decided what, by when, and how it'll be communicated, so commitment is unambiguous."</em> The commitment checklist asks that <em>"at the end of discussions, decisions are clearly stated and written down,"</em> and that low scores lead to <em>"visible decision logs"</em> and <em>"disagree and commit."</em></p>
        </div>

        <p>The <strong>Decisions</strong> tab is the team's log. With none yet it reads <em>"No decisions recorded yet. A decisions log is what stops the same argument being had twice."</em> Each entry shows its title, the date it was recorded, what was decided, its context, and its owner. The date is set automatically to the day you record it and does not change when you later edit the entry.</p>
        <p><strong>Record a decision</strong> opens a form with four fields:</p>
        <ul>
          <li><strong>Title:</strong> required.</li>
          <li><strong>What was decided:</strong> required.</li>
          <li><strong>Context (optional) — why this came up:</strong> the reasoning that you would otherwise have to remember.</li>
          <li><strong>Owner (optional) — who follows through:</strong> a name.</li>
        </ul>
        <p>Press <strong>Record</strong>. Each entry has <strong>Edit</strong> (the same form, with <strong>Save</strong> and <strong>Cancel</strong>) and <strong>Delete</strong>, which asks for confirmation because it cannot be undone. In the demo, Payments Platform has recorded <em>"Settlement retries move to an outbox"</em> (owner Mara Lindqvist) and <em>"No new consumers of the legacy ledger view"</em> (owner Priya Raghunathan).</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-decisions.png' | relative_url }}" alt="Decisions tab for Payments Platform listing two decisions with dates, context and owners and Edit and Delete buttons">
          <figcaption>The decisions log: who decided what, why, and who follows through.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-record-decision-form.png' | relative_url }}" alt="Record a decision form open with title, what was decided, context and owner fields and a Record button">
          <figcaption>Recording a decision takes a minute and ends the argument about whether it was ever made.</figcaption>
        </figure>

        <h3 id="team-health">Health</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Team Health Checks</div>
          <p><em>"Most teams only get a real 'health signal' when something already hurts… A team health check is a simple, recurring way to see those signals early, when a small adjustment can still fix them."</em> The book's cadence is every one to three months for stable teams, and the point is to track trends, not perfection: <em>"patterns matter more than absolute colors."</em> Using it to rank teams or to evaluate performance is on the book's list of what not to do.</p>
        </div>

        <p>The <strong>Health</strong> tab holds the team's health checks. At the top, <strong>Check this team</strong> sets the cadence: <em>Every 4 weeks</em>, <em>Every 8 weeks</em> (the default), or <em>Every 12 weeks</em>. The cadence only drives a soft reminder, never a block. When a check is due, a line appears on both the Roster and Health tabs: <em>"Last checked 2026-08-05. This team is checked every 8 weeks, so one is due."</em> or, for a team never checked, <em>"This team has never been checked. Its cadence is every 8 weeks."</em></p>

        <h4>The ten themes</h4>
        <p>Each check scores ten themes from <strong>1 (bad) to 5 (good)</strong>. They follow the book's sample health dimensions (the Lencioni dysfunctions and Team Topologies lenses from Chapter 10) plus two of the Spotify Squad Health Check's own themes:</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Theme in Trustline</th>
              <th>The book's lens</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Psychological safety and trust</strong></td><td>Absence of trust: people feel safe admitting mistakes and asking for help.</td></tr>
            <tr><td><strong>Healthy conflict</strong></td><td>Fear of conflict: we can disagree openly without drama.</td></tr>
            <tr><td><strong>Clarity of direction</strong></td><td>Lack of commitment: clarity and commitment to priorities and decisions.</td></tr>
            <tr><td><strong>Mutual accountability</strong></td><td>Avoidance of accountability: we hold each other to our standards, not just the manager.</td></tr>
            <tr><td><strong>Focus on collective results</strong></td><td>Inattention to results: we care more about team outcomes than individual heroics.</td></tr>
            <tr><td><strong>Flow of work</strong></td><td>Flow and delivery: work moves with reasonable speed and predictability.</td></tr>
            <tr><td><strong>Technical practices</strong></td><td>Technical health: code quality, automation, and debt feel under control.</td></tr>
            <tr><td><strong>Team structure and size</strong></td><td>Team structure: responsibilities and interactions with other teams are clear.</td></tr>
            <tr><td><strong>Learning and growth</strong></td><td>From the Spotify themes: career progression and training received.</td></tr>
            <tr><td><strong>Transparency of information</strong></td><td>From the Spotify themes: transparency.</td></tr>
          </tbody>
        </table>

        <h4>Trend by theme</h4>
        <p>Under the cadence picker, <strong>Trend by theme</strong> lists all ten themes with a small line chart of every score the team has given it and the latest value (<em>4 of 5</em>, or <em>not scored</em>). Until the first check it says <em>"Nothing to trend yet — the first check draws the first point."</em> The charts carry text descriptions for screen readers. This is where the slow decline the book warns about becomes visible while it is still fixable: in the demo, Payments Platform's trust climbs while its flow of work slides.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-health-tab.png' | relative_url }}" alt="Health tab for Payments Platform showing the cadence picker, a trend sparkline for each of ten themes and the list of past checks">
          <figcaption>The Health tab: ten trend lines, each one a score per check, over time.</figcaption>
        </figure>

        <h4>Running a check</h4>
        <p>Open <strong>Run a check</strong>. The form lists the ten themes, each with a 1–5 slider (defaulting to 3), its current value, and an optional <em>Note</em>; below them is an <strong>Overall note (optional)</strong>. Press <strong>Save check</strong>; the check is dated today. The book's session format applies: score individually first, discuss the extremes, and leave with one to three experiments rather than a perfect score. Do the scoring with the team, then enter the result.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-health-run-check-form.png' | relative_url }}" alt="Run a check form with ten theme sliders, optional notes and an overall note field">
          <figcaption>Recording a check: one score and an optional note for each theme.</figcaption>
        </figure>

        <h4>Past checks</h4>
        <p><strong>Past checks</strong> lists every check, newest first, as <em>Health check · N of 5</em> (the average) with its date, the overall note, and each theme's score. Each has <strong>Edit</strong> and <strong>Delete</strong>. Deleting asks first, and any experiments the check prompted stay and simply stop pointing at it.</p>
        <p>Health notes are private to you. They never leave the app unless you export the whole data folder, and they are never part of the team page.</p>

        <h3 id="team-experiments">Experiments</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Goal &amp; Success Criteria, and the 30-Minute Light Version</div>
          <p><em>"Success = we end with 1–3 concrete experiments, owners, and check-in dates, not a perfect score."</em> Define <em>"a concrete experiment… assign an owner and a date when you'll check if it helped."</em> And do not forget it: <em>"add a 5-minute 'check last experiment' slot to the next retro."</em></p>
        </div>

        <p>The <strong>Experiments</strong> tab is where a check's findings become action. It reads, when empty, <em>"Nothing being tried yet. One to three small experiments out of a health check is the usual dose."</em> Active experiments are listed first. Each shows its title and a status badge, a <em>Review &lt;date&gt;</em>, a <em>Review overdue</em> badge once that date has passed with the experiment still active, its <em>Success signal</em>, and, where set, hypothesis, owner, notes, and the health check that prompted it.</p>
        <p>The status can be changed directly on the row, from a drop-down: <em>Planned</em>, <em>In progress</em>, <em>Reviewed — it worked</em>, <em>Reviewed — it didn't</em>, or <em>Cancelled</em>. Each row also has <strong>Edit</strong> and <strong>Delete</strong>. Marking an experiment cancelled keeps the record that it was tried, which is better than deleting it.</p>
        <p><strong>Start an experiment</strong> asks for:</p>
        <ul>
          <li><strong>Title:</strong> required.</li>
          <li><strong>Hypothesis (optional) — what you expect to happen.</strong></li>
          <li><strong>Owner (optional):</strong> a team member, or whoever it is.</li>
          <li><strong>Success signal — how you'll know it worked:</strong> required. The book's guidance is a concrete, observable measure.</li>
          <li><strong>Review date:</strong> required. This is the check-in date the book asks for.</li>
          <li><strong>Notes (optional).</strong></li>
          <li><strong>Prompted by:</strong> offered when creating one, if the team has any checks: link the experiment to the check that suggested it. A link cannot be re-pointed afterwards.</li>
        </ul>
        <p>Press <strong>Start</strong> (or <strong>Save</strong> when editing). In the demo, Payments Platform has three experiments in three states: <em>"Rotate an interrupt shield weekly"</em> is in progress, <em>"Stop deploying on Fridays"</em> is reviewed and worked (it is now a working agreement), and <em>"Hand the ledger service to its consumers"</em> is planned.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-experiments.png' | relative_url }}" alt="Experiments tab for Payments Platform listing three experiments: one in progress, one reviewed and successful, and one planned, each with a success signal and review date">
          <figcaption>Experiments: each answers a health score, has an owner and a review date, and ends in a verdict.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-experiment-form.png' | relative_url }}" alt="Start an experiment form with title, hypothesis, owner, success signal, review date, notes and Prompted by fields">
          <figcaption>Starting an experiment: a hypothesis, a signal, and a date on which to check.</figcaption>
        </figure>

        <h3 id="team-scoreboard">Scoreboard</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Inattention to Results</div>
          <p><em>"Keep a shared scoreboard: define and track collective results so everyone orients to the same outcomes."</em> The checklist asks that <em>"the team has a small set of shared outcome metrics everyone cares about,"</em> and the book's remedy for a low score is to <em>"revisit your shared scoreboard and incentives."</em></p>
        </div>

        <p>The <strong>Scoreboard</strong> tab holds a short list of numbers the whole team can recite, with the hint <em>"A handful the whole team can recite beats a dashboard nobody opens."</em> To keep it short on purpose, it holds up to eight metrics. <strong>Add a metric</strong> asks for:</p>
        <ul>
          <li><strong>Metric:</strong> the name, such as <em>Change failure rate</em>.</li>
          <li><strong>What it measures (optional).</strong></li>
          <li><strong>Where it is now</strong> and <strong>Where it should be:</strong> free text, so a percentage, a duration, and a plain count can sit in the same table.</li>
          <li><strong>Unit (optional):</strong> for example <em>ms</em>, <em>%</em>, <em>per week</em>.</li>
        </ul>
        <p>Each row shows <em>now → target</em> and an <em>Updated &lt;date&gt;</em> that the app sets whenever you save. Rows have <strong>Edit</strong> and <strong>Delete</strong> (<em>"Drop metric?"</em>). In the demo, Payments Platform tracks change failure rate (14%, target under 10%), time to restore (42 min, target under 1 hour), unplanned work (38%, target under 20%), and ledger endpoints handed over (5, target 12).</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-scoreboard.png' | relative_url }}" alt="Scoreboard tab for Payments Platform listing four metrics each with a current value, a target and an updated date">
          <figcaption>The scoreboard: four numbers, each with where it is and where it should be.</figcaption>
        </figure>

        <h3 id="team-interactions">Interactions</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Team Topologies &amp; Structure (The Three Interaction Modes)</div>
          <p><em>"Misusing these modes is one of the most common structural mistakes. A platform team forced into constant collaboration loses its leverage. An enabling team that never steps back creates dependency."</em> The book also says to review interaction modes regularly: <em>"collaboration that was necessary six months ago may now be creating unhealthy dependency."</em></p>
        </div>

        <p>The <strong>Interactions</strong> tab records how two teams are meant to work together. Its hint is exact: <em>"One record per pair of teams, edited from either side and shown on both."</em> An interaction needs two teams, so the tab says so until you have a second one.</p>
        <p><strong>Record an interaction</strong> asks for:</p>
        <ul>
          <li><strong>The other team:</strong> required, chosen from your other teams (fixed once recorded).</li>
          <li><strong>Mode:</strong> <em>Collaboration</em> (work closely for a defined period, expensive and meant to be temporary), <em>X-as-a-Service</em> (one team consumes what the other provides, with minimal back-and-forth, meant to be durable), or <em>Facilitation</em> (one team coaches the other and steps away).</li>
          <li><strong>Notes (optional).</strong></li>
          <li><strong>Review date (optional):</strong> when to ask whether the mode is still right.</li>
        </ul>
        <p>Each row shows the other team's name, its mode, any notes and a <em>Review &lt;date&gt;</em>, with <strong>Edit</strong> and <strong>Delete</strong>. Deleting removes the record from both teams. In the demo, Checkout Experience consumes the payments API from Payments Platform as <em>X-as-a-Service</em>, with a review date of 2026-11-30.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-interactions.png' | relative_url }}" alt="Interactions tab for Checkout Experience showing one record with Payments Platform in X-as-a-Service mode, notes and a review date">
          <figcaption>An interaction between two teams, shown on both of them.</figcaption>
        </figure>
      </section>

      <!-- SECTION: TEAM PAGE EXPORT -->
      <section id="team-page" class="docs-section">
        <h2>📄 Team Page Export</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Communicate Results to Stakeholders Without Exposing Individuals</div>
          <p><em>"Always keep in mind that this is a team exercise, and you are not looking for guilty individuals… present it as a whole and don't point to specific behaviors or individuals."</em></p>
        </div>

        <p>A team page is the part of a team's record that belongs to the team, written as a single Markdown file you can drop into a wiki or repository. In the team header, <strong>Export team page…</strong> opens a small menu with two unticked options and an <strong>Export…</strong> button. Press it, choose a folder, and Trustline writes <code>&lt;team name&gt;.md</code> there and confirms <em>"Team page saved to &lt;path&gt;."</em> Exporting again replaces the same file and touches nothing else in the folder. Escape closes the menu.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-TeamPage-export-menu.png' | relative_url }}" alt="Export team page menu open showing the Include latest health scores and Include career path checkboxes and an Export button">
          <figcaption>The export menu: both optional sections start unticked, because what leaves your private notes is your decision.</figcaption>
        </figure>

        <p><strong>Always included:</strong> the team's name and purpose, the date of export, the members with their roles on the team, the decisions log, the team type and its interactions with other teams (mode and review date), the scoreboard, and the experiments (status, hypothesis, success signal, owner, and review date).</p>
        <p><strong>Included only if you tick it for that export:</strong></p>
        <ul>
          <li><strong>Include latest health scores:</strong> adds a <em>Team health</em> section with the most recent score for each theme and the date it was checked.</li>
          <li><strong>Include career path:</strong> adds the whole career path as a nested section.</li>
        </ul>
        <p><strong>Never included, by design:</strong> anything from your one-to-ones (sessions, agenda notes, action items), a report's email or job title, health-check notes, and experiment or interaction notes. The document has no place to put them, so no setting can leak one.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-TeamPage-exported-markdown.png' | relative_url }}" alt="The exported Payments Platform Markdown file open in a text editor showing members, decisions, team topology, scoreboard and experiments sections">
          <figcaption>An exported team page, opened in a plain text editor: a team's side of the story, ready to share.</figcaption>
        </figure>
      </section>

      <!-- SECTION: PREFERENCES -->
      <section id="preferences" class="docs-section">
        <h2>⚙️ Preferences</h2>
        <p>The gear at the bottom of the activity bar opens <strong>Preferences</strong>, a dialog with four pages: <strong>Appearance</strong>, <strong>Data</strong>, <strong>Email relay</strong>, and <strong>About</strong>. Close it with the <strong>×</strong> in the corner, or by clicking outside it. Most selectors save the moment you change them.</p>

        <h3 id="preferences-appearance">Appearance</h3>
        <ul>
          <li><strong>Base color scheme:</strong> <em>Adapt to system</em>, <em>Light</em>, or <em>Dark</em>. Applies immediately.</li>
          <li><strong>PDF export theme:</strong> which of the app's own looks a session renders into when exported as a PDF, independent of the on-screen scheme: <em>Paper (light)</em>, <em>Circuit (dark)</em>, or <em>Signal (light, cyan accent)</em>.</li>
        </ul>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-appearance.png' | relative_url }}" alt="Preferences Appearance page with the base color scheme selector and the PDF export theme selector">
          <figcaption>Appearance: the on-screen scheme and the PDF theme are set independently.</figcaption>
        </figure>

        <h3 id="preferences-data">Data</h3>
        <p>The Data page is the longest, and holds everything that concerns where your records live and how they leave.</p>

        <h4>Storage location</h4>
        <p>The page shows <em>"Currently storing data at:"</em> and the active folder. To use another, type a path into <strong>Custom location</strong> (leave blank to use the default) and press <strong>Save</strong>; <strong>Reset to default</strong> goes back. A change takes effect at the next launch, and the page says <em>"Restart the app to start using &lt;path&gt;."</em> Changing the location does not move existing files. Copy them across first, or you will start from an empty record.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-data-location.png' | relative_url }}" alt="Preferences Data page showing the current data folder, a custom location field and Save and Reset to default buttons">
          <figcaption>Data location: the default is your operating system's application-data folder.</figcaption>
        </figure>

        <h4 id="preferences-trash">Trash</h4>
        <p>A deleted report waits here for <strong>30 days</strong> with their sessions and team memberships, then is erased at the next launch. The empty trash reads <em>"The trash is empty."</em> Each entry shows the name and either <em>"N days until it is erased"</em> or <em>"Erased at the next launch"</em>, with two buttons:</p>
        <ul>
          <li><strong>Restore:</strong> brings the report back with their sessions and team memberships.</li>
          <li><strong>Delete forever:</strong> asks for confirmation, then erases that report now.</li>
        </ul>
        <p><strong>Empty trash</strong> (red) erases every entry after confirming. Copies you exported or backed up keep the data, since Trustline never reaches into them.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-trash.png' | relative_url }}" alt="Trash list in Preferences with one deleted report showing days until it is erased and Restore and Delete forever buttons">
          <figcaption>The Trash: thirty days of safety net for a deleted report.</figcaption>
        </figure>

        <h4 id="preferences-shared-path">Shared career path</h4>
        <p>Point the career path at a folder shared with other installations (a Dropbox, iCloud, or OneDrive folder, or a network share) so you all work from the same ladder. <em>"Reports and session notes above stay private — this only affects the career ladder."</em> It has its own <strong>Custom location</strong>, <strong>Save</strong>, and <strong>Reset to default</strong>, and, like the data location, takes effect after a restart. This install is identified as <em>user@device</em> in the line beneath, and that label appears in the error if another installation happens to be saving at the same moment. Two people editing within moments of each other is a rare, accepted risk, and Trustline asks one of them to try again rather than silently overwriting the other.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-shared-career-path.png' | relative_url }}" alt="Shared career path section of Preferences Data with the active location, a custom location field and the writer label line">
          <figcaption>A shared ladder: one definition of what each level means, across managers.</figcaption>
        </figure>

        <h4 id="preferences-handoff">Threadline hand-off</h4>
        <p>The bridge to Threadline's Inbox. <strong>Folder Threadline watches</strong> is the folder you have set up as a plain-text connector in Threadline (leave blank to be asked on the next export). <strong>Save</strong> stores it, <strong>Reset</strong> forgets it, and <strong>Export my open action items</strong> writes the files and reports <em>"Exported N open action items to Threadline (M removed)."</em></p>
        <ul>
          <li><strong>What is exported:</strong> the open items you own. Report-owned items, finished items, and agenda notes are never exported, and an item carried over several sessions is exported once.</li>
          <li><strong>Format:</strong> one file per item, named <code>trustline-action-&lt;id&gt;.md</code>, holding exactly one <code>- [ ] description</code> line. No report name and no metadata.</li>
          <li><strong>Re-exporting</strong> rewrites the same files, and removes the file of any item that is no longer open. It removes only files with exactly that name pattern; everything else in the folder is untouched.</li>
          <li><strong>Wording matters:</strong> Threadline identifies a line by file and content, so changing an exported item's wording creates a second Inbox item. Write descriptions that stand alone and name the project or topic.</li>
        </ul>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-threadline-handoff.png' | relative_url }}" alt="Threadline hand-off section of Preferences Data with the folder field, Save, Reset and Export my open action items buttons">
          <figcaption>The hand-off: a commitment made at the LAN layer becomes an Inbox item at the CPU layer.</figcaption>
        </figure>

        <h4 id="preferences-backup">Export and backup</h4>
        <p><strong>Export all data</strong> copies every report, session, team, and career-path file, exactly as it is on disk, into a new folder named <em>Trustline export YYYY-MM-DD HHMMSS</em> inside a folder you pick each time. <strong>Back up now</strong> does the same into the <strong>Backup folder</strong> you set once (leave blank to be asked on the next backup), in a folder named <em>trustline-backup-YYYYMMDD-HHMMSS</em>. <strong>Save</strong> and <strong>Reset</strong> manage that folder.</p>
        <ul>
          <li>Nothing is ever replaced or deleted. A destination that already exists is refused, and a copy that is interrupted is removed rather than left looking finished.</li>
          <li>The backup folder is never created for you, so an unplugged drive is reported instead of being silently replaced by a folder on your system disk.</li>
          <li>The diagnostics log and the file holding your email username are left out.</li>
          <li>Copies are <strong>not encrypted</strong>, and they keep everything as it was, the trash included. Deleting a report forever later does not reach a copy you already made. Keep them somewhere you trust.</li>
          <li>There is no scheduling and no pruning: a backup happens when you press the button, and old ones stay until you delete them. To restore, close the app and copy the files back into the data folder.</li>
        </ul>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-export-backup.png' | relative_url }}" alt="Export and backup section of Preferences Data with Export all data, a backup folder field and Back up now">
          <figcaption>Export and backup: a plain copy of plain files.</figcaption>
        </figure>

        <h3 id="preferences-email">Email relay</h3>
        <p>The relay is what <em>Send agenda</em>, <em>Check for replies</em>, and <em>Email as…</em> use. Trustline sends through your own mail account; it has no mail server of its own. The page is introduced by where the password goes: in your operating system's own credential store (Keychain, Credential Manager, or Secret Service), never in a file this app writes.</p>
        <ul>
          <li><strong>Sending:</strong> <strong>SMTP host</strong> (e.g. <em>smtp.example.com</em>), <strong>Port</strong> (e.g. 587), <strong>Username</strong>, and <strong>Password</strong>. Leave the password blank on a later save to keep the stored one; if one is set the label reads <em>"Password (already set — leave blank to keep it)"</em>.</li>
          <li><strong>Checking for replies (optional):</strong> <strong>IMAP host</strong> and <strong>Port</strong> (e.g. 993). It uses the same username and password. Leave blank to send agendas without collecting replies.</li>
          <li><strong>Emailed exports → Signature:</strong> <em>Trustline mark and credit</em> or <em>None</em>. It applies to session exports sent from the Export menu; the agenda is never signed.</li>
          <li><strong>Save</strong> stores the settings (<em>"Email relay settings saved."</em>), and <strong>Clear</strong> removes the host, port, username, and the stored password.</li>
        </ul>
        <p>If the system keychain is unavailable, for instance on a Linux session without a Secret Service, the page says so beneath the password field: <em>"Kept for this session only — the system keychain isn't available. You'll be asked for it again next launch."</em> The password is then held in memory for that session and never written to disk.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-email-relay-sending.png' | relative_url }}" alt="Email relay page of Preferences with SMTP host, port, username and password fields">
          <figcaption>The sending half of the relay. The password field is never pre-filled.</figcaption>
        </figure>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-email-relay-replies-signature.png' | relative_url }}" alt="Lower part of the Email relay page showing IMAP host and port, the emailed exports signature selector and the Save and Clear buttons">
          <figcaption>Checking for replies is optional, and the signature on emailed exports can be switched off.</figcaption>
        </figure>

        <h3 id="preferences-about">About</h3>
        <p>The About page shows the Trustline logotype, the installed version (for example <em>Version 1.2.0</em>), a line stating whether a newer version exists (<em>"Up to date."</em> or <em>"Version X is available."</em>), the note <em>"Built on The Engineering Protocol Stack,"</em> and the update-check selector described next.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-about.png' | relative_url }}" alt="About page of Preferences showing the Trustline logo, the version number, an up to date line and the Check for new versions selector">
          <figcaption>About: the version, whether it is current, and the one network setting the app has.</figcaption>
        </figure>
      </section>

      <!-- SECTION: UPDATES -->
      <section id="updates" class="docs-section">
        <h2>⬆️ Updates</h2>
        <p>Trustline can tell you when a newer version exists, and can install it in place. Both are your choice.</p>

        <h3>The daily check</h3>
        <p><strong>Preferences → About → Check for new versions</strong> has two settings: <em>Check once a day</em> (the default) and <em>Never check</em>. With the check on, Trustline asks GitHub, at most once a day at launch, which release is the latest. The request is a plain read of a public page: it carries the app's version in its User-Agent and nothing else, with no identifier and nothing about you or your notes. Turning the check off means the app contacts no server you have not named yourself. A change applies from the next launch, because the check runs once at startup.</p>

        <h3>The update notice</h3>
        <p>When a newer version exists, a notice appears in the corner reading <em>"Trustline X is available. You have Y."</em> It stays until you answer it. The button depends on how you installed Trustline:</p>
        <ul>
          <li><strong>Install now:</strong> available on macOS, Windows, and the Linux AppImage. Pressing it downloads the update, verifies that it carries Trustline's signature, installs it, and restarts the app. An update that does not carry the signature is refused, and Trustline keeps running as it was. Nothing is downloaded until you press the button.</li>
          <li><strong>Download:</strong> for installs that cannot update themselves, such as a <code>.deb</code> package. It opens the product page in your browser so you can download the new installer by hand.</li>
        </ul>
        <p>Dismiss the notice with its close button or Escape. That version is then not announced again, though the About page keeps saying that it is available. If an install fails, the notice gives a plain sentence and a <strong>Download</strong> button. If you are on 0.3.0 or earlier, update once from the website; later versions install in place.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Updates-notice-install-now.png' | relative_url }}" alt="Trustline with a one-to-one open and an update notice in the corner naming the new version and the installed one with an Install now button">
          <figcaption>The update notice: it names both versions and does nothing until you press Install now.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Updates-about-update-available.png' | relative_url }}" alt="About page of Preferences with a line saying a newer version is available above the update check selector">
          <figcaption>The About line keeps the fact after the notice is dismissed: dismissing stops the interruption, not the information.</figcaption>
        </figure>
      </section>

      <!-- SECTION: PRIVACY -->
      <section id="privacy" class="docs-section">
        <h2>🔒 Privacy &amp; Data</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 10 — Absence of Trust</div>
          <p><em>"Start with trust: create safety for vulnerability (admitting errors, asking for help) or everything else becomes theater."</em> A tool that holds your private observations about the people who trust you has to deserve that trust itself.</p>
        </div>

        <p>Trustline's subject matter is private notes about identifiable people, so its privacy model is deliberately simple: your records live on your machine and nowhere else.</p>

        <h3>What is stored, and where</h3>
        <p>All of it is in your <a href="#getting-started">data folder</a>, as plain files:</p>
        <ul>
          <li><code>reports.json</code>: your direct reports.</li>
          <li><code>sessions/</code>: one Markdown file per one-to-one, readable in any editor.</li>
          <li><code>positions.json</code>, <code>groups.json</code>, and <code>career-path-layout.json</code>: the career path (these live in the shared folder if you set one).</li>
          <li><code>teams.json</code> and <code>team-interactions.json</code>, plus a <code>teams/&lt;id&gt;/</code> folder for each team holding <code>working-agreements.md</code>, <code>health-checks.json</code>, <code>experiments.json</code>, and <code>scoreboard.json</code>.</li>
          <li><code>trash.json</code>: reports waiting out their thirty days.</li>
          <li><code>trustline.log</code>: a small diagnostics log. It records file locations and record identifiers, never names or anything you wrote: every quoted span is replaced before it is written. When it passes 1 MiB it is renamed to <code>trustline.log.1</code> at the next launch, replacing any earlier one, so it holds roughly two megabytes at most. It never leaves your machine; you can open it, or send it to someone by hand if you want help.</li>
        </ul>
        <p>A small <code>preferences.json</code> remembers your settings, including the email host and username but never the password. It always sits in the default application-data folder, even if you move the data, so the app can find the rest. On macOS and Linux, files are readable only by your user account. They are written atomically so an interrupted save never leaves a half-written record, and a file in an older format is copied to a <code>.bak</code> backup beside it (for example <code>reports.json.v0.bak</code>) the first time the new version reads it, before anything is saved over it. That backup is never overwritten, so it stays as the copy from before the upgrade, and you can delete it once you are satisfied with the upgrade. If a file cannot be read at launch, Trustline leaves it exactly as it was, never saves over it, and names it in a dialog with an <em>Open data folder</em> button.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Privacy-data-folder.png' | relative_url }}" alt="File manager showing the trustline data folder with reports.json, sessions, teams and other plain files">
          <figcaption>The data folder in a file manager: ordinary files you can read, copy, and back up with ordinary tools.</figcaption>
        </figure>

        <h3>What goes over the network</h3>
        <p>Trustline makes no network request on its own account except the ones below, and the app window itself opens none. Each is off until you enable it, or is described and can be turned off.</p>
        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>When</th>
              <th>What is sent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>GitHub</strong> (the public releases page)</td>
              <td>At launch, at most once a day, unless you set <em>Never check</em>.</td>
              <td>A plain read of the latest release. The app version in the User-Agent; no identifier, no data about you.</td>
            </tr>
            <tr>
              <td><strong>GitHub</strong> (the installer)</td>
              <td>Only after you press <em>Install now</em>.</td>
              <td>A download of the update, accepted only if its signature matches Trustline's built-in key.</td>
            </tr>
            <tr>
              <td><strong>Your SMTP server</strong></td>
              <td>When you send an agenda or email an export. Off until you configure it.</td>
              <td>The message you composed and its attachment, and your username and password to that server.</td>
            </tr>
            <tr>
              <td><strong>Your IMAP server</strong></td>
              <td>When you press <em>Check for replies</em>. Off until you configure it.</td>
              <td>Your username and password; the mailbox is searched for replies to Trustline's own agendas.</td>
            </tr>
          </tbody>
        </table>
        <p>There is <strong>no telemetry, analytics, or crash reporting</strong>. A manager who has not set up email and has turned the update check off makes no request at all. Mail uses TLS or STARTTLS. The product page on this site is opened in your browser only when you choose <em>Download</em>, and the browser, not the app, makes that request.</p>

        <h3>Taking your data out, and erasing it</h3>
        <ul>
          <li>One person's complete record: <a href="#exports-report">Export this report's data</a>.</li>
          <li>Everything: <a href="#preferences-backup">Export all data</a> or <a href="#preferences-backup">Back up now</a>.</li>
          <li>Erasing a person: delete the report, then <a href="#preferences-trash">Delete forever</a> from the Trash. Remember that copies you exported or backed up keep the data until you delete them yourself.</li>
        </ul>
      </section>

      <!-- SECTION: KEYBOARD SHORTCUTS -->
      <section id="keyboard-shortcuts" class="docs-section">
        <h2>⌨️ Complete Keyboard Shortcuts Reference</h2>
        <p>Trustline is navigated with the standard keys: <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> move between controls, and <kbd>Enter</kbd> or <kbd>Space</kbd> press the focused one. Every control has a visible focus ring. Beyond that, these shortcuts exist.</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Shortcut</th>
              <th>Action</th>
              <th>Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd></td>
              <td>Add the action item you are typing</td>
              <td>New action item field in a session</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> or <kbd>Space</kbd></td>
              <td>Open the focused position or track</td>
              <td>Career path canvas</td>
            </tr>
            <tr>
              <td><kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd></td>
              <td>Move the focused position or track by one grid step</td>
              <td>Career path canvas</td>
            </tr>
            <tr>
              <td><kbd>Shift</kbd> + arrow key</td>
              <td>Move the focused position or track by four grid steps</td>
              <td>Career path canvas</td>
            </tr>
            <tr>
              <td><kbd>Alt</kbd> (held while dragging)</td>
              <td>Place a position freely instead of snapping to the grid</td>
              <td>Career path canvas, mouse drag</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Cancel the drag and return the position or track to where it started</td>
              <td>Career path canvas, mouse drag</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Cancel the form, clear its fields, and return focus to its Add button</td>
              <td>Add report, Add position, Add track, Add team</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Close the menu and return focus to its button</td>
              <td>Career path Export menu, Export team page menu</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Cancel the dialog without acting</td>
              <td>Any confirmation dialog</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Dismiss the notice</td>
              <td>When focus is inside a toast, such as the update notice</td>
            </tr>
            <tr>
              <td><kbd>?</kbd></td>
              <td>Open this user guide in your browser, the same as the Help button</td>
              <td>Anywhere, except while typing in a field; ignored with <kbd>Ctrl</kbd>, <kbd>Cmd</kbd> or <kbd>Alt</kbd> held</td>
            </tr>
            <tr>
              <td><kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd></td>
              <td>Move focus forward or back; confirmation dialogs keep focus inside themselves</td>
              <td>Everywhere</td>
            </tr>
          </tbody>
        </table>

        <p>The Preferences dialog closes with its <strong>×</strong> button or by clicking outside it.</p>
      </section>

    </article>
  </div>
</div>
