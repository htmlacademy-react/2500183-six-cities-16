import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { PlaceCardAllSample } from '../../types/offer/offer';
import { Reviews } from '../../types/reviews/reviews';

import { ApiRoute } from '../../const';

const fetchComments = createAsyncThunk<Reviews[], PlaceCardAllSample['id'], { extra: AxiosInstance }>('comments/fetch', async (offerId, {extra : api}) => {
  const response = await api.get<Reviews[]>(`${ApiRoute.Comments}/${offerId}`);
  return response.data;
});

interface PostCommentProps {
  body: {
    comment: string;
    rating: number;
  };
  offerId: PlaceCardAllSample['id'];
}

const postComment = createAsyncThunk<Reviews, PostCommentProps, {extra: AxiosInstance}>('comments/post', async ({ body, offerId }, { extra : api}) => {
  const response = await api.post<Reviews>(`${ApiRoute.Comments}/${offerId}`, body);
  return response.data;
});

export { fetchComments, postComment};
