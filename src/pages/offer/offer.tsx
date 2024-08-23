import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import PlaceList from '../../components/place-list/place-list';
import OfferImage from '../../components/offer-page/offer-gallery';
import OfferInsideList from '../../components/offer-page/offer-inside-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Page404 from '../page404/page404';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import Map from '../../components/map/map';
import { selectOfferInfo, selectOfferNerby, selectOfferStatus, selectAuthorizationStatus, selectOffersPreviewByID } from '../../store/selectors';
import { useActionCreators } from '../../hooks/use-action-creators';
import { offerActions } from '../../store/offer-slice/offer-slice';
import { reviewActions } from '../../store/reviews-slice/reviews-slice';
import { RequestStatus, AuthorizationStatus } from '../../const';
import { selectReviewItem } from '../../store/selectors';
import Spiner from '../../components/spiner/spiner';
import { upFirstLetter } from '../../utils/place-card';
import FavoriteButton from '../../components/favorite-button/favorite-button';


const MIN_BEDROOMS_COUNT = 1;
const MIN_ADULTS_COUNT = 1;
const RATING_WIDTH_STEP = 20;

enum sliceNearOffersLength {
  MIN = 0,
  MAX = 3
}

enum imageLength {
  Min = 0,
  Max = 6
}


function Offer(): JSX.Element {

  const offerPage = useAppSelector(selectOfferInfo);
  const status = useAppSelector(selectOfferStatus);
  const nearbyOffers = useAppSelector(selectOfferNerby);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const reviews = useAppSelector(selectReviewItem);
  const currentOfferPreview = useAppSelector(selectOffersPreviewByID);

  const { fetchNearBy, fetchOffer } = useActionCreators(offerActions);
  const { fetchComments } = useActionCreators(reviewActions);

  const slicedNearOffersList = nearbyOffers.slice(sliceNearOffersLength.MIN, sliceNearOffersLength.MAX);

  const shortNearOffersListWithCurrent = [...slicedNearOffersList, ...currentOfferPreview];

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    Promise.all([
      fetchOffer(id as string),
      fetchNearBy(id as string),
      fetchComments(id as string),
    ]);
  },
  [fetchOffer, fetchNearBy, fetchComments, id]
  );

  if (status === RequestStatus.Loading) {
    return (
      <Spiner />
    );
  }

  if (status === RequestStatus.Failed || !offerPage) {
    return <Page404 />;
  }
  const { images, title, description, isPremium, type, bedrooms, maxAdults, rating, price, goods, host, id: offerId } = offerPage;
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
              {images.slice(imageLength.Min,imageLength.Max).map((srcImage : string) => (
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

                <FavoriteButton
                  offerId={offerId}
                  bemBlock="offer"
                  width={31}
                  height={33}
                  offerPage
                />

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
                  {upFirstLetter(type)}
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
                  {host.isPro && <span className="offer__user-status">Pro</span>}
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm offerId = {offerId}/>}
              </section>
            </div>
          </div>
          <Map className='offer__map map' places={shortNearOffersListWithCurrent} city={offerPage.city} activePlaceId={id}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList className={'near-places__list'} classNameCard={'near-places'} placesMock={slicedNearOffersList} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;


