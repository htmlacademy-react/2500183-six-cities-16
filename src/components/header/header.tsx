import {Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const';
import HeaderLogo from '../header/header-logo';
import React from 'react';
import { useAppSelector } from '../../hooks/use-app-dispatch';

type HeaderProps = {
  favoritesNumber : number;
}

function Header({favoritesNumber} : HeaderProps) : JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo/>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FavoritesPage}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  { authorizationStatus === AuthorizationStatus.Auth ?
                    <React.Fragment>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoritesNumber}</span>
                    </React.Fragment> : null }
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.LoginPage}>
                  <span className="header__signout">{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in' }</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
