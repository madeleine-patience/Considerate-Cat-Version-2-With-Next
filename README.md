# Considerate Cat Tarot - Version Two

**Considerate Cat Tarot: A Meowdern Divination Expurrience**

![App Screenshot](/public/image/cc-homepage.webp)

**TESTING CHANGELOG 2**

Pounce into the world of Considerate Cat Tarot, a cute and functional
application designed as the perfect digital companion to the beloved Considerate
Cat Tarot Deck. Crafted with care and a touch of magic, this app invites both
seasoned tarot enthusiasts and curious newcomers to explore the mystical world
of tarot readings in a whole new way.

You can shop the Considerate Tarot Deck here, Version Two is almost sold out!

https://consideratecat.com/product/considerate-cat-volume-ii-preorder-copy/

I (Madeleine) am the creator of Considerate Cat Tarot and am largely building
this project on my own. My goal is to have it open source by November of 2024.
If you are interested in Contibuting you can get involved with my community on
twitch where I am building this project in public:

https://www.twitch.tv/madeleinepatience

## In Progress Features

- Daily Cards and Insights
- Digital Tarot Readings
- Tarot Card Directory
- Meet The Cats

## Stretch Features

- Personalized Tarot Readings Using AI
- Journal
- Saved Spreads

## Tech Stack

**Client**

- Next.js
- TypeScript

**UI Toolkit**

- Material UI

**Component Development**

- Storybook

**Database & Authentication**

- Supabase

## Changelog

All notable changes to this project will be documented in this file. For new
pull requests, start noting your changes under "Unreleased".

### [Unreleased] YYYY-MM-DD

#### New Features

- New component `TarotSpread` to simplify `TarotSpreadSelectionBox`.
- New stories for `TarotSpread` and `TarotSpreadSelectionBox`
- Alt text added to images.

#### Improvements

- Small Purrlaroid/Cat Directory refactor.
- Small Purrlaroid/Cat Directory refactor.
- Padding and font adjustment, small refactor to `TarotSelectionBox.tsx`
- `TarotSpread` now pulls optimized images from the public directory.
- Refactors and cleanup for `TarotSpreadSelectionBox`.
- Button-like components made more accessible.
- Small homepage refactor

#### Fixes

- Footer Background Image Bug Fix.

### [2.1.7] 2024-09-07

#### Improvements

- Prettier formatting project-wide

### [2.1.6] 2024-09-07

#### New Features

- Prettier formatting on pre-commit hook

#### Improvements

- Updated `.husky/.gitignore` for built scripts and `.gitignore` for es-lint
  cache
- `package.json` updated to include relevant project information
- Added a Changelog to the readme
- Added a new homepage screenshot for the readme
- Added `example.env`

#### Fixes

- .eslintcache (ignored)
