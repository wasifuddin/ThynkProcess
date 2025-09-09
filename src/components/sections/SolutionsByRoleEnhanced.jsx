import { Link } from 'react-router-dom'

const SolutionsByRoleEnhanced = () => {
  const roles = [
    {
      title: "For CEOs & Managing Directors",
      description: "Strategic visibility and control for executive decision-making.",
      features: [
        "Company-wide performance dashboards",
        "Financial and operational KPIs",
        "Strategic planning and forecasting",
        "Board reporting and communication",
        "Growth tracking and analysis"
      ],
      link: "/solutions/ceo"
    },
    {
      title: "For CFOs & Finance Teams",
      description: "Financial control, compliance, and reporting for fiscal excellence.",
      features: [
        "Automated financial management",
        "Compliance and regulatory reporting",
        "Cash flow management and forecasting",
        "Cost control and profitability analysis",
        "Audit preparation and support"
      ],
      link: "/solutions/cfo"
    },
    {
      title: "For Sales Managers",
      description: "Sales acceleration and customer management for revenue growth.",
      features: [
        "Pipeline management and forecasting",
        "Customer relationship optimization",
        "Sales performance analytics",
        "Territory and commission management",
        "Mobile sales enablement"
      ],
      link: "/solutions/sales-manager"
    },
    {
      title: "For Operations Managers",
      description: "Operational efficiency and control for performance optimization.",
      features: [
        "Production planning and scheduling",
        "Inventory management and optimization",
        "Quality control and compliance",
        "Performance monitoring and analytics",
        "Process improvement and automation"
      ],
      link: "/solutions/operations-manager"
    },
    {
      title: "For IT Leaders",
      description: "Technology management and integration for system excellence.",
      features: [
        "System integration and automation",
        "Security and compliance management",
        "Performance monitoring and optimization",
        "User management and support",
        "Technology roadmap planning"
      ],
      link: "/solutions/it-leader"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            👥 Solutions by Role
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Role-specific solutions designed to empower your team with the tools and insights they need to excel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                {role.title}
              </h3>
              <p className="text-[#334155] mb-4 text-sm">
                {role.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {role.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-[#334155]">
                    <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to={role.link}
                className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Explore {role.title.split(' ')[1]} Solutions
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/solutions/roles"
            className="inline-flex items-center bg-[#12A8D4] hover:bg-[#0F79B9] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Role-Based Solutions
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SolutionsByRoleEnhanced
