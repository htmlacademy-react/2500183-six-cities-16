import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FavoritesStatus, ApiRoute} from '../../const';
import { PlaceCardSample } from '../../types/offer/offer';

const fetchFavorites = createAsyncThunk<PlaceCardSample[], undefined, { extra: AxiosInstance }>
('favorite/fetchAll', async (_arg, { extra : api}) => {
  const response = await api.get<PlaceCardSample[]>(ApiRoute.Favorites);
  return response.data;
});


interface ChangeProps {
  offerId: string;
  status: FavoritesStatus;
}

interface ChangeResponse {
  offer: PlaceCardSample;
  status: FavoritesStatus;
}

const changeFavorite = createAsyncThunk<ChangeResponse, ChangeProps, { extra: AxiosInstance }>
('favorite/change', async ({ offerId, status}, {extra : api}) => {
  const response = await api.post<PlaceCardSample>(`${ApiRoute.Favorites}/${offerId}/${status}`);
  return {offer: response.data, status};
});


export { changeFavorite, fetchFavorites};
