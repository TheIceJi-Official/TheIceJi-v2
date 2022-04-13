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
export const logoContainer = css`
  width: 165px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`
export const logoFG = css`
  position: absolute;
  & > svg {
    gap: 20;
  }
`
export const logoBG = css`
  & > svg {
    stroke-opacity: 0.5;
  }
`
export const loading = css`
  width: 224px;
  height: 10px;
  /* border: solid 1px #fff; */
  border-radius: 5px;
  margin: 20px 0 10px 0;
`
export const loadingBar = css`
  height: 4px;
  background-color: ${Color.Primary};
  margin: 2px;
  border-radius: 2px;
`
export const percent = css`
  font-family: poppins;
  font-size: 37px;
  font-weight: 600;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`
export const text = css`
  font-family: poppins;
  font-size: 18px;
  font-weight: 300;
  opacity: 0.8;
`

// const Loading = {container, inner, logoContainer, logoFG, logoBG, loading, loadingBar, percent, text, }
// export default Loading
