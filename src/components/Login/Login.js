import { Link } from "react-router-dom";
import { useFormWithValidation } from "../FormValidation/FormValidation";
import headerLogo from "../../images/header_logo.svg";

function Login({onLogin}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleInputValue = (e) => {
    handleChange(e);
  }
  
  const handleSubmitForm = (e) => {
    e.preventDefault()
    onLogin(values.password, values.email)
  }

  return (
    <section className="login">
      <img src={headerLogo} alt="логотип" className="login__logo " />
      <h1 className="title">Рады видеть!</h1>
      <form className="form" onSubmit={handleSubmitForm}>
        <div className="form__inputs">
          <p className="form__text">E-mail</p>
          <input
            className="form__input"
            placeholder="pochta@yandex.ru"
            name="email" 
            value={values.email || ""}
            onChange={handleInputValue}
            type="email"
            pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
            required
          ></input>
          <span className="form__span form__span_error">{errors.email}</span>
        </div>
        <div className="form__inputs">
          <p className="form__text">Пароль</p>
          <input
            className="form__input"
            type="password"
            placeholder=""
            name="password" 
            value={values.password || ""}
            onChange={handleInputValue}
            required
          ></input>
          <span className="form__span form__span_error">{errors.password}</span>
        </div>
        {/* <button className="form__submit form__submit_login" type="submit"> */}
        <button className={`form__submit form__submit_login ${!isValid && 'form__submit_error'}`} type='submit'>
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
