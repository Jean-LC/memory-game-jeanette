# Memory Game

A space-themed card memory game built with React, TypeScript, and Tailwind CSS as a coding challenge for Gorilla Nation.

**Live demo:** [memory-game-jeanette.vercel.app](https://memory-game-jeanette.vercel.app)


## Getting Started


### Prerequisites
 
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash

git clone https://github.com/Jean-LC/memory-game-jeanette.git
cd memory-game-jeanette

npm install

npm run dev

```

Then open [http://localhost:5173](http://localhost:5173) in your browser.


### Project Structure
 
```
src/
├── assets/          # SVG card images and audio files
├── components/      # Reusable UI: FlipCard, modals, layout, leaderboard
├── hooks/           # Custom hooks: useCards, useTimer, useAudio
├── interfaces/      # TypeScript type definitions
├── pages/           # Page-level components: StartPage, GamePage, FinishPage
├── store/           # Zustand global store
└── utils/           # Static data (imagesList)
```
 
Page routing is handled by a simple `switch` on the `pagination` field in the store — no router library needed for a three-screen linear flow.


## Technical Decisions

### Frameworks and Tools

**React 19 + TypeScript + Vite** — React was the natural choice for an interactive game: its component model maps cleanly to cards, modals, and pages. TypeScript adds safety for shared states. Vite was chosen over CRA or webpack for its near-instant HMR and lean config.

**Tailwind CSS v4** — Utility-first styling keeps component files self-contained without a separate CSS layer.

**Zustand** was chosen for its minimal API and first-class TypeScript support. The store (`cardsStore.ts`) handles all cross-page state: current page (`pagination`), game outcome (`userWin`, `userTime`), selected difficulty (`time`), and the persisted leaderboard (`bestTimes`).


## Bonus Features


### Sound Effects

A win or loss sound plays automatically when the game ends, giving instant audio feedback on the outcome. Audio is managed through the custom `useAudio` hook.

### Difficulty Selection

The Start screen lets players choose between three difficulty levels before starting a game:

| Difficulty | Time Limit |
| ---------- | ---------- |
| Easy       | 60 seconds |
| Medium     | 30 seconds |
| Hard       | 15 seconds |

The selected time is stored in Zustand and consumed by `useTimer`, so the countdown adapts automatically to the selected difficulty. The active difficulty is visually highlighted, and the selection persists if the player returns to the Start screen from the Finish page.

### Best Times Leaderboard

A persistent top-3 leaderboard is saved to `localStorage` via Zustand's `persist` middleware. Here's how it works:

1. **On win**, the player's elapsed time (`initialTime − timeRemaining`) is compared against existing records.
2. If the new score ranks in the top 3 (and isn't a duplicate), an **Enter Name modal** appears prompting the player for their name (letters and accented characters only, max 10 characters).
3. The leaderboard is re-sorted by ascending time and trimmed to 3 entries before being saved.
4. The leaderboard is displayed on the Finish screen with a unique space illustration for each entry.

Scores survive page refreshes and browser restarts. Only the leaderboard, not game state, is persisted.