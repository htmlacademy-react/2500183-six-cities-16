import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page404/page404';
import ProtectedRoute from '../protected-route/protected-route';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import Spiner from '../spiner/spiner';
import { offerAction } from '../../store/main-slice/main-slice';
import { userActions } from '../../store/user-slice/user-slice';
import { favoritesActions } from '../../store/favorite-slice/favorite-slice';
import { useActionCreators } from '../../hooks/use-action-creators';
import { getToken } from '../../services/token';
import { selectIsLoading } from '../../store/selectors';
import { ToastifyErrorMessage } from '../../const';

function App(): JSX.Element {

  const { fetchOffers } = useActionCreators(offerAction);
  const { checkAuthorization } = useActionCreators(userActions);
  const {fetchFavorites} = useActionCreators(favoritesActions);

  useEffect(() => {
    fetchOffers()
      .unwrap()
      .catch(() => {
        toast.error(ToastifyErrorMessage.UploadOffer);
      });

  }, [fetchOffers]);

  const token = getToken();
  useEffect(() => {
    checkAuthorization();
  }, [token, checkAuthorization]);

  useEffect(() => {
    if (token) {
      fetchFavorites();
    }
  }, [token, fetchFavorites]);


  const isLoading = useAppSelector(selectIsLoading);


  if (isLoading) {
    return (
      <Spiner />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            path={AppRoute.MainPage}
            element={<Main/>}
          />
          <Route
            path={AppRoute.LoginPage}
            element={
              <ProtectedRoute onlyAuth>
                <Login/>
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.FavoritesPage}
            element={
              <ProtectedRoute>
                <Favorites/>
              </ProtectedRoute>
            }
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
