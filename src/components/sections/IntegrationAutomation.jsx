import { Link } from 'react-router-dom'

const IntegrationAutomation = () => {
  const saltboxFeatures = [
    "Pre-Built Connectors: Shopify, Salesforce, banking, logistics, e-commerce",
    "Custom APIs: REST/SOAP connectivity with drag-and-drop mapping",
    "Workflow Automation: Event-driven processes, approval workflows, alerts",
    "Data Synchronization: Real-time or scheduled data exchange with error handling"
  ]

  const saltboxPlatform = [
    "No-Code Design: Visual workflow builder for business users",
    "Monitoring Dashboard: Real-time status, error tracking, performance metrics",
    "Scalable Architecture: Cloud-native platform with enterprise security",
    "Audit Trail: Complete logging and compliance documentation"
  ]

  const serviceLayerFeatures = [
    "RESTful Architecture: Modern HTTP-based APIs with JSON data format",
    "OAuth Security: Secure authentication and authorization protocols",
    "Real-Time Access: Live data connectivity with change notifications",
    "OData Support: Standardized query and manipulation protocols"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Integration & Automation
          </h2>
        </div>

        {/* Vision33 Saltbox */}
        <div className="bg-[#F8FAFC] rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🔗</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                Vision33 Saltbox
              </h3>
              <p className="text-[#64748B]">
                Low-code integration platform for SAP Business One
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Integration Capabilities:</h4>
              <div className="space-y-2">
                {saltboxFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Platform Features:</h4>
              <div className="space-y-2">
                {saltboxPlatform.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products/saltbox"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View Saltbox Details
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Service Layer APIs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#E2E8F0]">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">⚙️</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                Service Layer APIs
              </h3>
              <p className="text-[#64748B]">
                Modern REST-based integration framework for SAP Business One
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">API Capabilities:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceLayerFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#334155] text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products/service-layer"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View API Documentation
            </Link>
            <Link
              to="/products/developer-resources"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Developer Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationAutomation
