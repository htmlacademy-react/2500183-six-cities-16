import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Page404(): JSX.Element {
  return (
    <React.Fragment>
      <h1 className='not_found'>
        404.
      </h1>
      <p>Пожалуйста вернитесь на главную страницу!!!. <a><Link to={AppRoute.MainPage}>Главная!!!</Link></a></p>
    </React.Fragment>
  );
}

export default Page404;
