import { Link } from 'react-router-dom'

const CRMPlatform = () => {
  const platformEditions = [
    {
      name: "Sales Cloud",
      description: "Pipeline management, CPQ, Einstein AI forecasting, territory management"
    },
    {
      name: "Service Cloud", 
      description: "Case management, omni-channel support, field service, knowledge base"
    },
    {
      name: "Marketing Cloud",
      description: "Journey automation, email marketing, lead nurturing, campaign ROI"
    },
    {
      name: "Commerce Cloud",
      description: "E-commerce platform with personalization and mobile optimization"
    }
  ]

  const advancedCapabilities = [
    "Einstein AI: Predictive lead scoring, next-best-action recommendations, automated insights",
    "Flow Automation: No-code workflow builder for complex business processes",
    "Slack Integration: CRM data within collaboration workflows",
    "AppExchange: 3,000+ pre-built business applications and integrations"
  ]

  const technicalFeatures = [
    "Architecture: Cloud-native, multi-tenant platform",
    "APIs: REST, SOAP, Bulk APIs for custom integrations",
    "Mobile: Native iOS/Android apps with offline capability",
    "Security: Enterprise-grade with role-based permissions",
    "Compliance: GDPR, SOX, privacy controls"
  ]

  const integrationCapabilities = [
    "Native SAP Business One integration",
    "E-commerce platform connectivity",
    "Marketing automation tools",
    "Financial systems synchronization"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#E2E8F0]">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">🤝</div>
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A]">
                Customer Relationship Management (CRM)
              </h2>
              <h3 className="text-2xl font-semibold text-[#0F79B9] mt-2">
                Salesforce CRM
              </h3>
              <p className="text-[#64748B] mt-2">
                World's #1 CRM platform with AI-powered customer engagement
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-[#0E1A6A] mb-4">Platform Editions:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platformEditions.map((edition, index) => (
                <div key={index} className="bg-[#F8FAFC] rounded-lg p-4">
                  <h5 className="font-bold text-[#0E1A6A] mb-2">{edition.name}</h5>
                  <p className="text-[#64748B] text-sm">{edition.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-[#0E1A6A] mb-4">Advanced Capabilities:</h4>
              <div className="space-y-3">
                {advancedCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#12A8D4] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#0E1A6A] mb-4">Technical Features:</h4>
              <div className="space-y-3">
                {technicalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#12A8D4] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-[#0E1A6A] mb-4">Integration Capabilities:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integrationCapabilities.map((integration, index) => (
                <div key={index} className="bg-[#D8F4FA] rounded-lg p-3">
                  <span className="text-[#0E1A6A] font-medium">{integration}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/salesforce"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
            >
              View Salesforce Details
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
              Download Comparison Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CRMPlatform
