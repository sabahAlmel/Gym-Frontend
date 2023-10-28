import React from 'react'

import ServicesSection from '../../layouts/HomepageServices/index'
import GymPlans from '../../components/Plans/GymPlans'
import './home.css'

function Home() {
  return (
    <section className='homeWrapper'> 
    <ServicesSection />
    <GymPlans />
    </section>
  )
}

export default Home