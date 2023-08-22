// @ts-nocheck
// use client
"use client"

import Link from 'next/link';
import { useState } from 'react';
import Auth from '../Auth/Auth';
import styles from './Navbar.module.css'; // Importa los estilos CSS


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
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
         <Auth/>
      </ul>
    </nav>
  );
};

export default Navbar;