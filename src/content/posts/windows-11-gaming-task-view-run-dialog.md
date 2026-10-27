---
title: "Windows 11 Insider Build Adds Exit to Desktop and Power Options to Gaming Task View in Xbox Mode"
description: "Experimental build 26340.9750 gives Gaming Task View in Xbox mode a navigation bar with Exit to Desktop and Power Options, and the same change is in Beta build 26220.9739. The build also polishes the opt-in modern Run dialog and lets Windows Hello brighten the screen in the dark."
summary: "Experimental build 26340.9750 gives Gaming Task View in Xbox mode a navigation bar with Exit to Desktop and Power Options, and the same change is in Beta build 26220.9739. The build also polishes the opt-in modern Run dialog and lets Windows Hello brighten the screen in the dark."
seoTitle: "Windows 11 Build 26340.9750: Xbox Mode Gaming Task View and Run"
pubDate: 2026-10-18
publishedAt: 2026-10-18T10:33:30-05:00
author: "Vet, VetTV Handheld"
category: windows
type: news
tags: ["windows-11","xbox-mode","pc-gaming","windows-insider","gaming-handhelds"]
cover: "covers/windows-11-gaming-task-view-run-dialog.jpg"
sources:
  - title: "Microsoft Learn, Windows 11 Insider Experimental Preview Build 26340.9750 release notes"
    url: "https://learn.microsoft.com/en-us/windows-insider/release-notes/experimental/preview-build-26340-9750"
  - title: "Windows Insider Blog, Announcing new builds for 16 October 2026"
    url: "https://blogs.windows.com/windows-insider/2026/10/16/announcing-new-builds-for-16-october-2026/"
  - title: "Microsoft Learn, Windows 11 Insider Beta Preview Build 26220.9739 release notes"
    url: "https://learn.microsoft.com/en-us/windows-insider/release-notes/beta/preview-build-26220-9739"
  - title: "Microsoft Learn, Flight Hub"
    url: "https://learn.microsoft.com/en-us/windows-insider/flight-hub/"
  - title: "Neowin, New Windows 11 build improves Gaming Task View and revamps the Run dialog"
    url: "https://www.neowin.net/news/new-windows-11-build-improves-gaming-task-view-and-revamps-the-run-dialog/"
  - title: "Windows Central, Xbox Mode is getting a smart new feature that makes switching back to the Windows desktop effortless"
    url: "https://www.windowscentral.com/microsoft/windows-11/a-new-xbox-mode-feature-will-make-it-easier-to-jump-back-to-the-desktop"
  - title: "Pureinfotech, Build 26340.9750 for Windows 11 26H2 adds new XBOX mode controls"
    url: "https://pureinfotech.com/build-26340-9750-windows-11-26h2/"
  - title: "Microsoft Support, Windows Gaming: Xbox mode (full screen experience)"
    url: "https://support.microsoft.com/en-us/servicing/os/windows/docs/2025/10/windows-gaming-full-screen-experience"
  - title: "Xbox Wire, Xbox Mode Begins Rolling Out to Players on Windows 11 PCs Today"
    url: "https://news.xbox.com/en-us/2026/04/30/xbox-mode-pc-windows-11/"
  - title: "Windows Command Line blog, The new Run dialog: faster, cleaner, and more capable"
    url: "https://devblogs.microsoft.com/commandline/the-new-run-dialog-faster-cleaner-and-more-capable/"
  - title: "Windows Insider Blog, Announcing new builds for 1 May 2026"
    url: "https://blogs.windows.com/windows-insider/2026/05/01/announcing-new-builds-for-1-may-2026-and-extending-iso-support/"
source: "Article Desk: windows-11-gaming-task-view-run-dialog.md"
---
Microsoft's October 16 batch of Windows Insider builds includes a small change that matters if you play on a Windows handheld. Gaming Task View in Xbox mode is getting a navigation bar with shortcuts to leave the gaming shell or reach power controls. Here's what Microsoft's own release notes confirm, and what they don't.

## The build at a glance

- **Build:** Windows 11 Insider Experimental Preview Build 26340.9750, released October 16, 2026.
- **Channel:** Experimental, based on Windows 11, version 26H2 through an enablement package.
- **Also in Beta:** the Gaming Task View change is also listed in Beta build 26220.9739, which is based on version 25H2. Microsoft's Windows Insider Blog announcement lists the Gaming item for both the Beta and Experimental channels.
- **KB number:** Microsoft's release notes for this build don't list one.
- **Known issues:** the Experimental release notes for 26340.9750 don't include a known-issues section.
- **Rollout:** Microsoft files the Experimental changes under "Changes and improvements gradually being rolled out." Microsoft says many features in this channel use Controlled Feature Rollout, starting with a subset of Insiders. That means installing the build doesn't guarantee you'll see every change right away.

## Gaming Task View: Exit to Desktop and Power Options

According to Microsoft's notes, Gaming Task View in Xbox mode now has a new navigation bar with quick access to Exit to Desktop and Power Options. Microsoft says the goal is to make key system actions easier to reach while gaming.

