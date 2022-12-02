import { useLocation, Link} from 'react-router-dom';
import {useState} from 'react';

function NavMenu () {
  const [value, setValue] = useState(false);

  function handleMenu(evt) {
    setValue(!value);
  }
  
  const location = useLocation()
  return (
  <>
      {location.pathname === '/movies' && <button onClick={handleMenu} className="navbar__button-menu"></button> }
      {location.pathname === '/saved-movies' && <button onClick={handleMenu} className="navbar__button-menu"></button> }
      {location.pathname === '/profile' && <button onClick={handleMenu} className="navbar__button-menu"></button> }
      <div className={`
    nav-menu 
    ${value ? "nav-menu_open" : ""}
    `}
    >
      <div className="nav-menu__container">
        <button className="nav-menu__button-close" onClick={handleMenu}></button>
        <div className='nav-menu__links'>
          {<Link className="nav-menu__link" to="/">Главная</Link>} 
          {<Link className="nav-menu__link nav-menu__link_active" to="/movies">Фильмы</Link>} 
          {<Link className="nav-menu__link" to="/saved-movies">Сохраненные фильмы</Link>}
        </div>
      <div className="nav-menu__footer">
        {<Link className="header__element header__element_link header__element_menu" to="/profile">
            Аккаунт
          </Link>}
          <Link className="header__profile"></Link>
      </div>
      </div>
    </div>
  </>

  )
}

export default NavMenu;