import { useLocation } from "react-router-dom";

function MoviesCard({ film, savedMoviesToggle, filmsSaved }) {
  const { pathname } = useLocation();
  // const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="card__content">
        <img
          className="card__image"
          src={`${film.image}`}
          alt={film.title}
        ></img>
        <div className="card__description">
            <div className="card__info">
          <p className="card__title">{film.title}</p>
          <p className="card__duration"> {film.duration}</p>
          </div>
          {pathname === "/saved-movies" ? (
            <button
              type="button"
              className="card__button card__button_delete"
            />
          ) : (
            <button
              type="button"
              className={`card__button card__button_like`}
            />
          )}
        </div>
        
      </div>
    </li>
  );
}

export default MoviesCard;
