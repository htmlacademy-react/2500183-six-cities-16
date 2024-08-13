import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loginUser } from '../../store/api-actions';
import { Helmet } from 'react-helmet-async';
import HeaderLogo from '../../components/header/header-logo';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { updateAuthorization } from '../../store/action';
import { AuthorizationStatus } from '../../const';

function Login () : JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef !== null && passwordRef !== null) {
      dispatch(loginUser({email: emailRef.current.value, password: passwordRef.current.value}));
      navigate(AppRoute.MainPage);
    }
  };
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">

            <HeaderLogo/>

          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={ emailRef } className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={ passwordRef } className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Login;
