---
title: "OpenCore Legacy Patcher 3.0.0-rc.3: Tahoe Is Close, But Read This Before You Patch"
description: "OCLP's third release candidate brings macOS Tahoe support, new Wi-Fi and non-Metal patches, and FileVault on macOS 26. Here's what it means for my 2015 iMac, and why Hackintosh users need to be careful."
pubDate: 2026-10-13
publishedAt: 2026-10-17T20:54:12-05:00
author: "Vet, VetTV"
category: macos
type: news
tags: ["macos","oclp","hackintosh"]
cover: "covers/oclp-3-0-0-rc3-hackintosh.jpg"
source: "Article Desk: oclp-3-0-0-rc3-hackintosh.md"
---
When I'm not tinkering with SteamOS on the Legion Go, I'm usually trying to push old Apple hardware further than Apple wants it to go. So when Dortania published **OpenCore Legacy Patcher (OCLP) 3.0.0-rc.3** on **October 7, 2026** (Oct 8 UTC on GitHub), I paid close attention. This is the third release candidate of the 3.0.0 series, and the 3.0.0 headline is simple: **macOS Tahoe (macOS 26) support for unsupported Macs.**

Let's go through what's new, what to watch out for, and how it went on my machines.

## What OCLP is (and isn't)

A quick but important clarification. OpenCore Legacy Patcher is built to run newer macOS on **real Macs that Apple has dropped**. It is **not a Hackintosh tool**, and Dortania doesn't officially support using it on non-Apple PCs. Hackintosh builds run on **OpenCore itself** (OpenCorePkg), configured by hand through Dortania's separate OpenCore Install Guide.

That said, a lot of us in the Hackintosh scene borrow OCLP's **root patching** (the post-install patches for graphics, Wi-Fi, and so on) on our PC builds. That can work, but it's unsupported, and as you'll see below, it can bite you.

## What's new in the 3.0.0 series (as of rc.3)

From the official changelog on the rc.3 release:

- **macOS Tahoe support**, by EduCovas & ASentientBot
- **Improved wireless patches** (EduCovas). This is key for older Broadcom-equipped Macs that lost Wi-Fi support.
- **Improved non-Metal patches on all operating systems** (EduCovas). This helps very old GPUs that predate Metal.
- **FileVault 2 support restored on macOS 26**
- **USB mappings added for macOS 26**
- A **Liquid Glass-style app icon** to match Tahoe's new design
- Bundled **OpenCorePkg updated to 1.0.5**

The release ships as **OpenCore-Patcher.pkg** (the recommended GUI installer), an **Uninstaller.pkg** that removes the app and utilities but *does not revert installed patches*, and **AutoPkg-Assets.pkg**, which the patcher pulls automatically. You don't need to download it yourself.

## The RC caveat: Dortania means it

The release page states it plainly: *"This is a prerelease for OpenCore Legacy Patcher 3.0.0. Expect issues resulting in instability, system crashes, and potential data loss."*

So before you even think about Tahoe on an old machine:

1. **Make a full Time Machine or clone backup.**
2. Keep a bootable USB installer for your current macOS handy.
3. Don't run this on a machine you can't afford to have down for a weekend.

## My setup: late-2015 27" 5K iMac

My main test machine is a **late-2015 27-inch 5K iMac** (model identifier `iMac17,1`) with an i5, **32GB of RAM**, and an **AMD Radeon R9 M390 with 2GB of VRAM**. This iMac is a classic OCLP candidate. Apple stopped supporting it after Monterey, and OCLP has kept it going since.

On Dortania's Supported Models page, the iMac17,1 is in the group of iMacs flagged **"Legacy Metal (macOS 13+)."** In practice, that means from Ventura onward (Sonoma, Sequoia, and now Tahoe included) the R9 M390 needs OCLP's **Legacy Metal root patches** to get graphics acceleration back. Without them you're running an unaccelerated display, which feels terrible on a 5K panel. Every major macOS jump puts those patches under the most stress, and Tahoe is the biggest visual overhaul in years, so expect rough spots during the RC phase.

## My Hackintosh: Asus GL552VW

My other machine is an **Asus GL552VW** laptop running as a Hackintosh on OpenCore. It uses **AirportItlwm** for its Intel Wi-Fi card (from the OpenIntelWireless project, not from OCLP).

This is where things went sideways. When I tried **Tahoe with OCLP root patches** on my setups, I ran into two problems:

- **External drives stopped showing up** after root patching.
- **AirportItlwm Wi-Fi broke**, which leaves a laptop without a network connection. That's painful.

I don't want to claim either issue is a confirmed OCLP bug. On a Hackintosh you're mixing OCLP patches with your own kexts and config, and that's exactly the combination Dortania doesn't support. But the lesson holds: **root patching a Hackintosh on a new macOS release is a gamble.** OCLP's improved wireless patches target Apple's own (mostly Broadcom) wireless hardware. They don't replace a third-party kext like AirportItlwm, and the two can conflict.

My fix was to **roll back to macOS Sequoia**, which is solid on both machines for now. I'll revisit Tahoe once 3.0.0 goes final and the Hackintosh community (and the AirportItlwm developers) catch up.

## Should you try rc.3?

- **Unsupported real Mac, spare machine, fresh backup:** go for it. That's what the RC is for, and good bug reports help the final release.
- **Daily-driver Mac:** wait for 3.0.0 final. Sequoia or Sonoma with the current stable OCLP is the safe bet.
- **Hackintosh:** proceed with caution. Remember you're off the supported path. Check that your third-party kexts (Wi-Fi, Bluetooth, USB) support Tahoe *before* you upgrade. Avoid applying OCLP root patches unless you know exactly which ones your hardware needs and how to revert them.

## How to revert if things break

OCLP's app includes a **"Revert Root Patches"** option in the Post-Install Root Patch section. That's your first move if graphics, drives, or Wi-Fi misbehave after patching. Remember the Uninstaller.pkg does *not* undo patches. If reverting isn't enough, restore from your backup. That's why you made one.

I'll keep testing and post updates on the channel. If you've tried rc.3 on an iMac17,1 or on a Hackintosh, tell me how it went in the comments.

---

## Sources

- Dortania, OpenCore Legacy Patcher 3.0.0-rc.3 release notes (GitHub, published Oct 8, 2026 UTC): https://github.com/dortania/OpenCore-Legacy-Patcher/releases/tag/3.0.0-rc.3
- OpenCore Legacy Patcher Supported Models (iMac17,1: Legacy Metal, macOS 13+): https://dortania.github.io/OpenCore-Legacy-Patcher/MODELS.html
- OpenCore Legacy Patcher documentation: https://dortania.github.io/OpenCore-Legacy-Patcher/
- Dortania OpenCore Install Guide (for Hackintosh builds): https://dortania.github.io/OpenCore-Install-Guide/
- OpenIntelWireless / AirportItlwm: https://github.com/OpenIntelWireless/itlwm
