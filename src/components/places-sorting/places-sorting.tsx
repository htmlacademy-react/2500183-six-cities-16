import { useState } from 'react';
import classNames from 'classnames';
import { changeSortBy } from '../../store/action';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { Sorting } from '../../const';
import { useAppSelector } from '../../hooks/use-app-dispatch';

function PlacesSorting () : JSX.Element {

  const [ isFormOpened, setFormOpened ] = useState(false);

  const currentSortType = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();

  const handlePlacesSortingClick = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    dispatch(changeSortBy({sorting: currentTarget.innerHTML as Sorting}));
    setFormOpened(!isFormOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setFormOpened(!isFormOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={classNames('places__options places__options--custom',{

        'places__options--opened': isFormOpened })}
      >
        { Object.entries(Sorting).map(([sortKey, sortValue], index) => (
          <li
            key={sortKey}
            className={classNames({
              'places__option': true,
              'places__option--active': currentSortType === sortValue})}
            tabIndex={index}
            onClick={handlePlacesSortingClick}
          >{ sortValue }
          </li>
        )
        )}
      </ul>
    </form>
  );
}

export default PlacesSorting;
