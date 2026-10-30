---
title: "CachyOS Starts Building a Dedicated Kernel for Easy Anti-Cheat v2"
description: "A draft 'linux-cachyos-eac' package aims to meet Epic's stricter new anti-cheat on Linux, and Arch users will be able to install it too"
summary: "A draft 'linux-cachyos-eac' package aims to meet Epic's stricter new anti-cheat on Linux, and Arch users will be able to install it too"
pubDate: 2026-10-29
publishedAt: 2026-10-29T13:07:06.000Z
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["cachyos","anti-cheat","linux"]
offTopic: true
cover: "covers/cachyos-eac-v2-kernel-linux.png"
sources:
  - title: "GamingOnLinux: CachyOS working on a dedicated kernel for Easy Anti-Cheat v2"
    url: "https://www.gamingonlinux.com/2026/10/cachyos-linux-working-on-a-dedicated-kernel-for-supporting-easy-anti-cheat-v2/"
  - title: "Epic Online Services: Easy Anti-Cheat"
    url: "https://onlineservices.epicgames.com/"
  - title: "CachyOS GitHub: linux-cachyos-eac pull request #1084"
    url: "https://github.com/CachyOS/linux-cachyos/pull/1084"
  - title: "CachyOS wiki: EACv2 setup guide pull request #650"
    url: "https://github.com/CachyOS/wiki/pull/650"
  - title: "TechPowerUp: CachyOS announces EAC Linux V2-compatible kernel with lockdown"
    url: "https://www.techpowerup.com/354244/cachyos-announces-eac-linux-v2-compatible-kernel-with-lockdown"
source: "Article Desk: cachyos-eac-v2-kernel-linux.md"
---
*Updated Oct 29: added details on lockdown mode from CachyOS's GitHub discussion.*

CachyOS, the performance-focused Arch-based distro, is working on a kernel built specifically for Epic's Easy Anti-Cheat v2 on Linux.

## What's happening

CachyOS founder and developer Peter Jung has opened a draft package called "linux-cachyos-eac" on GitHub. According to GamingOnLinux, Jung said on Reddit that the team has ordered specific hardware to handle Secure Boot key signing. He also said players on regular Arch Linux will be able to install the packages, not just CachyOS users.

## Why a separate kernel

Epic's rebuilt Easy Anti-Cheat is considerably more complex than the version Linux players know today, with much tighter security, and CachyOS's work centers on getting Secure Boot keys signed. A dedicated kernel lets players boot into that locked-down setup only when they want to play a protected game and use their normal kernel the rest of the time. GamingOnLinux expects other distributions to take a similar approach.

## Lockdown mode

The EAC kernel runs with the Linux kernel's lockdown mode, and that has costs. In the discussion on CachyOS's pull request, a contributor listed what lockdown can break: hibernation, kdump, PCI passthrough to virtual machines, some kernel parameters, and possibly sched-ext schedulers. Jung said NVIDIA drivers (Pascal cards included), ZFS and the r8125 network driver will work out of the box. Other out-of-tree and DKMS modules are a concern that is still being discussed.

Jung also said GRUB hasn't been tested yet. In the short term, CachyOS will use a signed systemd-boot without shim, with keys enrolled through sbctl, and a Secure Boot setup guide is in a draft wiki pull request. Revoking vulnerable boot binaries has no plan yet; the longer-term goal is shim review with SBAT.

The kernel is opt-in. A CachyOS contributor said the plan is a CachyOS Hello button that installs the EAC kernel and adds a separate bootloader entry, so the normal kernel stays available. The pull request is still open and has not been merged.

## What it doesn't mean yet

This is a draft, and no release date has been given. Epic plans to use EAC v2 for Fortnite on Linux, but Fortnite on Linux still has no launch date.
