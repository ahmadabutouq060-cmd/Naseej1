# Naseej — Vanilla JavaScript Implementation

Naseej is a gamified tourism experience focused on exploring Jordan through interactive story threads, destinations, waypoints, challenges, and rewards.

**Project demo:** https://naseej-89fa4.web.app/

## Main areas

- A story-thread library and destination discovery experience.
- Waypoint-based narratives, challenges, branch choices, clues, and story reveals.
- Place details with destination information and progress-oriented interactions.
- A profile experience for points, badges, saved items, and rewards.
- Firebase Authentication integration and user-scoped persistence for profile and progress data, when the Firebase project is configured.
- Firestore rules and Cloud Functions for server-side operations.

Some profile, reward, and story content is demonstration content in the UI. Review the deployed Firebase configuration and the exact release before describing any feature as production-ready.

## Technology

- HTML, CSS, and Vanilla JavaScript.
- Firebase Authentication and Cloud Firestore integration.
- Firebase Cloud Functions and Firestore security rules.
- A custom static build script that checks the files and scripts referenced by the site before staging them for Hosting.

## Run locally

Install Node.js and dependencies:

```bash
npm install
npm run build
npm run dev
```

The `npm run build` command stages the static site into `dist/`.

## Test Firestore rules

The repository includes a rules test command:

```bash
npm run test:rules
```

This command requires the Firebase CLI and Firestore emulator to be available in the local environment. Review `firebase.json`, `firestore.rules`, and the test script before running it.

## Project structure

- `index.html` — main HTML shell and script loading order.
- `js/data.js` — story, waypoint, profile, and reward data.
- `js/navigation.js` — page navigation.
- `js/pages.js` — page rendering and interactions.
- `js/firebase.js` and `js/auth.js` — Firebase services and sign-in UI.
- `functions/` and `firestore.rules` — server-side operations and database access rules.
- `scripts/build.cjs` — static build and integrity checks.

## Before presenting or deploying

Because the account contains more than one Naseej repository, verify that this is the version you intend to showcase and that the live demo corresponds to the checked-in source. Never commit private service-account keys or other server secrets.
