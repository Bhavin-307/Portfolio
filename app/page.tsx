import FeatureFour from '@/components/FeatureFour'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import Projects from '../components/Projects'
import HireMe from '@/components/HireMe'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureFour />
      <Projects />
      <HireMe />
    </div>
  )
}

export default Home