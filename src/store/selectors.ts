import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state/state';

const selectFilteredOffers = createSelector([
  (state: State) => state.main.offers,
  (state: State) => state.main.city],
(offers, currentCity) => offers.filter((offer) => offer.city.name === currentCity)
);

export {selectFilteredOffers};
