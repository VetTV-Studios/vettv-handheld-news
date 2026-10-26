---
title: "ReactOS Weekend: A Fork Runs Gemma 4, Its Desktop Lands on Linux, and UDFS Nears NTFS Speeds"
description: "CusDeb OS Alpha 1 puts the ReactOS shell on Debian, LiberNT runs llama.cpp with Gemma 4, a 0.4.17 nightly runs Apple IIgs demos, and a modified UDFS driver gets benchmarked against Windows 7's NTFS."
summary: "CusDeb OS Alpha 1 puts the ReactOS shell on Debian, LiberNT runs llama.cpp with Gemma 4, a 0.4.17 nightly runs Apple IIgs demos, and a modified UDFS driver gets benchmarked against Windows 7's NTFS."
seoTitle: "ReactOS news: CusDeb OS alpha, LiberNT runs Gemma 4, UDFS benchmark"
pubDate: 2026-10-26
publishedAt: 2026-10-26T17:25:21.595Z
author: "Vet"
category: reactos-open-nt
tags: ["reactos","open-source","libernt","cusdeb-os","retro-computing"]
cover: "covers/reactos-community-roundup-2026-10-26.jpg"
offTopic: true
sources:
  - title: "OpenNET: CusDeb OS alpha (Oct. 25, 2026)"
    url: "https://opennet.ru/66545"
  - title: "@opennetru on X"
    url: "https://x.com/opennetru/status/2114386546266710045"
  - title: "CusDeb OS project page"
    url: "https://cusdeb.com/os"
  - title: "cusdeb-com/os on GitHub"
    url: "https://github.com/cusdeb-com/os"
  - title: "@PromptInjection on X (Oct. 24)"
    url: "https://x.com/PromptInjection/status/2113925580379115922"
  - title: "LiberNT on GitHub"
    url: "https://github.com/LiberNT/LiberNT"
  - title: "Google: Run Gemma with llama.cpp"
    url: "https://ai.google.dev/gemma/docs/integrations/llamacpp"
  - title: "Google: Gemma 4 E2B model card"
    url: "https://huggingface.co/google/gemma-4-E2B"
  - title: "@thebelovedmoon on X (Oct. 26)"
    url: "https://x.com/thebelovedmoon/status/2114636923163840892"
  - title: "ReactOS 0.4.16 release notes"
    url: "https://reactos.org/project-news/reactos-0416-released/"
  - title: "ReactOS downloads and nightlies"
    url: "https://reactos.org/download/"
  - title: "@Zero3K benchmark (Oct. 25)"
    url: "https://x.com/Zero3K/status/2114431170712645820"
  - title: "@Zero3K UDFS update (Oct. 17)"
    url: "https://x.com/Zero3K/status/2111595248354804063"
source: "Article Desk: reactos-community-roundup-2026-10-26.md"
---
It was a busy weekend for ReactOS, the open-source operating system that aims to run Windows apps and drivers. One fork ran a local AI model, another project put the ReactOS desktop on Linux, a nightly build ran Apple IIgs demos, and a driver developer posted disk benchmarks. All four come from community X posts, which we checked against project pages and the screenshots themselves.

*Disclosure: VetTV develops VetTV Retro OS, which is also a ReactOS fork.*

## CusDeb OS Alpha 1: the ReactOS desktop on a Linux kernel

