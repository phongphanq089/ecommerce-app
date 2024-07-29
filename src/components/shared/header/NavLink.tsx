'use client'
import {
  blur,
  menuSlide,
  menuVariants,
  opacity,
  translate,
} from '@/lib/motion-option'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import React, { SetStateAction, useState } from 'react'
import MenuItem from './NavItem'
import { listMenu } from '@/contents/nav-link'

interface propType {
  menuIsOpen: SetStateAction<boolean>
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NavLink = ({ menuIsOpen, setMenuIsOpen }: propType) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })

  return (
    <motion.div
      variants={menuVariants}
      style={{ transformOrigin: 'top right' }}
      initial='hidden'
      animate={menuIsOpen ? 'visible' : 'hidden'}
      exit='exit'
      className='z-[999] bg-color-1 w-full h-full fixed top-0 right-0'
    >
      <div className='px-1 md:px-5 py-2 flex justify-between items-center'>
        <Link
          href='/contact'
          className='p-1 text-xs rounded-3xl bg-white w-fit font-bold '
        >
          CONTACT WITH WE
        </Link>
        <h1 className='hidden lg:inline-block text-md font-bold text-white'>
          STARSCROW
        </h1>
        <div
          className='flex items-center gap-1  cursor-pointer'
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <div className='px-1 border border-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-x w-5 h-5 stroke-white'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M18 6l-12 12' />
              <path d='M6 6l12 12' />
            </svg>
          </div>
          <span className='text-sm text-white'>CLOSE</span>
        </div>
      </div>

      <div className='container-3xl'>
        <div className='grid md:grid-cols-2'>
          <div className='flex md:justify-center md:items-center p-3 py-6'>
            <AnimatePresence mode='wait'>
              <MenuItem
                listMenu={listMenu}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
              />
            </AnimatePresence>
          </div>
          <div className='hidden md:block'>
            {selectedLink.isActive ? (
              <motion.div
                variants={opacity}
                initial='initial'
                animate={selectedLink.isActive ? 'open' : 'closed'}
                className='border-[3px] border-white'
              >
                <div className='wrapImgResize imgSquare'>
                  <img src={listMenu[selectedLink.index].src} alt='image' />
                </div>
              </motion.div>
            ) : (
              <div className='border-[3px] border-white'>
                <div className='wrapImgResize imgSquare'>
                  <img src={listMenu[0].src} alt='image' />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NavLink
