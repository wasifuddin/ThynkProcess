import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const AgricultureAgribusiness = () => {
  const subIndustries = [
    {
      title: "Livestock & Meat Production",
      icon: "🐄",
      description: "Livestock identification tracking with NLIS-style compliance",
      features: [
        "Livestock identification tracking (can be configured for NLIS-style compliance)",
        "Animal health and welfare documentation",
        "Production assurance documentation (similar to LPA requirements)",
        "Meat quality grading and classification tracking",
        "Export health certificate documentation management"
      ],
      solutions: [
        "SAP Business One + NLIS Module + Animal Tracking + RFID Integration",
        "Animal Health Module + Welfare Tracking + Document Management",
        "LPA Module + Production Assurance + Crystal Reports",
        "Quality Grading Module + Classification Engine",
        "Health Certificate Module + Export Documentation"
      ]
    },
    {
      title: "Crop Production & Horticulture",
      icon: "🌱",
      description: "Chemical registration and usage tracking with APVMA-style workflows",
      features: [
        "Chemical registration and usage tracking (can support APVMA-style workflows)",
        "Crop protection and pest management documentation",
        "Organic certification documentation (can be configured for ACO, NASAA workflows)",
        "Good Agricultural Practice (GAP) documentation support",
        "Seasonal worker management and compliance tracking"
      ],
      solutions: [
        "SAP Business One + Chemical Tracking Module + APVMA Documentation + Usage Analytics",
        "Crop Protection Module + Pest Management + IoT Sensors",
        "Organic Certification Module + ACO/NASAA Documentation",
        "GAP Module + Practice Documentation + Crystal Reports",
        "Worker Management + Compliance Tracking + HR Integration"
      ]
    },
    {
      title: "Wine & Viticulture",
      icon: "🍇",
      description: "Wine industry documentation with Wine Australia levy requirements",
      features: [
        "Wine industry documentation (can support Wine Australia levy requirements)",
        "Geographic indication and labeling compliance tracking",
        "Vintage records and quality documentation",
        "Cellar door sales and tourism management",
        "Export certification and documentation workflows"
      ],
      solutions: [
        "SAP Business One + Wine Australia Module + Levy Management + Document Control",
        "Geographic Indication Module + Label Compliance",
        "Vintage Module + Quality Documentation + Batch Tracking",
        "Cellar Door Module + Tourism Management + POS Integration",
        "Wine Export Module + Certification Workflows"
      ]
    },
    {
      title: "Grain & Pulse Production",
      icon: "🌾",
      description: "Grain quality testing and classification data management",
      features: [
        "Grain quality testing and classification data management",
        "Export grain standards documentation support",
        "Storage and handling quality assurance workflows",
        "Crop insurance and risk management documentation",
        "Commodity trading and pricing management"
      ],
      solutions: [
        "SAP Business One + Grain Quality Module + Laboratory Integration + Classification Engine",
        "Grain Export Module + Standards Documentation",
        "Storage QA Module + Handling Procedures + IoT Monitoring",
        "Insurance Module + Risk Management + Document Control",
        "Commodity Trading Module + Pricing Engine + Market Integration"
      ]
    },
    {
      title: "Aquaculture & Fisheries",
      icon: "🦐",
      description: "Aquaculture license documentation and management",
      features: [
        "Aquaculture license documentation and management",
        "Fish health monitoring and reporting workflows",
        "Environmental impact documentation",
        "Seafood safety documentation (can be configured for scheme compliance)",
        "Export establishment documentation support"
      ],
      solutions: [
        "SAP Business One + Aquaculture License Module + Document Management",
        "Fish Health Module + Monitoring Dashboard + Power BI",
        "Environmental Impact Module + Impact Documentation",
        "Seafood Safety Module + Scheme Documentation",
        "Seafood Export Module + Establishment Documentation"
      ]
    }
  ]

  const agricultureFeatures = [
    {
      title: "Traceability & Compliance",
      description: "Complete traceability from farm to market",
      icon: "📋",
      features: [
        "Product traceability and batch tracking",
        "Regulatory compliance documentation",
        "Quality assurance and certification management",
        "Export documentation and certification"
      ]
    },
    {
      title: "Production Management",
      description: "Comprehensive farm and production management",
      icon: "🌾",
      features: [
        "Crop and livestock production planning",
        "Resource management and optimization",
        "Seasonal planning and scheduling",
        "Production analytics and reporting"
      ]
    },
    {
      title: "Quality & Testing",
      description: "Quality management and testing integration",
      icon: "🧪",
      features: [
        "Laboratory integration and test result management",
        "Quality grading and classification",
        "Food safety and HACCP compliance",
        "Certification and audit management"
      ]
    },
    {
      title: "Market Integration",
      description: "Market connectivity and trading management",
      icon: "🌍",
      features: [
        "Commodity trading and pricing",
        "Export market compliance",
        "Supply chain coordination",
        "Customer relationship management"
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Agriculture & Agribusiness Industry Solutions"
        subtitle="Supporting Australian agricultural compliance and standards with comprehensive farm-to-market management"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Agriculture Assessment"
        ctaLink="/contact"
      />

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🌾 Agriculture & Agribusiness Industry Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Supporting Australian agricultural compliance and standards with comprehensive farm-to-market management and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agricultureFeatures.map((feature, index) => (
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
              Agriculture Sub-Industries
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized solutions for each segment of the agriculture and agribusiness industry with industry-specific compliance and production management.
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

      {/* Agriculture Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose ThynkProcess for Agriculture & Agribusiness
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🌾</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Farm to Market
                </h3>
                <p className="text-[#334155] text-sm">
                  Complete traceability from production to market delivery
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
                  Australian agricultural standards and export compliance
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🧪</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Quality Management
                </h3>
                <p className="text-[#334155] text-sm">
                  Laboratory integration and quality assurance systems
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Export Ready
                </h3>
                <p className="text-[#334155] text-sm">
                  International market compliance and documentation
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
            Transform Your Agriculture Operations
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get comprehensive digital transformation solutions designed specifically for Australia's agriculture and agribusiness industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Agriculture Assessment
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

export default AgricultureAgribusiness
