---
title: "Why Windows 11 Still Has MS-DOS-Style File Names Like kernel32.dll and PROGRA~1"
description: "A Windows Latest piece revisits Raymond Chen's explanation of why core Windows files still fit the old 8.3 naming rule. Here's what Microsoft's own posts and documentation actually say, and where gamers might run into it."
summary: "A Windows Latest piece revisits Raymond Chen's explanation of why core Windows files still fit the old 8.3 naming rule. Here's what Microsoft's own posts and documentation actually say, and where gamers might run into it."
seoTitle: "Why Windows 11 Still Uses MS-DOS 8.3 File Names (PROGRA~1)"
pubDate: 2026-10-18
publishedAt: 2026-10-18T11:05:38-05:00
author: "Vet, VetTV Handheld"
category: windows
type: news
tags: ["windows-11","ms-dos","ntfs","pc-gaming","retro-gaming"]
cover: "covers/windows-11-ms-dos-8-3-file-names.jpg"
offTopic: true
sources:
  - title: "Windows Latest, Microsoft explains why Windows 11 still uses MS-DOS file names, and why it can't change them"
    url: "https://www.windowslatest.com/2026/10/18/microsoft-explains-why-windows-11-still-uses-ms-dos-file-names-and-why-it-cant-change-them/"
  - title: "The Old New Thing (Raymond Chen, 2007), Why do operating system files still adhere to the old 8.3 naming convention?"
    url: "https://devblogs.microsoft.com/oldnewthing/20070402-00/?p=27413"
  - title: "The Old New Thing (Raymond Chen, 2009), Why does MS-DOS use 8.3 filenames instead of, say, 11.2 or 16.16?"
    url: "https://devblogs.microsoft.com/oldnewthing/20090610-00/?p=17953"
  - title: "Microsoft Learn, Naming Files, Paths, and Namespaces"
    url: "https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file"
  - title: "Microsoft Learn, NTFS overview"
    url: "https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview"
  - title: "Microsoft Learn, fsutil 8dot3name"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/fsutil-8dot3name"
  - title: "Microsoft Learn, MS-FSCC 8.3 Filename"
    url: "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/18e63b13-ba43-4f5f-a5b7-11e871b71f14"
  - title: "Microsoft Learn, Resilient File System (ReFS) overview"
    url: "https://learn.microsoft.com/en-us/windows-server/storage/refs/refs-overview"
  - title: "Neowin, Microsoft warns against disabling Windows legacy feature that can unlock huge performance"
    url: "https://www.neowin.net/news/microsoft-warns-against-disabling-windows-legacy-feature-that-can-unlock-huge-performance/"
  - title: "OSnews, Windows' legacy 8.3 filename support actually negatively affects performance"
    url: "https://www.osnews.com/story/146073/windows-legacy-8-3-filename-support-actually-negatively-affects-performance/"
source: "Article Desk: windows-11-ms-dos-8-3-file-names.md"
---
Open C:\Windows\System32 on a brand-new Windows 11 PC and you'll find kernel32.dll, user32.dll and ntoskrnl.exe. Each of those names would have fit on an MS-DOS floppy. Windows Latest published a piece on October 18 under the headline "Microsoft explains why Windows 11 still uses MS-DOS file names, and why it can't change them."

One clarification up front: this isn't a new Microsoft statement. The explanation comes from two older posts on The Old New Thing, the Microsoft developer blog by longtime Windows engineer Raymond Chen. One is from April 2007 and the other from June 2009. In the 2007 post, Chen says he's brainstorming possible reasons, not giving official ones. Here's what he wrote, what Microsoft's documentation confirms, and why it still matters.

## What an 8.3 name is

An 8.3 name allows up to eight characters for the base name and up to three for the extension. With the dot, that's 12 characters at most. Microsoft's file naming documentation calls this the limit of the "older MS-DOS FAT file system." Microsoft's file system protocol specification adds three more rules: an 8.3 name can use only ASCII characters, can't contain spaces, and can't have more than one period.

Why eight and three? In his 2009 post, Chen says it's a holdover from CP/M, the earlier operating system MS-DOS worked hard to stay compatible with. He also admits he doesn't know why CP/M chose those numbers. He points out that two reserved bytes in CP/M's directory format could have allowed 10.3 names, and guesses that eight simply seemed convenient.

## Why Windows' own files still follow the rule

Chen's 2007 post gives several possible reasons. In my own words:

