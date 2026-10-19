---
title: "Steam on Linux Goes 64-Bit, Running Inside a Steam Runtime Container"
description: "Valve's October 15 Steam client beta moves the Linux client to 64-bit inside the same container tech Steam games use. It also adds Achievement Sets and a Remote Play Display Style setting."
summary: "Valve's October 15 Steam client beta moves the Linux client to 64-bit inside the same container tech Steam games use. It also adds Achievement Sets and a Remote Play Display Style setting."
pubDate: 2026-10-17
publishedAt: 2026-10-17T20:54:39-05:00
author: "Vet, VetTV Handheld"
category: news
tags: ["steam","linux-gaming","steamos","steam-deck","achievements"]
cover: "covers/steam-linux-64-bit.jpg"
sources:
  - title: "Valve, \"Steam Beta Client Update: October 15th\" (Steam News)"
    url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706679414"
  - title: "GamingOnLinux, \"Steam Beta for October 15 brings a 64bit Linux client, Achievement Sets and more\""
    url: "https://www.gamingonlinux.com/2026/10/steam-beta-for-october-15-brings-a-64bit-linux-client-achievement-sets-and-more/"
  - title: "Steam Deck HQ, \"New Steam Deck Beta Client Update Brings Massive Changes to Achievements\""
    url: "https://steamdeckhq.com/news/steam-deck-beta-client-update-massive-changes-achievements/"
source: "Article Desk: steam-linux-64-bit.md"
---
Valve's **October 15 Steam client beta** includes a change Linux users have wanted for years. The Steam client on Linux is now **64-bit** and runs inside a **Steam Runtime container**. It's still a beta, so here's exactly what Valve changed and what it means.

## The Linux changes

Valve's patch notes, as reproduced by GamingOnLinux and Steam Deck HQ, list these Linux changes:

- "The Steam client is now a 64bit application."
- "The Steam client now runs inside a Steam Runtime container." Valve says this "will help the Steam client provide a more consistent experience across multiple distributions. This is the same technology used by Steam games."
- A fix for the Steam updater UI failing to show for some users.

**A caveat, from the comments rather than from Valve:** this doesn't mean Linux distros can drop 32-bit libraries yet. A GamingOnLinux reader quoted the Steam Runtime 3 beta requirements, which still say x86_64 systems "must support multilib" and need both 32-bit and 64-bit libraries and drivers. Valve's patch notes don't mention this either way.

GamingOnLinux's Liam Squires-Hand also said in the comments that after the update, his Steam Frame connected to SteamVR on his Linux desktop almost instantly. That's one person's test, not a Valve claim.

## Achievement Sets

The headline feature for everyone is **Achievement Sets**. Valve explains that developers can now "group their game's related achievements together in collections." Examples include single-player and multiplayer sets, or class-based sets. According to Valve's notes as reported by Steam Deck HQ:

- Games can group achievements separately for the **base game and DLC**.
- DLC achievements can be added in their own sets without breaking your completion of the main game.
- Each set gets its **own progress bar**, and finishing one adds a **"set complete" trophy** to your profile.
- Your completion is kept even if new achievements are later added to a set.
- **Seasonal** or no-longer-obtainable achievements can be archived.
- The Achievements page has been redesigned.

GamingOnLinux shows Portal 2 as an example, with its achievements split into single-player and co-op sets.

## Remote Play and other changes

- **Remote Play:** a new **"Display Style"** setting lets you stretch or zoom the stream when its aspect ratio doesn't match your screen.
- **General:**
  - A redesigned Notifications settings layout.
  - Fixes for memory leaks in game streaming and controller code.
  - Stability fixes.
  - A fix for a date display error affecting users in British Columbia.
- **Library:** better offline support for the activity feed.
- **Steam Controller firmware:** fixed a controller turning back on after being shut down while docked to the puck.
- **Accessibility:** background art now shows on the Big Picture home screen with High Contrast turned on.

## What it means for the Deck and Legion Go on SteamOS

GamingOnLinux says **Steam Deck and Steam Machine get the same fixes and improvements**. Steam Deck HQ says Deck owners can get the update now by setting their update channel to **Beta or Preview** in System Settings.

My Legion Go runs SteamOS too, but Valve's notes don't mention the Legion Go or other third-party handhelds. Achievement Sets and Remote Play's Display Style are client features, so they should show up anywhere the beta client runs, but I haven't tested that. The 64-bit and container changes are listed under the Linux client, and none of the sources explain how they affect SteamOS's Gaming Mode specifically.

*Analysis:* For SteamOS handhelds, I expect Achievement Sets and the Remote Play display option to be the parts you actually notice. The 64-bit move is mostly a long-term reliability change.

## My take

*Opinion:* It's been a long time coming. Moving the Linux client to 64-bit and into a container should make Steam behave more consistently across distros. Achievement Sets are also a genuinely nice upgrade for completionists like me.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld).*

---

## Sources

- Valve, "Steam Beta Client Update: October 15th" (Steam News): https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706679414
- GamingOnLinux, "Steam Beta for October 15 brings a 64bit Linux client, Achievement Sets and more": https://www.gamingonlinux.com/2026/10/steam-beta-for-october-15-brings-a-64bit-linux-client-achievement-sets-and-more/
- Steam Deck HQ, "New Steam Deck Beta Client Update Brings Massive Changes to Achievements": https://steamdeckhq.com/news/steam-deck-beta-client-update-massive-changes-achievements/
