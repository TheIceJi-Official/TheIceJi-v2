import { css } from '@emotion/css'
import Color from 'components/css/global/Color'

export const container = css`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
`
export const inner = css``
export const TextContainer = css`
  width: 100vw;
  overflow: hidden;
  & h1 {
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`
export const TextHi = css`
  /* position: relative; */
  font-size: 60px;
  font-weight: 300;
  left: 50%;
  transform: translateX(-50%);
`
export const TextWelcome = css`
  /* position: relative; */
  font-size: 60px;
  font-weight: 300;
  left: 50%;
  transform: translateX(-50%);
`
export const NameInput = css`
  display: flex;
  & > Input {
    background-color: rgba(0, 0, 0, 0);
    font-size: 60px;
    text-align: left;
    font-weight: 300;
    border: none;
    border-bottom: 2px solid ${Color.Primary};
    @media (max-width: 750px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
    }
    &:focus,
    &:active,
    &:visited {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  & button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    margin-left: -50px;
    & > svg {
      @media (max-width: 750px) {
        height: 20px;
      }
      @media (max-width: 480px) {
        margin-left: 15px;
        height: 12px;
      }
    }
  }
`

export const NextButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0.3;
  transition-duration: 500ms;
  &:hover {
    opacity: 1;
    transition-duration: 250ms;
  }
  & > h3 {
    font-weight: 300;
    font-size: 30px;
    margin-bottom: -1px;
    padding-right: 10px;
  }
  & svg {
    height: 30px;
  }
  @media (max-width: 480px) {
    opacity: 0.8;
    & > h3 {
      font-size: 12px;
      padding-right: 0;
    }
    & svg {
      height: 10px;
      width: 30px;
    }
  }
`

export const NextButtonRight = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  opacity: 0.3;
  transition-duration: 500ms;
  &:hover {
    opacity: 1;
    transition-duration: 250ms;
  }
  & > h3 {
    font-weight: 300;
    font-size: 30px;
    margin-bottom: -1px;
    padding-right: 10px;
    @media (max-width: 480px) {
      margin-top: 3px;
      font-size: 12px;
    }
  }
`

export const NextLink = css`
  text-decoration: none;
`

export const CheckName = css`
  /* position: relative; */
  justify-content: center;
  align-items: center;
  display: flex;
  & > h3 {
    font-weight: 300;
    font-size: 20px;
    margin-bottom: -5px;
    padding-right: 30px;
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    & h3 {
      padding-right: 0px;
      font-size: 12px;
    }
    & > h3 {
      padding-right: 30px;
    }
  }
`

// const Welcome = {container, inner, TextContainer, TextHi, TextWelcome, NameInput, NextButton, NextButtonRight, NextLink, CheckName, }
// export default Welcome;
