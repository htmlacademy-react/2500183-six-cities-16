import { UserData } from '../../types/user/auth';
import { AuthorizationStatus } from '../../const';
import { createSlice} from '@reduxjs/toolkit';
import {loginReg, checkAuthorization } from '../api-actions';

export const enum RequestStatus { Idle, Loading, Success, Failed }


type InitialState = {
  authorizationStatus: AuthorizationStatus;
  info: UserData | null;
  requestStatus: RequestStatus;
};

const initialState : InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  info: null,
  requestStatus: RequestStatus.Idle,
};

const userReducerSlice = createSlice({
  name: 'UserProcess',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginReg.fulfilled, (state, action) => {
        state.info = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(loginReg.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(loginReg.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(checkAuthorization.fulfilled, (state, action) => {
        state.info = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(checkAuthorization.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(checkAuthorization.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      });
  }

});

const userReducer = userReducerSlice.reducer;

const userActions = {
  loginReg,
};

export {
  userReducerSlice,
  userReducer,
  userActions
};

