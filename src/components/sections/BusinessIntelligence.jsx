import { Link } from 'react-router-dom'

const BusinessIntelligence = () => {
  const powerBIFeatures = [
    "Data Connectivity: 500+ connectors including SAP HANA, Salesforce, Excel, SQL databases",
    "Visualization: Interactive dashboards, custom visuals, mobile-optimized reports",
    "AI Integration: Microsoft Copilot, natural language queries, automated insights",
    "Collaboration: Teams integration, shared workspaces, automated distribution"
  ]

  const powerBIAdvanced = [
    "Predictive Models: Forecasting, clustering, trend analysis",
    "Real-Time Dashboards: Live data streaming and alerts",
    "Embedded Analytics: White-label dashboards in custom applications",
    "Self-Service: Drag-and-drop report creation for business users"
  ]

  const tableauCapabilities = [
    "Visual Analytics: Drag-and-drop interface with advanced chart types",
    "Data Preparation: Built-in data cleaning and transformation tools",
    "Advanced Analytics: Statistical functions, R/Python integration, forecasting",
    "Enterprise Deployment: Tableau Server/Cloud with governance controls"
  ]

  const tableauAI = [
    "Ask Data: Natural language queries for instant insights",
    "Explain Data: Automated statistical explanations of trends",
    "Einstein Discovery: Predictive analytics and recommendations",
    "Smart Recommendations: Automated chart suggestions and insights"
  ]

  const sapAnalyticsCapabilities = [
    "Business Intelligence: Interactive dashboards with SAP data connectivity",
    "Enterprise Planning: Financial planning, sales planning, workforce planning",
    "Predictive Analytics: Machine learning models, smart insights, forecasting",
    "Collaboration: Comments, tasks, story sharing across teams"
  ]

  const sapIntegration = [
    "Native connectivity to SAP Business One, S/4HANA, SAP HANA",
    "Live data models without data duplication",
    "Embedded analytics within SAP applications",
    "Unified semantic layer across SAP landscape"
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Business Intelligence & Analytics
          </h2>
        </div>

        {/* Power BI */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">📊</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                Power BI
              </h3>
              <p className="text-[#64748B]">
                Microsoft's enterprise analytics platform with self-service capabilities
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Core Features:</h4>
              <div className="space-y-2">
                {powerBIFeatures.map((feature, index) => (
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
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Advanced Analytics:</h4>
              <div className="space-y-2">
                {powerBIAdvanced.map((feature, index) => (
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
              to="/products/power-bi"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View Power BI Details
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Tableau */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">📈</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                Tableau
              </h3>
              <p className="text-[#64748B]">
                Leading data visualization platform for advanced analytics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Platform Capabilities:</h4>
              <div className="space-y-2">
                {tableauCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">AI & Machine Learning:</h4>
              <div className="space-y-2">
                {tableauAI.map((feature, index) => (
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
              to="/products/tableau"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View Tableau Details
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* SAP Analytics Cloud */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">☁️</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                SAP Analytics Cloud
              </h3>
              <p className="text-[#64748B]">
                Unified planning, BI, and predictive analytics for SAP environments
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Integrated Capabilities:</h4>
              <div className="space-y-2">
                {sapAnalyticsCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">SAP Integration:</h4>
              <div className="space-y-2">
                {sapIntegration.map((integration, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products/sap-analytics-cloud"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View SAP Analytics Details
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessIntelligence
