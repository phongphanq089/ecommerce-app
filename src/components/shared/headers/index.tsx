'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { background, opacity } from '@/lib/motion-option'
import Link from 'next/link'
import Navbar from './nav-bar'
import SvgIcon from '@/components/ui/svg-icon'
import BtnOpenMenu from './nav-bar/btn-open-menu'
const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='wrapper-header bg-color-3 fixed w-full top-0 right-0 p-2'>
      <div className='container-2xl'>
        <div className='flex justify-between text-xs uppercase btn-menu__navbar'>
          <BtnOpenMenu isActive={isActive} setIsActive={setIsActive} />
          <Link href='/' className='flex items-center fon t-bold text-sm'>
            SHOP-FAST
          </Link>
          <motion.div
            variants={opacity}
            animate={!isActive ? 'open' : 'closed'}
            className='flex items-center gap-3'
          >
            <div className='flex items-center gap-2 cursor-pointer'>
              <SvgIcon icon='cart' />
              <span className='relative top-[5px]'>Cart(0)</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={background}
        initial='initial'
        animate={isActive ? 'open' : 'closed'}
        className={'wrapper-modal-bg'}
      ></motion.div>
      <AnimatePresence mode='wait'>{isActive && <Navbar />}</AnimatePresence>
    </div>
  )
}

export default Header
