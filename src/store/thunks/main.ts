import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State, Dispatch } from '../../types/state/state';
import { ApiRoute } from '../../const';
import { PlaceCardSample } from '../../types/offer/offer';
import { UserData, AuthData } from '../../types/user/auth';
import { saveToken, dropToken } from '../../services/token';


const fetchOffers = createAsyncThunk<PlaceCardSample[], undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('data/uploadOffers', async (_arg, { extra: api}) => {
  const { data } = await api.get<PlaceCardSample[]>(ApiRoute.Offers);
  return data;
});

const checkAuthorization = createAsyncThunk<UserData, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('checkAuthorization', async (_arg, {extra: api}) => {
  const { data } = await api.get<UserData>(ApiRoute.Login);
  return data;
});

const loginUser = createAsyncThunk<UserData, AuthData, { extra: AxiosInstance }>('auth/login', async (body, { extra: api }) => {
  const response = await api.post<UserData>(ApiRoute.Login, body);
  saveToken(response.data.token);
  return response.data;
});

const logout = createAsyncThunk<unknown, undefined, { extra: AxiosInstance }>
('auth/logout', async (_, { extra: api }) => {
  await api.delete(ApiRoute.Logout);
  dropToken();
});

export {fetchOffers, checkAuthorization, loginUser, logout};

