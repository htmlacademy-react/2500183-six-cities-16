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

export { CITIES, ACTIVE_CITY, REVIEW_LENGTH, AppRoute, AuthorizationStatus };
