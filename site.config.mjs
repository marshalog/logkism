// Central deploy config — shared by astro.config.mjs and the app.
// Change GITHUB_USER once and both cross-links + GitHub Pages paths follow.
export const GITHUB_USER = 'marshalog';
export const REPO = 'logkism';
export const BLOG_REPO = 'soolognz-blog';

const isProd = process.argv.includes('build') || process.env.CI === 'true';

export const SITE = `https://${GITHUB_USER}.github.io`;
export const BASE = isProd ? `/${REPO}/` : '/';

// Where the sibling site lives (dev: blog dev server on :4322)
export const BLOG_URL =
  process.env.BLOG_URL || (isProd ? `${SITE}/${BLOG_REPO}/` : 'http://localhost:4322/');
