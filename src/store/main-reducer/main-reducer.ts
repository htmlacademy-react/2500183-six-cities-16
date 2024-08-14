import { Sorting } from '../../const';
import { PlaceCardSample } from '../../types/offer/offer';
import { AuthorizationStatus, DEFAULT_CITY } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadingOffers, loginReg } from '../api-actions';
import { UserData } from '../../types/user/auth';

type InitialState = {
  city: string;
  offers: [] | PlaceCardSample[];
  sorting: Sorting;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  info: UserData | null;
};

const initialState : InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: Sorting.Popular,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  info: null,
};

const mainReducerSlice = createSlice({
  name: 'MainProcess',
  initialState,
  reducers: {
    changeSortBy: (state, action: PayloadAction<{sorting: Sorting}>) => {
      state.sorting = action.payload.sorting;
    },
    uploadOffers: (state, action: PayloadAction<{offers: PlaceCardSample[]}>) => {
      state.offers = action.payload.offers;
    },
    changeCity: (state, action: PayloadAction<{city: string}>) => {
      state.city = action.payload.city;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadingOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadingOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(loadingOffers.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginReg.fulfilled, (state, action) => {
        state.info = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginReg.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }

});

const {changeSortBy,changeCity,uploadOffers, } = mainReducerSlice.actions;
const mainReducer = mainReducerSlice.reducer;

const userActions = {
  loginReg,
  loadingOffers
};

export {
  mainReducer,
  changeSortBy,
  uploadOffers,
  changeCity,
  userActions
};
