import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { selectAuthorizationStatus } from '../../store/selectors';
import { AuthorizationStatus, AppRoute, ToastifyErrorMessage } from '../../const';
import { useActionCreators } from '../../hooks/use-action-creators';
import { favoritesActions } from '../../store/favorite-slice/favorite-slice';
import { selectFavoriteOffer } from '../../store/selectors';
import classNames from 'classnames';

interface FavoriteButtonProps {
  bemBlock?: 'offer' | 'place-card';
  width: number;
  height: number;
  offerId: string;
}


function FavoriteButton({bemBlock = 'place-card',width, height, offerId }: FavoriteButtonProps) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  const favoriteOffer = useAppSelector(selectFavoriteOffer);
  const isFavorite = favoriteOffer.some((offer) => offer.id === offerId && offer.isFavorite);

  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;

  const buttonClass = `${bemBlock}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    {
      [`${buttonClass}--active`]: isFavorite
    },
    'button'
  );

  const { changeFavorite, fetchFavorites } = useActionCreators(favoritesActions);

  function handleButtonClick() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.LoginPage);
      return;
    }
    changeFavorite({
      offerId,
      status: Number(!isFavorite)
    })
      .unwrap()
      .then(() => fetchFavorites())
      .catch(() => {
        toast.error(ToastifyErrorMessage.UploadOffer);
      });
  }

  return (
    <button className={favoriteClass} type="button" onClick={handleButtonClick}>
      <svg className={`${bemBlock}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

export default FavoriteButton;

