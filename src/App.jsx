import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import ShowcaseSection from './sections/ShowcaseSection'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {


  return (
   <>
   <Navbar/>
   <Hero/>
   <ShowcaseSection/>
   <LogoSection/>
   <FeatureCards/>
   <TechStack/>   
   <Testimonials/>
   <Contact/>
   <Footer/>
  
   </>
   
  )
}

export default App
