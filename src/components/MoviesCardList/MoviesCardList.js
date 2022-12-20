import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowSize from '../../utils/useWindowSize'
import { useState } from "react";

function MoviesCardList(props) {
    const { pathname } = useLocation();
    const size = useWindowSize();
    const [showCardList, setShowCardList] = useState([]);

  function loadMovies() {
    let count;
    if (size.width >= 1280) {
     count = 3
    } else if (size.width >= 768) {
     count = 2
    } else if (size.width >= 320) {
     count = 1
    }
}

function getSavedMovieCard(arr, id) {
    return arr.find((item) => {
      return item.movieId === id;
    });
  }

// ф-ия создания массива стандартных карточек
function getInitialMoviesPage() {
    return showCardList.map((item) => {
      const isCardSaved = getSavedMovieCard(props.savedMovies, item.id);
      // получение ID карты в формате базы сохраненных фильмов
      const savedCardId = isCardSaved ? isCardSaved._id : null;
      return (
        <MoviesCard
          key={item.id}
          card={{
            _id: savedCardId,
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            trailerLink: item.trailerLink,
            nameRU: item.nameRU,
            nameEN: item.nameEN,
            movieId: item.id,
            image: `https://api.nomoreparties.co${item.image.url}`,
            thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`}}
        //   onLike={onLike}
        //   onDelete={onDelete}
          liked={isCardSaved ? true : false}
        //   savedPage={savedMoviesPage}
        />)
    })
  }


    return (
        <section className="moviescards moviescards_saved">
            <ul className="movies__list">
                {item.map((film) => (
                        <MoviesCard
                            key={ film.id }
                            film= {film}
                    />
                ))}
            </ul>

            {item.length > 0 && pathname !== '/saved-movies' && (
                    <div className="movies__button-container">
                        <button className="movies__button" type="button" name="more">Ещё</button>
                    </div>
                )
            }
        </section>
    );
}

export default MoviesCardList;