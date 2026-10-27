---
title: "Decky Loader 3.3.1 Stops the Plugin Store and Updater From Failing Quietly"
description: "The stable v3.3.1 release handles plugin store load failures, lets the updater accept larger response headers, refreshes translations and revokes the eMudhra intermediate certificate."
summary: "The stable v3.3.1 release handles plugin store load failures, lets the updater accept larger response headers, refreshes translations and revokes the eMudhra intermediate certificate."
pubDate: 2026-10-27
publishedAt: 2026-10-27T13:05:55.995Z
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["decky-loader","steam-deck","steamos"]
cover: "covers/decky-loader-v3-3-1.jpg"
offTopic: true
draft: false
sources:
  - title: "Decky Loader v3.3.1 release notes on GitHub"
    url: "https://github.com/SteamDeckHomebrew/decky-loader/releases/tag/v3.3.1"
source: "Article Desk: decky-loader-v3-3-1.md"
---
The Steam Deck Homebrew team released **[Decky Loader v3.3.1](https://github.com/SteamDeckHomebrew/decky-loader/releases/tag/v3.3.1)** on **October 26, 2026, at 11:26 PM CT**. It's a **stable** release, not a prerelease, and it follows v3.3.0. A v3.3.1-pre1 build went out shortly before it.

## What changed

From the release notes:

- **Updater fix ([PR #1000](https://github.com/SteamDeckHomebrew/decky-loader/pull/1000)):** Decky now allows larger response headers when it downloads its own updates. This was the first contribution from @FlashyReese.
- **Plugin store errors ([PR #1001](https://github.com/SteamDeckHomebrew/decky-loader/pull/1001)):** Decky now handles plugin store load failures instead of breaking.
- **Translations ([#998](https://github.com/SteamDeckHomebrew/decky-loader/pull/998) and [#1002](https://github.com/SteamDeckHomebrew/decky-loader/pull/1002)):** Two rounds of Weblate translation updates.

The [full commit list from v3.3.0](https://github.com/SteamDeckHomebrew/decky-loader/compare/v3.3.0...v3.3.1) adds two more items:

- **Certificate cleanup:** A dependency update revokes the **eMudhra intermediate CA** in certifi, the certificate bundle Decky's Python backend uses.
- **VR branch:** A commit titled "pick in some fixes from the vr branch." The release notes don't describe those fixes, so I won't guess at them.

## Builds

The release has builds for **Linux x86_64 and arm64**, **Mac**, and **Windows x64 and arm64** (each Windows build also comes in a no-console version).

## Should you update?

It's a small patch, but it targets the two places where Decky tends to fail without much explanation: updating itself and loading the plugin store. If you're on v3.3.0, update from Decky's settings in the Quick Access Menu.

*Source: [Decky Loader v3.3.1 release notes on GitHub](https://github.com/SteamDeckHomebrew/decky-loader/releases/tag/v3.3.1).*
