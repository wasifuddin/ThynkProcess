import { Link } from 'react-router-dom'

const CoreSolutions = () => {
  const solutions = [
    {
      title: "SAP Business One",
      description: "ERP for growing businesses",
      features: ["Financial Management", "Inventory Control", "Sales & CRM", "Manufacturing"],
      icon: "🏢",
      color: "from-[#0F79B9] to-[#0D4E9E]"
    },
    {
      title: "Salesforce", 
      description: "CRM & Marketing Automation",
      features: ["Sales Automation", "Customer Service", "Marketing Cloud", "Analytics"],
      icon: "⚡",
      color: "from-[#12A8D4] to-[#0F79B9]"
    },
    {
      title: "Business Intelligence",
      description: "Power BI, Tableau, Crystal",
      features: ["Data Visualization", "Executive Dashboards", "Predictive Analytics", "Self-Service BI"],
      icon: "📊",
      color: "from-[#0D4E9E] to-[#0C2F86]"
    },
    {
      title: "Custom Integrations",
      description: "API, Middleware, File-based",
      features: ["System Integration", "Data Synchronization", "Process Automation", "Real-time Connectivity"],
      icon: "🔗",
      color: "from-[#78D2E9] to-[#12A8D4]"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Our Core Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${solution.color} p-6 text-white`}>
                <div className="text-3xl mb-3">{solution.icon}</div>
                <h3 className="text-xl font-bold font-montserrat mb-1">{solution.title}</h3>
                <p className="text-white opacity-90 text-sm">{solution.description}</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-[#12A8D4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#334155] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/solutions"
                  className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-center block text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/solutions"
            className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center"
          >
            Learn More About Our Solutions
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoreSolutions
