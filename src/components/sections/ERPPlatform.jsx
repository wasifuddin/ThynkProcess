import { Link } from 'react-router-dom'

const ERPPlatform = () => {
  const coreCapabilities = [
    "Financial Management: Multi-company GL, automated compliance (GST, BAS, FBT), cash flow forecasting",
    "Sales & CRM: Lead-to-cash automation, mobile CRM, pipeline management, customer 360° view",
    "Purchasing & Inventory: Multi-warehouse control, batch/serial tracking, automated replenishment",
    "Manufacturing: Advanced MRP, BOM management, shop floor control, quality management",
    "Business Intelligence: Real-time dashboards, predictive analytics, embedded reporting"
  ]

  const technicalSpecs = [
    "Database: SAP HANA in-memory platform for real-time processing",
    "Access Methods: Web client, mobile apps (iOS/Android), desktop client",
    "Scalability: 5 to 500+ concurrent users",
    "Integration: REST API, Service Layer, native connectors",
    "Compliance: Australian ATO, GST, BAS, Single Touch Payroll Phase 2"
  ]

  const industryConfigs = [
    "Food & Beverage with HACCP compliance",
    "Manufacturing with advanced MRP",
    "Distribution with multi-warehouse management",
    "Pharmaceutical with TGA compliance",
    "Retail with POS integration"
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">🏢</div>
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A]">
                Enterprise Resource Planning (ERP)
              </h2>
              <h3 className="text-2xl font-semibold text-[#0F79B9] mt-2">
                SAP Business One
              </h3>
              <p className="text-[#64748B] mt-2">
                Complete ERP platform built on SAP HANA for intelligent business management
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-[#0E1A6A] mb-4">Core Platform Capabilities:</h4>
              <div className="space-y-3">
                {coreCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#12A8D4] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155]">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#0E1A6A] mb-4">Technical Specifications:</h4>
              <div className="space-y-3">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#12A8D4] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-[#0E1A6A] mb-4">Industry Configurations:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industryConfigs.map((config, index) => (
                <div key={index} className="bg-[#D8F4FA] rounded-lg p-3">
                  <span className="text-[#0E1A6A] font-medium">{config}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/sap-business-one"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
            >
              View SAP Business One Details
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
            >
              Request Demo
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#12A8D4] text-[#12A8D4] hover:bg-[#12A8D4] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
            >
              Download Datasheet
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ERPPlatform
