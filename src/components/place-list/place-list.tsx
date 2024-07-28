import { PlaceCardT } from '../../types/offer/offer';
import PlaceCard from '../place-card/place-card';


type PlaceListProps = {
  placesMock: PlaceCardT[];
  className: string;
  classNameCard: string;
  cardMouseOnHandler?:(placeId: string) => void;
  cardMouseLeaveHandler?:() => void;
}

const FAVORITE_LIST_CLASS_NAME = 'favorites__places';
const CITIES_PLACES_LIST_CLASS_NAME = 'cities__places-list';

function PlaceList ({className, classNameCard, placesMock, cardMouseOnHandler, cardMouseLeaveHandler} :PlaceListProps) : JSX.Element {
  const placesList = className === FAVORITE_LIST_CLASS_NAME ? '' : 'places__list' ;
  const tabsContent = className === CITIES_PLACES_LIST_CLASS_NAME ? 'tabs__content' : '';
  return (
    <div className={`${className} ${placesList} ${tabsContent}`}>
      {placesMock.map((offer) => <PlaceCard className={classNameCard} place={offer} cardMouseOnHandler={cardMouseOnHandler} cardMouseLeaveHandler={cardMouseLeaveHandler} key={crypto.randomUUID()} />)}
    </div>
  );
}

export default PlaceList;
