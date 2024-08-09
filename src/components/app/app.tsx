import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PlaceCardT } from '../../types/offer/offer';
import { ReviewsT } from '../../types/reviews/reviews';


type AppProps = {
  placesMock: PlaceCardT[];
  reviews: ReviewsT[];
}


function App({placesMock, reviews}: AppProps): JSX.Element {
  const favoriteOffers = placesMock.filter((offer) => offer.isFavorite);
  const favoritesNumber = favoriteOffers.length | 0;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.MainPage}
            element={<Main favoritesNumber={favoritesNumber}/>}
          />
          <Route
            path={AppRoute.LoginPage}
            element={<Login/>}
          />
          <Route
            path={AppRoute.FavoritesPage}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites placesMock={placesMock} favoritesNumber={favoritesNumber} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.OfferPage}
            element={<Offer reviews={reviews} favoritesNumber={favoritesNumber}/>}
          />
          <Route
            path= '*'
            element={<Page404/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
