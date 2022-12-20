import { Link } from "react-router-dom";
import headerLogo from "../../images/header_logo.svg";
import { useFormWithValidation } from "../FormValidation/FormValidation";

function Register({onRegister}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleInputValue = (e) => {
    handleChange(e);
  }
  
  const handleSubmitForm = (e) => {
    e.preventDefault()
    onRegister(values.email, values.name, values.password)
  }
  

  return (
    <section className="register">
      <img src={headerLogo} alt="логотип" className="login__logo" />
      <h1 className="title">Добро пожаловать!</h1>
      <form className="form" noValidate
       onSubmit={handleSubmitForm}
       >
        <div className="form__inputs">
          <p className="form__text">Имя</p>
          <input
            className="form__input"
            placeholder="Виталий"
            name="name"
            minLength="2"
            maxLength="30"
            value={values.name || ""}
            onChange={handleInputValue}
            pattern="^(?=.{2,30}$)[A-Za-zа-яА-ЯёЁ/\s/-]*$"
            required
          ></input>
          <span className="form__span form__span_error">{errors.name}</span>
        </div>
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
            placeholder="Введите пароль" 
            name="password" 
            value={values.password || ""}
            onChange={handleInputValue}
            required
          ></input>
          <span className="form__span form__span_error">{errors.password}</span>
        </div>
        <button className={`form__submit ${!isValid && 'form__submit_error'}`}  type="submit">
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
