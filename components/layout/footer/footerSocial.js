import { css } from '@emotion/css'
import { motion } from 'framer-motion'
import { SocialItems } from 'contents/socialLink'

export default function footerSocial(props) {
  // Right - Social Media
  const FooterSocial = css`
    position: absolute;
    left: 20px;
    bottom: 10px;
    display: flex;
    width: 64px;
    z-index: 1;
    & > a {
      padding-right: 24px;
      color: #fff;
      opacity: ${props.opacity};
      transition-duration: 500ms;
    }
    & > a:hover {
      opacity: 1;
      transform: scale(1.6) translate(10%, -20%);
      transition-duration: 150ms;
    }
  `

  return (
    <div className={FooterSocial}>
      {SocialItems.map((v, i) => (
        <SocialLinkIcon
          icon={v.icon}
          link={v.link}
          animationDelay={v.animationDelay}
          key={i}
        />
      ))}
    </div>
  )
}

const SocialLinkIcon = ({ icon, link, animationDelay }) => {
  const Init = () => ({ visibility: `hidden`, y: 100 })
  const Animated = () => ({ visibility: `visible`, y: 0 })
  const transition = (delay) => ({ delay: delay })
  return (
    <motion.a
      initial={Init}
      animate={Animated}
      transition={transition(animationDelay)}
      href={link}
    >
      <i className={icon}></i>
    </motion.a>
  )
}
