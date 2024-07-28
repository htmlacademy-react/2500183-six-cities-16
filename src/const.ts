const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const ACTIVE_CITY = CITIES[0];

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

export { CITIES, ACTIVE_CITY, AppRoute, AuthorizationStatus };
