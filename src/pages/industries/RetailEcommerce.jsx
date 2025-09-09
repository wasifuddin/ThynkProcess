import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const RetailEcommerce = () => {
  const subIndustries = [
    {
      title: "Grocery & Supermarket",
      icon: "🛒",
      description: "Australian Consumer Law compliance and fresh produce management",
      features: [
        "Australian Consumer Law compliance",
        "Unit pricing and country of origin labeling",
        "Fresh produce quality and safety",
        "Promotional compliance and pricing accuracy",
        "Supply chain sustainability reporting"
      ],
      solutions: [
        "SAP Business One + Consumer Law Module + Compliance Documentation + Legal Framework",
        "Pricing Module + Origin Labeling + Perfion PIM",
        "Produce Quality Module + Safety Tracking + Temperature Monitoring",
        "Promotion Module + Pricing Validation + Compliance Engine",
        "Sustainability Module + Supply Chain Tracking + Power BI"
      ]
    },
    {
      title: "Fashion & Apparel",
      icon: "👕",
      description: "Textile labeling and ethical sourcing management",
      features: [
        "Textile labeling and care instructions",
        "Ethical sourcing and supply chain transparency",
        "Size standardization and fit guidelines",
        "Returns and warranty compliance",
        "Sustainable fashion certification"
      ],
      solutions: [
        "SAP Business One + Textile Module + Label Management + Perfion PIM",
        "Ethical Sourcing Module + Supply Chain Transparency + Traceability",
        "Size Module + Standardization Engine + Product Management",
        "Returns Module + Warranty Management + Consumer Law Compliance",
        "Sustainability Certification + Fashion Module + Document Management"
      ]
    },
    {
      title: "Electronics & Technology Retail",
      icon: "💻",
      description: "Electrical safety compliance and energy rating management",
      features: [
        "Electrical safety compliance and certification",
        "Energy rating labels and efficiency standards",
        "Telecommunications equipment certification",
        "E-waste management and recycling",
        "Extended warranty and service agreements"
      ],
      solutions: [
        "SAP Business One + Electrical Safety Module + Certification Tracking + RCM Management",
        "Energy Rating Module + Efficiency Standards + Label Management",
        "Telecom Certification + ACMA Compliance + Equipment Tracking",
        "E-Waste Module + Recycling Tracking + Environmental Compliance",
        "Extended Warranty Module + Service Agreement Management + Salesforce"
      ]
    },
    {
      title: "Home & Garden",
      icon: "🏠",
      description: "Product safety standards and chemical management",
      features: [
        "Product safety standards compliance",
        "Chemical and hazardous product management",
        "Building materials certification",
        "Outdoor equipment safety standards",
        "Plant health and quarantine compliance"
      ],
      solutions: [
        "SAP Business One + Product Safety Module + Standards Compliance + Safety Documentation",
        "Chemical Management + Hazardous Goods + SDS Integration",
        "Building Materials Module + Certification Tracking + CodeMark Integration",
        "Outdoor Safety Module + Equipment Standards + Safety Certification",
        "Plant Health Module + Quarantine Compliance + Biosecurity Documentation"
      ]
    },
    {
      title: "Sports & Recreation",
      icon: "⚽",
      description: "Sports equipment safety standards and certification",
      features: [
        "Sports equipment safety standards",
        "Fitness equipment certification",
        "Recreational vehicle compliance",
        "Sports supplement regulation",
        "Event management and insurance"
      ],
      solutions: [
        "SAP Business One + Sports Safety Module + Equipment Standards + Safety Certification",
        "Fitness Equipment Module + Certification Tracking + Safety Standards",
        "RV Compliance Module + Vehicle Standards + ADR Integration",
        "Supplement Module + TGA Compliance + Regulation Tracking",
        "Event Management + Insurance Module + Risk Management + Salesforce"
      ]
    }
  ]

  const retailFeatures = [
    {
      title: "Consumer Law Compliance",
      description: "Australian Consumer Law compliance and product safety",
      icon: "⚖️",
      features: [
        "Australian Consumer Law compliance management",
        "Product safety standards and certification",
        "Warranty and returns management",
        "Consumer rights and protection compliance"
      ]
    },
    {
      title: "Multi-Channel Commerce",
      description: "Omnichannel retail and e-commerce management",
      icon: "🛍️",
      features: [
        "Online and offline channel integration",
        "Inventory synchronization across channels",
        "Customer experience management",
        "Order fulfillment and logistics"
      ]
    },
    {
      title: "Product Information",
      description: "Comprehensive product information management",
      icon: "📋",
      features: [
        "Product catalog and information management",
        "Labeling and compliance documentation",
        "Product lifecycle management",
        "Digital asset management"
      ]
    },
    {
      title: "Supply Chain",
      description: "Retail supply chain and vendor management",
      icon: "🔗",
      features: [
        "Vendor and supplier management",
        "Supply chain transparency and traceability",
        "Sustainability and ethical sourcing",
        "Quality control and compliance"
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Retail & eCommerce Industry Solutions"
        subtitle="Supporting Australian Consumer Law and retail standards compliance with comprehensive omnichannel management"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Retail Assessment"
        ctaLink="/contact"
      />

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🛍️ Retail & eCommerce Industry Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Supporting Australian Consumer Law and retail standards compliance with comprehensive omnichannel management and customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailFeatures.map((feature, index) => (
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
              Retail Sub-Industries
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized solutions for each segment of the retail and e-commerce industry with industry-specific compliance and customer management.
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

      {/* Retail Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose ThynkProcess for Retail & eCommerce
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Consumer Law
                </h3>
                <p className="text-[#334155] text-sm">
                  Australian Consumer Law compliance and product safety
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🛍️</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Omnichannel
                </h3>
                <p className="text-[#334155] text-sm">
                  Seamless online and offline channel integration
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Product Info
                </h3>
                <p className="text-[#334155] text-sm">
                  Comprehensive product information and catalog management
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Supply Chain
                </h3>
                <p className="text-[#334155] text-sm">
                  Ethical sourcing and supply chain transparency
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
            Transform Your Retail Operations
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get comprehensive digital transformation solutions designed specifically for Australia's retail and e-commerce industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Retail Assessment
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

export default RetailEcommerce
