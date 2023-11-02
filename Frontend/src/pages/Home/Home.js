import React, { useEffect, useState } from 'react';
import HeroSectionHomepage from './HeroSectionHomepage';

import ServicesSection from '../../layouts/HomepageServices/index'
import GymPlans from '../../layouts/GymPlans/GymPlans'
import ReasonsToJoin from '../../components/ReasonsToJoin/ReasonsToJoin'
import './home.css';
import { fetchGymPlans } from '../../data/fetchData';

function Home() {
  const [gymPlansData, setGymPlansData] = useState({})
  useEffect(()=>{
    try{
      fetchGymPlans()
    }catch(err){console.log(err)}

  })


  return (
    <>
    <HeroSectionHomepage />
    <section className='homeWrapper'> 
    <ReasonsToJoin />
    <ServicesSection />
    <GymPlans />
    </section>
    </>
  )
}

export default Home;