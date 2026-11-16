---
layout: default
title: "Threadline User Guide & CPU Protocol Documentation"
subtitle: "The CPU Layer of The Engineering Protocol Stack"
description: "Comprehensive guide and reference for Threadline v1.0.0 — capture, decide, prioritize, plan your day, and manage your capacity as an engineering leader."
needs_tools: true
permalink: /tools/threadline/docs/
lang: en
alt_lang_url: /es/tools/threadline/docs/
---

<div class="docs-wrap">
  <header class="docs-header">
    <div class="docs-meta">
      <span class="badge">App v1.0.0-rc1</span>
      <span class="badge">CPU Layer Architecture</span>
      <span>Published for <a href="https://engineeringprotocolstack.com">The Engineering Protocol Stack</a></span>
    </div>
    <h1>Threadline User Guide &amp; Documentation</h1>
    <div class="docs-subtitle">Managing Attention, Capacity, and Execution as an Engineering Leader</div>
    <p>Threadline is the <strong>CPU layer</strong> of <em>The Engineering Protocol Stack</em> made into software. It turns the personal leadership protocols from the book—task collection, inbox processing, the Eisenhower Matrix, context batching, focus blocks, and regular reviews—into an ultra-fast, local-first desktop application.</p>
  </header>

  <div class="docs-layout">
    <!-- Sticky Navigation Sidebar -->
    <aside class="docs-sidebar">
      <div class="docs-nav-group">
        <div class="docs-nav-title">Foundations</div>
        <ul class="docs-nav-list">
          <li><a href="#the-cpu-layer">The CPU Layer Model</a></li>
          <li><a href="#layer-check">CPU Layer Diagnostic</a></li>
          <li><a href="#first-run">First Run &amp; Onboarding</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Capture &amp; Navigation</div>
        <ul class="docs-nav-list">
          <li><a href="#capture">Fast Capture Anywhere</a></li>
          <li><a href="#command-palette">Command Palette</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Daily Execution</div>
        <ul class="docs-nav-list">
          <li><a href="#today">Today &amp; The Big 3</a></li>
          <li><a href="#daily-kickoff">Daily Kick-Off</a></li>
          <li><a href="#focus-blocks">Focus Blocks (Pomodoro)</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Processing &amp; Routing</div>
        <ul class="docs-nav-list">
          <li><a href="#inbox">Inbox &amp; Process Mode</a></li>
          <li><a href="#matrix">The Eisenhower Matrix</a></li>
          <li><a href="#next-actions">Next Actions &amp; Contexts</a></li>
          <li><a href="#waiting-for">Waiting For &amp; Delegation</a></li>
          <li><a href="#projects">Projects (SMART Tasks)</a></li>
          <li><a href="#scheduled">Scheduled Work</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Reviews &amp; Maintenance</div>
        <ul class="docs-nav-list">
          <li><a href="#review-daily">Daily Review (Closeout)</a></li>
          <li><a href="#review-weekly">Weekly Review (Housekeeping)</a></li>
          <li><a href="#review-monthly">Monthly Migration</a></li>
          <li><a href="#stats">Stats &amp; Attention Logs</a></li>
          <li><a href="#trash">Trash &amp; Recovery</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">System Reference</div>
        <ul class="docs-nav-list">
          <li><a href="#settings">Settings Reference</a></li>
          <li><a href="#keyboard-shortcuts">Keyboard Shortcuts</a></li>
        </ul>
      </div>
    </aside>

    <!-- Main Content Area -->
    <article class="docs-body">

      <!-- SECTION: THE CPU LAYER -->
      <section id="the-cpu-layer" class="docs-section">
        <h2>🧠 The CPU Layer: Managing Yourself</h2>
        <p>In <em>The Engineering Protocol Stack</em>, the human side of engineering leadership is organized into three layers: <strong>CPU</strong> (managing yourself), <strong>LAN</strong> (managing your team and local relationships), and <strong>WAN</strong> (managing across the organization, executives, and external partners).</p>
        
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Part I — CPU (Chapters 1–4)</div>
          <p><em>"Your brain is a single-core processor. You do not multitask; you task-switch. Every context change incurs a steep reconstruction tax. Your working memory (RAM) is strictly limited and volatile: our mind is for having ideas, not for holding them."</em></p>
        </div>

        <p>Threadline was designed from first principles around three neurological realities explored in the book:</p>
        
        <ol>
          <li><strong>The Myth of Multitasking &amp; Task Switching:</strong> Research from the University of California, Irvine shows that returning to an interrupted task takes an average of <strong>23 minutes and 15 seconds</strong>. Furthermore, unfinished tasks leave behind <em>attention residue</em>, silently degrading subsequent cognitive work. Threadline prevents attention fragmentation by separating instant capture from deliberate execution.</li>
          <li><strong>RAM vs. Persistent Storage:</strong> Your brain's working memory is vulnerable to the <em>Six Memory Illusions</em> (Attention, Memory, Confidence, Knowledge, Cause, and Potential). Trying to remember pending requests causes constant anxiety and mental fatigue. Threadline acts as your external cache and persistent register.</li>
          <li><strong>Finite Time (The 30,000 Gold Ingots):</strong> We are born with approximately 30,000 days of life, spending one non-renewable ingot each day. High-performing leadership is not about working 12-hour days; it is about protecting the <strong>quality of time</strong> through preparation, intentional prioritization, and ruthless elimination of busywork.</li>
        </ol>

        <h3 id="layer-check">The CPU Layer Diagnostic Check</h3>
        <p>From Chapter 4.3 of the book, use these 8 diagnostic protocols to evaluate the health of your personal operational system:</p>

        <ul class="check-list">
          <li>I have one trusted place where I capture tasks before they compete for my attention.</li>
          <li>I can explain how I choose what to work on today, this week, and later.</li>
          <li>I protect uninterrupted time for work that requires deep concentration.</li>
          <li>I do not rely on working memory to remember commitments, decisions, or follow-ups.</li>
          <li>I have a simple review routine that keeps my task system current.</li>
          <li>I know which information I need to learn now and what I can deliberately ignore.</li>
          <li>I have a way to turn useful notes, decisions, and lessons into material I can find again.</li>
          <li>My personal system reduces friction instead of becoming another job to maintain.</li>
        </ul>
      </section>

      <!-- SECTION: FIRST RUN & ONBOARDING -->
      <section id="first-run" class="docs-section">
        <h2>🚀 First Run &amp; Onboarding</h2>
        <p>Threadline is <strong>local-first and privacy-native</strong>. There are no cloud servers, no account logins, no telemetry tracking, and no external databases. Your data lives in an encrypted, local SQLite file on your computer.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Legal-eula-Max.png' | relative_url }}" alt="Threadline End User License Agreement and Privacy Terms">
          <figcaption>The First Run EULA: Threadline guarantees zero telemetry and total data sovereignty on your local machine.</figcaption>
        </figure>

        <h3>The 4-Step Onboarding Walkthrough</h3>
        <p>When launching Threadline for the first time, an interactive 4-step onboarding sequence introduces the foundational workflow without overwhelming you with complex configuration:</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Onboarding-step-1-capture-Max.png' | relative_url }}" alt="Onboarding Step 1: Capture">
          <figcaption>Step 1 — Capture: Learn the global shortcut to offload thoughts in under two seconds.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Onboarding-step-2-decide-once-Max.png' | relative_url }}" alt="Onboarding Step 2: Decide Once">
          <figcaption>Step 2 — Decide Once: The single-pass triage protocol that eliminates inbox stagnation.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Onboarding-step-3-plan-three-Max.png' | relative_url }}" alt="Onboarding Step 3: Plan Three">
          <figcaption>Step 3 — Plan Three: Choosing your Big 3 daily outcomes to protect your attention from reactive firefighting.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Onboarding-step-4-setup-Max.png' | relative_url }}" alt="Onboarding Step 4: Ready">
          <figcaption>Step 4 — Setup Complete: Pre-seeded with 5 realistic sample items to help you practice immediately.</figcaption>
        </figure>
      </section>

      <!-- SECTION: FAST CAPTURE & COMMAND PALETTE -->
      <section id="capture" class="docs-section">
        <h2>⚡ Fast Capture Anywhere</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 2 — Collection vs. Execution</div>
          <p><em>"Never mix capture with execution. When a thought or request lands on you, evaluating or scheduling it immediately causes an expensive context switch. Capture it in seconds to free your RAM, and return to what you were doing."</em></p>
        </div>

        <p>Threadline provides a system-wide global shortcut: <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> (macOS) or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> (Windows/Linux). Pressing this hotkey floats a minimal, distraction-free capture bar over whichever application you are using (IDE, Zoom, Slack, terminal, or browser).</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Quick-Capture-empty-input-Max.png' | relative_url }}" alt="Quick Capture floating window ready for input">
          <figcaption>The Quick Capture bar: Zero window-switching latency. Type your thought and press Enter.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Quick-Capture-typed-thought-Max.png' | relative_url }}" alt="Quick Capture with a typed thought ready to submit">
          <figcaption>Capturing a thought: The window closes immediately upon pressing Enter, returning focus to your previous app.</figcaption>
        </figure>

        <h3 id="command-palette">Command Palette &amp; Instant Search (<kbd>Cmd/Ctrl+K</kbd>)</h3>
        <p>From anywhere inside Threadline, press <kbd>Cmd</kbd> + <kbd>K</kbd> to launch the command palette. It indexes every active task, project, note, context group, and setting with sub-millisecond search speed.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Command-palette-open-Max.png' | relative_url }}" alt="Command Palette open with suggested actions">
          <figcaption>Command Palette: Navigate anywhere, toggle settings, or trigger review routines without touching the mouse.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Command-palette-search-results-Max.png' | relative_url }}" alt="Command Palette search results across all items">
          <figcaption>Search results: Instant fuzzy filtering across all active and archived items.</figcaption>
        </figure>
      </section>

      <!-- SECTION: TODAY & DAILY EXECUTION -->
      <section id="today" class="docs-section">
        <h2>☀️ Today &amp; Daily Execution</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 4 — Process Organization &amp; The Daily Plan</div>
          <p><em>"A goal without a plan is just a wish. Spend 15 minutes in morning preparation, and every hour after it has double the value. Restrict your daily commitments to the Big 3 priorities that truly move the needle."</em></p>
        </div>

        <p>The <strong>Today</strong> view is your cockpit for the day. Rather than an overwhelming list of 50 to-dos, Today displays only what you have consciously chosen to accomplish during this working day.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-Max.png' | relative_url }}" alt="Today view showing Big 3 priorities, schedule gaps, and quick wins">
          <figcaption>The Today Cockpit: Your Big 3 priorities, meetings pulled from your read-only calendar feed, and scheduled gap tasks.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-capture-bar-Max.png' | relative_url }}" alt="In-app capture bar on the Today view">
          <figcaption>In-app Capture Bar: Quickly append tasks directly from the main interface.</figcaption>
        </figure>

        <h3 id="daily-kickoff">The Daily Kick-Off Routine</h3>
        <p>Every morning, Threadline prompts you to run the <strong>Daily Kick-Off</strong>. It compares the estimated minutes of your planned tasks against your actual free calendar gaps ("the time you actually have").</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-daily-kickoff-Max.png' | relative_url }}" alt="Daily Kick-Off comparing planned time with calendar availability">
          <figcaption>The Daily Kick-off: If you have 3 hours of meetings and 4 hours of planned work, Threadline flags the deficit before your day derails.</figcaption>
        </figure>

        <p>If your plan needs adjustment, the 3-step <strong>Plan Your Day</strong> wizard helps you prune and commit:</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-your-day-step-1-unfinished-Max.png' | relative_url }}" alt="Plan your day step 1: review unfinished tasks">
          <figcaption>Step 1 — Unfinished Tasks: Decide whether yesterday's lingering work still deserves a place today.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-your-day-step-2-due-today-Max.png' | relative_url }}" alt="Plan your day step 2: review items due today">
          <figcaption>Step 2 — Due Today: Surface scheduled tasks and follow-ups maturing today.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-your-day-step-3-pick-priorities-Max.png' | relative_url }}" alt="Plan your day step 3: pick Big 3 priorities">
          <figcaption>Step 3 — Pick Priorities: Select exactly up to three critical outcomes for the day.</figcaption>
        </figure>

        <h3 id="focus-blocks">Focus Blocks (The Pomodoro Protocol)</h3>
        <div class="protocol-box amber">
          <div class="protocol-box__title">📖 Book Reference: Chapter 2 — Dividing Time into Slices</div>
          <p><em>"Francesco Cirillo's Pomodoro technique creates focused time chunks (typically 25 minutes) followed by brief rest intervals. During a focus block, all notifications must be suppressed. If an urgent thought interrupts you, capture it in 2 seconds and immediately resume focus."</em></p>
        </div>

        <p>Threadline features a built-in Focus Block runner. When you select a task from your Big 3 and press <kbd>Space</kbd>, a focus timer starts.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-focus-block-running-Max.png' | relative_url }}" alt="Focus block in progress with active timer and interruption logging">
          <figcaption>Focus Block Running: A high-contrast countdown timer. If an interruption occurs, trigger Quick Capture to log it without breaking your block.</figcaption>
        </figure>
      </section>

      <!-- SECTION: INBOX & PROCESS MODE -->
      <section id="inbox" class="docs-section">
        <h2>📥 Inbox &amp; Process Mode</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 2 &amp; Chapter 4 — The Decision Flowchart</div>
          <p><em>"Processing an inbox means making a definitive decision for every single item. Apply the <strong>Two-Minute Rule</strong>: if an action takes less than two minutes, execute it immediately rather than spending time tracking it."</em></p>
        </div>

        <p>The <strong>Inbox</strong> collects all unprocessed captures. Items sit here in their raw state until you enter <strong>Process Mode</strong> (<kbd>P</kbd>).</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-list-Max.png' | relative_url }}" alt="Threadline Inbox listing unprocessed captures">
          <figcaption>The Inbox: A clean list of unprocessed captures showing capture source and age.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-item-edit-form-Max.png' | relative_url }}" alt="Editing an item's details inside the Inbox">
          <figcaption>Item Detail Edit: Refine titles and add Markdown notes before routing.</figcaption>
        </figure>

        <h3>The Five Dispositions</h3>
        <p>In Process Mode, you walk through each item and assign exactly one disposition using quick single-key shortcuts:</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-mode-Max.png' | relative_url }}" alt="Process mode triage interface">
          <figcaption>Process Mode: Fast keyboard-driven decision interface.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-do-Max.png' | relative_url }}" alt="Disposition Do: Assigning quadrant and context group">
          <figcaption>1. Do (<kbd>D</kbd>): You will do it yourself. Assigns an Eisenhower quadrant and context group.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-delegate-Max.png' | relative_url }}" alt="Disposition Delegate: Assigning assignee and follow-up date">
          <figcaption>2. Delegate (<kbd>W</kbd>): Hand off to someone else. Prompts for assignee name and check-back date, routing to Waiting For.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-schedule-Max.png' | relative_url }}" alt="Disposition Schedule: Assigning future activation date">
          <figcaption>3. Schedule (<kbd>S</kbd>): Not actionable today. Sets a future date when the task will automatically reactivate.</figcaption>
        </figure>

        <p>The remaining dispositions are:</p>
        <ul>
          <li><strong>Someday / Reference (<kbd>R</kbd>):</strong> Useful information or future aspirations with no active commitment.</li>
          <li><strong>Drop / Eliminate (<kbd>X</kbd>):</strong> Not worth doing. Moves directly to Trash.</li>
        </ul>
      </section>

      <!-- SECTION: THE EISENHOWER MATRIX -->
      <section id="matrix" class="docs-section">
        <h2>🗂️ The Eisenhower Matrix</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 2 — Task Prioritizing</div>
          <p><em>"Dwight Eisenhower said: 'I have two kinds of problems, the urgent and the important. The urgent are not important, and the important are never urgent.' The work that defines great leadership—strategy, team health, architecture—lives in Quadrant 2. Without intentional prioritization, Quadrants 1 and 3 will consume your entire career."</em></p>
        </div>

        <p>When you mark an item as <strong>Do</strong>, Threadline prompts you to place it into one of the four quadrants:</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Matrix-quadrants-Max.png' | relative_url }}" alt="The 4 Eisenhower Quadrants in Threadline">
          <figcaption>The Matrix View: Visual balance across Urgent and Important quadrants.</figcaption>
        </figure>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Quadrant</th>
              <th>Definition</th>
              <th>Leadership Protocol</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Q1: Urgent &amp; Important</strong></td>
              <td>Crises, outages, critical blockers, deadlines.</td>
              <td><strong>Do First:</strong> Execute immediately to extinguish the fire.</td>
            </tr>
            <tr>
              <td><strong>Q2: Important &amp; Not Urgent</strong></td>
              <td>1-on-1s, strategic roadmaps, hiring, tech debt, team growth.</td>
              <td><strong>Schedule &amp; Protect:</strong> Block focus time. Investing here prevents future Q1 emergencies.</td>
            </tr>
            <tr>
              <td><strong>Q3: Urgent &amp; Not Important</strong></td>
              <td>Incoming chat requests, minor approvals, interruptions.</td>
              <td><strong>Delegate:</strong> Hand off to a team member as a growth opportunity.</td>
            </tr>
            <tr>
              <td><strong>Q4: Not Urgent &amp; Not Important</strong></td>
              <td>Busywork, unproductive browsing, stale requests.</td>
              <td><strong>Eliminate:</strong> Drop with zero remorse.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: NEXT ACTIONS & CONTEXTS -->
      <section id="next-actions" class="docs-section">
        <h2>📋 Next Actions &amp; Context Groups</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 2 — Grouping Work by Context</div>
          <p><em>"Batching similar tasks eliminates context switching. Switching between reviewing code, writing an email, and making a phone call incurs three mental rebuilds. Grouping all calls or all PR reviews together makes context switching disappear."</em></p>
        </div>

        <p>The <strong>Next Actions</strong> screen aggregates all active tasks you own. Rather than viewing them as a flat list, you can filter by <strong>Context Group</strong> to batch your energy:</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Next-next-actions-Max.png' | relative_url }}" alt="Next Actions view showing all items with context badges">
          <figcaption>Next Actions (All): Filterable and sortable by priority, context, and project.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Next-context-menu-Max.png' | relative_url }}" alt="Context menu on a next action item">
          <figcaption>Action Menu: Right-click or press Space to edit, delete, or promote an item into a project.</figcaption>
        </figure>

        <h3>The Seven Context Groups</h3>
        <p>Threadline provides seven fixed, purpose-built context tabs:</p>

        <div class="services-grid">
          <div class="service-card">
            <h4>📞 Calls</h4>
            <p>Phone calls, vendor syncs, check-ins.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Next-tab-calls-Max.png' | relative_url }}" alt="Calls tab">
          </div>
          <div class="service-card">
            <h4>🔍 Reviews</h4>
            <p>Pull requests, RFCs, design docs, specs.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Next-tab-reviews-Max.png' | relative_url }}" alt="Reviews tab">
          </div>
          <div class="service-card">
            <h4>✍️ Writing</h4>
            <p>Postmortems, documentation, announcements.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Next-tab-writing-Max.png' | relative_url }}" alt="Writing tab">
          </div>
          <div class="service-card">
            <h4>📋 Admin</h4>
            <p>Expense approvals, HR tickets, logistics.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Next-tab-admin-Max.png' | relative_url }}" alt="Admin tab">
          </div>
          <div class="service-card">
            <h4>🧠 Deep Work</h4>
            <p>System architecture, coding, data modeling.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Next-tab-deep-work-Max.png' | relative_url }}" alt="Deep work tab">
          </div>
          <div class="service-card">
            <h4>👥 People</h4>
            <p>1-on-1 topics, feedback, career conversations.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Next-tab-people-Max.png' | relative_url }}" alt="People tab">
          </div>
        </div>

        <figure class="docs-figure" style="margin-top: 1.5rem;">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Next-tab-other-Max.png' | relative_url }}" alt="Other context tab">
          <figcaption>Other Context: General tasks that do not fit the core six buckets.</figcaption>
        </figure>
      </section>

      <!-- SECTION: WAITING FOR & DELEGATION -->
      <section id="waiting-for" class="docs-section">
        <h2>⏳ Waiting For &amp; Follow-Ups</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 4 — Delegation and Follow-Ups</div>
          <p><em>"Delegating a task without recording a follow-up date is not delegation; it is abandoning work. A leader needs a trusted container where handed-off tasks remain visible, grouped by person, until delivered."</em></p>
        </div>

        <p>The <strong>Waiting For</strong> view groups all delegated work by person, showing exactly who owes what and highlighting overdue follow-ups.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Waiting-list-Max.png' | relative_url }}" alt="Waiting For screen grouped by person with follow-up dates">
          <figcaption>Waiting For: Grouped by assignee with check-back dates. When a follow-up date arrives, it automatically surfaces in your Daily Kick-Off.</figcaption>
        </figure>
      </section>

      <!-- SECTION: PROJECTS -->
      <section id="projects" class="docs-section">
        <h2>🏗️ Projects (SMART Multi-Step Work)</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 4 — Multi-Action Projects &amp; SMART Goals</div>
          <p><em>"Any outcome requiring more than one physical action is a project. Treat each project as a container that surfaces only its immediate next action. Every project task should follow the <strong>SMART</strong> criteria: Specific, Measurable, Achievable, Relevant, and Time-bound."</em></p>
        </div>

        <p>Threadline keeps project management lightweight. You can organize work into <strong>Active</strong>, <strong>Someday</strong>, and <strong>Closed</strong> projects.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-tab-active-Max.png' | relative_url }}" alt="Active Projects tab showing project list with task counts">
          <figcaption>Active Projects: High-level overview of multi-step initiatives and their next physical actions.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-new-project-form-Max.png' | relative_url }}" alt="Form to create a new project with outcome statement">
          <figcaption>New Project Form: Define clear success criteria and seed the initial action steps.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-tab-someday-Max.png' | relative_url }}" alt="Someday projects tab">
          <figcaption>Someday Projects: Incubating initiatives parked for future review.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-tab-closed-Max.png' | relative_url }}" alt="Closed projects tab">
          <figcaption>Closed Projects: Historical archive of delivered milestones.</figcaption>
        </figure>
      </section>

      <!-- SECTION: SCHEDULED WORK -->
      <section id="scheduled" class="docs-section">
        <h2>📅 Scheduled Work</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 4 — The Future Log &amp; Monthly Log</div>
          <p><em>"Tasks that belong to a specific future date should not clutter your active lists today. They sleep in the Scheduled registry until their activation date arrives, keeping your current working set clean."</em></p>
        </div>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Scheduled-list-Max.png' | relative_url }}" alt="Scheduled tasks view sorted by activation date">
          <figcaption>Scheduled Tasks: Items waiting for a specific calendar date to become active.</figcaption>
        </figure>
      </section>

      <!-- SECTION: REVIEWS & MAINTENANCE -->
      <section id="review-daily" class="docs-section">
        <h2>🔄 Review Rituals: Keeping the System Trustworthy</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Chapter 4 — Planning and Review Cadences</div>
          <p><em>"A productivity system fails when trust collapses. If you cannot trust that your lists are up-to-date, your brain defaults back to anxiety and chaos. Short, predictable review rituals—daily closeouts, weekly housekeeping, and monthly migrations—are what sustain trust over years."</em></p>
        </div>

        <h3>1. Daily Review (Evening Closeout, 10–15 minutes)</h3>
        <p>At the end of your workday, the Daily Review guides you through a rapid 4-step closeout:</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-daily-step-1-completed-Max.png' | relative_url }}" alt="Daily Review step 1: celebrate completed items">
          <figcaption>Step 1 — Completed Work: Review and celebrate what was delivered today.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-daily-step-2-unfinished-Max.png' | relative_url }}" alt="Daily Review step 2: triage unfinished tasks">
          <figcaption>Step 2 — Unfinished Items: Apply the <strong>Rule of Two Migrations</strong>. If a task has been postponed more than twice, delete it or delegate it.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-daily-step-3-inbox-Max.png' | relative_url }}" alt="Daily Review step 3: clear remaining inbox captures">
          <figcaption>Step 3 — Zero the Inbox: Process any notes or thoughts collected during the afternoon.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-daily-step-4-close-Max.png' | relative_url }}" alt="Daily Review step 4: shutdown complete">
          <figcaption>Step 4 — Daily Shutdown: Disconnect cleanly from work. Your system is safe.</figcaption>
        </figure>

        <h3 id="review-weekly">2. Weekly Review (Weekly Housekeeping, 20–30 minutes)</h3>
        <p>The Weekly Review runs through a thorough 7-step hygiene protocol to prepare for the upcoming week:</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-start-Max.png' | relative_url }}" alt="Weekly review kickoff screen">
          <figcaption>Weekly Review Start: Prepare for a complete reset of all operational loops.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-1-empty-inboxes-Max.png' | relative_url }}" alt="Weekly review step 1: empty inboxes">
          <figcaption>Step 1 — Empty Inboxes: Clear physical notebooks, emails, and desktop files into Threadline.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-2-review-waiting-Max.png' | relative_url }}" alt="Weekly review step 2: review waiting for list">
          <figcaption>Step 2 — Review Waiting For: Nudge pending delegations and overdue deliverables.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-3-review-projects-Max.png' | relative_url }}" alt="Weekly review step 3: review active projects">
          <figcaption>Step 3 — Review Projects: Ensure every active project has an immediate next physical action.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-4-review-next-actions-Max.png' | relative_url }}" alt="Weekly review step 4: review next actions">
          <figcaption>Step 4 — Review Next Actions: Purge stale or superseded action items.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-5-next-week-calendar-Max.png' | relative_url }}" alt="Weekly review step 5: preview next week calendar">
          <figcaption>Step 5 — Next Week's Calendar: Inspect upcoming meetings and protect focus blocks.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-6-next-week-focus-Max.png' | relative_url }}" alt="Weekly review step 6: define next week focus">
          <figcaption>Step 6 — Weekly Focus: Pick the 1–3 macro objectives that matter for next week.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-7-wins-and-lessons-Max.png' | relative_url }}" alt="Weekly review step 7: capture wins and lessons">
          <figcaption>Step 7 — Wins &amp; Lessons: Reflect on operational lessons and celebrate achievements.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-complete-Max.png' | relative_url }}" alt="Weekly review completion confirmation">
          <figcaption>Review Complete: System refreshed and aligned for the week ahead.</figcaption>
        </figure>

        <h3 id="review-monthly">3. Monthly Review (Migration)</h3>
        <p>At the end of each calendar month, Month Migration surfaces items that have repeatedly slipped without action.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-monthly-start-Max.png' | relative_url }}" alt="Monthly review start screen">
          <figcaption>Monthly Migration Start: Identifying stale commitments.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-monthly-decide-tasks-Max.png' | relative_url }}" alt="Deciding tasks during monthly migration">
          <figcaption>Decide Tasks: Decide whether to move aging items to Someday, renegotiate, or delete.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-monthly-nothing-to-migrate-Max.png' | relative_url }}" alt="Monthly review confirmation with nothing to migrate">
          <figcaption>Clean Slate: When all tasks are fresh, the system confirms zero migration debt.</figcaption>
        </figure>
      </section>

      <!-- SECTION: STATS & ATTENTION LOGS -->
      <section id="stats" class="docs-section">
        <h2>📊 Stats &amp; Attention Logs</h2>
        <p>Leadership requires honest feedback on where your attention actually goes. Threadline aggregates metrics from your focus blocks, completion rates, and daily reviews into an actionable dashboard.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Stats-overview-Max.png' | relative_url }}" alt="Threadline Stats overview dashboard showing focus hours and completion rates">
          <figcaption>Stats Overview: Real metrics on focus block execution, completion velocity, and attention trends.</figcaption>
        </figure>
      </section>

      <!-- SECTION: TRASH & RECOVERY -->
      <section id="trash" class="docs-section">
        <h2>🗑️ Trash &amp; Safety Net</h2>
        <p>Eliminating tasks is a core leadership virtue, but you never have to fear making a mistake. Deleted items move to the Trash, where they can be restored at any time or permanently purged.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Trash-list-Max.png' | relative_url }}" alt="Trash list showing discarded items with restore actions">
          <figcaption>Trash List: Safe undo and restore capability for all discarded tasks.</figcaption>
        </figure>
      </section>

      <!-- SECTION: SETTINGS REFERENCE -->
      <section id="settings" class="docs-section">
        <h2>⚙️ Settings &amp; Customization Reference</h2>
        <p>Threadline provides 10 dedicated configuration tabs to adapt the application to your personal operating rhythm:</p>

        <div class="services-grid">
          <div class="service-card">
            <h4>1. General</h4>
            <p>Theme (Light, Dark, System), launch at startup, working hours.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-general-Max.png' | relative_url }}" alt="Settings: General tab">
          </div>
          <div class="service-card">
            <h4>2. Capture</h4>
            <p>Global shortcut key combinations, tray icon behavior.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-capture-Max.png' | relative_url }}" alt="Settings: Capture tab">
          </div>
          <div class="service-card">
            <h4>3. Planning</h4>
            <p>Target focus block durations, Big 3 rules, gap heuristics.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-planning-Max.png' | relative_url }}" alt="Settings: Planning tab">
          </div>
          <div class="service-card">
            <h4>4. Reviews</h4>
            <p>Daily closeout triggers, weekly review scheduling.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-reviews-Max.png' | relative_url }}" alt="Settings: Reviews tab">
          </div>
          <div class="service-card">
            <h4>5. Notifications</h4>
            <p>Audit non-essential interruptions (Book Exercise 3.1).</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-notifications-Max.png' | relative_url }}" alt="Settings: Notifications tab">
          </div>
          <div class="service-card">
            <h4>6. Calendars</h4>
            <p>Read-only iCal/ICS feeds for schedule gap calculations.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-calendars-Max.png' | relative_url }}" alt="Settings: Calendars tab">
          </div>
          <div class="service-card">
            <h4>7. Insights</h4>
            <p>Attention analytics, quadrant distribution reports.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-insights-Max.png' | relative_url }}" alt="Settings: Insights tab">
          </div>
          <div class="service-card">
            <h4>8. Coach</h4>
            <p>AI or protocol prompts grounded in the book's principles.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-coach-Max.png' | relative_url }}" alt="Settings: Coach tab">
          </div>
          <div class="service-card">
            <h4>9. Data</h4>
            <p>Full JSON/SQLite export, local backup, and reset options.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-data-Max.png' | relative_url }}" alt="Settings: Data tab">
          </div>
          <div class="service-card">
            <h4>10. About</h4>
            <p>Version, build hash, license, and book references.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-about-Max.png' | relative_url }}" alt="Settings: About tab">
          </div>
        </div>
      </section>

      <!-- SECTION: KEYBOARD SHORTCUTS -->
      <section id="keyboard-shortcuts" class="docs-section">
        <h2>⌨️ Complete Keyboard Shortcuts Reference</h2>
        <p>Threadline is designed to be operated 100% from the keyboard without ever needing to touch the mouse:</p>

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
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd></td>
              <td>Open Quick Capture floating window</td>
              <td>System-wide (Global)</td>
            </tr>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>K</kbd></td>
              <td>Open Command Palette &amp; Search</td>
              <td>App-wide</td>
            </tr>
            <tr>
              <td><kbd>?</kbd></td>
              <td>Open Product Documentation (this guide)</td>
              <td>App-wide</td>
            </tr>
            <tr>
              <td><kbd>1</kbd> – <kbd>9</kbd></td>
              <td>Navigate views (Today, Inbox, Matrix, Next, etc.)</td>
              <td>Main Window</td>
            </tr>
            <tr>
              <td><kbd>N</kbd></td>
              <td>New item in-app capture</td>
              <td>Main Window</td>
            </tr>
            <tr>
              <td><kbd>P</kbd></td>
              <td>Start Process Mode</td>
              <td>Inbox</td>
            </tr>
            <tr>
              <td><kbd>D</kbd></td>
              <td>Disposition: Do (Self)</td>
              <td>Process Mode</td>
            </tr>
            <tr>
              <td><kbd>W</kbd></td>
              <td>Disposition: Delegate (Waiting For)</td>
              <td>Process Mode</td>
            </tr>
            <tr>
              <td><kbd>S</kbd></td>
              <td>Disposition: Schedule (Future Date)</td>
              <td>Process Mode</td>
            </tr>
            <tr>
              <td><kbd>R</kbd></td>
              <td>Disposition: Someday / Reference</td>
              <td>Process Mode</td>
            </tr>
            <tr>
              <td><kbd>X</kbd></td>
              <td>Disposition: Drop (Trash)</td>
              <td>Process Mode</td>
            </tr>
            <tr>
              <td><kbd>Space</kbd></td>
              <td>Start / Pause Focus Block on selected item</td>
              <td>Today / Next Actions</td>
            </tr>
            <tr>
              <td><kbd>J</kbd> / <kbd>K</kbd> or <kbd>↓</kbd> / <kbd>↑</kbd></td>
              <td>Move selection down / up</td>
              <td>All Lists</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd></td>
              <td>Open item detail / Confirm action</td>
              <td>All Lists</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Close modal / Cancel / Exit Process mode</td>
              <td>All Windows</td>
            </tr>
          </tbody>
        </table>
      </section>

    </article>
  </div>
</div>
