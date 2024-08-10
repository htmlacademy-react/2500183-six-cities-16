import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortBy } from './action';
import { DEFAULT_CITY, Sorting } from '../const';
import { placeCardOffers } from '../mock/place-card-offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: placeCardOffers,
  sorting: Sorting.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(changeSortBy, (state, action) => {
      state.sorting = action.payload.sorting;
    });
});

export { reducer } ;
