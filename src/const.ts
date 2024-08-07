const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const ACTIVE_CITY = CITIES[3];

enum AppRoute {
  MainPage = '/',
  LoginPage = '/login',
  FavoritesPage = '/favorites',
  OfferPage = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const REVIEW_LENGTH = {
  MIN: 50,
  MAX: 300,
} as const;

const IconOptions = {
  DefaultIconUrl: 'img/pin.svg',
  ActiveIconUrl: 'img/pin-active.svg',
} as const;

const TITLE_LAYER_URL = {
  PATTERN: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

export { CITIES, ACTIVE_CITY, REVIEW_LENGTH, IconOptions, TITLE_LAYER_URL, AppRoute, AuthorizationStatus };
