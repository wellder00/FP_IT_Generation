import { ButtonFunc } from '../index';
import { Link } from 'react-scroll';

function ModerInerior() {
  return (
    <div id="home" className="moder-inerior">
      <div className="moder-inerior__wrapper _container">
        <div className="moder-inerior__left-section">
          <span>MODERN INTERIOR</span>
          <h1>Create Your Interior Design.</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </div>
          <section>
            <Link to="footer" smooth={true} duration={2500}>
              <ButtonFunc class="moder-inerior-button">CONTACT</ButtonFunc>
            </Link>
          </section>
        </div>

        <div className="moder-inerior__right-section">
          <img src="src/img/1-1.jpg" alt="" />
          <div></div>
        </div>
      </div>
      <div className="moder-inerior__fone">
        <img src="/src/img/fone1.png" alt="fone" />
      </div>
    </div>
  );
}

export default ModerInerior;
