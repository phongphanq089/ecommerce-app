import React from 'react'
import { motion } from 'framer-motion'
import { opacity } from '@/lib/motion-option'
import Image from 'next/image'

interface PropsType {
  src: string
  isActive: boolean
}
const ImageMotion = ({ src, isActive }: PropsType) => {
  return (
    <motion.div
      variants={opacity}
      initial='initial'
      animate={isActive ? 'open' : 'closed'}
      className='imageContainer'
    >
      <Image src={`/images/${src}`} fill={true} alt='image' />
    </motion.div>
  )
}

export default ImageMotion
