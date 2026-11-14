/* =====================================================================
   IronPulse diet plan — EDIT THIS FILE to change your diet.
   ---------------------------------------------------------------------
   Everything the app shows about food lives here: daily targets, meal
   options, the smoothie, micronutrients, electrolytes, supplements and
   the grocery list. The app (index.html) only handles timing, tracking
   and display, so you never need to touch it to update the plan.

   How to update:
   1. Open this file on GitHub and press the pencil (Edit) icon.
   2. Change numbers or text. Keep the commas and quotes as they are.
   3. Commit. The app picks up the new plan the next time it opens online.
   4. Bump `version` below so you can see in the app which plan is live.

   Numbers are approximate (labels + Indian food tables). Sources at the end.
   ===================================================================== */
window.IRONPULSE_PLAN = {
  version: '2026-11-15',

  /* ---------- defaults for a new install (the app's Fuel > Settings can change them) ---------- */
  profile: {
    heightCm: 188,
    startWeightKg: 65,      // used until you log your first body weight
    targetWeightKg: 75,
    age: null,              // years; used only for the BMR sanity check in Fuel
    wake: '05:45',          // usual wake-up time
    sleepHours: 7.5,        // 7–9 h protects testosterone (Leproult & Van Cauter 2011, JAMA)
    workoutTime: '07:00',   // default gym start; set the real time on Today each day
    workoutMinutes: 75
  },

  /* ---------- daily targets (Jeff Nippard + roadmap) ---------- */
  targets: {
    maintenanceKcalPerLb: 17,  // Nippard: bodyweight in lb × 14–18; tall + 5 lifting days = 17
    surplusPct: 15,            // Nippard: 10–20% for a faster beginner bulk
    extraKcal: 650,            // tall, active, low-appetite lifters burn more than the formula; puts 65 kg at ~3,450 kcal = the meal plan
    badmintonKcal: 350,        // ~250–400 kcal per hour of play
    proteinGPerKg: [1.6, 2.2], // gains plateau ~1.6 g/kg, upper bound ~2.2 (Morton 2018, BJSM)
    fatPct: [25, 35],          // keep ≥25%: low-fat diets lower testosterone (Whittaker & Wu 2021)
    gainPerWeekKg: [0.25, 0.4],
    waterL: { rest: 3.5, training: 4.5, badmintonExtra: 1 },  // ACSM: replace sweat; creatine + Pune heat need more
    waterMaxLPerHour: 1,       // kidneys clear ~0.8–1 L/h; more than that at once risks low sodium
  },

  /* ---------- weekly check-in rules (Body tab) ---------- */
  checkIn: {
    slowBelowKgPerWeek: 0.2,  addKcal: 200,
    fastAboveKgPerWeek: 0.5,  removeKcal: 150,
    ignoreFirstDays: 21       // creatine + stored carbs add ~1 kg of water in weeks 1–3
  },

  /* ---------- meal slots ----------
     Each option: id, name, what, kcal, p (protein g), c (carbs g), f (fat g). The first option is the default.
     You can also add, edit and delete options inside the app (Fuel > Meal options); those edits stay on the phone.
     Timing is worked out by the app from your wake, workout and sleep times. */
  meals: {
    preFull: {
      label: 'Pre-workout', why: 'Carbs + some protein, 60–90 min before (Nippard). Low fat and fibre so it digests in time. Every option is no-cook, 2 min or less.',
      options: [
        { id: 'pre-m', name: 'Muesli + milk', what: '50 g high-protein muesli + 200 ml toned milk + 1 banana', kcal: 436, p: 20, c: 70, f: 10 },
        { id: 'pre-pb', name: 'Peanut butter bread + banana', what: '2 bread slices + 1 tbsp peanut butter + 1 large banana', kcal: 355, p: 11, c: 60, f: 10 },
        { id: 'pre-cu', name: 'Curd, banana, honey', what: '200 g curd + 1 sliced banana + 1 tbsp honey', kcal: 304, p: 8, c: 57, f: 6 },
        { id: 'pre-e', name: 'Last night\'s roti', what: '2 leftover roti with a little jaggery or ghee + 1 banana', kcal: 400, p: 8, c: 70, f: 10 }
      ]
    },
    preQuick: {
      label: 'Quick pre-workout', why: 'Under an hour to go: small, fast carbs only.',
      options: [
        { id: 'pre-c', name: 'Banana + dates', what: '1 banana + 2 dates', kcal: 170, p: 2, c: 39, f: 1 },
        { id: 'pre-c2', name: 'Banana + milk', what: '1 banana + 200 ml toned milk', kcal: 250, p: 7, c: 42, f: 6 }
      ]
    },
    preNone: {
      label: 'On the way', why: 'Training right after waking: eat a banana, the post-workout shake straight after does the work.',
      options: [ { id: 'pre-d', name: 'Banana', what: '1 banana on the way to the gym', kcal: 120, p: 1, c: 29, f: 0 } ]
    },
    breakfast: {
      label: 'Breakfast', why: 'Rest day: whatever is made at home, or no-cook; the smoothie follows.',
      options: [
        { id: 'bf-a', name: 'Bread omelette', what: '2-egg omelette + 2 bread slices (or whatever eggs mom makes)', kcal: 330, p: 15, c: 29, f: 17 },
        { id: 'bf-b', name: 'Home breakfast', what: '2 roti or 1 paratha + sabzi + 100 g curd (the usual home breakfast)', kcal: 400, p: 13, c: 58, f: 13 },
        { id: 'bf-c', name: 'Boiled eggs + bread', what: '2 boiled whole eggs + 2 bread slices + 1 banana', kcal: 410, p: 19, c: 57, f: 12 }
      ]
    },
    smoothie: {
      label: 'Post-workout', why: 'Within ~1 h of training: 40 g+ protein and plenty of carbs. 5 g creatine every day, rest days too.',
      options: [
        { id: 'pw-sh', name: 'Shaker + bananas', what: '400 ml full-cream milk + 1 protein scoop + 5 g creatine, shaken in a bottle (no blender). Eat 2 bananas + 30 g roasted peanuts with it.', kcal: 896, p: 48, c: 89, f: 41 },
        { id: 'pw-4', name: '4-ingredient smoothie', what: '400 ml full-cream milk + 1 scoop + 1 banana + 2 tbsp peanut butter + 5 g creatine, blended 30 s', kcal: 796, p: 47, c: 59, f: 42 },
        { id: 'pw-mu', name: 'Muesli bowl', what: '80 g high-protein muesli + 300 ml full-cream milk + 1 banana (+ 5 g creatine stirred into the milk)', kcal: 707, p: 31, c: 93, f: 25 },
        { id: 'sm', name: 'Full smoothie', what: 'The full recipe in Fuel (9 ingredients, blender). For days with time.', kcal: 1150, p: 59, c: 112, f: 54 }
      ]
    },
    lunch: {
      label: 'Lunch', why: 'Protein portion + roti or rice.',
      options: [
        { id: 'lu-a', name: 'Roti, dal, chicken', what: '2 roti + 1 bowl dal + 150 g chicken curry + half bowl sabzi + 100 g curd', kcal: 770, p: 50, c: 73, f: 31 },
        { id: 'lu-b', name: 'Fish thali', what: '2 roti + dal + 150 g surmai/bangda fry + 100 g curd', kcal: 760, p: 50, c: 82, f: 26 },
        { id: 'lu-c', name: 'Egg curry thali', what: '2 roti + dal + 3-egg curry + sabzi + curd', kcal: 760, p: 38, c: 60, f: 41 },
        { id: 'lu-d', name: 'Biryani + raita', what: '1 large plate chicken or mutton biryani + raita', kcal: 750, p: 35, c: 96, f: 25 }
      ]
    },
    snack: {
      label: 'Evening snack', why: 'Keeps protein coming every 3–4 h.',
      options: [
        { id: 'sn-a', name: 'Curd, fruit, chana', what: '150 g curd + 1 fruit (guava, orange, papaya) + 2 tbsp roasted chana', kcal: 270, p: 12, c: 42, f: 6 },
        { id: 'sn-b', name: 'Eggs + bread', what: '2 boiled eggs + 1 bread slice', kcal: 220, p: 14, c: 16, f: 11 },
        { id: 'sn-c', name: 'Protein muesli', what: '50 g high-protein muesli + 200 ml milk', kcal: 375, p: 20, c: 38, f: 16 }
      ]
    },
    dinner: {
      label: 'Dinner', why: 'Biggest carb meal on Lower, Pull and Legs days.',
      options: [
        { id: 'di-a', name: 'Rice, dal, chicken', what: '1.5 cups rice (or 3 roti) + 1 bowl dal + 150 g chicken', kcal: 750, p: 44, c: 101, f: 19 },
        { id: 'di-b', name: 'Rice, dal, fish', what: '1.5 cups rice + dal + 150 g fish curry or fry', kcal: 765, p: 47, c: 102, f: 19 },
        { id: 'di-c', name: 'Rice, dal, egg curry', what: '1.5 cups rice + dal + 3-egg curry', kcal: 765, p: 33, c: 93, f: 29 },
        { id: 'di-d', name: 'Roti + keema', what: '3 roti + 150 g chicken keema + salad', kcal: 760, p: 45, c: 84, f: 27 }
      ]
    },
    bedtime: {
      label: 'Bedtime', why: 'Slow protein before sleep.',
      options: [
        { id: 'bt-a', name: 'Warm milk', what: '200 ml warm milk (haldi optional)', kcal: 180, p: 6, c: 12, f: 12 },
        { id: 'bt-b', name: 'Milk + nuts', what: '200 ml milk + 10 almonds + 2 walnuts', kcal: 300, p: 10, c: 13, f: 23 }
      ]
    },
    badminton: {
      label: 'After badminton', why: 'Replaces the ~250–400 kcal burned. Within 2 h of playing.',
      options: [
        { id: 'bd-b', name: 'Roti + milk', what: '1 roti with 1 tsp ghee + 250 ml milk', kcal: 390, p: 11, c: 36, f: 22 },
        { id: 'bd-a', name: 'Protein muesli bowl', what: '80 g high-protein muesli + 250 ml milk', kcal: 560, p: 28, c: 65, f: 21 },
        { id: 'bd-c', name: 'Eggs, bread, banana', what: '3 boiled eggs + 2 bread slices + 1 banana', kcal: 485, p: 25, c: 58, f: 17 },
        { id: 'bd-d', name: 'Nuts + milk', what: '250 ml milk + 10 almonds + 2 walnuts + 2 dates', kcal: 410, p: 12, c: 32, f: 26 }
      ]
    }
  },

  /* ---------- timing rules (minutes) — the science the scheduler follows ---------- */
  timing: {
    preFullMinBefore: 60,       // full pre-workout meal 60–90 min before (Nippard)
    preFullMaxBefore: 90,
    preQuickMinBefore: 30,      // quick carbs 30–45 min before
    postWithinMin: 45,          // smoothie within 45 min of finishing
    minGapBetweenMealsMin: 150, // ≥2.5 h between real meals
    lunchWindow: ['12:30', '14:30'],
    dinnerLatest: '21:00',
    bedtimeSnackBeforeSleepMin: 30,
    dinnerBeforeSleepMin: 105,  // finish dinner ~1.5–2 h before lights out
    restBreakfastAfterWakeMin: 105,
    restSmoothieAfterBreakfastMin: 120
  },

  /* ---------- the morning smoothie ---------- */
  smoothie: {
    title: 'Morning smoothie', kcal: 1150, p: 59, c: 112, f: 54, ml: 650,
    ingredients: [
      ['Full-cream milk (Amul Gold / Chitale)', '400 ml', 356, 13],
      ['Superyou yeast protein', '1 scoop', 130, 25],
      ['Rolled oats, dry', '50 g (5 tbsp)', 190, 7],
      ['Peanut butter (Pintola / Alpino)', '2 tbsp (32 g)', 190, 8],
      ['Banana, large (frozen is best)', '1', 120, 1],
      ['Dates, deseeded', '3', 70, 1],
      ['Pumpkin seeds', '1 tbsp (10 g)', 56, 3],
      ['Ground flaxseed (alsi)', '1 tbsp (7 g)', 37, 1],
      ['Creatine monohydrate', '5 g', 0, 0]
    ],
    tips: [
      'Powder oats, flax and pumpkin seeds once a week; 2 tbsp of the mix per glass.',
      'Frozen banana = thick, cold milkshake.',
      'Too much at once? 400 ml after the gym, the rest by 11:00.',
      'No time? Pick "Shaker + bananas" for the post-workout meal on Today: 1 minute, no blender.'
    ]
  },

  /* ---------- micronutrients (ICMR-NIN 2020 RDA, adult man) ---------- */
  micros: [
    ['Vitamin D', '600 IU', 'Midday sun 15–20 min, egg yolks, bangda, tarli. Blood test once.'],
    ['Omega-3', '2.2 g n-3; fish 2×/week', 'Bangda, tarli, surmai; flax and walnuts daily'],
    ['Zinc', '17 mg', 'Chicken, mutton, eggs, pumpkin seeds, chana'],
    ['Magnesium', '440 mg', 'Pumpkin seeds, peanuts, oats, banana, whole wheat'],
    ['Iron', '19 mg', 'Chicken liver, mutton, eggs, palak + lemon'],
    ['Calcium', '1,000 mg', 'Milk, curd, paneer, nachni bhakri, til'],
    ['Vitamin B12', '2.2 µg', 'Eggs, chicken, fish, milk'],
    ['Folate', '300 µg', 'Dal, palak, chana, rajma'],
    ['Vitamin C', '80 mg', 'Amla, peru, orange, lemon'],
    ['Vitamin A', '1,000 µg', 'Egg yolks, carrots, papaya, palak'],
    ['Iodine', '150 µg', 'Iodised salt, fish, eggs']
  ],

  /* ---------- electrolytes (WHO, ICMR, ACSM 2007) ---------- */
  electrolytes: [
    ['Sodium', 'Under 2,000 mg rest · 2,000–3,000 mg training', 'Home salt; 1/4 tsp salt in a drink on sweaty days'],
    ['Potassium', '3,500 mg+', 'Smoothie ~1,700 mg, dal, potatoes, curd, coconut water'],
    ['Magnesium', '440 mg', 'Smoothie ~300 mg, nuts, whole wheat'],
    ['Calcium', '1,000 mg', 'Smoothie ~520 mg, curd, roti']
  ],
  hydration: [
    '500 ml right after waking (before the pre-workout snack)',
    '500–750 ml during the gym session, sipped between sets',
    '250–500 ml with the smoothie and with each meal',
    'Electrolyte drink or coconut water on Lower, Legs and badminton days',
    'Stop big drinks 1–1.5 h before bed so sleep is not broken',
    'Urine pale yellow = on track; dark = drink now'
  ],
  electrolyteDrink: '500 ml water + 1/4 tsp salt + 1 tbsp sugar or honey + half a lemon. Or 250–300 ml coconut water, or 1 Electral/ORS sachet in 1 L.',

  /* ---------- supplements ---------- */
  supplements: [
    { name: 'Creatine monohydrate', dose: '5 g every day, in the smoothie', status: 'have' },
    { name: 'Superyou yeast protein', dose: '1 scoop/day · 1 kg ≈ 30 scoops', status: 'buy', track: 'protein' },
    { name: 'Blood test: vitamin D, B12, CBC', dose: 'Once, in the first month', status: 'do' },
    { name: 'Vitamin D3', dose: 'Only if the test shows low', status: 'maybe' },
    { name: 'Fish oil', dose: '1 g/day, only if fish < 2×/week', status: 'maybe' },
    { name: 'ORS / Electral', dose: 'Hot, long, sweaty days', status: 'maybe' },
    { name: 'Digital weighing scale', dose: 'Daily weigh-in', status: 'buy' }
  ],
  proteinScoopsPerKg: 30,

  /* ---------- weekly groceries (for you, on top of family cooking) ---------- */
  groceries: [
    ['Full-cream milk', '3.5 L'], ['Bananas', '14'], ['Eggs', '30'], ['Chicken', '1.5–2 kg'],
    ['Fish (bangda, tarli, surmai)', '500 g'], ['Curd', '1 kg'], ['Rolled oats', '350 g'],
    ['Peanut butter', '250 g'], ['Dates', '25'], ['Flaxseed + pumpkin seeds', '50 g each'],
    ['Almonds + walnuts', '100 g + 30 g'], ['Seasonal fruit', '7 servings'],
    ['Bread', '1 loaf'], ['High-protein muesli', '500 g'], ['Roasted peanuts', '200 g']
  ],

  /* ---------- day-specific notes (shown on Today) ---------- */
  dayNotes: {
    heavyDays: /lower|pull|leg/i,   // split names that get the full rice portion
    heavy: 'Big session: eat the full 1.5 cups rice at dinner.',
    light: 'Lighter session: 1 cup rice at dinner is fine if you feel full.',
    rest: 'Rest day: same calories. Muscle grows today.'
  },

  /* ---------- sources ---------- */
  sources: [
    ['Full roadmap (Claude Doc)', 'https://claude.ai/artifact/H8qaL1QpEUJrfzn9PminnQ'],
    ['Nippard: What to eat before, during & after training', 'https://rosetta.to/u/jeffnippard/what-to-eat-before-during-after-training-for-max-muscle-growth'],
    ['Nippard: How to bulk like a pro', 'https://rosetta.to/u/jeffnippard/how-to-bulk-like-a-pro-using-science'],
    ['ICMR-NIN nutrient requirements 2020', 'https://www.nin.res.in/rdabook/brief_note.pdf'],
    ['Morton 2018, protein meta-analysis (BJSM)', 'https://bjsm.bmj.com/content/52/6/376.abstract'],
    ['Whittaker & Wu 2021, low-fat diets and testosterone', 'https://arxiv.org/pdf/2204.00007'],
    ['ACSM 2007, exercise and fluid replacement', 'https://pubmed.ncbi.nlm.nih.gov/17277604/']
  ]
};
