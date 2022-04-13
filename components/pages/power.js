import { css, keyframes } from '@emotion/css'

export default function power({ setPowerOn }) {
  const Container = {
    width: '100%',
    height: '95vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const InnerContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition-duration: 300ms;
    &:hover > p {
      opacity: 1;
    }
    &:hover > div {
      animation: none;
      transition-duration: 150ms;
    }
  `

  const breathing = keyframes`
    0% {
            opacity: 0.2;
    }
    25% {
            opacity: 0.05;
    }
    60% {
            opacity: 0.2;
    }
    100% {
            opacity: 0.2;
    }
    `

  const Text = css`
    margin-top: 24px;
    font-size: 20px;
    opacity: 0.2;
    transition-duration: 300ms;
    &:hover {
      transition-duration: 150ms;
    }
  `

  const Power = css`
    animation: ${breathing} 2s ease-out infinite;
  `

  return (
    <div style={Container}>
      <div className={InnerContainer} onClick={() => setPowerOn(true)}>
        <div className={Power}>
          <PowerIcon />
        </div>
        <p className={Text}>Power On</p>
      </div>
    </div>
  )
}

const PowerIcon = () => (
  <>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='136.307'
      height='142.107'
      viewBox='0 0 136.307 142.107'
    >
      <g id='power-svgrepo-com' transform='translate(-21 -11)'>
        <g id='Group_3556' data-name='Group 3556' transform='translate(21 11)'>
          <g id='Group_3555' data-name='Group 3555'>
            <path
              id='Path_5078'
              data-name='Path 5078'
              d='M89.154,191.2C51.568,191.2,21,161.563,21,125.137c0-25.463,14.675-48.23,38.311-59.424a5.922,5.922,0,1,1,5.075,10.7c-19.46,9.222-31.525,27.87-31.525,48.723,0,29.9,25.26,54.233,56.292,54.233s56.292-24.332,56.292-54.233c0-21-12.761-40.283-32.54-49.158a5.913,5.913,0,1,1,4.843-10.789c24.042,10.76,39.558,34.309,39.558,59.946,0,36.426-30.568,66.065-68.154,66.065Z'
              transform='translate(-21 -49.095)'
              fill='#f8de3c'
            />
            <path
              id='Path_5079'
              data-name='Path 5079'
              d='M241.516,91.305a5.9,5.9,0,0,1-5.916-5.916V16.916a5.916,5.916,0,1,1,11.833,0V85.389A5.9,5.9,0,0,1,241.516,91.305Z'
              transform='translate(-173.363 -11)'
              fill='#f8de3c'
            />
          </g>
        </g>
      </g>
    </svg>
  </>
)
