---
title: "Valve Index Is Officially Discontinued, and the Steam Frame's Front Port Is Now Documented"
description: "Valve has ended Index production and cut the remaining stock by 20%. At the same time, its newly published Steam Frame pinout shows exactly what the headset's 44-pin front port can do."
summary: "Valve has ended Index production and cut the remaining stock by 20%. At the same time, its newly published Steam Frame pinout shows exactly what the headset's 44-pin front port can do."
pubDate: 2026-10-14
publishedAt: 2026-10-17T20:54:23-05:00
author: "Vet, VetTV Handheld"
category: news
tags: ["valve-index","steam-frame","steamvr","virtual-reality","valve"]
cover: "covers/valve-index-discontinued-steam-frame-port.jpg"
sources:
  - title: "Valve, \"Valve Index Sunset\" (Steam store)"
    url: "https://store.steampowered.com/hardware/valveindex"
  - title: "Road to VR, \"Index Headset Goes on Sale for the First Time Ever as Valve Announces Discontinuation\" (Oct 14, 2026)"
    url: "https://roadtovr.com/valve-index-headset-discontinued-discount/"
  - title: "PC Gamer, \"Valve is clearing out its discontinued Index VR headsets\""
    url: "https://www.pcgamer.com/hardware/vr-hardware/valve-is-clearing-out-its-discontinued-index-vr-headsets-if-you-want-a-cheap-piece-of-history/"
  - title: "Notebookcheck, \"Valve officially sunsets the Valve Index after seven years\""
    url: "https://www.notebookcheck.net/Valve-officially-sunsets-the-Valve-Index-after-seven-years-with-remaining-stock-now-available-at-a-discount.1423340.0.html"
  - title: "Gaming.net, \"Valve Ends Production of Index VR Hardware, Discounts Remaining Stock\""
    url: "https://www.gaming.net/valve-ends-production-of-index-vr-hardware-discounts-remaining-stock/"
  - title: "VR.org, \"Valve Published the Steam Frame's Front Port Pinout: 44 Pins, One PCIe Lane and a 6-Watt Power Budget\" (Oct 12, 2026)"
    url: "https://vr.org/articles/steam-frame-cad-files-front-port-pinout-44-pins-pcie-6-watts-2026"
  - title: "Mixed News, \"Steam Frame controllers now act as a gamepad in VR games with no VR input\""
    url: "https://mixed-news.com/en/steam-frame-controllers-gamepad-input-vr-games-three-betas/"
source: "Article Desk: valve-index-discontinued-steam-frame-port.md"
---
This week marks a real changing of the guard for Valve's VR hardware. The **Valve Index** is officially done, and the **Steam Frame** now has a fully documented front expansion port that modders can design for. I don't own either headset, so this is a news roundup, not a hands-on. Here's what Valve announced and what the documents show.

## Valve Index: production has ended

On **October 13**, Valve posted **"Valve Index Sunset"** on its Steam Hardware news channel. PC Gamer quotes it directly: **"Valve Index is no longer being produced. Remaining Index headsets, controllers, and accessories are still available at the new prices below while supplies last."** PC Gamer also notes that Valve's Lawrence Yang hinted last year that the Index was no longer being made, but this is Valve's first official word.

The Index launched in **June 2019**, so it had a run of more than seven years.

## Clearance pricing: 20% off

Road to VR reports that everything on the Valve Index store page is now **20% off**, the first time the Index has ever been discounted. In the US:

- **Valve Index Headset:** $499.00, now **$399.20**
- **Replacement Left Controller:** $149.00, now **$119.20**
- **Replacement Tether:** $129.00, now **$103.20**

PC Gamer and Notebookcheck both confirm the headset price of $399.20, down from $499.

Read the fine print before you buy. **The headset alone doesn't include controllers or base stations.** PC Gamer notes that the full kit, which used to cost $999, is no longer available, so there's no discount on it. Road to VR says US buyers can currently get only the *left* replacement controller (UK and EU buyers should still be able to get both), and that you'd have to get the required SteamVR 2.0 base stations from HTC at $229 each. Road to VR puts the all-in cost at around **$1,200**, which is only about $100 less than the 1TB Steam Frame.

## Existing owners: nothing changes

