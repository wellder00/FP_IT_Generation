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
            <Link className="header__link" to="aboutUs" smooth={true}>
              HOME
            </Link>
            <Link className="header__link" to="aboutUs" smooth={true}>
              PROJECT
            </Link>
            <Link className="header__link" to="aboutUs" smooth={true}>
              SERVICES
            </Link>
            <Link className="header__link" to="aboutUs" smooth={true}>
              ABOUT
            </Link>
            <Link className="header__link" to="aboutUs" smooth={true}>
              BLOG
            </Link>
            <Link className="header__link" to="aboutUs" smooth={true}>
              SHOP
            </Link>
            <Link className="header__link" to="aboutUs" smooth={true}>
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
