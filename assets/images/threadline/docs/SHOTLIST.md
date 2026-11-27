# Threadline guide: screenshot shot list

Capture rules for every image: **English locale, light theme, 1280x800 window, invented demo data, window-only capture** (no desktop, no menu bar unless the shot is the tray popover). No real names, no personal paths, no dd/mm/yyyy dates.

Naming: existing files end in `-Max.png` and stay in place. A RETAKE or NEW image uses the plain name `Threadline-<Area>-<slug>.png` (no `-Max`); the page already points at those names, so it shows broken images until they are added. When a RETAKE file lands, the old `-Max` file it replaces can be removed in a separate cleanup.

Counts: KEEP 50, RETAKE 15, NEW 12 (77 images referenced by `tools/threadline/docs.md`).

Plus 5 tool-page images (outside this folder), listed in the last section.

| Filename | Status | App state to capture |
|---|---|---|
| `Threadline-Legal-eula-Max.png` | KEEP | First-run licence agreement gate, Accept and Quit visible. |
| `Threadline-Onboarding-step-1-capture-Max.png` | KEEP | Onboarding step 1 "Capture everything". |
| `Threadline-Onboarding-step-2-decide-once-Max.png` | KEEP | Onboarding step 2 "Decide once". |
| `Threadline-Onboarding-step-3-plan-three-Max.png` | KEEP | Onboarding step 3 "Plan three". |
| `Threadline-Onboarding-step-4-setup-Max.png` | KEEP | Onboarding step 4 "Set up Threadline" with the sample-items checkbox. |
| `Threadline-Quick-Capture-empty-input-Max.png` | KEEP | Quick Capture window, empty field. |
| `Threadline-Quick-Capture-typed-thought-Max.png` | KEEP | Quick Capture window with a short typed thought. |
| `Threadline-Command-palette-open.png` | RETAKE | Replaces Threadline-Command-palette-open-Max.png (palette code changed after rc.1). Press Cmd+K from Today with an empty query: the eight "Go to ..." commands under a Commands heading, first row highlighted. No items group. |
| `Threadline-Command-palette-search-results.png` | RETAKE | Replaces ...-Max.png. Palette open, query "roadmap" (any word that matches one demo task and one command-free result): Items group listing 2-3 demo tasks, first highlighted. Commands group empty or absent. |
| `Threadline-Search-calendared-item.png` | NEW | Palette open, query matching a task that was sent to the calendar: the in-place panel with the title, the slot line (date, time, minutes), the buttons Send again, Back to list (within 24 h) and Close, and the one-way note. Create the data first: Process an item with C, date tomorrow, 10:00, 30 min. |
| `Threadline-Shell-keyboard-hint-bar.png` | NEW | Inbox with Process mode closed. Crop or show the full window with the pinned bottom bar visible: "J/K Navigate", "P Process" and the Help control at the right edge. (Window-only capture; the bar must be readable.) |
| `Threadline-Tray-popover.png` | NEW (SKIPPED: icon off screen; figure hidden in a comment) | Tray popover open under the menu-bar icon (macOS) with the inbox count above 0 and a capture shortcut set. Capture the popover window only. Show: header, Quick Capture, Inbox with count, Today's Big 3, Start Focus Block with minutes, Open Main Window, Preferences, Check for Updates, Quit. |
| `Threadline-Today-plan-Max.png` | KEEP | Today summary: intention, Big 3 progress, follow-ups, events rail. |
| `Threadline-Today-capture-bar-Max.png` | KEEP | Today with the in-app capture bar open. |
| `Threadline-Today-daily-kickoff.png` | RETAKE | Replaces ...-Max.png (kick-off drawer gained a Quick wins section). Today summary, press K: drawer open on a Free install (label "Rule-based suggestion") showing Capacity, Suggested Big 3, Suggested order and Quick wins, with at least two quick-win tasks (estimate at or under the quick-win threshold, not in the Big 3). |
| `Threadline-Today-plan-your-day-step-1-unfinished.png` | RETAKE | Replaces ...-Max.png (flow is now 5 steps). First visit of a new day (no plan): Step 1 "Yesterday's unfinished tasks" with 2-3 demo tasks, each with the Reschedule control. Use Today's date in the app locale format, not dd/mm/yyyy. |
| `Threadline-Today-plan-your-day-step-2-due-today.png` | RETAKE | Replaces ...-Max.png. Step 2 "Due today": one item under "Scheduled for today" and one under "Follow-ups due". |
| `Threadline-Today-plan-your-day-step-3-pick-priorities.png` | RETAKE | Replaces ...-Max.png. Step 3 "Pick up to 3 priorities": slots 1 and 2 filled, slot 3 empty, candidate list below. No capacity warning. |
| `Threadline-Today-plan-your-day-step-4-focus-blocks.png` | NEW | Step 4 "Focus blocks": two meetings listed under "Meetings today" (calendar feed enabled), two priorities with estimates, one already Reserved, one with start time and duration steppers and the Reserve button, the "Add to calendar" button visible. If possible show one "Overlaps ..." warning. |
| `Threadline-Today-plan-your-day-step-5-intention.png` | NEW | Step 5 "Set an intention": the one-line field with a short demo intention typed, Back and Finish buttons. Free install, so no Suggested/Use line. |
| `Threadline-Today-focus-block-running-Max.png` | KEEP | Focus block running with Interrupted and Abandon. |
| `Threadline-Inbox-list-Max.png` | KEEP | Inbox list with a selected item in the inspector. |
| `Threadline-Inbox-item-edit-form-Max.png` | KEEP | Inspector in edit mode. |
| `Threadline-Inbox-process-mode.png` | RETAKE | Replaces ...-Max.png (Calendar button added). Process mode open on item 1 / 3: the Takes < 2 min switch and the six buttons Do, Delegate, Schedule, Calendar, Reference, Drop all visible. No form open. |
| `Threadline-Inbox-process-do-Max.png` | KEEP | Process mode with the Do form open. |
| `Threadline-Inbox-process-delegate.png` | RETAKE | Replaces ...-Max.png (it showed a dd/mm/yyyy date). Delegate form: "Delegated to" filled with a demo name, "Follow up on" showing a date in the English locale format (for example Dec 4, 2026). Check the date field renders mm/dd/yyyy or a long form, never dd/mm/yyyy. |
| `Threadline-Inbox-process-schedule.png` | RETAKE | Replaces ...-Max.png (dd/mm/yyyy). Schedule form: "Scheduled for" with a future date in English locale format. |
| `Threadline-Inbox-process-calendar.png` | NEW | Process mode, Calendar form open (press C): Date, Start time and Minutes fields filled (tomorrow, 10:00, 30), the Send to calendar and Cancel buttons. English locale date format. |
| `Threadline-Next-context-menu.png` | RETAKE | Replaces ...-Max.png (menu gained Send to calendar). Right-click an ACTIVE task in Next: the menu shows Edit, Delete, Move to project and Send to calendar. Capture the menu with the task row visible. |
| `Threadline-Matrix-quadrants-Max.png` | KEEP | Matrix with tasks in all four quadrants. |
| `Threadline-Next-next-actions-Max.png` | KEEP | Next, All pill selected. |
| `Threadline-Next-tab-calls-Max.png` | KEEP | Next with the calls context pill selected. |
| `Threadline-Next-tab-reviews-Max.png` | KEEP | Next with the reviews context pill selected. |
| `Threadline-Next-tab-writing-Max.png` | KEEP | Next with the writing context pill selected. |
| `Threadline-Next-tab-admin-Max.png` | KEEP | Next with the admin context pill selected. |
| `Threadline-Next-tab-deep-work-Max.png` | KEEP | Next with the deep work context pill selected. |
| `Threadline-Next-tab-people-Max.png` | KEEP | Next with the people context pill selected. |
| `Threadline-Next-tab-other-Max.png` | KEEP | Next with the other context pill selected. |
| `Threadline-Waiting-list.png` | RETAKE | Replaces ...-Max.png (the avatar initials bug). Waiting with three people, including a name with a role suffix such as "Dana (Finance)" and one plain name, so the avatar letters render correctly. One row with the Follow up badge. |
| `Threadline-Projects-tab-active-Max.png` | KEEP | Projects, Active tab. |
| `Threadline-Projects-new-project-form.png` | RETAKE | Replaces ...-Max.png (dd/mm/yyyy). New project form open: Name, Expected outcome and a Review date in English locale format. |
| `Threadline-Projects-tab-someday-Max.png` | KEEP | Projects, Someday tab. |
| `Threadline-Projects-close-project-dispositions.png` | NEW | Projects, Active tab: Close project pressed on a project with 2-3 open tasks, showing "What should happen to its open tasks?" with Complete them, Drop them, Unlink them. |
| `Threadline-Projects-tab-closed-Max.png` | KEEP | Projects, Closed tab. |
| `Threadline-Scheduled-list-Max.png` | KEEP | Scheduled timeline with items and feed events. |
| `Threadline-Review-daily-step-1-completed-Max.png` | KEEP | Daily Review step 1. |
| `Threadline-Review-daily-step-2-unfinished-Max.png` | KEEP | Daily Review step 2. |
| `Threadline-Review-daily-step-3-inbox-Max.png` | KEEP | Daily Review step 3. |
| `Threadline-Review-daily-step-4-close.png` | RETAKE | Replaces ...-Max.png (closing line added). Daily Review step 4 "Close": Blockers, Learning and Energy fields, one energy level selected, the closing sentence visible above Close, for example "2 of 3 priorities closed, with 95 focus minutes against 240 minutes of meetings." Free install. |
| `Threadline-Review-weekly-start-Max.png` | KEEP | Weekly Review start screen. |
| `Threadline-Review-weekly-step-1-empty-inboxes-Max.png` | KEEP | Weekly step 1. |
| `Threadline-Review-weekly-step-2-review-waiting-Max.png` | KEEP | Weekly step 2. |
| `Threadline-Review-weekly-step-3-review-projects-Max.png` | KEEP | Weekly step 3. |
| `Threadline-Review-weekly-step-4-review-next-actions-Max.png` | KEEP | Weekly step 4. |
| `Threadline-Review-weekly-step-5-next-week-calendar-Max.png` | KEEP | Weekly step 5. |
| `Threadline-Review-weekly-step-6-next-week-focus-Max.png` | KEEP | Weekly step 6. |
| `Threadline-Review-weekly-step-7-wins-and-lessons-Max.png` | KEEP | Weekly step 7. |
| `Threadline-Review-weekly-complete-Max.png` | KEEP | Weekly Review complete. |
| `Threadline-Review-monthly-start-Max.png` | KEEP | Monthly Migration start. |
| `Threadline-Review-monthly-decide-tasks-Max.png` | KEEP | Monthly Migration, deciding tasks. |
| `Threadline-Review-monthly-nothing-to-migrate-Max.png` | KEEP | Monthly Migration, nothing to migrate. |
| `Threadline-Stats-overview-Max.png` | KEEP | Stats overview. |
| `Threadline-Trash-list-Max.png` | KEEP | Trash list. |
| `Threadline-Item-edit-why-stuck.png` | NEW | Edit dialog (double-click a task that was moved to tomorrow twice and rescheduled once): the "Why it keeps coming back" counters and the "Why is this stuck?" button. Free install shows the "A written diagnosis is part of Pro." hint; capture that state. |
| `Threadline-Kickoff-cloud-consent.png` | NEW | Settings -> Coach: provider Anthropic (any cloud provider) with a key saved, trial active. Today, K: the consent dialog "Send today's summary to Anthropic?" with the Sent and Never sent lists and "Show the exact request" collapsed. Press nothing further. |
| `Threadline-Settings-tab-coach-Max.png` | KEEP | Settings, Coach tab. |
| `Threadline-Settings-tab-general-Max.png` | KEEP | Settings, General tab. |
| `Threadline-Settings-tab-capture-Max.png` | KEEP | Settings, Capture tab. |
| `Threadline-Settings-tab-planning-Max.png` | KEEP | Settings, Planning tab. |
| `Threadline-Settings-tab-reviews-Max.png` | KEEP | Settings, Reviews tab. |
| `Threadline-Settings-tab-notifications-Max.png` | KEEP | Settings, Notifications tab. |
| `Threadline-Settings-tab-calendars.png` | RETAKE | Replaces ...-Max.png (Send to calendar hand-off card added). Settings -> Calendars: the "Send to calendar" card with Calendar app selected, and one feed with a Reachable check result below it. Use a demo feed name such as "Work". |
| `Threadline-Settings-tab-insights-Max.png` | KEEP | Settings, Insights tab. |
| `Threadline-Settings-tab-data.png` | NEW | Settings -> Data, whole tab scrolled to show the Export as JSON, backup, restore, paste-a-list, trash retention, empty trash and Planning journal cards. Backup folder must show the default "App data folder", never a personal path. Journal switch off. |
| `Threadline-Settings-tab-about.png` | RETAKE | Replaces ...-Max.png (it showed 1.0.0-rc.1). Settings -> About on the 1.2.0 build: Version 1.2.0, platform, Edition, the Updates card and the licence and privacy cards collapsed. |
| `Threadline-Settings-journal-viewer.png` | NEW | Settings -> Data -> Open journal drawer with the journal switched on and 3-4 demo days recorded: day count, "Each record includes" and "It never includes" lists, "Check for my words" box, Recorded days list with one day expanded as a table, Export as JSONL button visible. Invented data only. |
| `Threadline-Shell-update-notice.png` | NEW | Main window with the slim update notice on top: "Threadline 1.2.1 is available." with Install now, Download and Later. Needs a build that reports a newer version, or a staged notice. Window-only crop of the top of the window is acceptable. |

## Tool page images (`assets/images/`, used by `_data/tools.yml` EN and ES)

Retake with the same demo data and capture rules. These **replace the existing files in place** (same names), because the live tool page shows test and personal-looking task titles. Capture size must match the current files: 1400x787 window content.

| Filename | Status | App state to capture |
|---|---|---|
| `threadline-today.png` | RETAKE | Today summary: intention, Big 3 with Do first chips, follow-ups, scheduled-for-today rows, Quick wins. Demo titles only. |
| `threadline-kickoff.png` | RETAKE | Today with the Daily kick-off drawer open (same state as `Threadline-Today-daily-kickoff.png`): Capacity, Suggested Big 3, Suggested order, Could move off today. |
| `threadline-matrix.png` | RETAKE | Matrix with all four quadrants populated, one card focused, Big 3 badges on Do first cards. |
| `threadline-inbox.png` | RETAKE | Inbox with ~10 demo items, one selected showing notes in the inspector. (Current file is clean; retaken for consistency.) |
| `threadline-waiting.png` | RETAKE | Waiting grouped by 6-7 invented people, follow-up chips, one row focused. Include a name with a parenthetical (e.g. "Dana (Finance)") to show the fixed initials. |
