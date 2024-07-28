'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import { useScroll, useTransform, motion } from 'framer-motion'

const BannerStudio = () => {
  return (
    <motion.div className='py-8 bg-color-1 rounded-3xl '>
      <Marquee>
        <div className='flex items-center gap-4 justify-between text-2xl font-semibold relative text-white z-10'>
          {[...Array(20)].map((_, i) => {
            return (
              <React.Fragment key={i}>
                <span> outfits + experiment + styles + unsure +</span>
              </React.Fragment>
            )
          })}
        </div>
      </Marquee>
      <Marquee direction='right'>
        <div className='flex items-center gap-4 justify-between text-2xl font-semibold relative text-white z-10'>
          {[...Array(20)].map((_, i) => {
            return (
              <React.Fragment key={i}>
                <span> sustainability + plan + visualize + inspire +</span>
              </React.Fragment>
            )
          })}
        </div>
      </Marquee>
      <Marquee>
        <div className='flex items-center gap-4 justify-between text-2xl font-semibold relative text-white z-10'>
          {[...Array(20)].map((_, i) => {
            return (
              <React.Fragment key={i}>
                <span> outfits + experiment + styles + unsure +</span>
              </React.Fragment>
            )
          })}
        </div>
      </Marquee>
      <Marquee direction='right'>
        <div className='flex items-center gap-4 justify-between text-2xl font-semibold relative text-white z-10'>
          {[...Array(20)].map((_, i) => {
            return (
              <React.Fragment key={i}>
                <span> sustainability + plan + visualize + inspire +</span>
              </React.Fragment>
            )
          })}
        </div>
      </Marquee>

      <div className='container-3xl'>
        <div className='max-w-[1500px] mx-auto mt-[-300px] relative z-20'>
          <Image
            src={'/images/banner-image-about.png'}
            alt='startcrow'
            width={1200}
            height={1200}
            className='w-full h-auto object-cover'
          />
        </div>
        <div className='flex items-center justify-center flex-col  text-center max-w-2xl mx-auto xl:mt-[-300px] '>
          <h3 className='text-md lg:text-2xl font-bold mb-2 md:mb-6 leading-none text-white'>{`Getting dressed shouldn't be so hard `}</h3>
          <h3 className='text-md lg:text-2xl font-bold leading-none text-white'>{`Virtual closets allow you to your power`}</h3>
        </div>
      </div>
    </motion.div>
  )
}

export default BannerStudio
