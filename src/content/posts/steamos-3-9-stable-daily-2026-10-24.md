---
title: "SteamOS 3.9 Is Now Stable: New Arch Base, Plasma 6.7.3, Linux 7.2 and a Long List of Fixes"
description: "SteamOS 3.9.5 rolled out to everyone on Friday. Here's everything that changed since 3.8, plus this week's 3.9.5 Beta, the Steam Client Beta's Remote Play HDR revamp, and whether the Linux alt-tab hang fix reached Stable."
summary: "SteamOS 3.9.5 rolled out to everyone on Friday. Here's everything that changed since 3.8, plus this week's 3.9.5 Beta, the Steam Client Beta's Remote Play HDR revamp, and whether the Linux alt-tab hang fix reached Stable."
seoTitle: "SteamOS 3.9 Stable: Arch, Plasma 6.7.3, Linux 7.2 and More"
pubDate: 2026-10-24
publishedAt: 2026-10-24T13:06:19.196Z
author: "Vet, VetTV Handheld"
category: linux-steamos
type: news
trending: true
tags: ["steamos","steam-deck","linux-gaming","valve","handheld-pc"]
cover: "covers/steamos-3-9-stable-daily-2026-10-24.jpg"
order: 1
sources:
  - title: "Valve, SteamOS 3.9 (Stable) notes"
    url: "https://store.steampowered.com/news/app/1675200/view/1847286114038096"
  - title: "Valve, SteamOS 3.9.5 Beta notes"
    url: "https://store.steampowered.com/news/app/1675200/view/1847286114038094"
  - title: "Valve, Steam Beta Client Update, October 22"
    url: "https://store.steampowered.com/news/app/1675200/view/1847286114034552"
  - title: "GamingOnLinux, \"Steam Client Beta - October 22nd revamps Remote Play HDR support\""
    url: "https://www.gamingonlinux.com/2026/10/steam-client-beta-october-22nd-revamps-remote-play-hdr-support/"
  - title: "Valve, SteamOS 3.9.4 Beta notes"
    url: "https://store.steampowered.com/news/app/1675200/view/1847286114031077"
  - title: "Valve, Steam Client Update, October 21 (Stable)"
    url: "https://store.steampowered.com/news/app/1675200/view/1847286114030481"
  - title: "steam-for-linux issue #13766"
    url: "https://github.com/ValveSoftware/steam-for-linux/issues/13766"
  - title: "GE-Proton releases"
    url: "https://github.com/GloriousEggroll/proton-ge-custom/releases"
source: "Article Desk: steamos-3-9-stable-daily-2026-10-24.md"
---
It's been a big week for SteamOS. Valve published **SteamOS 3.9** (version 3.9.5) for all users on **Friday, October 23, at 5:04 PM CT**. Here's what's in it, plus the betas and client updates around it.

## SteamOS 3.9.5 Stable: what changed since 3.8

Valve's notes cover every change since the last stable release, SteamOS 3.8.

**The base system**

- **Arch Linux:** An updated Arch Linux base.
- **Desktop Mode:** Updated from Plasma 6.4.3 to Plasma 6.7.3.
- **Kernel:** Rebased on Linux 7.2.
- **Wi-Fi:** The backend now defaults to wpa_supplicant, which Valve says improves compatibility with various Wi-Fi networks. It also gained fast Wi-Fi reconnect on resume from sleep, which was previously only available with the iwd backend.

**Power, display and VR**

- **Steam Deck idle power:** Lower idle power use on Steam Deck when no audio is playing.
- **Steam Frame wireless adapter:** Improved support.
- **VR frame limiter:** Fixed the frame limiter wrongly applying to VR titles when streaming from Steam Machine to Steam Frame.
- **VRR:** Fixed the "Disable Frame Limiter" toggle not working when VRR is on.
- **External displays:** Fixed frame limits giving lower-than-intended FPS on certain external displays.

**Hardware fixes**

- **AMD GPUs:** Fixed suspend and resume on systems with RDNA1 or RDNA2 dedicated GPUs.
- **Legion Go 2:** Fixed a system crash when launching Forza Horizon 6, and added preliminary brightness control.
- **Intel Panther Lake:** Fixed some games, including ELDEN RING and DARK SOULS III, failing to run on recent Panther Lake CPUs. Also fixed boot screen corruption on Intel PTL+ devices.
- **ASUS:** Worked around a firmware issue on some ASUS devices that caused excessive fan speed after waking from sleep.
- **Steam Machine:**
  - Fixed Remote Play not working when it boots with no external display.
  - Fixed firmware updates that occasionally failed to apply.
  - Fixed STAR WARS: Galactic Racer performance after resume.

**Other fixes**

