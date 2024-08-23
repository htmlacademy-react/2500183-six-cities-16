import { createSlice } from '@reduxjs/toolkit';
import { Reviews } from '../../types/reviews/reviews';
import { RequestStatus } from '../../const';
import { fetchComments, postComment } from '../thunks/comments';

interface ReviewState {
  items: Reviews[];
  status: RequestStatus;
  test: boolean;
}

const initialState: ReviewState = {
  items: [],
  status: RequestStatus.Idle,
  test: false
};

export const reviewSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(fetchComments.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.status = RequestStatus.Success;
      state.test = false;
    });
    builder.addCase(postComment.rejected, (state) => {
      state.status = RequestStatus.Failed;
      state.test = false;
    });
    builder.addCase(postComment.pending, (state) => {
      state.status = RequestStatus.Loading;
      state.test = true;
    });
  },
  initialState,
  name: 'reviews',
  reducers: {},
});

const reviewActions = {
  fetchComments,
  postComment
};

const reveiwReducer = reviewSlice.reducer;

export {reviewActions, reveiwReducer};
