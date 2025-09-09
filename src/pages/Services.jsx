import PageHero from '../components/PageHero'
import ComprehensiveServicePortfolio from '../components/sections/ComprehensiveServicePortfolio'
import IntegrationAutomationServices from '../components/sections/IntegrationAutomationServices'
import AnalyticsIntelligenceServices from '../components/sections/AnalyticsIntelligenceServices'
import SupportManagedServices from '../components/sections/SupportManagedServices'
import StrategicAdvisoryServices from '../components/sections/StrategicAdvisoryServices'
import SpecializedServices from '../components/sections/SpecializedServices'
import ServiceSelectionGuide from '../components/sections/ServiceSelectionGuide'
import WhyServicesDeliverSuccess from '../components/sections/WhyServicesDeliverSuccess'
import GetStartedWithServices from '../components/sections/GetStartedWithServices'
import ServiceContact from '../components/sections/ServiceContact'

const Services = () => {
  return (
    <div>
      <PageHero 
        title="Services – ThynkProcess"
        subtitle="Expert implementation, optimization, and support services for your digital transformation journey"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Connect with Service Experts"
        ctaLink="/contact"
      />
      <ComprehensiveServicePortfolio />
      <IntegrationAutomationServices />
      <AnalyticsIntelligenceServices />
      <SupportManagedServices />
      <StrategicAdvisoryServices />
      <SpecializedServices />
      <ServiceSelectionGuide />
      <WhyServicesDeliverSuccess />
      <GetStartedWithServices />
      <ServiceContact />
    </div>
  )
}

export default Services
