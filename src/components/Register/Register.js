import { Link } from "react-router-dom";
import headerLogo from "../../images/header_logo.svg";

function Register() {
  return (
    <section className="register">
      <img src={headerLogo} alt="логотип" className="login__logo" />
      <h1 className="title">Добро пожаловать!</h1>
      <form className="form">
        <div className="form__inputs">
          <p className="form__text">Имя</p>
          <input
            className="form__input"
            placeholder="Виталий"
            name="name"
            minLength="2"
            maxLength="30"
            required
          ></input>
          <span className="form__span form__span_error"></span>
        </div>
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
            placeholder="Введите пароль"
            name="password"
          ></input>
          <span className="form__span form__span_error">
            Что то пошло не так...
          </span>
        </div>
        <button className="form__submit" type="submit">
          Зарегистрироваться
        </button>
        <div className="login__links">
          <p className="login__text">Уже зарегистрированы?</p>
          <Link className="login__text login__text_link" to="signin">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
