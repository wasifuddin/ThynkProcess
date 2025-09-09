import PageHero from '../components/PageHero'
import AustralianStandardsSupport from '../components/sections/AustralianStandardsSupport'
import CoreIndustries from '../components/sections/CoreIndustries'
import AdditionalIndustries from '../components/sections/AdditionalIndustries'
import WhyStandardsSupportDeliversValue from '../components/sections/WhyStandardsSupportDeliversValue'
import ComplianceDisclaimer from '../components/sections/ComplianceDisclaimer'
import GetStartedWithIndustrySolutions from '../components/sections/GetStartedWithIndustrySolutions'
import IndustryContact from '../components/sections/IndustryContact'

const Industries = () => {
  return (
    <div>
      <PageHero 
        title="Industries We Serve – ThynkProcess"
        subtitle="Tailored digital transformation solutions for Australia's most critical industries with comprehensive Australian standards support"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Explore Role-Based Solutions"
        ctaLink="/solutions"
      />
      <AustralianStandardsSupport />
      <CoreIndustries />
      <AdditionalIndustries />
      <WhyStandardsSupportDeliversValue />
      <ComplianceDisclaimer />
      <GetStartedWithIndustrySolutions />
      <IndustryContact />
    </div>
  )
}

export default Industries
