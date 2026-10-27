---
title: "Bazzite Stable 44.20261026 Moves to Gamescope 3.17 and Kernel 7.2.11"
description: "The October 26 stable update bumps the kernel and Gamescope, adds the kmod-nct6687d driver package for MSI boards, and leaves NVIDIA and Mesa versions alone."
summary: "The October 26 stable update bumps the kernel and Gamescope, adds the kmod-nct6687d driver package for MSI boards, and leaves NVIDIA and Mesa versions alone."
pubDate: 2026-10-27
publishedAt: 2026-10-27T13:05:56.015Z
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["bazzite","gamescope","linux-gaming"]
cover: "covers/bazzite-stable-44-20261026.jpg"
offTopic: true
draft: false
sources:
  - title: "Bazzite 44.20261026 release notes on GitHub"
    url: "https://github.com/ublue-os/bazzite/releases/tag/44.20261026"
source: "Article Desk: bazzite-stable-44-20261026.md"
---
Universal Blue published **[Bazzite stable 44.20261026](https://github.com/ublue-os/bazzite/releases/tag/44.20261026)** on **October 26, 2026, at 3:54 PM CT**. It replaces the previous stable build, 44.20261023. The changelog is generated automatically and is mostly version numbers, but two of them matter for Game Mode.

## The big changes

- **Kernel:** 7.2.9-ogc3.1 to **7.2.11-ogc4.1**.
- **Gamescope:** 3.16.31 to **3.17.0**. Gamescope is the compositor behind Bazzite's Steam Game Mode.
- **New package, kmod-nct6687d:** This is a kernel module for the Nuvoton NCT6687D chip, which handles fan and sensor readings on many MSI motherboards. It's new in every image.

## What didn't change

- **Mesa:** 26.2.4
- **NVIDIA Open driver:** 615.78.08
- **NVIDIA LTS:** kernel 6.18.56 with driver 580.178.04
- **Firmware:** 20261019

If you're on NVIDIA hardware, your graphics driver is the same as the last stable build.

## Smaller bumps

Other updates include bazzite-portal 0.2.6, cockpit-bridge 370, just 1.59.0, libheif 1.23.7, openssh 10.2p1-16 and updated Fanatec and Thrustmaster force-feedback drivers (hid-fanatecff and hid-tmff2). Deck images also get noise-suppression and PipeWire filter-chain updates.

## No game fixes listed

The changelog doesn't name any game or handheld fixes, so I'm not claiming any. Whether Gamescope 3.17 or the new kernel changes anything on your device is something to test yourself.

## How to update

Bazzite updates itself in the background. To move to this exact build, the release notes give:

```
bazzite-rollback-helper rebase 44.20261026
```

*Source: [Bazzite 44.20261026 release notes on GitHub](https://github.com/ublue-os/bazzite/releases/tag/44.20261026).*
