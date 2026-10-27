---
title: "Steam Beta's Linux Alt-Tab Freeze Fix Works for Some, but a New Report Says the Overlay Can Still Hang Games"
description: "Valve's October 16 beta says it fixed Vulkan games hanging after alt-tab, and the original bug report is now closed. A follow-up issue from a user says a related Steam overlay deadlock still happens on the new beta build."
summary: "Valve's October 16 beta says it fixed Vulkan games hanging after alt-tab, and the original bug report is now closed. A follow-up issue from a user says a related Steam overlay deadlock still happens on the new beta build."
seoTitle: "Steam Beta Linux Alt-Tab Fix: Overlay Hang Still Reported"
pubDate: 2026-10-19
publishedAt: 2026-10-19T16:38:16.396Z
author: "Vet, VetTV Handheld"
category: linux-steamos
type: news
tags: ["steam","linux-gaming","steamos","steam-client-beta","bug-fix"]
cover: "covers/steam-beta-linux-alt-tab-fix-incomplete.jpg"
sources:
  - title: "Steam Client Beta group, \"Steam Client Beta - October 16th\""
    url: "https://steamcommunity.com/groups/SteamClientBeta"
  - title: "Steam Deck news, \"Steam Beta Client Update: October 16th\""
    url: "https://store.steampowered.com/news/app/1675200/view/687519694976975837"
  - title: "steam-for-linux issue #13682 (GitHub)"
    url: "https://github.com/ValveSoftware/steam-for-linux/issues/13682"
  - title: "steam-for-linux issue #13766 (GitHub)"
    url: "https://github.com/ValveSoftware/steam-for-linux/issues/13766"
  - title: "Mixed News, \"Valve's beta fixes Steam's alt-tab freeze and closes the case, but one game still hangs\""
    url: "https://mixed-news.com/en/valve-steam-alt-tab-overlay-freeze-fixed-beta-13682/"
source: "Article Desk: steam-beta-linux-alt-tab-fix-incomplete.md"
---
Valve's **October 16 Steam Client Beta** includes a Linux fix that reads, in full: "Fixed Vulkan games hanging after alt-tab." Valve posted it on October 16 at 6:40 PM CT. User reports since then are mixed.

## The original bug: #13682

The bug was tracked as **issue #13682** on Valve's steam-for-linux GitHub. It's now titled after a Steam assertion error ("SerializedSurface.cpp (1437) : Assertion Failed: OnChromePaintBufferClientDisconnect...").

- **The report:** It was filed on October 3 by a KDE Plasma Wayland user on Kubuntu 26.04 with an AMD RX 7600 XT. It says games freeze permanently on alt-tab while the Steam overlay is enabled, because the overlay helper process (gameoverlayui) stops accepting connections. The reporter notes the diagnosis was written with help from an AI model.
- **Others who joined in:** They reported the same freeze in both Proton and native Linux games. Those reports covered Ubuntu, Fedora, Arch, EndeavourOS and Debian, GNOME and other Wayland desktops, and both AMD and NVIDIA GPUs.
- **Valve's fix:** On October 16 at 8:44 PM CT, Valve developer **lostgoat** asked users to test the latest beta, saying it "should have a fix for this issue."
- **Mixed results:** One user said the freeze was gone on beta build 1792192922 (that build number comes from user reports). Another said Slay the Spire 2 still hung on that same build. The original reporter confirmed the fix worked for them.
- **The closure:** lostgoat closed the issue on **October 17 at 11:44 AM CT**, writing that "the bug described by OP is fixed." He asked anyone still affected to open a new issue with Steam logs attached.

## The follow-up: #13766

**Issue #13766** was filed on October 17 at 2:19 PM CT, and it's titled "Overlay deadlock still present on beta 1792192922." The reporter, an Arch Linux user on the COSMIC Wayland desktop with an AMD Radeon 890M, says:

- **The symptom:** The native Linux build of Slay the Spire 2 sometimes freezes as its window first appears, with no alt-tab involved.
- **The trigger:** It happens when the game's previous run had the overlay enabled and exited normally. Restarting Steam doesn't clear it, but logging out of the desktop session does.
- **Which builds:** The reporter says the hang happens on both the stable build (1791918634) and the beta, but the overlay helper fails in a different way on each.

As of 11:37 AM CT today, the issue is open with **no comments**, including none from Valve. I found no newer Steam beta than the October 16 one.

## Workaround

Both issues document the same workaround from users: **disable the Steam overlay for the affected game.** That means losing the overlay's features, like screenshots, for that game.

## Steam Deck relevance

There's only a limited Steam Deck connection. One user in #13682 said they saw the freeze on a Steam Deck running SteamOS Stable, but only in **Desktop Mode** while alt-tabbing. They said switching to the client beta didn't help, but disabling the overlay did. No one in either issue reported it in Gaming Mode.

Mixed News, in a story by Chris Steven published on October 18 at 10:39 PM CT, also covered the closure and the follow-up.

## My take (opinion)

This is my opinion. If you play in desktop Linux and your games hang with the overlay on, the beta is worth trying. Just don't assume it fixes every case. Turning the overlay off per game is the reliable workaround for now.

---

## Sources
- Steam Client Beta group, "Steam Client Beta - October 16th": https://steamcommunity.com/groups/SteamClientBeta
- Steam Deck news, "Steam Beta Client Update: October 16th": https://store.steampowered.com/news/app/1675200/view/687519694976975837
- steam-for-linux issue #13682 (GitHub): https://github.com/ValveSoftware/steam-for-linux/issues/13682
- steam-for-linux issue #13766 (GitHub): https://github.com/ValveSoftware/steam-for-linux/issues/13766
- Mixed News, "Valve's beta fixes Steam's alt-tab freeze and closes the case, but one game still hangs": https://mixed-news.com/en/valve-steam-alt-tab-overlay-freeze-fixed-beta-13682/
