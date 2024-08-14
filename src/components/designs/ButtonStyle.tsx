import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface PropsType {
  link: string
  text: string
  className?: string
  icons?: JSX.Element
}

export const ButtonStyle = ({ link, text, className }: PropsType) => {
  return (
    <Link href={link} className={cn('cta', className)}>
      <span className='hover-underline-animation'>{text}</span>
      <span className='icon-right'>
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
          className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M5 12l14 0' />
          <path d='M15 16l4 -4' />
          <path d='M15 8l4 4' />
        </svg>
      </span>
    </Link>
  )
}

export const ButtonStyle_v1 = ({ link, text, className, icons }: PropsType) => {
  return (
    <Link href={link} className={cn('button-style-1', className)}>
      <span className='z-10 relative text-white'>{text}</span>
      <div className='hoverEffect'>
        <div></div>
      </div>
      {icons}
    </Link>
  )
}

export const ButtonStyle_v2 = ({ link, text, className, icons }: PropsType) => {
  return (
    <Link
      href={link}
      className={cn('button-style-2 text-sm font-bold', className)}
    >
      <span>
        {text} {icons}
      </span>
    </Link>
  )
}

export const ButtonStyle_v3 = ({ link, text, className, icons }: PropsType) => {
  return (
    <Link href={link} className={cn('button-style-3', className)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className='text'>
        {text} {icons}
      </div>
    </Link>
  )
}
