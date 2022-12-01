import { Route, useLocation, Switch } from "react-router-dom";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import Profile from "../Profile/Profile.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import PageNotFound from "../PageNotFound/PageNotFound.js";
function App() {
  const location = useLocation();
  return (
    // <CurrentUserContext.Provider value={currentUser}>

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
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route> 
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