- **A DLL's name is permanent.** Programs link to a DLL by name. Rename it and every program looking for the old name breaks.
- **Old system drives had no long names.** Windows 95 didn't require the system volume to support long file names, because some companies relied on servers that couldn't handle them. Chen believes Windows NT still allowed a short-names-only FAT system volume as late as Windows 2000. Long file names became mandatory only with Windows XP. Any DLL from those eras had to be 8.3.
- **Short-name aliases cause their own problems.** If a long-named file is copied into a folder next to a similar name, its generated short name can change. Chen's example: shellstyle.dll might end up as SHELLS~2.DLL because shellstuff.dll already took SHELLS~1.DLL. Some programs hard-code short names. Chen notes that "a lot of programs" assume Program Files is C:\PROGRA~1.
- **One DLL, two copies.** Chen shows that the Windows loader treats a DLL's short and long names as separate modules. Load the same DLL both ways and the process ends up with two copies in memory, each with its own global variables.
- **Better the devil you know.** His closing reason: the problems with 8.3 names are understood and under control. Switching would mean discovering a whole new set of problems.

## What Microsoft's documentation says about short names today

Raymond Chen's posts are opinion and history. Microsoft Learn is where the current behavior is documented:

- **NTFS keeps long names and short aliases.** NTFS supports long file names (up to 255 characters, per Microsoft's file naming documentation). It can also store an 8.3 alias for compatibility with software that expects one. Microsoft's naming documentation says that when Windows creates a long file name, it "may also create" a short 8.3 form. It also warns developers not to assume a short name exists, because generation can be turned off.
- **Short names stay on for the system drive.** Microsoft's NTFS overview says short names are disabled by default when Windows formats a new volume (since Windows Server 2008 R2). It also says short names "still are enabled on the system volume" for app compatibility. That's why PROGRA~1 still exists on a typical C: drive.
- **You can control it with fsutil 8dot3name.** The command can query the setting, scan a folder for registry entries that point to short names, change name creation globally or per volume, and strip existing short names from a folder. Microsoft's page lists Windows 11 as supported and warns that removing short names without fixing registry entries that point to them "may lead to unexpected application failures, including the inability to uninstall an application."
- **The MAX_PATH connection.** Before Windows 10 version 1607, Windows paths were limited to MAX_PATH, 260 characters. Since then, removing the limit requires a registry change or Group Policy. The fsutil strip command also skips any file whose full path is longer than 260 characters.
- **ReFS drops short names.** Microsoft's ReFS overview lists short names as unavailable on ReFS. It notes that they aren't officially supported there and that many are simulated through symlinks.

## Where gamers might notice

Most people never see a short name, and most current games don't care. But two situations are worth knowing about.

First, old software. Chen's point about programs hard-coding C:\PROGRA~1 applies to old installers, launchers and scripts from that era. If you're reviving a classic PC game on a Windows handheld or desktop, an ancient installer may expect short names to exist. They do on a normal Windows 11 system drive.

Second, the "speed tweak." Last month, Neowin reported on a Reddit user who said disabling 8.3 name creation and stripping existing short names made Explorer and big file copies noticeably snappier. As Neowin noted, those were one user's observations, not controlled benchmarks. Microsoft's warning about broken uninstallers applies to game libraries just as much as to anything else.

**My take (opinion):** I wouldn't strip short names from a game library or the system drive to chase a possible Explorer speedup, especially on a handheld where fixing a broken uninstaller isn't fun. If you want to experiment, Microsoft's own tools let you run fsutil 8dot3name scan or strip in test mode (/t) first and back up before changing anything.

## Bottom line

Windows 11's DOS-style system file names aren't an oversight. They're the result of decades of software that depends on those exact names. As Raymond Chen put it back in 2007, the old problems are known and under control, and changing them would only create new ones.

---

## Sources

- Windows Latest, Microsoft explains why Windows 11 still uses MS-DOS file names, and why it can't change them: https://www.windowslatest.com/2026/10/18/microsoft-explains-why-windows-11-still-uses-ms-dos-file-names-and-why-it-cant-change-them/
- The Old New Thing (Raymond Chen, 2007), Why do operating system files still adhere to the old 8.3 naming convention?: https://devblogs.microsoft.com/oldnewthing/20070402-00/?p=27413
- The Old New Thing (Raymond Chen, 2009), Why does MS-DOS use 8.3 filenames instead of, say, 11.2 or 16.16?: https://devblogs.microsoft.com/oldnewthing/20090610-00/?p=17953
- Microsoft Learn, Naming Files, Paths, and Namespaces: https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file
- Microsoft Learn, NTFS overview: https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview
- Microsoft Learn, fsutil 8dot3name: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/fsutil-8dot3name
- Microsoft Learn, MS-FSCC 8.3 Filename: https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/18e63b13-ba43-4f5f-a5b7-11e871b71f14
- Microsoft Learn, Resilient File System (ReFS) overview: https://learn.microsoft.com/en-us/windows-server/storage/refs/refs-overview
- Neowin, Microsoft warns against disabling Windows legacy feature that can unlock huge performance: https://www.neowin.net/news/microsoft-warns-against-disabling-windows-legacy-feature-that-can-unlock-huge-performance/
- OSnews, Windows' legacy 8.3 filename support actually negatively affects performance: https://www.osnews.com/story/146073/windows-legacy-8-3-filename-support-actually-negatively-affects-performance/
