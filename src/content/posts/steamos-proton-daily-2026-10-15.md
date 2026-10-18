---
title: "SteamOS & Proton Watch: Epic's Launcher Comes to Linux, and Fortnite Is Next"
description: "Epic has a native Linux launcher preview and a rebuilt Easy Anti-Cheat, but says the Steam Deck can't run it yet. Plus GE-Proton in Epic's launcher, a bleeding-edge nvapi change, and this week's Deck ratings."
summary: "Epic has a native Linux launcher preview and a rebuilt Easy Anti-Cheat, but says the Steam Deck can't run it yet. Plus GE-Proton in Epic's launcher, a bleeding-edge nvapi change, and this week's Deck ratings."
pubDate: 2026-10-15
author: "Vet, VetTV Handheld"
category: news
tags: ["steamos","proton","linux-gaming","epic-games","steam-deck"]
cover: "covers/steamos-proton-daily-2026-10-15.jpg"
sources:
  - title: "Epic Online Services, \"Awesome Gaming on Linux Without Cheating\" (EAC Linux v2)"
    url: "https://onlineservices.epicgames.com/news/introducing-easy-anti-cheat-linux-v2"
  - title: "GamingOnLinux, \"Epic Games Launcher preview arrives\""
    url: "https://www.gamingonlinux.com/2026/10/epic-games-launcher-preview-arrives-native-linux-support-fortnite-for-linux-is-coming-and-upgraded-easy-anti-cheat/"
  - title: "The Verge, \"Epic is bringing Fortnite to Linux\""
    url: "https://www.theverge.com/games/1010808/epic-fortnite-linux-anti-cheat"
  - title: "Mixed News, \"Epic says a Steam Deck cannot run its new Linux anti-cheat\""
    url: "https://mixed-news.com/en/epic-eac-linux-v2-steam-deck-unsupported-valve-talks-fortnite-pilot/"
  - title: "Hardware Busters, \"Fortnite on Linux Is Coming, and Easy Anti-Cheat v2 Wants Secure Boot, a TPM and Not Your Steam Deck\""
    url: "https://hwbusters.com/news/fortnite-on-linux-is-coming-and-easy-anti-cheat-v2-wants-secure-boot-a-tpm-and-not-your-steam-deck/"
  - title: "GE-Proton releases (GitHub)"
    url: "https://github.com/GloriousEggroll/proton-ge-custom/releases"
  - title: "Proton bleeding-edge commits (GitHub)"
    url: "https://github.com/ValveSoftware/Proton/commits/bleeding-edge"
  - title: "Proton Versions wiki (GitHub)"
    url: "https://github.com/ValveSoftware/Proton/wiki/Proton-Versions"
  - title: "GamingOnLinux, \"Proton 11.0-2e brings EA App fixes, and there's a much bigger Proton 11.0-3 Release Candidate\""
    url: "https://www.gamingonlinux.com/2026/10/proton-11-0-2e-brings-ea-app-fixes-and-theres-a-much-bigger-proton-11-0-3-release-candidate/"
  - title: "Steam Deck HQ, \"The Mega Man X Legacy Collections Are Finally Steam Deck Verified\""
    url: "https://steamdeckhq.com/news/mega-man-x-legacy-collections-steam-deck-verified/"
  - title: "SteamPeaks, \"Steam Deck Verdict Changes\""
    url: "https://steampeaks.com/signals/deck-changes"
source: "Article Desk: steamos-proton-daily-2026-10-15.md"
---
Today's big story doesn't come from Valve. Epic Games has a native Linux launcher in preview and says Fortnite is coming to Linux. Here's the rundown, including the Steam Deck caveat.

## Epic Games Launcher Preview arrives on Linux

On October 14, Epic released a **preview of its rebuilt Epic Games Launcher**, and for the first time it **runs natively on Linux**. According to GamingOnLinux, Epic officially supports **Ubuntu 22.04 LTS or newer, Fedora 43 or newer, and Debian 12 or newer**. Other distributions may work, but Epic won't test or support them.

GamingOnLinux tested a Windows game and found the launcher does a one-time download to support it. Looking closer, they found **it uses GE-Proton**, installed under the launcher's own compat folder. That's a big win for the GE-Proton project.

## Fortnite is coming, but no date

Epic's announcement says: "To bring Fortnite to Linux, we are rebuilding Easy Anti-Cheat (EAC) and working with distro maintainers on security requirements. Once it's working with a critical mass of distro maintainers, we'll bring Fortnite to Linux via the Epic Games Launcher."

Epic engineering director Rick Deist told The Verge there's **no timeline** yet. He said Epic is "investigating" SteamOS compatibility, but Epic doesn't plan to bring Fortnite to the Steam store.

## EAC Linux v2 and the Steam Deck caveat

The rebuilt anti-cheat is called **EAC Linux v2**. Epic says it will "bring the level of protection much closer to par with Windows" using signed kernels, signed kernel modules, and Secure Boot with attestation. Hardware Busters lists the requirements: **UEFI Secure Boot with well-known keys, TPM 2.0 with measured boot, a signed kernel and modules, and kernel lockdown in integrity mode**. Epic says EAC Linux v2 **does not install an anti-cheat kernel module**. Instead it uses a systemd service and eBPF programs that run only while a protected game is running. Epic will pilot it in Fortnite first, then open it to other developers.

