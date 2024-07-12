import Header from '../../components/header/header';
import CitiesItem from '../../components/cities/cities-item';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import { placeCardOffers } from '../../mock/place-card-offers';
import { CITIES } from '../../const';
import { MainProps } from '../../types/main-page/main-props';

function Main({offersCount}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => <CitiesItem city = {city} key = {city}/>)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>

              <PlacesSorting/>

              <div className="cities__places-list places__list tabs__content">
                {placeCardOffers.map((offer) => <PlaceCard className='cities__card'place={offer} key={crypto.randomUUID()} />)}
              </div>
            </section>
            <div className="cities__right-section">

              <Map className='cities__map'/>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
