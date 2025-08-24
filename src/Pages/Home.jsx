import React from 'react'
import Hero from '../components/Hero.jsx'
import FeaturedDestination from '../components/FeaturedDestination.jsx'
import ExclusiveOffers from '../components/ExclusiveOffers.jsx'
import Testimonials from '../components/Testimonial.jsx'
import Newsletter from '../components/NewsLetter.jsx'



const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonials/>
      <Newsletter/>
    </>
  )
}

export default Home
