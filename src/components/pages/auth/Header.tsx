'use client'
import NavLink from '@/components/shared/header/NavLink'
import Logo from '@/components/shared/logo'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <>
      <header className='py-2 fixed w-full top-0 left-0 z-40'>
        <div className='container-3xl'>
          <div className='flex items-center justify-between'>
            <Logo />
            <div
              className='flex items-center gap-1 cursor-pointer'
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <div className='w-5 h-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  enableBackground='new 0 0 512 512'
                  viewBox='0 0 512 512'
                >
                  <path d='M485.883 425.832H26.781c-4.971 0-9-4.029-9-9s4.029-9 9-9h459.102c4.971 0 9 4.029 9 9S490.854 425.832 485.883 425.832zM485.883 264.742H26.781c-4.971 0-9-4.029-9-9s4.029-9 9-9h459.102c4.971 0 9 4.029 9 9S490.854 264.742 485.883 264.742zM485.883 103.653H26.781c-4.971 0-9-4.029-9-9s4.029-9 9-9h459.102c4.971 0 9 4.029 9 9S490.854 103.653 485.883 103.653z' />
                </svg>
              </div>
              <span className='text-sm font-semibold'>MENU</span>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence mode='wait'>
        <NavLink menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </AnimatePresence>
    </>
  )
}

export default Header
