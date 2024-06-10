import React from 'react'
import { motion } from 'framer-motion'
import { opacity } from '@/lib/motion-option'

interface PropsType {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}
const BtnOpenMenu = ({ isActive, setIsActive }: PropsType) => {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive)
      }}
      className='flex items-center cursor-pointer gap-1 bg-color-3 p-2 rounded-md'
    >
      <div className={`btn-menu__line ${isActive ? 'burgerActive' : ''}`}></div>
      <div className={'label'}>
        <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>
          Menu
        </motion.p>
        <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>
          Close
        </motion.p>
      </div>
    </div>
  )
}

export default BtnOpenMenu
