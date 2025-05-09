
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <header className={`${styles.navbar} ${!showNavbar ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Right Turn Auto Credit" className={styles.logoImg} />
      </div>

      <button
        className={styles.toggle}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? '×' : '☰'}
      </button>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="https://rta.ca/about-us/" onClick={closeMenu}>About</Link>
        <Link href="https://rta.ca/bad-credit-car-loans/" onClick={closeMenu}>Services</Link>
        <Link href="https://rta.ca/resources/" onClick={closeMenu}>Resources</Link>       
        <Link href="https://rta.ca/blog/" onClick={closeMenu}>Blog</Link>
        <Link href="https://rta.ca/testimonials/" onClick={closeMenu}>Testimonials</Link>
        <Link href="https://rta.ca/contact-us/" onClick={closeMenu}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
