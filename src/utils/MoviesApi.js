class MoviesApi {
    constructor( url ) {
      this._url = url;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getAllMovies() {
      return fetch(`${this._url}`, {
        // method: 'GET',
        // headers: { 'Content-Type': 'application/json' },
      }).then(this._checkResponse);
    }
  }

  
  export default new MoviesApi("https://api.nomoreparties.co/beatfilm-movies");