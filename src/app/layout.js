import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeKnow',
  description: 'We Perform analysis on your reviews',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-zinc-900 antialiased text-slate-100'>
      <body className={inter.className}>
        <ToastContainer position='top-right' />
        <Navbar />

        <div className='container max-w-7xl mx-auto h-full pt-[100px]'>
          {children}
        </div>

      </body>
    </html>
  )
}