import { Link } from "react-router-dom";
import headerLogo from "../../images/header_logo.svg";

function Login() {
  return (
    <section className="login">
      <img src={headerLogo} alt="логотип" className="login__logo " />
      <h1 className="title">Рады видеть!</h1>
      <form className="form">
        <div className="form__inputs">
          <p className="form__text">E-mail</p>
          <input
            className="form__input"
            placeholder="pochta@yandex.ru"
            name="email"
          ></input>
          <span className="form__span form__span_error"></span>
        </div>
        <div className="form__inputs">
          <p className="form__text">Пароль</p>
          <input
            className="form__input"
            type="password"
            placeholder=""
            name="password"
          ></input>
          <span className="form__span form__span_error"></span>
        </div>
        <button className="form__submit form__submit_login" type="submit">
          Войти
        </button>
        <div className="login__links">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <Link className="login__text login__text_link " to="signup">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
