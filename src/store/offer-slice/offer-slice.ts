import { createSlice } from '@reduxjs/toolkit';
import { PlaceCardAllSample, PlaceCardSample } from '../../types/offer/offer';

import { RequestStatus } from '../../const';
import { fetchNearBy, fetchOffer } from '../thunks/offers';

interface OfferState {
  info: PlaceCardAllSample | null;
  nearby: PlaceCardSample[];
  status: RequestStatus;
}

const initialState: OfferState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle
};

export const offerSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchOffer.fulfilled, (state, action) => {
      state.info = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(fetchOffer.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(fetchOffer.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchNearBy.fulfilled, (state, action) => {
      state.nearby = action.payload;
    });
  },
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
    }
  },
});

const offerActions = {
  fetchOffer,
  fetchNearBy
};

const offerReducer = offerSlice.reducer;

export {
  offerActions,
  offerReducer
};
