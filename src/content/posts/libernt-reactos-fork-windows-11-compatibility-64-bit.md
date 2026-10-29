---
title: "LiberNT Forks ReactOS to Chase Windows 11 Compatibility on 64-Bit Hardware"
description: "The new open NT project measures itself against Windows 11 instead of XP, and puts amd64, arm64 and riscv64 first"
summary: "The new open NT project measures itself against Windows 11 instead of XP, and puts amd64, arm64 and riscv64 first"
pubDate: 2026-10-29
publishedAt: 2026-10-29T17:52:01.000Z
author: "Vet, VetTV Studios"
category: open-nt
type: news
tags: ["libernt","reactos","open-nt"]
offTopic: true
cover: "covers/libernt-reactos-fork-windows-11-compatibility-64-bit.png"
sources:
  - title: "LiberNT on GitHub"
    url: "https://github.com/LiberNT/LiberNT"
  - title: "LiberNT website"
    url: "https://libernt.com"
  - title: "elhacker.NET: LiberNT busca compatibilidad con Windows 11"
    url: "https://blog.elhacker.net/2026/10/libernt-busca-compatibilidad-con.html"
source: "Article Desk: libernt-reactos-fork-windows-11-compatibility-64-bit.md"
---
ReactOS has spent decades chasing Windows XP and Server 2003 compatibility. LiberNT, a newer project forked from ReactOS on GitHub, is aiming at Windows 11 instead.

## What LiberNT is

LiberNT calls itself "a free NT operating system" that "targets Windows 11 compatibility, with room for freestyle and experimental features." Its GitHub repository was created in May 2026 and is listed as a fork of ReactOS. The project's licence notes say inherited code keeps the licence in its file headers, mostly GPL 2.0 or later, while LiberNT's own changes are under GPL 3.0. It was started and is maintained by developer Ahmed Arif.

The project says it checks its driver-model and compatibility work against Windows 11 itself, comparing test results check by check with the same tests run on Windows 11.

## 64-bit first

LiberNT describes itself as "64-bit first." Its kernel, HAL and FreeLoader run on amd64, arm64 and riscv64, and those three get prebuilt images. 32-bit x86 (i386) hasn't been dropped, though: it can still be built from source, and release builds also include PowerPC images.

Other features listed in the README:

- UEFI boot with a GOP framebuffer, and a preinstalled disk image that boots with UEFI or BIOS
- PCIe, Plug and Play, USB with xHCI, and SD/eMMC drivers
- Raspberry Pi support, including its RP1 I/O controller
- Optional Mesa graphics and WoW64 with FEX, for running x86 apps on Arm
- A setup program that partitions drives and installs to NTFS with an EFI system partition

Spanish site elhacker.NET reports that the project's compatibility database shows Google Chrome, 0 A.D. and Command & Conquer: Yuri's Revenge working on some development builds, with Steam usable and RPCS3 starting but not yet fully working. It also notes the list holds only a handful of tests so far.

## Clean room, with AI in the loop

The project says it builds from Windows SDK and WDK headers, Windows 11 public symbols, Microsoft documentation and black-box testing, and never transcribes disassembled Windows code. It also says openly that AI helps write and review code, with every change reviewed by a person and end-to-end tests run before anything reaches the main branch.

## Not ready for daily use

The builds on LiberNT's Releases page are Clang Debug pre-releases. The project says to run them in a virtual machine or on spare hardware, "not on a computer you depend on."
