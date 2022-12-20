import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";
import { useFormWithValidation } from "../FormValidation/FormValidation";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const isButtonActive = (isValid && (currentUser.name !== values.name || currentUser.email !== values.email));

  const handleInputValue = (e) => {
    handleChange(e);
  };

  useEffect(() => {
    resetForm(currentUser);
  }, [resetForm, currentUser])

  // useEffect(() => {
  //   if (currentUser) {
  //     setValues({
  //       name: currentUser.name,
  //       email: currentUser.email,
  //     });
  //   }
  // }, [setValues, currentUser]);



  // function handleSubmitForm(e) {
  //   e.preventDefault();
  //   onUpdateUser({
  //         name: values.name,
  //         email: values.email
  //       });
  // }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.onUpdateUser(
      values.name,
      values.email
    );
  };

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form" onSubmit={handleSubmitForm}>
        <div className="profile__inputs">
          <p className="profile__text">Имя</p>
          <input
            className="profile__input"
            value={values.name || currentUser.name}
            id="name"
            name="name"
            onChange={handleInputValue}
            pattern="^[A-Za-zА-Яа-я-\s]+$"
            minLength="2"
            maxLength="30"
            required
          />
           <span className="form__span form__span_error">{errors.name}</span>
        </div>
        <div className="profile__inputs">
          <p className="profile__text profile__text_email">E-mail</p>
          <input
            className="profile__input profile__input_email"
            id="email"
            name="email"
            value={values.email || currentUser.email}
            onChange={handleInputValue}
            type="email"
            pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
            required
          />
           <span className="form__span form__span_error">{errors.email}</span>
        </div>
        <button className="profile__button profile__button_edit" 
        disabled={!isButtonActive}
        >
          Редактировать
        </button>
      </form>
      <button className="profile__button profile__botton_logout"
      onClick={props.onSignOut}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
