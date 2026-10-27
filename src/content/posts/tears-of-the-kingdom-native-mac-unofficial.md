---
title: "Unofficial Port Runs Zelda: Tears of the Kingdom Natively on Apple Silicon Macs"
description: "MacNativeGames is an unofficial fan project, not from Nintendo. It runs the Switch game's Arm64 code directly and rebuilds its graphics on Metal 4. You need your own game dump and keys."
summary: "MacNativeGames is an unofficial fan project, not from Nintendo. It runs the Switch game's Arm64 code directly and rebuilds its graphics on Metal 4. You need your own game dump and keys."
pubDate: 2026-10-27
publishedAt: 2026-10-27T14:20:46.128Z
author: "Vet, VetTV Studios"
category: macos
type: news
tags: ["tears-of-the-kingdom","macnativegames","mac-gaming"]
cover: "covers/tears-of-the-kingdom-native-mac-unofficial.jpg"
offTopic: true
draft: false
sources:
  - title: "MacNativeGames on GitHub"
    url: "https://github.com/ly05010419/MacNativeGames"
  - title: "install guide"
    url: "https://github.com/ly05010419/MacNativeGames/blob/main/docs/install.md"
  - title: "how it works"
    url: "https://github.com/ly05010419/MacNativeGames/blob/main/docs/how-it-works.md"
  - title: "XDA Developers"
    url: "https://www.xda-developers.com/mac-gets-game-first-zelda-tears-of-the-kingdom-runs-natively-apple-m4-chip-nintendo/"
source: "Article Desk: tears-of-the-kingdom-native-mac-unofficial.md"
---
**This is an unofficial fan project. It isn't from Nintendo, and Nintendo hasn't endorsed it.**

A project called **[MacNativeGames](https://github.com/ly05010419/MacNativeGames)**, by developer Yong Li (@liyong2077 on X), can build a native Apple silicon app of **The Legend of Zelda: Tears of the Kingdom** from your own copy of the Switch game. [XDA Developers](https://www.xda-developers.com/mac-gets-game-first-zelda-tears-of-the-kingdom-runs-natively-apple-m4-chip-nintendo/) covered it on October 18.

## Not an emulator, but not simple either

The project says the game's own **Arm64 code runs directly** on Apple chips and is rewritten where macOS requires it. A small host program answers the Switch's system services, and the game's NVN graphics calls are rebuilt on **Metal 4**. Its [how-it-works notes](https://github.com/ly05010419/MacNativeGames/blob/main/docs/how-it-works.md) say shaders are translated through the Ryujinx shader translator and SPIRV-Cross, and MetalFX upscales the game's 1600x900 scene. Both the Switch and Apple silicon use Arm64, which is why this approach works on Mac.

## What you need

According to the project's [install guide](https://github.com/ly05010419/MacNativeGames/blob/main/docs/install.md):

- An Apple silicon Mac on **macOS 26 or later**, with 16GB of memory recommended
- About **25GB** of free space
- **Your own** Tears of the Kingdom base game (version 1.0.0) as an XCI or NSP file, plus `prod.keys` from your own Switch

There's no ready-made app to download. You build it yourself with a script, and the README says the result is "for your own use only; do not share it." The repository says it contains no game content.

## Performance claims

The developer reports about **90fps after shader warm-up** on an M4 MacBook Air and an M4 Mac mini, after collecting 8,582 shaders. The project itself calls these "earlier local observations, not a stable frame-rate promise." It also notes stutter while shaders compile, memory growth in long sessions and audio underruns that are still under investigation. We haven't tested it.

## Updated since XDA's report

The repository now lists support for later game versions (1.2.1 and 1.4.3), unsigned iPhone and iPad builds for iPhone 14 and newer, and Breath of the Wild on Mac.

## Legal note

The project says you must own the game and use keys dumped from your own Switch. XDA notes that people can get dumps elsewhere, but that doesn't make it legal. Rules on dumping and backups vary by country.

For more fan ports, see our look at the [RecompLauncher catalog](/vettv-handheld-news/posts/recomplauncher-console-recomp-catalog/).

*Sources: [MacNativeGames on GitHub](https://github.com/ly05010419/MacNativeGames), [install guide](https://github.com/ly05010419/MacNativeGames/blob/main/docs/install.md), [how it works](https://github.com/ly05010419/MacNativeGames/blob/main/docs/how-it-works.md). Report: [XDA Developers](https://www.xda-developers.com/mac-gets-game-first-zelda-tears-of-the-kingdom-runs-natively-apple-m4-chip-nintendo/).*
