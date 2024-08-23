import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PlaceList from '../../components/place-list/place-list';
import FavoritesEmpty from '../../components/favorite-page/favorites-empty';
import { useActionCreators } from '../../hooks/use-action-creators';
import { favoritesActions } from '../../store/favorite-slice/favorite-slice';
import { toast } from 'react-toastify';
import { TOASTIFY_ERROR_MESSAGE } from '../../const';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { selectFavoriteOffer } from '../../store/selectors';

function Favorites () : JSX.Element {
  const { fetchFavorites } = useActionCreators(favoritesActions);

  useEffect(() => {
    fetchFavorites()
      .unwrap()
      .catch(() => {
        toast.error(TOASTIFY_ERROR_MESSAGE.UploadOffer);
      });

  }, [fetchFavorites]);

  const favoriteOffers = useAppSelector(selectFavoriteOffer);
  const cityNames = favoriteOffers.reduce((newOffers: string[], offer) => {
    if (!(newOffers.includes(offer.city.name))) {
      newOffers.push(offer.city.name);
    }
    return newOffers;
  }, []);


  return (
    <div className = {`page ${!favoriteOffers.length && 'page--favorites-empty'}`}>
      <Helmet>
        <title>6 cities: Favorites</title>
      </Helmet>
      <Header/>
      <main className={`page__main page__main--favorites ${favoriteOffers.length ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${!favoriteOffers.length && 'favorites--empty'}`}>
            <h1 className={`${favoriteOffers.length ? 'favorites__title' : 'visually-hidden' }`}>{`${favoriteOffers.length ? 'Saved listing' : 'Favorites (empty)' }`}</h1>
            {favoriteOffers.length ?
              <ul className="favorites__list">
                {
                  cityNames.map((city) => {
                    const cityOffers = favoriteOffers.filter((offer) => offer.city.name === city);
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <PlaceList className={'favorites__places'} classNameCard={'favorites'} places={cityOffers} />
                      </li>
                    );
                  })
                }
              </ul> : <FavoritesEmpty/>}
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
export default Favorites;
