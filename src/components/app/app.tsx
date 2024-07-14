import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';


enum AppRoute {
  MainPage = '/',
  LoginPage = '/login',
  FavoritesPage = '/favorites',
  OfferPage = '/offer'
}


type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    //<Main offersCount={offersCount} />
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
