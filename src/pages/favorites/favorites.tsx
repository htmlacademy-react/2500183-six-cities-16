import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { PlaceCardProps } from '../../types/offer/offer';
import PlaceCard from '../../components/place-card/place-card';
import FavoritesEmpty from '../../components/favorite-page/favorites-empty';

type FavoritePageProps = {
  placesMock: PlaceCardProps[];
}

function Favorites ({placesMock}: FavoritePageProps) : JSX.Element {
  const favoriteOffers = placesMock.filter((offer) => offer.isFavorite);
  const cityNames = favoriteOffers.reduce((newOffers: string[], offer) => {
    if (!(newOffers.includes(offer.city.name))) {
      newOffers.push(offer.city.name);
    }
    return newOffers;
  }, []);

  return (
    <div className= "page">
      <Helmet>
        <title>6 cities: Favorites</title>
      </Helmet>
      <Header/>
      <main className={`page__main page__main--favorites ${favoriteOffers.length ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className="favorites">
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
                        <div className="favorites__places">
                          {cityOffers.map((offer) => <PlaceCard className='favorites' place={offer} key={crypto.randomUUID()} />)}
                        </div>
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
