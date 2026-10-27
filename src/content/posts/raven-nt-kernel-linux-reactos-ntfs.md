---
title: "Two Roads to Windows Without Windows: Raven Takes On the NT Kernel's Job on Linux as ReactOS Lands on NTFS"
description: "Mirko Brombin's new Raven project runs real Windows installers on Linux without Wine-style translation, and ReactOS just had its biggest month in years. Both are early."
summary: "Mirko Brombin's new Raven project runs real Windows installers on Linux without Wine-style translation, and ReactOS just had its biggest month in years. Both are early."
pubDate: 2026-10-27
publishedAt: 2026-10-27T14:20:46.204Z
author: "Vet, VetTV Studios"
category: open-nt
type: news
tags: ["raven","reactos","open-nt"]
cover: "covers/raven-nt-kernel-linux-reactos-ntfs.jpg"
offTopic: true
sources:
  - title: "Mirko Brombin on X"
    url: "https://x.com/brombinmirko/status/2113490282213740771"
  - title: "Raven"
    url: "https://useraven.org/"
  - title: "Raven installation docs"
    url: "https://useraven.org/docs/installation/"
  - title: "LockerGnome"
    url: "https://lockergnome.com/raven-plays-windows-kernel-on-linux/"
  - title: "It's FOSS"
    url: "https://itsfoss.com/interview/mirko-brombin-raven/"
  - title: "ReactOS on X"
    url: "https://x.com/reactos/status/2105937347808317824"
  - title: "Phoronix"
    url: "https://www.phoronix.com/news/ReactOS-NTFS-Driver"
  - title: "Ars Technica"
    url: "https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/"
  - title: "Linuxiac"
    url: "https://linuxiac.com/reactos-now-supports-installation-on-ntfs-after-nearly-a-decade-of-work/"
  - title: "Neowin"
    url: "https://www.neowin.net/news/open-source-windows-reactos-finally-reaching-vista-7-8-81-level-gets-ntfs-support/"
  - title: "Joho no Todai"
    url: "https://joho-todai.com/en/reactos-nt6-path-structure-migration/"
source: "Article Desk: raven-nt-kernel-linux-reactos-ntfs.md"
---
*Disclosure: VetTV develops VetTV Retro OS, a fork of ReactOS that is still in development.*

If you've run Windows games on a Linux handheld, you know the routine: open Wine or Proton, then work through winetricks, DLL overrides and prefixes until the game behaves. This month, two very different open-source projects are trying to take on that problem.

## Raven: "A Windows your apps recognize"

Raven is from **Mirko Brombin**, who created Bottles and founded Vanilla OS ([It's FOSS](https://itsfoss.com/interview/mirko-brombin-raven/)). He announced it on X on **October 23** with this pitch: "While Wine translates Windows into Linux, Raven gives apps a Windows they recognize" ([@brombinmirko](https://x.com/brombinmirko/status/2113490282213740771)).

According to the [project site](https://useraven.org/), Raven isn't a virtual machine, and it isn't a compatibility layer in the way Wine is. It "runs the .exe directly on the CPU in a supervised guest process." Requests for system services cross into Raven's runtime, which manages processes, handles, files and registry state and controls access to the Linux host. [LockerGnome](https://lockergnome.com/raven-plays-windows-kernel-on-linux/) describes Raven as playing "the part of the Windows kernel and its services."

Raven implements things real installers depend on: Windows Installer custom actions, side-by-side assemblies through WinSxS, and a service manager. Official redistributables install with their classic installers, just as on Windows. Those include Visual C++ 2005 to 2022, DirectX, .NET Framework 3.5 and 4.8, XNA and OpenAL. Raven also tries to take a snapshot for installers it recognizes, though the site warns that snapshots can fail and tells you to check that a checkpoint exists before you rely on rollback.

For games, graphics go straight to **Wayland and Vulkan**, with **DXVK and vkd3d-proton** handling Direct3D. Those are the same pieces Steam Deck owners know from Proton. Brombin says Google Chrome, Steam (with Unturned installed and tested), Notepad++ and KeePass already work.

## Raven's limits

Raven is early. The [installation docs](https://useraven.org/docs/installation/) say you build it from source for now, it needs Linux x86_64 and a Wayland session for graphical apps, and prebuilt releases are "on the way."

LockerGnome reports the app scorecard puts Notepad++ 8.7.1 at 100%, KeePass at 50%, and 7-Zip, Audacity, ClassiCube and Minesweeper at 75%.

Raven's preliminary benchmarks show ClassiCube at **71.5fps versus 63.0fps** for Wine 11.0. Those numbers come from the project itself, on one machine (LockerGnome identifies it as an Intel Core i7-13700H), using **software Vulkan**. Results on a real GPU are still unknown.

**Handhelds:** nobody has published Raven results on a Steam Deck, ROG Ally or any other handheld, and we haven't tested it.

## ReactOS keeps going

ReactOS is building a free, Windows-compatible operating system from scratch, and it turned 30 this year ([Neowin](https://www.neowin.net/news/open-source-windows-reactos-finally-reaching-vista-7-8-81-level-gets-ntfs-support/)). The team has been posting progress on X, including an October 2 clip of "a test program running on #ReactOS" ([@reactos](https://x.com/reactos/status/2105937347808317824)).

The bigger news came on **October 17**. ReactOS's own NTFS driver can now install and run the OS from an NTFS partition and can format NTFS ([Phoronix](https://www.phoronix.com/news/ReactOS-NTFS-Driver)). Until now, installs needed FAT-based partitions ([Ars Technica](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/)). Read-only NTFS support has existed for years, and NTFS boot support reached the FreeLoader bootloader in 2022, so this caps nearly a decade of work ([Linuxiac](https://linuxiac.com/reactos-now-supports-installation-on-ntfs-after-nearly-a-decade-of-work/)). The team says the driver still lacks caching, journaling and security support and may have undiscovered bugs.

A day later, ReactOS replaced "Documents and Settings" with "Users," describing it as part of a move to NT6, the Vista-and-later generation of Windows ([Joho no Todai](https://joho-todai.com/en/reactos-nt6-path-structure-migration/)). It's a change to folder paths, not Vista-level app compatibility. ReactOS 0.4.16, released in August with a graphical installer, is still the latest official release, and the OS is still alpha.

## Why it matters

Raven and ReactOS come at the same problem from opposite ends. Raven gives Windows apps a convincing Windows on top of Linux, and ReactOS rebuilds Windows itself. Neither is ready to run your handheld every day. But if Raven's numbers hold up on real GPUs and ReactOS keeps hitting milestones, needing Windows for that one game becomes a weaker excuse every month.

*Sources: [Mirko Brombin on X](https://x.com/brombinmirko/status/2113490282213740771), [Raven](https://useraven.org/), [Raven installation docs](https://useraven.org/docs/installation/), [LockerGnome](https://lockergnome.com/raven-plays-windows-kernel-on-linux/), [It's FOSS](https://itsfoss.com/interview/mirko-brombin-raven/), [ReactOS on X](https://x.com/reactos/status/2105937347808317824), [Phoronix](https://www.phoronix.com/news/ReactOS-NTFS-Driver), [Ars Technica](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/), [Linuxiac](https://linuxiac.com/reactos-now-supports-installation-on-ntfs-after-nearly-a-decade-of-work/), [Neowin](https://www.neowin.net/news/open-source-windows-reactos-finally-reaching-vista-7-8-81-level-gets-ntfs-support/), [Joho no Todai](https://joho-todai.com/en/reactos-nt6-path-structure-migration/).*
