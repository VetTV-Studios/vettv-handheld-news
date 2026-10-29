---
title: "Retro Roundup: Taito Milestones 5 for Switch, and 3Dfx Glide Comes to Vulkan"
description: "Taito packs 10 arcade games onto one Switch cart for Japan, while the new GXVK project and D7VK 2.4 help old PC games run on modern Vulkan drivers"
summary: "Taito packs 10 arcade games onto one Switch cart for Japan, while the new GXVK project and D7VK 2.4 help old PC games run on modern Vulkan drivers"
pubDate: 2026-10-29
publishedAt: 2026-10-29T13:07:16.000Z
author: "Vet, VetTV Studios"
category: gaming
type: news
tags: ["retro","taito","emulation"]
offTopic: true
cover: "covers/retro-roundup-taito-milestones-5-gxvk-d7vk-2-4.png"
sources:
  - title: "Time Extension: Taito Milestones 5"
    url: "https://www.timeextension.com/news/2026/10/taito-milestones-5-brings-together-space-invaders-hat-trick-hero-and-more-arcade-hits-on-a-single-switch-cart"
  - title: "GamingOnLinux: D7VK 2.4 released along with GXVK"
    url: "https://www.gamingonlinux.com/2026/10/d7vk-2-4-released-along-with-gxvk-for-vulkan-based-3dfx-glide/"
source: "Article Desk: retro-roundup-taito-milestones-5-gxvk-d7vk-2-4.md"
---
## Taito Milestones 5 for Switch

Taito announced Taito Milestones 5 for Nintendo Switch on October 29. It's set to release in Japan on January 28, 2027, digitally and physically, for 5,720 yen, according to Time Extension, which cites Gematsu. It collects 10 arcade games released between 1978 and 1990:

- Arkanoid: Revenge of DOH
- Crime City
- Extermination
- Final Blow
- Hat Trick Hero (known overseas as Football Champ)
- Land Sea Air Squad
- Marine Date
- Plump Pop
- Sagaia (three-screen version)
- Space Invaders

Most of these have already come to Switch through Hamster's Arcade Archives series. Time Extension says the exceptions appear to be Marine Date from 1981 and Extermination from 1987, which make their Switch debut here. No release outside Japan has been announced.

## GXVK: 3Dfx Glide over Vulkan

On PC, a new project called GXVK translates 3Dfx Glide, the graphics API used by Voodoo cards in the late 1990s, to Vulkan. That's useful for running old Glide games through Wine and Proton on Linux. Like D7VK, it's forked from DXVK. GamingOnLinux says GXVK is an early prototype and not ready for a smooth experience yet, though some games, including Diablo II, already run.

## D7VK 2.4

GXVK arrived alongside D7VK 2.4, the DXVK fork for Direct3D 7, 6, 5 and 3. The project is in maintenance mode, but this release adds a lot of fixes:

- Rebased on the latest upstream DXVK code, which brings in present timing
- Keeps the aspect ratio when stretching the back buffer, which is now off by default
- A legacy option that reports only 4:3 and 5:4 display modes, needed for Earth 2150, which crashes in some menus at 16:9 resolutions
- Better VSync handling, which fixes missing text and artwork in Re-Volt and 3DMark 2000
- A fix for crashes in H.E.D.Z.
