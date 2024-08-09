import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortBy } from './action';
import { DEFAULT_CITY, SortBy } from '../const';
import { placeCardOffers } from '../mock/place-card-offers';

const initialState = {
  city: DEFAULT_CITY,
  initialOffers: placeCardOffers,
  sortBy: SortBy.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(changeSortBy, (state, action) => {
      state.sortBy = action.payload.sortBy;
    });
});

export { reducer } ;
