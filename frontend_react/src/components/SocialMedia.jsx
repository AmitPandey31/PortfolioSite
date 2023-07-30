import React from 'react'
import {BsTwitter,BsLinkedin,BsGithub} from 'react-icons/bs';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <motion.div
     whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.1, delayChildren: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
    <div>
    <a href="https://www.linkedin.com/in/amit-pandey-9abb52124/"><BsLinkedin/></a> 
    </div>
    </motion.div>
    <motion.div
     whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.1, delayChildren: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
    <div>
    <a href="https://github.com/AmitPandey31"><BsGithub/></a> 
    </div>
    </motion.div>
    <motion.div
     whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.1, delayChildren: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
    <div>
    <a href="https://twitter.com/amit_2kp1"><BsTwitter/></a> 
    </div>
    </motion.div>
    </div> 
   
  )
}

export default SocialMedia;