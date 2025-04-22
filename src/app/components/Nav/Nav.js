'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from './nav.module.css'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [visible, setVisible] = useState(true)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

    const closeMenu = () => {
      setIsOpen(false)
    }

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px
          setVisible(false)
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setVisible(true)
        }
        
        setLastScrollY(currentScrollY)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

  return (
    <div className={`${styles.contain} ${!visible ? styles.hidden : ''}`}>
        <Link className={styles.atag} href={'/'} onClick={closeMenu}>logo</Link>
        
        {/* Mobile navigation */}
        <div className={styles.mobileContain}>
          <button className={styles.burger} onClick={toggleMenu}>
            &#9776;
          </button>
          {isOpen && (
            <div className={styles.mobileMenu}>
              <Link className={styles.atag} href={'/'} onClick={closeMenu}>Home</Link>
              <Link className={styles.atag} href={'/shows'} onClick={closeMenu}>Shows</Link>
              <Link className={styles.atag} href={'/advertising'} onClick={closeMenu}>Advertising</Link>
              <Link className={styles.atag} href={'/about'} onClick={closeMenu}>About</Link>
              <Link className={styles.atag} href={'/contact'} onClick={closeMenu}>Contact</Link>
            </div>
          )}
        </div>

        {/* Large screen navigation */}
        <div className={styles.subContain}>
          <Link className={styles.atag} href={'/'}>Home</Link>
          <Link className={styles.atag} href={'/shows'}>Shows</Link>
          <Link className={styles.atag} href={'/advertising'}>Advertising</Link>
          <Link className={styles.atag} href={'/about'}>About</Link>
          <Link className={styles.atag} href={'/contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Nav