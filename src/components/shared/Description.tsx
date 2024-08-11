'use client'
import React from 'react'
import DOMPurify from 'isomorphic-dompurify'

const Description = ({ text }: { text: string | undefined | null }) => {
  return (
    <>
      {text ? (
        <div
          className='text-sm text-gray-500 !text-start'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(text),
          }}
        ></div>
      ) : (
        ''
      )}
    </>
  )
}

export default Description
