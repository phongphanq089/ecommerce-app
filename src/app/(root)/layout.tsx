import LayoutWrapper from '@/components/layout/LayoutWrapper'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <LayoutWrapper>
      <div className='layout-wrapper'>
        <Header />
        <main className='w-full min-h-screen relative'>{children}</main>
        <Footer />
      </div>
    </LayoutWrapper>
  )
}
