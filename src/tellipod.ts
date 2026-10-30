import {discord, githubLink} from '../astro.config.mjs';

export {discord, githubLink};

export const MEE_ORIGIN = 'https://mee.foundation';

// Tellipod's pages are served under this path on mee.foundation. If they move to
// tellipod.mee.foundation (with `/` rewritten to `/tellipod/` at the load balancer),
// set it to ''.
export const TELLIPOD_BASE = '/tellipod';

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
