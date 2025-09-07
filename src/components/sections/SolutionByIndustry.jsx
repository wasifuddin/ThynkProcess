import { Link } from 'react-router-dom'

const SolutionByIndustry = () => {
  const industries = [
    {
      name: "Manufacturing",
      description: "Streamline production, manage inventory, and optimize supply chain operations.",
      challenges: ["Production Planning", "Quality Control", "Supply Chain Management", "Compliance"],
      icon: "🏭",
      link: "/solutions/by-industry/manufacturing"
    },
    {
      name: "Healthcare",
      description: "Improve patient care, manage compliance, and optimize healthcare operations.",
      challenges: ["HIPAA Compliance", "Patient Management", "Billing & Revenue", "Clinical Workflows"],
      icon: "🏥",
      link: "/solutions/by-industry/healthcare"
    },
    {
      name: "Financial Services",
      description: "Enhance security, ensure compliance, and improve customer experience.",
      challenges: ["Regulatory Compliance", "Risk Management", "Customer Onboarding", "Fraud Detection"],
      icon: "🏦",
      link: "/solutions/by-industry/financial-services"
    },
    {
      name: "Retail & E-commerce",
      description: "Optimize inventory, enhance customer experience, and drive sales growth.",
      challenges: ["Inventory Management", "Omnichannel Experience", "Customer Analytics", "Supply Chain"],
      icon: "🛍️",
      link: "/solutions/by-industry/retail"
    },
    {
      name: "Professional Services",
      description: "Streamline project management, improve client relationships, and optimize billing.",
      challenges: ["Project Management", "Resource Planning", "Client Billing", "Time Tracking"],
      icon: "💼",
      link: "/solutions/by-industry/professional-services"
    },
    {
      name: "Distribution & Logistics",
      description: "Optimize warehouse operations, improve delivery, and enhance supply chain visibility.",
      challenges: ["Warehouse Management", "Route Optimization", "Inventory Tracking", "Supplier Management"],
      icon: "📦",
      link: "/solutions/by-industry/distribution"
    }
  ]

  return (
    <section id="by-industry" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Solutions by Industry
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Industry-specific solutions designed to address unique challenges, compliance 
            requirements, and operational needs across different sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                {industry.name}
              </h3>
              <p className="text-[#64748B] mb-4">
                {industry.description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#0E1A6A] mb-2">Key Challenges Addressed:</h4>
                <div className="flex flex-wrap gap-2">
                  {industry.challenges.map((challenge, challengeIndex) => (
                    <span 
                      key={challengeIndex}
                      className="bg-[#D8F4FA] text-[#0E1A6A] px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={industry.link}
                className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-semibold transition-colors"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-[#64748B] mb-6">
              Our solutions are highly customizable and can be adapted to meet the unique 
              requirements of any industry. Contact us to discuss your specific needs.
            </p>
            <Link
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Our Industry Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionByIndustry
