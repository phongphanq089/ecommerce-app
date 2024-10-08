import type { Metadata } from 'next'
import { Alegreya, Nunito } from 'next/font/google'
import './globals.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { cn } from '@/lib/utils'
import { WixClientContextProvider } from '@/context/wixContext'
import { Toaster } from '@/components/ui/sonner'

const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading1',
})

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading2',
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn('bg-color-3', alegreya.variable, nunito.className)}
        suppressHydrationWarning
      >
        <WixClientContextProvider>{children}</WixClientContextProvider>
        <Toaster />
      </body>
    </html>
  )
}
