import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const SolutionsByIndustry = () => {
  const industrySolutions = [
    {
      title: "Food & Beverage Solutions",
      description: "Complete traceability, HACCP compliance, and quality management for food safety excellence",
      icon: "🥫",
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
      title: "Manufacturing Solutions",
      description: "Integrated production planning, execution, and control for operational excellence",
      icon: "🏭",
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
      title: "Wholesale Distribution Solutions",
      description: "Optimize inventory, fulfillment, and customer service for distribution excellence",
      icon: "📦",
      features: [
        "Multi-warehouse inventory management",
        "Automated order processing and fulfillment",
        "EDI integration with major retailers",
        "Customer portal and self-service",
        "Logistics and shipping optimization"
      ],
      link: "/solutions/wholesale-distribution"
    },
    {
      title: "Healthcare & Pharmaceutical Solutions",
      description: "Ensure compliance, quality, and traceability for healthcare product management",
      icon: "💊",
      features: [
        "TGA compliance and validation",
        "Serialization and traceability",
        "Quality management and control",
        "Regulatory reporting and documentation",
        "Cold chain and controlled substance tracking"
      ],
      link: "/solutions/healthcare-pharma"
    },
    {
      title: "Professional Services Solutions",
      description: "Optimize project management, billing, and client relationships for service excellence",
      icon: "🏢",
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
    <div>
      <PageHero 
        title="Solutions by Industry"
        subtitle="Tailored solutions designed for your specific industry requirements and compliance needs"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Explore Industry Solutions"
        ctaLink="/contact"
      />

      {/* Industry Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🎯 Solutions by Industry
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Industry-specific solutions designed to address your unique challenges, compliance requirements, and operational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3 group-hover:text-[#0F79B9] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-[#334155] mb-4 text-sm">
                  {solution.description}
                </p>
                <ul className="text-[#334155] space-y-2 text-sm mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={solution.link}
                  className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Explore {solution.title.split(' ')[0]} Solutions
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Solutions */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Industry-Specific Solutions Matter
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Every industry has unique challenges, compliance requirements, and operational needs that require specialized solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Compliance Ready
                </h3>
                <p className="text-[#334155] text-sm">
                  Pre-configured for industry-specific regulations and standards
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Faster Implementation
                </h3>
                <p className="text-[#334155] text-sm">
                  Industry templates and best practices accelerate deployment
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Relevant Features
                </h3>
                <p className="text-[#334155] text-sm">
                  Focus on functionality that matters to your industry
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Expert Support
                </h3>
                <p className="text-[#334155] text-sm">
                  Consultants with deep industry knowledge and experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Selection Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🚀 Solution Selection Guide
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#F8FAFC] rounded-xl p-8">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Assessment Framework
              </h3>
              <p className="text-[#334155] mb-6">
                Our proven methodology helps you select the right solution for your business:
              </p>
              <ul className="text-[#334155] space-y-3">
                <li className="flex items-start">
                  <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                  <span><strong>Business Assessment</strong> - Understand current challenges and future goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                  <span><strong>Process Analysis</strong> - Map existing workflows and identify improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                  <span><strong>Technology Evaluation</strong> - Assess current systems and integration needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                  <span><strong>Solution Design</strong> - Create customized solution architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                  <span><strong>Implementation Planning</strong> - Develop phased rollout strategy</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-8">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Solution Packages
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Starter Solutions</h4>
                  <p className="text-[#334155] text-sm mb-2">Essential functionality for growing businesses</p>
                  <ul className="text-[#334155] text-sm space-y-1">
                    <li>• Core ERP or CRM platform</li>
                    <li>• Basic integrations and reporting</li>
                    <li>• Standard implementation and training</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Professional Solutions</h4>
                  <p className="text-[#334155] text-sm mb-2">Advanced capabilities for established businesses</p>
                  <ul className="text-[#334155] text-sm space-y-1">
                    <li>• Extended platform functionality</li>
                    <li>• Advanced analytics and automation</li>
                    <li>• Custom integrations and workflows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Enterprise Solutions</h4>
                  <p className="text-[#334155] text-sm mb-2">Comprehensive solutions for complex organizations</p>
                  <ul className="text-[#334155] text-sm space-y-1">
                    <li>• Full platform suite with all modules</li>
                    <li>• Advanced analytics and AI capabilities</li>
                    <li>• Custom development and extensive integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Find Your Industry Solution
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how our industry-specific solutions can address your unique challenges and drive operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Industry Consultation
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Solution Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionsByIndustry
