import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const FoodBeverage = () => {
  const subIndustries = [
    {
      title: "Meat Processing & Abattoirs",
      icon: "🍖",
      description: "HACCP workflow support with AS 4696:2007 compliance capabilities",
      features: [
        "HACCP workflow support (can be configured for AS 4696:2007 compliance)",
        "Laboratory integration capabilities for microbiological testing results",
        "Export documentation workflows (similar to export register requirements)",
        "Cold chain monitoring and temperature validation tracking",
        "Certification tracking (can be configured for Halal and Kosher requirements)"
      ],
      solutions: [
        "SAP Business One + Beas Manufacturing + Custom HACCP Module",
        "Laboratory Integration APIs + Crystal Reports",
        "Export Documentation Module",
        "IoT Temperature Monitoring + Produmex WMS",
        "Certificate Management Module"
      ]
    },
    {
      title: "Dairy & Dairy Products",
      icon: "🐄",
      description: "Quality testing data integration with laboratory systems",
      features: [
        "Quality testing data integration (can connect with laboratory systems)",
        "Process monitoring and validation documentation",
        "Export documentation workflows (similar to export dairy establishment requirements)",
        "Nutritional panel data management and labeling support",
        "Allergen management and traceability workflows"
      ],
      solutions: [
        "SAP Business One + Laboratory Integration APIs",
        "Beas Manufacturing + Process Control Module",
        "Export Documentation Module",
        "Perfion PIM + Label Management",
        "Batch Tracking + Allergen Module"
      ]
    },
    {
      title: "Bakery & Confectionery",
      icon: "🍞",
      description: "Ingredient allergen tracking and labeling workflows",
      features: [
        "Ingredient allergen tracking and labeling workflows",
        "Shelf-life management and expiry tracking",
        "Recipe management with scaling capabilities",
        "Production workflow management for artisan and commercial operations"
      ],
      solutions: [
        "SAP Business One + Batch Management + Allergen Tracking",
        "Expiry Management + Alert Systems",
        "Beas Manufacturing + Recipe Management",
        "Production Planning Module"
      ]
    },
    {
      title: "Beverages & Brewing",
      icon: "🍺",
      description: "Excise and licensing documentation support",
      features: [
        "Excise and licensing documentation support (custom configuration available)",
        "Quality testing data integration and alcohol content tracking",
        "Compliance documentation workflows (can be configured for AWBC requirements)",
        "Production management for craft brewing and distillery operations",
        "Export documentation support"
      ],
      solutions: [
        "SAP Business One + Custom Excise Module",
        "Laboratory Integration + Quality Module",
        "Compliance Module + Crystal Reports",
        "Beas Manufacturing + Batch Control",
        "Export Module + Document Automation"
      ]
    },
    {
      title: "Grain Processing & Milling",
      icon: "🌾",
      description: "Quality testing and grading data integration",
      features: [
        "Quality testing and grading data integration",
        "Chemical treatment and fumigation record keeping",
        "Export documentation workflows (can support grain standards compliance)",
        "Storage management with monitoring capabilities",
        "Bulk handling and logistics coordination"
      ],
      solutions: [
        "SAP Business One + Laboratory APIs + Quality Management",
        "Chemical Tracking + Compliance Module",
        "Export Documentation + Compliance",
        "Warehouse Management + IoT Integration",
        "Produmex WMS + Transport Integration"
      ]
    },
    {
      title: "Seafood & Aquaculture",
      icon: "🐟",
      description: "Seafood safety documentation workflows",
      features: [
        "Seafood safety documentation workflows (can be configured for scheme compliance)",
        "Catch documentation and traceability management",
        "Export documentation support (similar to establishment requirements)",
        "Laboratory data integration capabilities",
        "Aquaculture management and feed tracking"
      ],
      solutions: [
        "SAP Business One + Safety Module + Document Management",
        "Traceability Module + Batch Tracking",
        "Export Module + Compliance",
        "Laboratory APIs + Quality Management",
        "Aquaculture Module + Inventory Management"
      ]
    }
  ]

  const complianceFeatures = [
    {
      title: "Food Standards Australia New Zealand (FSANZ) Support",
      description: "Comprehensive compliance with Australian food safety standards",
      icon: "📋",
      features: [
        "Food safety plan documentation and management",
        "Allergen management and labeling compliance",
        "Nutritional information management and labeling",
        "Food recall and incident management workflows"
      ]
    },
    {
      title: "HACCP Implementation Support",
      description: "Hazard Analysis Critical Control Point system implementation",
      icon: "🔍",
      features: [
        "HACCP plan development and documentation",
        "Critical control point monitoring and validation",
        "Corrective action management and documentation",
        "HACCP team training and competency tracking"
      ]
    },
    {
      title: "Export Documentation & Compliance",
      description: "Automated export documentation for international markets",
      icon: "🌍",
      features: [
        "Export health certificate generation",
        "Customs documentation automation",
        "Country-specific compliance requirements",
        "Traceability documentation for export markets"
      ]
    },
    {
      title: "Laboratory Integration & Testing",
      description: "Seamless integration with testing laboratories",
      icon: "🧪",
      features: [
        "Laboratory data integration and management",
        "Test result tracking and validation",
        "Certificate of analysis management",
        "Quality control and assurance workflows"
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Food & Beverage Industry Solutions"
        subtitle="Comprehensive digital transformation solutions for Australia's food and beverage industry with FSANZ compliance support"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Industry Assessment"
        ctaLink="/contact"
      />

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🥫 Food & Beverage Industry Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Supporting compliance with Food Standards Australia New Zealand (FSANZ) requirements and comprehensive food safety management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
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
              Sub-Industries We Serve
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized solutions for each segment of the food and beverage industry with industry-specific compliance support.
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

      {/* Industry Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose ThynkProcess for Food & Beverage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🇦🇺</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Australian Compliance
                </h3>
                <p className="text-[#334155] text-sm">
                  Deep understanding of FSANZ requirements and Australian food safety standards
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Laboratory Integration
                </h3>
                <p className="text-[#334155] text-sm">
                  Seamless integration with testing laboratories and quality control systems
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Traceability
                </h3>
                <p className="text-[#334155] text-sm">
                  Complete traceability from farm to fork with batch and lot tracking
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
                  Automated export documentation and international compliance support
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
            Transform Your Food & Beverage Operations
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get comprehensive digital transformation solutions designed specifically for Australia's food and beverage industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Industry Assessment
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

export default FoodBeverage
