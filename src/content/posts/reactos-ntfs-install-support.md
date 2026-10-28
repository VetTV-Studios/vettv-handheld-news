---
title: "ReactOS Can Now Install and Run From NTFS After Nearly a Decade of Driver Work"
description: "The open-source Windows-compatible OS no longer needs a FAT partition, but its NTFS driver still lacks caching, journaling and security support."
summary: "The open-source Windows-compatible OS no longer needs a FAT partition, but its NTFS driver still lacks caching, journaling and security support."
pubDate: 2026-10-28
publishedAt: 2026-10-28T07:16:40.346Z
author: "Vet, VetTV Studios"
category: projects
type: news
tags: ["reactos","ntfs","open-source"]
cover: "covers/reactos-ntfs-install-support.png"
offTopic: true
sources:
  - title: "Phoronix"
    url: "https://www.phoronix.com/news/ReactOS-NTFS-Driver"
  - title: "Ars Technica"
    url: "https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/"
  - title: "Linuxiac"
    url: "https://linuxiac.com/reactos-now-supports-installation-on-ntfs-after-nearly-a-decade-of-work/"
source: "Article Desk: reactos-ntfs-install-support.md"
---
*Disclosure: VetTV develops VetTV Retro OS, a fork of ReactOS that is still in development.*

ReactOS, the free operating system that aims to run Windows software and drivers without any Microsoft code, has hit a milestone its developers have chased for years. Its own NTFS file-system driver is now mature enough to install the OS onto an NTFS partition and run it from there, and it can also create NTFS partitions. The team announced the change on X on **October 17**, and [Phoronix](https://www.phoronix.com/news/ReactOS-NTFS-Driver) reported it the same day.

## What changed

Until now, anyone installing ReactOS had to give it a FAT-family partition. [Ars Technica](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/) says that meant keeping a FAT32 partition around. NTFS has been the standard Windows file system since the NT line, so staying on FAT was a practical gap for a project that wants to behave like Windows.

With the new driver, ReactOS handles its own file-system work on NTFS: it formats the partition, installs to it and runs from it, with no outside tools needed for the format step ([Linuxiac](https://linuxiac.com/reactos-now-supports-installation-on-ntfs-after-nearly-a-decade-of-work/)).

## How long it took

This has been building for a long time. ReactOS could read NTFS volumes well before it could live on one. Ars Technica dates read-only support to 2016, while Linuxiac only says it has existed "for years." Both agree NTFS boot support reached ReactOS's FreeLoader bootloader in 2022. That let the bootloader read an NTFS partition, but the OS itself still couldn't be installed there until this month.

## The caveats

The ReactOS team is upfront that this is experimental. In the announcement Ars Technica quotes, the driver still "lacks caching (which causes inferior performance), journaling and security support," and there may be "potentially undiscovered bugs." Treat it as something to try in a VM or on a spare drive, not on a disk holding anything you care about.

It's also not a new release. **ReactOS 0.4.16**, which shipped in August with a graphical installer and a combined install/live image, is still the latest official version, and the OS is still classed as alpha ([Linuxiac](https://linuxiac.com/reactos-now-supports-installation-on-ntfs-after-nearly-a-decade-of-work/)). Phoronix and Ars both frame NTFS installs as a step toward ReactOS's long-awaited beta, not the beta itself.

## Why it matters

ReactOS's stated target is binary compatibility with Windows Server 2003, and the project describes itself as "mostly driven by volunteers" ([Ars Technica](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/)). Running from the same file system as real Windows removes one of the more obvious reminders that it isn't. It won't replace Windows on your desk or handheld any time soon, but for an OS rebuilt from scratch, this is one of the bigger practical steps it has taken in years.

*Sources: [Phoronix](https://www.phoronix.com/news/ReactOS-NTFS-Driver), [Ars Technica](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/), [Linuxiac](https://linuxiac.com/reactos-now-supports-installation-on-ntfs-after-nearly-a-decade-of-work/).*
