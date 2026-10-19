---
title: "ReactOS Swaps \"Documents and Settings\" for C:\\Users in Its Latest NT6 Development Work"
description: "A newly merged change moves ReactOS to the Windows Vista-style folder layout. It's in nightly development builds, not a release, and it's one more step in the project's slow move toward NT6 (Vista and 7) compatibility."
summary: "A newly merged change moves ReactOS to the Windows Vista-style folder layout. It's in nightly development builds, not a release, and it's one more step in the project's slow move toward NT6 (Vista and 7) compatibility."
seoTitle: "ReactOS Moves to C:\\Users: What the NT6 Folder Change Means"
pubDate: 2026-10-18
publishedAt: 2026-10-18T14:27:18-05:00
author: "Vet, VetTV Handheld"
category: retro-emulation-cloud
tags: ["reactos","open-source","windows-compatibility","operating-systems","retro-computing"]
cover: "covers/reactos-nt6-users-folder.jpg"
offTopic: true
sources:
  - title: "ReactOS on X, \"Documents and Settings directory is now history\" (Oct 18, 2026)"
    url: "https://x.com/reactos/status/2111855011122590130"
  - title: "GitHub, ReactOS PR #9573, [USERENV][SHELL32] Sync shellpath.c, use Vista+ file paths"
    url: "https://github.com/reactos/reactos/pull/9573"
  - title: "ReactOS JIRA, CORE-20789"
    url: "https://jira.reactos.org/browse/CORE-20789"
  - title: "GitHub, ReactOS commit e386343 (build in the screenshots)"
    url: "https://github.com/reactos/reactos/commit/e386343489c869ded6ccf3cb49b9d14a6671279d"
  - title: "GitHub, ReactOS draft PR #9598, Retarget ReactOS to NT6.0 across the repo"
    url: "https://github.com/reactos/reactos/pull/9598"
  - title: "ReactOS, Architecture (kernel targets NT 5.2)"
    url: "https://reactos.org/architecture/"
  - title: "ReactOS on GitHub, project README"
    url: "https://github.com/reactos/reactos"
  - title: "ReactOS, Introducing ReactOS 0.4.16 (Aug 29, 2026)"
    url: "https://reactos.org/project-news/reactos-0416-released/"
  - title: "ReactOS, ReactOS 0.4.15 released (Mar 21, 2025)"
    url: "https://reactos.org/project-news/reactos-0415-released/"
  - title: "Phoronix, ReactOS 0.4.16 Released With New Graphical Installer, Better Hardware Support"
    url: "https://www.phoronix.com/news/ReactOS-0.4.16-Released"
  - title: "Phoronix, ReactOS Implements First Windows NT6 System Call In Step Toward Vista Compatibility"
    url: "https://www.phoronix.com/news/ReactOS-First-NT6-Syscall"
  - title: "Neowin, ReactOS marks big milestone with its first NT6 era system call"
    url: "https://www.neowin.net/news/reactos-marks-big-milestone-with-its-first-nt6-era-system-call-that-does-nothing-yet/"
  - title: "Phoronix, ReactOS Starts 2026 With Another \"Major Step\" Toward Windows NT6 Compatibility"
    url: "https://www.phoronix.com/news/ReactOS-Starts-2026"
  - title: "Phoronix, ReactOS Merges Support For Job Objects"
    url: "https://www.phoronix.com/news/ReactOS-Job-Objects"
  - title: "Microsoft Learn, Managing Roaming User Data Deployment Guide (Windows Vista profile changes)"
    url: "https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-vista/cc766489(v=ws.10)"
  - title: "Microsoft Learn, Profiles Directory"
    url: "https://learn.microsoft.com/en-us/windows/win32/shell/profiles-directory"
source: "Article Desk: reactos-nt6-users-folder.md"
---
ReactOS, the open-source operating system that aims to run Windows apps and drivers, posted a small but telling milestone on X on October 18 at 11:20 AM CT: "Documents and Settings directory is now history. Welcome, Users!" The post adds that this shows "#ReactOS being transitioned to NT6!"

This is development work, not a new ReactOS release. Here's what changed, what the screenshots show, and why a folder name matters for app compatibility.

## What the screenshots show

The post includes two screenshots of a ReactOS desktop. I'll describe only what's visible in them:

- **First screenshot:** a file window titled "Local Disk (C:)" with "C:\Documents and Settings" typed in the address bar. The list shows six items: Program Files, ProgramData (flagged with the H, hidden, attribute), ReactOS and Users folders, plus BOOTSECT.OLD and mbr.old files. There's no Documents and Settings folder in the list.
- **Second screenshot:** the C:\Users folder, containing four folders: Administrator, Default, NetworkService and Public.
- **Desktop text:** both screenshots show "ReactOS Version 0.4.17-x86-dev" and a build string of "20261018-0.4.17-dev-1184-ge386343". The build still reports "NT 5.2 (Build 3790: Service Pack 2)."

That last line matters. The folder layout is now Vista-style, but in these screenshots, this build still identifies itself as NT 5.2, the Windows Server 2003 kernel version.

## The change behind it

The work landed in ReactOS pull request #9573, "[USERENV][SHELL32] Sync shellpath.c, use Vista+ file paths," by MishaProductions (Mikhail Tyukin). It was merged on October 17, 2026, at about 2:53 PM CT. According to the PR description, it:

- Switches ReactOS to Windows Vista file paths.
- Syncs the shell's folder-path code with Wine 11.16 to support SHGetKnownFolderPath, the Vista-era API apps use to find folders like Documents and AppData.
- Publishes the %localappdata% environment variable, with %programdata% and %public% added along the way.
- Moves the live image and the user-profile component (userenv) to the new paths.
- Adds kernel32 stubs to let Unity games launch on "Windows 7 builds."

