'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { blur, height, translate } from '@/lib/motion-option'
import ImageMotion from './ImageMotion'
import LinkNavBotom from './LinkNavBotom'
import Link from 'next/link'
import Image from 'next/image'
import { links } from '@/contents/nav-link'
const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })

  const getChars = (word: any) => {
    let chars: any = []
    word.split('').forEach((char: [], i: any) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
          key={char + i}
        >
          {char}
        </motion.span>
      )
    })
    return chars
  }

  return (
    <motion.div
      variants={height}
      initial='initial'
      animate='enter'
      exit='exit'
      className='nav wraper-navbar'
    >
      <div className='wrapper'>
        <div className='container'>
          <div className='body'>
            {links.map((link, index) => {
              const { title, href } = link
              return (
                <Link key={`l_${index}`} href={href}>
                  <motion.p
                    onMouseOver={() => {
                      setSelectedLink({ isActive: true, index })
                    }}
                    onMouseLeave={() => {
                      setSelectedLink({ isActive: false, index })
                    }}
                    variants={blur}
                    animate={
                      selectedLink.isActive && selectedLink.index != index
                        ? 'open'
                        : 'closed'
                    }
                  >
                    {getChars(title)}
                  </motion.p>
                </Link>
              )
            })}
          </div>
          <LinkNavBotom />
        </div>

        {selectedLink.isActive ? (
          <ImageMotion
            src={links[selectedLink.index].src}
            isActive={selectedLink.isActive}
          />
        ) : (
          <div className='relative w-[500px] h-[450px] hidden lg:block'>
            <Image
              src={`/images/home.png`}
              fill={true}
              className='object-cover'
              alt='image'
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Navbar
