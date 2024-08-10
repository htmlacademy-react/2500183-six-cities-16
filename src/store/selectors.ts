import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state/state';

const selectFilteredOffers = createSelector([
  (state: State) => state.offers,
  (state: State) => state.city],
(offers, currentCity) => offers.filter((offer) => offer.city.name === currentCity)
);

export {selectFilteredOffers};