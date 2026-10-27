---
title: "SteamOS & Proton Watch: SteamOS 3.9.3 Beta, a Faster Steam, and an ARC Raiders Fix"
description: "SteamOS 3.9 brings Plasma 6.7, Linux 7.2 and a new Wi-Fi backend to the beta channel. Plus Steam starts up faster again, Proton Experimental fixes an ARC Raiders crash, and Valve patches Zero Company with a launch option."
summary: "SteamOS 3.9 brings Plasma 6.7, Linux 7.2 and a new Wi-Fi backend to the beta channel. Plus Steam starts up faster again, Proton Experimental fixes an ARC Raiders crash, and Valve patches Zero Company with a launch option."
pubDate: 2026-10-17
publishedAt: 2026-10-17T20:54:39-05:00
author: "Vet, VetTV Handheld"
category: linux-steamos
type: news
tags: ["steamos","proton","steam-deck","linux-gaming","legion-go"]
cover: "covers/steamos-proton-daily-2026-10-17.jpg"
sources:
  - title: "Valve, Steam Deck News (SteamOS 3.9.3 Beta, Oct 16, 2026)"
    url: "https://www.steamdeck.com/en/news/"
  - title: "GamingOnLinux, \"SteamOS 3.9.3 Beta arrives with improved support for Steam Frame wireless adapter\""
    url: "https://www.gamingonlinux.com/2026/10/steamos-3-9-3-beta-arrives-with-improved-support-for-steam-frame-wireless-adapter/"
  - title: "GamingOnLinux, \"Steam Client Beta for October 16 brings another round of startup performance improvements\""
    url: "https://www.gamingonlinux.com/2026/10/steam-client-beta-for-october-16-brings-another-round-of-startup-performance-improvements/"
  - title: "GamingOnLinux, \"Proton Experimental for October 15 has fixes for ARC Raiders, C&C Red Alert, Counterstrike and The Aftermath\""
    url: "https://www.gamingonlinux.com/2026/10/proton-experimental-for-october-15-has-fixes-for-arc-raiders-c-c-red-alert-counterstike-and-the-aftermath/"
  - title: "GamingOnLinux, \"Valve fix Zero Company crashing on Steam Machine with the latest major game update\""
    url: "https://www.gamingonlinux.com/2026/10/valve-fix-zero-company-crashing-on-steam-machine-with-the-latest-major-game-update/"
  - title: "Proton Changelog (GitHub wiki)"
    url: "https://github.com/ValveSoftware/Proton/wiki/Changelog"
source: "Article Desk: steamos-proton-daily-2026-10-17.md"
---
There's been a lot of Valve activity in the last 48 hours. Here's what's new for SteamOS and Proton.

## SteamOS 3.9.3 Beta

Valve posted **SteamOS 3.9.3 Beta** on **October 16** for the **Beta and Preview** channels. You can opt in under **Settings > System > System Update Channel**. Valve's notes say they contain "all changes since the current stable SteamOS 3.8 release." Stable is still 3.8.

**New in 3.9.3:**

- Fixed performance issues in STAR WARS: Galactic Racer when resuming from suspend on Steam Machine.
- Fixed possible GPU errors in The Crew Motorfest.
- Fixed audio issues when hotplugging certain monitors in a multi-monitor setup.
- Improved support for the Steam Frame wireless adapter.
- Developer: reintroduced support for Android binder IPC.

**What SteamOS 3.9 brings compared to 3.8:**

- **Desktop Mode** moves from **Plasma 6.4.3 to Plasma 6.7.3**, on an updated Arch Linux base.
- The **Linux kernel** is rebased on **Linux 7.2**.
- **Wi-Fi:** new installs now use the **wpa_supplicant** backend by default, which now supports fast reconnect after sleep. Valve notes that existing installs stay on iwd unless you switch in Developer Settings.
- **Hibernation:** preliminary support, not yet shown in the Game Mode UI.
- **Frame limiter fixes:** "Disable Frame Limiter" now works with VRR, frame limits no longer give lower-than-intended FPS on some external displays, and the limiter no longer applies to VR titles streamed from Steam Machine to Steam Frame.
- **Other fixes:**
  - Suspend/resume on RDNA1 and RDNA2 dedicated GPUs.
  - Hidden Wi-Fi networks connecting on the first try.
  - Lost input after dragging a launcher window in Game Mode.
  - Remote Play on Steam Machine with no display connected.
