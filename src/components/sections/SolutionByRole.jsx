import { Link } from 'react-router-dom'

const SolutionByRole = () => {
  const roles = [
    {
      name: "CEO & Executives",
      description: "Strategic insights and executive dashboards for data-driven decision making.",
      benefits: ["Executive Dashboards", "Strategic Analytics", "Performance Metrics", "ROI Tracking"],
      icon: "👔",
      link: "/solutions/by-role/executives"
    },
    {
      name: "CFO & Finance",
      description: "Comprehensive financial management and reporting solutions.",
      benefits: ["Financial Reporting", "Budget Management", "Cost Control", "Compliance"],
      icon: "💰",
      link: "/solutions/by-role/finance"
    },
    {
      name: "Sales Teams",
      description: "Sales automation and CRM solutions to drive revenue growth.",
      benefits: ["Lead Management", "Sales Automation", "Pipeline Tracking", "Customer Insights"],
      icon: "📈",
      link: "/solutions/by-role/sales"
    },
    {
      name: "Operations Managers",
      description: "Operational efficiency and process optimization solutions.",
      benefits: ["Process Automation", "Resource Planning", "Quality Control", "Performance Monitoring"],
      icon: "⚙️",
      link: "/solutions/by-role/operations"
    },
    {
      name: "IT Directors",
      description: "System integration and technology infrastructure solutions.",
      benefits: ["System Integration", "Data Management", "Security", "Scalability"],
      icon: "💻",
      link: "/solutions/by-role/it"
    },
    {
      name: "HR Managers",
      description: "Human resources management and employee engagement solutions.",
      benefits: ["Employee Management", "Performance Tracking", "Compliance", "Analytics"],
      icon: "👥",
      link: "/solutions/by-role/hr"
    }
  ]

  return (
    <section id="by-role" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Solutions by Role
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Role-specific solutions designed to empower different teams and functions 
            with the tools and insights they need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                {role.name}
              </h3>
              <p className="text-[#64748B] mb-4">
                {role.description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#0E1A6A] mb-3">Key Benefits:</h4>
                <div className="space-y-2">
                  {role.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-[#12A8D4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#334155] text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to={role.link}
                className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-semibold transition-colors"
              >
                Explore Solutions
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0E1A6A] to-[#0C2F86] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-[#AEE7F2] mb-6 max-w-2xl mx-auto">
              Our solutions are designed to deliver measurable results across all business functions. 
              Let us help you choose the right approach for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#12A8D4] hover:bg-[#0F79B9] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View Technology Platforms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionByRole
