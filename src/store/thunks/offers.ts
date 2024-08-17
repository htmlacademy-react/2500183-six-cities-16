import type { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { PlaceCardAllSample, PlaceCardSample } from '../../types/offer/offer';
import { ApiRoute } from '../../const';

const fetchOffer = createAsyncThunk<PlaceCardAllSample, string, {extra: AxiosInstance}>('fetchOffers/one', async (offerID, {extra: api}) => {
  const response = await api.get<PlaceCardAllSample>(`${ApiRoute.Offers}/${offerID}`);
  return response.data;
});

const fetchNearBy = createAsyncThunk<PlaceCardSample[], string, {extra: AxiosInstance}>('fetchOffers/near', async (offerID, {extra : api}) => {
  const response = await api.get<PlaceCardSample[]>(`${ApiRoute.Offers}/${offerID}/nearby`);
  return response.data;
});

export { fetchOffer, fetchNearBy};
