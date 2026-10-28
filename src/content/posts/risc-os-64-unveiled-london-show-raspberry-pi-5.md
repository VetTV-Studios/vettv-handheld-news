---
title: "RISC OS 64 Debuts at London Show, Running on Raspberry Pi 5"
description: "RISC OS Developments shows an alpha 64-bit RISC OS with multicore, 3D acceleration, Bluetooth and a new default filesystem."
summary: "RISC OS Developments shows an alpha 64-bit RISC OS with multicore, 3D acceleration, Bluetooth and a new default filesystem."
pubDate: 2026-10-28
publishedAt: 2026-10-28T20:30:49.000Z
author: "Vet, VetTV Studios"
category: news
type: news
tags: ["risc-os","raspberry-pi","arm"]
offTopic: true
cover: "covers/risc-os-64-unveiled-london-show-raspberry-pi-5.png"
sources:
  - title: "RISC OS Open forum: RISC OS Developments' formal announcement"
    url: "https://www.riscosopen.org/forum/forums/1/topics/20627"
  - title: "The Icon Bar: London Show 2026 talk notes"
    url: "http://i.iconbar.com/articles/RISC_OS_London_Show_2026_-_Notes_from_the_talks/index2407.html"
  - title: "The Icon Bar: Andrew Rawnsley demos RISC OS 64"
    url: "http://i.iconbar.com/articles/Andrew_Rawnsley_demos_RISC_OS_64_at_London_Show/index2411.html"
  - title: "RISCOSitory: RISC OS Renaissance Project"
    url: "https://www.riscository.com/2026/risc-os-developments-renaissance-project/"
  - title: "RISC OS Open: Laser focused on London"
    url: "https://www.riscosopen.org/news/articles/2026/10/15/laser-focused-on-london"
source: "Article Desk: risc-os-64-unveiled-london-show-raspberry-pi-5.md"
---
RISC OS, the Arm desktop operating system that began life on Acorn computers in the late 1980s, has been shown running as a native 64-bit OS for the first time in public. RISC OS Developments (ROD), which owns the RISC OS intellectual property, unveiled RISC OS 64 at the RISC OS London Show in Harrow on Saturday, October 24, with Andrew Rawnsley running the demo.

## What was shown

According to ROD's formal announcement on the RISC OS Open forum, the demo ran on a Raspberry Pi Compute Module 5 with 8GB of RAM, and the regular Raspberry Pi 5 is also supported. ROD says the following hardware features were shown working:

- Wi-Fi, Ethernet and Bluetooth, including system-wide audio over Bluetooth
- Dual HDMI output (mirrored)
- 2D and 3D graphics acceleration, with OpenGL support noted in show coverage
- USB 2 and USB 3
- Multicore support with a POSIX pthreads-compliant interface

On the software side, ROD showed 64-bit apps including a new built-in web browser that can stream video, a video player with YouTube support, music players and a Doom port. The Icon Bar's talk notes add that Ovation Pro has been ported, and that the release includes full Unicode support, a new SVG-based 64-bit desktop theme, a terminal app, and a rewritten Filer with tree view, thumbnails and search.

## Old software and filesystems

Older software isn't left behind. 32-bit programs run through full emulation or a 32-bit user space, and Organizer was shown running unchanged. Even 26-bit software such as Eureka was demoed, though ROD says many older programs don't work yet.

The default filesystem is now UFS2 from the BSD family, chosen to get past FileCore's limits. Btrfs, EXT2 (with some EXT3/4), FAT and FileCore are also supported. ROD says it won't use GPL code, which rules out most Linux components, and that the project's code is open source, mostly under Apache 2.0.

## It's still alpha

ROD is clear that this is early software. The system was "very much at an alpha level," and it had to be restarted partway through the demo. ROD says the OS was built in less than nine months by a team that used AI tools, as part of its community-driven "RISC OS Renaissance" effort. No release date or pricing has been announced. Separately, RISC OS Open is working on its own 64-bit "Moonshot" program alongside the upcoming RISC OS 5.32.

## What we left out

The post that tipped us off came from the independent RISC OS Technologies account. It also mentioned a "RISC OS 10" name, Vulkan, "SoundScape 5.1" and "coming soon" timing. We couldn't confirm any of those in ROD's announcement or in show coverage, so they're not in this story. Vulkan work has been reported, but for a separate 64-bit project called RISC OS One.
