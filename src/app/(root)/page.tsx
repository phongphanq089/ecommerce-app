import AboutUs from '@/components/pages/home/AboutUs'
import BannerHero from '@/components/pages/home/banner-hero'
import GetContact from '@/components/pages/home/GetContact'
import NewProducts from '@/components/pages/home/NewProducts'
import SectionCategoried from '@/components/pages/home/SectionCategoried'
import TextBanner from '@/components/pages/home/TextBanner'
import ProductCarousel from '@/components/shared/ProductCarousel'
import {
  listProductsCategory1,
  listProductsCategory2,
} from '@/contents/list-product'

const Home = () => {
  return (
    <>
      <BannerHero />
      <TextBanner />

      <div className='container-3xl'>
        <NewProducts
          title='NEW IN'
          categoryId={'73b2d3e5-2421-63fa-9999-9d6df85aae66'}
          limit={10}
        />
      </div>
      <div className='container-3xl'>
        <ProductCarousel
          title='Discover new Menswear'
          categoryId={'92e74587-b706-9628-3acd-909ea3a2d9c7'}
          limit={10}
        />
      </div>
      <SectionCategoried product={listProductsCategory1} />
      <div className='container-3xl'>
        {' '}
        <ProductCarousel
          title='Discover new womenswear'
          categoryId={'9490d2dc-7f31-26d4-6c98-340f44cb4e06'}
          limit={10}
        />
      </div>

      <SectionCategoried product={listProductsCategory2} />
      <AboutUs />
      <GetContact />
    </>
  )
}

export default Home
