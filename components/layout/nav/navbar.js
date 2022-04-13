/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cx } from '@emotion/css'
// Assets and CSS
import { menu as MenuIcon, close as CloseIcon, user as UserIcon } from './icon'
import CSS from 'components/css/nav'

export default function IJNnav({
  onCursor,
  setToggleMenu,
  toggleMenu,
  useOnScrollNav,
}) {
  const [ScrollNav, setScrollNav] = useState(false)
  const [LogoIsHover, setLogoIsHover] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handle)

    let LastScrollTop = 0
    function handle(e) {
      let Offset = window.pageYOffset || document.documentElement.scrollTop
      if (Offset > 50) {
        if (LastScrollTop > Offset) {
          setScrollNav(true)
        } else {
          setScrollNav(false)
        }
      } else {
        setScrollNav(false)
      }
      LastScrollTop = Offset
    }

    return () => window.removeEventListener('scroll', handle)
  }, [])

  const NavProps = {
    toggleMenu,
    setToggleMenu,
    onCursor,
    setLogoIsHover,
    LogoIsHover,
  }

  return (
    <>
      <MainNav NavProps={NavProps} isTop={true} />
      {ScrollNav && !useOnScrollNav && (
        <MainNav NavProps={NavProps} isTop={false} />
      )}
      {useOnScrollNav && (
        <nav
          className={
            ScrollNav ? cx(CSS.fixedMenu, CSS.fixedMenuActive) : CSS.fixedMenu
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <MenuIcon />
        </nav>
      )}
    </>
  )
}

const MainNav = ({ NavProps, isTop }) => {
  const { toggleMenu, setToggleMenu, onCursor, setLogoIsHover, LogoIsHover } =
    NavProps
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
      className={CSS.Bar}
      style={
        toggleMenu || !isTop
          ? { position: 'fixed', width: '100%' }
          : { position: 'absolute', width: '100%' }
      }
    >
      <motion.div
        onMouseEnter={() => {
          onCursor('logo'), setLogoIsHover(true)
        }}
        onMouseLeave={() => {
          onCursor(false), setLogoIsHover(false)
        }}
        className={CSS.Brand}
      >
        <Link href='/home' passHref>
          <img
            src={LogoIsHover ? '/logo_black.svg' : '/logo_white.svg'}
            alt='TheIceJI logo'
            href='#'
          />
        </Link>
      </motion.div>
      <motion.div
        onMouseEnter={() => onCursor('logo')}
        onMouseLeave={onCursor}
        onClick={() => {
          onCursor
        }}
        className={CSS.Icon}
      >
        <Link href='/account'>
          <a>
            <UserIcon />
          </a>
        </Link>
        <div
          onClick={() => {
            setToggleMenu(!toggleMenu)
          }}
        >
          {toggleMenu ? <CloseIcon /> : <MenuIcon />}
        </div>
      </motion.div>
    </motion.div>
  )
}
