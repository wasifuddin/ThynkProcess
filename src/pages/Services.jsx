import PageHero from '../components/PageHero'
import ServiceCategories from '../components/sections/ServiceCategories'
import CrossReferences from '../components/sections/CrossReferences'

const Services = () => {
  return (
    <div>
      <PageHero 
        title="Services"
        subtitle="Expert implementation, support, and specialized services to ensure your success with our technology platforms."
        backgroundClass="bg-gradient-to-br from-[#12A8D4] to-[#0F79B9]"
      />
      <ServiceCategories />
      <CrossReferences />
    </div>
  )
}

export default Services
