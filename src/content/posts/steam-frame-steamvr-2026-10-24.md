---
title: "Steam Frame Week: SteamVR 2.18, Factorio on ARM64, PAYDAY VR's Date and Zenith's Shutdown"
description: "SteamVR 2.18 brings the Aurora environment to the desktop, gamepad fallback for Frame controllers and a stack of Linux fixes. Factorio 2.1 runs natively on Steam Frame, PAYDAY: Aces High lands November 5, and Zenith goes dark December 18."
summary: "SteamVR 2.18 brings the Aurora environment to the desktop, gamepad fallback for Frame controllers and a stack of Linux fixes. Factorio 2.1 runs natively on Steam Frame, PAYDAY: Aces High lands November 5, and Zenith goes dark December 18."
seoTitle: "Steam Frame Week: SteamVR 2.18, Factorio ARM64, PAYDAY VR, Zenith"
pubDate: 2026-10-24
publishedAt: 2026-10-24T13:06:40.100Z
author: "Vet, VetTV Handheld"
category: news
tags: ["steam-frame","steamvr","vr-gaming","linux-gaming","valve"]
cover: "covers/steam-frame-steamvr-2026-10-24.jpg"
sources:
  - title: "Valve, \"Introducing SteamVR 2.18\""
    url: "https://store.steampowered.com/news/app/250820/view/1847286114029913"
  - title: "GamingOnLinux, \"SteamVR 2.18 brings Linux fixes, Steam Frame improvements, new Aurora environment\""
    url: "https://www.gamingonlinux.com/2026/10/steamvr-2-18-brings-linux-fixes-steam-frame-improvements-new-aurora-environment/"
  - title: "Valve, SteamOS 3.9 notes"
    url: "https://store.steampowered.com/news/app/1675200/view/1847286114038096"
  - title: "GamingOnLinux, \"Factorio 2.1 is out now with the native ARM64 Linux build\""
    url: "https://www.gamingonlinux.com/2026/10/factorio-2-1-is-out-now-with-the-native-arm64-linux-build-to-run-on-steam-frame-raspberry-pi-and-more/"
  - title: "Road to VR, \"PAYDAY: Aces High Releases November 5th\""
    url: "https://roadtovr.com/payday-vr-release-date-quest-steamvr-frame/"
  - title: "Road to VR, \"VRMMO Zenith is Finally Pulling the Plug on Servers in December\""
    url: "https://roadtovr.com/zenith-vrmmo-closing-servers-dec-2026-quest-pc-vr/"
  - title: "VR.org, \"This Week in VR\" (October 23, 2026)"
    url: "https://vr.org/articles/this-week-in-vr-2026-10-23"
source: "Article Desk: steam-frame-steamvr-2026-10-24.md"
---
Here's this week's roundup for Steam Frame and SteamVR.

## SteamVR 2.18 is out of beta

Valve released **SteamVR 2.18** to stable on **October 21 at 1:16 PM CT**, after a run of 2.18 betas that ended with 2.18.4 on October 16. Here are the highlights from Valve's notes.

**Streaming (Steam Link)**

- **Reliability:** Streaming reliability improvements, including more fixes for "Error 17."
- **Picture fixes:** Fixed about 300ms gaps in frame delivery during some packet loss, greyish colors on certain AMD GPUs, and some causes of corruption, checkerboarding and stuck streams.
- **Bitrate:** Improved automatic bitrate selection.
- **Eye openness:** Eye openness data from Steam Frame is now exposed via OSC. Valve says this needs "Steam OS 0.4.3, or higher."

**Steam Frame and Quest**

- **Gamepad fallback on Frame:** Steam Frame controllers now default to gamepad input in VR games that don't support VR inputs. You can change this per game in Steam Input settings or in VR Controller settings on the Now Playing page.
- **Quest over USB:** Quest gets tethered streaming over USB, which needs the latest Steam Link app.

**Interface**

- **Aurora:** The "Aurora" environment is now the default. You can turn it off in settings.
- **Gamepad navigation:** The system UI supports gamepad navigation.
- **Menus:** Lesser-used controls moved to an "Additional Options" menu.
- **Fixes:** Fixes for the keyboard not appearing in Skyrim VR, unnecessary dashboard recentering, and some startup crashes.

**Linux**

