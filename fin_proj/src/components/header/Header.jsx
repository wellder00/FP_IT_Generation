
import {ButtonFunc, useTheme } from '../index';

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
            <li>HOME</li>
            <li>PROJECT</li>
            <li>SERVICES</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>SHOP</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className="header-button">
          <ButtonFunc class="header-button-style">Sign Up</ButtonFunc>
          <div  variant="secondary" onClick={handleLightThemeClick}>
            {theme === 'light' && <div className='button-theme-icon'><img src="/src/icon/sun.png" alt="" /></div>}
            {theme === 'dark' && <div className='button-theme-icon'><img src="/src/icon/moon.png" alt="" /></div>}
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
