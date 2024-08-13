import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortBy, uploadOffers, toggleLoading, updateAuthorization } from './action';
import { DEFAULT_CITY, Sorting } from '../const';
import { PlaceCardSample } from '../types/offer/offer';
import { AuthorizationStatus } from '../const';

type InitialState = {
  city: string;
  offers: [] | PlaceCardSample[];
  sorting: Sorting;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};


const initialState : InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: Sorting.Popular,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(changeSortBy, (state, action) => {
      state.sorting = action.payload.sorting;
    })
    .addCase(uploadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(toggleLoading, (state) => {
      state.isLoading = !state.isLoading;
    })
    .addCase(updateAuthorization, (state,action) => {
      state.authorizationStatus = action.payload.authorizationStatus;
    });
});

export { reducer } ;
