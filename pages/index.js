/* eslint-disable */
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, animate, AnimatePresence } from 'framer-motion'
// Global State
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from 'components/context/globalContext'
// CSS
import { Welcome as CSS_W, Loading as CSS_L } from 'components/css/components'
// Components
import StepElem from 'components/pages/welcome'
import TheIceJIlogo from 'components/assets/logo/IceJIlogo'
import PowerSwitch from 'components/pages/power'

export default function Index() {
  const [PowerOn, setPowerOn] = useState(false)
  if (!PowerOn) {
    return (
      <AnimatePresence>
        {!PowerOn && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <PowerSwitch setPowerOn={setPowerOn} />
          </motion.div>
        )}
      </AnimatePresence>
    )
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <PowerIsOn />
      </motion.div>
    )
  }
}

function PowerIsOn() {
  const { Darkmode } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/home')
  })

  // useGlobalDispatchContext({ showNav: false })

  // *! Loading

  const [Loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)

  function Counter({ from, to }) {
    const nodeRef = useRef()

    useEffect(() => {
      const node = nodeRef.current

      const controls = animate(from, to, {
        duration: 3,
        ease: [0.33, 1, 0.68, 1],
        onUpdate(value) {
          node.textContent = value.toFixed(0)
        },
      })

      return () => controls.stop()
    }, [from, to])

    return <h2 ref={nodeRef} />
  }

  const MotionTransition = (delay, duration) => ({
    delay: delay,
    duration: duration,
    ease: [0.33, 1, 0.68, 1],
  })

  // *! Welcome
  const { StepInit, StepGetName, StepWelcome, StepWelcomeBack } = StepElem
  const [Step, setStep] = useState(3)

  useEffect(() => {
    window.localStorage.getItem('getName') == null ? FirstTime() : setStep(5),
      setInputName(window.localStorage.getItem('getName'))

    window.localStorage.getItem('Darkmode') == null
      ? window.localStorage.setItem('Darkmode', true)
      : dispatch({
          type: 'TOGGLE_THEME',
          theme: window.localStorage.getItem('Darkmode'),
        })
  }, [])

  const FirstTime = () => {
    setStep(1)
    setTimeout(() => {
      setStep(2)
    }, 5000)
    setTimeout(() => {
      setStep(3)
    }, 7000)
  }

  const registerUser = (event) => {
    event.preventDefault()
    setStep(4)
    window.localStorage.setItem('getName', InputName)
  }

  const onChangeName = (e) => {
    setInputName(`${e.target.value}`)
    if (e.key === 'Enter') {
      setInputName(`${e.target.value}`)
    }
  }

  const [InputName, setInputName] = useState(`Adam`)
  const Fn = {
    InputName,
    onChangeName,
    registerUser,
    setStep,
    Step,
    Push: '/home',
    Darkmode,
  }

  const WelcomeText = () => {
    if (Step < 3) return <StepInit Fn={Fn} />
    // * Step 1 = `Hi`
    // * Step 2 = `What's your name`
    else if (Step == 4) return <StepWelcome Fn={Fn} />
    // * Welcome {InputName}
    else if (Step == 5) return null
    else return null
  }

  // dispatch({showNav: false })

  if (Loading) {
    return (
      <>
        <div className={CSS_L.container}>
          <div className={CSS_L.inner}>
            <div className={CSS_L.logoContainer}>
              <motion.div
                className={CSS_L.logoFG}
                animate={{ strokeDasharray: 100 }}
                initial={{ strokeDasharray: 50 }}
                transition={MotionTransition(0, 3)}
              >
                <TheIceJIlogo Darkmode={Darkmode} />
              </motion.div>
              <motion.div
                className={CSS_L.logoBG}
                animate={{ fill: 'rgba(255, 255, 255, 1)' }}
                initial={{ fill: 'rgba(255, 255, 255, 0)' }}
                transition={MotionTransition(0, 3)}
              >
                <TheIceJIlogo Darkmode={Darkmode} />
              </motion.div>
            </div>
            <div className={CSS_L.percent}>
              <Counter from={0} to={100} />
              <h2>%</h2>
            </div>
            <div
              className={CSS_L.loading}
              style={{ border: Darkmode ? 'solid 1px #fff' : 'solid 1px #000' }}
            >
              <motion.div
                className={CSS_L.loadingBar}
                animate={{ width: 218 }}
                initial={{ width: 0 }}
                transition={MotionTransition(0, 3)}
              ></motion.div>
            </div>
            <p className={CSS_L.text}>Loading your Experience.</p>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={CSS_W.container}>
          <div className={CSS_W.inner}>
            <WelcomeText />
            {console.log(Step)}
            {Step == 3 && <StepGetName Fn={Fn} />}
            {Step == 5 && <StepWelcomeBack Fn={Fn} />}
          </div>
        </div>
      </>
    )
  }
}