The important part for current owners: Valve says, **"If you already own an Index, nothing changes – it is still supported on Steam and SteamVR."** Valve points owners who need hardware help to the Valve Index page on Steam Support. For current owners, I think the sale makes the most sense as a chance to stock up on spare tethers and controllers while they last.

## The Steam Frame's front port, pin by pin

On the Frame side, this ties directly into the CAD release I covered with SteamOS 0.4. Valve's October 9 Steam Hardware post said **"Steam Frame CAD files and electrical interface information are now available for non-commercial use,"** in a public GitLab repository called **"Public Steam Frame CAD and Electrical References."** VR.org went through the electrical document, titled **"Auxiliary Port, Nose Bridge,"** and here's what it found:

- **44 pins**, every one of them now named.
- **Two four-lane MIPI D-PHY camera interfaces**, each rated at 2.5 Gbps per lane.
- **One PCIe Gen 4 lane.** It's shared, though: it runs over the *left* camera's pins through multiplexers. Valve lists three supported setups: two cameras with no PCIe, one camera plus PCIe, or PCIe alone. Two cameras *plus* PCIe at the same time is marked "potentially supported, needs development."
- **About 6 W of power:** 3.1 V at up to 2 A continuous. Valve warns that using the full 6 W "will consume over 25% of the available battery capacity." VR.org adds that early units used a 1 A part before Valve switched to the 2 A part at production ramp, and the document doesn't say how to tell which part a headset has.
- **Power is gated.** The port stays off until the accessory grounds pin 44. The headset then checks for a known camera, a power-only or PCIe-only signal, or an ID chip on the I2C bus. If none of those checks pass, power is cut. The one camera it recognises out of the box is Valve's "Arcturus RGB" colour passthrough module.

The repository also has stripped-down models of the core module, the head strap and both controllers, a drawing of the controller tracking LED locations, and two example USB 3.0 hub boards (one in Altium, one in KiCad).

## The licence and the warranty

Everything is released under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0**. You can make, modify and share parts with credit to Valve, but **selling one requires a separate commercial licence**. Valve's README also warns that opening the enclosure, or attaching hardware that isn't "Steam Frame Compatible" to the electrical ports, **will void your warranty**. VR.org also notes that the published electrical document covers only pages 8 to 14 of 14.

## Quick reminder: gamepad input on the Frame

As I covered earlier, Valve's **October 13** Steam client beta note says **Frame controllers now use gamepad input by default in VR games that don't support VR inputs**. You can change this per game, and it needs the beta channels on both the Frame and your PC.

## My take

The Index helped define high-end PC VR. Its off-ear speakers and comfort still hold up well, so seeing it go is bittersweet. But Valve's focus is clearly on the Frame now. Publishing the front-port pinout in this much detail is a big win for the modding community: anyone can check whether a claimed accessory actually fits the spec before buying it.

*Subscribe at [youtube.com/@VetTVHandheld](https://www.youtube.com/@VetTVHandheld).*

---

## Sources

- Valve, "Valve Index Sunset" (Steam store): https://store.steampowered.com/hardware/valveindex
- Road to VR, "Index Headset Goes on Sale for the First Time Ever as Valve Announces Discontinuation" (Oct 14, 2026): https://roadtovr.com/valve-index-headset-discontinued-discount/
- PC Gamer, "Valve is clearing out its discontinued Index VR headsets": https://www.pcgamer.com/hardware/vr-hardware/valve-is-clearing-out-its-discontinued-index-vr-headsets-if-you-want-a-cheap-piece-of-history/
- Notebookcheck, "Valve officially sunsets the Valve Index after seven years": https://www.notebookcheck.net/Valve-officially-sunsets-the-Valve-Index-after-seven-years-with-remaining-stock-now-available-at-a-discount.1423340.0.html
- Gaming.net, "Valve Ends Production of Index VR Hardware, Discounts Remaining Stock": https://www.gaming.net/valve-ends-production-of-index-vr-hardware-discounts-remaining-stock/
- VR.org, "Valve Published the Steam Frame's Front Port Pinout: 44 Pins, One PCIe Lane and a 6-Watt Power Budget" (Oct 12, 2026): https://vr.org/articles/steam-frame-cad-files-front-port-pinout-44-pins-pcie-6-watts-2026
- Mixed News, "Steam Frame controllers now act as a gamepad in VR games with no VR input": https://mixed-news.com/en/steam-frame-controllers-gamepad-input-vr-games-three-betas/
