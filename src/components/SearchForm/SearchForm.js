function SearchForm(props) {
  return (
    <section className="search">
      <form className="search-form">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search-form__button" type="submit"></button>
          <span className="search-form__error"></span>
      </form>
      <div className="checkbox-container">
        <input
          id="checkbox"
          className="checkbox__input"
          type="checkbox"
          // value={props.checkboxValue}
          // onChange={props.checkboxOnChange}
        ></input>
        {props.checkboxValue ? (
          <label
            htmlFor="checkbox"
            className="checkbox__style checkbox__active"
          ></label>
        ) : (
          <label
            htmlFor="checkbox"
            className="checkbox__style checkbox__disactive"
          ></label>
        )}
        <span className="checkbox__text">Короткометражки</span>
      </div>
    </section>
  );
}

export default SearchForm;
