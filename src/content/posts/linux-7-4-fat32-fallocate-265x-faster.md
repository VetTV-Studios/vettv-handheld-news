---
title: "Linux 7.4 Makes FAT32 Space Preallocation Up to 265x Faster"
description: "A three-patch fix lets the kernel's FAT driver grab many clusters at once instead of one at a time, and the biggest gains land on sync-mounted SD cards and USB drives"
summary: "A three-patch fix lets the kernel's FAT driver grab many clusters at once instead of one at a time, and the biggest gains land on sync-mounted SD cards and USB drives"
pubDate: 2026-10-30
publishedAt: 2026-10-30T07:41:32.000Z
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["linux","linux-kernel","fat32"]
offTopic: true
cover: "covers/linux-7-4-fat32-fallocate-265x-faster.png"
sources:
  - title: "Linux kernel mailing list: PATCH v2 3/3 \"fat: allocate multiple clusters in fallocate\""
    url: "https://lore.kernel.org/all/20261012171106.146243-4-matheus.aalmeida@inf.ufrgs.br/"
  - title: "Linux kernel mailing list: PATCH v2 0/3 cover letter"
    url: "https://lore.kernel.org/all/20261012171106.146243-1-matheus.aalmeida@inf.ufrgs.br/"
  - title: "LKML archive: maintainer ack from OGAWA Hirofumi"
    url: "https://lkml.iu.edu/2610.1/12174.html"
  - title: "Phoronix: FAT32 seeing as much as 265x improvement with Linux 7.4"
    url: "https://www.phoronix.com/news/Linux-7.4-Faster-FAT32"
source: "Article Desk: linux-7-4-fat32-fallocate-265x-faster.md"
---
FAT32 is old, but it's still the format on most SD cards, USB sticks and EFI system partitions, including the microSD cards that go into a lot of handhelds. Linux 7.4 gets a small change that makes one FAT32 operation dramatically faster.

## What changed

Developer Matheus Alves de Almeida sent a three-patch series titled "fat: allocate multiple clusters in fallocate." When a program reserves disk space for a file with fallocate() and the FALLOC_FL_KEEP_SIZE flag, which sets aside space without changing the file's reported size, the FAT driver used to allocate it one cluster at a time in a loop. The final patch replaces that loop with a single call that adds every needed cluster at once. That patch touches only one file, with four lines added and six removed. FAT maintainer OGAWA Hirofumi acked it on the kernel mailing list. Phoronix reports the series was merged this week for Linux 7.4 through Andrew Morton's non-MM pull request.

## The numbers

The benchmarks in the patch were run under QEMU/KVM on a virtio-blk disk with caching disabled. On a regular mount, preallocation was roughly 5x to 19x faster. On a synchronous mount, where every change is written to disk right away, the gains were far larger because FAT updates can now be batched. On FAT32 with 4 KiB clusters, preallocating 16 files of 16 MiB each dropped from about 92.5 seconds to 0.35 seconds, a 265.4x improvement. With 512-byte clusters, a similar test went from about 748 seconds to 3.4 seconds (217x).

## What it doesn't change

This speeds up space preallocation only. It isn't a general boost to FAT32 read or write speeds. The developer also notes that a separate multi-cluster TODO in the driver remains unimplemented, because doing it would require speculative preallocation or an iomap conversion. The improvement arrives when Linux 7.4 is released and your distro ships it.
