# IronPulse

A phone app for my lean bulk to 75–80 kg: gym set logger with research-based targets and rest times, a rest timer that notifies the phone, a bulk diet plan with meals that re-time themselves around my workout, a food log, body-weight check-ins, water and a coach.

Two ways to run it:

- **Android app (recommended):** rest alerts ring even with the phone locked. See [Android app](#android-app).
- **Web app:** open `index.html` from GitHub Pages and "Add to Home Screen". Rest alerts work while the app is open or recently in the background; the screen stays on during a workout so the timer keeps running.

Data stays on the phone (export a backup from Plan → Backup).

## Daily use

1. **Today**: enter the time you woke up and your gym time; every meal moves with them. Each exercise shows its target (sets × reps @ RIR, rest). Tap an exercise name to change its targets. Tick meals as you eat them: they go straight into the food log.
2. **Log**: pick an exercise. The target card shows the focus (strength or hypertrophy), set count, cue, what weight to use today (double progression: once every set reaches the top of the rep range, add the smallest step) and warm-up sets for the four strength lifts. The rest box shows this exercise's rest: change it with −15 / +15, a chip, or type any number of seconds. The timer starts after each set and alerts you when rest is over.
3. **Fuel**: the **food log** (anything you eat, with kcal, protein, carbs, fat; quick-add from your plan meals, saved foods and ~55 Indian staples), daily targets, meal options, timing, smoothie, supplements, groceries. Every section has an **Edit** button.
4. **Body**: weigh in every morning. The weekly check-in tells you to add 200 kcal, remove 150 or change nothing.
5. **Plan**: the **workout editor** (pick a day, reorder, add or remove exercises, turn a rest day into a training day, set targets per exercise), the exercise library, rest timer and alert settings, diet reminders, backup.
6. **Coach**: type things like `gym at 7:30`, `woke up at 6`, `badminton at 6 pm`, `ate smoothie`, `bench 80 x 8`, `rest 2 min`.

## Training targets

Defaults come from the review in Nov 2026 (rest-interval and loading research: Singer 2024, Schoenfeld 2016 and 2021, Senna 2011):

- Heavy, low-rep work only on Bench (Mon), Squat (Tue), Deadlift (Fri) and Overhead Press (Mon). Everything else is hypertrophy work at moderate to high reps.
- Rest: heavy compounds 3–4 min, moderate compounds 2–3 min, machine/cable compounds 2 min, isolation 90 s, small isolation 60–90 s.
- Split changes: Saturday Romanian Deadlift removed (it came 24 h after deadlifts), Thursday Incline Bench → Incline Dumbbell Press and Overhead Press → Cable Lateral Raise, Monday + Lateral Raise.

All of it is editable in the app. "Reset to default" on an exercise brings back the research value.

## Android app

The workflow in `.github/workflows/android.yml` builds the APK on GitHub every time `index.html`, `diet-plan.js` or the app config changes on `main`. You don't need Android Studio.

**Install (first time):**

1. On your phone open this repo's **Releases** page → "IronPulse Android app (latest)" → download `IronPulse.apk`.
2. Open the file. Android asks to allow installs from your browser: allow it once, then **Install**.
3. Open IronPulse and allow notifications when asked. In Plan → Rest timer & alerts, tap **Test (5 s)** and lock the phone to check.

**Move your data from the web app:** in the web app go to Plan → Backup → **Export JSON** (or Copy backup). In the Android app: Plan → Backup → **Import file** (or paste). The browser and the app keep separate data.

**Updates:** download the new APK from Releases and install it over the old one; your data stays. If a build fails, open the Actions tab to see why, or run it again with "Run workflow".

If alerts arrive late: Android Settings → Apps → IronPulse → allow **Alarms & reminders** and set battery to **Unrestricted**.

## Updating the diet plan

You can now change everything in the app (Fuel → Edit buttons and Meal options). Those edits stay on the phone, on top of `diet-plan.js`. To make them permanent for every device: Fuel → Your diet edits → **Export diet-plan.js**, upload that file to the repo, then tap **Reset all diet edits** in the app.

To edit the file directly:

1. Open `diet-plan.js` on GitHub and tap the pencil (Edit).
2. Change what you need. Common edits:
   - `profile` → wake time, sleep hours, usual gym time, session length, start/target weight, height, age.
   - `targets` → calorie formula, protein g/kg (now 1.6–2.2, Morton 2018), fat %, badminton kcal, water.
   - `meals` → add or edit an option: `{ id: 'lu-e', name: 'Short name', what: 'Full description', kcal: 700, p: 40, c: 80, f: 20 }`. The first option in each list is the default. Keep every `id` unique.
   - `timing` → the rules for when meals happen.
   - `smoothie`, `micros`, `electrolytes`, `supplements`, `groceries`, `sources`.
3. Change `version` at the top so you can see in the app which plan is live.
4. Commit. The web app loads the new plan the next time it opens with internet; the Android app gets it with the next APK build.

Keep the commas and quotes as they are. If the app shows "diet plan did not load", the file has a typo: undo the last edit on GitHub.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app (screens, tracking, targets, timer, scheduler, food log, editors, coach) |
| `diet-plan.js` | The diet: targets, meals, timing rules, smoothie, supplements |
| `sw.js` | Offline support and rest-over notifications for the web app |
| `manifest.webmanifest`, `icon-*.png` | Home-screen app settings and icons |
| `package.json`, `capacitor.config.json` | Android app build settings (Capacitor + local notifications) |
| `android-res/` | Notification icon and the signing key the Android build uses |
| `.github/workflows/android.yml` | Builds the APK and publishes it to Releases |

`android-res/debug.keystore` is a debug-type signing key, committed so every build is signed the same way and updates install over each other. It only matters for apps you sideload yourself; don't reuse it for anything published.

Plan sources: Jeff Nippard (pre/post-workout and bulking guides), ICMR-NIN 2020 RDAs, Morton 2018 (BJSM), Whittaker & Wu 2021, ACSM 2007, Singer et al. 2024 (rest intervals), Schoenfeld et al. 2016 and 2021, Senna et al. 2011, Pelland et al. 2024. Review: https://claude.ai/artifact/XGgh9jcEJEWv2asv9HzL53
