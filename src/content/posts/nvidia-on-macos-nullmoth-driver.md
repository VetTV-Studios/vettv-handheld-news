---
title: "NVIDIA on macOS Again? NullMoth's Experimental Metal Driver Targets GTX 16 Through RTX 50"
description: "The source is on GitHub and owners are posting working PCs, but only the RTX 5060 is validated, and installing it means switching off key macOS security protections."
summary: "The source is on GitHub and owners are posting working PCs, but only the RTX 5060 is validated, and installing it means switching off key macOS security protections."
pubDate: 2026-10-28
publishedAt: 2026-10-28T07:22:09.186Z
author: "Vet, VetTV Studios"
category: projects
type: news
tags: ["macos","nvidia","hackintosh"]
cover: "covers/nvidia-on-macos-nullmoth-driver.png"
offTopic: true
sources:
  - title: "site"
    url: "https://nullmothsystems.com/"
  - title: "It Boots"
    url: "https://nullmothsystems.com/it-boots"
  - title: "Probe"
    url: "https://nullmothsystems.com/probe"
  - title: "nvidia-macos-driver"
    url: "https://github.com/nullmoth/nvidia-macos-driver"
  - title: "1401"
    url: "https://github.com/nullmoth/1401"
  - title: "1401-probe"
    url: "https://github.com/nullmoth/1401-probe"
  - title: "nullmoth"
    url: "https://github.com/nullmoth/nullmoth"
