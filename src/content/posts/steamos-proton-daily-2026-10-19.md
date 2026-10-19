---
title: "SteamOS & Proton Watch: Decky Loader 3.3.0, GE-Proton11-10 Fixes a Controller Slowdown, and Enshrouded Gets Deck Verified"
description: "Decky Loader's new stable release fixes breakage from a recent Steam update and adds a warning about unvetted plugins. GE-Proton11-10 targets a slowdown that's been around since 11-8, and Enshrouded 1.0 picks up a Steam Deck Verified badge."
summary: "Decky Loader's new stable release fixes breakage from a recent Steam update and adds a warning about unvetted plugins. GE-Proton11-10 targets a slowdown that's been around since 11-8, and Enshrouded 1.0 picks up a Steam Deck Verified badge."
seoTitle: "Decky Loader 3.3.0, GE-Proton11-10 and Enshrouded Deck Verified"
pubDate: 2026-10-19
publishedAt: 2026-10-19T13:10:00.132Z
author: "Vet, VetTV Handheld"
category: news
tags: ["steamos","proton","steam-deck","decky-loader","linux-gaming"]
cover: "covers/steamos-proton-daily-2026-10-19.jpg"
sources:
  - title: "Decky Loader v3.3.0 release (GitHub)"
    url: "https://github.com/SteamDeckHomebrew/decky-loader/releases/tag/v3.3.0"
  - title: "Decky Loader v3.2.10...v3.3.0 comparison (GitHub)"
    url: "https://github.com/SteamDeckHomebrew/decky-loader/compare/v3.2.10...v3.3.0"
  - title: "Decky Loader pull request #991, \"bump UI to fix beta\""
    url: "https://github.com/SteamDeckHomebrew/decky-loader/pull/991"
  - title: "Decky Loader issue #988, \"October 13th update\""
    url: "https://github.com/SteamDeckHomebrew/decky-loader/issues/988"
  - title: "Decky Loader pull request #676, unvetted plugin warning"
    url: "https://github.com/SteamDeckHomebrew/decky-loader/pull/676"
  - title: "GE-Proton11-10 release (GitHub)"
    url: "https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-10"
  - title: "GamingOnLinux, \"Proton-CachyOS 11.0-20261014, DWProton 11.0-15 and GE-Proton 11-10 released\""
    url: "https://www.gamingonlinux.com/2026/10/proton-cachyos-11-0-20261014-dwproton-11-0-15-and-ge-proton-11-10-released/"
  - title: "GamingOnLinux, \"Enshrouded 1.0 rolls out and now it's Steam Deck Verified\""
    url: "https://www.gamingonlinux.com/2026/10/enshrouded-1-0-rolls-out-and-now-its-steam-deck-verified/"
  - title: "Steam client news feed (Steam Client Update October 13, Beta Client Update October 16)"
    url: "https://store.steampowered.com/news/app/593110"
  - title: "Valve, Steam Deck News (SteamOS 3.9.3 Beta)"
    url: "https://www.steamdeck.com/en/news/"
  - title: "Valve Proton releases (GitHub)"
    url: "https://github.com/ValveSoftware/Proton/releases"
source: "Article Desk: steamos-proton-daily-2026-10-19.md"
---
It's a community-tools kind of Monday: no new Valve releases, but Decky Loader, GE-Proton and two other community Proton builds all moved. Here's what's new for SteamOS and Proton.

## Decky Loader v3.3.0 is out

The SteamDeckHomebrew team published **Decky Loader v3.3.0** as a stable release on **October 18 at 10:49 AM CT**. It follows **v3.3.0-pre1**, which went up the evening before (October 17 at 8:21 PM CT) with the same list of changes. Here's what the release notes list:

- **Steam breakage fix:** A UI library bump, titled "bump UI to fix beta." The pull request says "some class modules changed" in Steam and closes a bug report about Decky erroring out after Steam's October 13 update.
- **Unvetted plugin warning:** New warning messages when you install a plugin from outside Decky's own store. The pull request says the goal is to "warn users of potential malicious code outside our ecosystem."
- **New plugin update API:** The pull request says it "should alleviate server load a lot while preserving privacy."
- **Experimental builds everywhere:** Support for ARM Linux, plus experimental builds for ARM Mac and ARM/x86 Windows.
- **macOS fixes:** Type-checking fixes and a missing method.

**What it means for Deck and Legion Go owners:** Decky runs in SteamOS's Game Mode, so this applies to the Steam Deck and to SteamOS handhelds like my original Legion Go. If Decky stopped working after a recent Steam update, the class-module fix is the change that matters. The new warning only appears when you install a plugin from outside Decky's store. The release notes don't name specific devices, and I haven't tested 3.3.0 myself.

## GE-Proton11-10: if a game slowed down on 11-8 or 11-9, try this

GloriousEggroll published **GE-Proton11-10** on **October 19 at 1:21 AM CT**. The headline fix targets a controller-related slowdown.

**The slowdown fix:**
- **The cause:** Since GE-Proton11-8, the automatic PlayStation controller XInput fallback rescanned every HID device each time a game polled an empty controller slot. That caused big slowdowns even with no controller connected. GE-Proton11-10 stops the rescanning.
- **Reported examples:** Path of Exile ran at about 50 FPS instead of 200+. Le Mans Ultimate had slow-motion physics with a Moza wheel. Story of Seasons: Friends of Mineral Town lost FPS with PROTON_PREFER_SDL.
- **Caveat:** The notes say setting PROTON_SONY_AUTO_XINPUT=0 confirmed the cause for the Path of Exile report, but "the fix itself has not been confirmed in-game yet."

