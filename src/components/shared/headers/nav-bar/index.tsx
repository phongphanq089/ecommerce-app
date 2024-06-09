'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { height } from '@/lib/motion-option'
import NavLink from './nav-link'
import ImageMotion from './ImageMotion'
import LinkNavBotom from './LinkNavBotom'
const Navbar = () => {
  const links = [
    {
      title: 'Home',
      href: '/',
      src: 'home.png',
    },
    {
      title: 'Shop',
      href: '/shop',
      src: 'shop.png',
    },
    {
      title: 'About Us',
      href: '/about',
      src: 'home.png',
    },
    {
      title: 'Lookbook',
      href: '/lookbook',
      src: 'lookbook.png',
    },
    {
      title: 'Contact',
      href: '/contact',
      src: 'contact.png',
    },
  ]

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })
  return (
    <motion.div
      variants={height}
      initial='initial'
      animate='enter'
      exit='exit'
      className='nav'
    >
      <div className='wrapper'>
        <div className='container'>
          <NavLink
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <LinkNavBotom />
        </div>
        <ImageMotion
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  )
}

export default Navbar
