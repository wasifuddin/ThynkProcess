import PageHero from '../components/PageHero'
import BusinessSolutionsPortfolio from '../components/sections/BusinessSolutionsPortfolio'
import SolutionsByIndustryEnhanced from '../components/sections/SolutionsByIndustryEnhanced'
import SolutionsByRoleEnhanced from '../components/sections/SolutionsByRoleEnhanced'
import SolutionSelectionGuide from '../components/sections/SolutionSelectionGuide'
import WhySolutionsDeliverResults from '../components/sections/WhySolutionsDeliverResults'
import GetStartedWithSolutions from '../components/sections/GetStartedWithSolutions'
import SolutionContact from '../components/sections/SolutionContact'

const Solutions = () => {
  return (
    <div>
      <PageHero 
        title="Solutions – ThynkProcess"
        subtitle="Business-focused solutions designed to solve your operational challenges and drive growth"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Discover Your Solution"
        ctaLink="/contact"
      />
      <BusinessSolutionsPortfolio />
      <SolutionsByIndustryEnhanced />
      <SolutionsByRoleEnhanced />
      <SolutionSelectionGuide />
      <WhySolutionsDeliverResults />
      <GetStartedWithSolutions />
      <SolutionContact />
    </div>
  )
}

export default Solutions
