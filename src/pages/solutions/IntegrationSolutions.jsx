import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const IntegrationSolutions = () => {
  const integrationSolutions = [
    {
      title: "System Integration",
      description: "Unify your technology ecosystem with seamless connectivity",
      icon: "🔗",
      outcomes: [
        "70% reduction in manual data entry",
        "Real-time data synchronization across systems",
        "Improved data accuracy and consistency",
        "Simplified IT management"
      ],
      components: [
        "Vision33 Saltbox integration platform",
        "Custom API development",
        "Real-time data synchronization",
        "Error handling and monitoring",
        "Integration governance and security"
      ],
      idealFor: "Organizations with multiple disconnected systems"
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows for efficiency",
      icon: "⚡",
      outcomes: [
        "60% reduction in manual processing time",
        "Improved accuracy and consistency",
        "Faster approval cycles",
        "Enhanced compliance and audit trails"
      ],
      components: [
        "Workflow automation engines",
        "Document processing automation",
        "Approval and routing workflows",
        "Exception handling and alerts",
        "Process monitoring and optimization"
      ],
      idealFor: "Businesses seeking to eliminate manual processes"
    },
    {
      title: "E-commerce Integration",
      description: "Connect online sales channels with back-office systems",
      icon: "🛒",
      outcomes: [
        "Real-time inventory synchronization",
        "Automated order processing",
        "Unified customer experience",
        "Scalable multi-channel operations"
      ],
      components: [
        "Shopify, WooCommerce, Magento integration",
        "Real-time inventory and pricing sync",
        "Order processing automation",
        "Customer data unification",
        "Multi-channel analytics"
      ],
      idealFor: "Retailers selling across multiple online channels"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Integration Solutions"
        subtitle="Connect systems and automate processes for seamless operations"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Explore Integration Solutions"
        ctaLink="/contact"
      />

      {/* Integration Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🔗 Integration Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Connect your systems and automate processes to create a unified, efficient technology ecosystem that drives business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {integrationSolutions.map((solution, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{solution.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-[#334155] text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#0F79B9] mb-3">Business Outcomes:</h4>
                    <ul className="text-[#334155] space-y-2 text-sm">
                      {solution.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start">
                          <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0F79B9] mb-3">Solution Components:</h4>
                    <ul className="text-[#334155] space-y-1 text-sm">
                      {solution.components.map((component, componentIndex) => (
                        <li key={componentIndex} className="flex items-start">
                          <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 mb-6">
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Ideal For:</h4>
                  <p className="text-[#334155] text-sm">{solution.idealFor}</p>
                </div>

                <div className="flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Explore Solution
                  </Link>
                  <Link 
                    to="/contact"
                    className="flex-1 border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Platforms */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Integration Platforms
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Choose from leading integration platforms to connect your systems and automate your processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🔧</div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                    Vision33 Saltbox
                  </h3>
                  <p className="text-[#334155] text-sm">
                    Low-code integration platform for SAP Business One
                  </p>
                </div>
              </div>
              <ul className="text-[#334155] space-y-2 text-sm mb-6">
                <li>• Pre-built connectors for major platforms</li>
                <li>• No-code visual workflow builder</li>
                <li>• Real-time monitoring and error handling</li>
                <li>• Scalable cloud-native architecture</li>
                <li>• Complete audit trail and compliance</li>
              </ul>
              <Link 
                to="/products/integration-automation"
                className="text-[#0F79B9] hover:text-[#0D4E9E] font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🔌</div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                    Service Layer APIs
                  </h3>
                  <p className="text-[#334155] text-sm">
                    Modern REST-based integration framework for SAP Business One
                  </p>
                </div>
              </div>
              <ul className="text-[#334155] space-y-2 text-sm mb-6">
                <li>• RESTful architecture with JSON data format</li>
                <li>• OAuth security protocols</li>
                <li>• Real-time data connectivity</li>
                <li>• OData support for standardized queries</li>
                <li>• Change notifications and live updates</li>
              </ul>
              <Link 
                to="/products/integration-automation"
                className="text-[#0F79B9] hover:text-[#0D4E9E] font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose Our Integration Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  API-First Architecture
                </h3>
                <p className="text-[#334155] text-sm">
                  Modern integration approach with real-time data flow
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Comprehensive Monitoring
                </h3>
                <p className="text-[#334155] text-sm">
                  Real-time dashboards for integration health and performance
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Enterprise Security
                </h3>
                <p className="text-[#334155] text-sm">
                  Enterprise-grade security with audit trails and compliance
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Rapid Deployment
                </h3>
                <p className="text-[#334155] text-sm">
                  Quick implementation with pre-built connectors and templates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Connect Your Systems Today
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how our integration solutions can unify your technology ecosystem and automate your business processes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Integration Assessment
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntegrationSolutions
