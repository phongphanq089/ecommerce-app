import { blur, translate } from '@/lib/motion-option'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface PropsType {
  links: {
    title: string
    href: string
    src: string
  }[]
  selectedLink: {
    isActive: boolean
    index: number
  }
  setSelectedLink: React.Dispatch<
    React.SetStateAction<{
      isActive: boolean
      index: number
    }>
  >
}

const NavLink = ({ links, selectedLink, setSelectedLink }: PropsType) => {
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
  )
}

export default NavLink