source: "Article Desk: nvidia-on-macos-nullmoth-driver.md"
---
Modern NVIDIA GeForce cards haven't had a macOS driver since NVIDIA's own web drivers ended with High Sierra, and Turing-era cards never got one. A new project from **NullMoth Systems** says it changes that. Its homepage headline reads "NVIDIA runs macOS again," and its [NVIDIA macOS driver](https://github.com/nullmoth/nvidia-macos-driver) is described as "a Metal driver for NVIDIA GeForce cards on macOS 15 Sequoia (Intel Macs and OpenCore PCs)."

It's early, it moves fast, and it comes with real tradeoffs. Here's what the project says and what we could check.

## What NullMoth says it does

According to the repository README:

- **macOS:** 15.5 Sequoia or later (tested on 15.7.x and 15.8.1), or macOS 26 Tahoe, x86_64 only. Apple silicon Macs aren't a target.
- **Cards:** Turing and newer, meaning GTX 16, RTX 20, 30, 40 and 50, plus TITAN RTX, Quadro RTX and T-series cards.
- **Features:** Metal 3 (including ray tracing, mesh shaders and a MetalFX path), plus OpenGL through Apple's GL-on-Metal layer, OpenCL, Core Image and Core ML.

Validation is much narrower than that list. The project's [card support page](https://github.com/nullmoth/nvidia-macos-driver/blob/main/docs/CARD-SUPPORT.md) marks only the **RTX 5060** as validated (via automated testing) and lists the **RTX 5070 and 5080 as "reported working."** Turing, Ampere and Ada validation is marked "Pending." The README says most testing happens on an RTX 5060, "so other cards may have problems that haven't been found yet," and the project's drivers page adds: "The driver is new. It may not work on every setup yet."

## How it works

Rather than a conventional driver, it's a translation pipeline. Per the README, a Metal app talks to a Metal driver plugin, a shader translator converts Apple's AIR shader code to SPIR-V, and that's handed to **NVK**, Mesa's open-source Vulkan driver for NVIDIA. Underneath, kernel extensions run **NVIDIA's open GPU kernel modules**, ported to macOS, with NVIDIA's unmodified GSP firmware.

The repo contains the source for the kexts, the Metal plugin and the translator, plus a patch against Mesa. One detail doesn't line up: the README says the kernel side uses NVIDIA's r610 modules, while the card support page says r615 and ships firmware from NVIDIA's 615.78.08 release.

## Source available, not open source

NullMoth calls the driver "open source," and the code is public. But the license matters:

- The plugin, kexts, build and package code use the **PolyForm Noncommercial 1.0.0** license. It allows personal, research, educational and non-profit use and bans commercial use. *Analysis:* because it restricts commercial use, it doesn't meet the Open Source Initiative's definition, so "source available" is the more accurate term.
- The shader translator is **LGPL-3.0-or-later** because it's based on metal2vulkan.
- The Mesa/NVK changes are MIT, and the GSP firmware is under NVIDIA's own redistribution license.

## A very young, very busy project

As of October 28, 2026 at 1:55 AM CT, GitHub's API showed:

- **nvidia-macos-driver:** created October 7, 2026, with 3,813 stars, 375 forks and 70 releases, from v1.0.0 to **v2.6.3**, published October 27 at 11:02 PM CT. GitHub counts 235 open issues and pull requests, 232 of them issues.
- **The nullmoth GitHub account** is a user account, not an organization, created September 25, 2026.

Seventy releases in three weeks is a lot. Many early ones were fixes for setups where the desktop stayed black or Metal didn't start, [Notebookcheck reported](https://www.notebookcheck.net/New-driver-brings-Nvidia-GeForce-RTX-to-Hackintosh.1420428.0.html).

## The security tradeoff

This is the part to take seriously. The README says the driver won't start unless the bootloader is configured to relax several macOS protections:

- **System Integrity Protection (SIP) partly disabled** (a `csr-active-config` value that includes 0x0A43). SIP is a core macOS defense that keeps system files and kernel extensions from being changed. Relaxing it lets the unsigned kexts load, and it also weakens protection against malware.
- **Apple Secure Boot disabled** (`SecureBootModel` set to `Disabled`). The README explains that "Apple Secure Boot refuses kexts Apple did not sign."
- **AMFI checks bypassed** with AMFIPass and AMFI boot arguments, so that WindowServer can load the unsigned driver bundle. AMFI is the system that enforces code signing on macOS.

*Analysis:* together, these changes remove some of the main safeguards between macOS and untrusted code. They make sense for a dedicated test machine. They're a poor fit for a computer that holds your important accounts or data. Running kernel-level code from a new developer means trusting that developer. The source is public, but it's new and hasn't been widely audited. We're not publishing install steps. If you try it, use a spare drive and a full backup, and only after reading the project's documentation.

## The companion apps

- **[1401](https://github.com/nullmoth/1401)** "runs on Windows, checks your hardware, builds an OpenCore setup for it and writes a macOS install stick." The project calls it "the reverse of Boot Camp," and the driver README mentions a Mac version too. It's also under PolyForm Noncommercial 1.0.0, and as of 1:55 AM CT it showed 915 stars, 68 forks and 96 open issues and PRs. It was created October 7, 2026.
- **[1401 Probe](https://nullmothsystems.com/probe)** is a free hardware scanner that runs from a USB stick and saves a report you can choose to send. NullMoth says it "never connects to the internet and never reads or changes your drives." Its [source](https://github.com/nullmoth/1401-probe) is GPL-3.0, and the repo was created September 25, 2026. The probe page says you'll need to turn Secure Boot off during the scan and back on afterward, and that the Windows installer isn't signed yet.

## "It boots": a wall of owner reports

NullMoth's [It Boots page](https://nullmothsystems.com/it-boots) lists machines "posted by their owners" in the project's Discord. The homepage puts the count at 367. The list covers desktops and laptops, from RTX 5090 and 5080 builds down to RTX 5050 laptops. A few entries have short notes, such as "It runs, with some issues."

*Analysis:* these are self-reported posts. The page doesn't include logs or video, and most entries don't say whether the internal display, an external monitor or full acceleration works. Laptops are especially tricky. The project's own card support page warns that "a laptop also needs a display/output route the NVIDIA card can drive," and that supporting a card's ID "does not implement an Optimus display mux." On many Optimus laptops, the internal screen runs through the integrated GPU.

## The skepticism

When NullMoth (u/null-moth) first showed the project in [an r/hackintosh post on September 26](https://www.reddit.com/r/hackintosh/comments/1wqiptx/updates_on_nvidia_drivers/), before any source was public, commenters pushed back. One wrote "I say fake, the users GitHub was made one day ago." Another asked for proof: "which game, which frame rate, and which macOS version?" A third asked NullMoth to "release the open source version of the project."

Since then the source has been published, and outlets including Notebookcheck have covered it. NullMoth's press page lists other outlets too. The "closed source" complaint no longer holds. The questions about history and track record are still fair for any new kernel-level project.

## The bigger picture

- **Intel Macs are near the end of the road.** Apple's [macOS 27 page](https://www.apple.com/os/macos/) lists only Apple silicon Macs and the MacBook Neo, which means macOS Tahoe 26 is the last release for Intel Macs. That also limits how long any x86 project like this one can keep up with macOS.
- **The license question.** Apple's [macOS software license](https://www.apple.com/legal/sla/) limits installing and running macOS to Apple-branded computers, so running it on a PC goes against Apple's license terms. That applies to any OpenCore PC build, with or without this driver.
- **Where it fits.** OpenCore is the bootloader used on PC builds. OpenCore Legacy Patcher is a separate project for older, real Macs. NullMoth's 1401 builds OpenCore setups automatically, and the project still sends users to Dortania's OpenCore Install Guide.

## Bottom line

*Analysis:* if it holds up, this is the most interesting NVIDIA-on-Mac development in years. GeForce cards from GTX 16 to RTX 50 would run Metal on Intel Macs and OpenCore PCs. For now, it's experimental. Only one card is validated, the compatibility list is self-reported, the license isn't OSI open source, and getting it running means disabling SIP, Secure Boot and AMFI protections. It's worth watching, and worth testing only on a spare machine.

*Sources: NullMoth Systems ([site](https://nullmothsystems.com/), [It Boots](https://nullmothsystems.com/it-boots), [Probe](https://nullmothsystems.com/probe)); GitHub ([nvidia-macos-driver](https://github.com/nullmoth/nvidia-macos-driver), [1401](https://github.com/nullmoth/1401), [1401-probe](https://github.com/nullmoth/1401-probe), [nullmoth](https://github.com/nullmoth/nullmoth)); Notebookcheck; r/hackintosh; Apple.*
