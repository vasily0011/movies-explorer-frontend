// const baseUrl = 'https://api.movies.vasily0011.nomoredomains.icu'
const baseUrl = "http://localhost:3002";

export default baseUrl;

export function filterMovies(movies, searchQuery, checkboxValue) {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase();
    const movieEn = String(movie.nameEN).toLowerCase();
    const searchMovie = searchQuery.toLowerCase().trim();
    return (
      movieRu.indexOf(searchMovie) !== -1 || movieEn.indexOf(searchMovie) !== -1
    );
  });

  if (checkboxValue === true) {
    return filterShortMovies(moviesByQuery);
  }
  return moviesByQuery;
}

export function transformMovies(movies) {
  movies.forEach((movie) => {
    if (!movie.image) {
      movie.image = "#";
      movie.thumbnail = "#";
    } else {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
      movie.image = `https://api.nomoreparties.co${movie.image.url}`;
    }
    if (!movie.country) {
      movie.country = "Russia";
    }
    if (!movie.nameEN) {
      movie.nameEN = movie.nameRU;
    }
  });
  return movies;
}

export function filterShortMovies(movies) {
  return movies.filter((movie) => movie.duration < 40);
}

export function getTimeWithMin(mints) {
  const hours = Math.floor(mints / 60);
  const minutes = mints % 60;
  return `${hours}ч ${minutes}м`;
}

export function transformDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
}
