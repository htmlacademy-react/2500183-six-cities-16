import { PlaceCardAllT } from '../types/offer/offer';

const placeCardAllOffers : PlaceCardAllT[] = [
  {
    'id': 'f641a4cd-06b9-4a1d-8957-3e19fcad7948',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 709,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.85309666406198,
        'zoom': 11
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    'bedrooms': 5,
    'goods': [
      'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'images': [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'
    ],
    'maxAdults': 5
  },
  {
    'id': '74ca1674-145a-4f32-872b-0cb76db0926c',
    'title': 'House in countryside',
    'type': 'room',
    'price': 145,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris2.',
    'bedrooms': 4,
    'goods': [
      'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'images': [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'
    ],
    'maxAdults': 4
  },
  {
    'id': 'ffb99d6b-6767-4150-8327-423581c9e2ac',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 355,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris3.',
    'bedrooms': 3,
    'goods': [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'images': [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'
    ],
    'maxAdults': 4
  },
  {
    'id': '92e15e24-fa63-45d6-b9db-b9b108d7512a',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 246,
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.236402000000005,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam7.',
    'bedrooms': 3,
    'goods': [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'images': [
      'img/room.jpg', 'img/apartment-01.jpg','img/studio-01.jpg', 'img/apartment-01.jpg'
    ],
    'maxAdults': 42
  },
];

export {placeCardAllOffers};
