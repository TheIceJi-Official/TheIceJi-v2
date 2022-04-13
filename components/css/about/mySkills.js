import { css } from '@emotion/css'
import Color from 'components/css/global/Color'

export const container = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
  position: fixed;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 24px;
    @media (min-width: 480px) {
      max-width: 480px;
    }
    @media (min-width: 768px) {
      max-width: 768px;
      flex-direction: row;
      padding: 0;
    }
    @media (min-width: 976px) {
      max-width: 976px;
    }
    @media (min-width: 1290px) {
      max-width: 1290px;
    }
  }
`

// *! Main (Fixed)

export const main = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 120px;
  padding-bottom: 16px;
  @media (max-width: 768px) {
    padding-top: 90px;
  }
`

export const header = css`
  & > h1 {
    color: ${Color.Primary};
    font-size: 70px;
    font-weight: 600;
    line-height: 65px;
    @media (max-width: 768px) {
      font-size: 40px;
      line-height: 46px;
    }
  }
  & > p {
    margin-top: 24px;
    opacity: 0.6;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    @media (max-width: 768px) {
      font-size: 10px;
      line-height: 18px;
      margin-top: 0px;
    }
  }
`

export const menu = css`
  opacity: 0.4;
  display: flex;
  align-items: center;
  transition-duration: 500ms;
  &:nth-child(n):not(:first-child) {
    margin-top: 8px;
  }
  & > div {
    margin: 0 16px;
    height: 1px;
    width: 24px;
    background-color: ${Color.Text};
    transition-duration: 500ms;
  }
  & > p {
    margin: 0;
    text-transform: uppercase;
    &:first-child {
      width: 24px;
    }
    &:last-child {
      letter-spacing: 2px;
    }
  }
`

export const footer = css`
  display: flex;
  align-items: center;
  & > a {
    display: flex;
    align-items: center;
    padding-left: 32px;
    opacity: 0.6;
    transition-duration: 450ms;
    &:hover {
      opacity: 1;
      transition-duration: 250ms;
    }
    & > p {
      padding-left: 16px;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`

// *! Content

export const content = css`
  padding: 120px 0 0 10px;
  width: 50%;
  overflow-y: auto;
  /* height: 100%; */
  /* overflow: hidden; */
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

export const contentInner = css``

export const sectionRow = css`
  margin-bottom: 38px;
`

export const sectionRowContent = css`
  width: 100%;
  height: 192px;
  background-color: #202022;
  border-radius: 5px;
  padding: 36px 0 36px 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition-duration: 450ms;
  &:nth-child(n):not(:first-child) {
    margin-top: 8px;
  }
  &:hover {
    background-color: ${Color.Primary};
    color: #000;
    transform: translate3d(-10px, -10px, 0);
    transition-duration: 250ms;
  }
  & div > h5 {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3px;
  }
  & div > h4 {
    font-size: 26px;
    font-weight: 600;
  }
  & div > p {
    margin: 0;
    font-size: 14px;
    font-weight: 200;
  }
  & div:nth-child(2) {
    display: flex;
    & p {
      margin-left: 6px;
    }
  }
  & > p {
    opacity: 0.8;
    font-size: 12px;
    margin: 0;
    line-height: 0;
  }
  @media (max-width: 768px) {
    padding: 24px 18px 24px 24px;
    height: 150px;
    & div > h5 {
      font-size: 8px;
    }
    & div > h4 {
      font-size: 16px;
    }
    & div > p {
      font-size: 10px;
    }
    &:hover {
      transform: translate3d(0, 0, 0);
    }
  }
`

export const sectionGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 38px;
`

export const sectionGridContent = css`
  background-color: #202022;
  color: ${Color.Text};
  padding: 36px 0 36px 42px;
  border-radius: 5px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition-duration: 450ms;
  &:hover {
    background-color: ${Color.Primary};
    color: #000;
    transform: translate3d(-10px, -10px, 0);
    transition-duration: 250ms;
  }
  & h5 {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 10px;
  }
  & h6 {
    opacity: 0.6;
    font-weight: 300;
    font-size: 16px;
    margin-top: 12px;
  }
  & h4 {
    font-size: 26px;
    line-height: 25px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    padding: 24px 0 24px 24px;
    height: 180px;
    & h5 {
      font-size: 6px;
      line-height: 3px;
    }
    & h6 {
      font-size: 10px;
    }
    & h4 {
      font-size: 12px;
      line-height: 12px;
    }
    &:hover {
      transform: translate3d(0, 0, 0);
    }
  }
`
