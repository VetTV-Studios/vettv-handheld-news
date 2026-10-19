---
title: "Xodus Nexus: An Unofficial Launcher Aims to Run PC Game Pass Games Locally on Steam Deck"
description: "An open-source community project downloads Microsoft Store and PC Game Pass games and runs them through a patched Proton runtime, with no Windows and no cloud streaming. Steam Deck support is experimental, and neither Microsoft nor Valve is involved."
summary: "An open-source community project downloads Microsoft Store and PC Game Pass games and runs them through a patched Proton runtime, with no Windows and no cloud streaming. Steam Deck support is experimental, and neither Microsoft nor Valve is involved."
seoTitle: "Xodus Nexus: Unofficial PC Game Pass Launcher for Steam Deck"
pubDate: 2026-10-19
publishedAt: 2026-10-19T17:06:01.044Z
author: "Vet, VetTV Handheld"
category: steamos-news
tags: ["steam-deck","steamos","pc-game-pass","linux-gaming","xbox"]
cover: "covers/xodus-nexus-game-pass-steam-deck.jpg"
sources:
  - title: "@SteamDeckGaming on X (fan account)"
    url: "https://x.com/SteamDeckGaming/status/2112150453991739823"
  - title: "Xodus Nexus on GitHub (README and compatibility list)"
    url: "https://github.com/domsvoboda/xodus-nexus"
  - title: "Xodus Nexus 0.3.7 release notes"
    url: "https://github.com/domsvoboda/xodus-nexus/releases/tag/v0.3.7"
  - title: "Xodus Nexus wiki, \"Getting started\""
    url: "https://github.com/domsvoboda/xodus-nexus/wiki/Getting-started"
  - title: "Xodus (upstream project) on GitHub"
    url: "https://github.com/xodus-gaming/xodus"
  - title: "VideoCardz, \"Xodus Nexus brings PC Game Pass launcher to Steam Deck with Gaming Mode support\""
    url: "https://videocardz.com/newz/xodus-nexus-brings-pc-game-pass-launcher-to-steam-deck-with-gaming-mode-support"
  - title: "Windows Central, \"Xbox Game Pass on Linux? Xodus Nexus just made it happen\""
    url: "https://www.windowscentral.com/gaming/pc-gaming/xbox-game-pass-on-linux-xodus-nexus-just-made-it-happen-and-it-works-way-better-than-you-think"
  - title: "Notebookcheck, \"This launcher aims to solve one of the Steam Deck's biggest problems\""
    url: "https://www.notebookcheck.net/This-launcher-aims-to-solve-one-of-the-Steam-Deck-s-biggest-problems.1427886.0.html"
source: "Article Desk: xodus-nexus-game-pass-steam-deck.md"
---
A fan account, @SteamDeckGaming, posted this morning at 6:54 AM CT that "PC Game Pass games can now install NATIVELY on Steam Deck and Steam Machine" through a tool called **Xodus Nexus**, and that it's "not cloud gaming." I checked that against the project's own GitHub pages and press coverage. The short version: the project exists and does download and run Microsoft Store games locally on Linux. But "natively" overstates it, and Steam Deck support is explicitly experimental.

## What Xodus Nexus is

Xodus Nexus is an MIT-licensed, open-source desktop launcher on GitHub from developer **domsvoboda**. The repository was created October 11, 2026. It's built on **Xodus**, a separate, GPL-3.0 open-source project from the xodus-gaming organization. Xodus describes itself as an effort to bring Xbox PC games to Linux.

Both projects carry warnings about what they are:

- **Xodus** says it's "an unofficial project – use at your own risk," and "not affiliated with, endorsed by, or sponsored by Microsoft or XBOX."
- **Xodus Nexus** says it's "an independent, unofficial project built on Xodus" and "not an official project or release from the upstream Xodus developers." It asks users to report problems only to Nexus.

## How it works

The Xodus Nexus README describes three parts:

