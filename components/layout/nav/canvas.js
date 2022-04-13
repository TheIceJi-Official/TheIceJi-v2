import { useState } from 'react'
import Router from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
// Components
import { useGlobalDispatchContext } from 'components/context/globalContext'
import { pageRoutes, navRoutes } from './route'
// CSS
import CSS from 'components/css/navCanvas'

export default function Canvas({
  onCursor,
  toggleMenu,
  setToggleMenu,
  setPage,
}) {
  const dispatch = useGlobalDispatchContext()
  const [MenuHover, setMenuHover] = useState(``)

  // Function
  const handleLink = (url) => {
    // Router.prefetch(url);
    setToggleMenu(false)
    dispatch({ type: 'CURSOR_TYPE', cursorType: false })
    setTimeout(() => {
      Router.push(url)
    }, 1000)
  }

  const handleState = (state) => {
    setToggleMenu(false)
    dispatch({ type: 'CURSOR_TYPE', cursorType: false })
    setTimeout(() => {
      Router.push(`/${state}`)
      // setPage(state);
    }, 1000)
  }

  // Motion
  const parent = {
    animate: { transition: { staggerChildren: 0.3, delayChildren: 0 } },
  }

  const titleSlideUp = {
    initial: { y: 1000 },
    animate: { y: 0 },
  }

  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            animate={{ y: toggleMenu ? 0 : '-100%' }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            style={{
              position: `fixed`,
              zIndex: 400,
              overflow: `hidden`,
              height: `100%`,
              width: `100%`,
              backgroundColor: `#000`,
            }}
          >
            <div
              style={{
                position: `absolute`,
                width: `100%`,
                height: `100%`,
                zIndex: 1,
              }}
            >
              <div className='flex items-center justify-center min-h-screen min-w-screen'>
                <motion.div
                  variants={parent}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                >
                  {pageRoutes.map((route) => (
                    <motion.a
                      className={CSS.CanvasMenuItem}
                      key={route.id}
                      onClick={() => handleState(route.page)}
                      onMouseEnter={() => onCursor('go')}
                      onMouseLeave={onCursor}
                      variants={titleSlideUp}
                      transition={transition}
                    >
                      <motion.h6 className={CSS.CanvasNumber}>
                        {route.number}
                      </motion.h6>
                      <motion.h1 className={CSS.CanvasLink}>
                        {route.title}
                      </motion.h1>
                    </motion.a>
                  ))}
                  {navRoutes.map((route) => (
                    <motion.a
                      className={CSS.CanvasMenuItem}
                      key={route.id}
                      onClick={() => handleLink(`${route.path}`)}
                      onMouseEnter={() => {
                        onCursor('go'), setMenuHover(route.title)
                      }}
                      onMouseLeave={() => {
                        onCursor(false), setMenuHover('')
                      }}
                      variants={titleSlideUp}
                      transition={transition}
                    >
                      <motion.h6 className={CSS.CanvasNumber}>
                        {route.number}
                      </motion.h6>
                      <motion.h1 className={CSS.CanvasLink}>
                        {route.title}
                      </motion.h1>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className={CSS.bgText}>
              <AnimatePresence>
                {MenuHover && (
                  <>
                    <motion.h1
                      initial={{ x: '-20%', opacity: 0 }}
                      exit={{ x: '-20%', opacity: 0 }}
                      animate={{ x: MenuHover ? 0 : '-20%', opacity: 0.05 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      }}
                    >
                      {MenuHover} {MenuHover}
                    </motion.h1>
                    <motion.h1
                      initial={{ x: '-40%', opacity: 0 }}
                      exit={{ x: '-40%', opacity: 0 }}
                      animate={{ x: MenuHover ? '40%' : '-40%', opacity: 0.05 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      }}
                    >
                      {MenuHover} {MenuHover}
                    </motion.h1>
                  </>
                )}
              </AnimatePresence>
            </div>
            <div
              style={{
                backgroundColor: '#000',
                cursorPointer: 'none',
                zIndex: 1,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
