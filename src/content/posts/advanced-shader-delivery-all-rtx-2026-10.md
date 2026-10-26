---
title: "Advanced Shader Delivery Goes Wide: Precompiled Shaders Now Reach AMD, Intel, NVIDIA RTX and Snapdragon PCs"
description: "Since Oct. 21, supported games from the Xbox PC app and Microsoft Store can download ready-made shaders at install time on Windows 11 24H2. Epic and Steam support is promised but not here yet."
summary: "Since Oct. 21, supported games from the Xbox PC app and Microsoft Store can download ready-made shaders at install time on Windows 11 24H2. Epic and Steam support is promised but not here yet."
seoTitle: "Advanced Shader Delivery now on all RTX, AMD, Intel and Snapdragon PCs"
pubDate: 2026-10-26
publishedAt: 2026-10-26T15:24:01.116Z
author: "Vet, VetTV Studios"
category: windows
tags: ["windows","advanced-shader-delivery","directx","pc-gaming","nvidia","windows-11"]
cover: "covers/advanced-shader-delivery-all-rtx-2026-10.jpg"
offTopic: true
sources:
  - title: "Microsoft DirectX Dev Blog: Advanced Shader Delivery is Available Now Across Hardware (Oct. 21, 2026)"
    url: "https://devblogs.microsoft.com/directx/advanced-shader-delivery-is-available-now-across-hardware/"
  - title: "NVIDIA: GeForce Game Ready Driver 621.01 (Oct. 21, 2026)"
    url: "https://www.nvidia.com/en-us/geforce/drivers/details/282430/"
  - title: "Valve: Fossilize on GitHub"
    url: "https://github.com/ValveSoftware/Fossilize"
source: "Article Desk: advanced-shader-delivery-all-rtx-2026-10.md"
---
On Oct. 21, Microsoft's DirectX team said [Advanced Shader Delivery (ASD) is now broadly available](https://devblogs.microsoft.com/directx/advanced-shader-delivery-is-available-now-across-hardware/) on Windows 11 PCs with AMD, Intel, NVIDIA and Qualcomm graphics. It is not an NVIDIA-only feature. RTX cards are one of four supported GPU families.

## What it does

PC games usually compile their shaders on your machine. That's the long "compiling shaders" screen at first launch, and it's the cause of the hitching you see when a new effect appears for the first time. ASD moves that work to the store. Developers upload a state object database (SODB), and the storefront delivers shaders precompiled for your GPU and driver when you download the game. Microsoft says this cuts load times, cuts shader stutter and saves power.

Microsoft's example is **Call of Duty: Modern Warfare 4**. With ASD, it says, first-launch shader compilation takes "just a few seconds," compared with "several minutes on a typical PC without ASD." When it works, the game shows "Precompiled shaders installed" in the bottom-left corner. **Gears of War: E-Day** got ASD a few weeks before the wider rollout.

## What you need

- **Windows 11 24H2** or newer
- **NVIDIA:** all RTX GPUs and RTX Spark, on driver **621.01** or newer. [Game Ready 621.01](https://www.nvidia.com/en-us/geforce/drivers/details/282430/) came out Oct. 21 and is also the Game Ready driver for MW4 and Phantom Blade Zero.
- **AMD:** RDNA 1 through RDNA 4, on Adrenalin 26.6.1 or newer
- **Intel:** Arc B570 and B580, plus Core Ultra Series 2 and 3, on driver 32.0.101.9150 or newer
- **Qualcomm:** Snapdragon X2 Series, on driver 2026.08.3 or newer
- For MW4, Microsoft says to **install the Xbox PC app before you download the game**.

## Steam isn't included yet

ASD currently works only through the Microsoft Store and the Xbox PC app. Microsoft says it will "soon" expand to the **Epic Games Store and Steam**, and that Fortnite will get ASD in an upcoming update. It hasn't given dates for any of these. A Steam copy of a game doesn't get ASD today, even if you launch it through the Xbox app.

## Early reports are mixed

Commenters on Microsoft's post report problems. One says that on laptops with switchable graphics (Optimus), a Gaming Services bug cancels the entire download if any GPU in the system has an unsupported driver. Another says E-Day still compiled for the usual amount of time on 621.01 after the game was downloaded *before* the driver update. These are user reports, not confirmed by Microsoft. The second one fits the "install order matters" guidance.

## Analysis: SteamOS got here first

*Opinion/analysis:* SteamOS and Steam Deck players already have a version of this. Steam's Vulkan shader pre-caching is built on Valve's open-source [Fossilize](https://github.com/ValveSoftware/Fossilize) format for serializing Vulkan pipeline state, and Steam can download those caches for supported hardware. ASD is Microsoft's DirectX 12 answer, built into the driver and store pipeline. The real test is Steam. If ASD reaches Steam on Windows, a large share of the PC library could stop compiling shaders on first launch. That depends on developers. Unreal Engine 5.8.4 can produce SODBs today, but Unity support won't arrive until 2027.

*VetTV Handheld News hasn't tested ASD. Everything above comes from Microsoft, NVIDIA and public user comments.*

## Sources

- [Microsoft DirectX Dev Blog: Advanced Shader Delivery is Available Now Across Hardware (Oct. 21, 2026)](https://devblogs.microsoft.com/directx/advanced-shader-delivery-is-available-now-across-hardware/)
- [NVIDIA: GeForce Game Ready Driver 621.01 (Oct. 21, 2026)](https://www.nvidia.com/en-us/geforce/drivers/details/282430/)
- [Valve: Fossilize on GitHub](https://github.com/ValveSoftware/Fossilize)
