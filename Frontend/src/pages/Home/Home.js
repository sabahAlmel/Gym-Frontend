import React from 'react';
import HeroSectionHomepage from './HeroSectionHomepage';

import ServicesSection from '../../layouts/HomepageServices/index'
import GymPlans from '../../components/Plans/GymPlans'
import ReasonsToJoin from '../../components/ReasonsToJoin/ReasonsToJoin'
import './home.css';

function Home() {
  return (
    <>
    <HeroSectionHomepage/>
    <section className='homeWrapper'> 
    <ReasonsToJoin />
    <ServicesSection />
    <GymPlans />
    </section>
    </>
  )
}

export default Home;