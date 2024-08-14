import { configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { mainReducer } from './main-reducer/main-reducer';
import { userReducer } from './user-reducer/user-reducer';


const api = createAPI();

const store = configureStore({
  reducer: {
    main: mainReducer,
    user: userReducer
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
