import { css } from '@emotion/css'

const Bar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  z-index: 600;
  padding: 0 28px;
  height: 96px;
  margin-bottom: -96px;
  fill: #fff;
  & path {
    color: inherit;
    fill: inherit;
  }
`

const Brand = css`
  height: 100%;
  display: flex;
  align-items: center;
  & img {
    height: 40px;
  }
`

const Icon = css`
  opacity: 0.8;
  height: 100%;
  display: flex;
  align-items: center;
  color: inherit;
  &:hover {
    opacity: 1;
    /* fill: #000; */
    & > svg {
      fill: #000;
    }
  }
  @media (max-width: 480px) {
    &:hover {
      & > svg {
        fill: #fff;
      }
    }
  }
  & a {
    margin-right: 16px;
  }
`

// Fixed Menu
const fixedMenu = css`
  position: fixed;
  top: -64px;
  right: -64px;
  background-color: #2a2a2a;
  fill: #fff;
  height: 128px;
  width: 128px;
  border-radius: 50%;
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 400;
  transition-duration: 150ms;
  padding: 48px 48px 0 0;
  &:hover {
    top: -64px;
    right: -64px;
    transform: scale(1.2);
    transition-duration: 150ms;
    & > svg {
      fill: #fff;
      transform: scale(1);
    }
  }
`

const fixedMenuActive = css`
  top: 0;
  right: 0;
  transition-duration: 500ms;
`

const CSS = { Bar, Brand, Icon, fixedMenu, fixedMenuActive }
export default CSS
