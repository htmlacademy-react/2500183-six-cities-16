import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CitiesItem from '../../components/cities/cities-item';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlaceList from '../../components/place-list/place-list';
import Map from '../../components/map/map';
import { CITIES, ACTIVE_CITY } from '../../const';
import { PlaceCardT } from '../../types/offer/offer';

type MainPageProps = {
  placesMock: PlaceCardT[];
  favoritesNumber: number;
}

function Main({placesMock, favoritesNumber}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cardMouseOnHandler = (placeId: string): void => {
    setActiveCard(placeId);
  };

  const cardMouseLeaveHandler = (): void => {
    setActiveCard(null);
  };

  const cityCentry = placesMock[3].city;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header favoritesNumber={favoritesNumber}/>

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

              <PlaceList className={'cities__places-list'} classNameCard= {'cities'} placesMock={placesMock} cardMouseOnHandler={cardMouseOnHandler} cardMouseLeaveHandler={cardMouseLeaveHandler}/>

            </section>
            <div className="cities__right-section">

              <Map className='cities__map' placesMock={placesMock} activePlaceId={activeCard} city={cityCentry}/>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
