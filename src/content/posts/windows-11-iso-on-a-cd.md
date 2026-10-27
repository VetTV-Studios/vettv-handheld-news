---
title: "Windows 11 on a CD: NTDEV's Pico11 Squeezes the Whole ISO Under 700MB"
description: "The tiny11 creator's new proof of concept boots to a working Windows 11 desktop from an image small enough for a CD-R. It's a showcase, not a release, and it drops Windows Update to get there."
summary: "The tiny11 creator's new proof of concept boots to a working Windows 11 desktop from an image small enough for a CD-R. It's a showcase, not a release, and it drops Windows Update to get there."
seoTitle: "Windows 11 on a CD: NTDEV's Pico11 Proof of Concept Explained"
pubDate: 2026-10-26
publishedAt: 2026-10-26T15:21:52.144Z
author: "Vet, VetTV Studios"
category: windows
type: news
tags: ["windows","windows-11","tiny11","ntdev","retro-computing","debloat"]
cover: "covers/windows-11-iso-on-a-cd.jpg"
offTopic: true
sources:
  - title: "Tom's Hardware, Mark Tyson, \"Windows 11's 'whole ISO' squeezed into a CD-ROM\""
    url: "https://www.tomshardware.com/software/windows/windows-11s-whole-iso-squeezed-into-a-cd-rom-sub-700mb-disk-boots-to-the-desktop-runs-apps-just-like-the-microsoft-original"
  - title: "NTDEV on X, Pico11 announcement"
    url: "https://x.com/NTDEV_/status/2114459263439429926"
  - title: "NTDEV on YouTube, \"I made Windows 11 fit on a CD - pico11\""
    url: "https://www.youtube.com/watch?v=c0wDeL_B6yI"
  - title: "tiny11 Builder on GitHub"
    url: "https://github.com/ntdevlabs/tiny11builder"
source: "Article Desk: windows-11-iso-on-a-cd.md"
---
There's something very retro about the idea of Windows 11 on a single CD. Developer **NTDEV**, the creator of tiny11, just made that happen.

## What NTDEV showed

On **Sunday, October 25, at 3:49 PM CT**, NTDEV posted on X: "I made Windows 11 fit on a CD. Under 700 MB for the entire ISO, installer included. It still boots to the desktop, runs apps, and CAN YOU BELIEVE IT! Paint still works :)) This is pico11. Just a proof of concept."

The accompanying YouTube video, "I made Windows 11 fit on a CD - pico11," runs about 74 seconds. NTDEV's description calls it "a proof of concept I put together to see how small I could make a Windows 11 ISO while keeping a working desktop and a few familiar apps."

Here's what works, in NTDEV's own words:

- **Apps:** "Calculator and Settings still open, Notepad saves files, and Paint still lets me draw questionable logos."
- **Task Manager:** It "might look a little older than you remember."
- **What's gone:** It's "an experiment, not a replacement for a normal Windows installation. Windows Update and general servicing have been removed."

Tom's Hardware, which spotted the demo, adds more detail from the video. It reports the ISO at 699,811,840 bytes, and says the test VM had 4GB allocated and used around 883MB of RAM. Those figures aren't in NTDEV's post or video description, so I'm attributing them to Tom's.

## Is it available?

No. NTDEV says, "For now, this is just a showcase." They also say, "I plan to add the ability to build images like this to tiny11 builder later." There's no Pico11 download, and no date.

## A quick primer on tiny11 Builder

tiny11 Builder lives on GitHub at ntdevlabs/tiny11builder. It's now a native WinUI app that builds a smaller Windows 11 ISO from an official Windows image or one you provide. The README lists three modes:

- **Tiny11:** Removes bundled apps and unwanted features but keeps updates, Defender and recovery.
- **Tiny11 Core:** Goes further by removing servicing and recovery support and disabling Defender. The README warns that "Core cannot be updated or serviced."
- **Custom:** Lets you pick individual apps, components, features and services to remove or keep.

The README also says to "Test your ISO in a VM before installing it." The original PowerShell builders are still in the repo.

## Analysis (opinion)

Pico11 looks like Tiny11 Core taken to an extreme. Both trade away servicing to save space, and NTDEV's own description confirms Pico11 has no Windows Update. That's the catch. A CD-sized Windows 11 is a great party trick and a fun way to see how much of Windows really needs to be there, but an install that can't get security updates isn't something to put online as an everyday machine.

For retro and old-hardware fans, it's still interesting. It's a reminder of how much of a modern Windows install is optional. Keep in mind that a small ISO doesn't change Windows 11's official hardware requirements, and NTDEV only showed it running in a VM.

At VetTV Studios, I come at the "small, nostalgic Windows experience" idea from a very different angle with **VetTV Retro OS**, my fork of the open-source ReactOS. Pico11 is about stripping Microsoft's own OS down. I just like seeing people push old ideas, like an OS on a CD, in new directions.

I haven't tried Pico11, and there's nothing public to try yet.

---

## Sources
- Tom's Hardware, Mark Tyson, "Windows 11's 'whole ISO' squeezed into a CD-ROM": https://www.tomshardware.com/software/windows/windows-11s-whole-iso-squeezed-into-a-cd-rom-sub-700mb-disk-boots-to-the-desktop-runs-apps-just-like-the-microsoft-original
- NTDEV on X, Pico11 announcement: https://x.com/NTDEV_/status/2114459263439429926
- NTDEV on YouTube, "I made Windows 11 fit on a CD - pico11": https://www.youtube.com/watch?v=c0wDeL_B6yI
- tiny11 Builder on GitHub: https://github.com/ntdevlabs/tiny11builder
