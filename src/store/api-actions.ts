import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State, Dispatch } from '../types/state/state';
import { ApiRoute } from '../const';
import { PlaceCardSample } from '../types/offer/offer';
import { UserData, AuthData } from '../types/user/auth';
import { saveToken } from '../services/token';
//import { AuthorizationStatus } from '../const';


const loadingOffers = createAsyncThunk<PlaceCardSample[], undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('data/uploadOffers', async (_arg, { extra: api}) => {
  const { data } = await api.get<PlaceCardSample[]>(ApiRoute.Offers);
  return data;
});

const checkAuthorization = createAsyncThunk<UserData, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('checkAuthorization', async (_arg, {extra: api}) => {
  const { data } = await api.get<UserData>(ApiRoute.Login);
  return data;
});

const loginUser = createAsyncThunk<void, AuthData, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('loginUser', async ({ email, password }, {extra: api}) => {
  try {
    const {data: { token } } = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
    //dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
    //dispatch(redirectToRoute(AppRoute.Main));
  } catch {
    //dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
  }
});

export const Endpoint = {
  Comments: '/comments',
  Favorite: 'favorite',
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers'
} as const;

const loginReg = createAsyncThunk<UserData, AuthData, { extra: AxiosInstance }>('auth/login', async (body, { extra: api }) => {
  const response = await api.post<UserData>(Endpoint.Login, body);
  saveToken(response.data.token);
  return response.data;
});

export {loadingOffers, checkAuthorization, loginUser, loginReg};

