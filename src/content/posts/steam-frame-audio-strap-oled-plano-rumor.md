---
title: "Steam Frame Upgrades: Valve's Audio Strap, an OLED \"Plano\" Rumor, and SideQuest on Flatpak"
description: "Valve has confirmed a premium strap with a hot-swap battery and Index-style speakers, but hasn't given a price or date. Kernel code also hints at an OLED Frame. Here's what's confirmed and what isn't."
summary: "Valve has confirmed a premium strap with a hot-swap battery and Index-style speakers, but hasn't given a price or date. Kernel code also hints at an OLED Frame. Here's what's confirmed and what isn't."
pubDate: 2026-10-15
author: "Vet, VetTV Handheld"
category: news
tags: ["steam-frame","valve","virtual-reality","steamvr","sidequest"]
cover: "covers/steam-frame-audio-strap-oled-plano-rumor.jpg"
sources:
  - title: "PC Gamer, \"Valve working on Steam Frame strap that adds Index-like speakers and hot-swappable batteries, 'coming soon'\""
    url: "https://www.pcgamer.com/hardware/vr-hardware/valve-working-on-steam-frame-strap-that-adds-index-like-speakers-and-hot-swappable-batteries-coming-soon/"
  - title: "The Verge, \"Valve's Steam Frame costs $1,059\""
    url: "https://www.theverge.com/games/994376/valve-steam-frame-vr-headset-price-release-date"
  - title: "Steam Frame Hub, \"Valve is Making an OLED Steam Frame\""
    url: "https://steamframehub.com/exclusive-here-we-go-again-valve-is-making-an-oled-steam-frame/"
  - title: "The Verge, \"Is Valve making a micro-OLED Steam Frame?\""
    url: "https://www.theverge.com/games/1011175/is-valve-making-a-micro-oled-steam-frame"
  - title: "Steam Deck HQ, \"An OLED Steam Frame May Be On The Way\""
    url: "https://steamdeckhq.com/news/an-oled-steam-frame-may-be-on-the-way/"
  - title: "Frames and Fans, \"Valve's Plano OLED Steam Frame Shows Higher Resolution in Code\""
    url: "https://framesandfans.com/news/valves-plano-oled-steam-frame-shows-higher-resolution/"
  - title: "SideQuest releases (GitHub)"
    url: "https://github.com/SideQuestVR/SideQuest/releases"
  - title: "VR.org, \"Why Is SideQuest Shipping a Flatpak Now?\""
    url: "https://vr.org/articles/sidequest-1-4-0-flatpak-steam-deck-frame-wireless-setup-2026"
  - title: "MetaverseWatcher, \"SideQuest Ships Flatpaks for Steam Deck and Steam Frame\""
    url: "https://www.metaversewatcher.io/sidequest-flatpak-steam-deck-steam-frame-github-downloads-october-14/"
source: "Article Desk: steam-frame-audio-strap-oled-plano-rumor.md"
---
There's a lot of Steam Frame news this week. Some of it is confirmed by Valve, some of it comes from source code, and one item is a handy app update. I don't own a Frame, so this is a news roundup. I'll be clear about what's confirmed.

## Confirmed: Valve's deluxe audio strap with a hot-swap battery

In a September interview with **PC Gamer**, Valve said it's building a **first-party replacement head strap** for the Frame. The Frame is modular: the core module (chip, RAM, storage, optics) comes off the strap with three switches, and the strap holds the battery, SD card slot and speakers.

Valve's Jeremy Selan told PC Gamer: "We're working on a future first-party accessory where it will plug in and replace the existing [strap]. That head strap will include a hot-swappable battery, and then premium Index-style off-ear audio."

Valve hardware engineer and audio expert Joy Lyons added: "That's not available at launch, but it's coming soon, and we'll have pricing and details on that." Lyons also explained why the audio went into the strap: Valve wanted the headset to stay lightweight and collapsible.

The Verge separately reported that Valve's planned "enthusiast kit" lets you **stack a second magnetic battery onto the first to double battery capacity**, and includes extra eye spacers.

