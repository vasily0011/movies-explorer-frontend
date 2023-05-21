import { useContext, useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {
  filterMovies,
  filterShortMovies,
} from "../../utils/utils";
import Footer from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedMovies({ onDeleteClick, savedMoviesList }) {
  const currentUser = useContext(CurrentUserContext);

  
  const [checkboxValue, setCheckboxValue] = useState(false); //состояние чекбокса
  const [isNothingFound, setIsNothingFound] = useState(false); // если ничего не найдено
  const [showedMovies, setShowedMovies] = useState(savedMoviesList); // показываемывые фильмы
  const [filteredMovies, setFilteredMovies] = useState(showedMovies); // отфильтрованные по запросу фильмы

  // поиск по запросу
  function handleSearchSubmit(inputValue) {
    const moviesList = filterMovies(savedMoviesList, inputValue, checkboxValue);
    if (moviesList.length === 0) {
      setIsNothingFound(true);
      alert("Ничего не найдено");
    } else {
      setIsNothingFound(false);
      setFilteredMovies(moviesList);
      setShowedMovies(moviesList);
    }
  }

  // состояние чекбокса
  function handleShortFilms() {
    if (!checkboxValue) {
      setCheckboxValue(true);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0
        ? setIsNothingFound(true)
        : setIsNothingFound(false);
    } else {
      setCheckboxValue(false);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, false);
      filteredMovies.length === 0
        ? setIsNothingFound(true)
        : setIsNothingFound(false);
      setShowedMovies(filteredMovies);
    }
  }

  // проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (
      localStorage.getItem(`${currentUser.email} - shortSavedMovies`) === "true"
    ) {
      setCheckboxValue(true);
      setShowedMovies(filterShortMovies(savedMoviesList));
    } else {
      setCheckboxValue(false);
      setShowedMovies(savedMoviesList);
    }
  }, [savedMoviesList, currentUser]);

  useEffect(() => {
    setFilteredMovies(savedMoviesList);
    savedMoviesList.length !== 0
      ? setIsNothingFound(false)
      : setIsNothingFound(true);
  }, [savedMoviesList]);

  return (
    <>
      <section className="saved-movies">
        <SearchForm
          checkboxValue={checkboxValue}
          handleSearchSubmit={handleSearchSubmit}
          handleShortFilms={handleShortFilms}
        />
         {!isNothingFound && (
        <MoviesCardList
        moviesList={showedMovies}
        savedMoviesList={savedMoviesList}
        onDeleteClick={onDeleteClick}
        />
         )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
