---
title: "Mesa 26.2.6 Fixes The Witcher 3 Remastered Glitch and a Batch of GPU Hangs"
description: "The latest bug-fix release for Linux's open-source graphics drivers covers RADV, Intel Meteor Lake, Turnip and a WSL2 deadlock that hung RPCS3"
summary: "The latest bug-fix release for Linux's open-source graphics drivers covers RADV, Intel Meteor Lake, Turnip and a WSL2 deadlock that hung RPCS3"
pubDate: 2026-10-29
publishedAt: 2026-10-29T13:07:02.000Z
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["mesa","linux","drivers"]
offTopic: true
cover: "covers/mesa-26-2-6-witcher-3-remastered-fix.png"
sources:
  - title: "GamingOnLinux: Mesa 26.2.6 brings fixes for The Witcher 3 Remastered"
    url: "https://www.gamingonlinux.com/2026/10/mesa-26-2-6-brings-fixes-for-the-witcher-3-remastered-and-various-other-linux-driver-issues/"
  - title: "Mesa documentation"
    url: "https://docs.mesa3d.org/"
  - title: "Bazzite testing-45.20261028.1 release notes"
    url: "https://github.com/ublue-os/bazzite/releases/tag/testing-45.20261028.1"
source: "Article Desk: mesa-26-2-6-witcher-3-remastered-fix.md"
---
Mesa 26.2.6 is out, the newest point release of the open-source graphics drivers most Linux gamers rely on, including on AMD-based handhelds. As a point release it only fixes bugs. New features will come with Mesa 26.3.

## Fixes worth knowing about

From the release's list of fixed issues, as reported by GamingOnLinux:

- **The Witcher 3 Remastered:** a graphical bug that looked like an overlay across the game is fixed.
- **AMD RADV/ACO:** a 26.2 regression affecting RDNA2 through RDNA4 GPUs has been corrected.
- **AMD RX 6800 XT:** a "device lost" GPU error is addressed.
- **Intel Meteor Lake:** Unigine Heaven and Valley caused GPU hangs on Mesa 26.2.0 through 26.2.4, though they worked on 26.1.8. That's fixed.
- **Qualcomm Adreno 650 (Turnip):** hangs in several games, caused by a missing shader workaround, are fixed.
- **WSL2 with d3d12:** a self-deadlock that hung the RPCS3 emulator during compressed texture uploads on an NVIDIA RTX 5090 is fixed.

Smaller fixes cover lavapipe, freedreno text rendering on Snapdragon X1 Elite, v3dv and kopper.

## What's next

Mesa's schedule lists 26.3.0-rc4, or possibly the 26.3.0 final, for November 4, and 26.2.7 for November 11. Distros pick up point releases on their own timelines. Bazzite's testing branch, for example, still shipped Mesa 26.2.5 as of October 28.
