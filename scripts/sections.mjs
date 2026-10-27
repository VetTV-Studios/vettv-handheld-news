// Redesign (MGN-style) taxonomy. Legacy category -> new primary section, plus per-post overrides.
export const LEGACY = { 'steamos-news':'linux-steamos', 'decky-plugins':'linux-steamos', 'reactos-open-nt':'open-nt', 'cloud-gaming':'gaming', 'retro-emulation':'gaming', 'steam-deals':'deals', 'project-updates':'projects', 'guides':'handhelds', 'reviews':'handhelds' };
export const LEGACY_TYPE = { 'guides':'guide', 'reviews':'review', 'steam-deals':'deal' };
export const OVERRIDE = {
  'beam-desktop-app-linux':'linux-steamos','gta-6-ps5-install-size-rumor':'gaming','legion-go-s-steamos-deal-best-buy':'deals','rog-xbox-ally-x20':'handhelds',
  'steam-beta-linux-alt-tab-fix-incomplete':'linux-steamos','steam-frame-audio-strap-oled-plano-rumor':'handhelds','steam-frame-backorder-2027':'handhelds',
  'steam-frame-cd-rom-kernel-support':'handhelds','steam-frame-steamos-0-4-steamvr-2-18-3':'handhelds','steam-frame-steamvr-2026-10-17':'handhelds','steam-frame-steamvr-2026-10-24':'handhelds',
  'steam-linux-64-bit':'linux-steamos','steamos-3-9-2-beta-legion-go':'linux-steamos','steamos-proton-daily-2026-10-13':'linux-steamos','steamos-proton-daily-2026-10-15':'linux-steamos',
  'steamos-proton-daily-2026-10-17':'linux-steamos','steamos-proton-daily-2026-10-19':'linux-steamos','steamos-proton-evening-2026-10-13':'linux-steamos','valve-index-discontinued-steam-frame-port':'handhelds',
  'windows-11-gaming-task-view-run-dialog':'windows','windows-11-start-menu-phone-settings-store':'windows','xbox-ai-strategy-sharma-labs-stirrup':'gaming','xbox-nano-controller':'gaming',
  'xbox-windows-roundup-2026-10-15':'windows','game-pass-october-wave-2-2026':'gaming','oclp-3-0-0-rc3-hackintosh':'macos','reactos-nt6-users-folder':'open-nt','windows-11-ms-dos-8-3-file-names':'windows',
};
export const TYPE_OVERRIDE = { 'legion-go-s-steamos-deal-best-buy':'deal' };
export const sectionFor = (id, cat) => OVERRIDE[id] ?? LEGACY[cat] ?? cat;
export const typeFor = (id, cat) => TYPE_OVERRIDE[id] ?? LEGACY_TYPE[cat] ?? 'news';
// Article Desk new-format `section:` display names -> category ids.
export const SECTION_NAMES = { 'News':'news', 'Handhelds':'handhelds', 'Gaming':'gaming', 'Windows':'windows', 'Linux & SteamOS':'linux-steamos', 'macOS':'macos', 'Open NT':'open-nt', 'Deals':'deals', 'Projects':'projects' };
