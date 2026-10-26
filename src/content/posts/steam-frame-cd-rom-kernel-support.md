---
title: "Steam Frame's Kernel Can Now Read CD-ROMs, a Day After One Owner Asked"
description: "A Valve developer replied to a forum request for optical drive support, then enabled three long-standing Linux drivers in the Frame's kernel config minutes later. It's in the source, not in a Steam Frame update yet."
summary: "A Valve developer replied to a forum request for optical drive support, then enabled three long-standing Linux drivers in the Frame's kernel config minutes later. It's in the source, not in a Steam Frame update yet."
seoTitle: "Steam Frame Kernel Gets CD-ROM Support After a Forum Request"
pubDate: 2026-10-26
publishedAt: 2026-10-26T19:38:28.516Z
author: "Vet, VetTV Studios"
category: steamos-news
tags: ["steam-frame","steamos","valve","linux-kernel","vr"]
cover: "covers/steam-frame-cd-rom-kernel-support.jpg"
offTopic: true
sources:
  - title: "PC Gamer, James Bentley, \"Valve adds CD-ROM support to Steam Frame kernel less than ten minutes after saying it would look into it\""
    url: "https://www.pcgamer.com/hardware/vr-hardware/valve-adds-cd-rom-support-to-steam-frame-kernel-less-than-ten-minutes-after-saying-it-would-look-into-it/"
  - title: "Steam Frame forum thread, \"Why can't I use my detachable disc drive?\""
    url: "https://steamcommunity.com/app/4165890/discussions/0/571552431431751057/"
  - title: "Commit b68e4a1 (evlaV mirror of the Steam Frame kernel)"
    url: "https://github.com/evlaV/deckard-linux-no-oopsies/commit/b68e4a18b07b527336e8e42db5381d84f82daab0"
  - title: "Tom's Hardware, \"Valve adds CD-ROM drive support to Steam Frame kernel\""
    url: "https://www.tomshardware.com/virtual-reality/valve-adds-cd-rom-drive-support-to-steam-frame-kernel-took-less-than-ten-minutes-update-comes-one-day-after-user-requests-for-capability-in-the-steam-community-forum"
  - title: "Output Lag, \"Valve added CD-ROM support to the Steam Frame kernel a day after one player asked\""
    url: "https://outputlag.com/news/valve-steam-frame-cd-rom-support-kernel-commit-forum-request/"
source: "Article Desk: steam-frame-cd-rom-kernel-support.md"
---
Valve sometimes moves fast on the small stuff. PC Gamer reported today, following Tom's Hardware, that the Steam Frame's kernel picked up CD-ROM support within minutes of a Valve developer replying to a forum request. I went to the forum thread and the commit itself to check the details.

## The request

On **October 18**, Steam Frame owner **Aiodensghost** started a thread in the Steam Frame General Discussions forum titled "Why can't I use my detachable disc drive?" They'd tried to use an external disc drive to watch a movie on the road. They found two problems:

- **Power:** The Frame couldn't power the drive.
- **Drivers:** Even if it could, it didn't have the drivers to read a disc.

They also wanted to install Need for Speed Carbon from its 2006 disc, since the game isn't sold digitally anymore. Their closing line: "May I PLEASE have the ability to use an optical drive?"

## Valve's reply and the commit

On **October 19**, Valve's **gaberowe** replied in the thread: "we will look into this thanks for alerting us."

Shortly afterward, a commit by **Gabe Rowe** (with a valvesoftware.com email address) appeared in the Frame's kernel sources. It's commit b68e4a1, dated **October 19 at 2:51 PM CT**. The message reads "gabe_defconfig: add support for cdrom drives for parity with steamdeck/machine."

The forum shows the reply at 12:43 PM. Output Lag reports that Steam displays forum times in Pacific by default, which would make the reply 2:43 PM CT. That fits the "minutes later" gap, but I couldn't independently confirm the forum's time zone.

## What actually changed

The diff touches one file, the Frame's arm64 kernel config (arch/arm64/configs/gabe_defconfig). It turns on three existing Linux options as loadable modules:

- **CONFIG_CDROM:** The generic CD-ROM layer.
- **CONFIG_BLK_DEV_SR:** The SCSI CD-ROM driver that USB optical drives use.
- **CONFIG_CHR_DEV_SG:** The SCSI generic interface that disc tools use.

So no new code was written. These are standard kernel drivers that were simply switched off in the Frame's config, and the commit message says the change brings it in line with Steam Deck and Steam Machine.

## What it doesn't mean yet

- **It's not on your headset:** This is a change to the kernel source, not an update. Valve hasn't mentioned it in any release notes, and there's no date for when it'll ship in SteamOS for the Frame.
- **Power is still a problem:** The original poster said the Frame couldn't power their drive. In a later reply, they said the kernel change is "good enough for me." They plan to use a USB hub that can power the drive, though they haven't found one that works yet.
- **The repo is a mirror:** The repository PC Gamer and Tom's point to, deckard-linux-no-oopsies on GitHub, is under the evlaV account. That account describes itself as an "unofficial mirror for SteamOS repositories" that updates automatically. The commit's author is Valve's, but the GitHub page isn't Valve's own.

## Notes on PC Gamer's framing

PC Gamer's piece is a fair summary, with a few things worth adding:

- **The developer's name:** PC Gamer spells the username "gaberow" in one spot. The forum shows "gaberowe."
- **"Patched in kernel support":** It's accurate, but the change only enables existing drivers in the config file. It doesn't add new code.
- **Building it yourself:** PC Gamer notes you could install the kernel from that repo yourself. Since the repo is an unofficial mirror and building your own kernel for the headset is far from a one-click job, I'd wait for an official SteamOS update.

## My take (opinion)

This is my opinion. It's a small change, but it's the kind that builds goodwill: a single forum post, a reply, and a commit "for parity with steamdeck/machine." Disc drives on a VR headset will always be niche, and power is still the real hurdle. Still, it's nice to see Valve treat the Frame like the Linux PC it is. None of this is hands-on.

---

## Sources
- PC Gamer, James Bentley, "Valve adds CD-ROM support to Steam Frame kernel less than ten minutes after saying it would look into it": https://www.pcgamer.com/hardware/vr-hardware/valve-adds-cd-rom-support-to-steam-frame-kernel-less-than-ten-minutes-after-saying-it-would-look-into-it/
- Steam Frame forum thread, "Why can't I use my detachable disc drive?": https://steamcommunity.com/app/4165890/discussions/0/571552431431751057/
- Commit b68e4a1 (evlaV mirror of the Steam Frame kernel): https://github.com/evlaV/deckard-linux-no-oopsies/commit/b68e4a18b07b527336e8e42db5381d84f82daab0
- Tom's Hardware, "Valve adds CD-ROM drive support to Steam Frame kernel": https://www.tomshardware.com/virtual-reality/valve-adds-cd-rom-drive-support-to-steam-frame-kernel-took-less-than-ten-minutes-update-comes-one-day-after-user-requests-for-capability-in-the-steam-community-forum
- Output Lag, "Valve added CD-ROM support to the Steam Frame kernel a day after one player asked": https://outputlag.com/news/valve-steam-frame-cd-rom-support-kernel-commit-forum-request/