- **The launcher:** Handles Store browsing, your library, an install queue and launch controls.
- **The Nexus backend:** A patched build of Xodus that handles Microsoft account sign-in, license checks, package downloads and launch preparation.
- **The Nexus runtime:** Built on Xodus's own forks of Proton and Microsoft's XGameRuntime, with extra compatibility patches.

So games run through a Wine/Proton-based compatibility layer, not as native Linux builds. Here's what you need, per the README:

- **No Windows install,** but you do need a Microsoft account and "a valid game purchase or subscription."
- **Compatible games only:** Upstream Xodus says games must be GDK titles in Microsoft's MSIXVC package format. Older UWP games aren't supported. Its feature checklist includes Xbox authorization, MSIXVC downloads and "on-demand .exe decryption."

## Steam Deck support

Version **0.3.7** came out today at 1:58 AM CT. Its release notes say Steam Deck "and similar handheld support is experimental." The developer also writes, "I'm currently testing and debugging on virtualized SteamOS, so I can't fully verify how everything behaves on real handheld hardware."

According to the README and the project's SteamOS setup guide:

- **Setup:** You run the launcher as an AppImage. The guide says not to change system packages on SteamOS.
- **Gaming Mode:** "Add to Steam" creates Non-Steam shortcuts that work in Game Mode. This needs native Linux Steam, since Flatpak Steam isn't supported yet.
- **Controller:** Gamepad navigation is experimental, and sign-in windows and file pickers may still need mouse or touch.

Nothing here specifically covers the Legion Go or Steam Machine hardware beyond "similar handhelds."

## Which games work

The README's compatibility list comes from "manual testing and user reports." It isn't a guarantee.

- **Playable:** It lists Gears of War: E-Day, Forza Horizon 6, Sea of Thieves, Palworld, Avowed, DOOM Eternal and Hollow Knight: Silksong, among others. Some are noted as having loading or ownership problems on some setups.
- **Not working:** Others are listed as failing, including ARC Raiders (no connection to online services) and Hell Let Loose: Vietnam (crashes after Easy Anti-Cheat starts).
- **Not Deck-specific:** VideoCardz notes these results come from Linux testing and "do not guarantee equivalent compatibility or performance on Steam Deck hardware."

## Has Microsoft or Valve said anything?

I found no statement from Microsoft or Valve about Xodus or Xodus Nexus as of 12:10 PM CT. Windows Central and VideoCardz both describe it as independent and unofficial.

## My take (opinion)

This is my opinion, and I haven't tried it. It's an impressive community effort, but it's a few days old, unofficial and untested on real Deck hardware by its own developer. You'd be signing in with your Microsoft account through third-party software, so read the project's own warnings before you try it, and don't expect your Game Pass library to just work. I'll wait for reports from real Deck and Legion Go owners before I'd call this a way to play Game Pass on SteamOS.

---

## Sources
- @SteamDeckGaming on X (fan account): https://x.com/SteamDeckGaming/status/2112150453991739823
- Xodus Nexus on GitHub (README and compatibility list): https://github.com/domsvoboda/xodus-nexus
- Xodus Nexus 0.3.7 release notes: https://github.com/domsvoboda/xodus-nexus/releases/tag/v0.3.7
- Xodus Nexus wiki, "Getting started": https://github.com/domsvoboda/xodus-nexus/wiki/Getting-started
- Xodus (upstream project) on GitHub: https://github.com/xodus-gaming/xodus
- VideoCardz, "Xodus Nexus brings PC Game Pass launcher to Steam Deck with Gaming Mode support": https://videocardz.com/newz/xodus-nexus-brings-pc-game-pass-launcher-to-steam-deck-with-gaming-mode-support
- Windows Central, "Xbox Game Pass on Linux? Xodus Nexus just made it happen": https://www.windowscentral.com/gaming/pc-gaming/xbox-game-pass-on-linux-xodus-nexus-just-made-it-happen-and-it-works-way-better-than-you-think
- Notebookcheck, "This launcher aims to solve one of the Steam Deck's biggest problems": https://www.notebookcheck.net/This-launcher-aims-to-solve-one-of-the-Steam-Deck-s-biggest-problems.1427886.0.html
