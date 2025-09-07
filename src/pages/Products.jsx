import PageHero from '../components/PageHero'
import ProductGrid from '../components/sections/ProductGrid'
import TechnicalSpecs from '../components/sections/TechnicalSpecs'
import PlatformComparison from '../components/sections/PlatformComparison'

const Products = () => {
  return (
    <div>
      <PageHero 
        title="Our Products"
        subtitle="Comprehensive technology platforms designed to meet your specific business needs and drive digital transformation."
        backgroundClass="bg-gradient-to-br from-[#AEE7F2] to-[#78D2E9]"
      />
      <ProductGrid />
      <TechnicalSpecs />
      <PlatformComparison />
    </div>
  )
}

export default Products
