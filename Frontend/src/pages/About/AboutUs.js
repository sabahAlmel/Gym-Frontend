
import React from 'react'
import OurValue from '../../components/OurValue/OurValue'
import Hero from '../../components/HeroAboutUs/HeroAbouUs'; // Import the Hero component
import OurStory from '../../components/OurStory/OurStory';
import OurCulture  from '../../components/NavBar/OurCulture/OurCulture';


function AboutUs() {
  return (
    <>
    <Hero />
    <section className='aboutUsWrapper'>
    <OurStory/>
    <OurValue />
    <OurCulture/>
    </section>
    </>
  )
  }
export default AboutUs;
