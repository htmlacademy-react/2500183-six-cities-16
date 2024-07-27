import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CitiesItem from '../../components/cities/cities-item';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlaceList from '../../components/place-list/place-list';
import Map from '../../components/map/map';
import { CITIES, ACTIVE_CITY } from '../../const';
import { PlaceCardProps } from '../../types/offer/offer';

type MainPageProps = {
  placesMock: PlaceCardProps[];
}

function Main({placesMock}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

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
              <b className="places__found">{placesMock.length} places to stay in {ACTIVE_CITY}</b>

              <PlacesSorting/>

              <PlaceList className={'cities__places-list'} classNameCard= {'cities'} placesMock={placesMock} />

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
