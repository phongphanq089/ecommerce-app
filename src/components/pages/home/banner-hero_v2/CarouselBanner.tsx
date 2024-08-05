'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { NextImageResize } from '@/components/ui/ImageResize'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

const CarouselBanner = () => {
  ///
  return (
    <div className=''>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        centeredSlides={true}
        roundLengths={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
        }}
        // modules={[EffectFade, Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <NextImageResize
            src={'/images/banner-hero/banner-slide-1.jpg'}
            alt='shop'
            className='pt-[56.25%]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <NextImageResize
            src={'/images/banner-hero/banner-slider-2.jpg'}
            alt='shop'
            className='pt-[56.25%]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <NextImageResize
            src={'/images/banner-hero/banner-slider-3.webp'}
            alt='shop'
            className='pt-[56.25%]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <NextImageResize
            src={'/images/banner-hero/banner-slide-1.jpg'}
            alt='shop'
            className='pt-[56.25%]'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselBanner
