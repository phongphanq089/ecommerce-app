'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { blur } from '@/lib/motion-option'

interface PropType {
  listMenu: { title: string; href: string }[]
  selectedLink: { isActive: boolean; index: number }
  setSelectedLink: (state: { isActive: boolean; index: number }) => void
}
const MenuItem = ({ listMenu, selectedLink, setSelectedLink }: PropType) => {
  return (
    <div className=' flex flex-col'>
      {listMenu.map((link, index) => {
        const { title, href } = link
        return (
          <motion.div
            key={`l_${index}`}
            className='w-fit'
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
            <Link
              href={href}
              className='text-xl md:text-2xl 2xl:text-3xl  font-bold text-white relative  inline-block uppercase'
            >
              {' '}
              {title}
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}

export default MenuItem
