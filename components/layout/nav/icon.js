import React from 'react'
import { css } from '@emotion/css'

export const menu = () => {
  const IJNsvg = css`
    transition-duration: 750ms;
    &:hover {
      transition-duration: 200ms;
      transform: scale(1.5);
      fill: #000;
    }
  `

  return (
    <>
      <svg
        width='1.5em'
        height='1.5em'
        viewBox='0 0 16 16'
        className={IJNsvg}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z' />
      </svg>
    </>
  )
}

export const close = () => {
  const IJNsvg = css`
    transition-duration: 750ms;
    fill: #fff;
    &:hover {
      transition-duration: 200ms;
      transform: scale(1.5);
      fill: #000;
    }
  `

  return (
    <>
      <svg
        width='17.678'
        height='17.678'
        viewBox='0 0 17.678 17.678'
        className={IJNsvg}
        xmlns='http://www.w3.org/2000/svg'
      >
        <g transform='translate(-1871.161 -37.661)'>
          <rect
            width='22'
            height='3'
            rx='1.5'
            transform='translate(1871.161 53.218) rotate(-45)'
          />
          <rect
            width='22'
            height='3'
            rx='1.5'
            transform='translate(1873.282 37.661) rotate(45)'
          />
        </g>
      </svg>
    </>
  )
}

export const user = () => {
  const IJNsvg = css`
  transition-duration: 750ms;
  fill: #fff;
  &:hover {
    transition-duration: 200ms;
    transform: scale(1.5);
    fill: #000;
  }
`

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        className={IJNsvg}
        viewBox='0 0 16.369 16.369'
      >
        <path
          d='M8.185,0a8.185,8.185,0,1,0,8.185,8.185A8.185,8.185,0,0,0,8.185,0Zm5.288,12.485a1.617,1.617,0,0,0-1.276-.846c-1.564-.361-3.02-.677-2.314-2.009,2.145-4.053.568-6.22-1.7-6.22-2.311,0-3.85,2.25-1.7,6.22.727,1.34-.783,1.655-2.314,2.009a1.606,1.606,0,0,0-1.273.85,6.821,6.821,0,1,1,10.573,0Z'
        />
      </svg>
    </>
  )
}