**Other controller changes:**
- **Per-game defaults:** Sackboy: A Big Adventure and Rune Factory 4 Special now default to PROTON_SONY_AUTO_XINPUT=0. That fixes the DualSense being assigned to player two in Sackboy and scrambled DS4 input in Rune Factory.
- **Bluetooth rumble:** Bluetooth DualShock 4 and DualSense rumble now works through the XInput fallback, and input no longer stops after the first rumble.

**Component updates:**
- **Wine:** Rebased to Valve's bleeding-edge branch from October 16. That brings syscall emulation through Syscall User Dispatch, native-syscall handling for EAC (EOS) launchers, a Witcher 3 controller rescan fix and a ddraw fix for paletted primary surfaces.
- **DXVK v3.1.1-134:** D3D9 and D3D8 fixes, a workaround for an EA anti-cheat code-signing crash, and a Call of Duty: Ghosts fix.
- **VKD3D-Proton and FEX:** A VKD3D-Proton synchronization fix for queued transfer operations, and FEX-2610-30.

**Game-specific work:**
- **Arknights: Endfield:** Adds the ACE anti-cheat driver fixes from DWProton. The notes say one ACE bugcheck is still unresolved.
- **Star Citizen:** Loads the game's bundled AMD AGS library again, which should avoid an EAC "Untrusted system file" error. This one isn't confirmed in-game yet either.
- **Faster lock releases:** Shared SRW locks release faster. Microsoft Flight Simulator 2024's time in ntdll dropped from 24.5% to 19.1%.

**Desktop:** On KDE Plasma, HDR detection now uses KWin's per-monitor HDR state.

**Also out, per GamingOnLinux:** GamingOnLinux rounded up two more community builds alongside GE-Proton11-10: **Proton-CachyOS 11.0-20261014** and **DWProton 11.0-15**. GOL reports that Proton-CachyOS includes an Arknights: Endfield fix and a Warhammer 40,000: Space Marine 2 fix from the Wine rebase. It also says DWProton updates its components to that same CachyOS base.

## Enshrouded 1.0 is now Steam Deck Verified

GamingOnLinux reported on **October 19 at 2:29 AM CT** that **Enshrouded** is now **Steam Deck Verified**, following its big 1.0 release. GOL says the game was already Steam Machine Verified and SteamOS Compatible. Valve's exact rating date isn't given. The 1.0 changelog GOL published also lists "improved performance on handheld devices, low-end graphics cards and the Steam Deck."

## No change from Valve today

There are no new SteamOS, Steam client, or Valve Proton releases since mid-October. The latest are:

- **SteamOS:** 3.9.3 Beta (Beta and Preview channels), October 16. Stable is still 3.8.
- **Steam client:** The beta from October 16. The last stable client update was October 13.
- **Proton Experimental:** October 15.
- **Proton:** 11.0-2e, October 9.

There's also nothing new for SteamVR or Steam Frame.

## My take

*Opinion:* If you use Decky and it broke after Steam's October 13 update, v3.3.0 is the one to grab. I also like the new warning, because it's easy to forget a plugin runs with real access to your device. On GE-Proton, if a game started stuttering or running slowly on 11-8 or 11-9, try 11-10 first. Just remember the fix isn't confirmed in-game yet, and setting PROTON_SONY_AUTO_XINPUT=0 is the fallback.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld).*

---

## Sources

- Decky Loader v3.3.0 release (GitHub): https://github.com/SteamDeckHomebrew/decky-loader/releases/tag/v3.3.0
- Decky Loader v3.2.10...v3.3.0 comparison (GitHub): https://github.com/SteamDeckHomebrew/decky-loader/compare/v3.2.10...v3.3.0
- Decky Loader pull request #991, "bump UI to fix beta": https://github.com/SteamDeckHomebrew/decky-loader/pull/991
- Decky Loader issue #988, "October 13th update": https://github.com/SteamDeckHomebrew/decky-loader/issues/988
- Decky Loader pull request #676, unvetted plugin warning: https://github.com/SteamDeckHomebrew/decky-loader/pull/676
- GE-Proton11-10 release (GitHub): https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-10
- GamingOnLinux, "Proton-CachyOS 11.0-20261014, DWProton 11.0-15 and GE-Proton 11-10 released": https://www.gamingonlinux.com/2026/10/proton-cachyos-11-0-20261014-dwproton-11-0-15-and-ge-proton-11-10-released/
- GamingOnLinux, "Enshrouded 1.0 rolls out and now it's Steam Deck Verified": https://www.gamingonlinux.com/2026/10/enshrouded-1-0-rolls-out-and-now-its-steam-deck-verified/
- Steam client news feed (Steam Client Update October 13, Beta Client Update October 16): https://store.steampowered.com/news/app/593110
- Valve, Steam Deck News (SteamOS 3.9.3 Beta): https://www.steamdeck.com/en/news/
- Valve Proton releases (GitHub): https://github.com/ValveSoftware/Proton/releases
