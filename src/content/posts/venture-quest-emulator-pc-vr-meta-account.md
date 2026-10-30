---
title: "Venture Emulator Runs Quest Games on PC VR Headsets: What It Does With Your Meta Account"
description: "The free, open-source Windows and Linux app downloads Quest games you own and runs them through OpenXR, and two outlets weigh in very differently on the account risk"
summary: "The free, open-source Windows and Linux app downloads Quest games you own and runs them through OpenXR, and two outlets weigh in very differently on the account risk"
pubDate: 2026-10-30
publishedAt: 2026-10-30T13:03:01.000Z
author: "Vet, VetTV Studios"
category: projects
type: news
tags: ["vr", "emulation", "meta-quest"]
offTopic: true
cover: "covers/venture-quest-emulator-pc-vr-meta-account.png"
sources:
  - title: "Venture on GitHub (releases, README, disclaimer)"
    url: "https://github.com/Villagers654/Venture"
  - title: "Road to VR: New emulator promises to run Quest exclusive VR games on any PC VR headset"
    url: "https://roadtovr.com/quest-emulator-exclusive-vr-games-pc-vr/"
  - title: "VR.org: What the Venture Quest emulator does with your Meta account, read from its source"
    url: "https://vr.org/articles/venture-quest-emulator-pc-vr-meta-login-source-code-2026"
source: "Article Desk: venture-quest-emulator-pc-vr-meta-account.md"
---
A new open-source project called Venture lets PC VR owners play Quest games they've bought from Meta on their PC, without a Quest and without streaming.

## What Venture is

Venture is a free Windows and Linux app from developer Villagers654, published on GitHub under the GPL-3.0 license. Version 0.1.0 was published on October 28 at 6:06 PM CDT, and the project has shipped several fixes since, with v0.1.1.1 out as of October 29. You sign in with your Meta account, download the Quest games that account owns, and play them on any PC VR headset through its OpenXR runtime. Games render on your PC's GPU using OpenGL ES through ANGLE, Google's open-source graphics translation layer. Road to VR reports that Venture supports older games built on Oculus's legacy VrApi, including 32-bit ARM titles.

## What runs

Venture's compatibility list has 25 games, including Asgard's Wrath 2, Batman: Arkham Shadow, Beat Saber, Resident Evil 4 and Marvel's Deadpool VR. VR.org points out that the project counts a game as working once it renders without major errors, not after a full playthrough. The project's performance claims come from its own tests on an Intel Core Ultra 9 285K and RTX 5090, and no recommended specs are published. VR.org notes a Resident Evil 4 crash on an 8GB RTX 3060 Ti that ran out of video memory, which a later version changed to fall back to system memory.

## What Road to VR says about account safety

Road to VR advised readers not to download it yet. Its reasons: Venture asks you to sign into your personal Meta account, which it says could expose the account to security risks; there's no guarantee Meta won't ban your Quest account; and it couldn't rule out the app breaking Meta's terms of service or exposing personal information.

## What VR.org found in the source code

VR.org read the code behind version 0.1.0.3 and reported:

- Sign-in happens on Meta's own login page in an embedded, private Microsoft Edge window locked to Meta's domains, and Venture's own interface never asks for your password.
- Venture stores an access token, encrypted with Windows DPAPI or kept in the Linux system keyring.
- The app talks to Meta, to GitHub for an update check that can be turned off, and to a paste site only if you choose to upload a debug report, which is scrubbed of tokens and account names first. There's no analytics library.
- It checks with Meta that your account owns a game before downloading it, and again whenever a game checks its license, with no offline fallback.
- Its requests to Meta identify themselves as Venture, so the traffic is labeled, not disguised.
- The Import page accepts any APK, ZIP or game folder with no ownership check.

Neither outlet can say how Meta will respond. Venture's own disclaimer says it isn't affiliated with Meta and that users are responsible for following the law, platform terms and software licenses.
