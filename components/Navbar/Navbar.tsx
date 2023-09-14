// @ts-nocheck
// use client
"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Auth from '../Auth/Auth';
import styles from './Navbar.module.css'; // Importa los estilos CSS
import { writedLocalStorage } from '@/services/storage.services';
import dynamic from 'next/dynamic';
import { Icon } from '@mui/material';
import Icons from '../Icons/Icons';
const Logo = dynamic(() => import('../Logo/Logo'), { ssr: false })
import Iconf from '@/components/images/perfil.png'


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogins, setIsLogins] = useState(false)



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const initialState: AuthState = {
    token: "",
    islogin: false,
    user: {},
    id: ""
  };





  const clearStorage = () => {
    writedLocalStorage(initialState)
    window.location.reload(false);
  }


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Logo */}
          <Logo

          />
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={isOpen ? styles.open : ''}></div>
        <div className={isOpen ? styles.open : ''}></div>
        <div className={isOpen ? styles.open : ''}></div>
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        {/* <button onClick={clearStorage}>
          cerrar

          </button> */}
          <li>
            
          </li>
          {
            isLogins ? "n" : <Icons
              src={Iconf} alt={''}
              className={styles.perfil}
              onClick={clearStorage}
            />
          }


      </ul>
    </nav>
  );
};

export default Navbar;