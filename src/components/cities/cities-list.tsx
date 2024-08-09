import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app-dispatch';
import { CITIES, AppRoute } from '../../const';
import { changeCity } from '../../store/action';


function CitiesList(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  const cityTabClickHandler = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    dispatch(changeCity({city: currentTarget.innerText}));
  };

  return (

    <ul className="locations__list tabs__list">
      {
        CITIES.map((city) => (
          <li key={`${city}-tab`} className="locations__item">
            <Link className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`} to = {AppRoute.MainPage} onClick={cityTabClickHandler}>
              <span>{city}</span>
            </Link>

          </li>))
      }
    </ul>
  );
}

export default CitiesList;
