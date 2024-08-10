import { createAction } from '@reduxjs/toolkit';
import { SortBy } from '../const';

const changeCity = createAction<{city: string}>('citiesList/changeCity');
const changeSortBy = createAction<{sortBy: SortBy}>('placesSorting/changeSortBy');

export {
  changeCity,
  changeSortBy
};
