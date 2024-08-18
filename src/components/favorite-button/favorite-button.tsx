interface FavoriteButtonProps {
  isFavoriteClassName: string;
  width: number;
  height: number;
  isFavorite: boolean;
}


function FavoriteButton({isFavoriteClassName, width, height, isFavorite }: FavoriteButtonProps) {
  return (
    <button className={`place-card__bookmark-button ${isFavoriteClassName} button`} type="button">
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;

