import React from 'react'
import Hero from '../components/home/Hero'
import About1 from '../components/home/About'
import Services from '../components/home/Services'
import Clients from '../components/home/Clients'
import SmallClients from '../components/home/SmallClients'

function Home() {
  return (
    <div className=''>
    
    {/* Hero */}
      <Hero />
      
      <SmallClients />

    <About1 />

      <Services />
      <Clients />
      
    </div>
  )
}

export default Home
