const SCREEN = {
  HOME: 'home',
};
const NAVIGATE = {
  // client
  HOME: `/${SCREEN.HOME}`,
};
const HEADER = [
  {
    name: 'home',
    slug: 'home',
  },
  {
    name: 'about us',
    slug: 'about-us',
  },
  {
    name: 'menu',
    slug: 'menu',
  },
  {
    name: 'team',
    slug: 'team',
  },
  {
    name: 'gallery',
    slug: 'gallery',
  },
  {
    name: 'blog',
    slug: 'blog',
  },
  {
    name: 'reservation',
    slug: 'reservation',
  },
  {
    name: 'contact us',
    slug: 'contact-us',
  },
];
const DEFAULT_PAGINATION = { pageSize: 10, pageIndex: 1 };

export { HEADER, NAVIGATE, SCREEN, DEFAULT_PAGINATION };
