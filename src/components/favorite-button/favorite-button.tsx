import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { selectAuthorizationStatus } from '../../store/selectors';
import { AuthorizationStatus, AppRoute, TOASTIFY_ERROR_MESSAGE } from '../../const';
import { useActionCreators } from '../../hooks/use-action-creators';
import { favoritesActions } from '../../store/favorite-slice/favorite-slice';
import { selectFavoriteOffer } from '../../store/selectors';
import classNames from 'classnames';

interface FavoriteButtonProps {
  bemBlock?: 'offer' | 'place-card';
  width: number;
  height: number;
  offerId: string;
  offerPage?: boolean;
}


function FavoriteButton({bemBlock = 'place-card',width, height, offerId, offerPage }: FavoriteButtonProps) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  const favoriteOffer = useAppSelector(selectFavoriteOffer);
  const isFavorite = favoriteOffer.some((offer) => offer.id === offerId && offer.isFavorite);

  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;

  const buttonClass = `${bemBlock}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    {
      'place-card__bookmark-button--active': isFavorite,
      'offer__bookmark-button--active': isFavorite && offerPage
    },
    'button'
  );


  const { changeFavorite, fetchFavorites } = useActionCreators(favoritesActions);

  function handleClick() {
    (async () => {
      try {
        if (authorizationStatus !== AuthorizationStatus.Auth) {
          navigate(AppRoute.LoginPage);
          return;
        }
        await changeFavorite({
          offerId,
          status: Number(!isFavorite)
        }).unwrap();
        fetchFavorites();
      } catch (error) {
        toast.error(TOASTIFY_ERROR_MESSAGE.UploadOffer);
      }
    })();
  }

  return (
    <button className={favoriteClass} type="button" onClick={handleClick}>
      <svg className={`${bemBlock}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

export default FavoriteButton;

