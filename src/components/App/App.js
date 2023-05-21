import {
  Route,
  useLocation,
  useHistory,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import Profile from "../Profile/Profile.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import PageNotFound from "../PageNotFound/PageNotFound.js";
import MainApi from "../../utils/MainApi.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

function App() {
  const location = useLocation();
  const history = useHistory();
  const mainApi = new MainApi();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  // const [currentUser, setCurrentUser] = useState({_id: '', name: '', email: ''});

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // handleGetMovies();
      handleGetUser(token);
    } else {
      handleSignOut();
      // setIsLoaderPage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleGetUser(token) {
    mainApi
      .getUserInfo(token)
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
        handleSignOut();
      });
  }

  // useEffect(() => {
  //   console.count("RENDER - TOKEN"); // пустой массив зависимостей - Render только при монтировании
  //   const token = localStorage.getItem("jwt");
  //   if (token) {
  //     mainApi.verifyToken(token)
  //       .then((res) => {
  //         setLoggedIn(true);
  //         history.push(location.pathname);
  //       })
  //       .catch((err) => {
  //         handleSignOut();
  //         console.log(err);
  //       });
  //   }
  //   // setIsLoading(false)
  // }, []);

  function handleSubmitRegister(email, name, password) {
    mainApi
      .register(email, name, password)
      .then(() => {
        setLoggedIn(true);
        history.push("/movies");
        history.go("/");
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
      });
  }

  function handleSubmitLogin(password, email) {
    mainApi
      .authorize(password, email)
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    mainApi
      .updateUserInfo(name, email)
      .then((user) => {
        // setCurrentUser({_id: user._id, name: user.name, email: user.email});
        setCurrentUser(user);
        alert("Данные пользователя успешно отредактированы");
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка редактирования");
      });
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    // setIsLoading(false)
    setCurrentUser({});
    history.push("/");
  }

  // получение массива сохраненных фильмов
  useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          const UserMoviesList = data.filter(
            (m) => m.owner === currentUser._id
          );
          setSavedMoviesList(UserMoviesList);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, loggedIn]);

   // cохранение фильма
   function handleSaveMovie(movie) {
    mainApi
      .addNewMovie(movie)
      .then(newMovie => setSavedMoviesList([newMovie, ...savedMoviesList]))
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile" ||
        location.pathname === "/" ? (
          <Header />
        ) : (
          ""
        )}
        <Switch>
          <Route path="/signup">
            <Register onRegister={handleSubmitRegister} />
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signup" />}
          </Route>
          <Route path="/signin">
            <Login onLogin={handleSubmitLogin} />
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            savedMoviesList={savedMoviesList}
            onLikeClick={handleSaveMovie}
            // onDeleteClick={handleDeleteMovie}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMoviesList={savedMoviesList}
            // onDeleteClick={handleDeleteMovie}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={handleSignOut}
            onUpdateUser={handleUpdateUser}
          />
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
