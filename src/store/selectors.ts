import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state/state';

const selectFilteredOffers = createSelector([
  (state: State) => state.main.offers,
  (state: State) => state.main.city],
(offers, currentCity) => offers.filter((offer) => offer.city.name === currentCity)
);

const selectMainCity = (state: State) => state.main.city;
const selectMainSorting = (state: State) => state.main.sorting;
const selectIsLoading = (state: State) => state.main.isLoading;
const selectAuthorizationStatus = (state: State) => state.user.authorizationStatus;
const selectUserInfo = (state: State) => state.user.info;


export {
  selectFilteredOffers,
  selectMainCity,
  selectMainSorting,
  selectIsLoading,
  selectAuthorizationStatus,
  selectUserInfo
};
