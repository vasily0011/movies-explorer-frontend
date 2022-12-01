import { useLocation, Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";

function Navigation(props) {
  const location = useLocation();
  return (
    <>
      <div className="navbar">
        {location.pathname === "/movies" && (
          <Link className="navbar__link navbar__link_hidden">Фильмы</Link>
        )}
        {location.pathname === "/movies" && (
          <Link className="navbar__link navbar__link_hidden" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        )}
        {location.pathname === "/saved-movies" && (
          <Link className="navbar__link navbar__link_hidden" to="/movies">
            Фильмы
          </Link>
        )}
        {location.pathname === "/saved-movies" && (
          <Link className="navbar__link navbar__link_hidden" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        )}
        {location.pathname === "/profile" && (
          <Link className="navbar__link navbar__link_hidden" to="/movies">
            Фильмы
          </Link>
        )}
        {location.pathname === "/profile" && (
          <Link className="navbar__link navbar__link_hidden" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        )}
      </div>
      <div className="header__container">
        {location.pathname === "/" && (
          <Link className="header__element header__element_link" to="/signup">
            Регистрация
          </Link>
        )}
        {location.pathname === "/movies" && (
          <Link className="header__element header__element_hidden header__element_link" to="/signup">
            Аккаунт
          </Link>
        )}
        {location.pathname === "/" && (
          <Link className="header__element header__element_button" to="/signin">
            Войти
          </Link>
        )}
        {location.pathname === "/movies" && (
          <Link className="header__profile header__profile_hidden"></Link>
        )}
        {location.pathname === "/saved-movies" && (
          <Link className="header__element header__element_hidden header__element_link" to="/signup">
            Аккаунт
          </Link>
        )}
        {location.pathname === "/saved-movies" && (
          <Link className="header__profile header__profile_hidden"></Link>
        )}
        {location.pathname === "/profile" && (
          <Link className="header__element header__element_hidden header__element_link" to="/profile">
            Аккаунт
          </Link>
        )}
        {location.pathname === "/profile" && (
          <Link className="header__profile header__profile_hidden"></Link>
        )}
        {location.pathname === '/movies' && <NavMenu /> }
      {location.pathname === '/saved-movies' && <NavMenu /> }
      {location.pathname === '/profile' && <NavMenu /> }
      </div>
    </>
  );
}

export default Navigation;
