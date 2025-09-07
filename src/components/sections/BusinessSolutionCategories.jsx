import { Link } from 'react-router-dom'

const BusinessSolutionCategories = () => {
  const solutionCategories = [
    {
      name: "ERP Solutions",
      description: "Complete enterprise resource planning solutions for integrated business management.",
      solutions: [
        "Financial Management Solutions",
        "Manufacturing Solutions", 
        "Distribution Solutions",
        "Compliance Solutions"
      ],
      icon: "🏢",
      color: "from-[#0F79B9] to-[#0D4E9E]",
      link: "/solutions/erp-solutions"
    },
    {
      name: "CRM Solutions",
      description: "Customer relationship management solutions to drive sales and improve customer experience.",
      solutions: [
        "Sales Automation Solutions",
        "Customer Service Solutions",
        "Marketing Automation Solutions"
      ],
      icon: "👥",
      color: "from-[#12A8D4] to-[#0F79B9]",
      link: "/solutions/crm-solutions"
    },
    {
      name: "Analytics Solutions",
      description: "Advanced analytics and business intelligence solutions for data-driven decision making.",
      solutions: [
        "Executive Dashboards",
        "Operational Analytics",
        "Predictive Analytics"
      ],
      icon: "📊",
      color: "from-[#0D4E9E] to-[#0C2F86]",
      link: "/solutions/analytics-solutions"
    },
    {
      name: "Integration Solutions",
      description: "Seamless system integration and process automation for connected business operations.",
      solutions: [
        "System Integration",
        "Process Automation",
        "Data Synchronization"
      ],
      icon: "🔗",
      color: "from-[#78D2E9] to-[#12A8D4]",
      link: "/solutions/integration-solutions"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Business Solution Categories
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Our solutions are organized by business function to help you find the right 
            approach for your specific challenges and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutionCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold font-montserrat mb-2">{category.name}</h3>
                <p className="text-white opacity-90">{category.description}</p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-semibold text-[#0E1A6A] mb-4">Key Solutions:</h4>
                <div className="space-y-3 mb-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-[#12A8D4] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#334155]">{solution}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={category.link}
                  className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center block"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#D8F4FA] rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Looking for Industry-Specific Solutions?
            </h3>
            <p className="text-[#64748B] mb-6">
              We also provide tailored solutions organized by industry and role to address 
              specific challenges and compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#by-industry"
                className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View by Industry
              </Link>
              <Link
                to="#by-role"
                className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View by Role
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessSolutionCategories
