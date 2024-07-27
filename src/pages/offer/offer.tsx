import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import PlaceList from '../../components/place-list/place-list';
import { placeCardOffers } from '../../mock/place-card-offers';
import OfferImage from '../../components/offer-page/offer-gallery';
import OfferInsideList from '../../components/offer-page/offer-inside-list';
import Map from '../../components/map/map';
import ReviewForm from '../../components/review-form/review-form';
import { PlaceCardAllT } from '../../types/offer/offer';
import { placeCardAllOffers } from '../../mock/place-card-all-offers';
import Page404 from '../page404/page404';


const PLACE_CARDS_COUNT = 2;
const MIN_BEDROOMS_COUNT = 1;
const MIN_ADULTS_COUNT = 1;
const RATING_WIDTH_STEP = 20;

function Offer(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const currentPlace: PlaceCardAllT | undefined = placeCardAllOffers.find((place: PlaceCardAllT) => place.id === id);

  if (!currentPlace) {
    return <Page404 />;
  }
  const { images, title, description, isPremium, isFavorite, bedrooms, maxAdults, rating, price, goods, host } = currentPlace;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: Offer</title>
      </Helmet>

      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className ="offer__gallery">
              {images.map((srcImage : string) => (
                <OfferImage imageSrc={srcImage} key={crypto.randomUUID()} />
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> : null }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className={`offer__bookmark-button  ${isFavorite ? 'offer__bookmark-button--active' : null} button`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.round(rating) * RATING_WIDTH_STEP}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms}
                  {bedrooms > MIN_BEDROOMS_COUNT ? ' bedrooms' : ' bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                Max {maxAdults}
                  {maxAdults > MIN_ADULTS_COUNT ? ' adults' : ' adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList insideList = {goods}/>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                      </div>
                      <span className="reviews__user-name">
                        Max
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: '80%'}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map className='offer__map'/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList className={'near-places__list'} classNameCard={'near-places'} placesMock={placeCardOffers.slice(PLACE_CARDS_COUNT)} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;


