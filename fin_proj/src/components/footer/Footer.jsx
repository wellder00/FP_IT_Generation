import { RiFacebookFill, RiInstagramLine, RiTwitterFill, RiLinkedinFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

function Footer() {
  let data = new Date().getFullYear();

  return (
    <div id="footer" className="footer">
      <div className="footer__wrapper _container">
        <div className="footer__logo-section">
          <Link className="header__link" to="home" smooth={true} offset={-300} duration={1400}>
            <div className="header-logo">
              <img src="/src/img/logo.svg" alt="logo" />
            </div>
          </Link>
          <p>
            But i must explain to you all this mistaken <br />
            idea of dencouncing pleasure.
          </p>
        </div>

        <ul className="footer__link-section">
          <li>Quick Links</li>
          <li>About Our Company</li>
          <li>Services WE provide</li>
          <li>Career & Opportunity</li>
          <li>Privacy & policy</li>
          <li>Contact US</li>
        </ul>
        <ul className="footer__link-section">
          <li>Company</li>
          <li>About Company</li>
          <li>Our Testimonials</li>
          <li>Latest News</li>
          <li>Our misson</li>
          <li>Get a free Quot</li>
        </ul>
        <ul className="footer__link-section">
          <li>Contact us</li>
          <li>Sagrada Familia, Herba</li>
          <li>Street Front USA</li>
          <li>brandoxide@gmail.com</li>
          <li>002-568423591</li>
        </ul>

        <div className="footer__follow-us">
          <p>Follow Us</p>
          <div className="icon-block">
            <div>
              <a href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer">
                {' '}
                <RiFacebookFill />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                {' '}
                <RiTwitterFill />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                {' '}
                <RiInstagramLine />
              </a>
            </div>
            <div>
              <a href="https://ua.linkedin.com/" target="_blank" rel="noreferrer">
                {' '}
                <RiLinkedinFill />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__follow-us-visible">
        <p>Follow Us</p>
        <div className="icon-block">
          <div>
            <a href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer">
              {' '}
              <RiFacebookFill />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              {' '}
              <RiTwitterFill />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              {' '}
              <RiInstagramLine />
            </a>
          </div>
          <div>
            <a href="https://ua.linkedin.com/" target="_blank" rel="noreferrer">
              {' '}
              <RiLinkedinFill />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__line"></div>
      <span className="copyrightin">Copyright @ {data} Brandoxide.all right reserved.</span>
    </div>
  );
}

export default Footer;
