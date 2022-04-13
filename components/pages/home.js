
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
// CSS
import CSS from 'components/css/home'

const transition = (delay) => ({
  delay: delay,
})

export default function home() {
  const Init = () => ({ visibility: `hidden`, y: 100 })
  const Animated = () => ({ visibility: `visible`, y: 0 })

  const SkewInint = () => ({
    opacity: 0,
    skewY: 5,
    y: 100,
  })
  const SkewAnimated = () => ({
    opacity: 0.4,
    skewY: 0,
    y: 0,
  })
  return (
    <>
      <div className={CSS.heroContainer} style={{ zIndex: 50 }}>
        <div className={CSS.heroText}>
          <motion.h6
            initial={Init}
            animate={Animated}
            transition={transition(0)}
          >
            HELLO, I AM
          </motion.h6>
          <motion.h2
            initial={Init}
            animate={Animated}
            transition={transition(0.5)}
          >
            JIRAYU
          </motion.h2>
          <AnimatedTitle />
          <div className={CSS.callToAction}>
            <motion.button
              initial={Init}
              animate={Animated}
              transition={transition(1.5)}
            >
              About me
            </motion.button>
            <Link href='/about/my-skills' passHref>
              <motion.button
                initial={Init}
                animate={Animated}
                transition={transition(2)}
              >
                Skill
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      {/* <FloatingRec top={14} left={62} delay={2.7}/> */}
      {/* <FloatingRec top={90} left={20} delay={3.2}/> */}
    </>
  )
}

const AnimatedTitle = ({ Title }) => {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const letterAni = {
    initial: { opacity: 0, y: 400 },
    animate: {
      opacity: 0.4,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  let TitleArr = [`N`, `I`, `N`, `L`, `A`, `P`, `U`, `N`]

  return (
    <>
      <motion.div
        initial='initial'
        animate='animate'
        className={CSS.TitleContainer}
        variants={banner}
      >
        {[...TitleArr].map((letter, i) => (
          <motion.h1 variants={letterAni} key={i}>
            {letter}
          </motion.h1>
        ))}
      </motion.div>
    </>
  )
}

const FloatingRec = ({ top, left, delay }) => {
  return (
    <motion.div
      style={{ top: `${top.toString()}%`, left: `${left.toString()}%` }}
      className={CSS.Rec}
      initial={{ visibility: `hidden`, y: 100 }}
      animate={{ visibility: `visible`, y: 0 }}
      transition={transition(delay)}
    ></motion.div>
  )
}
