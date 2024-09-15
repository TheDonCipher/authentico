import './globals.css'
import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import Link from 'next/link'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authentico',
  description: 'Official document verification platform using blockchain technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivo.className} bg-yellow-50 text-gray-900`}>
        <header className="bg-blue-500 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">Authentico</Link>
            <div className="space-x-4">
              <Link href="/features" className="text-white hover:underline">Features</Link>
              <Link href="/how-it-works" className="text-white hover:underline">How It Works</Link>
              <Link href="/about" className="text-white hover:underline">About Us</Link>
              <Link href="/contact" className="text-white hover:underline">Contact</Link>
              <Link href="/contact" className="text-white hover:underline">Dashboard</Link>
              <button className="bg-white text-blue-500 px-4 py-2 rounded font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">Sign Up</button>
            </div>
          </nav>
        </header>
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-200 mt-12 p-4">
          <div className="container mx-auto text-center">
            © 2024 Authentico. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
