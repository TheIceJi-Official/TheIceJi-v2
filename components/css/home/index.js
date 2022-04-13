import { css } from '@emotion/css'
import Color from 'components/css/global/Color'

const heroContainer = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const heroText = css`
  padding-right: 32px;
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & h1 {
    font-size: 276px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0);
    opacity: 0.4;
    -webkit-text-stroke: 3px #fff;
    margin-bottom: -50px;
    @media (min-width: 2560px) {
      font-size: 450px;
      margin-bottom: -70px;
    }
    @media (max-width: 1440px) {
      font-size: 200px;
      margin-bottom: -10px;
    }
    @media (max-width: 1024px) {
      font-size: 140px;
      margin-bottom: -10px;
    }
    @media (max-width: 640px) {
      font-size: 65px;
      -webkit-text-stroke: 1px #fff;
      margin-bottom: 0px;
    }
    @media (max-width: 320px) {
      font-size: 50px;
    }
  }
  & > h2 {
    font-size: 160px;
    font-family: poppins;
    margin-bottom: -150px;
    font-weight: 600;
    @media (min-width: 2560px) {
      font-size: 300px;
      margin-bottom: -230px;
    }
    @media (max-width: 1024px) {
      font-size: 120px;
      margin-bottom: -90px;
    }
    @media (max-width: 640px) {
      font-size: 55px;
      margin-bottom: -20px;
    }
  }
  & > h6 {
    font-size: 40px;
    line-height: 0;
    font-family: poppins;
    color: ${Color.Primary};
    font-weight: 600;
    margin-bottom: -10px;
    @media (min-width: 2560px) {
      font-size: 80px;
      margin-bottom: -20px;
    }
    @media (max-width: 640px) {
      font-size: 25px;
    }
  }
  @media (max-width: 640px) {
    padding-right: 8px;
  }
`

const TitleContainer = css`
  display: flex;
`

const callToAction = css`
  pointer-events: auto;
  & > button {
    border: 1px solid white;
    padding: 4px 12px;
    margin: 8px;
    opacity: 0.6;
    transition-duration: 500ms;
    &:hover {
      opacity: 1;
      transition-duration: 250ms;
    }
    @media (max-width: 640px) {
      font-size: 8px;
    }
  }
`

const Rec = css`
  mix-blend-mode: difference;
  z-index: -1;
  width: 250px;
  height: 250px;
  position: absolute;
  pointer-events: none;
  background-color: ${Color.Primary};
  &:nth-child(2) {
    background-color: gray;
  }
`

const CSS = { heroContainer, heroText, TitleContainer, callToAction, Rec }
export default CSS
