import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'TheIceJI | About me',
    },
  }
}

export default About