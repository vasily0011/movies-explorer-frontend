import { useLocation } from "react-router-dom";
import { transformDuration } from '../../utils/utils.js';

function MoviesCard({ movie, saved, onLikeClick, onDeleteClick }) {
  const location = useLocation();

  function handleLikeClick() {
    onLikeClick(movie);
  }

  function handleDeleteClick() {
    onDeleteClick(movie);
  }

  return (
    <li className="card">
      <div className="card__content">
        <img
          className="card__image"
          src={`${movie.image}`}
          alt={movie.nameRU}
        ></img>
        <div className="card__description">
            <div className="card__info">
          <p className="card__title">{movie.nameRU}</p>
          <p className="card__duration"> {transformDuration(movie.duration)}</p>
          </div>
          {location.pathname === '/movies' && (
            <button
              type="button"
              className={`card__button card__button_${
                saved ? 'like-active' : 'like'
              }`}
              onClick={saved ? handleDeleteClick : handleLikeClick}
              aria-label={`${
                saved ? 'Удалить фильм из сохранённых' : 'Сохранить фильм'
              }`}
              title={`${
                saved ? 'Удалить фильм из сохранённых' : 'Сохранить фильм'
              }`}
            ></button>
          )}
          {location.pathname === '/saved-movies' && (
            <button
              type="button"
              className="card__button card__button_delete"
              onClick={handleDeleteClick}
              aria-label="Удалить фильм из сохранённых"
              title="Удалить фильм из сохранённых"
            ></button>
          )}
        </div>
        
      </div>
    </li>
  );
}

export default MoviesCard;
