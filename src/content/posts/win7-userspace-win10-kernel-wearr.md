---
title: "A Hobbyist Is Running Windows 7's Userspace on a Windows 10 Kernel, and the 22H2 Attempt Is Gloriously Broken"
description: "Developer wearr has been pairing a Windows 7 SP1 userland with Windows 10 kernels. The older 1507 kernel is \"pretty stable,\" they say, while a new 22H2 attempt produced what they call a contender for \"the most cursed windows screenshot.\" It's an experiment, not a release."
summary: "Developer wearr has been pairing a Windows 7 SP1 userland with Windows 10 kernels. The older 1507 kernel is \"pretty stable,\" they say, while a new 22H2 attempt produced what they call a contender for \"the most cursed windows screenshot.\" It's an experiment, not a release."
seoTitle: "Windows 7 Userspace on a Windows 10 Kernel: wearr's Experiment"
pubDate: 2026-10-26
publishedAt: 2026-10-26T13:50:37.760Z
author: "Vet, VetTV Studios"
category: windows
type: news
tags: ["windows","windows-7","windows-10","retro-computing","reverse-engineering","hobbyist-projects"]
cover: "covers/win7-userspace-win10-kernel-wearr.jpg"
offTopic: true
sources:
  - title: "wearr on X, October 26 (22H2 kernel screenshot)"
    url: "https://x.com/_wearr_/status/2114604265679225259"
  - title: "wearr on X, October 8 (Windows 10 kernel with Windows 7 SP1 userland)"
    url: "https://x.com/_wearr_/status/2108359264209125619"
  - title: "wearr on X, October 12 (\"No leaked code used\")"
    url: "https://x.com/_wearr_/status/2109743159836061962"
  - title: "Bob Pony on X, reply pointing to Keel"
    url: "https://x.com/TheBobPony/status/2114654145747505536"
  - title: "Keel on GitHub"
    url: "https://github.com/bulutthecat/KeelPublic"
  - title: "VxKex on GitHub"
    url: "https://github.com/i486/VxKex"
source: "Article Desk: win7-userspace-win10-kernel-wearr.md"
---
Some of the best things on tech X are experiments nobody asked for. The latest comes from **wearr** (@_wearr_), who's been running Windows 7's userspace on top of a Windows 10 kernel.

## What wearr posted

At **1:25 AM CT on Monday, October 26**, wearr wrote:

"experimenting with now getting the 22h2 kernel working with win7 userspace since 1507 is pretty stable and it's so much more broken. this has to be a contender for the most cursed windows screenshot ive seen"

The attached 640x480 screenshot shows a Windows 7-style taskbar and Start orb over a black desktop:

- **Desktop icons:** Most are plain, generic document icons, and none have labels.
- **The dialog:** A box titled "Recycle Bin" shows a yellow warning icon, but no message text and two blank, unlabeled buttons.

## The backstory

This isn't wearr's first post about the project:

- **October 8 (7:49 PM CT):** wearr posted that they were "doing some BS (windows 10 1502 kernel with windows 7 sp1 userland)." Note the "1502" there. Monday's post calls the stable kernel "1507," which is the first public Windows 10 release. wearr hasn't clarified whether "1502" was a typo or a different build, so I'm treating it as unconfirmed.
- **October 12:** Replying to a question about whether the project was "clean," wearr wrote: "No leaked code used, I had no idea there were even rumors of win7 leaks."

There's no public download, repo or release from wearr that I could find. This is an in-progress experiment shared as screenshots.

## Prior art: Keel

In the replies, Bob Pony (@TheBobPony) pointed wearr to **Keel**, a GitHub project (bulutthecat/KeelPublic). wearr called it "a pretty valuable reference point."

Keel's README says it runs "Windows 7's real compositor, theme engine and shell on the Windows 10 kernel." It calls itself "a translation layer first and foremost." Its pitch is that Windows 7's look lives in user mode, while the compatibility problems with modern hardware live in the kernel.

## The reverse of VxKex

**VxKex**, on GitHub at i486/VxKex, comes at the same problem from the other direction. Its README describes it as "a set of API extensions for Windows 7 that allow some Windows 8, 8.1 and 10-exclusive applications to run on Windows 7."

- **How it works:** It loads a DLL into programs you enable it for, using the Image File Execution Options registry key. It then redirects their imports to VxKex DLLs that implement newer Windows APIs.
- **System files:** The README says it doesn't modify system files.
- **Games:** The FAQ says it's "not intended for games."

So VxKex keeps the Windows 7 kernel and fakes newer APIs on top of it. wearr and Keel keep the Windows 7 desktop and swap the kernel underneath it.

## Analysis (opinion)

My read, not wearr's claim: a newer kernel would make sense for driver and hardware support, which is the argument Keel's README makes. The 22H2 screenshot shows how much the Windows 7 shell expects from the kernel it runs on, though. Even the system's own strings and icons don't load. It's a fun, cursed experiment, not something to install. I haven't tried any of it.

---

## Sources
- wearr on X, October 26 (22H2 kernel screenshot): https://x.com/_wearr_/status/2114604265679225259
- wearr on X, October 8 (Windows 10 kernel with Windows 7 SP1 userland): https://x.com/_wearr_/status/2108359264209125619
- wearr on X, October 12 ("No leaked code used"): https://x.com/_wearr_/status/2109743159836061962
- Bob Pony on X, reply pointing to Keel: https://x.com/TheBobPony/status/2114654145747505536
- Keel on GitHub: https://github.com/bulutthecat/KeelPublic
- VxKex on GitHub: https://github.com/i486/VxKex