The PR's to-do list marks moving service profiles to %systemroot%\ServiceProfiles as out of scope. That fits with NetworkService still appearing under C:\Users in the screenshot. The related tracker ticket, CORE-20789, describes the same goals.

The build in the screenshots matches. Its commit hash, e386343, is a ReactOS commit from early October 18 that GitHub shows as six commits ahead of the PR's merge commit, so the build includes this change.

## Why C:\Users matters

Windows XP and Server 2003 (NT 5.x) kept user profiles under C:\Documents and Settings, with folders like My Documents and Application Data. Windows Vista (NT 6.0) moved profiles to C:\Users, renamed many folders, and introduced AppData\Roaming, AppData\Local and AppData\LocalLow. Vista also renamed the "All Users" profile to "Public." Microsoft's Vista deployment guide documents all of this, along with the junction points Vista added so older apps that still wrote to XP-style paths would be redirected.

For app compatibility, a few things follow:

- **Software built for Vista and later expects this layout.** Apps and games that use SHGetKnownFolderPath, or that expect folders like AppData\Local or Saved Games, are written for the NT6 structure. Matching it means fewer special cases. The PR describes switching to Vista paths as "needed to avoid many hacks."
- **Well-behaved apps shouldn't care.** Microsoft's guidance is to ask Windows for folder locations (GetProfilesDirectory, SHGetFolderPath, SHGetKnownFolderPath) instead of hard-coding them. The real wins come from making those APIs return what Vista-era software expects.
- **Hard-coded old paths are the risk.** In a comment on the PR after it merged, ReactOS developer whindsaks argued that apps that break on the new layout would also have broken on Vista. He also noted that "Documents and Settings" was translated in non-English versions of Windows 2000, XP and 2003.

I didn't find anything showing whether ReactOS now creates a compatibility junction at C:\Documents and Settings the way Windows Vista does. The first screenshot alone doesn't settle that question.

## Where ReactOS stands

- **Official target:** ReactOS's architecture page says its kernel "currently targets NT 5.2," and the GitHub README says the project is focused on Windows Server 2003 compatibility while keeping an eye on Vista and later.
- **NT6 progress in 2026:**
  - In January, Phoronix covered a Wine 10.0 sync of ReactOS's MSVCRT that the project called a "major step" for NT6.
  - In July, Phoronix and Neowin covered its first NT6 system call (NtGetCurrentProcessorNumberEx).
  - In August, Phoronix covered basic Job Objects support.
  - A broader draft PR (#9598, "Retarget ReactOS to NT6.0 across the repo") is still open.
- **Latest release:** ReactOS 0.4.16, released August 29, 2026. It includes a new graphical installer and a combined live/install image. Before that came 0.4.15 on March 21, 2025. The C:\Users change is in 0.4.17 development builds and isn't part of any release.

## My take (opinion)

Renaming a folder sounds cosmetic, but for a project trying to run Vista- and 7-era software, matching the folder layout those apps expect is basic groundwork. Moments like this make the NT6 effort feel real. That said, the build still reports NT 5.2, ReactOS is alpha software, and the wider NT6 retarget is still a draft. I'd treat this as encouraging progress, not a sign that Vista-era games will suddenly run.

---

## Sources

- ReactOS on X, "Documents and Settings directory is now history" (Oct 18, 2026): https://x.com/reactos/status/2111855011122590130
- GitHub, ReactOS PR #9573, [USERENV][SHELL32] Sync shellpath.c, use Vista+ file paths: https://github.com/reactos/reactos/pull/9573
- ReactOS JIRA, CORE-20789: https://jira.reactos.org/browse/CORE-20789
- GitHub, ReactOS commit e386343 (build in the screenshots): https://github.com/reactos/reactos/commit/e386343489c869ded6ccf3cb49b9d14a6671279d
- GitHub, ReactOS draft PR #9598, Retarget ReactOS to NT6.0 across the repo: https://github.com/reactos/reactos/pull/9598
- ReactOS, Architecture (kernel targets NT 5.2): https://reactos.org/architecture/
- ReactOS on GitHub, project README: https://github.com/reactos/reactos
- ReactOS, Introducing ReactOS 0.4.16 (Aug 29, 2026): https://reactos.org/project-news/reactos-0416-released/
- ReactOS, ReactOS 0.4.15 released (Mar 21, 2025): https://reactos.org/project-news/reactos-0415-released/
- Phoronix, ReactOS 0.4.16 Released With New Graphical Installer, Better Hardware Support: https://www.phoronix.com/news/ReactOS-0.4.16-Released
- Phoronix, ReactOS Implements First Windows NT6 System Call In Step Toward Vista Compatibility: https://www.phoronix.com/news/ReactOS-First-NT6-Syscall
- Neowin, ReactOS marks big milestone with its first NT6 era system call: https://www.neowin.net/news/reactos-marks-big-milestone-with-its-first-nt6-era-system-call-that-does-nothing-yet/
- Phoronix, ReactOS Starts 2026 With Another "Major Step" Toward Windows NT6 Compatibility: https://www.phoronix.com/news/ReactOS-Starts-2026
- Phoronix, ReactOS Merges Support For Job Objects: https://www.phoronix.com/news/ReactOS-Job-Objects
- Microsoft Learn, Managing Roaming User Data Deployment Guide (Windows Vista profile changes): https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-vista/cc766489(v=ws.10)
- Microsoft Learn, Profiles Directory: https://learn.microsoft.com/en-us/windows/win32/shell/profiles-directory
