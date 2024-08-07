import { createAction } from '@reduxjs/toolkit';
import { PlaceCardT } from '../types/offer/offer';

const changeCity = createAction<{city: string}>('changeCity');
const uploadOffers = createAction<{offers: PlaceCardT[]}>('uploadOffers');


export {
  changeCity,
  uploadOffers,
};
