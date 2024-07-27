import BannerHero from '@/components/pages/home/banner-hero'
import BannerStudio from '@/components/pages/home/BannerStudio'
import FeaturedProducts from '@/components/pages/home/FeaturedProducts'
import ListProductCategoried from '@/components/pages/home/ListProductCategoried'
import TextBanner from '@/components/pages/home/TextBanner'

export default function Home() {
  return (
    <>
      <BannerHero />
      <TextBanner />
      <FeaturedProducts />
      <ListProductCategoried />
      <BannerStudio />
    </>
  )
}
