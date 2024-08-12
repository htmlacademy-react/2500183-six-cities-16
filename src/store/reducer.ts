import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortBy, uploadOffers, toggleLoading } from './action';
import { DEFAULT_CITY, Sorting } from '../const';
import { PlaceCardSample } from '../types/offer/offer';

type InitialState = {
  city: string;
  offers: [] | PlaceCardSample[];
  sorting: Sorting;
  isLoading: boolean;
};


const initialState : InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: Sorting.Popular,
  isLoading: false
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
    });
});

export { reducer } ;
