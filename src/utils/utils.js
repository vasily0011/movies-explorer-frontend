// const baseUrl = 'https://api.movies.vasily0011.nomoredomains.icu'
const baseUrl = 'http://localhost:3002'

export default baseUrl;

export function filterMovies(movies, searchQuery, checkboxValue) {
    const moviesByQuery =  movies.filter((item) => {
      const strRu = String(item.nameRU).toLowerCase();
      const strEn = String(item.nameEN).toLowerCase();
      const searchStr = searchQuery.toLowerCase().trim();
      return (strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1);
    });
  
    if(checkboxValue === true){
      return filterShortMovies(moviesByQuery)
    }
    return moviesByQuery;
  }

  export function filterShortMovies(movies){
    return movies.filter((item) => item.duration < 40);
  }

  export function getTimeWithMin(mints) {
    const hours = Math.floor(mints/60);
    const minutes = mints % 60;
    return `${hours}ч ${minutes}м`;
  }