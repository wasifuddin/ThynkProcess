import PageHero from '../components/PageHero'
import BusinessSolutionCategories from '../components/sections/BusinessSolutionCategories'
import SolutionByIndustry from '../components/sections/SolutionByIndustry'
import SolutionByRole from '../components/sections/SolutionByRole'

const Solutions = () => {
  return (
    <div>
      <PageHero 
        title="Business Solutions & Outcomes"
        subtitle="Comprehensive business solutions designed to drive measurable results and transform your operations."
        backgroundClass="bg-gradient-to-br from-[#78D2E9] to-[#12A8D4]"
      />
      <BusinessSolutionCategories />
      <SolutionByIndustry />
      <SolutionByRole />
    </div>
  )
}

export default Solutions
