import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import About1 from '../components/home/About'
import Services from '../components/home/Services'

function Home() {
  return (
    <div className=''>
    
    {/* Hero */}
    <Hero />

    <About1 />

    <Services />
      
    </div>
  )
}

export default Home
