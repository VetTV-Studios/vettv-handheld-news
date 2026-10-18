---
title: "Steam Frame Update: Add APKs to Steam, Better Wireless Adapter, and SteamVR 2.18.4 Beta"
description: "SteamOS 0.5.6 Beta lets Frame owners add Android .apk files to Steam from Desktop mode, a stable client update improves Wireless Adapter pairing, and SteamVR Beta 2.18.4 fixes startup crashes."
summary: "SteamOS 0.5.6 Beta lets Frame owners add Android .apk files to Steam from Desktop mode, a stable client update improves Wireless Adapter pairing, and SteamVR Beta 2.18.4 fixes startup crashes."
pubDate: 2026-10-17
author: "Vet, VetTV Handheld"
category: news
tags: ["steam-frame","steamvr","steamos","virtual-reality","valve"]
cover: "covers/steam-frame-steamvr-2026-10-17.jpg"
sources:
  - title: "GamingOnLinux, \"SteamOS 0.5.6 Beta for Steam Frame makes adding apk files simpler\""
    url: "https://www.gamingonlinux.com/2026/10/steamos-0-5-6-beta-for-steam-frame-makes-adding-apk-files-simpler/"
  - title: "Mixed News, \"SteamOS 0.5.6 beta lets you right-click an Android .apk into your Steam Frame library\""
    url: "https://mixed-news.com/en/steamos-0-5-6-beta-steam-frame-apk-right-click-add-to-steam/"
  - title: "SteamDB, \"SteamVR Beta Updated - 2.18.4\""
    url: "https://steamdb.info/patchnotes/25998080/"
  - title: "Valve, Steam Deck News (SteamOS 3.9.3 Beta and Steam client beta Oct 16)"
    url: "https://www.steamdeck.com/en/news/"
  - title: "Road to VR, \"Steam Frame OLED Version Surfaces in Source Code, Suggesting a Possible Hardware Refresh\" (Oct 15, 2026)"
    url: "https://roadtovr.com/valve-steam-frame-oled-version-report/"
  - title: "Mixed News, \"Valve's Steam Frame kernel carries an OLED panel driver, and it is not the 3552x3840 one\" (Oct 16, 2026)"
    url: "https://mixed-news.com/en/steam-frame-kernel-oled-panel-driver-1776x1920-not-3552x3840/"
  - title: "PC Gamer, \"Valve working on Steam Frame strap that adds Index-like speakers and hot-swappable batteries\""
    url: "https://www.pcgamer.com/hardware/vr-hardware/valve-working-on-steam-frame-strap-that-adds-index-like-speakers-and-hot-swappable-batteries-coming-soon/"
source: "Article Desk: steam-frame-steamvr-2026-10-17.md"
---
Valve shipped three updates for the Steam Frame this week. I don't own a Frame, so this is a news roundup.

## SteamOS 0.5.6 Beta for Steam Frame

This is an opt-in beta. You can join it under **Settings > System > System Update Channel**. Per the patch notes reproduced by GamingOnLinux:

**OS:**

- **".apk files in right-click 'add to steam' context menu in Desktop mode."** You can now add an Android app to your Steam library right on the headset. Mixed News and other outlets describe this as sideloading without a PC or cable.
- Disabled avahi-daemon mDNS publishing, which was creating messy frame-XXXX.local entries and sometimes delaying shutdown.
- Improved battery and memory reporting in the performance overlay.

**Streaming:** improved how reliably the Frame connects through the **Steam Frame Wireless Adapter**, so it can connect "in some situations it previously could not."

**Audio:** added **echo cancellation and noise suppression for external microphones**.

## Steam Frame client update (stable)

Released to everyone alongside the beta:

- More reliable **pairing** with the Wireless Adapter, plus a progress display for the first connection after pairing.
- A **Playtime Mode icon** in the notification area.
- Fixed Wi-Fi power saving turning on at startup even when it's disabled in settings.
- On **Windows**, the adapter no longer goes to sleep, which improves reliability. Also fixed a crash in the adapter driver when it fails to initialize.

On the PC side, **SteamOS 3.9.3 Beta** also lists "improved support for Steam Frame wireless adapter," and the **October 16 Steam client beta** fixes Frame-only content showing as installable on Windows. *Hands-on report, not Valve:* GamingOnLinux says that after these updates and the new 64-bit Linux Steam client, its Linux desktop now detects the Frame without needing an advanced option.

## SteamVR Beta 2.18.4

Valve posted **SteamVR Beta 2.18.4** on **October 16** at about 5:39 PM CT, according to SteamDB. It's on the beta branch only:

- **SteamVR:** fixed crashes at startup with certain games, and an occasional crash when unblocking previously blocked add-ons in VR Settings.
- **Steam Link:** a "speculative fix for ~300ms gaps in frame delivery in some packet-loss situations."

## Already covered: the OLED "Plano" report and the audio strap

I covered both on October 15. In short, Valve has confirmed a strap with a hot-swappable battery and Index-style speakers, with **no price or date**. Plano is still **unconfirmed**. Here's what's new since then:

- **Road to VR (Oct 15)** picked up Steam Frame Hub's report. It describes "Plano" as 3,552×3,840 per eye with a default resolution of **1,776×1,920** and the **same Snapdragon 8 Gen 3** as the current Frame. Road to VR suggests it could be an evaluated-and-abandoned configuration or internal testing that "doesn't mean it will necessarily be productized."
- **Mixed News (Oct 16)** disputes the OLED label. It says the 3552×3840 figures come from a "panel-deckard-plano" driver that never mentions OLED. It says the actual OLED driver is a separate branch running at 1776×1920 at 90Hz, last updated February 10. It also notes that the mass-production board file still uses the shipping LCD.

**All of this is unconfirmed.** Valve hasn't announced any new headset or panel.

## My take

*Opinion:* Adding APKs straight to Steam is a big quality-of-life win for Frame owners who want to run Android apps. The Wireless Adapter fixes also target what seems to be the Frame's roughest area right now.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld).*

---

## Sources

- GamingOnLinux, "SteamOS 0.5.6 Beta for Steam Frame makes adding apk files simpler": https://www.gamingonlinux.com/2026/10/steamos-0-5-6-beta-for-steam-frame-makes-adding-apk-files-simpler/
- Mixed News, "SteamOS 0.5.6 beta lets you right-click an Android .apk into your Steam Frame library": https://mixed-news.com/en/steamos-0-5-6-beta-steam-frame-apk-right-click-add-to-steam/
- SteamDB, "SteamVR Beta Updated - 2.18.4": https://steamdb.info/patchnotes/25998080/
- Valve, Steam Deck News (SteamOS 3.9.3 Beta and Steam client beta Oct 16): https://www.steamdeck.com/en/news/
- Road to VR, "Steam Frame OLED Version Surfaces in Source Code, Suggesting a Possible Hardware Refresh" (Oct 15, 2026): https://roadtovr.com/valve-steam-frame-oled-version-report/
- Mixed News, "Valve's Steam Frame kernel carries an OLED panel driver, and it is not the 3552x3840 one" (Oct 16, 2026): https://mixed-news.com/en/steam-frame-kernel-oled-panel-driver-1776x1920-not-3552x3840/
- PC Gamer, "Valve working on Steam Frame strap that adds Index-like speakers and hot-swappable batteries": https://www.pcgamer.com/hardware/vr-hardware/valve-working-on-steam-frame-strap-that-adds-index-like-speakers-and-hot-swappable-batteries-coming-soon/
