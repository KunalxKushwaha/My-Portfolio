import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import ShowcaseSection from './sections/ShowcaseSection'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <ShowcaseSection/>
   <LogoSection/>
   <FeatureCards/>
   </>
  )
}

export default App
