'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { translate } from '@/lib/motion-option'
const LinkNavBotom = () => {
  return (
    <div className='flex md:items-center flex-col gap-2 md:flex-wrap justify-between py-2'>
      <div>
        <motion.span
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
          className='flex items-center gap-1'
        >
          <span className='text-color-2 font-bold'>Made by:</span>Studio Lumio
        </motion.span>
      </div>
      <div>
        <motion.span
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
          className='flex items-center gap-1'
        >
          <span className='text-color-2 font-bold'>Typography:</span> Google
          Fonts
        </motion.span>
      </div>
      <div>
        <motion.span
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
          className='flex items-center gap-1'
        >
          <span className='text-color-2 font-bold'>Images:</span> Freepik,
          Envato
        </motion.span>
      </div>
      <div className='flex flex-col gap-1'>
        <motion.span
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          Privacy Pospancy
        </motion.span>
        <motion.span
          custom={[0.3, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          Terms & Conditions
        </motion.span>
      </div>
    </div>
  )
}

export default LinkNavBotom
