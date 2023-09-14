
// @ts-nocheck
// use client
import './globals.css'

import { Providers } from './GlobalRedux/provider';
import { canPass } from '@/services/protectionRoutes.services';
import dynamic from 'next/dynamic';
import Auth from '@/components/Auth/Auth';
// import ProtectedRoute from './ProtectedRoutes';
import styles from './layout.module.css'; // Importa los estilos CSS


// import Navbar from '@/components/Navbar/Navbar';
const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), { ssr: false })
const ProtectedRoute = dynamic(() => import('./ProtectedRoutes'), { ssr: false })




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const data = false
  // const retur = canPass(data)

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <Head /> */}

      <head>
        <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4/css/metro-all.min.css" />
      </head>



      <body className={styles.todo}>
        <Providers>
          <ProtectedRoute>
            <Navbar />
           

            {children}
          </ProtectedRoute>
        </Providers>
      </body>
    </html>
  )
}