- **Wi-Fi:** Hidden Wi-Fi networks now connect on the first try.
- **Game Mode:** Fixed losing input if a launcher window gets dragged around.
- **Monitors:** Fixed audio issues when hotplugging certain monitors in a multi-monitor setup.
- **The Crew Motorfest:** Fixed an issue that could lead to GPU errors.
- **Timezone:** Changing the timezone no longer blocks Desktop Mode until a reboot.
- **Security:** Revoked compromised eMudhra CA certificates.
- **Misc:** A bootloader update for certain motherboards, a Desktop Mode lockscreen you can now enable (it's still off by default), and an RDP login fix.

**Developer items**

- **Hibernation:** Preliminary support, not yet exposed in the Game Mode interface. It's not yet enabled on Steam Deck "due to an outstanding driver bug."
- **Script renames:** Various scripts and packages were renamed from steamos- to holo-, with aliases to the old names where appropriate.
- **Android binder:** Android binder IPC support is back.
- **VM guests:** Better support for running SteamOS as a VM guest with accelerated graphics (virtio-gpu, venus).
- **Renderdoc:** An updated renderdoc.

**Original Legion Go:** Nothing in the notes is specific to the first-generation Legion Go. The Legion Go 2 items don't mention it.

## SteamOS 3.9.5 Beta/Preview

Valve posted a matching 3.9.5 Beta at 5:04 PM CT the same day. It's new since 3.9.4: security and stability updates, the Steam Deck idle power improvement, and, in Valve's words, "Actually reintroduced support for Android binder IPC for real this time."

## Catch-up: SteamOS 3.9.4 Beta (October 21)

3.9.4 Beta landed October 21 at 10:41 PM CT. Here's what it added:

- **Regression fixes:** Some apps, including A Plague Tale: Innocence, ran behind Steam's loading screen, and screenshots were stuck at 720p.
- **Audio:** Fewer audio clicks on the 3.5mm jack with sensitive earphones.
- **Hibernation:** Temporarily disabled on Steam Deck.
- **Disk encryption:** Improvements for experimental dirlock disk encryption.

Its notes said the wpa_supplicant switch applied "for new installations," with existing installs staying on iwd unless you change it in Developer Settings. The 3.9.5 Stable notes just say "by default" and drop that known issue. Valve doesn't say whether existing installs now switch.

## Steam Client Beta, October 22: Remote Play HDR revamp

The Steam Client Beta published October 22 at 7:35 PM CT overhauls HDR in Remote Play:

- **A new advanced HDR setting:** Automatic (on when HDR content is on), On (always on, allowing brighter SDR content) or Off.
- **Linux and macOS:** HDR capture now works with PipeWire on desktop Linux and when streaming from macOS.
- **Steam Deck OLED:** HDR is enabled again. GamingOnLinux notes that it had previously been removed due to various issues.
- **Android:** HDR is enabled on Android 15 and newer phones with the beta Steam Link app.

## The alt-tab hang fix reached Stable

Earlier this week I covered a Linux alt-tab hang fix that was reportedly incomplete. The Steam Client Stable update on October 21 (5:12 PM CT) lists "Fixed Vulkan games hanging after alt-tab" under Desktop Mode. So the fix from the October 16 beta has shipped to Stable.

The follow-up report, steam-for-linux issue #13766, is still open as of 8:15 AM CT today. It describes a native game hanging at launch on beta 1792192922 after a previous run with the overlay enabled. There's no Valve reply in the thread. The only comment, from October 20, says it also happens on Ubuntu and Fedora, not just Arch.

**No Proton news today.** There are no new GE-Proton releases since GE-Proton11-11 on October 19, and no new Valve Proton release since proton-11.0-2e on October 9.

## How to update

- **Stable:** Go to Settings > System and check for updates.
- **Beta or Preview:** Valve's beta notes say to opt in at Settings > System > System Update Channel.

## My take (opinion)

3.9 is a big platform update, and the Arch, Plasma and kernel jumps alone make it worth installing. Steam Deck owners get the idle power improvement and the HDR return in the client beta to look forward to.

---

## Sources
- Valve, SteamOS 3.9 (Stable) notes: https://store.steampowered.com/news/app/1675200/view/1847286114038096
- Valve, SteamOS 3.9.5 Beta notes: https://store.steampowered.com/news/app/1675200/view/1847286114038094
- Valve, Steam Beta Client Update, October 22: https://store.steampowered.com/news/app/1675200/view/1847286114034552
- GamingOnLinux, "Steam Client Beta - October 22nd revamps Remote Play HDR support": https://www.gamingonlinux.com/2026/10/steam-client-beta-october-22nd-revamps-remote-play-hdr-support/
- Valve, SteamOS 3.9.4 Beta notes: https://store.steampowered.com/news/app/1675200/view/1847286114031077
- Valve, Steam Client Update, October 21 (Stable): https://store.steampowered.com/news/app/1675200/view/1847286114030481
- steam-for-linux issue #13766: https://github.com/ValveSoftware/steam-for-linux/issues/13766
- GE-Proton releases: https://github.com/GloriousEggroll/proton-ge-custom/releases
