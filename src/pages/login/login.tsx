import { FormEvent, ReactEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderLogo from '../../components/header/header-logo';
import { useActionCreators } from '../../hooks/use-action-creators';
import { userActions } from '../../store/user-slice/user-slice';
import { toast } from 'react-toastify';
import { ToastifyErrorMessage, AppRoute } from '../../const';


type HTMLLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;

function Login () : JSX.Element {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { loginUser } = useActionCreators(userActions);

  const handleChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  function validatePassword(password : string) : boolean {
    return PASSWORD_REGEXP.test(password);
  }

  function handleSubmit(event: FormEvent<HTMLLoginForm>) {
    event.preventDefault();
    if (!validatePassword(formData.password)) {
      toast.error(ToastifyErrorMessage.ValidatePassword);
      return;
    }
    loginUser(formData).unwrap()
      .then(() => {
        setFormData({
          ...formData,
          email: '',
          password: '',
        });
      })
      .catch(() => {
        setFormData({
          ...formData,
          email: formData.email,
          password: formData.password,
        });
      });
  }

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
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.MainPage}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Login;
