import { PlaceCardT } from '../types/offer/offer';
import { SortBy } from '../const';
const MAX_RATING = 5;

export const calculateRatingWidth = (rating: number): string => `${ Math.round(rating) * 100 / MAX_RATING}%`;

export const upFirstLetter = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const sortOffers = (initialOffers: PlaceCardT[], sortType: SortBy) : PlaceCardT[] => {
  const offers = [...initialOffers];
  switch (sortType) {
    case SortBy.Popular:
      break;
    case SortBy.PriceDown:
      offers.sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
      break;
    case SortBy.PriceUp:
      offers.sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);
      break;
    case SortBy.Rating:
      offers.sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
      break;
  }
  return offers;
};

