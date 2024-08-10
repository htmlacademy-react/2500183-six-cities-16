import { ChangeEvent, useState } from 'react';
import { REVIEW_LENGTH } from '../../const';

type FormData = {
  rating: number;
  review: string;
}

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    rating: 0,
    review: ''
  });

  const raitingChangeHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.tagName === 'INPUT') {
      setFormData({...formData, rating: parseInt(target.value, 10)});
    }
  };

  const reviewChangeHandler = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    if (target.tagName === 'TEXTAREA') {
      setFormData({...formData, review: target.value});
    }
  };

  const reviewCheck = formData.review.length < REVIEW_LENGTH.MIN || formData.review.length > REVIEW_LENGTH.MAX || formData.rating === 0;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={raitingChangeHandler}>
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={reviewChangeHandler} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_LENGTH.MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={reviewCheck}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;