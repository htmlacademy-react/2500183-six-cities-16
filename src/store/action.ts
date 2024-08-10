import { createAction } from '@reduxjs/toolkit';
import { Sorting } from '../const';

const changeCity = createAction<{city: string}>('citiesList/changeCity');
const changeSortBy = createAction<{sorting: Sorting}>('placesSorting/changeSorting');

export {
  changeCity,
  changeSortBy
};