Some context: Xbox mode is the new name for what Microsoft first called the Xbox full screen experience. That's the controller-first, full-screen gaming shell that debuted on the ROG Xbox Ally handhelds. Xbox Wire says it began rolling out to Windows 11 PCs in select markets on April 30, 2026. Microsoft's support page for Xbox mode already lists Task View (Win + Tab) as one way to get back to the desktop. On touch devices, you can also swipe up from the bottom of the screen to open Task View. This build puts Exit to Desktop and Power Options directly in that view instead of making you hunt for them.

**My take (opinion):** on a handheld, dropping back to the desktop for a launcher, a mod tool or a settings fix is a routine trip, and anything that cuts steps from it is welcome. To be clear, though, Microsoft's notes don't name any specific device. They don't say anything about the ROG Ally, ROG Xbox Ally or Legion Go, and they don't promise any performance or battery change. The new bar is part of Xbox mode itself, so it should apply wherever Xbox mode runs. I'll confirm that on real hardware rather than assume it. My own Legion Go runs SteamOS, so I can't test this on it.

## The Run dialog: refinements, not a new redesign

Despite some headlines, this build doesn't introduce a new Run dialog. It polishes the modern Run dialog Microsoft started testing earlier this year. The notes say the changes apply only "for Insiders with the new Run dialog enabled":

- Better window positioning with Arabic or Hebrew display languages.
- Faster performance when navigating to very large folders.
- A fix for typed text sometimes disappearing if you started typing right after opening Run.
- Minor visual fixes and refinements.

The modern Run dialog is still opt-in. Microsoft's Windows Command Line blog and its May 1 Insider notes say you turn it on in Settings > System > Advanced with the Run dialog option, then press Win + R. That blog says the redesign uses Fluent design with dark mode, reports a 94 ms median time to show, and adds a "~\" shortcut that jumps to your user folder.

## Windows Hello can brighten the screen in the dark

A new option lets Windows Hello facial recognition briefly brighten the screen to help you sign in in a dark room. It's off until you turn it on. Go to Settings > Accounts > Sign-in options > Facial recognition (Windows Hello) and enable "Automatically adjust screen brightness during face recognition." This only matters on devices with a Windows Hello face camera. Microsoft doesn't name any handhelds for this feature.

## Everything else in 26340.9750

- **Web sign-in** now works on Microsoft Entra hybrid joined devices, not just Entra joined ones. You can sign in with a FIDO2 key, a phone passkey or a Temporary Access Pass. This is mostly relevant to managed work PCs.
- **File Explorer:** folder views update and sort correctly when you add or rename files and folders.
- **Windows Search:** fixes for search going missing or stopping working after the previous update, including when you clicked the search icon rapidly.
- **Other:** shutdown should be more reliable and less likely to hang, and some system dialogs (such as low battery and permissions) are back to the modern design.

## Should handheld players care?

Only if you're in the Windows Insider Program. These are Experimental and Beta channel builds, and Microsoft warns that features in them may change or never ship. If you run Xbox mode on a Windows handheld and you're already in one of those channels, the Gaming Task View bar is worth looking for once it reaches your device. Everyone else should wait for it to show up in a regular release.

---

## Sources

- Microsoft Learn, Windows 11 Insider Experimental Preview Build 26340.9750 release notes: https://learn.microsoft.com/en-us/windows-insider/release-notes/experimental/preview-build-26340-9750
- Windows Insider Blog, Announcing new builds for 16 October 2026: https://blogs.windows.com/windows-insider/2026/10/16/announcing-new-builds-for-16-october-2026/
- Microsoft Learn, Windows 11 Insider Beta Preview Build 26220.9739 release notes: https://learn.microsoft.com/en-us/windows-insider/release-notes/beta/preview-build-26220-9739
- Microsoft Learn, Flight Hub: https://learn.microsoft.com/en-us/windows-insider/flight-hub/
- Neowin, New Windows 11 build improves Gaming Task View and revamps the Run dialog: https://www.neowin.net/news/new-windows-11-build-improves-gaming-task-view-and-revamps-the-run-dialog/
- Windows Central, Xbox Mode is getting a smart new feature that makes switching back to the Windows desktop effortless: https://www.windowscentral.com/microsoft/windows-11/a-new-xbox-mode-feature-will-make-it-easier-to-jump-back-to-the-desktop
- Pureinfotech, Build 26340.9750 for Windows 11 26H2 adds new XBOX mode controls: https://pureinfotech.com/build-26340-9750-windows-11-26h2/
- Microsoft Support, Windows Gaming: Xbox mode (full screen experience): https://support.microsoft.com/en-us/servicing/os/windows/docs/2025/10/windows-gaming-full-screen-experience
- Xbox Wire, Xbox Mode Begins Rolling Out to Players on Windows 11 PCs Today: https://news.xbox.com/en-us/2026/04/30/xbox-mode-pc-windows-11/
- Windows Command Line blog, The new Run dialog: faster, cleaner, and more capable: https://devblogs.microsoft.com/commandline/the-new-run-dialog-faster-cleaner-and-more-capable/
- Windows Insider Blog, Announcing new builds for 1 May 2026: https://blogs.windows.com/windows-insider/2026/05/01/announcing-new-builds-for-1-may-2026-and-extending-iso-support/