- **AMD:** Fixed async reprojection failing on AMD GPUs.
- **GPU selection:** Fixed GPU selection on systems with both discrete and integrated GPUs.
- **No systemd:** Fixed compatibility with systems that don't use systemd.
- **OpenXR:** Fixed OpenXR games crashing at launch if SteamVR wasn't already running.
- **Older drivers:** Dropped the VK_KHR_maintenance_9 requirement for compatibility with older drivers.

Valve's notes spell this last item "VK_KHR_maintenence_9."

GamingOnLinux covered the release. In its comments, one reader reported that async reprojection still doesn't work for them on AMD. That's a single user report, not confirmed.

## Steam Frame items in SteamOS 3.9

SteamOS 3.9 went Stable on October 23. Its notes include two items for the Frame:

- **Wireless adapter:** Improved support for the Steam Frame wireless adapter.
- **Frame limiter:** A fix for the frame limiter wrongly applying to VR titles when streaming from Steam Machine to Steam Frame.

## Factorio 2.1 runs natively on Steam Frame

Factorio 2.1 is out as a big cleanup and quality-of-life release. GamingOnLinux reports that it adds a native ARM64 Linux build. It quotes Wube saying the game "now runs natively on ARM64 Linux, which means the game runs on Steam Frame, Raspberry Pi (headless servers), Asahi Linux on Apple Silicon MacBooks" and more. GOL's game info box lists Factorio as Steam Deck Verified and Steam Frame Verified.

## PAYDAY: Aces High launches November 5

Road to VR reports that Fast Travel Games' four-player co-op heist game **PAYDAY: Aces High** launches **November 5** on Quest, PC VR and Steam Frame, priced at $25. VR.org lists it at $24.99.

- **One purchase on Steam:** The Steam version includes both the PC VR version and the native Steam Frame version for standalone play.
- **Final playtest:** It runs through **Monday, October 26**. On Steam, it's the Next Fest demo, which VR.org says includes two heists. Quest 3 and 3S players get a separate playtest build.
- **Bonus:** Playtest players get an exclusive Kitty Mask in the full game.

## Zenith is shutting down December 18

Ramen VR will shut down the servers for its VRMMO **Zenith** at **10:00 AM PST on Friday, December 18, 2026**. That's **12:00 PM CT**, since daylight saving time will have ended by then.

- **Sales:** Sales of Zenith: The Last City and the Zennies premium currency stopped October 21, per Road to VR.
- **New players:** VR.org says new players can download the free client until November 18. Existing players can keep playing until the shutdown.
- **No offline version:** On whether there'll be an offline version or community servers, Ramen VR's FAQ answers "No, not at this time," per VR.org.
- **Refunds:** VR.org says Zennies stay spendable until the servers close, and the announcement says nothing about refunds.
- **Still on sale on Steam:** VR.org also noted that The Last City's Steam listing still showed $9.99 on Friday morning, even though sales were said to have ended.

## My take (opinion)

The gamepad fallback and native ARM64 builds like Factorio's are exactly the kind of things that make a standalone headset more useful. Zenith's end is a reminder that online-only games can disappear. None of this is hands-on; it all comes from the sources below.

---

## Sources
- Valve, "Introducing SteamVR 2.18": https://store.steampowered.com/news/app/250820/view/1847286114029913
- GamingOnLinux, "SteamVR 2.18 brings Linux fixes, Steam Frame improvements, new Aurora environment": https://www.gamingonlinux.com/2026/10/steamvr-2-18-brings-linux-fixes-steam-frame-improvements-new-aurora-environment/
- Valve, SteamOS 3.9 notes: https://store.steampowered.com/news/app/1675200/view/1847286114038096
- GamingOnLinux, "Factorio 2.1 is out now with the native ARM64 Linux build": https://www.gamingonlinux.com/2026/10/factorio-2-1-is-out-now-with-the-native-arm64-linux-build-to-run-on-steam-frame-raspberry-pi-and-more/
- Road to VR, "PAYDAY: Aces High Releases November 5th": https://roadtovr.com/payday-vr-release-date-quest-steamvr-frame/
- Road to VR, "VRMMO Zenith is Finally Pulling the Plug on Servers in December": https://roadtovr.com/zenith-vrmmo-closing-servers-dec-2026-quest-pc-vr/
- VR.org, "This Week in VR" (October 23, 2026): https://vr.org/articles/this-week-in-vr-2026-10-23
