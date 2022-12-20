import { useState, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesApi from '../../utils/MoviesApi';
import { filterMovies, filterShortMovies } from '../../utils/utils';

function Movies(props) {

  const existQuery = localStorage.getItem('searchQuery')
  const existSearch = JSON.parse(localStorage.getItem('searchedMovies'));
  const [searchQuery, setSearchQuery] = useState(existQuery ? existQuery : '');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [isSavedSearchedMovie, setIsSavedSearchedMovie] = useState(existSearch? true: false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);

  // const [inputValue, setInputValue] = useState("");
  // const [searchActive, setSearchActive] = useState(false);

  function handleCheckboxValueChange () {
    setCheckboxValue(!checkboxValue);
    // if (inputValue) {
    //   setSearchActive(false)
    //   ShowFilms(inputValue)
    // } else {
    //   setSearchActive(true)
    // }
  }

  // обработчик установки значения, когда ничего не найдено
  function handleCheckFilteredMovies(arr) {
    arr.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
	}

   // обработчик отправки формы
   function handleSearchSubmit(value) {
    // setIsMoviesLoaging(true);
    setSearchQuery(value);
    localStorage.setItem('searchQuery', value);

    if (!allMovies.length) {
      // console.log("Cтейт allMovies пустой")
      MoviesApi.getAllMovies()
        .then((data) => {
          setAllMovies(data);
          setIsSavedSearchedMovie(false)
          localStorage.setItem('allMovies', JSON.stringify(data)); // тестово
          handleSetFilteredMovies(data, value);
        })
        .catch((err) => {
          // setIsError(true);
          console.log(err);
        })
        // .finally(() =>
        //  setIsMoviesLoaging(false)
        //  )
    } else {
      // console.log("allMovies имеет данные")
      handleSetFilteredMovies(allMovies, value);
      // setIsMoviesLoaging(false);
    }
  }

  function handleSetFilteredMovies (movies, query) {
    const moviesList = filterMovies(movies, query, checkboxValue); // все фильмы по запросу
    // сохраняем с учетом переключателя shortFilms
    filterShortMovie(moviesList)
    localStorage.setItem('searchedMovies', JSON.stringify(moviesList));
  }

   // ф-я фильтрации массива и установки его в хранилище и стейт
   function filterShortMovie (arr) {
    setFilteredMovies(checkboxValue === true ? filterShortMovies(arr) : arr);
    // console.log(arr, filteredMovies)
  }



  return (
    <>
      <section className="movies">
        <SearchForm 
         checkboxValue={checkboxValue}
         checkboxOnChange={handleCheckboxValueChange}
         onSearchClick={handleSearchSubmit}
        />
        <MoviesCardList
        isEmptyList={isNothingFound} />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
