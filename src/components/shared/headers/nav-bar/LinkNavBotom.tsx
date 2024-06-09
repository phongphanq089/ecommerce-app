'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { translate } from '@/lib/motion-option'
const LinkNavBotom = () => {
  return (
    <div className='footer'>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <span>Made by:</span>Studio Lumio
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <span>Typography:</span> Google Fonts
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <span>Images:</span> Freepik, Envato
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          Privacy Policy
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          Terms & Conditions
        </motion.li>
      </ul>
    </div>
  )
}

export default LinkNavBotom
