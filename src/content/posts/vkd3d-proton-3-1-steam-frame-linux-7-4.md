---
title: "VKD3D-Proton 3.1 makes Steam Frame a supported platform as Linux 7.4 adds the headset"
description: "The last \"stable\" checkpoint before a big 3.2 adds ARM64 builds, SM 6.9 on NVIDIA and a pile of fixes, while the mainline kernel gains a Steam Frame device tree."
summary: "The last \"stable\" checkpoint before a big 3.2 adds ARM64 builds, SM 6.9 on NVIDIA and a pile of fixes, while the mainline kernel gains a Steam Frame device tree."
pubDate: 2026-10-28
publishedAt: 2026-10-28T13:07:35.538Z
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["steamos","proton","steam-frame"]
offTopic: true
cover: "covers/vkd3d-proton-3-1-steam-frame-linux-7-4.png"
sources:
  - title: "VKD3D-Proton v3.1 release notes"
    url: "https://github.com/HansKristian-Work/vkd3d-proton/releases/tag/v3.1"
  - title: "Phoronix"
    url: "https://www.phoronix.com/news/Steam-Frame-FR-Linux-7.4"
  - title: "TechPowerUp"
    url: "https://www.techpowerup.com/354189/valve-enables-cd-drive-support-in-steam-frame-kernel-after-a-single-request"
  - title: "Bazzite testing-45.20261027.3"
    url: "https://github.com/ublue-os/bazzite/releases/tag/testing-45.20261027.3"
source: "Article Desk: vkd3d-proton-3-1-steam-frame-linux-7-4.md"
---
VKD3D-Proton, the Direct3D 12-to-Vulkan layer Proton uses for DX12 games on Linux, reached version 3.1 on October 28 (5:19 AM CT). The developer describes it as a tag of the last "stable" release before "a ton of important changes" arrive in 3.2.

## Steam Frame becomes a supported platform

The headline for Valve hardware: "Steam Frame is now a supported platform," per the release notes, with fixes for Qualcomm hardware and support for aarch64 (ARM64) builds. The release also adds workarounds to help games that assume Wave32 support run on AMD GCN and Qualcomm GPUs.

## New features

- Shader Model 6.9, including Shader Execution Reordering and long vectors. For now it only lights up on NVIDIA, since SM 6.9 is an RT/ML-focused update.
- `VK_EXT_descriptor_heap` support, which ships disabled by default in 3.1 due to driver quality concerns.
- `KHR_opacity_micromap` support (replacing an old, broken EXT path), with DXR 1.2 exposed when supported.
- Agility SDK 619 features, and view instancing exposed by default.

## Performance and fixes

ClearUAV gets an optimized path, more ray-tracing acceleration structure builds are batched before barriers ("massively increases RT performance in some cases"), and some compositor round-trips in `Present()` are avoided, which should help CPU-bound games. Fixes include D24 depth copies on AMD GPUs (which cleared up issues in the MGS4 remaster), NVIDIA-submitted `low_latency2` fixes, a simpler `AMD_anti_lag` implementation, a workaround for root SRV/UAV behavior that caused glitches and crashes on NVIDIA, and reworked workarounds for the FSR4 Unreal Engine plugin.

Proton hasn't picked up 3.1 yet, so most Steam players will see these changes once Valve ships it in a Proton build.

## Steam Frame lands in mainline Linux 7.4

Separately, Phoronix reports that Steam Frame support was merged into the mainline Linux 7.4 kernel as part of the SoC changes. Linaro engineer Neil Armstrong wrote the initial device tree for the headset (codename "Deckard," Snapdragon 8 Gen 3 / SM8650), covering UFS storage, USB gadget mode, WCN7850 Wi-Fi 7 and Bluetooth, I2C and basic peripherals, and the SD card slot. Phoronix notes this could open the door for other Linux distributions to target the Frame, though SteamOS's downstream kernel will remain the most complete option.

## Also worth knowing

- **CD drives, someday:** TechPowerUp reports a Valve commit enabling CD-ROM and SCSI CD-ROM modules in the Steam Frame's kernel config after an owner asked on the Steam Community forums. It's a commit only: it hasn't shipped, and Valve hasn't given a date.
- **Bazzite testing:** Bazzite's October 27 testing builds move Mesa from 26.2.4 to 26.2.5.
