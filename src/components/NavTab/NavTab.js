import { useLocation } from "react-router-dom";

function NavTab(props) {
  const location = useLocation();
  return (
    <ul className="navtab">
      {location.pathname === "/" && (
        <li className="navtab__link" href="#about-project">
          О проекте
        </li>
      )}
      {location.pathname === "/" && (
        <li className="navtab__link" href="#techs">
          Технологии
        </li>
      )}
      {location.pathname === "/" && (
        <li className="navtab__link" href="#about-me">
          Студент
        </li>
      )}
    </ul>
  );
}

export default NavTab;
