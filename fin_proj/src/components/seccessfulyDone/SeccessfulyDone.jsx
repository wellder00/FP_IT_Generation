import React from 'react';
import { motion } from 'framer-motion';

const animation = {
  hidden: {
    x: -400,   
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
    x: 400,   
    opacity: 0,
  },
  visible: custom => ({
    x: 0,    
    opacity: 1,
    transition: {delay: custom * 0.2}
  })
}

function SeccessfulyDone() {
  return (
    <motion.div
    id='seccessfulyDone'
    initial = 'hidden'
    whileInView= 'visible'
    viewport={{amount: 0.2}}
    className="seccessfulyDone">
      <div className="seccessfulyDone__wrapper _container">
        <h2>3000+ Completed Work <br/> Which WE have Successfully Done</h2>
        <div className="seccessfulyDone__card-block">

          <motion.div
          custom={2}
          variants={animation}
          className='seccessfulyDone__card-block_card'>
            <h3>980</h3>
            <section>Project</section>
          </motion.div>
          <div></div>
          <div></div>
          <motion.div
          custom={5}
          variants={animation1}
          className='seccessfulyDone__card-block_card seccessfulyDone__card-block_card-even'>
            <h3>520</h3>
            <section>Happy Client</section>
          </motion.div>
          <div></div>
          <div></div>
          <motion.div
          custom={6}
          variants={animation}
          className='seccessfulyDone__card-block_card'>
            <h3>330</h3>
            <section>Winners</section>
          </motion.div>
          <div></div>
          <div></div>
          <motion.div
          custom={4}
          variants={animation1}
          className='seccessfulyDone__card-block_card seccessfulyDone__card-block_card-even'>
            <h3>120</h3>
            <section>Recoment</section>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default SeccessfulyDone;
