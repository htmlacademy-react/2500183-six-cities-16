import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { placeCardOffers } from './mock/place-card-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesMock={placeCardOffers}
    />
  </React.StrictMode>
);
