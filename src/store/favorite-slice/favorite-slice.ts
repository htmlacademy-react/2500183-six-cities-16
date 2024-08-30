import { createSlice } from '@reduxjs/toolkit';
import { PlaceCardSample } from '../../types/offer/offer';
import { FavoritesStatus, RequestStatus } from '../../const';
import { changeFavorite, fetchFavorites } from '../thunks/favorites';

interface FavoritesState {
  items: PlaceCardSample[];
  status: RequestStatus;
}

const initialState: FavoritesState = {
  items: [],
  status: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  extraReducers(builder) {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(fetchFavorites.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(changeFavorite.fulfilled, (state, action) => {
      if (action.payload.status === FavoritesStatus.Added) {
        state.items.push(action.payload.offer);
      }
      if (action.payload.status === FavoritesStatus.Removed) {
        state.items = state.items.filter((item) => item.id !== action.payload.offer.id);
      }
    });
    builder.addCase(changeFavorite.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(changeFavorite.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
  },
  initialState,
  name: 'Favorites',
  reducers: {},
});

const favoritesActions = {
  changeFavorite,
  fetchFavorites
};

const favoritesReducer = favoritesSlice.reducer;

export {favoritesActions, favoritesReducer};


