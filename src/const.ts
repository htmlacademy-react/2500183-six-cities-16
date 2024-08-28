const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const DEFAULT_CITY = 'Paris';

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

enum Sorting {
  Popular = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  Rating = 'Top rated first'
}


const ReviewLength = {
  Min: 50,
  Max: 300,
} as const;

const IconOptions = {
  DefaultIconUrl: 'img/pin.svg',
  ActiveIconUrl: 'img/pin-active.svg',
} as const;

const TitleLauerUrl = {
  Pattern: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Favorites = '/favorite',
  Comments = '/comments',
  Logout = '/logout',
}

enum TOASTIFY_ERROR_MESSAGE {
  UploadOffer = 'Не удалось загрузить предложения. Попробуйте перезагрузить страницу',
  ValidatePassword = 'Пароль должен содержать минимум одну цифру и одну латинскую букву',
  ValidateReview = 'Не удалось выполнить отправку комментария. Проверьте подключение'
}

 enum FavoritesStatus {
  Added = 1,
  Removed = 0
}

const RATINGS = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
] as const;


const enum RequestStatus { Idle, Loading, Success, Failed }

export { CITIES,
  DEFAULT_CITY,
  ReviewLength,
  IconOptions,
  TitleLauerUrl,
  Sorting,
  AppRoute,
  AuthorizationStatus,
  ApiRoute,
  RequestStatus,
  TOASTIFY_ERROR_MESSAGE,
  FavoritesStatus,
  RATINGS
};
