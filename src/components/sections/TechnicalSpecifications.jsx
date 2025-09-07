const TechnicalSpecifications = () => {
  const integrationStandards = [
    "APIs: REST, SOAP, OData, GraphQL support",
    "Data Formats: JSON, XML, CSV, EDI standards",
    "Protocols: HTTPS, SFTP, AS2, web services",
    "Authentication: OAuth 2.0, SAML, Active Directory integration"
  ]

  const mobileApps = [
    "SAP Business One Mobile: Native iOS/Android apps for sales and service",
    "Salesforce Mobile: Full CRM functionality with offline capability",
    "Power BI Mobile: Interactive dashboards optimized for tablets and phones",
    "Warehouse Mobile: Barcode scanning and inventory management on mobile devices"
  ]

  const cloudOptions = [
    "On-Premise: Traditional server deployment with full control",
    "Private Cloud: Dedicated cloud hosting with enhanced security",
    "Hybrid Cloud: Combination of on-premise and cloud components",
    "SaaS: Fully managed cloud solutions with automatic updates"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Platform Architecture & Technical Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Integration Standards */}
          <div className="bg-[#F8FAFC] rounded-xl p-6">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Integration Standards
            </h3>
            <div className="space-y-3">
              {integrationStandards.map((standard, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#334155] text-sm">{standard}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Applications */}
          <div className="bg-[#F8FAFC] rounded-xl p-6">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Mobile Applications
            </h3>
            <div className="space-y-3">
              {mobileApps.map((app, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#334155] text-sm">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Deployment Options */}
          <div className="bg-[#F8FAFC] rounded-xl p-6">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Cloud Deployment Options
            </h3>
            <div className="space-y-3">
              {cloudOptions.map((option, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#334155] text-sm">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSpecifications
