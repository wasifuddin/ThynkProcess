import { Link } from 'react-router-dom'

const PlatformExtensions = () => {
  const extensions = [
    {
      name: "B1 Usability Package (B1UP)",
      description: "User experience and workflow automation for SAP Business One",
      features: [
        "UI Customization: Drag-and-drop interface designer, role-based views",
        "Workflow Automation: No-code business logic, validation rules, approval processes",
        "Dashboard Builder: Custom KPI tiles, interactive reports, mobile dashboards",
        "User Productivity: Quick actions, shortcuts, context-sensitive help"
      ],
      icon: "🎨"
    },
    {
      name: "Acassia Bank Feeds",
      description: "Automated bank reconciliation for SAP Business One",
      features: [
        "80+ Banks: Direct connectivity to Australian and international banks",
        "Real-Time Feeds: Automatic transaction import and matching",
        "Reconciliation Engine: Intelligent matching with configurable rules",
        "Multi-Currency: Support for multiple currencies and exchange rates"
      ],
      icon: "🏦"
    },
    {
      name: "Perfion PIM",
      description: "Product information management system with SAP Business One integration",
      features: [
        "Centralized Data: Single source of truth for all product information",
        "Multi-Channel: Sync to e-commerce, catalogs, marketplaces, print",
        "Digital Assets: Image and document management with workflow approval",
        "Localization: Multi-language and regional content management"
      ],
      icon: "📋"
    }
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Platform Extensions & Add-Ons
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {extensions.map((extension, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{extension.icon}</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                {extension.name}
              </h3>
              <p className="text-[#64748B] mb-6">
                {extension.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {extension.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  to={`/products/${extension.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-center text-sm"
                >
                  View {extension.name.split(' ')[0]} Details
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-center text-sm"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformExtensions
