import { Link } from 'react-scroll';
import { ButtonFunc, useTheme } from '../index';

function Header() {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else setTheme('light');
  };

  return (
    <header className="header">
      <div className="header-wrapper _container">
        <div className="header-logo">
          <img src="/src/img/logo.svg" alt="logo" />
        </div>
        <nav className="header-nav">
          <ul className="header-nav__list">
            <Link className="header__link" to="home" smooth={true} offset = {-150}>
              HOME
            </Link>
            <Link className="header__link" to="seccessfulyDone" smooth={true} offset = {-300}>
              PROJECT
            </Link>
            <Link className="header__link" to="services" smooth={true} offset = {-150}>
              SERVICES
            </Link>
            <Link className="header__link" to="aboutUs" smooth={true} offset = {-100}>
              ABOUT
            </Link>
            <Link className="header__link" to="blog" smooth={true} offset = {-250}>
              BLOG
            </Link>
            <Link className="header__link" to="form" smooth={true} duration = {1500}>
              SHOP
            </Link>
            <Link className="header__link" to="footer" smooth={true} duration = {2500}>
              CONTACT
            </Link>
          </ul>
        </nav>
        <div className="header-button">
          <ButtonFunc class="header-button-style">Sign Up</ButtonFunc>
          <div variant="secondary" onClick={handleLightThemeClick}>
            {theme === 'light' && (
              <div className="button-theme-icon">
                <img src="/src/icon/sun.png" alt="" />
              </div>
            )}
            {theme === 'dark' && (
              <div className="button-theme-icon">
                <img src="/src/icon/moon.png" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
