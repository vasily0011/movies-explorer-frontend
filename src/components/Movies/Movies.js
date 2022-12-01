// import { useState, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  // const [checkboxValue, setCheckboxValue] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  // const [searchActive, setSearchActive] = useState(false);


  // function handleCheckboxValueChange () {
  //   setCheckboxValue(!checkboxValue);
  //   if (inputValue) {
  //     setSearchActive(false)
  //   } else {
  //     setSearchActive(true)
  //   }
  // }

  return (
    <>
      <section className="movies">
        <SearchForm 
        //  checkboxValue={checkboxValue}
        />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
