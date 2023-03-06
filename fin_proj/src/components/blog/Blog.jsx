import { ButtonFunc } from '../index';
import { motion } from 'framer-motion';

const animation = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const animation1 = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Blog() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      id="blog"
      className="blog"
    >
      <div className="blog__wrap _container">
        <section>LETEST NEWS</section>
        <h2>From Our Blog</h2>
        <div className="blog__content">
          <motion.div custom={2} variants={animation} className="blog__left-section">
            <div className="blog__left-section__img">
              <img src="/src/img/blog1.jpg" alt="decore" />
              <div></div>
            </div>
            <h5>2020 Interior Design Trends</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut
              labore et dolore magna aliqua.
            </p>
            <ButtonFunc class="blog-button">CONTINUE READING....</ButtonFunc>
          </motion.div>

          <motion.div custom={3} variants={animation1} className="blog__right-section">
            <div className="blog__right-section__img">
              <img src="/src/img/blog2.jpg" alt="decore" />
              <div></div>
            </div>
            <h5>28 Notable Product at ARC Interior Design</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut
              labore et dolore magna aliqua.
            </p>
            <ButtonFunc class="blog-button">CONTINUE READING....</ButtonFunc>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
