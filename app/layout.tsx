import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'School Management System',
  description: 'Manage admissions and attendance',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-sky-100 to-emerald-100 bg-fixed bg-cover bg-no-repeat`}
      >
        <main className="py-10 px-4">{children}</main>
      </body>
    </html>
  )
}
