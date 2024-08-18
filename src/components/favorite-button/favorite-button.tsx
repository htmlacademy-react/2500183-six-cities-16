import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { selectAuthorizationStatus } from '../../store/selectors';
import { AuthorizationStatus, AppRoute, TOASTIFY_ERROR_MESSAGE } from '../../const';
import { useActionCreators } from '../../hooks/use-action-creators';
import { favoritesActions } from '../../store/favorite-slice/favorite-slice';
import { selectFavoriteOffer } from '../../store/selectors';

interface FavoriteButtonProps {
  width: number;
  height: number;
  offerId: string;
}


function FavoriteButton({width, height, offerId }: FavoriteButtonProps) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  const favoriteOffer = useAppSelector(selectFavoriteOffer);
  const isFavorite = favoriteOffer.some((offer) => offer.id === offerId && offer.isFavorite);

  const isFavoriteClassName = isFavorite ? 'place-card__bookmark-button--active' : '';


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
    <button className={`place-card__bookmark-button ${isFavoriteClassName} button`} type="button" onClick={handleClick}>
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;

