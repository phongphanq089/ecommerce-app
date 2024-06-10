import Footer from '@/components/shared/footer'
import Header from '@/components/shared/headers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='layout-wrapper'>
      <Header />
      <main className='w-full'>{children}</main>
      <Footer />
    </div>
  )
}
