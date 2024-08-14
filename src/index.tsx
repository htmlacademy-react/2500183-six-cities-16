import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { placeCardOffers } from './mock/place-card-offers';
import { offerReviews } from './mock/offer-reviews';
import { checkAuthorization } from './store/api-actions';

store.dispatch(checkAuthorization());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        placesMock={placeCardOffers}
        reviews={offerReviews}
      />
    </React.StrictMode>
  </Provider>
);