Here's Epic's exact Steam Deck caveat:

> "The Steam Deck does not support the required features for our EAC v2 solution, but we are actively talking with Valve and hope to support it in the future."

Epic also says that if you launch a protected game without meeting the requirements, you'll just see an error message, not a ban.

**What about the Legion Go?** Epic didn't name the Legion Go or any other handheld besides the Steam Deck. My read: SteamOS handhelds like my original Legion Go running SteamOS will likely have the same gap as the Deck, but that's my inference, not something Epic said. Nothing here has been tested on a Legion Go.

## GE-Proton11-9: the Epic angle

We covered GE-Proton11-9 (released on the evening of Oct 13, CT) in Tuesday's article. The new angle is that GE-Proton is now what Epic's own Linux launcher downloads to run Windows games, per GamingOnLinux. A community-built Proton fork is being shipped by one of the biggest storefronts out there.

## Bleeding-edge: nvapi gets smarter

Proton's **bleeding-edge** branch picked up a commit on the evening of October 14 (CT): **"proton: Disable nvapi if NV driver cannot be found in /proc/modules."** In other words, Proton turns off NVIDIA's API layer when there's no NVIDIA driver loaded. That's relevant for AMD-based handhelds like the Deck and the Legion Go. It's similar to an earlier per-game fix for The Witcher 3. Remember that bleeding-edge is automated and untested, and Valve warns it "can eat your game prefix / saves."

## Steam Deck ratings

**Checked against Valve's own compatibility data:**

- **Mega Man X Legacy Collection** and **Mega Man X Legacy Collection 2** are now **Verified**. Both were previously Unsupported. Steam Deck HQ notes both run at 60 FPS and cost $19.99 each.
- **Horizon Forbidden West Complete Edition** is now **Playable**.

**Tracker-only (SteamPeaks; I didn't check these against Valve's store):**

- Newly Verified: Jump Space, It Reaches, Tormented Souls 2, Rex Rocket, The Dark Pictures Anthology: Man of Medan, Monster Jam Showdown.
- Newly Playable: Half Sword, Diner Dash: Hometown Hero, AION 2, CarX Drift Racing Online 2.
- Marked Unsupported: Gears of War: E-Day and Arknights: Endfield.

## No new stable releases

There's **no new SteamOS stable or Proton stable release** today. The Proton 11.0-3 Release Candidate (opt-in beta on Proton 11) is still in testing, and Proton 11.0-2e remains the latest stable update.

## My take

Epic on Linux is huge, and the launcher using GE-Proton is a nice nod to the community. But the Deck caveat matters for us handheld players. Until Valve and Epic work it out, don't expect Fortnite on SteamOS handhelds.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld).*

---

## Sources

- Epic Online Services, "Awesome Gaming on Linux Without Cheating" (EAC Linux v2): https://onlineservices.epicgames.com/news/introducing-easy-anti-cheat-linux-v2
- GamingOnLinux, "Epic Games Launcher preview arrives": https://www.gamingonlinux.com/2026/10/epic-games-launcher-preview-arrives-native-linux-support-fortnite-for-linux-is-coming-and-upgraded-easy-anti-cheat/
- The Verge, "Epic is bringing Fortnite to Linux": https://www.theverge.com/games/1010808/epic-fortnite-linux-anti-cheat
- Mixed News, "Epic says a Steam Deck cannot run its new Linux anti-cheat": https://mixed-news.com/en/epic-eac-linux-v2-steam-deck-unsupported-valve-talks-fortnite-pilot/
- Hardware Busters, "Fortnite on Linux Is Coming, and Easy Anti-Cheat v2 Wants Secure Boot, a TPM and Not Your Steam Deck": https://hwbusters.com/news/fortnite-on-linux-is-coming-and-easy-anti-cheat-v2-wants-secure-boot-a-tpm-and-not-your-steam-deck/
- GE-Proton releases (GitHub): https://github.com/GloriousEggroll/proton-ge-custom/releases
- Proton bleeding-edge commits (GitHub): https://github.com/ValveSoftware/Proton/commits/bleeding-edge
- Proton Versions wiki (GitHub): https://github.com/ValveSoftware/Proton/wiki/Proton-Versions
- GamingOnLinux, "Proton 11.0-2e brings EA App fixes, and there's a much bigger Proton 11.0-3 Release Candidate": https://www.gamingonlinux.com/2026/10/proton-11-0-2e-brings-ea-app-fixes-and-theres-a-much-bigger-proton-11-0-3-release-candidate/
- Steam Deck HQ, "The Mega Man X Legacy Collections Are Finally Steam Deck Verified": https://steamdeckhq.com/news/mega-man-x-legacy-collections-steam-deck-verified/
- SteamPeaks, "Steam Deck Verdict Changes": https://steampeaks.com/signals/deck-changes
