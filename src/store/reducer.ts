import {createReducer} from '@reduxjs/toolkit';
import { changeCity, uploadOffers } from './action';
import { DEFAULT_CITY } from '../const';
import { placeCardOffers } from '../mock/place-card-offers';

const initialState = {
  city: DEFAULT_CITY,
  initialOffers: placeCardOffers,
  offers: placeCardOffers.filter((offer) => offer.city.name === DEFAULT_CITY)
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(uploadOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export { reducer } ;
