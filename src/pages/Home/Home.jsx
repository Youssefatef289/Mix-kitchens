import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Videos from '../../components/Videos/Videos'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Videos />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}

export default Home

