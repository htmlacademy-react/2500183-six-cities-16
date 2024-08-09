import { createAction } from '@reduxjs/toolkit';
import { SortBy } from '../const';

const changeCity = createAction<{city: string}>('changeCity');
const changeSortBy = createAction<{sortBy: SortBy}>('changeSortBy');


export {
  changeCity,
  changeSortBy
};
