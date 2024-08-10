import { Reviews } from '../../types/reviews/reviews';

const RATING_WIDTH_STEP = 20;

type ReviewsListProps = {
  reviews: Reviews[];
}

type ReviewsItemProps = {
  review: Reviews;
}


function ReviewsItem ({review} : ReviewsItemProps) : JSX.Element {
  const {user, rating, comment, date} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${user.avatarUrl}`} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * RATING_WIDTH_STEP}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</time>
      </div>
    </li>
  );
}


function ReviewsList ({reviews} :ReviewsListProps) : JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsItem review={review} key={crypto.randomUUID()} />)}
    </ul>
  );
}

export default ReviewsList;
