import PageHero from '../components/PageHero'
import ResourceCentre from '../components/sections/ResourceCentre'
import ResourceLibrary from '../components/sections/ResourceLibrary'
import AIAutomationResourcePack from '../components/sections/AIAutomationResourcePack'
import WebinarsWorkshops from '../components/sections/WebinarsWorkshops'
import CustomerSuccessStories from '../components/sections/CustomerSuccessStories'
import ToolsCalculators from '../components/sections/ToolsCalculators'
import ResourceContact from '../components/sections/ResourceContact'

const Resources = () => {
  return (
    <div>
      <PageHero 
        title="Resources – ThynkProcess"
        subtitle="Explore guides, webinars, customer stories, and tools to support your digital transformation journey"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Download Latest Capability Statement"
        ctaLink="/resources/download/capability-statement"
      />
      <ResourceCentre />
      <ResourceLibrary />
      <AIAutomationResourcePack />
      <WebinarsWorkshops />
      <CustomerSuccessStories />
      <ToolsCalculators />
      <ResourceContact />
    </div>
  )
}

export default Resources
