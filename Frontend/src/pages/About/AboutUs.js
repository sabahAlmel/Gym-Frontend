
import React from 'react'
import OurValue from '../../components/OurValue/OurValue'
import Hero from '../../components/HeroAboutUs/HeroAbouUs'; // Import the Hero component
import OurStory from '../../components/OurStory/OurStory';
import OurCulture  from '../../components/NavBar/OurCulture/OurCulture';
import { Helmet } from 'react-helmet-async';
import icon from "../../assets/icons/icon1.svg"


function AboutUs() {
  return (
    <>
     <Helmet>
    <title> About</title>

    {/* <link rel="stylesheet" href={icon}></link> */}
    <link rel="shortcut icon" href={icon} type="image/x-icon" />

    </Helmet>
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
