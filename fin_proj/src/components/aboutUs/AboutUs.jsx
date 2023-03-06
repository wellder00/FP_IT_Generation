import { ButtonFunc } from '../index';
import { motion } from 'framer-motion';

function AboutUs() {

  const animation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2}
    })
  }
  
  const animation1 = {
    hidden: {
      x: 100, 
      opacity: 0,
    },
    visible: custom => ({
      x: 0, 
      opacity: 1,
      transition: {delay: custom * 0.2}
    })
  }

  return (
    <motion.div 
    initial = 'hidden'
    whileInView= 'visible'
    viewport={{amount: 0.1}}
    id="aboutUs" className="moder-inerior">
      <div className="moder-inerior__first-block">
        <div className="moder-inerior__wrapper _container about-us__first-wrap">
          <motion.div
          custom={1}
          variants={animation}
          className="about-us__left-section">
            <img src="src/img/au1.jpg" alt="about-us first foto" />
            <div></div>
          </motion.div>
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

      <motion.div
     initial = 'hidden'
     whileInView= 'visible'
     viewport={{amount: 0.2}}
      className="moder-inerior__second-block">
        <div className="moder-inerior__wrapper _container">
          <div className="about-us-second-block__left-section">
            <motion.div
            custom={6}
            variants={animation1}
            className='about-us-second-block-20-bc'>              
             <img src="src/img/20(1).png" alt="" />
            </motion.div>
            <h1>Years Of Successful Working <br/>The Market</h1>         
            <section>
              <ButtonFunc class="moder-inerior-button">READ MORE</ButtonFunc>
            </section>
          </div>

          <motion.div
          custom={2}
          variants={animation1}
          className="moder-inerior__right-section">
            <img src="src/img/au2.jpg" alt="" />
            <div></div>
          </motion.div>
        </div>
      </motion.div>
      <div className="about-us__fone1">
        <img src="/src/img/fone1.png" alt="fone" />
      </div>

      <div className="about-us__fone2">
        <img src="/src/img/fone1.png" alt="fone" />
      </div>
    </motion.div>
  );
}

export default AboutUs;
