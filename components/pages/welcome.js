import { motion, animate } from 'framer-motion'
import Link from 'next/link'
// CSS
import { Welcome as CSS } from 'components/css/components'
// Components
import IconNext from 'components/assets/icon/iconNext'
import Color from 'components/css/global/Color'

// Motion
const MotionTransition = (delay, duration) => ({
  delay: delay,
  duration: duration,
  ease: [0.6, 0.05, -0.01, 0.9],
})

const StepInit = ({ Fn }) => (
  <div className={CSS.TextContainer}>
    <motion.h1
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0', opacity: 1 }}
      transition={MotionTransition(0, 0.2)}
      className={CSS.TextHi}
    >
      {Fn.Step == 1 ? `Hi . . .` : Fn.Step == 2 ? `What's your name` : null}
    </motion.h1>
  </div>
)

const StepGetName = ({ Fn }) => (
  <>
    <form className={CSS.NameInput} onSubmit={Fn.registerUser}>
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={MotionTransition(0, 0.75)}
        id='visiter name'
        type='text'
        placeholder="What's your name"
        required
        onChange={Fn.onChangeName}
      />
      <motion.button
        initial={{ x: '-20%', opacity: 0 }}
        animate={{ x: '0', opacity: 1 }}
        transition={MotionTransition(0.5, 1.5)}
        type='submit'
      >
        {/* <IconNext color={Color.Primary} /> */}
        <IconNext Darkmode={Fn.Darkmode} />
      </motion.button>
    </form>
    <Link href={Fn.Push}>
      <a className={CSS.NextLink}>
        <div className={CSS.NextButtonRight}>
          <motion.h3
            initial={{ y: '120%' }}
            animate={{ y: '0' }}
            transition={MotionTransition(0.5, 0.5)}
          >
            Continue as GUEST
          </motion.h3>
        </div>
      </a>
    </Link>
  </>
)

const StepWelcome = ({ Fn }) => (
  <>
    <div className={CSS.TextContainer}>
      <motion.h1
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={MotionTransition(0, 0.5)}
        className={CSS.TextWelcome}
      >
        Welcome, <span style={{ color: Color.Primary }}>{Fn.InputName}</span>
      </motion.h1>
    </div>
    <Link href={Fn.Push}>
      <a className={CSS.NextLink}>
        <div className={CSS.NextButton}>
          <motion.h3
            initial={{ y: '120%' }}
            animate={{ y: '0' }}
            transition={MotionTransition(0.5, 0.2)}
            style={{ color: Fn.Darkmode ? '#FFF' : '#000' }}
          >
            Next
          </motion.h3>
          <motion.div
            initial={{ x: '-50%', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            transition={MotionTransition(1, 0.2)}
          >
            <IconNext Darkmode={Fn.Darkmode} />
          </motion.div>
        </div>
      </a>
    </Link>
  </>
)

const StepWelcomeBack = ({ Fn }) => (
  <>
    <div className={CSS.TextContainer}>
      <motion.h1
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={MotionTransition(0, 1)}
        className={CSS.TextWelcome}
      >
        Welcome back,{' '}
        <span style={{ color: Color.Primary }}>{Fn.InputName}</span>
      </motion.h1>
    </div>
    <div className={CSS.CheckName}>
      <motion.h3
        initial={{ y: '120%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={MotionTransition(0.5, 0.5)}
        onClick={() => Fn.setStep(3)}
        style={{
          color: Fn.Darkmode
            ? 'rgba(255, 255, 255, 0.3)'
            : 'rgba(0, 0, 0, 0.3)',
        }}
      >
        It&apos;s not you?
      </motion.h3>
      <Link href={Fn.Push}>
        <a className={CSS.NextLink}>
          <div className={CSS.NextButton}>
            <motion.h3
              initial={{ y: '120%' }}
              animate={{ y: '0' }}
              transition={MotionTransition(1, 0.5)}
              style={{ color: Fn.Darkmode ? '#FFF' : '#000' }}
            >
              Next
            </motion.h3>
            <motion.div
              initial={{ x: '-50%', opacity: 0 }}
              animate={{ x: '0', opacity: 1 }}
              transition={MotionTransition(1.5, 0.5)}
            >
              <IconNext Darkmode={Fn.Darkmode} />
            </motion.div>
          </div>
        </a>
      </Link>
    </div>
  </>
)

const StepElem = { StepInit, StepGetName, StepWelcome, StepWelcomeBack }
export default StepElem
