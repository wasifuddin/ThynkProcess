import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const WholesaleDistribution = () => {
  const subIndustries = [
    {
      title: "Industrial & Trade Supplies",
      icon: "🔧",
      description: "Safety Data Sheet (SDS) management and document control",
      features: [
        "Safety Data Sheet (SDS) management and document control",
        "Dangerous goods documentation workflows (can be configured for transport compliance)",
        "Trade account and contractor management",
        "Pricing and volume discount automation",
        "Technical specification and documentation management"
      ],
      solutions: [
        "SAP Business One + Document Management + SDS Module",
        "Dangerous Goods Module + Transport Documentation",
        "CRM Module + Customer Management",
        "Pricing Engine + Volume Discount Module",
        "Perfion PIM + Technical Documentation"
      ]
    },
    {
      title: "Medical & Pharmaceutical Distribution",
      icon: "🏥",
      description: "Controlled substance tracking workflows with TGA scheduling",
      features: [
        "Controlled substance tracking workflows (can be configured for TGA scheduling)",
        "Cold chain monitoring and temperature validation",
        "Pricing structure management (can be configured for guild compliance)",
        "Medical device tracking and classification support",
        "Pricing integration capabilities (similar to PBS/RPBS requirements)"
      ],
      solutions: [
        "SAP Business One + Controlled Substance Module + Compliance Tracking",
        "IoT Temperature Monitoring + Produmex WMS",
        "Pricing Module + Guild Compliance",
        "Device Classification + Inventory Management",
        "PBS Integration Module + Pricing Engine"
      ]
    },
    {
      title: "Hardware & Building Materials",
      icon: "🛠️",
      description: "Compliance documentation tracking with Building Codes verification",
      features: [
        "Compliance documentation tracking (can support Building Codes verification)",
        "Safety certification and standards tracking workflows",
        "Trade account management with credit terms",
        "Delivery optimization and scheduling",
        "Warranty and product liability documentation",
        "Dangerous goods classification for chemicals and adhesives",
        "Product specification management for technical products"
      ],
      solutions: [
        "SAP Business One + Compliance Module + Document Management",
        "Certificate Management + Standards Tracking",
        "Trade Account Module + Credit Management",
        "Delivery Optimization + Scheduling Module",
        "Warranty Management + Document Control",
        "Dangerous Goods Module + Classification Engine",
        "Perfion PIM + Technical Specifications"
      ]
    },
    {
      title: "Electrical & Electronics",
      icon: "⚡",
      description: "Safety compliance documentation with AS/NZS 3000 series compliance",
      features: [
        "Safety compliance documentation (can track AS/NZS 3000 series compliance)",
        "Testing and certification record management",
        "Energy rating and efficiency data tracking",
        "Regulatory compliance mark (RCM) documentation support",
        "Technical documentation and specification management"
      ],
      solutions: [
        "SAP Business One + Safety Compliance Module + Standards Tracking",
        "Testing Module + Certificate Management",
        "Energy Rating Module + Efficiency Tracking",
        "RCM Module + Compliance Documentation",
        "Perfion PIM + Technical Documentation"
      ]
    },
    {
      title: "Automotive Parts & Accessories",
      icon: "🚗",
      description: "Compliance verification workflows with ADR requirements",
      features: [
        "Compliance verification workflows (can be configured for ADR requirements)",
        "Vehicle identification and parts compatibility tracking",
        "Warranty management and recall procedure documentation",
        "Technical service bulletin management",
        "Parts certification and documentation tracking"
      ],
      solutions: [
        "SAP Business One + ADR Compliance Module + Verification Workflows",
        "VIN Module + Compatibility Engine",
        "Warranty Module + Recall Management",
        "TSB Module + Document Management",
        "Certification Module + Document Control"
      ]
    }
  ]

  const distributionFeatures = [
    {
      title: "Multi-Warehouse Management",
      description: "Comprehensive inventory management across multiple locations",
      icon: "📦",
      features: [
        "Multi-location inventory tracking and management",
        "Automated replenishment and stock optimization",
        "Cross-docking and transfer management",
        "Real-time inventory visibility and reporting"
      ]
    },
    {
      title: "Customer Portal & Self-Service",
      description: "Enhanced customer experience with self-service capabilities",
      icon: "🌐",
      features: [
        "Online ordering and account management",
        "Real-time pricing and availability",
        "Order tracking and delivery management",
        "Document access and download capabilities"
      ]
    },
    {
      title: "Compliance & Documentation",
      description: "Comprehensive compliance management for regulated products",
      icon: "📋",
      features: [
        "Safety data sheet management and distribution",
        "Dangerous goods classification and documentation",
        "Product certification and compliance tracking",
        "Regulatory reporting and audit support"
      ]
    },
    {
      title: "EDI & B2B Integration",
      description: "Seamless integration with major retailers and trading partners",
      icon: "🔗",
      features: [
        "EDI integration with major retailers",
        "Automated order processing and fulfillment",
        "Real-time inventory synchronization",
        "Electronic invoicing and payment processing"
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Wholesale Distribution Industry Solutions"
        subtitle="Configured for Australian distribution and logistics workflows with comprehensive compliance management"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Distribution Assessment"
        ctaLink="/contact"
      />

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              📦 Wholesale Distribution Industry Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Configured for Australian distribution and logistics workflows with comprehensive compliance management and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributionFeatures.map((feature, index) => (
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
              Distribution Sub-Industries
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized solutions for each segment of the wholesale distribution industry with industry-specific compliance and operational management.
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

      {/* Distribution Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose ThynkProcess for Wholesale Distribution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📦</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Multi-Warehouse
                </h3>
                <p className="text-[#334155] text-sm">
                  Advanced warehouse management across multiple locations
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  EDI Integration
                </h3>
                <p className="text-[#334155] text-sm">
                  Seamless integration with major retailers and trading partners
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Compliance Ready
                </h3>
                <p className="text-[#334155] text-sm">
                  Comprehensive compliance management for regulated products
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Customer Portal
                </h3>
                <p className="text-[#334155] text-sm">
                  Enhanced customer experience with self-service capabilities
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
            Transform Your Distribution Operations
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get comprehensive digital transformation solutions designed specifically for Australia's wholesale distribution industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Distribution Assessment
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

export default WholesaleDistribution
