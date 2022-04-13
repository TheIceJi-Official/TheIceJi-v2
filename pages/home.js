import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import CSS from 'components/css/main'

import Scene from 'components/app/three/scene/abstractFluid'
import HomePage from 'components/pages/home'

import FooterSocial from 'components/layout/footer/footerSocial'
import FooterText from 'components/layout/footer/footerText'
import About from 'components/layout/footer/about'
// import Maintenance from 'components/maintenance'

export default function Main({ title }) {
  // State
  const [toggleAbout, setToggleAbout] = useState(false)
  // const [ModalState, setModalState] = useState(true)

  return (
    <div style={{background: `linear-gradient(197deg, rgb(6 6 6) 0%, rgba(43,43,43,1) 100%)`}}>
      {/* <NextSeo {...SEO} /> */}
      <div className={CSS.heroContainer}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            pointerEvents: `none`,
          }}
        >
          <HomePage />
        </div>
        <FooterSocial opacity={0.4} />
        <FooterText toggleAbout={toggleAbout} setToggleAbout={setToggleAbout} />
        <About toggleAbout={toggleAbout} setToggleAbout={setToggleAbout} />
        <AbstractFluid />
        {/* <Maintenance ModalState={ModalState} setModalState={setModalState} /> */}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'TheIceJI | Home',
    },
  }
}

const AbstractFluid = () => {
  return (
      <Canvas style={{transform: 'translate3d(-30%, 0, 0)', width: '160%'}} dpr={[1, 2]}>
        <Scene />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
  )
}