'use client'
import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isActiveBtnSrcoll, setIsActiveBtnSrcoll] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsActiveBtnSrcoll(true)
    } else {
      setIsActiveBtnSrcoll(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // const lenis = new Lenis()

    // function raf(time: any) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isActiveBtnSrcoll])
  return (
    <>
      {children}
      <Button
        className={cn('btn-sroll-top', isActiveBtnSrcoll ? 'isActive' : '')}
        onClick={scrollToTop}
      >
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
          className='icon icon-tabler icons-tabler-outline icon-tabler-chevron-up'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M6 15l6 -6l6 6' />
        </svg>
      </Button>
    </>
  )
}

export default LayoutWrapper
