---
title: "AMD FSR SDK 2.4 Brings ML Upscaling to RX 6000 and Z2 Handhelds, Plus Vulkan"
description: "FSR Upscaling 4.1.2 gets a full model for RDNA2 cards and a lighter one for Ryzen AI and Z2 chips. Games still have to integrate it, and Steam Deck isn't on the list"
summary: "FSR Upscaling 4.1.2 gets a full model for RDNA2 cards and a lighter one for Ryzen AI and Z2 chips. Games still have to integrate it, and Steam Deck isn't on the list"
pubDate: 2026-10-29
publishedAt: 2026-10-29T13:07:04.000Z
author: "Vet, VetTV Studios"
category: handhelds
type: news
tags: ["amd","fsr","handhelds"]
offTopic: true
cover: "covers/amd-fsr-sdk-2-4-fsr-4-1-2-rx-6000-z2-vulkan.png"
sources:
  - title: "GamingOnLinux: AMD FSR SDK 2.4 is out"
    url: "https://www.gamingonlinux.com/2026/10/amd-fsr-sdk-2-4-is-out-with-fsr-upscaling-4-1-2-for-older-hardware-and-vulkan-support/"
  - title: "AMD GPUOpen"
    url: "https://gpuopen.com/"
source: "Article Desk: amd-fsr-sdk-2-4-fsr-4-1-2-rx-6000-z2-vulkan.md"
---
AMD released the FSR SDK 2.4 on October 28. It brings FSR Upscaling 4.1.2, AMD's machine-learning upscaler, to hardware that couldn't officially run it before, and it gives Vulkan games the same FSR "Redstone" upscaling and frame generation that DirectX 12 already had.

## Two models, picked automatically

The RX 9000 series (full FP8 model) and RX 7000 series (full INT8 model) keep the models they already had. AMD adds the **full INT8 model** to:

- Radeon RX 6000 series desktop GPUs (RDNA2)
- Ryzen AI Max 300 and Ryzen AI Max 400 processors, with Radeon 8000S graphics

For weaker integrated graphics, AMD has built a **lightweight INT8 model** that it says is less than half the size of the full one. It covers:

- Ryzen AI 9 300 and 400 series processors (Radeon 800M graphics)
- Ryzen AI Z2 Extreme and Ryzen Z2 Extreme
- Ryzen Z2 A (RDNA2 graphics)

The Z2 Extreme chips power handhelds such as the ROG Xbox Ally X and Legion Go 2. AMD says the SDK picks the model automatically based on the hardware, and it notes that results vary by game, resolution, quality mode and device.

## Vulkan, finally

AMD calls SDK 2.4 the first "Redstone" release where Vulkan matches DirectX 12 for upscaling and frame generation. That covers FSR Upscaling 4.1.2, FSR Frame Generation 4.0.2 and the swapchain-based frame generation. FSR Ray Regeneration and Radiance Caching remain DirectX 12-only for now.

There's a catch for Vulkan. Support comes through the SDK's own libraries, so a game has to integrate SDK 2.4 itself. AMD's driver-level upgrades from older FSR 3.1 to the ML-based versions still apply only to DirectX 12 games. Vulkan games that do integrate FSR Upscaling 4.1.2 or Frame Generation 4.0.2 will be able to get future versions through AMD's Adrenalin driver.

## What about Steam Deck?

The Steam Deck's custom APU isn't on AMD's list, so FSR 4.1.2 isn't officially supported on it. The Z2 A has RDNA2 graphics, but that doesn't extend official support to the Deck. Any FSR 4.1.2 on Deck would depend on individual games integrating the SDK, or on unofficial tools, and AMD hasn't promised either.
