/* Naseej — application data.

   Ported from src/data/threadData.ts, src/pages/ThreadsLibrary.tsx and
   src/pages/UserProfile.tsx. Content only: this file never touches the DOM,
   the router or the network.

   Everything is published through two read-only surfaces at the bottom:
     NASEEJ.data    — site content (threads, waypoints, cities, rewards...).
     NASEEJ.session — the signed-in weaver: profile, points, badges, progress.

   Both are plain objects today. When Firebase is switched on they become the
   seam the auth / Firestore layer fills in, so pages keep reading data the
   same way either way. */

;(function (NASEEJ) {
  "use strict"

  // ════════════════════════════════════════════════════════

  // IRBID

  // ════════════════════════════════════════════════════════

  /* Clean copy. Difficulty and duration used to be scraped out of this
         string by the place page's regex, so the mystery badge broke both
         parsers; they are explicit fields now (see place() in pages.js). */

  /* The city photograph the hero card shows. Without this the caption falls
         back to the thread title and claims to be a photograph of the walk. */

  /* ── What is fact, and what is story ───────────────────────────────────
         The Yarmouk, its basalt gorge, the migratory corridor, the columnar
         jointing and the riverside herbs are all real. The traveller, the ibex
         cut into the trail stone, the boot prints, the red thread and the herb
         wrap are not: they are invented for this thread.

         Declaring that here is what keeps this an interactive mystery rather
         than a false local history. `reveal` below is a work of fiction and the
         UI must label it as one wherever it is printed — the same reason a novel
         does not footnote its plot. */

  /* Every clue carries the interaction that earns it, so a clue is never
         "waypoint N unlocked" by position — it is unlocked by the player doing
         something. Clue 3 comes from the branch choice, which is not a waypoint
         at all. `kind` is the interaction: 'challenge' (a validated multiple
         choice answer) or 'branch' (the CHOOSE YOUR PATH decision). */

  /* KHAYT reacts to the choice itself, not only to the waypoint state. */

  /* One secret, on this thread only. It is not a fifth waypoint: the four
         story nodes stay the story, and this sits beside them until its
         condition is actually met. */

  /* Branch-dependent final text. Built into a full narrative by
         data.revealStory(), so the renderer only has to print it. */

  /* What the player actually does here, in the order they do it. The old
             copy described a field exercise (record two temperatures, calculate
             a gradient) while the screen showed a multiple-choice question, so
             the brief and the interaction disagreed. `challenge` is now the
             real interaction, and the field exercise is kept as the optional
             `fieldNote` it always was. */

  /* The observation is a validated question, not a button: you have to
             name what you actually saw before the clue opens. */

  /* The last node: answering it is what earns the reveal, so the UI
             labels it as the final answer rather than as one more question. */

  /* The secret one: KHAWT stops hinting and asks the weaver outright. */

  // ════════════════════════════════════════════════════════

  // AJLOUN

  // ════════════════════════════════════════════════════════

  // ════════════════════════════════════════════════════════

  // JERASH

  // ════════════════════════════════════════════════════════

  // ════════════════════════════════════════════════════════

  // AMMAN

  // ════════════════════════════════════════════════════════

  // ════════════════════════════════════════════════════════

  // DEAD SEA

  // ════════════════════════════════════════════════════════

  // ════════════════════════════════════════════════════════

  // MADABA

  // ════════════════════════════════════════════════════════

  // ════════════════════════════════════════════════════════

  // KARAK

  // ════════════════════════════════════════════════════════

  // ════════════════════════════════════════════════════════

  // MA'AN

  // ════════════════════════════════════════════════════════

  // ════════════════════════════════════════════════════════

  // AL-AQABA

  // ════════════════════════════════════════════════════════

  /* Stamp each thread with the id it is keyed by.

     The map key *is* the id, but the objects never repeated it, so every
     renderer that reached for `thread.id` got undefined. Only the living
     mystery happened to carry an explicit `id`, which is why the bug hid: the
     Hero's share button worked and the other twenty-six threads emitted
     `data-v="undefined"`. The action then coerced that to NaN, and getThread
     quietly answered with the default thread instead — so sharing thread 3
     would have shared thread 7, with no error anywhere to notice it.

     Copying the key onto the object is the fix rather than a workaround, since
     "which thread is this" is a question the object ought to be able to answer
     about itself. An id already present is left alone. */

  // ── IRBID ───────────────────────────────────────────────────────────[...]

  // ── AJLOUN ──────────────────────────────────────────────────────────��[...]

  // ── JERASH ──────────────────────────────────────────────────────────��[...]

  // ── AMMAN ───────────────────────────────────────────────────────────[...]

  // ── DEAD SEA ──────────────────────────────────────────────────────────[...]

  // ── MADABA ──────────────────────────────────────────────────────────��[...]

  // ── KARAK ───────────────────────────────────────────────────────────[...]

  // ── MA'AN ───────────────────────────────────────────────────────────[...]

  // ── AL-AQABA ─────────────────────────────────────────────────────────[...]

  /* ── Featured / completed / active ─────────────────────────────────────────
     These three lists used to repeat an id, a title, an image and a region by
     hand, and they drifted: the featured slot for Dead Sea carried id 2, which
     is Hadrian's City, and the Madaba slot carried id 3, which is the Red Sea
     dive. The card said one thing and the link opened another.

     They are now *derived*. A hand-written list may name ids only; every title,
     image, region, waypoint count and duration is read from libraryThreads /
     threadsById by id, so a card can no longer disagree with the thread it
     opens. threadSummary() returns null for an id with no thread, so an entry
     is dropped rather than rendering an empty card.                           */

  /* Carried so a card's caption names the place the file depicts, and so an
         illustration is not described as a photograph. */

  /* Ids only. 1 = Petra, 8 = Dead Sea, 9 = Madaba. */

  /* The weaver's journey is a real state, not a copy of the featured list, so
     these keep their own ids and their own earned figures. */

  /* ── Landing statistics ───────────────────────────────────────────────────
     The old strip read 47 threads / 318 waypoints / 12k weavers / 94 partners.
     Those were roadmap numbers presented as live measurements, and the library
     actually holds 27 threads. Everything that describes *this build* is now
     computed from the catalogues, so it cannot drift again; nothing here claims
     a community size, because this build has no way to know one. */

  /* Filled from the rewards catalogue just below, once it exists. */

  // ── UserProfile.tsx ───────────────────────────────────────────────────────��[...]

  /* completedThreads and activeThreads are derived above, from the ids of the
     threads the demo weaver has actually walked. They used to be hand-written
     literals here with ids that named different threads than their own titles —
     "The Castle Among Pines Thread" sat under id 1, which is Petra. */

  /* Each reward is a demo catalogue entry. Nothing here is redeemable for real,
     which the UI states plainly rather than simulating a partner voucher. */

  /* The partner figure is read straight off the catalogue, so the two can never
     disagree. */

  /* Printed under the strip so the numbers read as this build's inventory
     rather than as a claim about a live platform. */

  /* ── Lookups ──────────────────────────────────────────────────────────�[...]

  /* The thread shown when a route carries no id (or an unknown one), matching
     the fallback in App.tsx / ActiveThread.tsx. */

  /* The living-mystery thread. Every other thread keeps the original
     completion model (bare waypoint ids in session.completedWaypointIds); this
     one records progress in session.completedWaypointKeys, keyed by thread id,
     so the two representations are never mixed in one array. */

  /* ── ATHAR ───────────────────────────────────────────────────────────[...]
     One balance: NASEEJ.session.points. That is the number the profile, the
     rewards tab and the hero thread's stat row all read, so a reward can never
     land in a second, parallel purse.

     The amounts live here and nowhere else. Callers name *what* happened
     (kind) and *which* one it was (key); they never pass an amount, so there is
     no path by which a caller can invent a payout. `awarded` is the ledger:
     one entry per reward, written once, which is what makes a duplicate award
     impossible rather than merely unlikely. */

  /* What paid a reward. `type` is the kind the product pays; `source` is the
     interaction that caused it. Both are closed sets, so the security rules can
     validate them against a literal list instead of trusting a free string —
     which is the difference between "a reward row" and "whatever was posted". */

  /* Firestore document ids may not contain '/', nor be '.' or '..'. Every part
     of a reward key is an integer, a declared chapter key or a declared secret
     id, so the key is already safe — sanitising here means a future non-numeric
     key cannot produce a write that silently lands in a parent document. */

  /* ── Levels ──────────────────────────────────────────────────────────��[...]
     The profile used to carry a hard-coded levelName / levelProgress /
     pointsToNextLevel, so earning the mystery's 500-point reveal left the level
     bar and the "N pts to next level" line describing a level the weaver was no
     longer on. Those three numbers are gone; the level is now a pure function
     of the one real balance.

     The thresholds live here and nowhere else, and a weaver can never fall
     below the level they already reached: points only ever go up, but the
     formula is defensive about it anyway. */

  /* Whole percent, 0-100. At the top level this is 100 by definition
         rather than a division by zero. */

  /* A weaver's level is read from what they have *earned*, not from what they
     are holding. Redeeming a reward spends ATHAR out of the one balance, and a level that dropped because someone spent a discount would be a bug, not a mechanic. So the
     high-water mark is remembered, and levelForWeaver() is the number the UI
     shows. The balance is still the only purse; this is a floor, not a second
     one. */

  /* Called by the one place that adds ATHAR, so the mark can never be lower
     than the balance. */

  const threadsById = {
    7: {
      title: "Bride of the North",

      subtitle: "Northern Jordan · 3 days · Moderate · 260 points",

      city: "Irbid",

      progress: 40,

      tip: "Arrive at Umm Qais just before sunset — the panorama over the Sea of Galilee and the Golan turns deep gold. Pack a light jacket; the northern hills cool quickly after dark.",

      stats: [
        { label: "Points Earned", value: "104", icon: "⭐" },

        { label: "Waypoints Done", value: "2 / 5", icon: "⊕" },

        { label: "Thread Progress", value: "40%", icon: "🧵" },

        { label: "Est. Remaining", value: "5 hrs", icon: "⏱" },
      ],

      waypoints: [
        {
          id: 1,
          name: "Umm Qais (Gadara)",
          type: "Greco-Roman Ruins",
          status: "completed",
          points: 55,
          icon: "🏛️",
          location:
            "Irbid Governorate, Northern Jordan · 32.6553° N, 35.6842° E",

          desc: "Umm Qais is the site of the ancient Greco-Roman city of Gadara, one of the cities of the Decapolis league. It sits on a hilltop overlooking the Sea of Galilee, the Yarmouk River [...]",

          challenge:
            "Identify and photograph the three countries visible from the Gadara viewpoint. Name the Sea of Galilee by its two other historical names used in Biblical and Roman sources.",

          image: "assets/places/irbid/umm-qais-gadara.webp",
        },

        {
          id: 2,
          name: "Yarmouk River Gorge",
          type: "Nature Trail",
          status: "completed",
          points: 49,
          icon: "🌿",
          location: "Yarmouk River, Northern Jordan · 32.68° N, 35.75° E",

          desc: "The Yarmouk River is the largest tributary of the Jordan River and forms the border between Jordan and Syria. Its gorge, cut through ancient basalt lava flows, is a critical flyw[...]",

          challenge:
            "Identify 4 migratory bird species using the field guide at the trail head. Record each species, the time spotted, and its direction of flight in your thread journal.",

          image: "assets/places/irbid/yarmouk-river-gorge.jpg",
          
        },

        {
          id: 3,
          name: "Beit Ras (Capitolias)",
          type: "Decapolis City",
          status: "active",
          points: 60,
          icon: "🪨",
          location: "Beit Ras, Irbid Governorate · 32.5688° N, 35.8481° E",

          desc: "Beit Ras is the ancient city of Capitolias, founded around 97–98 CE and one of the smallest cities of the Decapolis. Built almost entirely from black volcanic basalt, its colon[...]",

          challenge:
            "Count the surviving column drums along the colonnaded street and sketch the theatre's cavea layout. Based on the radius, estimate how many spectators it held at full capacity.",

          image: "assets/places/irbid/beit-ras-capitolias.jpg",
        },

        {
          id: 4,
          name: "Tell Irbid",
          type: "Archaeological Mound",
          status: "locked",
          points: 50,
          icon: "⛏️",
          location: "Irbid City Centre, Irbid · 32.5556° N, 35.8500° E",

          desc: "Rising from the heart of modern Irbid, Tell Irbid is an ancient occupation mound with archaeological layers spanning the Early Bronze Age through the Ottoman period. Pottery sher[...]",

          challenge:
            "Work with the on-site archaeologist to date three pottery fragments by their clay body, surface treatment, and form. Match each shard to the correct period on the excavation timeline[...]",

          image: "assets/places/irbid/tell-irbid.jpg",
        },

        {
          id: 5,
          name: "Abila (Quwayliba)",
          type: "Hidden Decapolis",
          status: "locked",
          points: 46,
          icon: "🗺️",
          location: "Quwayliba, Irbid Governorate · 32.6033° N, 35.7856° E",

          desc: "Abila of the Decapolis lies in the rolling hills north of Irbid and is among the least-visited ancient cities in Jordan. Its remains include a Roman temple, a colonnaded street, [...]",

          challenge:
            "Navigate to the site using only the Roman road markers described in your thread scroll. Locate and photograph the Byzantine mosaic floor without using GPS.",

          image: "assets/places/irbid/abila-quwayliba.jpg",
        },
      ],
    },

    10: {
      id: 10,

      livingMystery: true,

      title: "Yarmouk Nature Walk",

      subtitle: "Yarmouk River Gorge · Living Mystery",

      city: "Irbid",

      region: "Yarmouk River Gorge",

      category: "Nature",

      difficulty: "Moderate",

      duration: "1 day",

      image: "assets/irbid-bride-of-the-north.png",

      imageSubject: "Irbid",
      progress: 0,

      tip: "The gorge is most dramatic in early morning light. Bring binoculars — the Yarmouk corridor is one of the top birdwatching spots in the Middle East during migration season (March–M[...]",

      fiction: {
        isFiction: true,

        label: "Fictional mystery",

        note:
          "The Yarmouk gorge, the basalt, the bird corridor and the riverside herbs are real. " +
          "The traveller, the ibex cut into the trail stone, the red thread and the herb wrap " +
          "are an invented story written for this thread — not local history.",
      },

      clues: [
        {
          id: 1,
          text: "Someone passed through this place before you.",
          unlock: { kind: "challenge", waypoint: 1 },
        },

        {
          id: 2,
          text: "What they carried changed the story.",
          unlock: { kind: "observation", waypoint: 2 },
        },

        {
          id: 3,
          text: "The answer is closer than you think.",
          unlock: { kind: "branch" },
        },

        {
          id: 4,
          text: "Now you can see the connection.",
          unlock: { kind: "challenge", waypoint: 4 },
        },
      ],

      chapters: {
        start: "The Entrance",

        person: "Follow the Person",

        object: "Follow the Object",

        connection: "The Connection",

        reveal: "The Thread",
      },

      branchOptions: [
        {
          id: "person",
          label: "Follow the Person",
          prompt: "A figure is still moving along the gorge rim.",
        },

        {
          id: "object",
          label: "Follow the Object",
          prompt: "Something they carried was left at the basalt wall.",
        },
      ],

      branchReaction: {
        person: "Then keep their steps. A person leaves more than footprints.",

        object:
          "Then keep what they left. Objects are honest — they cannot revise a story.",
      },

      secretChallenge: {
        id: "hidden-crack",

        isSecret: true,

        title: "Most visitors walk past this.",

        prompt:
          "Tucked in a basalt crack beside the viewpoint — too small for the trail board — what did they leave?",

        interaction: "challenge",

        interactionLabel: "Secret observation — name what you found",

        evidence: "One correct answer, chosen by you",

        fieldNote:
          "Fiction: the wrap is part of the invented mystery, not a documented find.",

        unlockCondition: { clue: 1, branch: true, waypoint: 2 },

        secretReward: { badgeId: 10, badgeName: "Hidden Thread" },

        quiz: {
          prompt: "Most visitors walk past this. What is caught in the crack?",

          correct: "herb-wrap",

          options: [
            { id: "coin", text: "A Roman coin, still bright" },

            {
              id: "herb-wrap",
              text: "A small herb wrap, tied with red thread",
            },

            { id: "feather", text: "An eagle feather, freshly dropped" },

            { id: "nail", text: "A survey nail from the trail crew" },
          ],
        },
      },

      reveal: {
        headline: "YOU FOUND THE THREAD",

        connection:
          "The ibex mark at the trail head, the pause on the ledge, the token caught in the basalt, the wrap of za'atar drying at the confluence. Four places, one traveller, and a red thread tyi[...]",

        story: {
          person:
            "You followed the person and never saw their face. They set out before dawn, walked the rim while the gorge was still cold, stopped where the basalt opens onto the river, and came do[...]",

          object:
            "You followed the object and it led you further than they did. The wrap was travel-stained and tied with red thread; the herbs inside were gathered from this bank, not bought. It mov[...]",
        },

        khayt:
          "You found it. Not the answer — the thread. A thread only means something once you hold both ends.",
      },

      waypoints: [
        {
          id: 1,
          name: "Yarmouk Trail Head",
          type: "Nature Reserve",
          status: "active",
          points: 50,
          icon: "🌿",
          location: "Yarmouk River, Northern Jordan · 32.68° N, 35.75° E",

          desc: "The Yarmouk River is the largest tributary of the Jordan River, fed by springs from southern Syria and the Hauran plateau. At the trail head, the basalt-walled gorge drops steep[...]",

          challenge:
            "Answer KHAYT. Read the trail stone by the gate and pick the mark you can actually see. One correct answer opens Clue 1 and pays 150 ATHAR.",

          interaction: "challenge",

          interactionLabel: "Multiple choice — KHAYT asks a question",

          evidence: "One correct answer, chosen by you",

          fieldNote:
            "On site: read the trail stone and note what is cut into it before you choose an answer.",

          image: "assets/places/irbid/yarmouk-trail-head.jpg",
          

          unlocksClue: 1,

          chapterKey: "entrance",

          quiz: {
            prompt:
              "Before you walk in, look at the trail stone by the gate. What mark is cut into it?",

            correct: "ibex",

            options: [
              {
                id: "crown",
                text: "A crown — the old Hauran kings marked their road",
              },

              { id: "ibex", text: "A small ibex, horns back, mid-leap" },

              { id: "anchor", text: "An anchor, worn smooth by rope" },

              { id: "sun", text: "A sun with seven rays, painted" },
            ],
          },
        },

        {
          id: 2,
          name: "Basalt Canyon Viewpoint",
          type: "Geological Site",
          status: "locked",
          points: 45,
          icon: "🪨",
          location: "Yarmouk Gorge, Northern Jordan",

          desc: "The Yarmouk gorge is carved through layers of ancient basalt lava flows originating from volcanic activity in the Hauran region of Syria. The exposed cliff faces reveal distinct[...]",

          challenge:
            "Look around the viewpoint, then tell KHAYT what you actually saw on the basalt. Naming it correctly opens Clue 2 and pays 150 ATHAR.",

          interaction: "observation",

          interactionLabel: "Observation — name what you saw",

          evidence: "One observation, chosen by you",

          fieldNote:
            "On site: look for the columnar jointing before you answer, and count the separate lava flows you can pick out.",

          image: "assets/places/irbid/basalt-canyon-viewpoint.jpg",
          

          unlocksClue: 2,

          chapterKey: "follow",

          lookPrompt:
            "Look around this stretch of the gorge. The next clue is not on the information board.",

          observation: {
            prompt:
              "You are standing at the viewpoint. Which of these did you just see on the basalt?",

            correct: "boot-prints",

            options: [
              {
                id: "boot-prints",
                text: "Boot prints cut into the basalt dust, stopping at the ledge",
              },

              { id: "column", text: "A perfect hexagonal column, unbroken" },

              { id: "nest", text: "A nest, still warm, in the rock face" },

              { id: "sign", text: "A trail marker bolted into the wall" },
            ],
          },

          branches: {
            person: {
              name: "The Traveler's Trace",

              type: "Person",

              icon: "👣",

              desc: "You follow the person. Boot prints cut through basalt dust along the rim, then drop toward a ledge where someone paused long enough to watch the river. The gorge still holds[...]",
            },

            object: {
              name: "The Carried Token",

              type: "Object",

              icon: "🧳",

              desc: "You follow the object. A cloth wrap is caught in a crack of columnar basalt — travel-stained, tied with a red thread. Whatever they carried from the trail head changed wei[...]",
            },
          },
        },

        {
          id: 3,
          name: "Migratory Bird Watch Station",
          type: "Wildlife",
          status: "locked",
          points: 55,
          icon: "🦅",
          location: "Yarmouk Valley Bird Observatory, Northern Jordan",

          desc: "The Yarmouk valley acts as a natural funnel for migratory birds travelling between their European breeding grounds and their African wintering grounds. Over 300 bird species hav[...]",

          challenge:
            "Watch the flock, then pick the raptor this corridor is famous for in spring. One correct answer pays 150 ATHAR.",

          interaction: "challenge",

          interactionLabel: "Multiple choice — KHAYT asks a question",

          evidence: "One correct answer, chosen by you",

          fieldNote:
            "On site: use the identification chart for a 30-minute count and record the species, their behaviour and their direction of flight.",

          image: "assets/places/irbid/migratory-bird-watch-station.jpg",
          

          chapterKey: "follow",

          quiz: {
            prompt:
              "The flock wheels and settles. KHAYT asks which raptor this corridor is famous for in spring.",

            correct: "steppe-eagle",

            options: [
              { id: "osprey", text: "The osprey, hunting the shallows" },

              {
                id: "steppe-eagle",
                text: "The steppe eagle, riding the last thermal of the day",
              },

              {
                id: "kingfisher",
                text: "The kingfisher, holding station over the weir",
              },

              {
                id: "vulture",
                text: "The griffon vulture, circling the gorge rim",
              },
            ],
          },
        },

        {
          id: 4,
          name: "Riverside Picnic Meadow",
          type: "Local Culture",
          status: "locked",
          points: 50,
          icon: "🧺",
          location: "Yarmouk Riverside, Irbid Governorate",

          desc: "At the confluence of a seasonal tributary with the Yarmouk, a flat riverside meadow has been used as a picnic and gathering spot by local Irbid families for generations. Wild he[...]",

          challenge:
            "KHAYT stops hinting and asks outright what knits this thread together. One correct answer opens Clue 4 and pays 150 ATHAR, and pays 500 more if it is the last one standing.",

          interaction: "challenge",

          interactionLabel: "Final answer — KHAYT asks you directly",

          evidence: "One correct answer, chosen by you",

          fieldNote:
            "On site: identify the wild herbs growing along the bank, and try the za'atar with a local guide if one is with you.",

          image: "assets/places/irbid/riverside-picnic-meadow.jpg",
          

          finalAnswer: true,

          unlocksClue: 4,

          chapterKey: "connection",

          lookPrompt:
            "Stand where the tributary meets the river. This is where the thread knits together.",

          quiz: {
            prompt: "KHAYT, quietly: what knits this thread together?",

            correct: "red-thread",

            options: [
              { id: "water", text: "The water — it joins every place here" },

              { id: "basalt", text: "The basalt — one wall, end to end" },

              {
                id: "red-thread",
                text: "A red thread, tied round what they carried",
              },

              { id: "birds", text: "The birds — they fly the whole route" },
            ],
          },
        },
      ],
    },

    11: {
      title: "City of Scholars & Souk",

      subtitle: "Irbid City Centre · 1 day · Easy · 180 points",

      city: "Irbid",

      progress: 0,

      tip: "Visit the souk on a Thursday morning when vendors from surrounding villages bring fresh produce, handmade baskets, and embroidered textiles. The university campus is most vibrant dur[...]",

      stats: [
        { label: "Points Earned", value: "0", icon: "⭐" },

        { label: "Waypoints Done", value: "0 / 4", icon: "⊕" },

        { label: "Thread Progress", value: "0%", icon: "🧵" },

        { label: "Est. Remaining", value: "5 hrs", icon: "⏱" },
      ],

      waypoints: [
        {
          id: 1,
          name: "Yarmouk University",
          type: "Academic Heritage",
          status: "active",
          points: 40,
          icon: "🎓",
          location: "Yarmouk University, Irbid · 32.5556° N, 35.8500° E",

          desc: "Yarmouk University, established in 1976, is one of Jordan's largest and most respected universities with over 30,000 students. Its campus features significant collections of Jor[...]",

          challenge:
            "Visit the university museum and identify three artefacts from the Decapolis period. Write a short description of each, including the site of discovery and estimated date.",

          image: "assets/places/irbid/yarmouk-university.jpg",
        },

        {
          id: 2,
          name: "Irbid Central Souk",
          type: "Local Culture",
          status: "locked",
          points: 45,
          icon: "🏺",
          location: "Irbid City Centre Market, Irbid",

          desc: "The central souk of Irbid has served the city and surrounding villages since the Ottoman period. Today it is a labyrinthine market selling spices, dried herbs, local dairy produ[...]",

          challenge:
            "Find three vendors selling ingredients used in mansaf. Ask each one to explain the role of their product in preparing the dish. Photograph each ingredient with its vendor.",

          image: "assets/places/irbid/irbid-central-souk.svg",
          imageStatus: "placeholder",
        },

        {
          id: 3,
          name: "Irbid Archaeological Museum",
          type: "Museum",
          status: "locked",
          points: 50,
          icon: "🏛️",
          location: "Irbid Archaeological Museum, Irbid",

          desc: "The Irbid Archaeological Museum houses artefacts collected from excavations across northern Jordan, spanning the Chalcolithic, Bronze Age, Iron Age, Hellenistic, Roman, Byzantin[...]",

          challenge:
            "Arrange the five highlighted artefacts in the museum's main hall in chronological order. For each one, note the site of discovery, the material, and the estimated period of manufact[...]",

          image: "assets/places/irbid/irbid-archaeological-museum.webp",
        },

        {
          id: 4,
          name: "Old Irbid Houses",
          type: "Heritage Architecture",
          status: "locked",
          points: 45,
          icon: "🪟",
          location: "Old City Quarter, Irbid",

          desc: "Several Ottoman-era stone houses survive in the older neighbourhoods surrounding Tell Irbid. Built from pale limestone, they feature arched doorways, interior courtyard gardens,[...]",

          challenge:
            "Sketch the floor plan of one Ottoman courtyard house, identifying the function of each room as explained by the host. Note at least two architectural features that reveal the buildi[...]",

          image: "assets/places/irbid/old-irbid-houses.jpg",
        },
      ],
    },

    6: {
      title: "Castle Among Pines",

      subtitle: "Ajloun Forest Reserve · 2 days · Moderate · 540 points",

      city: "Ajloun",

      progress: 0,

      tip: "Start at the forest gate early — the pine trees hold morning mist until about 9 am. Bring sturdy shoes; the castle ramparts are uneven basalt.",

      stats: [
        { label: "Points Earned", value: "0", icon: "⭐" },

        { label: "Waypoints Done", value: "0 / 5", icon: "⊕" },

        { label: "Thread Progress", value: "0%", icon: "🧵" },

        { label: "Est. Remaining", value: "9 hrs", icon: "⏱" },
      ],

      waypoints: [
        {
          id: 1,
          name: "Ajloun Forest Reserve Gate",
          type: "Nature Reserve",
          status: "active",
          points: 80,
          icon: "🌲",
          location: "Ajloun Forest Reserve, Ajloun · 32.3339° N, 35.7469° E",

          desc: "The Ajloun Forest Reserve, managed by the RSCN, covers 13 square kilometres of Mediterranean oak and pine forest in the highlands of north-western Jordan. It is home to roe deer[...]",

          challenge:
            "Identify three native tree species at the forest gate using the species board. Record their scientific names, and describe how each tree species contributes to the forest ecosystem.[...]",

          image: "assets/places/ajloun/ajloun-forest-reserve-gate.jpg",
          
        },

        {
          id: 2,
          name: "Mar Elias Byzantine Church",
          type: "Religious Heritage",
          status: "locked",
          points: 100,
          icon: "⛪",
          location: "Listib Village, Ajloun · 32.3400° N, 35.7400° E",

          desc: "Mar Elias (Saint Elias) is a Byzantine church site traditionally identified as the birthplace of the Prophet Elijah. The 6th-century ruins stand on a hilltop near the village of[...]",

          challenge:
            "Locate the fragment of the original mosaic floor still visible in the eastern apse. Describe the geometric pattern and identify the type of tesserae (stone, glass, or terracotta) us[...]",

          image: "assets/places/ajloun/mar-elias-byzantine-church.webp",
        },

        {
          id: 3,
          name: "Ajloun Castle (Qal'at ar-Rabad)",
          type: "Islamic Fortress",
          status: "locked",
          points: 120,
          icon: "🏰",
          location:
            "Ajloun Castle, Ajloun · 32.3285° N, 35.7517° E · 1,250m elevation",

          desc: "Ajloun Castle was built between 1184 and 1185 CE by Izz al-Din Usama, a nephew of Saladin, on a strategic hilltop overlooking three wadis and the Jordan Valley. Its purpose was [...]",

          challenge:
            "From the castle's highest tower, identify the three wadis visible below and the direction of the Jordan Valley. Locate the iron-reinforced gate and count the number of arrow slits o[...]",

          image: "assets/places/ajloun/ajloun-castle-qalat-ar-rabad.webp",
        },

        {
          id: 4,
          name: "Ancient Olive Grove",
          type: "Nature & Heritage",
          status: "locked",
          points: 120,
          icon: "🫒",
          location: "Ajloun Highlands Olive Groves, Ajloun",

          desc: "The olive groves surrounding Ajloun contain trees estimated to be 1,000 to 2,000 years old. The Ajloun highlands have been a centre of olive cultivation since at least the Roman[...]",

          challenge:
            "Measure the circumference of the widest olive trunk in the grove. Using the standard growth rate of 2.5 cm per year, estimate the tree's minimum age. Document your method and result[...]",

          image: "assets/places/ajloun/ancient-olive-grove.jpg",
          
        },

        {
          id: 5,
          name: "Orjan Village & Local Feast",
          type: "Local Culture",
          status: "locked",
          points: 120,
          icon: "🏡",
          location: "Orjan Village, Ajloun · 32.3500° N, 35.7300° E",

          desc: "The village of Orjan sits at the heart of the Ajloun highlands and is the home base of the RSCN's community tourism programme. Local families run guesthouses and prepare traditi[...]",

          challenge:
            "Participate in preparing one traditional dish with a local family. Ask about the origin of the recipe and at least two local ingredients that cannot easily be found elsewhere in Jor[...]",

          image: "assets/places/ajloun/orjan-village-local-feast.svg",
          imageStatus: "placeholder",
        },
      ],
    },

    12: {
... (file continues unchanged) ...
