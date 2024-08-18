import { configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { mainReducer } from './main-slice/main-slice';
import { userReducer } from './user-slice/user-slice';
import { offerReducer } from './offer-slice/offer-slice';
import { reveiwReducer } from './reviews-slice/reviews-slice';
import { favoritesReducer } from './favorite-slice/favorite-slice';


const api = createAPI();

const store = configureStore({
  reducer: {
    main: mainReducer,
    user: userReducer,
    offerPage: offerReducer,
    review: reveiwReducer,
    favorite: favoritesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }
    ),
});

export { store };
