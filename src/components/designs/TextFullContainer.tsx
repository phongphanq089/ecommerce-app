'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const TextFullContainerHero = ({
  text1,
  text2,
  className,
}: {
  text1?: string
  text2: string
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    resizeText()

    window.addEventListener('resize', resizeText)

    return () => {
      window.removeEventListener('resize', resizeText)
    }
  }, [])

  const resizeText = () => {
    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) {
      return
    }

    const containerWidth: number = container.offsetWidth
    let min = 1
    let max = 2500

    while (min <= max) {
      const mid = Math.floor((min + max) / 2)
      text.style.fontSize = mid + 'px'

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1
      } else {
        max = mid - 1
      }
    }

    text.style.fontSize = max + 'px'
  }

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 3, type: 'spring', duration: 2, bounce: 0 },
        opacity: { delay: 3, duration: 1 },
      },
    },
  }

  return (
    <div
      className={`flex w-full items-center  h-auto relative ${className}`}
      ref={containerRef}
    >
      <span
        className=' mx-auto whitespace-nowrap text-center font-semibold text-bg-dark leading-[1.4]'
        ref={textRef}
      >
        {text2}
      </span>
    </div>
  )
}

export default TextFullContainerHero
