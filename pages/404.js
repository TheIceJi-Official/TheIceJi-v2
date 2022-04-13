import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/css'

export default function Error404() {
  const Container = css`
    background-color: #000;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Content = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    & > p {
      opacity: 0.6;
      font-size: 20px;
    }
    & > h1 {
      font-size: 50px;
      font-weight: 600;
    }
    & > h2 {
      font-size: 20px;
      opacity: 0.8;
      margin: -10px 0 40px 0;
    }
    @media (max-width: 768px) {
      & > p {
        font-size: 15px;
      }
      & > h1 {
        font-size: 30px;
      }
      & > h2 {
        font-size: 12px;
      }
    }
  `

  const BTN = css`
    border: solid 1px #fff;
    color: #fff;
    padding: 2px 6px;
    opacity: 0.5;
    transition-duration: 500ms;
    &:hover {
      color: #fff;
      opacity: 1;
      transition-duration: 250ms;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  `

  return (
    <div className={Container}>
      <div className={Content}>
        <p>SORRY</p>
        <h1>ERROR 404</h1>
        <h2>NOT FOUND</h2>
        <Link href='/home'>
          <a>
            <button className={BTN}>TAKE ME HOME</button>
          </a>
        </Link>
      </div>
    </div>
  )
}
