import { configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { mainReducer } from './main-reducer/main-reducer';


const api = createAPI();

const store = configureStore({
  reducer: {
    main: mainReducer,
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
