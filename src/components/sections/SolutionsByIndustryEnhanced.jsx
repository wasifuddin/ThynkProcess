import { Link } from 'react-router-dom'

const SolutionsByIndustryEnhanced = () => {
  const industries = [
    {
      name: "Food & Beverage Solutions",
      description: "Complete traceability, HACCP compliance, and quality management for food safety excellence.",
      features: [
        "Batch tracking and recall procedures",
        "HACCP workflow automation",
        "Quality control and testing integration",
        "Export documentation and compliance",
        "Cold chain monitoring and validation"
      ],
      link: "/solutions/food-beverage"
    },
    {
      name: "Manufacturing Solutions",
      description: "Integrated production planning, execution, and control for operational excellence.",
      features: [
        "Advanced MRP and capacity planning",
        "Shop floor execution and control",
        "Quality management and compliance",
        "Cost accounting and profitability analysis",
        "Supply chain optimization"
      ],
      link: "/solutions/manufacturing"
    },
    {
      name: "Wholesale Distribution Solutions",
      description: "Optimize inventory, fulfillment, and customer service for distribution excellence.",
      features: [
        "Multi-warehouse inventory management",
        "Automated order processing and fulfillment",
        "EDI integration with major retailers",
        "Customer portal and self-service",
        "Logistics and shipping optimization"
      ],
      link: "/solutions/distribution"
    },
    {
      name: "Healthcare & Pharmaceutical Solutions",
      description: "Ensure compliance, quality, and traceability for healthcare product management.",
      features: [
        "TGA compliance and validation",
        "Serialization and traceability",
        "Quality management and control",
        "Regulatory reporting and documentation",
        "Cold chain and controlled substance tracking"
      ],
      link: "/solutions/healthcare"
    },
    {
      name: "Professional Services Solutions",
      description: "Optimize project management, billing, and client relationships for service excellence.",
      features: [
        "Project planning and resource management",
        "Time tracking and billing automation",
        "Client relationship management",
        "Performance analytics and profitability",
        "Service delivery optimization"
      ],
      link: "/solutions/professional-services"
    }
  ]

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🎯 Solutions by Industry
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Industry-specific solutions tailored to your sector's unique challenges and compliance requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                {industry.name}
              </h3>
              <p className="text-[#334155] mb-4 text-sm">
                {industry.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-[#334155]">
                    <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to={industry.link}
                className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Explore {industry.name.split(' ')[0]} Solutions
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/solutions/industries"
            className="inline-flex items-center bg-[#12A8D4] hover:bg-[#0F79B9] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Industry Solutions
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SolutionsByIndustryEnhanced
