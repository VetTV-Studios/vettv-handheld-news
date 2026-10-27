---
title: "Windows Will Block ReFS on USB Drives and SD Cards in January. FAT32, exFAT and NTFS Aren't Affected"
description: "Microsoft's KB5130741 starts with audit logging now and blocks ReFS volumes on removable media from mounting by default in January 2027, on Windows 10, Windows 11 and Windows Server."
summary: "Microsoft's KB5130741 starts with audit logging now and blocks ReFS volumes on removable media from mounting by default in January 2027, on Windows 10, Windows 11 and Windows Server."
seoTitle: "Windows to block ReFS USB drives and SD cards in January 2027: what's affected"
pubDate: 2026-10-26
publishedAt: 2026-10-26T19:39:58.184Z
author: "Vet, VetTV Studios"
category: windows
type: news
tags: ["windows","windows-11","refs","windows-update","usb","storage"]
cover: "covers/windows-refs-removable-media-block-2027.jpg"
offTopic: true
sources:
  - title: "Microsoft Support: KB5130741, Hardening changes for ReFS volumes on removable media (Oct. 13, 2026)"
    url: "https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/10/hardening-changes-for-refs-volumes-on-removable-media"
  - title: "PC World: Windows 11 will lock the file system on some USB sticks and SD cards in 2027 (Oct. 26, 2026)"
    url: "https://www.pcworld.com/article/3267230/microsoft-locks-the-file-system-on-usb-sticks-and-sd-cards-heres-why.html"
  - title: "Windows Latest (Oct. 18, 2026)"
    url: "https://www.windowslatest.com/2026/10/18/windows-11-will-block-refs-on-usb-drives-even-as-microsoft-bets-big-on-its-ntfs-alternative/"
  - title: "Neowin"
    url: "https://www.neowin.net/news/microsoft-not-a-fan-of-refs-on-removable-media-hardening-windows-11-against-it/"
source: "Article Desk: windows-refs-removable-media-block-2027.md"
---
[PC World reported today](https://www.pcworld.com/article/3267230/microsoft-locks-the-file-system-on-usb-sticks-and-sd-cards-heres-why.html) that Windows 11 will "lock" the file system on some USB sticks and SD cards in 2027. The change is real, but it's much narrower than that sounds. It affects only drives formatted with **ReFS**, Microsoft's Resilient File System, and only when they're connected as removable or external storage. If your drives use FAT32, exFAT or NTFS, nothing changes.

The primary source is Microsoft's support article **[KB5130741, "Hardening changes for ReFS volumes on removable media"](https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/10/hardening-changes-for-refs-volumes-on-removable-media)**, published Oct. 13, 2026. [Windows Latest](https://www.windowslatest.com/2026/10/18/windows-11-will-block-refs-on-usb-drives-even-as-microsoft-bets-big-on-its-ntfs-alternative/) and [Neowin](https://www.neowin.net/news/microsoft-not-a-fan-of-refs-on-removable-media-hardening-windows-11-against-it/) reported it the same week.

## What changes, and when

- **Now (Oct. 13, 2026 security update and later): audit only.** Windows logs a warning when it finds a ReFS volume on a removable or externally attached disk. It's **Event ID 524** from source ReFS in the System log, recorded once per volume per boot. Nothing is blocked.
- **January 2027 security update: blocked by default.** ReFS volumes on removable or external media won't mount unless an administrator changes the setting. Microsoft only says "January 2027 security update." Patch Tuesday that month falls on Jan. 12, but Microsoft hasn't named the date itself.

The block works at the mount level. Microsoft's guidance is to make sure the data is also stored somewhere supported. The block stops Windows from opening the volume, and it doesn't wipe the files.

## Who it affects

- **File system:** ReFS only. Microsoft has never supported ReFS on removable media, and this change turns that existing rule into a default block.
- **Devices:** ReFS volumes on removable media such as USB drives, and on what Microsoft's event text calls "externally attached" disks. *Flag:* Microsoft refers to "either configured external-media condition" but doesn't spell out the two conditions. An ReFS-formatted external SSD in a USB enclosure may be affected too, not just thumb drives and SD cards.
- **Windows versions:** it's not just Windows 11. The article lists Windows 10 22H2 and the Windows 10 LTSB/LTSC releases, Windows 11 22H2 through 26H1, and Windows Server 2012 ESU through Server 2025.

## What you can do

1. **Check whether you're affected.** Open Event Viewer, go to Windows Logs > System, and filter for **Event ID 524 from source ReFS**. If nothing shows up after you plug in your drives, you're fine.
2. **Move the data off before January.** Copy anything important from an external ReFS volume somewhere else, then reformat the drive as exFAT (best for moving files between devices) or NTFS.
3. **Or change the policy, if you know what you're doing.** Microsoft added a setting called **RefsRemovableDeviceMountPolicy**: 0 = Off, 1 = Audit (default), 2 = Block. You can set it with Group Policy, stored under HKLM\SYSTEM\CurrentControlSet\Policies, or with the registry at HKLM\SYSTEM\CurrentControlSet\Control\FileSystem. Group Policy wins if both are set, and you have to restart for a change to take effect. *Our read:* Microsoft says that if no override is configured, blocking becomes the default in January. That suggests an explicit Off or Audit setting would keep the drive mounting, but Microsoft doesn't say so directly. This configuration is unsupported either way.

## Correcting the framing

- **Windows isn't dropping a file system.** ReFS still works on internal drives. Only ReFS on removable or external media is affected.
- **The drives aren't unusable.** You can reformat them, or an admin can change the policy.
- **Microsoft did give a reason.** PC World says Microsoft didn't explain the change. KB5130741 cites a stronger "security posture," "reduced exposure" from unsupported external ReFS setups, and a phased rollout so administrators can audit first. It doesn't describe a specific vulnerability.
- **Since Oct. 13, Windows has been logging these drives, not warning people they'll stop working.** Windows Latest also reported seeing an alert from the system tray's removable-device icon in its own testing. We haven't confirmed that ourselves.

*Opinion:* Very few people format a thumb drive as ReFS, since Windows doesn't offer it as a standard option for removable media. The people most likely to notice are homelab users and tinkerers who forced ReFS onto external backup drives. If that's you, you have until January to move your data.

*VetTV hasn't tested this change. Everything above comes from Microsoft's KB article and the linked reports.*

## Sources

- [Microsoft Support: KB5130741, Hardening changes for ReFS volumes on removable media (Oct. 13, 2026)](https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/10/hardening-changes-for-refs-volumes-on-removable-media)
- [PC World: Windows 11 will lock the file system on some USB sticks and SD cards in 2027 (Oct. 26, 2026)](https://www.pcworld.com/article/3267230/microsoft-locks-the-file-system-on-usb-sticks-and-sd-cards-heres-why.html)
- [Windows Latest (Oct. 18, 2026)](https://www.windowslatest.com/2026/10/18/windows-11-will-block-refs-on-usb-drives-even-as-microsoft-bets-big-on-its-ntfs-alternative/)
- [Neowin](https://www.neowin.net/news/microsoft-not-a-fan-of-refs-on-removable-media-hardening-windows-11-against-it/)
