import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='layout-wrapper'>
      <Header />
      <main className='w-full min-h-screen'>{children}</main>
      <Footer />
    </div>
  )
}
