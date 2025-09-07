import Hero from '../components/sections/Hero'
import CoreSolutions from '../components/sections/CoreSolutions'
import IndustriesServed from '../components/sections/IndustriesServed'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <div>
      <Hero />
      <CoreSolutions />
      <IndustriesServed />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home
