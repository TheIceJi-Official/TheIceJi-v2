import { css } from '@emotion/css'
import { motion } from 'framer-motion'
import { SocialItems } from 'contents/socialLink'
import serverConfig from "server/config";

export default function Footer(props) {
  // const socialOpacity = props.socialOpacity
  const container = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  `
  return (
    <>
      <div className={container}>
        <Social opacity={props.socialOpacity} />
        <Text />
      </div>
    </>
  )
}

const Social = (props) => {
  // Right - Social Media
  const FooterSocial = css`
    /* position: absolute; */
    left: 20px;
    bottom: 10px;
    display: flex;
    width: 64px;
    & > a {
      padding-right: 24px;
      color: #fff;
      opacity: ${props.opacity};
      transition-duration: 500ms;
    }
    & > a:hover {
      color: #fff;
      opacity: 1;
      transform: scale(1.6) translate(10%, -20%);
      transition-duration: 150ms;
    }
  `

  return (
    <div>
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
    </div>
  )
}

const SocialLinkIcon = ({ icon, link, animationDelay }) => {
  const Init = () => ({ visibility: `hidden`, y: 100 })
  const Animated = () => ({ visibility: `visible`, y: 0 })
  const transition = (delay) => ({ delay: delay })
  return (
    <a
      initial={Init}
      animate={Animated}
      transition={transition(animationDelay)}
      href={link}
    >
      <i className={icon}></i>
    </a>
  )
}

const Text = () => {
  const FooterText = css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > p {
      color: #fff;
      & > span {
        opacity: 0.4;
      }
      & > a {
        opacity: 0.6;
        color: #fff;
        text-decoration: none;
        transition-duration: 600ms;
        cursor: pointer;
        &:hover {
          opacity: 1;
          transition-duration: 200ms;
        }
      }
    }
    @media (max-width: 640px) {
      font-size: 12px;
      bottom: 40px;
      align-items: flex-start;
      padding-left: 20px;
    }
  `

  const Init = () => ({ visibility: `hidden`, y: 100 })
  const Animated = () => ({ visibility: `visible`, y: 0 })
  const transition = (delay) => ({ delay: delay })

  return (
    <div className={FooterText}>
      <p initial={Init} animate={Animated} transition={transition(3.5)}>
        <span>Copyright ©2021 Designed by </span>
        <a href='/home'>Jirayu Ninlapun</a>
        <span>. All rights reserved</span>
      </p>
    </div>
  )
}
