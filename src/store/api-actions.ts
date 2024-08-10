import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State, Dispatch } from '../types/state/state';
import { ApiRoute } from '../const';
import { PlaceCardSample } from '../types/offer/offer';
import { uploadOffers } from './action';

const loadingOffers = createAsyncThunk<void, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('uploadOffers', async (_arg, {dispatch, extra: api}) => {
  const { data } = await api.get<PlaceCardSample[]>(ApiRoute.Offers);
  dispatch(uploadOffers({offers: data}));
});

export {loadingOffers};

