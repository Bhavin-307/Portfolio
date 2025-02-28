import FeatureFour from '@/components/FeatureFour'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import Projects from '../components/Projects'
import HireMe from '@/components/HireMe'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureFour />
      <Projects />
      <HireMe />
      <Footer />
    </div>
  )
}

export default Home