- **Hardware fixes:**
  - **Legion Go 2:** fixed a crash launching Forza Horizon 6 and added preliminary brightness control.
  - **ASUS:** a workaround for high fan speed after sleep on some devices.
  - **Intel:** fixes for Panther Lake (ELDEN RING and DARK SOULS III failing to run) and Intel PTL+ boot screen corruption.

**For my original Legion Go:** it isn't named anywhere in the 3.9 notes. Only the Legion Go 2 is. The general fixes may still apply, but nothing is specifically promised for the original.

## Steam client beta, October 16: faster startup again

Valve's **October 16 Steam client beta** adds a "second round of Steam startup performance improvements following shipping of prior improvements in public client." GamingOnLinux says that in its own testing, Steam "really does load up ridiculously fast now." *That's a hands-on impression, not a benchmark.* Also in this beta:

- **Linux:** fixed Vulkan games hanging after alt-tab, and some native non-Steam games failing to launch.
- Fixed Steam Frame native-only content showing as installable on Windows.
- Voice chat output volume for friends now persists between sessions.
- Another British Columbia date fix.
- Steam Input now applies NCAA Football 27's configuration correctly at startup.

This follows the **October 15** beta that moved the Linux client to 64-bit and added Achievement Sets, which I covered in my separate Steam Linux 64-bit article.

## Proton Experimental: ARC Raiders and more

GamingOnLinux reports that the **October 15 Proton Experimental** update:

- Fixed a **rare crash in ARC Raiders**.
- Fixed a crash regression in **C&C Red Alert: Counterstrike and The Aftermath**.
- Fixed a controller hotplug regression in **Chrono Trigger**.
- Made **Breadbox** playable.

**Proton 11.0-3 is still a Release Candidate** (opt-in on Proton 11). The current stable version is Proton 11.0-2.

## Valve fixes STAR WARS Zero Company with a launch option

After Zero Company's big 1.2 update, the game was crashing on Steam Machine. Valve's Pierre-Loup Griffais said on Bluesky that "a fix has been deployed for Zero Company crashing on Steam Machine and will be automatically applied upon restarting the system."

**GamingOnLinux's inference:** after "doing a bit of investigating," GamingOnLinux says Valve changed the game's **default launch options to disable NVIDIA NVAPI**. Valve's post doesn't describe how the fix works. This fits with recent Proton changes that disable nvapi when no NVIDIA driver is present.

## No new stable releases

Today there's **no new SteamOS stable or Proton stable** release.

## My take

*Opinion:* Plasma 6.7 and Linux 7.2 make 3.9 a big update for desktop mode. If you're on a Legion Go like me, I'd wait for testers' reports before switching to the beta channel.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld).*

---

## Sources

- Valve, Steam Deck News (SteamOS 3.9.3 Beta, Oct 16, 2026): https://www.steamdeck.com/en/news/
- GamingOnLinux, "SteamOS 3.9.3 Beta arrives with improved support for Steam Frame wireless adapter": https://www.gamingonlinux.com/2026/10/steamos-3-9-3-beta-arrives-with-improved-support-for-steam-frame-wireless-adapter/
- GamingOnLinux, "Steam Client Beta for October 16 brings another round of startup performance improvements": https://www.gamingonlinux.com/2026/10/steam-client-beta-for-october-16-brings-another-round-of-startup-performance-improvements/
- GamingOnLinux, "Proton Experimental for October 15 has fixes for ARC Raiders, C&C Red Alert, Counterstrike and The Aftermath": https://www.gamingonlinux.com/2026/10/proton-experimental-for-october-15-has-fixes-for-arc-raiders-c-c-red-alert-counterstike-and-the-aftermath/
- GamingOnLinux, "Valve fix Zero Company crashing on Steam Machine with the latest major game update": https://www.gamingonlinux.com/2026/10/valve-fix-zero-company-crashing-on-steam-machine-with-the-latest-major-game-update/
- Proton Changelog (GitHub wiki): https://github.com/ValveSoftware/Proton/wiki/Changelog
