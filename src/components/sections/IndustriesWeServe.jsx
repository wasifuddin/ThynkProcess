import { Link } from 'react-router-dom'

const IndustriesWeServe = () => {
  const coreIndustries = [
    { name: "Food & Beverage", icon: "🍽️" },
    { name: "Wholesale Distribution", icon: "📦" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Logistics & Warehousing", icon: "🚚" },
    { name: "Agriculture & Agribusiness", icon: "🌾" },
    { name: "Pharmaceutical", icon: "💊" },
    { name: "Retail & eCommerce", icon: "🛍️" }
  ]

  const specializedSectors = [
    { name: "Not for Profit", icon: "🤝" },
    { name: "Plastics & Chemicals", icon: "🧪" },
    { name: "Packaging", icon: "📦" },
    { name: "Automotive & Transport", icon: "🚗" },
    { name: "Environmental & Sustainable Energy", icon: "🌱" },
    { name: "Professional Services", icon: "💼" }
  ]

  return (
    <section className="py-20 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Core Industries */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Core Industries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreIndustries.map((industry, index) => (
                <div key={index} className="flex items-center p-3 bg-[#F8FAFC] rounded-lg hover:bg-[#D8F4FA] transition-colors">
                  <span className="text-2xl mr-3">{industry.icon}</span>
                  <span className="font-medium text-[#0E1A6A]">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Sectors */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Specialized Sectors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specializedSectors.map((sector, index) => (
                <div key={index} className="flex items-center p-3 bg-[#F8FAFC] rounded-lg hover:bg-[#D8F4FA] transition-colors">
                  <span className="text-2xl mr-3">{sector.icon}</span>
                  <span className="font-medium text-[#0E1A6A]">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/industries"
            className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center"
          >
            Explore Industry Solutions
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default IndustriesWeServe
