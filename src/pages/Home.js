import React from 'react'
import Hero from '../components/home/Hero'
import About1 from '../components/home/About'
import Services from '../components/home/Services'
import Clients from '../components/home/Clients'
import SmallClients from '../components/home/SmallClients'
import Partners from '../components/home/Partners'

function Home() {
  return (
    <div className=''>
    
    {/* Hero */}
      <Hero />
      
      <SmallClients />

      
      <About1 />
      
      <Partners />
      <Services />
      <Clients />
      
    </div>
  )
}

export default Home
