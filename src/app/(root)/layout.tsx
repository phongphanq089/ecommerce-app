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
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='flex-grow flex-1'>{children}</div>
      </main>
      <Footer />
    </div>
  )
}
