---
title: "Xbox & Windows Roundup: Xbox Labs, the ID@Xbox Showcase, and Windows 11 KB5127648"
description: "Xbox has formed a new Labs team to experiment with ports and browser play, an indie showcase with 18 games is coming next Tuesday, and October's Windows 11 update fixes gaming mouse stutter."
summary: "Xbox has formed a new Labs team to experiment with ports and browser play, an indie showcase with 18 games is coming next Tuesday, and October's Windows 11 update fixes gaming mouse stutter."
pubDate: 2026-10-15
author: "Vet, VetTV Handheld"
category: news
tags: ["xbox","windows-11","id-xbox","xbox-labs","pc-gaming"]
cover: "covers/xbox-windows-roundup-2026-10-15.jpg"
offTopic: true
sources:
  - title: "Xbox Wire, \"Introducing XBOX LABS\" (Oct 13, 2026)"
    url: "https://news.xbox.com/en-us/2026/10/13/introducing-xbox-labs/"
  - title: "IGN, \"ID@Xbox Showcase Returns in October With 18 Games\""
    url: "https://www.ign.com/articles/id-xbox-showcase-october-2026-how-to-watch"
  - title: "Microsoft Support, \"October 13, 2026 KB5127648 (OS Builds 26300.9711, 26200.9711 and 26100.9711)\""
    url: "https://support.microsoft.com/en-gb/servicing/os/windows-11/2026/10/kb5127648-windows-11-24h2-25h2-26h2-security-update"
source: "Article Desk: xbox-windows-roundup-2026-10-15.md"
---
Here are three Xbox and Windows stories from this week, including one that affects my own Windows 11 26H2 machines.

## Xbox Labs is now a formal team

On **October 13**, Xbox Wire published an internal memo from Xbox's leadership (signed "Asha") introducing **Xbox Labs**. The memo describes it as "a small group of game makers, engineers and scientists whose job is to turn emerging ideas into things our players and developers can experience." A leader named Scott was asked to set it up.

The memo points to recent community experiments as the inspiration:

- Games **decompiled and rebuilt** to run on hardware they weren't designed for.
- Windows PC builds **translated to run on Apple Silicon**.
- Games **ported to run in a browser through WebAssembly and WebGPU**, which the memo says is "now approaching 90% global browser support."
- Big games **"remixed into the source code of another."**

The memo also connects this to AI. It notes that coding became "the first major workload for agents," says games share many of the same properties, and says Xbox wants its game makers "to help shape what these new technologies make possible."

**What's not happening yet:** nothing has shipped. There's no product, no release date and no list of games. Xbox says it will "build in the open," share tools with developers, and that its priorities "aren't changing." For a Mac user like me with an old iMac, an official Apple Silicon effort would be interesting, but for now it's an exploration, not a promise.

## ID@Xbox Showcase: Tuesday, October 20

IGN and Xbox are hosting the next **ID@Xbox Showcase** on **Tuesday, October 20 at 10am PT / 12pm CT / 1pm ET**. IGN says it will feature trailers, gameplay and more from **18 games**. Confirmed so far:

- **The Wolf Among Us Remastered**
- Gameplay from **Critical Reflex Games**
- "Tons of world premieres"

You can watch it anywhere IGN streams.

## Windows 11 KB5127648: gaming fixes and known issues

Microsoft released **KB5127648** on **October 13** for Windows 11 **26H2 (build 26300.9711)**, 25H2 (26200.9711) and 24H2 (26100.9711). I run 26H2 on both my iMac and my Asus, so these are the parts I care about:

- **[Gaming]** Fixes an issue that "could cause mouse input to stutter in some games."
- **[Audio]** Fixes an issue that "affects AC-3 audio playback in some applications."
- Also fixes Windows Hello fingerprint sign-in failing after a cold boot, a printing failure with RAW and Generic Text Only drivers, and an Always On VPN bug. It also adds the new Manitoba time zone.
- **Heads-up for 24H2:** Microsoft says this is the **last update for Windows 11 24H2 Home and Pro**.

**Known issues to watch for:**

- **USB audio:** Since the September 8 update (KB5124012), some **USB Audio Class 1.0** devices may fail to start ("Code 10"), produce no sound, or have unresponsive volume controls. Microsoft says the September 14 out-of-band update fixed the 8-channel and 3D audio symptoms, and some users get sound back by switching to 2-channel mode. The other symptoms aren't fixed yet.
- **Remote Desktop:** **Non-admin users** may fail to connect to remote PCs that have **Administrator protection** enabled, with error **0xC000000D**. Microsoft says this mainly affects enterprise-managed devices, and that admins can work around it by temporarily turning off Administrator protection.

The update installs automatically through Windows Update.

## My take

Xbox Labs is interesting but still all talk, the ID@Xbox Showcase is worth an hour next Tuesday, and the gaming mouse stutter fix alone makes KB5127648 worth installing. Just keep an eye on that USB audio issue if you use an older USB DAC or headset.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld).*

---

## Sources

- Xbox Wire, "Introducing XBOX LABS" (Oct 13, 2026): https://news.xbox.com/en-us/2026/10/13/introducing-xbox-labs/
- IGN, "ID@Xbox Showcase Returns in October With 18 Games": https://www.ign.com/articles/id-xbox-showcase-october-2026-how-to-watch
- Microsoft Support, "October 13, 2026 KB5127648 (OS Builds 26300.9711, 26200.9711 and 26100.9711)": https://support.microsoft.com/en-gb/servicing/os/windows-11/2026/10/kb5127648-windows-11-24h2-25h2-26h2-security-update
