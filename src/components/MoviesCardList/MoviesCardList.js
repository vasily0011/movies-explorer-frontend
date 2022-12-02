import { useLocation } from "react-router-dom";
import { films } from "../../constans/Films";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    const { pathname } = useLocation();

    return (
        <section className="moviescards moviescards_saved">
            <ul className="movies__list">
                {films.map((film) => (
                        <MoviesCard
                            key={ film.id }
                            film= {film}
                    />
                ))}
            </ul>

            {films.length > 0 && pathname !== '/saved-movies' && (
                    <div className="movies__button-container">
                        <button className="movies__button" type="button" name="more">Ещё</button>
                    </div>
                )
            }
        </section>
    );
}

export default MoviesCardList;