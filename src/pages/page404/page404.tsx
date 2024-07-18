import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';

function Page404(): JSX.Element {
  return (
    <React.Fragment>
      <Helmet>
        <title>6 cities: 404page</title>
      </Helmet>
      <h1 className='not_found'>
        404.
      </h1>
      <p>Пожалуйста вернитесь на главную страницу!!!. <span><Link to={AppRoute.MainPage}>Главная!!!</Link></span></p>
    </React.Fragment>
  );
}

export default Page404;
