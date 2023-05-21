import { useState, useEffect, useContext } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesApi from "../../utils/MoviesApi";
import {
  filterMovies,
  filterShortMovies,
  transformMovies,
} from "../../utils/utils";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";

function Movies({ savedMoviesList, onLikeClick }) {
  const currentUser = useContext(CurrentUserContext);

  const [initialMovies, setInitialMovies] = useState([]); // фильмы полученные с запроса
  const [filteredMovies, setFilteredMovies] = useState([]); // отфильтрованные по чекбоксу и запросу фильмы
  const [checkboxValue, setCheckboxValue] = useState(false); //состояние чекбокса
  const [allMovies, setAllMovies] = useState([]); // все фильмы от сервера
  const [isNothingFound, setIsNothingFound] = useState(false); // если ничего не найдено
  const [loading, setLoading] = useState(false);

  // состояние чекбокса
  function handleCheckboxValueChange() {
    setCheckboxValue(!checkboxValue);
    if (!checkboxValue) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(
      `${currentUser.email} - checkboxValue`,
      !checkboxValue
    );
  }

  // проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (
      localStorage.getItem(`${currentUser.email} - checkboxValue`) === "true"
    ) {
      setCheckboxValue(true);
    } else {
      setCheckboxValue(false);
    }
  }, [currentUser]);

  // поиск по массиву и установка состояния
  function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    if (moviesList.length === 0) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem(
      `${currentUser.email} - movies`,
      JSON.stringify(moviesList)
    );
  }

  // поиск по запросу
  function handleSearchSubmit(inputValue) {
    localStorage.setItem(`${currentUser.email} - movieSearch`, inputValue);
    localStorage.setItem(`${currentUser.email} - checkboxValue`, checkboxValue);

    if (allMovies.length === 0) {
      setLoading(true);
      MoviesApi.getAllMovies()
        .then((movies) => {
          setAllMovies(movies);
          handleSetFilteredMovies(
            transformMovies(movies),
            inputValue,
            checkboxValue
          );
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => setLoading(false));
    } else {
      handleSetFilteredMovies(allMovies, inputValue, checkboxValue);
    }
  }

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movies`)
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem(`${currentUser.email} - CheckboxValue`) === 'true'
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);

   // рендер фильмов из локального хранилища
   useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movies`)
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true'
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);

  return (
    <>
      <section className="movies">
        <SearchForm
          checkboxValue={checkboxValue}
          checkboxOnChange={handleCheckboxValueChange}
          onSearchClick={handleSearchSubmit}
        />
        { loading && <Preloader /> }
        {!isNothingFound && (
        <MoviesCardList
          savedMoviesList={savedMoviesList}
          moviesList={filteredMovies}
          onLikeClick={onLikeClick}
        />
        )}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
