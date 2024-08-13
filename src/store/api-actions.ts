import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State, Dispatch } from '../types/state/state';
import { ApiRoute } from '../const';
import { PlaceCardSample } from '../types/offer/offer';
import { UserData, AuthData } from '../types/user/auth';
import { saveToken } from '../services/token';
import { uploadOffers, toggleLoading, updateAuthorization } from './action';
import { AuthorizationStatus } from '../const';

const loadingOffers = createAsyncThunk<void, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('data/uploadOffers', async (_arg, {dispatch, extra: api}) => {
  dispatch(toggleLoading());
  const { data } = await api.get<PlaceCardSample[]>(ApiRoute.Offers);
  dispatch(uploadOffers({offers: data}));
  dispatch(toggleLoading());
});

const checkAuthorization = createAsyncThunk<void, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('data/checkAuthorization', async (_arg, {dispatch, extra: api}) => {
  const { status } = await api.get(ApiRoute.Login);
  if (status === 200) {
    dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
  } else {
    dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
  }
});

const loginUser = createAsyncThunk<void, AuthData, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('loginUser', async ({ email, password }, {dispatch, extra: api}) => {
  const { status, data: { token } } = await api.post<UserData>(ApiRoute.Login, {email, password});
  saveToken(token);
  if (status === 200) {
    dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
  } else {
    dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
  }
});

export {loadingOffers, checkAuthorization, loginUser};

