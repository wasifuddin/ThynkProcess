import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const CRMSolutions = () => {
  const crmSolutions = [
    {
      title: "Sales Automation Solutions",
      description: "Accelerate sales cycles with intelligent automation",
      icon: "💼",
      outcomes: [
        "40% shorter sales cycles",
        "35% increase in conversion rates",
        "Automated quote-to-cash processes",
        "Complete sales pipeline visibility"
      ],
      components: [
        "Salesforce Sales Cloud with AI",
        "SAP Business One integration for pricing",
        "Mobile CRM for field sales teams",
        "Automated proposal and contract generation",
        "Sales performance analytics"
      ],
      idealFor: "Sales-driven organizations needing pipeline acceleration"
    },
    {
      title: "Customer Service Solutions",
      description: "Deliver exceptional service with omnichannel support",
      icon: "🎧",
      outcomes: [
        "50% faster case resolution times",
        "95% first-call resolution rates",
        "Proactive service with predictive analytics",
        "Complete service history visibility"
      ],
      components: [
        "Salesforce Service Cloud",
        "Field Service Management",
        "Knowledge base and self-service portals",
        "Omnichannel routing and automation",
        "Service analytics and SLA monitoring"
      ],
      idealFor: "Service organizations focusing on customer satisfaction"
    },
    {
      title: "Marketing Automation Solutions",
      description: "Drive demand generation with intelligent campaigns",
      icon: "📢",
      outcomes: [
        "60% improvement in lead quality",
        "45% increase in marketing ROI",
        "Automated nurturing and scoring",
        "Complete campaign attribution"
      ],
      components: [
        "Salesforce Marketing Cloud",
        "Journey automation and personalization",
        "Lead scoring and qualification",
        "Campaign analytics and ROI tracking",
        "Integration with sales processes"
      ],
      idealFor: "Marketing teams driving demand generation and lead quality"
    }
  ]

  return (
    <div>
      <PageHero 
        title="CRM Solutions"
        subtitle="Intelligent customer relationship management for revenue growth"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Explore CRM Solutions"
        ctaLink="/contact"
      />

      {/* CRM Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🤝 CRM Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Transform your customer relationships with intelligent CRM solutions designed to accelerate sales, enhance service, and drive marketing success.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {crmSolutions.map((solution, index) => (
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

      {/* CRM Benefits */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose Our CRM Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                AI-Powered Intelligence
              </h3>
              <p className="text-[#334155] text-sm">
                Leverage Einstein AI for predictive insights, automated recommendations, and intelligent automation
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Mobile-First Design
              </h3>
              <p className="text-[#334155] text-sm">
                Access your CRM anywhere with native mobile apps and offline capabilities
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Seamless Integration
              </h3>
              <p className="text-[#334155] text-sm">
                Connect with your existing systems for unified customer data and workflows
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Advanced Analytics
              </h3>
              <p className="text-[#334155] text-sm">
                Real-time dashboards and reports for data-driven decision making
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Workflow Automation
              </h3>
              <p className="text-[#334155] text-sm">
                Automate repetitive tasks and streamline business processes
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Omnichannel Experience
              </h3>
              <p className="text-[#334155] text-sm">
                Deliver consistent customer experiences across all touchpoints
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Accelerate Your Customer Success
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how our CRM solutions can transform your sales, service, and marketing operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get CRM Assessment
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

export default CRMSolutions
