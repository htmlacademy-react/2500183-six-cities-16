import { createAction } from '@reduxjs/toolkit';

const changeCity = createAction<{city: string}>('changeCity');


export {
  changeCity
};
