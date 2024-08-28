import { ChangeEvent, useState, FormEvent, Fragment } from 'react';
import { toast } from 'react-toastify';
import { useActionCreators} from '../../hooks/use-action-creators';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { reviewActions } from '../../store/reviews-slice/reviews-slice';
import { selectReviewStatus } from '../../store/selectors';
import { TOASTIFY_ERROR_MESSAGE} from '../../const';
import { RATINGS, RequestStatus } from '../../const';

import { ReviewLength } from '../../const';

type FormData = {
  rating: number;
  review: string;
}

type ReviewFormProps = {
  offerId: string;
}

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
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


  const isValid = formData.review.length >= ReviewLength.Min && formData.review.length <= ReviewLength.Max && formData.rating !== 0;


  const { postComment } = useActionCreators(reviewActions);
  const reviewStatus = useAppSelector(selectReviewStatus);
  const isLoading = reviewStatus === RequestStatus.Loading;

  const handleSubmit = (event: FormEvent) => {

    event.preventDefault();

    postComment({
      offerId,
      body: {
        comment: formData.review,
        rating: Number(formData.rating),
      }
    }).unwrap()
      .then(() => {
        setFormData({ rating: 0, review: '' });
      })
      .catch(() => {
        toast.error(TOASTIFY_ERROR_MESSAGE.ValidateReview);
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={raitingChangeHandler}
              checked={Number(formData.rating) === value}
              disabled={isLoading}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}

      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={reviewChangeHandler} value={formData.review} disabled={isLoading}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewLength.Min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid || isLoading}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
