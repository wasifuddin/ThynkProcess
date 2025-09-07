import { Link } from 'react-router-dom'

const TechnologyPlatforms = () => {
  const mainProducts = [
    {
      name: "SAP Business One",
      description: "Complete ERP solution for small and midsize businesses with integrated financials, sales, and operations management.",
      features: ["Financial Management", "Sales & CRM", "Inventory Management", "Reporting & Analytics"],
      icon: "🏢",
      color: "from-[#0F79B9] to-[#0D4E9E]",
      link: "/products/sap-business-one"
    },
    {
      name: "Salesforce CRM",
      description: "Leading customer relationship management platform with sales, service, and marketing automation capabilities.",
      features: ["Sales Automation", "Customer Service", "Marketing Cloud", "Analytics"],
      icon: "⚡",
      color: "from-[#12A8D4] to-[#0F79B9]",
      link: "/products/salesforce"
    },
    {
      name: "Business Intelligence",
      description: "Advanced analytics and reporting solutions including Power BI, Tableau, and SAP Analytics Cloud.",
      features: ["Data Visualization", "Predictive Analytics", "Executive Dashboards", "Self-Service BI"],
      icon: "📊",
      color: "from-[#0D4E9E] to-[#0C2F86]",
      link: "/products/business-intelligence"
    },
    {
      name: "Add-Ons & Extensions",
      description: "Specialized add-ons and extensions including BEA Manufacturing, Produmex WMS, and custom integrations.",
      features: ["Manufacturing Extensions", "Warehouse Management", "Custom Development", "Third-party Integrations"],
      icon: "🔧",
      color: "from-[#78D2E9] to-[#12A8D4]",
      link: "/products/add-ons"
    },
    {
      name: "Integration Platforms",
      description: "Seamless system integration and process automation solutions for connecting disparate business systems.",
      features: ["API Integration", "Data Synchronization", "Process Automation", "Real-time Connectivity"],
      icon: "🔗",
      color: "from-[#AEE7F2] to-[#78D2E9]",
      link: "/products/integration-automation"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Main Technology Platforms
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Our comprehensive suite of technology platforms provides everything you need 
            to run and grow your business efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${product.color} p-8 text-white`}>
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold font-montserrat mb-2">{product.name}</h3>
              </div>
              <div className="p-8">
                <p className="text-[#64748B] mb-6">{product.description}</p>
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-[#12A8D4] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#334155]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={product.link}
                  className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyPlatforms
