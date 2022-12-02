function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <div className="profile__inputs">
          <p className="profile__text">Имя</p>
          <input className="profile__input" placeholder="Виталий" />
        </div>
        <div className="profile__inputs">
          <p className="profile__text profile__text_email">E-mail</p>
          <input className="profile__input profile__input_email" placeholder="pochta@yandex.ru" />
        </div>
        <button className="profile__button profile__button_edit">Редактировать</button>
      </form>
      <button className="profile__button profile__botton_logout">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
