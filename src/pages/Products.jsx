import PageHero from '../components/PageHero'
import EnterpriseTechnologyStack from '../components/sections/EnterpriseTechnologyStack'
import ERPPlatform from '../components/sections/ERPPlatform'
import CRMPlatform from '../components/sections/CRMPlatform'
import BusinessIntelligence from '../components/sections/BusinessIntelligence'
import ManufacturingProduction from '../components/sections/ManufacturingProduction'
import WarehouseLogistics from '../components/sections/WarehouseLogistics'
import IntegrationAutomation from '../components/sections/IntegrationAutomation'
import PlatformExtensions from '../components/sections/PlatformExtensions'
import TechnicalSpecifications from '../components/sections/TechnicalSpecifications'
import ProductSelectionGuide from '../components/sections/ProductSelectionGuide'
import GettingStarted from '../components/sections/GettingStarted'

const Products = () => {
  return (
    <div>
      <PageHero 
        title="Products"
        subtitle="World-class technology platforms designed for growing Australian businesses"
        backgroundClass="bg-gradient-to-br from-[#AEE7F2] to-[#78D2E9]"
        ctaText="Explore Product Demonstrations"
        ctaLink="/contact"
      />
      <EnterpriseTechnologyStack />
      <ERPPlatform />
      <CRMPlatform />
      <BusinessIntelligence />
      <ManufacturingProduction />
      <WarehouseLogistics />
      <IntegrationAutomation />
      <PlatformExtensions />
      <TechnicalSpecifications />
      <ProductSelectionGuide />
      <GettingStarted />
    </div>
  )
}

export default Products
