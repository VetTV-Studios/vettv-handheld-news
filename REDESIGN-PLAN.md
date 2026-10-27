# VetTV Handheld News: MGN-style redesign (branch `redesign-mgn`, local only)

## 1. Patterns seen on mobilegames.network (patterns only; no code, CSS, text, logos or images copied)
- **Header:** a slim top bar (logo, search toggle, menu button), then a category bar with a few top-level items (News, Guides, Reviews, Trackers, Hardware, Emulation). The menu opens a panel with sub-sections.
- **Home:** a featured carousel of big poster cards with headlines over the art. Below it, a two-column desk: a "Latest stories" grid on the left and a "Popular" rail on the right, then guide tiles and horizontal tile rows with "see more" links.
- **Cards:** three kinds. Story cards have a category badge on the image, headline, excerpt, byline and time. Compact cards are a thumb plus headline. Poster cards put the text over the image.
- **Category page:** a nameplate header (kicker, name, one-line tagline, story count), filter chips by kind, then a grid of story cards.
- **Article:** breadcrumbs, then a kicker with topic chips, headline, dek, hero image with a share menu (copy link, X, Threads, Facebook, Bluesky, Reddit), a byline card with read time, the body, and a right rail of related cards.

## 2. IA (Article Desk taxonomy, Oct 26)
Nav: **News | Handhelds | Gaming | Windows | Linux & SteamOS | macOS | Open NT | Deals | Projects | Videos**, with Subscribe at 1240px and wider. Guides, Reviews and Tags are links in the top bar, and also sit in the mobile drawer.

| New section (URL) | Takes in |
|---|---|
| News `/news/` | Every post, newest first. Only general tech news (3 off-topic posts) uses `news` as its primary section |
| Handhelds `/handhelds/` | Steam Deck, ROG Ally, Legion Go, Xbox Ally, Steam Frame (all Frame posts, including the CD-ROM kernel post) and Steam Machine. Also the FSR post, the Valve Index/Frame post and both SteamOS-on-Legion-Go guides |
| Gaming `/gaming/` | Game Pass waves, GTA 6, Xbox strategy, Xbox Nano, plus the old **Cloud Gaming** and **Retro & Emulation** |
| Windows `/windows/` | Unchanged, plus the Windows 11 news posts, the Xbox/Windows roundup and the MS-DOS 8.3 names post |
| Linux & SteamOS `/linux-steamos/` | Old **SteamOS News**, Proton dailies, Steam Linux client posts, Beam, Xodus, **Decky Plugins** |
| macOS `/macos/` | New. Seeded with the OCLP 3.0 Hackintosh post (it was in Project Updates) |
| Open NT `/open-nt/` | Rename of ReactOS & Open NT. Same tagline; the section page carries the disclosure; ReactOS NT6 users folder post moved here from Retro |
| Deals `/deals/` | Old Steam Deals, plus the Legion Go S Best Buy deal |
| Projects `/projects/` | Old Project Updates (dev logs) |
| Videos `/videos/` | A simple page linking to https://www.youtube.com/@VetTVHandheld |

Every mapping lives in `scripts/sections.mjs`. The importer now uses the same file, so re-importing a post keeps its new section.

**No URL breaks.** All `/posts/<slug>/` URLs are unchanged. These old section URLs redirect with a meta refresh and canonical, and they are left out of the sitemap:
- `/steamos-news/` → `/linux-steamos/`
- `/reactos-open-nt/` → `/open-nt/`
- `/cloud-gaming/` and `/retro-emulation/` (and the older `/retro-emulation-cloud/`) → `/gaming/`
- `/steam-deals/` → `/deals/`
- `/project-updates/` → `/projects/`
- `/decky-plugins/` → `/tags/decky-loader/`

`/guides/` and `/reviews/` are still real pages, now listing posts by type.

## 3. Content model (for Article Desk)
- `category`: one primary section, one of `news, handhelds, gaming, windows, linux-steamos, macos, open-nt, deals, projects`.
- `type`: `news | opinion | guide | review | deal`, default `news`. Each non-news type gets a coloured label on cards and articles. `opinion` also shows a yellow notice under the dek, and the JSON-LD is set to OpinionNewsArticle (or Review for reviews).
- `trending: true` is a manual editor pick that drives the home Trending rail (there are no analytics). If fewer than 5 posts are flagged, the rail fills with the newest on-topic posts.
- `platforms: []` is optional and not displayed yet. Planned for filter chips later (e.g. `steam-deck`, `rog-ally`, `windows`, `macos`).
- Tags: up to 3 for new posts. This is not enforced, because older posts have 5 or 6 and their tag pages must keep working.
- `offTopic: true` still keeps a post out of the lead and featured slots, so SteamOS 3.9 stays the lead.

## 4. Template changes
- **Header/nav:** 10 uppercase items on one row. At 769–1099px the bar scrolls sideways with a fade at the edge (a clean fallback, nothing overflows the page). At 768px and below: pill chips, the drawer and the bottom tab bar, as before.
- **Home:** a poster-style lead with the headline over the art, plus 3 compact featured cards. Then a Latest grid (12) beside a sticky rail holding Trending (numbered) and section chips. Then one rail per section with a tagline and a "More →" link; on mobile these rails swipe sideways.
- **Cards:** std (section badge and type label on the image, byline and date under it), big (section lead), compact, rank.
- **Section page:** nameplate header (kicker, name, tagline, story count).
- **Article:** breadcrumbs, kicker chips, byline card with avatar and read time, share links (copy, X, Bluesky, Reddit; plain links, no third-party scripts), a right rail with Related and Latest, and "More from VetTV".
- Brand is unchanged: dark purple, cyan and pink neon, using VetTV's own art from /art. Pagefind, RSS, sitemap, canonical/OG and JSON-LD are kept.
