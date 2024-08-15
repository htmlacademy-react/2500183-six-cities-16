import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities/cities-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlaceList from '../../components/place-list/place-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { sortOffers } from '../../utils/place-card';
import { selectFilteredOffers } from '../../store/selectors';

type MainPageProps = {
  favoritesNumber: number;
}

function Main({favoritesNumber}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);


  const currentCity = useAppSelector((state) => state.main.city);
  const currentSortType = useAppSelector((state) => state.main.sorting);

  const filteredCityOffers = useAppSelector(selectFilteredOffers);
  const currentPlacesCard = sortOffers(filteredCityOffers,currentSortType);

  const handleCardMouseOn = (placeId: string): void => {
    setActiveCard(placeId);
  };

  const handleCardMouseLeave = (): void => {
    setActiveCard(null);
  };


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
            <CitiesList/>
          </section>
        </div>
        {currentPlacesCard.length ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentPlacesCard.length} places to stay in {currentCity}</b>
                <PlacesSorting/>
                <PlaceList className={'cities__places-list'} classNameCard= {'cities'} placesMock={currentPlacesCard} onCardMouseOnHandler={handleCardMouseOn} onCardMouseLeaveHandler={handleCardMouseLeave}/>
              </section>
              <div className="cities__right-section">
                <Map className='cities__map' places={currentPlacesCard} activePlaceId={activeCard} city={currentPlacesCard[0].city}/>
              </div>
            </div>
          </div> :
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>}
      </main>
    </div>
  );
}

export default Main;
