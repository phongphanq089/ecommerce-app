import Image from 'next/image'

interface NextImageResize {
  src: string | any
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
  classImage?: string
}

interface NextImageResizeCouple {
  image1: string | any
  image2: string | any
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
  classImage1?: string
  classImage2?: string
}

export const NextImageResize = ({
  src,
  alt,
  priority,
  className,
  classImage,
}: NextImageResize) => {
  return (
    <div className={`${className ? className : 'pt-[100%]'} relative `}>
      <Image
        src={src}
        alt={alt ? alt : 'image-default'}
        fill
        priority={priority}
        className={`h-auto object-cover ${classImage}`}
      />
    </div>
  )
}

export const NextImageResizeCouple = ({
  image1,
  image2,
  alt,
  priority,
  className,
  classImage1,
  classImage2,
}: NextImageResizeCouple) => {
  return (
    <div className={`${className ? className : 'pt-[100%]'} relative `}>
      <Image
        src={image1}
        alt={alt ? alt : 'image-default'}
        fill
        priority={priority}
        className={`h-auto object-cover ${classImage1}`}
      />
      <Image
        src={image2}
        alt={alt ? alt : 'image-default'}
        fill
        priority={priority}
        className={`h-auto object-cover ${classImage2}`}
      />
    </div>
  )
}
