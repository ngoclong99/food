// route
const SCREEN = {
  HOME: 'home',
}
const NAVIGATE = {
  // client
  HOME: `/${SCREEN.HOME}`,
}

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
]
const DEFAULT_PAGINATION = { pageSize: 10, pageIndex: 1 }

//setting
const TEXT = 'text'
const BG = 'bg'
const ORANGE_SETTING = 'orange_setting'
const BLUE_SETTING = 'blue_setting'
const GREEN_SETTING = 'green_setting'
const YELLOW_SETTING = 'yellow_setting'

export {
  HEADER,
  TEXT,
  BG,
  NAVIGATE,
  SCREEN,
  DEFAULT_PAGINATION,
  ORANGE_SETTING,
  BLUE_SETTING,
  GREEN_SETTING,
  YELLOW_SETTING,
}