**What's not confirmed:** price, release date and photos. Valve hasn't given any of them. Given how short the Frame's battery life is, though, this could be the most important accessory Valve makes for it.

## Rumor: an OLED Steam Frame, codename "Plano"

**This is unconfirmed.** Valve hasn't announced an OLED Frame.

Here's where it comes from. Valve made the Steam Frame kernel source public, and Steam Frame Hub found branches for a device called **"Plano"**. Steam Deck HQ notes that "Deckard" was the Frame's codename, and a branch called "deckard-plano" grew out of an earlier "deckard-oled" branch. Steam Frame Hub reports the "deckard-plano" work ran from March to October 2, 2026. According to their reading of the code:

- **3552×3840 per-eye panels**, which appear to be (micro-)OLED.
- A default rendering resolution of **1776×1920 per eye**, plus an experimental "1.5x" mode up to 2368×2560.
- **90 Hz**, with **120 Hz** still being experimented with.
- The **same Snapdragon 8 Gen 3** as the current Frame.
- Work on **foveated scaling**.

The Verge quotes Valve watcher Brad Lynch, who suggests Valve might be "just trying to prototype headsets with this optical stack based on what's already lying around." Frames and Fans notes that the project looks incomplete and might never become a product.

My advice: don't cancel your reservation over this. Code branches aren't product announcements.

## Short item: SideQuest 1.4.0 ships Flatpaks

**SideQuest 1.4.0**, released October 6, added **native Flatpak builds** for **x86_64 and aarch64**. The release notes say they let you "Run SideQuest directly on Steam Deck, Steam Frame, and other compatible Linux devices." VR.org points out that the aarch64 build matters because the Frame is ARM64. Version 1.4.0 also added wireless Quest setup over Bluetooth and Wi-Fi. A 1.4.1 update followed, and MetaverseWatcher says it fixed wireless setup reliability. VR.org notes that the Flatpaks are only on SideQuest's GitHub releases page, not on its main download page.

The x86_64 build should be relevant to SteamOS on my Legion Go too, though I haven't tested it.

## My take

The audio strap is the upgrade I'd watch for: a hot-swap battery solves the Frame's biggest weakness. The OLED Plano is interesting, but for now it's just code, not a product.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld).*

---

## Sources

- PC Gamer, "Valve working on Steam Frame strap that adds Index-like speakers and hot-swappable batteries, 'coming soon'": https://www.pcgamer.com/hardware/vr-hardware/valve-working-on-steam-frame-strap-that-adds-index-like-speakers-and-hot-swappable-batteries-coming-soon/
- The Verge, "Valve's Steam Frame costs $1,059": https://www.theverge.com/games/994376/valve-steam-frame-vr-headset-price-release-date
- Steam Frame Hub, "Valve is Making an OLED Steam Frame": https://steamframehub.com/exclusive-here-we-go-again-valve-is-making-an-oled-steam-frame/
- The Verge, "Is Valve making a micro-OLED Steam Frame?": https://www.theverge.com/games/1011175/is-valve-making-a-micro-oled-steam-frame
- Steam Deck HQ, "An OLED Steam Frame May Be On The Way": https://steamdeckhq.com/news/an-oled-steam-frame-may-be-on-the-way/
- Frames and Fans, "Valve's Plano OLED Steam Frame Shows Higher Resolution in Code": https://framesandfans.com/news/valves-plano-oled-steam-frame-shows-higher-resolution/
- SideQuest releases (GitHub): https://github.com/SideQuestVR/SideQuest/releases
- VR.org, "Why Is SideQuest Shipping a Flatpak Now?": https://vr.org/articles/sidequest-1-4-0-flatpak-steam-deck-frame-wireless-setup-2026
- MetaverseWatcher, "SideQuest Ships Flatpaks for Steam Deck and Steam Frame": https://www.metaversewatcher.io/sidequest-flatpak-steam-deck-steam-frame-github-downloads-october-14/
