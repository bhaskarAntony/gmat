import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Services from '../../components/Services/Services'
import Request from '../../components/Request/Request'
import Mission from '../../components/mission/Mission'
import Contact from '../../components/contact/Contact'
import Subscribe from '../../components/subscribe/Subscribe'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Request/>
        <Mission/>
        <Contact/>
        <Subscribe/>
    </div>
  )
}

export default Home