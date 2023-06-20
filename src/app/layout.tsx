import './globals.css'
/* import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) */

export const metadata = {
  title: 'SoundLumi',
  description: 'Music Stream App',
}

export default function RootLayout({
  children, /* authModal, */
}: {
  children: React.ReactNode,
/*   authModal: React.ReactNode, */
}) {
  return (
    <html lang="en">
      <body /* className={inter.className} */>
        <div>
          {children}
          {/* authModal */}
        </div>
      </body>
    </html>
  )
}
