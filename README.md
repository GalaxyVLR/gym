# IronPulse

A phone app (PWA) for my lean bulk to 75–80 kg: gym set logger, bulk diet plan with meals that re-time themselves around my workout, body-weight check-ins, water and a coach.

Open `index.html` from GitHub Pages and use "Add to Home Screen". Data stays on the phone (export a backup from Plan).

## Daily use

1. **Today**: enter the time you woke up and your gym time. Every meal moves with them:
   - 75+ min before the gym: full pre-workout meal 60–90 min before (Jeff Nippard).
   - 40–75 min: quick carbs ~40 min before.
   - Under 40 min: banana on the way.
   - Smoothie within 45 min after the session, lunch 12:30–14:30, dinner ~1.75 h before sleep, milk 30 min before sleep.
   - Badminton time adds 350 kcal, more water and an after-play meal.
   Tap a meal to see what to eat or pick another option; tick it when eaten.
2. **Fuel**: daily targets (calories, protein, fat, water), your usual times, the smoothie recipe, supplements with a protein-box reorder reminder, micros, electrolytes, weekly groceries.
3. **Body**: weigh in every morning. The weekly check-in tells you to add 200 kcal, remove 150 or change nothing.
4. **Coach**: type things like `gym at 7:30`, `woke up at 6`, `badminton at 6 pm`, `ate smoothie`, `bench 80 x 8`.

## Updating the diet plan

All food data lives in **`diet-plan.js`**. You never need to touch `index.html` to change the diet.

1. Open `diet-plan.js` on GitHub and tap the pencil (Edit).
2. Change what you need. Common edits:
   - `profile` → wake time, sleep hours, usual gym time, session length, start/target weight (defaults for a new install; you can also change these in the app under Fuel → Your timing).
   - `targets` → calorie formula, protein g/kg, fat %, badminton kcal, water.
   - `meals` → add or edit an option: `{ id: 'lu-e', name: 'Short name', what: 'Full description', kcal: 700, p: 40 }`. The first option in each list is the default. Keep every `id` unique.
   - `timing` → the rules for when meals happen.
   - `smoothie`, `micros`, `electrolytes`, `supplements`, `groceries`, `sources`.
3. Change `version` at the top (e.g. `'2026-12-01'`) so you can see on the Today screen which plan is live.
4. Commit. The app loads the new plan the next time it opens with internet.

Keep the commas and quotes as they are. If the app shows "diet plan did not load", the file has a typo: undo the last edit on GitHub.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app (screens, tracking, scheduler, coach) |
| `diet-plan.js` | The diet: targets, meals, timing rules, smoothie, supplements |
| `sw.js` | Offline support; always fetches the latest page and diet plan when online |
| `manifest.webmanifest`, `icon-*.png` | Home-screen app settings and icons |

Plan sources: Jeff Nippard (pre/post-workout and bulking guides), ICMR-NIN 2020 RDAs, Morton 2018 (BJSM), Whittaker & Wu 2021, ACSM 2007. Full roadmap: https://claude.ai/artifact/H8qaL1QpEUJrfzn9PminnQ
