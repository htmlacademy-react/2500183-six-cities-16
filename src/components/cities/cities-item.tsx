import { Link } from 'react-router-dom';
import { AppRoute, ACTIVE_CITY } from '../../const';

function CitiesItem ({city} : {city : string}) : JSX.Element {
  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${ACTIVE_CITY === city ? 'tabs__item--active' : ''}`} to = {AppRoute.MainPage}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CitiesItem;
