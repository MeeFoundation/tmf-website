import {discord, githubLink} from '../astro.config.mjs';

export {discord, githubLink};

export const MEE_ORIGIN = 'https://mee.foundation';

// Tellipod's pages are served under /tellipod on mee.foundation. The standalone
// build for tellipod.mee.foundation (TELLIPOD_STANDALONE=1, see
// .github/workflows/deploy_tellipod.yml) serves the same pages from the root.
export const TELLIPOD_BASE = import.meta.env.TELLIPOD_STANDALONE ? '' : '/tellipod';

// The "Join the beta" button stays hidden until there is somewhere to send people.
export const BETA_URL: string | null = null;

export type TellipodPageId = 'building' | 'roadmap' | 'words';

export const tellipodHome = TELLIPOD_BASE || '/';

export const tellipodPages: {id: TellipodPageId; name: string; href: string}[] =
  [
    {
      id: 'building',
      name: "What we're building",
      href: `${TELLIPOD_BASE}/building`,
    },
    {id: 'roadmap', name: 'Roadmap', href: `${TELLIPOD_BASE}/roadmap`},
    {id: 'words', name: 'Words we use', href: `${TELLIPOD_BASE}/words`},
  ];

export const tellipodPage = (id: TellipodPageId) =>
  tellipodPages.find((page) => page.id === id)!.href;
