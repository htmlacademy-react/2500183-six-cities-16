import { createAction } from '@reduxjs/toolkit';
import { Sorting } from '../const';
import { PlaceCardSample } from '../types/offer/offer';
import { AuthorizationStatus } from '../const';

const changeCity = createAction<{city: string}>('citiesList/changeCity');
const changeSortBy = createAction<{sorting: Sorting}>('placesSorting/changeSorting');
const uploadOffers = createAction<{offers: PlaceCardSample[]}>('data/uploadOffers');
const toggleLoading = createAction('data/toggleLoading');
const updateAuthorization = createAction<{authorizationStatus: AuthorizationStatus}>('data/updateAuthorization');

export {
  changeCity,
  changeSortBy,
  uploadOffers,
  toggleLoading,
  updateAuthorization
};
