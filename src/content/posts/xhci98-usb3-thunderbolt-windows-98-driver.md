---
title: "xHCI98 Brings USB 3 and Thunderbolt NVMe to Windows 98 SE"
description: "Yeo Kheng Meng's open driver now runs USB 3 at full SuperSpeed on Windows 98 SE through 7, with experimental USB4 and Thunderbolt support"
summary: "Yeo Kheng Meng's open driver now runs USB 3 at full SuperSpeed on Windows 98 SE through 7, with experimental USB4 and Thunderbolt support"
pubDate: 2026-10-29
publishedAt: 2026-10-29T17:52:01.000Z
author: "Vet, VetTV Studios"
category: open-nt
type: news
tags: ["windows-98","retro-pc","usb"]
offTopic: true
cover: "covers/xhci98-usb3-thunderbolt-windows-98-driver.png"
sources:
  - title: "xHCI98 on GitHub"
    url: "https://github.com/yeokm1/xhci98"
  - title: "Yeo Kheng Meng: Bringing USB 3 and USB4/Thunderbolt to Windows 98 to 10"
    url: "https://yeokhengmeng.com/2026/10/xhci98-usb3-usb4/"
  - title: "Yeo Kheng Meng: xHCI98 original release"
    url: "https://yeokhengmeng.com/2026/08/xhci98-usb-host-driver/"
  - title: "Hackaday: Thunderbolt Strikes Windows98"
    url: "https://hackaday.com/2026/10/18/thunderbolt-strikes-windows98/"
source: "Article Desk: xhci98-usb3-thunderbolt-windows-98-driver.md"
---
Modern PCs have one kind of USB controller, xHCI, and Windows 98 SE, ME, 2000, XP, Vista and 7 never shipped a driver for it. On those machines, keyboards and flash drives lean on BIOS legacy support, nothing hot-plugs, and USB Ethernet or audio don't work at all. Developer Yeo Kheng Meng's xHCI98 driver fills that gap, and its latest version adds full USB 3 speeds plus experimental USB4 and Thunderbolt support.

## From USB 2 speeds to SuperSpeed

The first xHCI98 release in August only drove the USB 2.0 side of the controller, which Yeo says capped a USB 3.0 flash drive at about 34 MB/s. In his October 17 blog post he explains that version 2 stopped plugging into Microsoft's own `usbport.sys` and took over the port, hub and composite-device roles itself, which opened up real USB 3 speeds. Existing Windows class drivers still sit on top, so third-party device drivers keep working.

The project's GitHub page lists support for USB 3.2 Gen 1 (5 Gbit/s), SuperSpeedPlus at 10 and 20 Gbit/s, USB 2.0 and 1.1 devices and hubs, and UAS storage through a second driver, `xhciuas.sys`. Device Manager names 107 USB 3 controllers from Intel, AMD, ASMedia, Renesas, VIA, Fresco Logic and others.

## Thunderbolt and USB4

A third driver, `xhcicm.sys`, handles Thunderbolt 3 and USB4 docks, enclosures and NVMe cases. Devices inside them show up in Device Manager within seconds of being plugged in. On Intel Thunderbolt controllers whose firmware runs its own connection manager, the driver approves what the firmware announces. On USB4 hosts without one, including AMD and Intel Lunar Lake and later, the driver acts as the connection manager and builds the tunnels itself. That USB4/Thunderbolt support also covers Windows 8, 8.1 and 10, which already have native USB 3 drivers.

## The numbers

With an ORICO USB4 NVMe enclosure on a ThinkPad P14s Gen 1's Thunderbolt 3 port, the GitHub page shows CrystalDiskMark sequential speeds of 1,151 MB/s read and 1,013 MB/s write on Windows 7. On Windows 98 SE the same enclosure reaches 1,020 MB/s read and 891 MB/s write with the bundled `S98VSD.VXD` storage driver. Without it, Windows 98's own storage stack holds the drive to about 210 MB/s read and 256 MB/s write.

## Read the warnings first

Yeo calls xHCI98 "a solo human's project with AI assistance, so bugs are not unexpected." Windows 98 SE and Windows 2000 SP4 are the primary targets. Real-hardware testing covers Windows 98 SE on ThinkPad E460 and P14s Gen 1 machines and Windows XP x64 and 7 x64 on a Dell Latitude E7250; every other target, Windows 2000 included, has only run in QEMU. Known issues include needing a PS/2 or built-in keyboard during an XP F6 install, test-signing mode on 64-bit Vista and 7, and no standby or hibernation with a Thunderbolt or USB4 device attached. Try it on a machine you can afford to reinstall, and back up anything you care about first.
