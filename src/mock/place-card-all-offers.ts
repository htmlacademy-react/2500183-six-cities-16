import { PlaceCardAllT } from '../types/offer/offer';

const placeCardAllOffers : PlaceCardAllT[] = [
  {
    'id': 'f641a4cd-06b9-4a1d-8957-3e19fcad7948',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 709,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
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
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
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
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
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
    'id': '5c8b793f-7651-4d77-b98b-7baeffc7f3a0',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 595,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5,
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