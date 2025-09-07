import { Link } from 'react-router-dom'

const CrossReferences = () => {
  return (
    <section className="py-20 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Explore Our Complete Solution
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Our services work seamlessly with our technology platforms and business solutions 
            to deliver comprehensive value to your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technology Platforms */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                Technology Platforms
              </h3>
              <p className="text-[#64748B]">
                Explore our comprehensive suite of technology platforms and capabilities
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                <span className="font-medium text-[#0E1A6A]">SAP Business One</span>
                <Link to="/products/sap-business-one" className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                <span className="font-medium text-[#0E1A6A]">Salesforce CRM</span>
                <Link to="/products/salesforce" className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                <span className="font-medium text-[#0E1A6A]">Business Intelligence</span>
                <Link to="/products/business-intelligence" className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                <span className="font-medium text-[#0E1A6A]">Integration Platforms</span>
                <Link to="/products/integration-automation" className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
            <Link
              to="/products"
              className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center block"
            >
              View All Products
            </Link>
          </div>

          {/* Business Solutions */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                Business Solutions
              </h3>
              <p className="text-[#64748B]">
                Discover business-focused solutions organized by function, industry, and role
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                <span className="font-medium text-[#0E1A6A]">ERP Solutions</span>
                <Link to="/solutions/erp-solutions" className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                <span className="font-medium text-[#0E1A6A]">CRM Solutions</span>
                <Link to="/solutions/crm-solutions" className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                <span className="font-medium text-[#0E1A6A]">Analytics Solutions</span>
                <Link to="/solutions/analytics-solutions" className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                <span className="font-medium text-[#0E1A6A]">By Industry</span>
                <Link to="/solutions#by-industry" className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
            <Link
              to="/solutions"
              className="w-full bg-[#12A8D4] hover:bg-[#0F79B9] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center block"
            >
              View All Solutions
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#0E1A6A] to-[#0C2F86] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[#AEE7F2] mb-6 max-w-2xl mx-auto">
              Our comprehensive approach combines the right technology platforms, 
              business solutions, and expert services to deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#12A8D4] hover:bg-[#0F79B9] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Us Today
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CrossReferences
