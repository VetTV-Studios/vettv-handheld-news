---
title: "SteamOS & Proton Daily: Steam Deck Streaming Fixes, Proton by Default, and a Prefix Bug Squashed"
description: "Tuesday, October 13, 2026. This week's Steam client betas fix HEVC streaming to the Deck, Windows programs you add to Steam now use Proton by default, and Proton Experimental fixes a rare bug where controllers stopped being detected."
pubDate: 2026-10-13
author: "Vet, VetTV Handheld"
category: news
tags: ["steamos","proton","steam-deck","remote-play"]
cover: "covers/steamos-proton-daily-2026-10-13.jpg"
source: "Article Desk: steamos-proton-daily-2026-10-13.md"
---
Happy Tuesday, handheld crew. There's no new SteamOS release today, but the Steam client and Proton teams have been busy. Here's what changed, and what it means if you're on a Steam Deck, a Legion Go, or any other SteamOS device.

## Lead story: Steam Deck streaming gets fixed up

Valve posted a batch of Steam client beta notes on steamdeck.com on October 12, covering betas from October 9, 10 and 12. Most of the changes are about Remote Play, and they're good news if you stream games from your PC to a Deck.

From the **October 12** beta:

- **Fixed HEVC hardware encoding on Steam Deck.**
- Fixed a crash when changing the hardware encoding setting while not streaming.

The October 10 beta also:

- Fixed crashes when using the controller to interact with streaming dialogs.
- Fixed deleting an uploaded screenshot only removing the local copy.

From the **October 9** beta, under Remote Play:

- **Automatically falls back to H.264 if HEVC isn't available.**
- **Disabled HDR when streaming to the OLED Steam Deck.**
- Fixed streaming failing to launch when the host had a cloud save conflict.
- Fixed the stream dropping to a very low bitrate when hardware decoding is disabled.
- Fixed the network health dialog popping up at the start of a stream.
- Enabled Vulkan video decoding when using the SteamRT3C Linux beta.

The same October 9 beta also tidied up the Quick Access Menu's Voice Chat tab, adding a mute toggle to the volume sliders. And by default, Steam Frame controllers now use gamepad input in VR games that don't support VR controls.

In practice, streaming to a Deck should now pick the right codec on its own. HEVC works again where it's supported, and it drops back to H.264 when it isn't. OLED owners lose HDR while streaming for now, which looks like a stability call rather than a downgrade. Valve didn't explain why in the notes.

## October 7 beta: Windows programs use Proton by default

This one landed last week, and it's one of my favorite quality-of-life changes this year. In the **October 7** Steam client beta, **Windows programs you add to Steam as non-Steam games now run in Proton by default.** You no longer have to dig into Properties > Compatibility and turn on Proton yourself every time you add a launcher or an .exe.

The same beta also:

- Added a setting to **disable the screensaver while you're in a game**.
- Fixed non-Steam games failing to launch after you changed the Target file with the Browse button.
- Fixed the **Stop** button not closing a game that was launched by an external tool.
- Fixed library playtime sometimes showing the wrong value for a while.
- Fixed a bug on the "Reorder controller" screen on Linux where swapping controllers sometimes didn't work.
- Fixed a Steam Controller firmware issue where switching to BLE mode would stick even if the host couldn't be found.

GamingOnLinux called it a small change that "should prevent some confusion for users," and I agree. If you add other launchers to Game Mode on a Legion Go, it's one less step.

## Proton Experimental: rare prefix corruption fixed

Valve's Proton changelog on GitHub (updated October 12) and GamingOnLinux's coverage on October 13 both list these new fixes in Proton Experimental:

- **Fixed a rare prefix corruption that caused controllers not to be detected on later launches with that prefix.** (A prefix is the fake Windows setup Proton creates for each game, where its settings and sometimes its saves live.)
- Fixed a hang on exit in Labyrinth of Touhou Tri -The Dreaming Girls & The Mysterious Orbs-.
- Fixed a green line at the bottom of the opening cutscene in Terminator: Dark Fate - Defiance.
- Re-enabled Xalia for Deus Ex: Mankind Divided to improve controller support in its launcher.
- Fixed a Proton 11 regression: the Arma 3 launcher shows its popup window when you hover over options again.

The controller fix is the one that matters for everyone. If a game's controller has ever mysteriously stopped working after a few launches, this may be why. It isn't tied to any particular device.

## Proton 11.0-2e: EA App fixes

Valve also released **Proton 11.0-2e** on GitHub on **October 9**. It's a small update for Proton 11.0-2:

- Fixed the EA App login window not getting focus properly under Gamescope.
- Fixed EA App games showing the wrong splash image.

If you play EA titles in Game Mode, that login focus bug was annoying. Gamescope is the compositor that runs SteamOS's Game Mode, so this fix applies on SteamOS devices.

## Where things stand

- **SteamOS Stable:** 3.8.28
- **SteamOS Beta:** 3.9.2 (from September 25). It brings Linux kernel 7.2, preliminary hibernation support (not yet in the Game Mode UI), and preliminary Legion Go 2 brightness control.
- **No new SteamOS 3.9.x beta** appeared on steamdeck.com's news page between October 11 and 13. Everything posted there in that window was Steam client beta notes.
- **Latest GE-Proton:** GE-Proton11-7, released September 16.

## What it means for the original Legion Go

There's nothing in today's notes that names the original Legion Go, which is the device I run. But two items apply to every SteamOS device, including ours: **Windows programs using Proton by default** (once it reaches you through the client beta), and **Proton Experimental's controller-prefix fix**. If you've been fighting with controllers in non-Steam launchers on your Go, try switching that game to Proton Experimental.

That's it for today. As always, client betas are opt-in. Drop your streaming results in the comments, especially if you've got a Deck OLED.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld) for hands-on SteamOS testing.*

---

## Sources

- Steam Deck News (Steam client betas Oct 5 to 12, 2026): https://www.steamdeck.com/en/news
- GamingOnLinux, "Windows apps and games added to Steam on SteamOS / Linux now use Proton by default" (Oct 8, 2026): https://www.gamingonlinux.com/2026/10/windows-apps-and-games-added-to-steam-on-steamos-linux-now-use-proton-by-default/
- GamingOnLinux, "Proton Experimental gets updated to fix a prefix corruption bug and more" (Oct 13, 2026): https://www.gamingonlinux.com/2026/10/proton-experimental-gets-updated-to-fix-a-prefix-corruption-bug-and-more/
- Valve, Proton Changelog (GitHub wiki, updated Oct 12, 2026): https://github.com/ValveSoftware/Proton/wiki/Changelog
- Valve, Proton releases, proton-11.0-2e (Oct 9, 2026): https://github.com/ValveSoftware/Proton/releases
- GloriousEggroll, GE-Proton releases (GE-Proton11-7, Sept 16, 2026): https://github.com/GloriousEggroll/proton-ge-custom/releases
- GamingOnLinux, "SteamOS 3.9.2 Beta brings fixes for VRR, VR Streaming, Remote Play, Boot Time and more" (Sept 26, 2026): https://www.gamingonlinux.com/2026/09/steamos-3-9-2-beta-brings-fixes-for-vrr-vr-streaming-remote-play-boot-time-and-more/
