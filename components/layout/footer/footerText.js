import React from "react";
import { css } from "@emotion/css";
import { motion } from "framer-motion";
import serverConfig from "server/config";

export default function footerText({ toggleAbout, setToggleAbout }) {
  const FooterText = css`
    position: absolute;
    right: 20px;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1;
    & > p {
      color: #fff;
      line-height: 10px;
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
      align-items: flex-end;
      padding-left: 20px;
    }
  `;

  const Init = () => ({ visibility: `hidden`, y: 100 });
  const Animated = () => ({ visibility: `visible`, y: 0 });
  const transition = (delay) => ({ delay: delay });

  return (
    <div className={FooterText}>
      <motion.p
        initial={Init}
        animate={Animated}
        transition={transition(3)}
      >
        <a
          onClick={() => {
            setToggleAbout(!toggleAbout);
          }}
        >
          TheIceJI v{serverConfig.VERSION}
        </a>
        <span> | React v18.0 | NextJS v11.1.2</span>
      </motion.p>
      <motion.p
        initial={Init}
        animate={Animated}
        transition={transition(3.5)}
      >
        <span>Copyright©{new Date().getFullYear()} by </span>
        <a href="/home">Jirayu Ninlapun</a>
        <span>. All rights reserved</span>
      </motion.p>
    </div>
  );
}