Russian Linux news site OpenNET [reported](https://opennet.ru/66545) ([X post](https://x.com/opennetru/status/2114386546266710045)) on Oct. 25 that the project formerly called C:\Deb has released its first alpha under a new name, **CusDeb OS**. According to the [project page](https://cusdeb.com/os), Alpha 1 runs on **Debian 13** with **Wine 11.19** and **CDEX 0.0.13**. CDEX is the project's desktop environment, built from the ReactOS shell and modified to run without the ReactOS kernel. It's a live system of about 894 MB that can be installed to a drive from the live session. OpenNET names Debian package maintainer Evgeny Golyshev as the author.

The goals for Alpha 2, per OpenNET and the project page, are a native 64-bit CDEX (Alpha 1 runs 32-bit CDEX on 64-bit Linux), Direct3D 3-11 through D7VK and DXVK, and a move from Xorg to Wayland. OpenNET also says the developers want CusDeb to be a full Windows 10 alternative within a year. *Analysis:* That's an ambitious goal for an alpha. In OpenNET's comments, a user posting as the developer said Alpha 1 still uses the stock ReactOS branding, and rebranding is planned for Alpha 2.

## LiberNT runs Gemma 4 locally with llama.cpp

On Oct. 24, @PromptInjection [posted](https://x.com/PromptInjection/status/2113925580379115922) a screenshot of **llama.cpp running Google's Gemma 4 "natively" on LiberNT "with a few patches."** [LiberNT](https://github.com/LiberNT/LiberNT) is a GPL-3.0 fork of ReactOS that targets Windows 11 (NT10) compatibility on amd64, arm64 and riscv64. Its builds are labeled debug pre-releases for testing only.

Here's what the screenshot shows:
- The About LiberNT dialog reports **version 0.4.17-amd64-dev (20261023-6d0f316)**, identifying as NT 10.0 build 26100.
- The model file is **gemma-4-E2B-it** in GGUF format.
- A llama-server console window is open.
- A chat UI at 127.0.0.1 shows generation speeds of roughly **15-16 tokens per second**, with one reply at 32.70 t/s.

Gemma 4 E2B is the smallest model in the family, with 2.3B effective parameters according to [Google's model card](https://huggingface.co/google/gemma-4-E2B). [Google documents](https://ai.google.dev/gemma/docs/integrations/llamacpp) running it with llama.cpp. The poster didn't say what hardware was used or what the patches change, so the speeds can't be compared to anything.

## A ReactOS 0.4.17 nightly runs Apple IIgs demos from NTFS

@thebelovedmoon [posted](https://x.com/thebelovedmoon/status/2114636923163840892) on Oct. 26 that they had loaded the "Modulae" and "Xmas" demos in **ActiveGS 3.7.1019 beta**, an Apple IIgs emulator, on a **ReactOS 0.4.17-x86-dev nightly**, "on an ntfs-formatted drive, no less." The VM runs in UTM/QEMU on an Apple Silicon Mac. The screenshot shows build 20261024-0.4.17-dev-1230-g208bb7f. The post quotes a 2022 test showing ActiveGS working on ReactOS 0.4.15-dev.

*Context:* The current stable ReactOS release is still [0.4.16](https://reactos.org/project-news/reactos-0416-released/) from Aug. 29. 0.4.17 exists only as [nightly builds](https://reactos.org/download/), which ReactOS says are more likely to have regressions.

## The ReactOS UDFS driver vs. Windows 7 NTFS

Bryan Kirk (@Zero3K) [posted](https://x.com/Zero3K/status/2114431170712645820) a CrystalDiskMark 8.0.6 comparison on Oct. 25. It pits Windows 7's NTFS driver against a **UDF 2.50 volume using his modified ReactOS UDFS driver**, both running on Windows 7 (build 7601, Test Mode). The figures below are from his screenshot (5 runs, 1 GiB, MB/s):

| Test | NTFS read | NTFS write | UDFS read | UDFS write |
|---|---|---|---|---|
| SEQ1M Q8T1 | 1053.26 | 899.35 | 979.54 | 935.29 |
| SEQ1M Q1T1 | 1057.17 | 929.92 | 970.54 | 887.06 |
| RND4K Q32T1 | 54.54 | 55.35 | 54.96 | 40.26 |
| RND4K Q1T1 | 50.11 | 42.00 | 47.47 | 41.64 |

*Analysis:* The UDFS driver comes close to NTFS in sequential tests and in most random tests. The biggest gap is in deep-queue random writes. However, the two tests ran on **different volumes** (C: at 70% full and an empty F:), so this is a rough comparison, not a controlled test. In an Oct. 17 [post](https://x.com/Zero3K/status/2111595248354804063), Kirk said the driver can now read and write UDF 2.50, can be chosen as a format option in ReactOS setup, and can boot. We couldn't confirm whether that work has been merged into ReactOS master.

## The takeaway

*Opinion:* ReactOS itself moves slowly, but the projects built on it are moving fast. A fork running a modern local AI model and a Linux distro borrowing the ReactOS shell both suggest the codebase is useful beyond the main project. VetTV Handheld News hasn't tested any of these builds.

## Sources

- [OpenNET: CusDeb OS alpha (Oct. 25, 2026)](https://opennet.ru/66545)
- [@opennetru on X](https://x.com/opennetru/status/2114386546266710045)
- [CusDeb OS project page](https://cusdeb.com/os)
- [cusdeb-com/os on GitHub](https://github.com/cusdeb-com/os)
- [@PromptInjection on X (Oct. 24)](https://x.com/PromptInjection/status/2113925580379115922)
- [LiberNT on GitHub](https://github.com/LiberNT/LiberNT)
- [Google: Run Gemma with llama.cpp](https://ai.google.dev/gemma/docs/integrations/llamacpp)
- [Google: Gemma 4 E2B model card](https://huggingface.co/google/gemma-4-E2B)
- [@thebelovedmoon on X (Oct. 26)](https://x.com/thebelovedmoon/status/2114636923163840892)
- [ReactOS 0.4.16 release notes](https://reactos.org/project-news/reactos-0416-released/)
- [ReactOS downloads and nightlies](https://reactos.org/download/)
- [@Zero3K benchmark (Oct. 25)](https://x.com/Zero3K/status/2114431170712645820)
- [@Zero3K UDFS update (Oct. 17)](https://x.com/Zero3K/status/2111595248354804063)
