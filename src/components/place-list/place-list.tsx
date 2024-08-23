import { PlaceCardSample } from '../../types/offer/offer';
import PlaceCard from '../place-card/place-card';


type PlaceListProps = {
  places: PlaceCardSample[];
  className: string;
  classNameCard: string;
  onCardMouseOnHandler?:(placeId: string) => void;
  onCardMouseLeaveHandler?:() => void;
}

const FAVORITE_LIST_CLASS_NAME = 'favorites__places';
const CITIES_PLACES_LIST_CLASS_NAME = 'cities__places-list';

function PlaceList ({className, classNameCard, places, onCardMouseOnHandler, onCardMouseLeaveHandler} :PlaceListProps) : JSX.Element {
  const placesList = className === FAVORITE_LIST_CLASS_NAME ? '' : 'places__list' ;
  const tabsContent = className === CITIES_PLACES_LIST_CLASS_NAME ? 'tabs__content' : '';
  return (
    <div className={`${className} ${placesList} ${tabsContent}`}>
      {places.map((offer) => <PlaceCard className={classNameCard} place={offer} onCardMouseOnHandler={onCardMouseOnHandler} onCardMouseLeaveHandler={onCardMouseLeaveHandler} key={crypto.randomUUID()} />)}
    </div>
  );
}

export default PlaceList;
