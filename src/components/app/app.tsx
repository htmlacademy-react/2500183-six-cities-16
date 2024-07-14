import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page404/page404';
import { AppRoute } from '../../const';


type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.MainPage}
            element={<Main offersCount={offersCount}/>}
          />
          <Route
            path={AppRoute.LoginPage}
            element={<Login/>}
          />
          <Route
            path={AppRoute.FavoritesPage}
            element={<Favorites/>}
          />
          <Route
            path={AppRoute.OfferPage}
            element={<Offer/>}
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
