import { ButtonFunc } from '../index';

function AboutUs() {
  return (
    <div id="aboutUs" className="moder-inerior">
      <div className="moder-inerior__first-block">
        <div className="moder-inerior__wrapper _container about-us__first-wrap">
          <div className="about-us__left-section">
            <img src="src/img/au1.jpg" alt="about-us first foto" />
            <div></div>
          </div>
          <div className="about-us__right-section">
            <span>ABOUT US</span>
            <h1>Interioris The Will of An Epoch Mextreo</h1>
            <div>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form injected humour, or randomised words which don't look
              even slightly believable.If you are going to use a passage of Lorem Ipsum, sure there
              isn't anything embarrassing hidden the middleof text. All the Lorem Ipsum generators
              on the Internettend to repeat predefined chunks as necessary,making this the first
              true generator on the Internet.
            </div>
            <section>
              <ButtonFunc class="moder-inerior-button">LEARN MORE</ButtonFunc>
            </section>
          </div>
        </div>
      </div>

      <div className="moder-inerior__second-block">
        <div className="moder-inerior__wrapper _container">
          <div className="about-us-second-block__left-section">
            <div className='about-us-second-block-20-bc'>              
             <img src="src/img/20(1).png" alt="" />
            </div>
            <h1>Years Of Successful Working <br/>The Market</h1>         
            <section>
              <ButtonFunc class="moder-inerior-button">READ MORE</ButtonFunc>
            </section>
          </div>

          <div className="moder-inerior__right-section">
            <img src="src/img/au2.jpg" alt="" />
            <div></div>
          </div>
        </div>
      </div>
      <div className="about-us__fone1">
        <img src="/src/img/fone1.png" alt="fone" />
      </div>

      <div className="about-us__fone2">
        <img src="/src/img/fone1.png" alt="fone" />
      </div>
    </div>
  );
}

export default AboutUs;
