---
title: "GE-Proton11-11 Is a Hotfix: Star Citizen's EAC Kick Fixed and Video Freezes Squashed"
description: "Released just hours after GE-Proton11-10, this update fixes a VKD3D-Proton change that set off Easy Anti-Cheat in Star Citizen and Hunt: Showdown, repairs three video playback bugs, and adds new protonfixes."
summary: "Released just hours after GE-Proton11-10, this update fixes a VKD3D-Proton change that set off Easy Anti-Cheat in Star Citizen and Hunt: Showdown, repairs three video playback bugs, and adds new protonfixes."
seoTitle: "GE-Proton11-11 Hotfix: Star Citizen EAC Fix, Video Freeze Fixes"
pubDate: 2026-10-19
publishedAt: 2026-10-19T18:25:32.895Z
author: "Vet, VetTV Handheld"
category: steamos-news
tags: ["ge-proton","steam-deck","steamos","linux-gaming","proton"]
cover: "covers/ge-proton11-11-release.jpg"
sources:
  - title: "GE-Proton11-11 release notes (GitHub)"
    url: "https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-11"
  - title: "GE-Proton11-10 release notes (GitHub)"
    url: "https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-10"
  - title: "GE-Proton README (install and enabling instructions)"
    url: "https://github.com/GloriousEggroll/proton-ge-custom"
  - title: "ProtonPlus"
    url: "https://protonplus.vysp3r.com/"
  - title: "ProtonUp-Qt"
    url: "https://davidotek.github.io/protonup-qt"
  - title: "vkd3d-proton issue #3348"
    url: "https://github.com/HansKristian-Work/vkd3d-proton/issues/3348"
source: "Article Desk: ge-proton11-11-release.md"
---
GloriousEggroll published **GE-Proton11-11** on **October 19, 2026, at 1:20 PM CT**, about 12 hours after GE-Proton11-10 (1:21 AM CT), which I covered in this morning's SteamOS & Proton roundup. The release notes call it a "Hotfix Release." Unlike 11-10, it lists no Wine, DXVK, VKD3D-Proton or dxvk-nvapi version bumps, and no FSR or NTSync items. It's all targeted fixes.

## Anti-cheat: Star Citizen and Hunt: Showdown

This is the headline fix. Since GE-Proton11-7, Easy Anti-Cheat had been kicking Star Citizen with "Violation 8 - Untrusted system file" (StarCitizen_Launcher.exe, error 30033). The notes say the same issue hits Hunt: Showdown when it's launched outside Steam.

- **The cause:** VKD3D-Proton was reading the parent process's executable to detect Unreal Engine games. It no longer does that.
- **A rollback:** GE-Proton11-10 had added a Star Citizen native AMD AGS override as a possible fix. 11-11 removes it, saying it "was not the cause of the EAC violation."
- **Space Marine 2:** Per the notes, Warhammer 40,000: Space Marine 2 "was also reported broken in 11-10, but worked when tested with the above mentioned changes."

## Video playback fixes

- **Skipped-video freezes:** Fixes games freezing when a video is skipped or closed while MPEG-1 audio is playing through DirectShow. That was a deadlock in the MPEG audio decoder, a regression since GE-Proton11-8.
- **Upside-down video:** Fixes MPEG-1 videos played through AMStream showing upside down, a regression since GE-Proton11-1.
- **Crashes from converted or scaled frames:** Fixes heap corruption and crashes from video frames that get converted or scaled. The example given is Target Bravo: Operation G.H.O.S.T. crashing when entering stage select. Contributed by @aderumier.

## Protonfixes

- **Star Citizen:** Now installs .NET 4.8 for the new RSI Launcher.
- **Windows version fixes:** Fixes like win10 and win7 are now re-applied when a later winetricks install changes the Windows version. Before, a failed or partial .NET install could leave a prefix stuck on Windows XP.
- **Mod loaders:** Adds fixes for the BepInEx, MelonLoader and FrostyModManager mod loaders.
- **Call of Duty (2003):** Fixes the game fix not running.
- **Ceville:** Now respects PROTON_USE_XALIA if it's already set.
- **Cleanup:** Removes an unused winetricks verb (amdxcffx64) and updates the umu database.

## Downloads

The release has x86_64 and aarch64 tarballs, each with a SHA-512 checksum file. The x86_64 tarball is about 565 MB. Steam Deck, Legion Go and other x86 handhelds use the x86_64 build.

## How to install it on Steam Deck or SteamOS

In Desktop Mode, the easiest route is a GUI manager:

- **ProtonPlus:** GE-Proton's README recommends it. Pick Proton-GE from the dropdown, then choose the version you want or "Proton-GE Latest."
- **ProtonUp-Qt:** DavidoTek's manager also installs and manages GE-Proton.

To install it manually, per the README:

- **Download:** Get the release from GitHub.
- **Create the folder:** Make ~/.steam/steam/compatibilitytools.d if it doesn't exist.
- **Extract:** Unpack the tarball into that folder, then restart Steam.

Then turn it on for a game. Open the game's Properties, go to Compatibility, check "Force the use of a specific Steam Play compatibility tool," and select GE-Proton11-11. Bazzite and other desktop Linux users can use the same tools and folder. The README gives a different path for the Flatpak version of Steam.

## My take (opinion)

If you play Star Citizen or launch Hunt: Showdown outside Steam, or a game froze when you skipped a cutscene on 11-8 or later, this is worth grabbing. If 11-10 is working fine for you, there's no rush, since this release has no component updates. These are the release notes' claims, not my own test results.

---

## Sources
- GE-Proton11-11 release notes (GitHub): https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-11
- GE-Proton11-10 release notes (GitHub): https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-10
- GE-Proton README (install and enabling instructions): https://github.com/GloriousEggroll/proton-ge-custom
- ProtonPlus: https://protonplus.vysp3r.com/
- ProtonUp-Qt: https://davidotek.github.io/protonup-qt
- vkd3d-proton issue #3348: https://github.com/HansKristian-Work/vkd3d-proton/issues/3348
