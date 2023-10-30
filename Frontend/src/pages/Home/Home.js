import React from 'react'

import ServicesSection from '../../layouts/HomepageServices/index'
import GymPlans from '../../layouts/GymPlans/GymPlans'
import ReasonsToJoin from '../../components/ReasonsToJoin/ReasonsToJoin'

function Home() {
  return (
    <section className='homeWrapper'> 
    <ReasonsToJoin />
    <ServicesSection />
    <GymPlans />
    </section>
  )
}

export default Home