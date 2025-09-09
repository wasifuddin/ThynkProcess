import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const ERPSolutions = () => {
  const erpSolutions = [
    {
      title: "Financial Management Solutions",
      description: "Streamline accounting, compliance, and financial reporting",
      icon: "💰",
      outcomes: [
        "40% faster month-end closing processes",
        "Automated Australian tax compliance (GST, BAS, FBT)",
        "Real-time cash flow visibility and forecasting",
        "Reduced audit preparation time by 60%"
      ],
      components: [
        "SAP Business One financial modules",
        "Acassia Bank Feeds for automated reconciliation",
        "Power BI financial dashboards",
        "Automated compliance reporting"
      ],
      idealFor: "CFOs seeking accurate, compliant, and timely financial reporting"
    },
    {
      title: "Manufacturing Solutions",
      description: "End-to-end production management from planning to delivery",
      icon: "🏭",
      outcomes: [
        "25% reduction in production costs",
        "30% improvement in on-time delivery",
        "Real-time visibility across shop floor operations",
        "Integrated quality management and compliance"
      ],
      components: [
        "SAP Business One with Beas Manufacturing",
        "Produmex WMS for materials management",
        "Netronic visual scheduling",
        "Quality management workflows",
        "Production analytics and KPI dashboards"
      ],
      idealFor: "Manufacturers needing integrated planning, execution, and control"
    },
    {
      title: "Distribution Solutions",
      description: "Optimize inventory, warehousing, and fulfillment operations",
      icon: "📦",
      outcomes: [
        "25% reduction in inventory carrying costs",
        "30% improvement in order fulfillment accuracy",
        "Automated supplier and customer management",
        "Real-time inventory visibility across locations"
      ],
      components: [
        "SAP Business One inventory management",
        "Produmex WMS with barcode scanning",
        "EDI integration with major retailers",
        "3PL and logistics integration",
        "Customer portal for self-service"
      ],
      idealFor: "Distributors managing complex inventory across multiple channels"
    },
    {
      title: "Compliance Solutions",
      description: "Ensure regulatory adherence with automated documentation",
      icon: "📋",
      outcomes: [
        "100% audit readiness with automated compliance",
        "Reduced compliance costs by 50%",
        "Complete traceability and recall capabilities",
        "Simplified regulatory reporting"
      ],
      components: [
        "Industry-specific compliance modules",
        "Batch tracking and traceability systems",
        "Automated regulatory reporting",
        "Document management and audit trails",
        "Laboratory integration capabilities"
      ],
      idealFor: "Regulated industries requiring strict compliance (Food, Pharma, Chemical)"
    }
  ]

  return (
    <div>
      <PageHero 
        title="ERP Solutions"
        subtitle="Complete business management solutions for operational excellence"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Explore ERP Solutions"
        ctaLink="/contact"
      />

      {/* ERP Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🏢 ERP Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Transform your operations with comprehensive ERP solutions designed around business outcomes, not just technology features.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {erpSolutions.map((solution, index) => (
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

                <div className="mb-6">
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

                <div className="mb-6">
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

                <div className="mb-6">
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

      {/* Why Choose Our ERP Solutions */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose Our ERP Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Business-First Approach
                </h3>
                <p className="text-[#334155] text-sm">
                  Focus on business outcomes, not just technology features
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Integrated Architecture
                </h3>
                <p className="text-[#334155] text-sm">
                  Seamless connectivity between all solution components
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🇦🇺</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Australian Expertise
                </h3>
                <p className="text-[#334155] text-sm">
                  Deep understanding of Australian business requirements
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Proven Results
                </h3>
                <p className="text-[#334155] text-sm">
                  90% of clients achieve efficiency gains within 6 months
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
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how our ERP solutions can streamline your business processes and drive measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get ERP Solution Assessment
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

export default ERPSolutions
