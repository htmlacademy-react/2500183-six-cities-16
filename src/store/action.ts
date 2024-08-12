import { createAction } from '@reduxjs/toolkit';
import { Sorting } from '../const';
import { PlaceCardSample } from '../types/offer/offer';

const changeCity = createAction<{city: string}>('citiesList/changeCity');
const changeSortBy = createAction<{sorting: Sorting}>('placesSorting/changeSorting');
const uploadOffers = createAction<{offers: PlaceCardSample[]}>('data/uploadOffers');
const toggleLoading = createAction('data/toggleLoading');

export {
  changeCity,
  changeSortBy,
  uploadOffers,
  toggleLoading
};
