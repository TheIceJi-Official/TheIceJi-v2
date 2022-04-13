import React from "react";
import { css } from "@emotion/css";
import { motion, AnimatePresence } from "framer-motion";
import serverConfig from "server/config";
import IceJIlogo from "components/assets/logo/IceJIlogoS";
import Elitelogo from "components/assets/logo/EliteAlleyS";

export default function about({ toggleAbout, setToggleAbout }) {
  const Panel = css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 250;
  `;

  const Container = css`
    width: 677px;
    height: 363px;
    @media (max-width: 766px) {
      width: 339px;
      height: 182px;
    }
  `;

  const Content = css`
    height: 100%;
    width: 228px;
    background-color: rgba(92, 39, 219, 0.75);
    @media (max-width: 766px) {
      width: 150px;
    }
    & > div {
      height: 100%;
      padding: 40px 0 40px 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 766px) {
        padding: 20px 20px;
      }
      & p,
      h6 {
        font-size: 10px;
        font-weight: 300;
        opacity: 0.9;
        @media (max-width: 766px) {
          font-size: 8px;
        }
      }
      & p {
        opacity: 0.6;
      }
      & h4 {
        font-size: 12px;
      }
    }
  `;

  const HideMobile = css`
    @media (max-width: 766px) {
      display: none;
    }
  `

  return (
    <>
      <AnimatePresence>
        {toggleAbout && (
          <motion.div
            initial={{ y: "80%", opacity: 0 }}
            exit={{ y: "80%", opacity: 0 }}
            animate={{
              y: toggleAbout ? 0 : "80%",
              opacity: toggleAbout ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className={Panel}
            onClick={() => setToggleAbout(false)}
          >
            <div
              className={Container}
              style={{
                backgroundImage: `url('/gui/SplashBG2x.png')`,
                overflow: `hidden`,
              }}
            >
              <div className={Content}>
                <div>
                  <div className={HideMobile}>
                    <IceJIlogo />
                  </div>
                  <div>
                    <h4 className="text-white">TheIceJI {serverConfig.VERSION}</h4>
                    <h6 className="text-white">Oct 3, 2021</h6>
                  </div>
                  <p className="text-white">
                    Copyrignt&#169;TheIceJI.com <br />
                    EliteAlley Technology 2020 <br />
                    JiraCapital Group 2021 <br />
                    All rights reserved
                  </p>
                  <div className={HideMobile}>
                    <Elitelogo />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
