import { Sorting } from '../../const';
import { PlaceCardSample } from '../../types/offer/offer';
import { AuthorizationStatus, DEFAULT_CITY } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadingOffers } from '../api-actions';

type InitialState = {
  city: string;
  offers: [] | PlaceCardSample[];
  sorting: Sorting;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState : InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: Sorting.Popular,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
      });
  }

});

const {changeSortBy,changeCity,uploadOffers } = mainReducerSlice.actions;
const mainReducer = mainReducerSlice.reducer;

export {
  mainReducer,
  changeSortBy,
  uploadOffers,
  changeCity,
};
