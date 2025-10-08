import React from 'react'
import HeroSection from './Components/Hero'
import CoreServices from './Components/CoreServices'
import WhyChooseUs from './Components/WhyChooseUs'
import FeaturedInsights from './Components/FeaturedInsights'
import Testimonials from './Components/Testimonials'
import FinalCTA from './Components/FinalCTA'

function Home() {
  return (
    <div>
  
      <HeroSection/>
      <CoreServices/>
      <WhyChooseUs/>
      <FeaturedInsights/>
      <Testimonials/>
      <FinalCTA/>
    </div>
  )
}

export default Home