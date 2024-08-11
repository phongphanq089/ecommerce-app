import LayoutWrapper from '@/components/layout/LayoutWrapper'
import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <LayoutWrapper>
      <div className='layout-wrapper'>
        <main className='w-full min-h-screen relative '>
          <div className='container-3xl'>
            <div className='grid xl:grid-cols-12 gap-3'>
              <div className='p-2 xl:col-span-5'>
                <div className='mt-[100px]'>{children}</div>
              </div>
              <div className='xl:col-span-7'>
                <Image
                  src={'/images/banner-login.webp'}
                  alt='starcow'
                  width={1000}
                  height={1000}
                  className='hidden xl:block w-[60%] h-screen object-cover fixed top-0 right-0'
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  )
}
