# IronPulse

A phone app for my lean bulk to 75–80 kg: gym set logger with research-based targets, tempo and rest times, a muscle diagram for every exercise, a rest timer that notifies the phone, a bulk diet plan with meals that re-time themselves around my workout, a food log, lift goals, reminders, body-weight check-ins, water and a coach.

Two ways to run it:

- **Android app (recommended):** rest alerts ring even with the phone locked. See [Android app](#android-app).
- **Web app:** open `index.html` from GitHub Pages and "Add to Home Screen". Rest alerts work while the app is open or recently in the background; the screen stays on during a workout so the timer keeps running.

Data stays on the phone (export a backup from Plan → Backup).

## Daily use

1. **Today**: your session with each exercise's target (sets × reps @ RIR, rest, tempo). Tap an exercise to see the muscles it trains and change its targets. Enter the time you woke up and your gym time; every meal moves with them. Tick meals as you eat them: they go straight into the food log.
2. **Log**: pick an exercise. The target card shows the focus (strength or hypertrophy), set count, **tempo**, cue, what weight to use today (double progression: once every set reaches the top of the rep range, add the smallest step), warm-up sets for the four heavy lifts and a **front-and-back muscle diagram** (main muscles bright, helpers lighter, down to the head, e.g. Preacher Curl → biceps short head and brachialis). Hide it with "Muscles worked". The rest box shows this exercise's rest: change it with −15 / +15, a chip, or type any number of seconds. The timer starts after each set and alerts you when rest is over.
3. **Fuel**: the **food log** (anything you eat, with kcal, protein, carbs, fat; quick-add from your plan meals, saved foods and ~55 Indian staples), daily targets, meal options, timing, smoothie, supplements, groceries. Every section has an **Edit** button.
4. **Body**: weigh in every morning. The weekly check-in tells you to add 200 kcal, remove 150 or change nothing.
5. **History**: **lift goals** (e.g. Bench Press 80 kg × 5). Each shows what you can do now at the goal's reps (estimated from your best recent set), a projected date from your last 10 weeks of progress, and is marked hit the moment you log it. The goal also appears as a dashed line on the progress chart and in the Log screen.
6. **Plan**: the **workout editor** (pick a day, reorder, add or remove exercises, pair exercises as supersets, turn a rest day into a training day, set targets per exercise), the exercise library, **alerts & reminders** (meals, including post-workout, at their planned times, morning weigh-in, bedtime; on time or 10/15 min early; meals you've ticked are skipped), diet notes, backup.
7. **Coach**: type things like `gym at 7:30`, `woke up at 6`, `badminton at 6 pm`, `ate smoothie`, `bench 80 x 8`, `rest 2 min`.

## Training targets (Plan v3, Nov 2026)

Built so the next exercise isn't wrecked by the last one. Plan v3 keeps the v2 structure, goes back to the 25 exercises of the original list and pairs exercises into supersets to save time. Full v2 write-up: https://claude.ai/artifact/TF9284dee5CqRyv5vuKVqi

`[A + B]` is a superset: alternate one set of A and one set of B.

| Day | Session (in order) | Time |
| --- | --- | --- |
| Mon | Upper: [Bench Press 3×4–6 + Pull-up 3×6–10], [Overhead Press 2×5–8 + Chest-Supported T-Bar Row 2], Lateral Raise 3, [Preacher Curl 2 + Overhead Cable Triceps Extension 2] | ~40 min (was ~60) |
| Tue | Lower: Squat 3×4–6, Romanian Deadlift 3, [Leg Extension 3 + Seated Leg Curl 3], [Standing Calf Raise 3 + Cable Crunch 2] | ~50 min (was ~60) |
| Thu | Push: [Incline Bench Press 3 + Lateral Raise 4], Weighted Dips 2, [Machine Pec Deck 2 + Overhead Cable Triceps Extension 3] | ~35 min (was ~45) |
| Fri | Pull: Pull-up 3, Chest-Supported T-Bar Row 3, [Reverse Pec Deck 3 + Bayesian Cable Curl 3], [Machine Lat Pullover 2 + Dumbbell Shrugs 2], Wrist Curls & Extensions 2 | ~45 min (was ~55) |
| Sat | Legs: Deadlift 3×3–5, Walking Lunge 2, [Leg Extension 2 + Seated Leg Curl 2], [Nautilus Glute Drive 2 + Neck Curls & Extensions 2], [Standing Calf Raise 3 + Cable Crunch 2] | ~45 min (was ~55) |

Times include a 10-minute warm-up and ~40 s per set.

### Supersets

- **Pairs share no working muscle** (chest/back, quads/hamstrings, biceps/triceps, calves/abs…), so one rests while the other works. Paired sets like these keep the same reps and load in much less time (Robbins 2010; Weakley 2017).
- **Rest between the two** is worked out from both exercises' rests so each muscle still gets its full rest: (longer rest − 40 s) ÷ 2, at least 30 s. Example: Bench (3:30) + Pull-up (2:30) → 1:25 between, so the bench still gets ~3:30 between its own sets.
- **Straight sets** for Squat, Deadlift, Romanian Deadlift, Walking Lunge, Weighted Dips and Friday's Pull-ups and Rows: they're either too tiring to pair or have no muscle that's free to pair with.
- **In the app:** the Today sheet groups each pair (1a/1b). When you log a set, the logger switches to the other exercise and the rest timer runs the short between-pair rest; once one of the two is done, the other goes back to its normal rest. In Plan → Workouts, ⛓ pairs an exercise with the next one (tap again to unpair). Swapping an exercise keeps it in its superset.
- **At the gym:** pick two stations close together, or use a cable and a dumbbell next to it. If the second machine is taken, do straight sets for that pair.

### Changes from the original exercise list

All 25 exercises from the original list are in the plan. Plan v1 → v2 had replaced Incline Bench Press with Incline Dumbbell Press and Thursday's Overhead Press with Cable Lateral Raise; v3 brings back Incline Bench Press and the dumbbell Lateral Raise, so no exercise outside the list remains. What v2 changed and v3 keeps is how often some lifts appear: Bench Press, Overhead Press, Squat, Romanian Deadlift, Weighted Dips, Preacher Curl, Reverse Pec Deck, Wrist Curls and Glute Drive went from twice a week to once (to keep each session at 14–18 sets), Overhead Cable Triceps Extension and Lateral Raise went from once to twice, and Deadlift moved from Friday to Saturday.

- **Volume:** 84 working sets a week (14–18 a session, about 35–50 min with supersets), 8–13 weekly sets per main muscle, at most ~8 direct sets per muscle per session. Gains flatten past ~11 sets per muscle per session (Remmert 2025).
- **Order:** heaviest lift for each muscle first, then alternate muscles. Pull-ups lead Friday and Deadlift moved to Saturday, so pull-ups no longer follow deadlifts, rows and pullovers.
- **Heavy, low-rep work** only on Bench (Mon), Squat (Tue), Deadlift (Sat) and Overhead Press (Mon). Everything else is hypertrophy work at moderate to high reps.
- **Tempo** (seconds: lower – pause – lift – squeeze): 2–8 s per rep grows muscle about equally (Androulakis Korakakis 2023; Enes 2025). The default is a 2–3 s lowering and a ~1 s lift, with an extra second where the muscle is stretched (3-0-1-0) or a 1 s squeeze where it's hardest at the top (2-0-1-1).
- **Rest:** heavy compounds 3–4 min, moderate compounds 2–3 min, machine/cable compounds 2 min, isolation 90 s, small isolation 60–90 s (Singer 2024, Schoenfeld 2016, Senna 2011).

All of it is editable in the app. "Reset to default" on an exercise brings back the research value; Plan → Reset to preset brings back the whole plan.

## Meals

Pre-workout and post-workout options are all no-cook and take 2 minutes or less. The defaults are **Muesli + milk** (pre) and **Shaker + bananas** (post: milk, a protein scoop and 5 g creatine shaken in a bottle, with 2 bananas and peanuts). The full smoothie is still an option for days with time.

## Android app

The workflow in `.github/workflows/android.yml` builds the APK on GitHub every time `index.html`, `diet-plan.js` or the app config changes on `main`. You don't need Android Studio.

**Install (first time):**

1. On your phone open this repo's **Releases** page → "IronPulse Android app (latest)" → download `IronPulse.apk`.
2. Open the file. Android asks to allow installs from your browser: allow it once, then **Install**.
3. Open IronPulse and allow notifications when asked. In Plan → Rest timer & alerts, tap **Test (5 s)** and lock the phone to check.

**Move your data from the web app:** in the web app go to Plan → Backup → **Export JSON** (or Copy backup). In the Android app: Plan → Backup → **Import file** (or paste). The browser and the app keep separate data.

**Updates:** download the new APK from Releases and install it over the old one; your data stays. If a build fails, open the Actions tab to see why, or run it again with "Run workflow".

Reminders are planned 3 days ahead and re-planned whenever you change a wake, gym or meal time; open the app every couple of days to keep them topped up. In the browser version, reminders only arrive while the app is open or recently in the background.

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

Reminders and lift goals were modelled on the Beacon: 1% Better Every Day app.

Plan sources: Jeff Nippard (pre/post-workout and bulking guides), ICMR-NIN 2020 RDAs, Morton 2018 (BJSM), Whittaker & Wu 2021, ACSM 2007, Singer et al. 2024 (rest intervals), Schoenfeld et al. 2016 and 2021, Senna et al. 2011, Pelland et al. 2024. Review: https://claude.ai/artifact/XGgh9jcEJEWv2asv9HzL53
