import { Link } from "react-router-dom";
import headerLogo from "../../images/header_logo.svg";
import Navigation from '../Navigation/Navigation';

function Header() {
  // const location = useLocation();
  return (
    <header className="header">
    <Link to="/" className="header__link">
      <img src={headerLogo} alt="логотип" className="header__logo" />
      </Link>
      <Navigation />  
    </header>
  //   {/* {location.pathname === '/signin' && <header className="header header_form">
  //   <Link to="/" className="header__link">
  //     <img src={headerLogo} alt="логотип" className="header__logo login__logo" />
  //     </Link>
  //   </header> }
  // {location.pathname === '/signup' && <header className="header header_form">
  // <Link to="/" className="header__link">
  //     <img src={headerLogo} alt="логотип" className="header__logo register__logo" />
  //     </Link>
  // </header> } */}

  );
}

export default Header;
