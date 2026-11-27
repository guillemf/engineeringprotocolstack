---
layout: default
title: "Threadline User Guide & CPU Protocol Documentation"
subtitle: "The CPU Layer of The Engineering Protocol Stack"
description: "Comprehensive guide and reference for Threadline v1.2.0 — capture, decide, prioritize, plan your day, and manage your capacity as an engineering leader."
needs_tools: true
permalink: /tools/threadline/docs/
lang: en
alt_lang_url: /es/tools/threadline/docs/
---

<div class="docs-wrap">
  <header class="docs-header">
    <div class="docs-meta">
      <span class="badge">App v1.2.0</span>
      <span class="badge">CPU Layer Architecture</span>
      <span>Published for <a href="https://engineeringprotocolstack.com">The Engineering Protocol Stack</a></span>
    </div>
    <h1>Threadline User Guide &amp; Documentation</h1>
    <div class="docs-subtitle">Managing Attention, Capacity, and Execution as an Engineering Leader</div>
    <p>Threadline is the <strong>CPU layer</strong> of <em>The Engineering Protocol Stack</em> made into software. It turns the personal protocols from the book—collection, inbox processing, the Eisenhower Matrix, context grouping, focus blocks, and regular reviews—into a fast, local-first desktop application.</p>
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
          <li><a href="#tray">Tray Popover</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Daily Execution</div>
        <ul class="docs-nav-list">
          <li><a href="#today">Today &amp; Daily Priorities</a></li>
          <li><a href="#daily-kickoff">Daily Kick-Off</a></li>
          <li><a href="#plan-your-day">Plan Your Day</a></li>
          <li><a href="#focus-blocks">Focus Blocks (Pomodoro)</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Processing &amp; Routing</div>
        <ul class="docs-nav-list">
          <li><a href="#inbox">Inbox &amp; Process Mode</a></li>
          <li><a href="#decision-flow">The Book's Decision Flow</a></li>
          <li><a href="#calendar-handoff">Dated Work &amp; the Calendar</a></li>
          <li><a href="#matrix">The Eisenhower Matrix</a></li>
          <li><a href="#next-actions">Next Actions &amp; Contexts</a></li>
          <li><a href="#waiting-for">Waiting &amp; Follow-Ups</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#scheduled">Scheduled View</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Reviews &amp; Maintenance</div>
        <ul class="docs-nav-list">
          <li><a href="#review-daily">Daily Review (Closeout)</a></li>
          <li><a href="#review-weekly">Weekly Review (Housekeeping)</a></li>
          <li><a href="#review-monthly">Monthly Migration</a></li>
          <li><a href="#stats">Stats</a></li>
          <li><a href="#trash">Trash &amp; Recovery</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">AI Coach &amp; Editions</div>
        <ul class="docs-nav-list">
          <li><a href="#coach">The AI Coach</a></li>
          <li><a href="#editions">Free, Pro &amp; Trial</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">System Reference</div>
        <ul class="docs-nav-list">
          <li><a href="#settings">Settings Reference</a></li>
          <li><a href="#calendar-feeds">Calendar Feeds</a></li>
          <li><a href="#data-backup">Data, Backup &amp; Import</a></li>
          <li><a href="#journal">Planning Journal</a></li>
          <li><a href="#updates">Updates</a></li>
          <li><a href="#keyboard-shortcuts">Keyboard Shortcuts</a></li>
        </ul>
      </div>
    </aside>

    <!-- Main Content Area -->
    <article class="docs-body">

      <!-- SECTION: THE CPU LAYER -->
      <section id="the-cpu-layer" class="docs-section">
        <h2>🧠 The CPU Layer: Managing Yourself</h2>
        <p>In <em>The Engineering Protocol Stack</em>, the human side of engineering leadership is organized into three layers: <strong>CPU</strong> (managing yourself), <strong>LAN</strong> (managing your team and local relationships), and <strong>WAN</strong> (managing across the organization, executives, and external partners). Threadline covers the first one.</p>

        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Task Manager — Task Switching</div>
          <p><em>"You can't multitask because you have only one processor, your brain."</em></p>
          <p><em>"Our mind is for having ideas, not holding them."</em> — David Allen, quoted in <em>Task Manager</em>, Collection.</p>
        </div>

        <p>Three ideas from Part I shape how the app works:</p>

        <ol>
          <li><strong>Task switching has a cost.</strong> The book cites a study from the University of California, Irvine: <em>"it takes 23 minutes and 15 seconds to get back to a task after an interruption on average."</em> (<em>Task Manager</em>, Divide your time into slices.) Threadline keeps capture and execution apart so a new thought never forces a switch.</li>
          <li><strong>Working memory is a poor store.</strong> The <em>RAM, Your Memory</em> chapter walks through six memory illusions: Attention, Memory, Confidence, Knowledge, Cause and Potential. The answer is an external, trusted place for every commitment. Threadline is that place.</li>
          <li><strong>Time is finite.</strong> <em>Process Organization</em> opens with around 30,000 gold ingots, one spent each day. Its lesson: <em>"it is never about the amount of time, but the quality of the time"</em>. The reviews, the Matrix and the focus blocks exist to protect that quality.</li>
        </ol>

        <p>Threadline is a tool built on the book, not a replacement for it. Where the app does something the book does not describe, this guide says so. Where the book and the app differ, the book states the idea and the guide describes what the app actually does.</p>

        <h3 id="layer-check">The CPU Layer Diagnostic Check</h3>
        <p>The chapter <em>Layer check: CPU</em> offers eight statements as <em>"a quick diagnostic, not as a scorecard."</em> Use them to judge the health of your personal operating system:</p>

        <ul class="check-list">
          <li>I have one trusted place where I capture tasks before they compete for my attention.</li>
          <li>I can explain how I choose what to work on today, this week, and later.</li>
          <li>I protect uninterrupted time for work that requires concentration.</li>
          <li>I do not rely on working memory to remember commitments, decisions, or follow-ups.</li>
          <li>I have a simple review routine that keeps my task system current.</li>
          <li>I know which information I need to learn now and what I can deliberately ignore.</li>
          <li>I have a way to turn useful notes, decisions, and lessons into material I can find again.</li>
          <li>My personal system reduces friction instead of becoming another job to maintain.</li>
        </ul>
        <p>If several answers are "not yet", the book advises: <em>"start with the smallest useful protocol: capture tasks in one place, protect one focus block, or establish a weekly review."</em> Those three protocols map to Quick Capture, a focus block, and the Weekly Review below.</p>
      </section>

      <!-- SECTION: FIRST RUN & ONBOARDING -->
      <section id="first-run" class="docs-section">
        <h2>🚀 First Run &amp; Onboarding</h2>
        <p>Threadline is <strong>local-first</strong>. There is no account, no sign-in and no telemetry. Your items, notes, plans and reviews live in a SQLite file on your computer. The app reaches the network only for the features you turn on: update checks, calendar feeds, the AI coach and licence checks. The full list is in the privacy policy under Settings → About.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Legal-eula-Max.png' | relative_url }}" alt="Threadline licence agreement shown on first run">
          <figcaption>The first-run licence agreement. Accept to continue; Quit leaves without using the app.</figcaption>
        </figure>

        <h3>The 4-Step Onboarding Walkthrough</h3>
        <p>After the agreement, a short walkthrough introduces the working loop. <kbd>Enter</kbd> moves forward, the arrow keys move between the first three screens, and <kbd>Esc</kbd> skips the rest and finishes with default settings.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Onboarding-step-1-capture-Max.png' | relative_url }}" alt="Onboarding step 1: Capture everything">
          <figcaption>Step 1 — Capture everything: nothing gets lost. The moment a thought arrives, capture it and sort it out later.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Onboarding-step-2-decide-once-Max.png' | relative_url }}" alt="Onboarding step 2: Decide once">
          <figcaption>Step 2 — Decide once: every item becomes an action—Do, Delegate, Schedule, Reference or Drop. Decide once, then move on.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Onboarding-step-3-plan-three-Max.png' | relative_url }}" alt="Onboarding step 3: Plan three">
          <figcaption>Step 3 — Plan three: pick three priorities each morning. That is your signal through the noise.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Onboarding-step-4-setup-Max.png' | relative_url }}" alt="Onboarding step 4: Set up Threadline">
          <figcaption>Step 4 — Set up Threadline: confirm the capture shortcut, working hours, language and theme. An optional checkbox adds five sample items so you can practice processing at once.</figcaption>
        </figure>
      </section>

      <!-- SECTION: FAST CAPTURE & COMMAND PALETTE -->
      <section id="capture" class="docs-section">
        <h2>⚡ Fast Capture Anywhere</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Process Organization — Step Four; Personal Knowledge Management — Capture without friction</div>
          <p><em>"The separation between collect and process is crucial."</em></p>
          <p><em>"A capture system you have to think about while using it is a capture system you'll stop using within a week. Optimize for zero friction first, structure second."</em></p>
        </div>

        <p>The global shortcut is <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> on macOS and <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> on Windows and Linux. You can change it in Settings → Capture. If another app already owns the combination, Threadline opens that tab with a warning so you can pick another. The shortcut floats a small capture window over whatever you are using, then returns you to it.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Quick-Capture-empty-input-Max.png' | relative_url }}" alt="Quick Capture floating window ready for input">
          <figcaption>The Quick Capture window: one field, nothing to decide. Type the thought.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Quick-Capture-typed-thought-Max.png' | relative_url }}" alt="Quick Capture with a typed thought ready to submit">
          <figcaption>Press <kbd>Enter</kbd> to save and close. <kbd>Shift</kbd> + <kbd>Enter</kbd> opens an optional notes field. <kbd>Esc</kbd> cancels.</figcaption>
        </figure>

        <p>Inside the main window, the sidebar <strong>Capture</strong> button and the <kbd>N</kbd> key open a one-line capture bar at the top of the screen. On macOS, if you grant Accessibility access, the capture window can pre-fill the text you had selected in the other app. Every capture lands in the Inbox and records where it came from: Manual, Shortcut, Tray or Import. Nothing is classified at capture time.</p>

        <h3 id="command-palette">Command Palette &amp; Search (<kbd>Cmd/Ctrl+K</kbd>)</h3>
        <p>From anywhere in the app, <kbd>Cmd/Ctrl</kbd> + <kbd>K</kbd> opens the palette. It does two things:</p>
        <ul>
          <li><strong>Eight navigation commands:</strong> Go to Today, Inbox, Matrix, Next, Waiting, Projects, Scheduled and Trash. Review, Stats and Settings are not in the palette; they have the shortcuts <kbd>Cmd/Ctrl+R</kbd> and <kbd>Cmd/Ctrl+,</kbd>, and the sidebar.</li>
          <li><strong>Item search:</strong> type to search titles and notes in every status except dropped, so finished, reference and calendared items are found too.</li>
        </ul>
        <p>Use <kbd>↑</kbd> / <kbd>↓</kbd> to move, <kbd>Enter</kbd> to run the highlighted entry and <kbd>Esc</kbd> to close. Choosing an item jumps to the screen that holds it: Inbox, Matrix (for active tasks), Waiting or Scheduled. A calendared item opens a small panel in place (see <a href="#calendar-handoff">Dated Work &amp; the Calendar</a>). Finished and reference items have no screen of their own, so the palette simply closes.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Command-palette-open.png' | relative_url }}" alt="Command Palette open with the navigation commands">
          <figcaption>Command Palette: the eight navigation commands, ready before you type.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Command-palette-search-results.png' | relative_url }}" alt="Command Palette search results listing matching items">
          <figcaption>Search results: matching commands first, then matching items.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Search-calendared-item.png' | relative_url }}" alt="Command Palette showing a calendared item with Send again and Back to list">
          <figcaption>A calendared item found through search: its slot, Send again and, for 24 hours, Back to list.</figcaption>
        </figure>

        <h3>Help</h3>
        <p>The pinned shortcut bar at the bottom of the window shows the keys for the current screen. At its right edge, <strong>Help</strong> (or the <kbd>?</kbd> key) opens this guide in your browser.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Shell-keyboard-hint-bar.png' | relative_url }}" alt="Pinned keyboard hint bar with the Help control at its right edge">
          <figcaption>The shortcut bar: the keys that work on this screen, and Help.</figcaption>
        </figure>

        <h3 id="tray">Tray Popover</h3>
        <p>Click the Threadline icon in the macOS menu bar or the system tray to open a small popover. It offers Quick Capture (with your shortcut), Inbox with a live count, Today's Big 3, Start Focus Block (with your default length), Open Main Window, Preferences, Check for Updates and Quit. <kbd>Esc</kbd> closes it.</p>

        {% comment %}Tray popover figure hidden until it can be captured (the menu-bar icon was off screen during the 1.2 capture).{% endcomment %}
        {% comment %}
        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Tray-popover.png' | relative_url }}" alt="Tray popover listing capture, inbox, today, focus block and window actions">
          <figcaption>The tray popover: capture, inbox, focus and updates without opening the main window.</figcaption>
        </figure>
        {% endcomment %}
      </section>

      <!-- SECTION: TODAY & DAILY EXECUTION -->
      <section id="today" class="docs-section">
        <h2>☀️ Today &amp; Daily Priorities</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Process Organization — Daily Planning</div>
          <p><em>"Spend time in preparation, and your time will have double value."</em></p>
          <p><em>"Every morning, spend a few minutes preparing your day. This is your Daily Log: a fresh entry for the current date, listing the tasks you plan to work on today."</em></p>
        </div>

        <p>The <strong>Today</strong> view is your cockpit. On the first visit of a day with no plan, it opens <a href="#plan-your-day">Plan Your Day</a>. Afterwards it shows the plan: your intention for the day, up to three priorities, follow-ups due, items scheduled for today, quick wins, and today's calendar events in a side panel.</p>

        <div class="protocol-box amber">
          <div class="protocol-box__title">Book vs. app: "Big 3"</div>
          <p>"Big 3" is Threadline's own name for the day's priorities, and the limit of three is the app's design choice. It is not in the book, which asks for a daily plan but sets no number. The app's own reasoning is on screen when you pick a fourth: <em>Three is a plan. Ten is a wish list.</em> The daily-plan limit is not configurable.</p>
        </div>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-Max.png' | relative_url }}" alt="Today view showing the Big 3 priorities, follow-ups, quick wins and today's events">
          <figcaption>The Today cockpit: Big 3 with progress, follow-ups, scheduled work and today's events from your calendar feeds.</figcaption>
        </figure>

        <p>Each priority row offers <strong>Start focus</strong>, <strong>Done</strong> and <strong>Remove</strong>. Double-click a row to edit it; right-click for the item menu. When all three are done, the app suggests the daily review. The header holds the shortcuts to <strong>Daily kick-off</strong> (<kbd>K</kbd>), <strong>Capture</strong>, <strong>Closeout</strong> (the Daily Review) and, while the Inbox has items, <strong>Process</strong>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-capture-bar-Max.png' | relative_url }}" alt="In-app capture bar on the Today view">
          <figcaption>The in-app capture bar: add a thought without leaving the screen.</figcaption>
        </figure>

        <h3 id="daily-kickoff">The Daily Kick-Off</h3>
        <p>Press <kbd>K</kbd> on Today, or use the <strong>Daily kick-off</strong> button, to open a drawer that reads the day's load. It is a suggestion, and <em>nothing changes until you choose</em>. It shows:</p>
        <ul>
          <li><strong>Capacity:</strong> minutes planned against minutes of free time, meetings, items without an estimate and how fragmented the free time is.</li>
          <li><strong>Suggested Big 3:</strong> drawn only from important work (Q1 and Q2). <strong>Use as Big 3</strong> applies it; <kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd> does the same.</li>
          <li><strong>Suggested order</strong>, <strong>Could move off today</strong> (move to tomorrow, drop or delegate), <strong>Stalled items</strong> and <strong>Quick wins</strong>.</li>
        </ul>
        <p>Without a Pro coach the drawer says <em>Rule-based suggestion</em>; with one it says <em>Written by your AI coach</em>. See <a href="#coach">The AI Coach</a>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-daily-kickoff.png' | relative_url }}" alt="Daily kick-off drawer comparing planned time with free time">
          <figcaption>The Daily Kick-off: planned minutes against the free time your calendar leaves. If the plan does not fit, it says by how much.</figcaption>
        </figure>

        <h3 id="plan-your-day">Plan Your Day</h3>
        <p>Plan Your Day opens by itself the first time you visit Today on a given day, and again from <strong>Edit the plan</strong>. It has five steps. <kbd>Enter</kbd> moves forward, <kbd>Esc</kbd> moves back, and <strong>Skip today</strong> leaves the day unplanned. The book allows <em>"15-20 minutes"</em> for daily planning (<em>Process Organization</em>, Daily Planning), and the flow is built to finish well inside that.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-your-day-step-1-unfinished.png' | relative_url }}" alt="Plan your day step 1: yesterday's unfinished tasks">
          <figcaption>Step 1 — Yesterday's unfinished tasks: reschedule each one or leave it where it is.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-your-day-step-2-due-today.png' | relative_url }}" alt="Plan your day step 2: items due today">
          <figcaption>Step 2 — Due today: items scheduled for today and follow-ups that have matured. With a coach, follow-ups come in a suggested order.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-your-day-step-3-pick-priorities.png' | relative_url }}" alt="Plan your day step 3: pick up to three priorities">
          <figcaption>Step 3 — Pick up to 3 priorities. A warning appears when the plan exceeds your free focus time. With no active tasks to choose from, the step offers Process Inbox.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-your-day-step-4-focus-blocks.png' | relative_url }}" alt="Plan your day step 4: reserve focus blocks and add them to the calendar">
          <figcaption>Step 4 — Focus blocks: today's meetings, a start time and duration for each priority, an overlap warning, and <strong>Add to calendar</strong> for the blocks you reserved.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-plan-your-day-step-5-intention.png' | relative_url }}" alt="Plan your day step 5: set an intention">
          <figcaption>Step 5 — Set an intention: one line for the day. A coach may suggest one; <strong>Use</strong> copies it, and nothing is saved until you press Finish.</figcaption>
        </figure>

        <p><strong>Add to calendar</strong> follows Settings → Calendars. With the system calendar it opens one <code>.ics</code> file holding the day's focus blocks in your default calendar app. With Google Calendar or Outlook on the web it opens one prefilled event page per reserved block.</p>

        <h3 id="focus-blocks">Focus Blocks (The Pomodoro Protocol)</h3>
        <div class="protocol-box amber">
          <div class="protocol-box__title">📖 Book Reference: Task Manager — Divide your time into slices</div>
          <p><em>"In a nutshell, this technique proposes using a timer to break down work into intervals of around twenty minutes in length, at the end of which you take a five-minute break; the duration in minutes can vary, but these are the standard values."</em></p>
          <p><em>"There is nothing that urgent that can't wait for twenty minutes, and if there is, people will find a way to let you know."</em></p>
        </div>

        <p>Start a block with <strong>Start focus</strong> on a priority, or <strong>Start Focus Block</strong> in the tray. A bar with the task and the minutes left stays visible on every screen while it runs. Its length is the task's estimate, or your default when it has none.</p>

        <div class="protocol-box amber">
          <div class="protocol-box__title">Book vs. app: block length</div>
          <p>The book's standard interval is about twenty minutes, and it says the length can vary. Threadline's default is 50 minutes, with a 10-minute break and a 5-minute extend step. All three are adjustable in Settings → Planning. Choose the rhythm that suits your work, as the book suggests.</p>
        </div>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Today-focus-block-running-Max.png' | relative_url }}" alt="Focus block in progress with the remaining time and the Interrupted and Abandon buttons">
          <figcaption>A focus block running: the task, the minutes left, <strong>Interrupted</strong> and <strong>Abandon</strong>.</figcaption>
        </figure>

        <ul>
          <li><strong>Interrupted</strong> (<kbd>I</kbd>) opens Quick Capture so you can note the interruption, then returns you to the block. It does not pause or stop the timer. This follows the book: breaks <em>"are the times you need to use to attend to these interruptions."</em> (<em>Task Manager</em>.)</li>
          <li><strong>Abandon</strong> (<kbd>A</kbd>) ends the block early.</li>
          <li>When the timer ends, a dialog offers <strong>Mark done</strong>, <strong>Continue</strong> (<kbd>C</kbd>), <strong>Extend 5 min</strong> (<kbd>E</kbd>) and <strong>Stop</strong>. It has no other way out.</li>
          <li>On macOS, Settings → Planning can switch on Do Not Disturb during a block, using two shortcuts you create in the Shortcuts app. The book asks you to <em>"put your phone in Not Disturb mode"</em> for the same reason.</li>
        </ul>
      </section>

      <!-- SECTION: INBOX & PROCESS MODE -->
      <section id="inbox" class="docs-section">
        <h2>📥 Inbox &amp; Process Mode</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Process Organization — Step Three: Process your InBoxes</div>
          <p><em>"Processing is different from collecting. Collecting means capturing — getting things out of your head and into a trusted place. Processing means deciding what each item actually is and what should happen to it."</em></p>
        </div>

        <p>The <strong>Inbox</strong> holds every unprocessed capture. Select an item with <kbd>J</kbd> / <kbd>K</kbd> or the arrow keys to see it in the inspector, where <kbd>Enter</kbd> (or the Edit button) edits the title and notes in place. Press <kbd>P</kbd> from anywhere in the app to start <strong>Process mode</strong>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-list-Max.png' | relative_url }}" alt="Threadline Inbox listing unprocessed captures">
          <figcaption>The Inbox: unprocessed captures with their source and age.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-item-edit-form-Max.png' | relative_url }}" alt="Editing an item's title and notes inside the Inbox inspector">
          <figcaption>Inline edit: refine the title and add Markdown notes before you decide.</figcaption>
        </figure>

        <h3>Process Mode and the Six Dispositions</h3>
        <p>Process mode shows one item at a time, oldest first, with a progress count. You give each item one disposition. A <strong>Takes &lt; 2 min</strong> switch above the buttons turns the choice into <strong>Do it now</strong>, which marks the item done. <kbd>Esc</kbd> backs out of a form, then leaves Process mode. A summary at the end counts the items per disposition.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-mode.png' | relative_url }}" alt="Process mode showing one item with the Do, Delegate, Schedule, Calendar, Reference and Drop buttons">
          <figcaption>Process mode: one item, six dispositions, and the two-minute switch.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-do-Max.png' | relative_url }}" alt="Disposition Do: quadrant, context, estimate and project">
          <figcaption>1. Do (<kbd>D</kbd>): you will do it. Choose a quadrant and a context group; add an estimate and an existing project if they apply. The item becomes an active task.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-delegate.png' | relative_url }}" alt="Disposition Delegate: who owns it and the follow-up date">
          <figcaption>2. Delegate (<kbd>G</kbd>): name who owns it now and a follow-up date. The item moves to Waiting.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-schedule.png' | relative_url }}" alt="Disposition Schedule: the date the item returns">
          <figcaption>3. Schedule (<kbd>S</kbd>): not for now. Pick today or a later date; the item sleeps until that day, then comes back as an active task.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Inbox-process-calendar.png' | relative_url }}" alt="Disposition Calendar: date, start time and minutes">
          <figcaption>4. Calendar (<kbd>C</kbd>): the item has a date and time. Set the date, start time and minutes; it goes to your calendar and leaves your lists.</figcaption>
        </figure>

        <ul>
          <li><strong>5. Reference (<kbd>R</kbd>):</strong> useful information that needs no action. It acts at once and stays findable through search.</li>
          <li><strong>6. Drop (<kbd>X</kbd>):</strong> not worth doing. It acts at once and moves the item to the Trash.</li>
        </ul>

        <h3 id="decision-flow">The Book's Decision Flow, Branch by Branch</h3>
        <p>The book gives one flow for every inbox item (<em>Task Manager</em>, Processing; <em>Process Organization</em>, Step Three). Process mode follows it closely, with a few differences worth knowing:</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>The book asks</th>
              <th>In Threadline</th>
              <th>Where the app differs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Does this require action?</strong> <em>"If no, there are two options: keep it as reference material, or discard it."</em></td>
              <td><strong>Reference</strong> (<kbd>R</kbd>) keeps it. <strong>Drop</strong> (<kbd>X</kbd>) discards it to the Trash.</td>
              <td>A reference item has no screen of its own. You find it again through search (<kbd>Cmd/Ctrl+K</kbd>). The book's archive folder is outside the app.</td>
            </tr>
            <tr>
              <td><strong>Is it one action or more than one?</strong> <em>"If it requires several steps, it is a project"</em></td>
              <td>Create the project in <strong>Projects</strong>. In the Do form you can attach the item to an existing project; later, <strong>Move to project</strong> in the item menu does the same.</td>
              <td><strong>No direct equivalent.</strong> Process mode cannot create a project or turn an item into one.</td>
            </tr>
            <tr>
              <td><strong>Can someone else do it?</strong> <em>"If yes, delegate it and add a brief reminder to follow up."</em></td>
              <td><strong>Delegate</strong> (<kbd>G</kbd>): a name and a follow-up date, both required. The item goes to Waiting.</td>
              <td>A direct match. The follow-up date is the book's reminder.</td>
            </tr>
            <tr>
              <td><strong>Can it be done in under two minutes?</strong> <em>"If yes, do it now."</em></td>
              <td>The <strong>Takes &lt; 2 min</strong> switch, then <strong>Do it now</strong>.</td>
              <td>The switch sits above all the buttons, so you may use it before any branch, not only after the delegate question.</td>
            </tr>
            <tr>
              <td><strong>Does it have a fixed date or deadline?</strong> <em>"If it belongs to a specific date, it goes on your calendar."</em></td>
              <td><strong>Calendar</strong> (<kbd>C</kbd>) hands the item to your calendar app or browser. See <a href="#calendar-handoff">Dated Work &amp; the Calendar</a>.</td>
              <td>The hand-off is one way. Threadline cannot edit or remove the event afterwards.</td>
            </tr>
            <tr>
              <td><em>"If it needs to happen sometime this month, it goes into your Monthly Log. If it is further away, it goes into your Future Log."</em></td>
              <td><strong>Schedule</strong> (<kbd>S</kbd>) holds the item until a date you choose.</td>
              <td>The closest match, but not the same. There are no Monthly or Future Log pages, and Schedule works by day, not by month.</td>
            </tr>
            <tr>
              <td>Everything else: you do it, in priority order.</td>
              <td><strong>Do</strong> (<kbd>D</kbd>): quadrant, context group, estimate, optional project. The task appears in the Matrix and in Next.</td>
              <td>The book's prioritizing and grouping steps happen in the same form.</td>
            </tr>
          </tbody>
        </table>
        <p>The goal, in the book's words: <em>"Inbox Zero — not as a daily obsession, but as a reliable state you return to regularly."</em> (<em>Process Organization</em>, Step Three.)</p>
      </section>

      <!-- SECTION: DATED WORK & THE CALENDAR -->
      <section id="calendar-handoff" class="docs-section">
        <h2>🗓️ Dated Work &amp; the Calendar</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Task Manager — Does it have a date?</div>
          <p><em>"The rule here is that we have a calendar for tasks that should happen on a particular date."</em></p>
          <p><em>"It makes no sense to do a task before or after the exact time it needs to be done, so the calendar is where tasks with specific dates should be, not in our system."</em></p>
        </div>

        <p>The book is clear: a task with a fixed date belongs on your calendar. Threadline follows that rule with <strong>Send to calendar</strong>. You can use it in two places: the <strong>Calendar</strong> disposition (<kbd>C</kbd>) in Process mode, and <strong>Send to calendar</strong> in the right-click menu of an active task. Both ask for a date, a start time and the minutes. The duration defaults to the task's estimate, or 30 minutes without one.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Next-context-menu.png' | relative_url }}" alt="Item menu on an active task with Edit, Delete, Move to project and Send to calendar">
          <figcaption>The item menu on an active task: Edit, Delete, Move to project and Send to calendar.</figcaption>
        </figure>

        <p>What happens next:</p>
        <ul>
          <li>The item becomes <strong>Calendared</strong>. It leaves the Inbox, Next, Today and the Matrix. It is not in the Scheduled view either; search still finds it.</li>
          <li>Settings → Calendars → <strong>Send to calendar</strong> chooses the hand-off. <em>Calendar app</em> opens an event file in your default calendar app, and nothing leaves your device. <em>Google Calendar</em> and <em>Outlook on the web</em> open a prefilled page in your browser; the title and time go to Google or Microsoft.</li>
          <li>From search, a calendared item offers <strong>Send again</strong> and, for 24 hours, <strong>Back to list</strong>. The undo toast also works within that window.</li>
          <li>The hand-off is one way. If you move the item back, remove the event from your calendar yourself. Threadline says so next to the button.</li>
        </ul>

        <div class="protocol-box amber">
          <div class="protocol-box__title">Book vs. app: what the Scheduled view is</div>
          <p>The Scheduled view is <strong>not</strong> the calendar the book describes. It is a day-by-day timeline of two things: items you processed with <strong>Schedule</strong>, which Threadline holds until their day, and, read-only, the events from your calendar feeds. Use <strong>Calendar</strong> for work that has a time; use <strong>Schedule</strong> for work that has a day to come back on. See <a href="#scheduled">Scheduled View</a>.</p>
        </div>
      </section>

      <!-- SECTION: THE EISENHOWER MATRIX -->
      <section id="matrix" class="docs-section">
        <h2>🗂️ The Eisenhower Matrix</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Task Manager — Eisenhower Matrix</div>
          <p><em>"Dwight D. Eisenhower never claimed this method, but it is attributed to him because he said: 'I have two kinds of problems, the urgent and the important. The urgent are not important, and the important are never urgent.'"</em></p>
          <p><em>"This method is the first filter you can apply."</em></p>
        </div>

        <p>When you process an item with <strong>Do</strong>, you place it in one of four quadrants. The Matrix view shows every active task by quadrant. Move a card by dragging it, or select it with <kbd>J</kbd> / <kbd>K</kbd> and press <kbd>1</kbd> to <kbd>4</kbd>. A warning appears when most of your work is urgent: <em>Protect time for Q2.</em></p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Matrix-quadrants-Max.png' | relative_url }}" alt="The four Eisenhower quadrants in Threadline">
          <figcaption>The Matrix: Do first, Schedule, Delegate and Eliminate.</figcaption>
        </figure>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Quadrant</th>
              <th>What the book says</th>
              <th>In Threadline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Q1: Important &amp; Urgent</strong></td>
              <td><em>"Anything vital to our activity that we can't postpone."</em></td>
              <td><strong>Do first.</strong> Execute now.</td>
            </tr>
            <tr>
              <td><strong>Q2: Important, not Urgent</strong></td>
              <td><em>"We can take our time to execute those critical things."</em> If you postpone it, <em>"we can schedule it and execute it at the ideal time."</em></td>
              <td><strong>Schedule.</strong> Reserve a focus block for it in Plan Your Day.</td>
            </tr>
            <tr>
              <td><strong>Q3: Urgent, not Important</strong></td>
              <td><em>"Any task that we can't postpone but won't significantly impact our activity."</em> The book's advice: <em>"delegate tasks to someone who can do it as soon as possible."</em></td>
              <td><strong>Delegate.</strong> <kbd>G</kbd> hands the card to someone and moves it to Waiting.</td>
            </tr>
            <tr>
              <td><strong>Q4: Not Important, not Urgent</strong></td>
              <td><em>"These things are not vital to us and can be delayed."</em> The book's advice: <em>"if it's not important and not urgent, delete it."</em></td>
              <td><strong>Eliminate.</strong> <kbd>X</kbd> drops the card to the Trash.</td>
            </tr>
          </tbody>
        </table>
        <p>The Matrix is also where the app's rule for important work is easiest to see. The Daily Kick-Off suggests priorities only from Q1 and Q2.</p>
      </section>

      <!-- SECTION: NEXT ACTIONS & CONTEXTS -->
      <section id="next-actions" class="docs-section">
        <h2>📋 Next Actions &amp; Context Groups</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Task Manager — Grouping</div>
          <p><em>"Sometimes efficiency can be achieved by grouping tasks meaningfully."</em></p>
          <p><em>"The number of groups and their type depend on each person, circumstance, or mood. You need to make this decision, but do so in a way that minimizes context switching as much as possible."</em></p>
        </div>

        <p>The <strong>Next</strong> view lists every active task you own, grouped by context. Filter by quadrant or project, pick a context pill to see one group, and use <strong>Batch</strong> to work through a single group in one sitting. The header shows the count and the total estimated time.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Next-next-actions-Max.png' | relative_url }}" alt="Next view listing active tasks grouped by context">
          <figcaption>Next: active tasks by context group, with quadrant, estimate and project filters.</figcaption>
        </figure>

        <h3>The Default Context Groups</h3>
        <p>The book's own examples of context are place, time, support, people and application. Threadline starts you with seven groups based on the kind of work. They are yours to change: rename, reorder, add or remove them in Settings → Capture.</p>

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
          <figcaption>Other: general tasks that fit none of the six groups above.</figcaption>
        </figure>
      </section>

      <!-- SECTION: WAITING FOR & DELEGATION -->
      <section id="waiting-for" class="docs-section">
        <h2>⏳ Waiting &amp; Follow-Ups</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Process Organization — Step Three</div>
          <p><em>"If yes, delegate it and add a brief reminder to follow up."</em></p>
        </div>

        <p>The <strong>Waiting</strong> view holds everything you delegated, grouped by person. A <em>Follow up</em> badge marks an item whose date has arrived. On the day, it also appears under Follow-ups in Today and in step 2 of Plan Your Day.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Waiting-list.png' | relative_url }}" alt="Waiting view grouped by person with follow-up dates">
          <figcaption>Waiting: each person with what they owe you. Use Tab to focus a row, then <kbd>D</kbd> for Done, <kbd>T</kbd> to Take back or <kbd>S</kbd> to Snooze 3 days.</figcaption>
        </figure>

        <p>When a delegation does not come with a date of its own, as in the Monthly Migration, the follow-up falls three workdays out by default. Settings → Reviews → Delegate follow-up changes that delay.</p>
      </section>

      <!-- SECTION: PROJECTS -->
      <section id="projects" class="docs-section">
        <h2>🏗️ Projects</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Task Manager — One or more actions?; Process Organization — SMART</div>
          <p><em>"If we need to perform more than one task to complete this item, that is what we call a project."</em></p>
          <p><em>"Once you create a project, you must treat it as a new inbox containing only the next task."</em></p>
          <p><em>"Include items that are SMART."</em> — Specific, Measurable, Achievable, Relevant, Time-bound. On the last letter: <em>"Each task should have a rough sense of how long it will take."</em></p>
        </div>

        <p>Projects are lightweight. A project has a name, an expected outcome and an optional review date. Each active project shows one <strong>next action</strong> that you choose from its tasks; a project without one shows <em>No next action</em>, and the Weekly Review flags it. The Projects screen has three tabs: Active, Someday and Closed.</p>

        <p>The app does not check whether a task is SMART. The estimate field in the Do form is the nudge for the book's <em>Time-bound</em>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-tab-active-Max.png' | relative_url }}" alt="Active projects with their next actions">
          <figcaption>Active projects: the outcome and the single next action for each.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-new-project-form.png' | relative_url }}" alt="New project form with name, expected outcome and review date">
          <figcaption>New project: a name, an expected outcome and an optional review date.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-tab-someday-Max.png' | relative_url }}" alt="Someday projects tab">
          <figcaption>Someday: projects parked for later. <strong>Reactivate</strong> brings one back.</figcaption>
        </figure>

        <h3>Closing, Parking and Dropping a Project</h3>
        <p>A project can end three ways, and each asks what should happen to its open tasks:</p>
        <ul>
          <li><strong>Close project:</strong> <em>Complete them</em>, <em>Drop them</em> or <em>Unlink them</em>. Unlinking keeps the tasks as ordinary tasks.</li>
          <li><strong>Drop project:</strong> the same three choices.</li>
          <li><strong>Park for someday:</strong> <em>Drop them</em> or <em>Unlink them</em> only. A parked project is not finished, so its tasks are never reported as complete.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-close-project-dispositions.png' | relative_url }}" alt="Close project prompt asking what should happen to its open tasks">
          <figcaption>Closing a project: complete, drop or unlink its open tasks.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Projects-tab-closed-Max.png' | relative_url }}" alt="Closed projects tab">
          <figcaption>Closed: finished and dropped projects, newest first, read-only.</figcaption>
        </figure>
      </section>

      <!-- SECTION: SCHEDULED VIEW -->
      <section id="scheduled" class="docs-section">
        <h2>📅 Scheduled View</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Process Organization — Step Three</div>
          <p><em>"If it belongs to a specific date, it goes on your calendar. If it needs to happen sometime this month, it goes into your Monthly Log. If it is further away, it goes into your Future Log."</em></p>
        </div>

        <p>The Scheduled view is a timeline by day, soonest first. It lists items you processed with <strong>Schedule</strong>, which return to your active list on their day, and read-only events from your <a href="#calendar-feeds">calendar feeds</a>, for as many coming days as Settings → Insights allows. It is the app's nearest equivalent to the book's Monthly and Future Logs, kept by day. It is not a calendar.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Scheduled-list-Max.png' | relative_url }}" alt="Scheduled view showing days with scheduled items and calendar events">
          <figcaption>Scheduled: items waiting for their day, with feed events beside them.</figcaption>
        </figure>

        <p>Select a row with <kbd>J</kbd> / <kbd>K</kbd>, press <kbd>E</kbd> to edit an item or <kbd>R</kbd> to reschedule it. Calendar events are read-only.</p>
      </section>

      <!-- SECTION: REVIEWS & MAINTENANCE -->
      <section id="review-daily" class="docs-section">
        <h2>🔄 Review Rituals: Keeping the System Trustworthy</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Process Organization — Planning and Review</div>
          <p><em>"The journal only works if you use it consistently. That means building a small set of regular rituals — brief, focused, and predictable."</em></p>
        </div>

        <p>The Review screen has three tabs: Daily, Weekly and Monthly. The book teaches the rituals on a paper journal; Threadline gives each one a screen.</p>

        <h3>1. Daily Review (Evening Closeout, 10–15 minutes)</h3>
        <p>The book sets the time: <em>"This process shouldn't take more than 10-15 minutes."</em> It lists two jobs, <em>"Process inboxes"</em> and <em>"Process the daily log"</em>. The Daily Review has four steps for them:</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-daily-step-1-completed-Max.png' | relative_url }}" alt="Daily Review step 1: what got done today">
          <figcaption>Step 1 — What got done today: completed work, how much of the Big 3 closed, focus time and your task switches against the 7-day average.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-daily-step-2-unfinished-Max.png' | relative_url }}" alt="Daily Review step 2: unfinished priorities">
          <figcaption>Step 2 — Unfinished priorities: move to <strong>Tomorrow</strong> (<kbd>T</kbd>), <strong>Drop</strong> (<kbd>X</kbd>), edit (<kbd>E</kbd>) or reschedule (<kbd>S</kbd>). A task moved more than twice is flagged.</figcaption>
        </figure>

        <p>The flag follows the book's warning: <em>"When you migrate a task more than twice, you should consider deleting it."</em> (<em>Process Organization</em>, Daily review.) Either it is unimportant, you are not motivated to do it, or someone else should own it.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-daily-step-3-inbox-Max.png' | relative_url }}" alt="Daily Review step 3: inbox check">
          <figcaption>Step 3 — Inbox check: the goal is inbox zero. <kbd>P</kbd> opens Process mode.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-daily-step-4-close.png' | relative_url }}" alt="Daily Review step 4: blockers, a learning, energy and the closing line">
          <figcaption>Step 4 — Close: optional blockers, one learning and your energy from 1 to 5, then one calm closing line on effort against results.</figcaption>
        </figure>

        <p>The closing line sums up four numbers: priorities planned and closed, focus minutes, and meeting minutes. Without a Pro coach it reads, for example, <em>2 of 3 priorities closed, with 95 focus minutes against 240 minutes of meetings.</em> With one, a model words it from the same numbers. The line is never stored.</p>

        <h3 id="review-weekly">2. Weekly Review (Weekly Housekeeping)</h3>
        <p>The book calls the weekly review <em>"a housekeeping process"</em> and gives it four jobs: review the month log, review last week's daily logs, clean out outdated or irrelevant tasks, and select the tasks for the week. Its time budget: <em>"This process shouldn't take more than 10-15 minutes."</em></p>

        <div class="protocol-box amber">
          <div class="protocol-box__title">Book vs. app: length of the weekly review</div>
          <p>The book allows 10–15 minutes. Threadline's Weekly Review has seven steps, and its own introduction says <em>about 20 minutes</em>. The extra steps cover Waiting, projects and next week's calendar, which the paper journal does not track. Each step shows the time you spent on it. If the seven steps feel heavy, the book's version is a fair target: shorter is better than skipped. Progress is saved as you go.</p>
        </div>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-start-Max.png' | relative_url }}" alt="Weekly review start screen">
          <figcaption>Weekly Review start: your streak of consecutive weeks and the Start button.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-1-empty-inboxes-Max.png' | relative_url }}" alt="Weekly review step 1: empty your inboxes">
          <figcaption>Step 1 — Empty your inboxes: process everything you captured this week.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-2-review-waiting-Max.png' | relative_url }}" alt="Weekly review step 2: review Waiting for">
          <figcaption>Step 2 — Review Waiting for: follow up on what others owe you.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-3-review-projects-Max.png' | relative_url }}" alt="Weekly review step 3: review projects">
          <figcaption>Step 3 — Review projects: those needing attention come first; any without a next action are flagged.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-4-review-next-actions-Max.png' | relative_url }}" alt="Weekly review step 4: review next actions">
          <figcaption>Step 4 — Review next actions: is each one still the right one?</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-5-next-week-calendar-Max.png' | relative_url }}" alt="Weekly review step 5: next week's calendar">
          <figcaption>Step 5 — Look at next week's calendar: spot collisions before they arrive.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-6-next-week-focus-Max.png' | relative_url }}" alt="Weekly review step 6: choose next week's focus">
          <figcaption>Step 6 — Choose next week's focus: what single thing would make the week a success?</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-step-7-wins-and-lessons-Max.png' | relative_url }}" alt="Weekly review step 7: wins and lessons">
          <figcaption>Step 7 — Wins &amp; lessons: one line each is enough.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-weekly-complete-Max.png' | relative_url }}" alt="Weekly review complete">
          <figcaption>Review complete: total time and the updated streak.</figcaption>
        </figure>

        <p>Each step carries a short hint. With a Pro coach, the first six hints are written by the model and name the tasks involved. Without one, a rule-based hint stays. <kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd> confirms a step and moves on. The weekly reminder defaults to Friday at 16:00 and is set in Settings → Reviews.</p>

        <h3 id="review-monthly">3. Monthly Migration</h3>
        <p>The book's description: <em>"At the end of the month, you need to perform what we call 'Month Migration'."</em> Its aim is <em>"to review any pending tasks you left over from the previous month, evaluate whether they are still worthwhile, and decide whether to move or delete them."</em></p>

        <div class="protocol-box amber">
          <div class="protocol-box__title">Book vs. app: when and what</div>
          <p><strong>When.</strong> The book places it at the end of the month. Threadline places it on the <strong>first workday of the next month</strong> (Monday to Friday, no holiday calendar), when a banner on the Review screen and a notification say the migration for the month just ended is due. The banner shows only that day; the Monthly tab is always there.</p>
          <p><strong>What.</strong> The book's migration also creates next month's log and moves the future log. Threadline has no logs to create. It lists the tasks you have not touched in more than 30 days (adjustable in Settings → Reviews) and asks for one decision each.</p>
        </div>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-monthly-start-Max.png' | relative_url }}" alt="Monthly migration start screen">
          <figcaption>Monthly Migration start: how many tasks need a decision for the month.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-monthly-decide-tasks-Max.png' | relative_url }}" alt="Deciding each task during the monthly migration">
          <figcaption>Decide each task: <strong>Keep</strong> (<kbd>K</kbd>), <strong>Delegate</strong> (<kbd>D</kbd>) or <strong>Drop</strong> (<kbd>X</kbd>).</figcaption>
        </figure>

        <ul>
          <li><strong>Keep</strong> moves an active task to the next workday (or a date you pick); a delegated task stays as it is.</li>
          <li><strong>Delegate</strong> hands an active task to someone, or changes the owner and follow-up of a waiting one.</li>
          <li><strong>Drop</strong> moves the task to the Trash, where it stays restorable.</li>
          <li>Every task needs a decision before you can finish. Decisions are saved as you go and are not part of the <kbd>Cmd/Ctrl+Z</kbd> undo.</li>
          <li>For a task moved three times or more, the app offers to release it or rewrite it as a smaller step. With a Pro coach it adds a short suggestion, marked as written by your coach.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Review-monthly-nothing-to-migrate-Max.png' | relative_url }}" alt="Monthly migration with nothing to migrate">
          <figcaption>Nothing to migrate: you can still record the month as reviewed.</figcaption>
        </figure>
      </section>

      <!-- SECTION: STATS -->
      <section id="stats" class="docs-section">
        <h2>📊 Stats</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Book Reference: Task Manager — Key ideas</div>
          <p><em>"What we often call multitasking is usually task switching, and task switching has a cost."</em></p>
        </div>

        <p>Stats looks back over a window of days (28 by default; set it in Settings → Insights). Everything is computed on your device from your own data. It shows six figures: daily plans created against workdays, Big 3 completion, the weekly review streak, inbox zero days, focus time with its share spent on Q2, and the average task switches per workday. Two panels show your open tasks and your completed tasks by quadrant.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Stats-overview-Max.png' | relative_url }}" alt="Stats overview with six metric cards and quadrant breakdowns">
          <figcaption>Stats: six figures and two quadrant panels. Use them as feedback on where your attention goes, not as a scorecard.</figcaption>
        </figure>
      </section>

      <!-- SECTION: TRASH & RECOVERY -->
      <section id="trash" class="docs-section">
        <h2>🗑️ Trash &amp; Safety Net</h2>
        <p>Dropping a task is a decision, and Threadline lets you reverse it for a while. Dropped items sit in the Trash for 30 days by default, then are removed for good. You can change that period (1 to 365 days) in Settings → Data → Trash retention. Each row shows the days left. Restoring an item returns it to the view it came from.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Trash-list-Max.png' | relative_url }}" alt="Trash list with days left and restore actions">
          <figcaption>Trash: select a row and press <kbd>U</kbd> to restore it. <strong>Purge Trash</strong> deletes everything permanently after a confirmation.</figcaption>
        </figure>

        <p>For an immediate mistake, press <kbd>Cmd/Ctrl+Z</kbd> or choose Undo on the toast that follows each change. The Settings → Data page also has an <strong>Empty trash</strong> button.</p>
      </section>

      <!-- SECTION: THE AI COACH -->
      <section id="coach" class="docs-section">
        <h2>🧭 The AI Coach</h2>
        <p>The coach is a Threadline feature, not part of the book's method. It never replaces your decision: every coach output is labeled as a suggestion, and <em>nothing changes until you choose</em>. Without a Pro coach, the same places show a rule-based suggestion instead, so the screens work the same on Free.</p>

        <h3>Where the Coach Appears</h3>
        <ul>
          <li><strong>Daily kick-off and Plan Your Day:</strong> a briefing with a suggested Big 3 from Q1 and Q2, a suggested order, items that could move off today, stalled items, up to three quick wins, follow-ups ranked by urgency, and a one-line intention you can accept with <strong>Use</strong>.</li>
          <li><strong>Daily Review:</strong> notes on unfinished priorities and the closing line.</li>
          <li><strong>Weekly Review:</strong> a sentence on each of the first six steps.</li>
          <li><strong>Monthly Migration:</strong> a suggestion to release, rewrite or keep a task you keep moving.</li>
          <li><strong>"Why is this stuck?"</strong> in the Edit dialog of an item that keeps coming back. The counters (age, moved to tomorrow, rescheduled) are free; the written diagnosis is part of Pro.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Item-edit-why-stuck.png' | relative_url }}" alt="Item edit dialog on a Free install: the Why it keeps coming back panel with age, moves and reschedules">
          <figcaption>The friction counters every edition shows: age, moves and reschedules. On Free, the panel notes that a written diagnosis is part of Pro; with Pro or the trial, "Why is this stuck?" asks the coach for one.</figcaption>
        </figure>

        <h3>Providers and Your Data</h3>
        <p>Settings → Coach chooses where answers come from: <strong>None</strong>, <strong>Ollama (on this computer)</strong>, <strong>Anthropic</strong>, <strong>OpenAI</strong> or <strong>Google Gemini</strong>. You give the exact model name. Nothing is sent until you choose a provider.</p>
        <ul>
          <li><strong>Local (Ollama):</strong> <em>Test connection</em> checks that Ollama runs on your computer and has the model. Nothing leaves your machine.</li>
          <li><strong>Cloud providers:</strong> you use your own API key. It is stored in your operating system's keychain and never shown again. If the system has no keychain, the key lasts only until you quit the app.</li>
          <li><strong>Consent first:</strong> before the first cloud request, a dialog lists what would be sent and what never is, and offers <em>Show the exact request</em>. You choose <strong>Send</strong> or <strong>Cancel</strong>. <em>View what was sent</em> shows the last request, and Settings → Coach lets you withdraw consent.</li>
          <li><strong>What is sent:</strong> titles, quadrants and estimates of active items; titles and dates of follow-ups due; free time, meeting time and capacity figures. <strong>Never sent:</strong> your notes; project, context and delegate names; calendar event titles.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Kickoff-cloud-consent.png' | relative_url }}" alt="Consent dialog listing what is sent and never sent to the provider">
          <figcaption>The consent dialog: what is sent, what never is, and the exact request on demand.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-coach-Max.png' | relative_url }}" alt="Settings: Coach tab with provider, model, key and licence cards">
          <figcaption>Settings → Coach: provider, model, key, consent and licence status.</figcaption>
        </figure>
      </section>

      <!-- SECTION: EDITIONS -->
      <section id="editions" class="docs-section">
        <h2>🪪 Free, Pro &amp; Trial</h2>
        <p>Threadline has two editions, and one rule separates them: <strong>Pro is the AI Coach</strong>. Everything else in this guide is part of Free, including every capture path, the reviews, calendar feeds, send to calendar, export and the planning journal. Free also keeps the rule-based suggestions.</p>
        <ul>
          <li><strong>Free:</strong> the full app and the rule-based suggestions. No key is needed.</li>
          <li><strong>Trial:</strong> from Settings → Coach, <strong>Start 14-day trial</strong> turns the AI Coach on for 14 days. The sidebar shows <em>TRIAL</em> with the days left.</li>
          <li><strong>Pro:</strong> enter a licence key in Settings → Coach and choose <strong>Activate</strong>. The sidebar shows <em>PRO</em>. Threadline contacts the licence service when you activate and about every 14 days after, sending the key and a random device identifier.</li>
          <li><strong>If a licence lapses,</strong> Pro stays on through a short grace period, then the app returns to Free. Your items, plans and reviews are never touched; only the model-written suggestions turn off.</li>
        </ul>
        <p>This guide does not list prices or purchase links, because they can change. The licence terms are in the agreement you accepted on first run.</p>
      </section>

      <!-- SECTION: SETTINGS REFERENCE -->
      <section id="settings" class="docs-section">
        <h2>⚙️ Settings &amp; Customization Reference</h2>
        <p>Settings has ten tabs. Changes save automatically.</p>

        <div class="services-grid">
          <div class="service-card">
            <h4>1. General</h4>
            <p>Language, theme (System, Dark, Light), launch at login, how long the undo toast stays, working hours and working days.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-general-Max.png' | relative_url }}" alt="Settings: General tab">
          </div>
          <div class="service-card">
            <h4>2. Capture</h4>
            <p>The global capture shortcut, estimate presets, the quick-win threshold and your context groups (rename, reorder, add, remove).</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-capture-Max.png' | relative_url }}" alt="Settings: Capture tab">
          </div>
          <div class="service-card">
            <h4>3. Planning</h4>
            <p>Default focus block length, extend step, default break, the longest reservation, and Do Not Disturb during focus blocks (macOS).</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-planning-Max.png' | relative_url }}" alt="Settings: Planning tab">
          </div>
          <div class="service-card">
            <h4>4. Reviews</h4>
            <p>Weekly review day and time, the daily review reminder window, the task-switch average window, the stale-task age and the delegate follow-up delay.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-reviews-Max.png' | relative_url }}" alt="Settings: Reviews tab">
          </div>
          <div class="service-card">
            <h4>5. Notifications</h4>
            <p>Each Threadline reminder on or off: daily review, weekly review, monthly migration, focus block starting soon and focus block ended. These control only Threadline's own reminders.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-notifications-Max.png' | relative_url }}" alt="Settings: Notifications tab">
          </div>
          <div class="service-card">
            <h4>6. Calendars</h4>
            <p>The send-to-calendar hand-off, read-only calendar feeds, and how often they sync.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-calendars.png' | relative_url }}" alt="Settings: Calendars tab">
          </div>
          <div class="service-card">
            <h4>7. Insights</h4>
            <p>The windows behind your numbers: how many days Stats looks back, and how many days ahead Scheduled lists calendar events.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-insights-Max.png' | relative_url }}" alt="Settings: Insights tab">
          </div>
          <div class="service-card">
            <h4>8. Coach</h4>
            <p>AI coach provider, model, API key, local Ollama test, cloud consent, and your licence or trial status.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-coach-Max.png' | relative_url }}" alt="Settings: Coach tab">
          </div>
          <div class="service-card">
            <h4>9. Data</h4>
            <p>JSON export, backups, restore, pasting a list of tasks, trash retention, empty trash and the planning journal.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-data.png' | relative_url }}" alt="Settings: Data tab">
          </div>
          <div class="service-card">
            <h4>10. About</h4>
            <p>Version, platform and edition, the licences and third-party notices, the privacy policy, and automatic update checks.</p>
            <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-about.png' | relative_url }}" alt="Settings: About tab">
          </div>
        </div>

        <div class="protocol-box amber">
          <div class="protocol-box__title">Book vs. app: the Notifications tab</div>
          <p>The book's Exercise 3.1 (<em>Process Organization</em>, Before You Start Organizing Your Time) is a manual audit: list every active notification on your phone, laptop and tablet, and switch off those you do not need in real time. The Notifications tab does not do that audit. It only controls Threadline's own reminders. Do the exercise on your devices, then keep Threadline's reminders to the few you want.</p>
        </div>
      </section>

      <!-- SECTION: CALENDAR FEEDS -->
      <section id="calendar-feeds" class="docs-section">
        <h2>🔗 Calendar Feeds</h2>
        <p>Threadline reads your calendar so that capacity is honest. A feed is a published calendar address; Threadline fetches it and never changes it. In Settings → Calendars, give the feed a name, paste its address and choose a color. Google's <em>Secret address in iCal format</em>, Office 365's <em>Publish a calendar</em> link and iCloud's <em>Public Calendar</em> link all work. Only <code>https://</code> and <code>webcal://</code> addresses are accepted. <strong>Check</strong> tells you whether a feed is reachable.</p>
        <p>The events appear in Today, the Daily Kick-Off capacity, step 4 of Plan Your Day (to warn about overlaps), the Scheduled view and step 5 of the Weekly Review. Under Advanced you can set the sync interval, how many days behind and ahead to keep, and the fetch timeout. Feeds are optional; with none, the only calendar action is the one-way Send to calendar.</p>
      </section>

      <!-- SECTION: DATA, BACKUP & IMPORT -->
      <section id="data-backup" class="docs-section">
        <h2>💾 Data, Backup &amp; Import</h2>
        <p>All of this lives in Settings → Data.</p>
        <ul>
          <li><strong>Export as JSON</strong> writes your data to a file you choose.</li>
          <li><strong>Backups:</strong> <em>Do a Backup Now</em>, a backup folder of your choice, a frequency (every 30 days by default, checked when the app starts and while it runs) and a mode: <em>Snapshot (history)</em>, a new file each time that keeps the last 12, or <em>Single file</em>, overwritten each time.</li>
          <li><strong>Restore from an export:</strong> <em>Import backup</em> reads an export and shows its date, app version and row count. <strong>Replace my data</strong> replaces everything, after saving a backup of your current data first. The path of that backup is shown when it is done.</li>
          <li><strong>Paste a list of tasks:</strong> one task per line, then <em>Add to inbox</em>. The app reports how many it added and how many it skipped.</li>
          <li><strong>Trash retention</strong> and <strong>Empty trash</strong>, described under <a href="#trash">Trash &amp; Recovery</a>.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-tab-data.png' | relative_url }}" alt="Settings: Data tab with export, backup, restore, paste a list, trash and journal cards">
          <figcaption>Settings → Data: export, backup, restore, paste a list, trash and the planning journal.</figcaption>
        </figure>
      </section>

      <!-- SECTION: PLANNING JOURNAL -->
      <section id="journal" class="docs-section">
        <h2>📓 Planning Journal</h2>
        <p>The planning journal is an optional, daily record of how you planned. It is <strong>off</strong> by default, including after an upgrade. Turn it on with <em>Keep a planning journal</em> in Settings → Data.</p>
        <ul>
          <li><strong>What a record holds:</strong> the weekday and whether you planned in the morning, afternoon or evening; working, free and meeting time in quarter hours; and, for each task, its quadrant, estimate, age, due date range, context type, source and outcome. Each task carries a random reference instead of its title.</li>
          <li><strong>What it never holds:</strong> task titles or notes; names of projects, people or context groups; calendar event details.</li>
          <li><strong>When it is written:</strong> once the local day moves past the last day the app was open. Nothing is recorded while the journal is off, and no past day is back-filled.</li>
          <li><strong>Where it stays:</strong> on this device, included in your backups and JSON export. Records older than 400 days are deleted.</li>
        </ul>
        <p><strong>Open journal</strong> shows how many days are recorded and what a record does and never includes. Each day appears as a table or as its stored JSON, and you can delete a day after a confirmation. <em>Check for my words</em> searches the free-text values of every record for words you enter, and reports <em>Found</em> with the field and number of days, or <em>Not found</em>. Turning the journal off offers to delete it; nothing is deleted without your confirmation.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Settings-journal-viewer.png' | relative_url }}" alt="Planning journal viewer listing recorded days, the privacy summary and the Export as JSONL button">
          <figcaption>The journal viewer: recorded days, what a record includes and never includes, and <strong>Export as JSONL</strong>.</figcaption>
        </figure>

        <p><strong>Export as JSONL</strong> writes one record per line, oldest first, through the save dialog. Every export draws fresh references, so two exports never share one with each other or with the device. Days written by a newer version of Threadline are left out and counted in the status line.</p>
      </section>

      <!-- SECTION: UPDATES -->
      <section id="updates" class="docs-section">
        <h2>⬆️ Updates</h2>
        <p>Once a day, Threadline asks GitHub whether a newer version is published. The request sends your app version and platform, nothing about you. Settings → About has a switch to turn the check off, and the tray offers <strong>Check for Updates</strong>. Threadline never installs anything by itself.</p>
        <p>When a newer version exists, a slim notice says <em>Threadline X is available</em> and offers three choices:</p>
        <ul>
          <li><strong>Install now:</strong> downloads the update, verifies it against the signing key built into the app, installs it and restarts. An update that fails verification is refused. It appears on macOS, Windows and the Linux AppImage; where the installation cannot update itself, only <strong>Download</strong> is shown.</li>
          <li><strong>Download:</strong> opens the release page in your browser.</li>
          <li><strong>Later:</strong> hides the notice for that version.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/threadline/docs/Threadline-Shell-update-notice.png' | relative_url }}" alt="Update notice with Install now, Download and Later buttons">
          <figcaption>The update notice: Install now, Download or Later.</figcaption>
        </figure>
      </section>

      <!-- SECTION: KEYBOARD SHORTCUTS -->
      <section id="keyboard-shortcuts" class="docs-section">
        <h2>⌨️ Complete Keyboard Shortcuts Reference</h2>
        <p>Every action on a main screen has a key. Single-letter keys work only outside text fields, so typing is never interrupted. The pinned bar at the bottom of the window shows the keys for the screen you are on.</p>

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
              <td>Open the Quick Capture window (changeable in Settings → Capture)</td>
              <td>System-wide</td>
            </tr>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>K</kbd></td>
              <td>Open the command palette</td>
              <td>App-wide, also while typing</td>
            </tr>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>1</kbd> – <kbd>5</kbd></td>
              <td>Go to Today, Inbox, Matrix, Next, Waiting</td>
              <td>App-wide, also while typing</td>
            </tr>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>R</kbd> / <kbd>Cmd/Ctrl</kbd> + <kbd>,</kbd></td>
              <td>Go to Review / go to Settings</td>
              <td>App-wide, also while typing</td>
            </tr>
            <tr>
              <td><kbd>P</kbd></td>
              <td>Start Process mode (needs at least one Inbox item; switches to the Inbox)</td>
              <td>App-wide</td>
            </tr>
            <tr>
              <td><kbd>N</kbd></td>
              <td>Open the in-app capture bar</td>
              <td>Main window</td>
            </tr>
            <tr>
              <td><kbd>?</kbd></td>
              <td>Open this guide in your browser</td>
              <td>App-wide</td>
            </tr>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>Z</kbd></td>
              <td>Undo the last change</td>
              <td>App-wide</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> / <kbd>Shift</kbd> + <kbd>Enter</kbd> / <kbd>Esc</kbd></td>
              <td>Save the capture / reveal the notes field / cancel</td>
              <td>Quick Capture window</td>
            </tr>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd></td>
              <td>Save the capture, from the title or the notes</td>
              <td>Quick Capture window</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> / <kbd>Esc</kbd></td>
              <td>Save the line / close the bar</td>
              <td>In-app capture bar</td>
            </tr>
            <tr>
              <td><kbd>↑</kbd> / <kbd>↓</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd></td>
              <td>Move through the results, run the highlighted entry, close</td>
              <td>Command palette</td>
            </tr>
            <tr>
              <td><kbd>K</kbd></td>
              <td>Open the Daily Kick-Off</td>
              <td>Today, once the plan exists</td>
            </tr>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd></td>
              <td>Use the suggested Big 3</td>
              <td>Daily Kick-Off</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> / <kbd>Esc</kbd></td>
              <td>Next step (Finish on step 5) / previous step</td>
              <td>Plan Your Day (<kbd>Enter</kbd> is ignored in text fields and on a focused button)</td>
            </tr>
            <tr>
              <td><kbd>I</kbd> / <kbd>A</kbd></td>
              <td>Log an interruption (opens Quick Capture) / abandon the block</td>
              <td>While a focus block runs, on any screen</td>
            </tr>
            <tr>
              <td><kbd>C</kbd> / <kbd>E</kbd></td>
              <td>Continue / extend by 5 minutes</td>
              <td>Focus block end dialog</td>
            </tr>
            <tr>
              <td><kbd>J</kbd> / <kbd>↓</kbd>, <kbd>K</kbd> / <kbd>↑</kbd></td>
              <td>Select the next / previous item</td>
              <td>Inbox, Trash</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> / <kbd>Esc</kbd></td>
              <td>Edit the selected item in place / cancel the edit</td>
              <td>Inbox, with the inspector focused</td>
            </tr>
            <tr>
              <td><kbd>D</kbd>, <kbd>G</kbd>, <kbd>S</kbd>, <kbd>C</kbd></td>
              <td>Do, Delegate, Schedule, Calendar. Each opens its form</td>
              <td>Process mode</td>
            </tr>
            <tr>
              <td><kbd>R</kbd>, <kbd>X</kbd></td>
              <td>Reference, Drop. Each acts at once</td>
              <td>Process mode</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> / <kbd>Esc</kbd></td>
              <td>Confirm the form field you are in / close the form, then leave Process mode</td>
              <td>Process mode</td>
            </tr>
            <tr>
              <td><kbd>J</kbd> / <kbd>K</kbd></td>
              <td>Select the next / previous card (letters only; the arrow keys do not work here)</td>
              <td>Matrix</td>
            </tr>
            <tr>
              <td><kbd>1</kbd> – <kbd>4</kbd>, <kbd>D</kbd>, <kbd>G</kbd>, <kbd>X</kbd></td>
              <td>Move the card to Q1–Q4, mark done, delegate, drop</td>
              <td>Matrix, with a card selected</td>
            </tr>
            <tr>
              <td><kbd>←</kbd> / <kbd>→</kbd> and <kbd>↑</kbd> / <kbd>↓</kbd>, <kbd>Home</kbd>, <kbd>End</kbd></td>
              <td>Move between the context pills</td>
              <td>Next</td>
            </tr>
            <tr>
              <td><kbd>D</kbd>, <kbd>T</kbd>, <kbd>S</kbd></td>
              <td>Done, Take back, Snooze 3 days</td>
              <td>Waiting, with a row focused (<kbd>Tab</kbd>)</td>
            </tr>
            <tr>
              <td><kbd>J</kbd> / <kbd>K</kbd>, <kbd>E</kbd>, <kbd>R</kbd></td>
              <td>Select a row, edit the item, reschedule the item</td>
              <td>Scheduled</td>
            </tr>
            <tr>
              <td><kbd>U</kbd>, <kbd>Alt</kbd> + <kbd>Backspace</kbd>, <kbd>Esc</kbd></td>
              <td>Restore the selected item, start Purge Trash (asks to confirm), clear the selection</td>
              <td>Trash</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> / <kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd></td>
              <td>Next step (Finish on step 4). <kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd> also works while typing</td>
              <td>Daily Review</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Leave the field, go back one step, or exit the review</td>
              <td>Daily Review</td>
            </tr>
            <tr>
              <td><kbd>J</kbd> / <kbd>↓</kbd>, <kbd>K</kbd> / <kbd>↑</kbd>; <kbd>T</kbd>, <kbd>X</kbd>, <kbd>E</kbd>, <kbd>S</kbd></td>
              <td>Select a task; move to tomorrow, drop, edit, reschedule</td>
              <td>Daily Review, step 2</td>
            </tr>
            <tr>
              <td><kbd>J</kbd> / <kbd>↓</kbd>, <kbd>K</kbd> / <kbd>↑</kbd>; <kbd>P</kbd>, <kbd>D</kbd>, <kbd>S</kbd></td>
              <td>Select a capture; process the inbox, drop, reschedule</td>
              <td>Daily Review, step 3</td>
            </tr>
            <tr>
              <td><kbd>1</kbd> – <kbd>5</kbd>, <kbd>Alt</kbd> + <kbd>B</kbd>, <kbd>Alt</kbd> + <kbd>L</kbd></td>
              <td>Set your energy; jump to the Blockers or Learning field</td>
              <td>Daily Review, step 4</td>
            </tr>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd></td>
              <td>Confirm the step and move on (finish on the last step once all are done)</td>
              <td>Weekly Review</td>
            </tr>
            <tr>
              <td><kbd>↑</kbd> / <kbd>↓</kbd>, <kbd>K</kbd>, <kbd>D</kbd>, <kbd>X</kbd>, <kbd>Esc</kbd></td>
              <td>Select a task; keep, delegate (<kbd>Enter</kbd> confirms the name), drop; cancel or leave</td>
              <td>Monthly Migration</td>
            </tr>
            <tr>
              <td><kbd>←</kbd> / <kbd>→</kbd>, <kbd>Home</kbd>, <kbd>End</kbd></td>
              <td>Move between the tabs</td>
              <td>Settings</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Cancel recording a new capture shortcut</td>
              <td>Settings → Capture</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> / <kbd>←</kbd> / <kbd>→</kbd> / <kbd>Esc</kbd></td>
              <td>Next or Finish / previous or next explainer screen / skip</td>
              <td>Onboarding</td>
            </tr>
            <tr>
              <td><kbd>↑</kbd> / <kbd>↓</kbd>, <kbd>Esc</kbd></td>
              <td>Move through the entries / close the menu</td>
              <td>Item menu (right-click)</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Close the dialog, drawer or popover</td>
              <td>Edit dialog, Daily Kick-Off, tray popover</td>
            </tr>
          </tbody>
        </table>
      </section>

    </article>
  </div>
</div>
