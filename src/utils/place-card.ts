import { PlaceCardSample } from '../types/offer/offer';
import { Sorting } from '../const';
const MAX_RATING = 5;

export const calculateRatingWidth = (rating: number): string => `${ Math.round(rating) * 100 / MAX_RATING}%`;

export const upFirstLetter = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const sortOffers = (initialOffers: PlaceCardSample[], sortType: Sorting) : PlaceCardSample[] => {
  const offers = [...initialOffers];
  switch (sortType) {
    case Sorting.Popular:
      break;
    case Sorting.PriceDown:
      offers.sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
      break;
    case Sorting.PriceUp:
      offers.sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);
      break;
    case Sorting.Rating:
      offers.sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
      break;
  }
  return offers;
};

