import { useFormWithValidation } from "../FormValidation/FormValidation";
import { useEffect } from "react";

function SearchForm(props) {
  const { values, errors, isValid, setValues, setIsValid, handleChange } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchClick(values.query);
  }

  useEffect(() => {
    if (!props.savedMoviesPage) {
      const input = localStorage.getItem("searchQuery");
      if (input) {
        setValues({ query: input });
        setIsValid(true);
      }
    }
  }, [props.savedMoviesPage, setValues, setIsValid]);

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            name="query"
            value={values.query || ""}
            onChange={handleChange}
            required
          />
          <button
            className="search-form__button"
            type="submit"
            disabled={!isValid}
          ></button>
        </div>
        <span className="search-form__error">
          {errors.query ? "Нужно ввести ключевое слово" : ""}
        </span>
      </form>
      <div className="checkbox-container">
        <input
          id="checkbox"
          className="checkbox__input"
          type="checkbox"
          value={props.checkboxValue}
          onChange={props.checkboxOnChange}
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
