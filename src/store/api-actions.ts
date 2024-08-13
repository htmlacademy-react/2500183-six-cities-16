import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State, Dispatch } from '../types/state/state';
import { ApiRoute } from '../const';
import { PlaceCardSample } from '../types/offer/offer';
import { UserData, AuthData } from '../types/user/auth';
import { saveToken } from '../services/token';
import { uploadOffers } from './main-reducer/main-reducer';
//import { AuthorizationStatus } from '../const';

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
  }

const loadingOffers = createAsyncThunk<PlaceCardSample[], undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('data/uploadOffers', async (_arg, {dispatch, extra: api}) => {
  //dispatch(toggleLoading());
  const { data } = await api.get<PlaceCardSample[]>(ApiRoute.Offers);
  //const { status } = await api.get(ApiRoute.Login);
  return data;

  //dispatch(uploadOffers({offers: data}));
  //dispatch(toggleLoading());
});

const checkAuthorization = createAsyncThunk<UserData, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('checkAuthorization', async (_arg, {extra: api}) => {
  const { data } = await api.get<UserData>(ApiRoute.Login);
  return data;
});

const checkAuth = createAsyncThunk<User, undefined, { extra: AxiosInstance }>
('auth/checkAuth', async (_arg, { extra: api }) => {
  const response = await api.get<User>(ApiRoute.Login);
  return response.data;
});

const loginUser = createAsyncThunk<void, AuthData, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('loginUser', async ({ email, password }, {dispatch, extra: api}) => {
  try {
    const {data: { token } } = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
    //dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
    //dispatch(redirectToRoute(AppRoute.Main));
  } catch {
    //dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
  }
});


export {loadingOffers, checkAuthorization, loginUser, checkAuth};

