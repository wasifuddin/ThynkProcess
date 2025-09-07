import { Link } from 'react-router-dom'

const CoreSolutions = () => {
  const solutions = [
    {
      title: "Platform A",
      description: "Advanced enterprise platform for large-scale operations with AI-powered analytics and automation.",
      features: ["AI Analytics", "Automation", "Scalability", "Security"],
      icon: "🚀"
    },
    {
      title: "Platform B", 
      description: "Flexible solution for mid-market companies with customizable workflows and integrations.",
      features: ["Custom Workflows", "Integrations", "Flexibility", "Support"],
      icon: "⚡"
    },
    {
      title: "Platform C",
      description: "Specialized platform for specific industries with compliance and regulatory features.",
      features: ["Compliance", "Industry-Specific", "Regulatory", "Expertise"],
      icon: "🎯"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Core Solutions
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Choose from our comprehensive suite of technology platforms designed to meet 
            your specific business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E2E8F0]">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                {solution.title}
              </h3>
              <p className="text-[#64748B] mb-6">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex}
                    className="bg-[#12A8D4] text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                to="/products"
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
          <Link
            to="/solutions"
            className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center"
          >
            View All Solutions
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
