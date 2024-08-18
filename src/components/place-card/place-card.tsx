import { Link, generatePath } from 'react-router-dom';
import { PlaceCardSample } from '../../types/offer/offer';
import { upFirstLetter, calculateRatingWidth } from '../../utils/place-card';
import FavoriteButton from '../favorite-button/favorite-button';
import { AppRoute } from '../../const';

const FAVORITE_CLASS_NAME = 'favorites';
const OFFER_CLASS_NAME = 'offer';

type PlaceCardProps = {
  place: PlaceCardSample;
  className: string;
  onCardMouseOnHandler?:(placeId: string) => void;
  onCardMouseLeaveHandler?:() => void;
}

function PlaceCard({className = 'cities', place, onCardMouseOnHandler, onCardMouseLeaveHandler} : PlaceCardProps): JSX.Element {
  const {price, type, title, previewImage, id, rating, isPremium} = place;
  const url = generatePath(AppRoute.OfferPage, { id });

  const imgWidth = className === FAVORITE_CLASS_NAME ? 150 : 260 ;
  const imgHeight = className === FAVORITE_CLASS_NAME ? 110 : 200;
  const imgWidthBtn = className === OFFER_CLASS_NAME ? 31 : 18 ;
  const imgHeightBtn = className === OFFER_CLASS_NAME ? 33 : 19;
  const cardInfoClassName = className === FAVORITE_CLASS_NAME ? 'favorites__card-info' : '';

  const handleCardOnMouse = () => {
    if(onCardMouseOnHandler) {
      onCardMouseOnHandler(id);
    }
  };

  const handleCardMouseLeave = () => {
    if(onCardMouseLeaveHandler) {
      onCardMouseLeaveHandler();
    }
  };

  return (
    <article className={`${className}__card place-card`} onMouseEnter={handleCardOnMouse} onMouseLeave={handleCardMouseLeave}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null }
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to= {url}>
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place image" />
        </Link>
      </div>
      <div className={`${cardInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offerId={id} width={imgWidthBtn} height = {imgHeightBtn} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: calculateRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to= {url}>Beautiful &amp; {title}</Link>
        </h2>
        <p className="place-card__type">{upFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

