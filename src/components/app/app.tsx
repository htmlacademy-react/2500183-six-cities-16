import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PlaceCardSample } from '../../types/offer/offer';
import { Reviews } from '../../types/reviews/reviews';
//import { useAppSelector, useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import Spiner from '../spiner/spiner';
//import { useEffect } from 'react';
//import { loadingOffers } from '../../store/api-actions';


type AppProps = {
  placesMock: PlaceCardSample[];
  reviews: Reviews[];
}


function App({placesMock, reviews}: AppProps): JSX.Element {
  const favoriteOffers = placesMock.filter((offer) => offer.isFavorite);
  const favoritesNumber = favoriteOffers.length | 0;

  // const dispatch = useAppDispatch();

  //useEffect(() => {
  //dispatch(loadingOffers());
  //});

  const isLoading = useAppSelector((state) => state.main.isLoading);


  if (isLoading) {
    return (
      <Spiner />
    );
  }
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
