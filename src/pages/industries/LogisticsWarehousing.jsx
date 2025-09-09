import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const LogisticsWarehousing = () => {
  const subIndustries = [
    {
      title: "Third-Party Logistics (3PL)",
      icon: "📦",
      description: "Transport operator documentation with licensing compliance",
      features: [
        "Transport operator documentation (can be configured for licensing compliance)",
        "Chain of Responsibility (CoR) documentation workflows",
        "Dangerous goods documentation (can support transport certification workflows)",
        "Customer SLA management and performance tracking",
        "Multi-client inventory segregation and management"
      ],
      solutions: [
        "SAP Business One + Transport Licensing Module + Document Management",
        "CoR Module + Responsibility Tracking + Crystal Reports",
        "Dangerous Goods Module + Transport Documentation",
        "SLA Module + Performance Analytics + Power BI",
        "Produmex WMS + Client Segregation Module"
      ]
    },
    {
      title: "Freight Forwarding & Customs",
      icon: "🚢",
      description: "Border compliance documentation workflows with ABF requirements",
      features: [
        "Border compliance documentation workflows (can support ABF requirements)",
        "Customs documentation and declaration management",
        "International trade documentation automation",
        "Quarantine and biosecurity documentation support",
        "Free trade agreement documentation and utilization tracking"
      ],
      solutions: [
        "SAP Business One + ABF Module + Border Documentation + Vision33 Saltbox",
        "Customs Module + Declaration Management",
        "Trade Documentation + Document Automation",
        "Quarantine Module + Biosecurity Documentation",
        "FTA Module + Trade Agreement Tracking"
      ]
    },
    {
      title: "Cold Chain & Temperature-Controlled",
      icon: "❄️",
      description: "HACCP-style documentation for cold storage workflows",
      features: [
        "HACCP-style documentation for cold storage workflows",
        "Temperature validation and continuous monitoring",
        "Cold chain documentation (can be configured for GDP compliance)",
        "Energy efficiency monitoring and reporting",
        "Emergency response procedure documentation"
      ],
      solutions: [
        "SAP Business One + Cold Chain HACCP Module + Temperature Documentation",
        "IoT Temperature Sensors + Monitoring Dashboard + Power BI",
        "GDP Module + Cold Chain Documentation",
        "Energy Monitoring + IoT Integration + Power BI",
        "Emergency Response Module + Procedure Management"
      ]
    },
    {
      title: "E-commerce Fulfillment",
      icon: "🏪",
      description: "Consumer law compliance documentation support",
      features: [
        "Consumer law compliance documentation support",
        "Pick and pack optimization workflows",
        "Multi-channel inventory allocation and management",
        "Returns processing and refurbishment tracking",
        "Customer service integration and management"
      ],
      solutions: [
        "SAP Business One + Consumer Law Module + Compliance Documentation",
        "Produmex WMS + Pick Optimization + Produmex Scan",
        "Multi-Channel Module + Inventory Allocation + Vision33 Saltbox",
        "Returns Module + Refurbishment Tracking + Produmex WMS",
        "Salesforce Service Cloud + Customer Service Integration"
      ]
    },
    {
      title: "Heavy Transport & Logistics",
      icon: "🚛",
      description: "Heavy vehicle compliance documentation with NHVR requirements",
      features: [
        "Heavy vehicle compliance documentation (can support NHVR requirements)",
        "Fatigue management documentation and tracking",
        "Vehicle maintenance scheduling and record keeping",
        "Load planning and weight distribution documentation",
        "Route optimization with restriction management"
      ],
      solutions: [
        "SAP Business One + NHVR Module + Vehicle Compliance + Document Management",
        "Fatigue Management Module + Driver Tracking",
        "Vehicle Maintenance Module + Scheduling Engine",
        "Load Planning Module + Weight Distribution Calculator",
        "Route Optimization + Restriction Engine + Mapping Integration"
      ]
    }
  ]

  const logisticsFeatures = [
    {
      title: "Warehouse Management",
      description: "Advanced warehouse operations and inventory control",
      icon: "🏭",
      features: [
        "Real-time inventory tracking and management",
        "Automated picking, packing, and shipping",
        "Barcode scanning and mobile device integration",
        "Cycle counting and inventory optimization"
      ]
    },
    {
      title: "Transport Management",
      description: "Comprehensive transport operations and compliance",
      icon: "🚛",
      features: [
        "Route optimization and load planning",
        "Driver management and fatigue monitoring",
        "Vehicle maintenance and compliance tracking",
        "Delivery scheduling and customer communication"
      ]
    },
    {
      title: "Compliance & Documentation",
      description: "Regulatory compliance and documentation management",
      icon: "📋",
      features: [
        "Chain of Responsibility (CoR) compliance",
        "Dangerous goods documentation and handling",
        "Customs and border compliance",
        "Audit trails and regulatory reporting"
      ]
    },
    {
      title: "Technology Integration",
      description: "Advanced technology solutions for operational excellence",
      icon: "🔗",
      features: [
        "IoT sensors and real-time monitoring",
        "EDI integration with trading partners",
        "Mobile applications for field operations",
        "Analytics and performance dashboards"
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Logistics & Warehousing Industry Solutions"
        subtitle="Supporting Australian transport and logistics compliance frameworks with comprehensive operational management"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Logistics Assessment"
        ctaLink="/contact"
      />

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🚛 Logistics & Warehousing Industry Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Supporting Australian transport and logistics compliance frameworks with comprehensive operational management and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsFeatures.map((feature, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#334155] text-sm mb-4">
                    {feature.description}
                  </p>
                </div>

                <ul className="text-[#334155] space-y-2 text-sm">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Industries */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Logistics Sub-Industries
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized solutions for each segment of the logistics and warehousing industry with industry-specific compliance and operational management.
            </p>
          </div>

          <div className="space-y-8">
            {subIndustries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{industry.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-[#334155] text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#0F79B9] mb-3">Key Features:</h4>
                    <ul className="text-[#334155] space-y-2 text-sm">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0F79B9] mb-3">Recommended Solutions:</h4>
                    <ul className="text-[#334155] space-y-2 text-sm">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start">
                          <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Get {industry.title} Assessment
                  </Link>
                  <Link 
                    to="/contact"
                    className="flex-1 border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose ThynkProcess for Logistics & Warehousing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📦</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Advanced WMS
                </h3>
                <p className="text-[#334155] text-sm">
                  Comprehensive warehouse management with barcode scanning
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🚛</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Transport Compliance
                </h3>
                <p className="text-[#334155] text-sm">
                  NHVR compliance and Chain of Responsibility management
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🌡️</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Cold Chain
                </h3>
                <p className="text-[#334155] text-sm">
                  Temperature monitoring and cold chain compliance
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Integration Ready
                </h3>
                <p className="text-[#334155] text-sm">
                  Seamless integration with trading partners and systems
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
            Transform Your Logistics Operations
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get comprehensive digital transformation solutions designed specifically for Australia's logistics and warehousing industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Logistics Assessment
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogisticsWarehousing
