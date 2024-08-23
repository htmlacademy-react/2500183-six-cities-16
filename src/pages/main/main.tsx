import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities/cities-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlaceList from '../../components/place-list/place-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { sortOffers } from '../../utils/place-card';
import { selectFilteredOffers, selectMainCity, selectMainSorting } from '../../store/selectors';

function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const currentCity = useAppSelector(selectMainCity);
  const currentSortType = useAppSelector(selectMainSorting);
  const filteredCityOffers = useAppSelector(selectFilteredOffers);
  const currentPlacesCard = sortOffers(filteredCityOffers,currentSortType);
  const isEmpty = currentPlacesCard.length === 0;


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

      <Header/>

      <main className={classNames('page__main', 'page__main--index', {
        'page__main--index-empty': isEmpty,
      })}
      >
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
                <b className="places__found">{currentPlacesCard.length} place{currentPlacesCard.length > 1 && 's'} to stay in {currentCity}</b>
                <PlacesSorting/>
                <PlaceList className={'cities__places-list'} classNameCard= {'cities'} places={currentPlacesCard} onCardMouseOnHandler={handleCardMouseOn} onCardMouseLeaveHandler={handleCardMouseLeave}/>
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
                  <p className="cities__status-description">
                   We could not find any property available at the moment in {currentCity}
                  </p>
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
