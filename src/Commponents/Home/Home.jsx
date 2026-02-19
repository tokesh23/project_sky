import React from 'react'
 import IntroPage from "../IntroPage/IntroPage.jsx"
import Hero from "../Hero/Hero.jsx"
import Introsecond from "../IntroPage/Introsecond.jsx"
import Clients from "../IntroPage/Clients.jsx"
const Home = () => {
  return (
    <div>
        <Hero />
      <IntroPage />
      <Introsecond />
      <Clients />
    </div>
  )
}

export default Home
