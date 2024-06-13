'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { background, opacity } from '@/lib/motion-option'
import Link from 'next/link'
import Navbar from './nav-bar'
import SvgIcon from '@/components/ui/svg-icon'
import BtnOpenMenu from './nav-bar/btn-open-menu'
import Logo from '../logo'
import { Button } from '@/components/ui/button'
const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <header className='h-[110px]'>
      <nav className='wrapper-header bg-white fixed w-full top-0 right-0 pt-2 z-[999]'>
        <div className='container-2xl border rounded-3xl py-1'>
          <div className='flex justify-between items-center text-xs uppercase btn-menu__navbar'>
            <div className='flex items-center gap-2'>
              <Link href='/'>
                <Logo />
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <BtnOpenMenu isActive={isActive} setIsActive={setIsActive} />
              <div className='cursor-pointer p-1 hidden sm:block'>
                <SvgIcon icon='search' className='w-[35px] h-auto' />
              </div>
              <div className='flex items-center gap-1 cursor-pointer p-1 rounded-md relative hidden sm:block'>
                <SvgIcon icon='cart' />
                <span className='text-xs absolute top-0 -right-1 bg-red-400 min-w-[25px] min-h-[25px] rounded-full flex items-center justify-center text-white'>
                  3
                </span>
              </div>
              <Button className='button-style ml-2 hidden sm:block'>
                Login
              </Button>
            </div>
          </div>
        </div>

        <motion.div
          variants={background}
          initial='initial'
          animate={isActive ? 'open' : 'closed'}
          className={'wrapper-modal-bg'}
        ></motion.div>
        <AnimatePresence mode='wait'>{isActive && <Navbar />}</AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
