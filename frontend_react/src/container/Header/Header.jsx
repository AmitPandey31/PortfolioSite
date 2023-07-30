import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};


const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
        <motion.div
        initial={{ x: -1 }}
           animate={{ x: 1, rotate: 45}}
            transition={{
                type: "just",
                repeat: 3,
                repeatType: "mirror",
                repeatDelay: 0.1,
            }}
            whileHover={{scale: 1.5}}
        whileTap={{scale: 2.5}}
        >
        <span>👋</span>
        </motion.div>
          
          <div style={{ marginLeft: 20 }}>
            <p className="text">Hello, I am</p>
            <h1 className="name-text">Amit</h1>
          </div>
        </div>
    
        <div className="tag-cmp app__flex">
          <p className="text2">Programmer /</p>
          <p className="text2">Developer</p>
        </div>
      </div>
    </motion.div>

    {/* <div className="resume">
    <div>
        <a href="https://drive.google.com/file/d/1q8j-V7R_F1ibuiR6-E8VYERBVPioynO-/view?usp=sharing">
        <button className ="btn" type="button">Resume</button></a> 
        </div>
    </div> */}

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.javascript, images.node].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
        
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');