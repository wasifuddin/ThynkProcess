import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const AnalyticsSolutions = () => {
  const analyticsSolutions = [
    {
      title: "Executive Dashboards",
      description: "Real-time business intelligence for strategic decision-making",
      icon: "📊",
      outcomes: [
        "Single source of truth for all business metrics",
        "Real-time visibility into company performance",
        "Data-driven strategic decision making",
        "Improved stakeholder communication"
      ],
      components: [
        "Power BI or Tableau executive dashboards",
        "SAP Business One and Salesforce data integration",
        "Mobile analytics for anywhere access",
        "Automated report distribution",
        "Interactive drill-down capabilities"
      ],
      idealFor: "Executives needing comprehensive business visibility"
    },
    {
      title: "Operational Analytics",
      description: "Optimize day-to-day operations with real-time insights",
      icon: "⚙️",
      outcomes: [
        "30% improvement in operational efficiency",
        "Proactive identification of bottlenecks",
        "Optimized resource allocation",
        "Continuous process improvement"
      ],
      components: [
        "Department-specific dashboards",
        "Real-time operational KPIs",
        "Performance monitoring and alerts",
        "Process optimization analytics",
        "Benchmarking and trend analysis"
      ],
      idealFor: "Operations managers optimizing daily performance"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and make proactive decisions",
      icon: "🔮",
      outcomes: [
        "25% improvement in forecast accuracy",
        "Proactive inventory management",
        "Predictive maintenance scheduling",
        "Risk identification and mitigation"
      ],
      components: [
        "Machine learning models for forecasting",
        "Predictive inventory optimization",
        "Customer behavior analytics",
        "Demand sensing and planning",
        "Risk assessment dashboards"
      ],
      idealFor: "Strategic planners needing predictive insights"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Analytics Solutions"
        subtitle="Transform data into actionable insights for better decisions"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Explore Analytics Solutions"
        ctaLink="/contact"
      />

      {/* Analytics Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              📊 Analytics Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Transform your business data into actionable insights with comprehensive analytics solutions designed for every level of your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {analyticsSolutions.map((solution, index) => (
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

      {/* Analytics Platforms */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Analytics Platforms
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Choose from leading analytics platforms to meet your specific business intelligence needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                Power BI
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm text-left">
                <li>• Self-service analytics</li>
                <li>• 500+ data connectors</li>
                <li>• AI-powered insights</li>
                <li>• Microsoft ecosystem integration</li>
                <li>• Cost-effective solution</li>
              </ul>
              <Link 
                to="/products/power-bi"
                className="inline-block mt-4 text-[#0F79B9] hover:text-[#0D4E9E] font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                Tableau
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm text-left">
                <li>• Advanced visual analytics</li>
                <li>• Drag-and-drop interface</li>
                <li>• Statistical functions</li>
                <li>• Enterprise deployment</li>
                <li>• AI & machine learning</li>
              </ul>
              <Link 
                to="/products/tableau"
                className="inline-block mt-4 text-[#0F79B9] hover:text-[#0D4E9E] font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                SAP Analytics Cloud
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm text-left">
                <li>• Unified planning & BI</li>
                <li>• Native SAP integration</li>
                <li>• Predictive analytics</li>
                <li>• Collaborative planning</li>
                <li>• Enterprise-grade security</li>
              </ul>
              <Link 
                to="/products/sap-analytics-cloud"
                className="inline-block mt-4 text-[#0F79B9] hover:text-[#0D4E9E] font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose Our Analytics Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Outcome Focus
                </h3>
                <p className="text-[#334155] text-sm">
                  Dashboards designed around business decisions, not just data display
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Mobile First
                </h3>
                <p className="text-[#334155] text-sm">
                  Responsive design optimized for executive mobile access
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Self-Service
                </h3>
                <p className="text-[#334155] text-sm">
                  Empower business users with tools for independent analysis
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
                  Role-based access control and data governance
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
            Transform Your Data into Insights
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how our analytics solutions can help you make data-driven decisions and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Analytics Assessment
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

export default AnalyticsSolutions
