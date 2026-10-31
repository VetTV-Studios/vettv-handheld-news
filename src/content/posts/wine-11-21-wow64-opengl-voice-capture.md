---
title: "Wine 11.21 Speeds Up WoW64 OpenGL and Fixes Skyrim, BioShock 2 Remastered Crashes"
description: "The latest development release adds a first Voice Capture DSP library, improves user account support and closes 20 bugs"
summary: "The latest development release adds a first Voice Capture DSP library, improves user account support and closes 20 bugs"
pubDate: 2026-10-30
publishedAt: 2026-10-31T13:03:35.000Z
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["wine", "linux", "windows-games"]
offTopic: true
cover: "covers/wine-11-21-wow64-opengl-voice-capture.png"
sources:
  - title: "WineHQ GitLab: Wine 11.21 release"
    url: "https://gitlab.winehq.org/wine/wine/-/releases/wine-11.21"
  - title: "Wine 11.21 ANNOUNCE (official release notes, GitHub mirror of the wine-11.21 tag)"
    url: "https://github.com/wine-mirror/wine/blob/wine-11.21/ANNOUNCE.md"
source: "Article Desk: wine-11-21-wow64-opengl-voice-capture.md"
---
The Wine project released development version 11.21 on October 30. Wine is the compatibility layer that runs Windows software on Linux and macOS, and it's the foundation Valve's Proton is built on.

## What's new

According to the official release announcement, the headline changes are:

- Better WoW64 OpenGL performance using the `map_buffer_client_pointer` extension. WoW64 is how Wine runs 32-bit Windows programs on a 64-bit-only setup.
- An initial version of the Voice Capture DSP library.
- Improved support for user accounts.
- Various bug fixes.

## Games and apps fixed

The release closes 20 bug reports. Game and app fixes include:

- Skyrim (2011) crashing with an unhandled raw input flags error on Wine 11.11 and later, plus an assertion failure in Skyrim Special Edition.
- BioShock 2 Remastered crashing when applying display settings.
- Cinebench 2026 crashing on an unimplemented Direct3D 12 function.
- Fate/stay night REMASTERED showing only a black screen when using EGL.
- FL Studio 26.1.5 failing to start because of a signature verification problem.
- No music in Tron 2.0 and No One Lives Forever 2.
- World of Tanks not registering some keys, such as Enter and Delete, in chat.
- Zeus: Master of Olympus reporting an access violation on exit.
- I Love Science! failing to detect its CD.

Other fixes address Shift+Ctrl+Tab handling, SSL certificates that use IP address names, long HTTP response headers being cut off in winhttp, a .NET Framework 4.8 rounding error, and a crash in Wine 11.20 builds.

## Getting it

Development releases come out about every two weeks. The source is available from WineHQ, and binary packages arrive through distribution download sites.
