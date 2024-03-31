import { Roboto } from 'next/font/google'
import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import 'app/sass/globals.sass'

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})

injectSpeedInsights();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
