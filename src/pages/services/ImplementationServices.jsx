import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const ImplementationServices = () => {
  const implementationServices = [
    {
      title: "ERP Implementation Services",
      description: "Complete deployment from planning to go-live",
      icon: "🏢",
      features: [
        "SAP Business One Implementation: Complete deployment from planning to go-live",
        "Industry Configuration: Sector-specific setup for compliance and best practices",
        "Data Migration: Secure transfer from legacy systems with validation",
        "Integration Setup: Connect with existing systems and third-party platforms",
        "User Training: Role-based training programs for optimal adoption"
      ],
      timeline: "8-16 weeks depending on complexity and scope",
      guarantee: "Fixed-price delivery with agreed functionality and timeline"
    },
    {
      title: "CRM Implementation Services",
      description: "Sales, Service, and Marketing Cloud implementation",
      icon: "🤝",
      features: [
        "Salesforce Deployment: Sales, Service, and Marketing Cloud implementation",
        "Customization: Custom objects, workflows, and automation setup",
        "Data Integration: Seamless connectivity with ERP and other business systems",
        "User Enablement: Training and change management for successful adoption",
        "Mobile Configuration: Field sales and service team enablement"
      ],
      timeline: "6-12 weeks depending on scope and complexity",
      guarantee: "Comprehensive training and change management included"
    },
    {
      title: "Analytics Implementation Services",
      description: "Power BI, Tableau, or SAP Analytics Cloud deployment",
      icon: "📊",
      features: [
        "Platform Setup: Power BI, Tableau, or SAP Analytics Cloud deployment",
        "Dashboard Development: Executive and operational reporting solutions",
        "Data Architecture: Robust data models and governance frameworks",
        "Self-Service Enablement: Training users for independent analytics creation",
        "Performance Optimization: Ongoing tuning for optimal performance"
      ],
      timeline: "4-8 weeks for most analytics implementations",
      guarantee: "User adoption and self-service capability focus"
    }
  ]

  const addOnServices = [
    {
      title: "Manufacturing Extensions",
      description: "Beas Manufacturing: Advanced MRP, shop floor control, and quality management",
      icon: "🏭",
      features: [
        "Netronic Scheduling: Visual production planning with drag-and-drop scheduling",
        "Quality Management: Inspection workflows, compliance documentation, and corrective actions"
      ],
      timeline: "4-8 weeks for most manufacturing extensions"
    },
    {
      title: "Warehouse & Logistics",
      description: "Produmex WMS: Complete warehouse management with barcode scanning",
      icon: "📦",
      features: [
        "Produmex Scan: Mobile transaction processing for real-time inventory updates",
        "3PL Integration: Connectivity with logistics providers and shipping carriers"
      ],
      timeline: "6-10 weeks for warehouse management systems"
    },
    {
      title: "Productivity & Automation",
      description: "B1 Usability Package: UI customization, workflow automation, and user productivity",
      icon: "⚡",
      features: [
        "Perfion PIM: Product information management with multi-channel syndication",
        "Vision33 Saltbox: Low-code integration platform for system connectivity"
      ],
      timeline: "2-6 weeks for productivity enhancements"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Implementation Services"
        subtitle="Professional deployment of technology platforms with business-focused outcomes"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Implementation Quote"
        ctaLink="/contact"
      />

      {/* Platform Implementation Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🚀 Platform Implementation Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Professional deployment of technology platforms with business-focused outcomes and proven methodologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {implementationServices.map((service, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#334155] text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#0F79B9] mb-3">Service Features:</h4>
                    <ul className="text-[#334155] space-y-2 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#0F79B9] mb-2">Timeline:</h4>
                      <p className="text-[#334155] text-sm">{service.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F79B9] mb-2">Guarantee:</h4>
                      <p className="text-[#334155] text-sm">{service.guarantee}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Get Quote
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

      {/* Add-On Integration Services */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Add-On Integration Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized deployment of manufacturing, warehouse, and productivity extensions with deep platform expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-[#334155] text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-[#0F79B9] mb-2 text-sm">Features:</h4>
                  <ul className="text-[#334155] space-y-1 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-[#0F79B9] mb-1 text-sm">Timeline:</h4>
                  <p className="text-[#334155] text-sm">{service.timeline}</p>
                </div>

                <Link 
                  to="/contact"
                  className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                >
                  Request Assessment
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Our Delivery Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Agile Methodology
                </h3>
                <p className="text-[#334155] text-sm">
                  Frequent validation checkpoints with stakeholder involvement throughout the project
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📅</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Timeline Management
                </h3>
                <p className="text-[#334155] text-sm">
                  Clear project timelines with milestone-based delivery and regular progress updates
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Quality Guarantee
                </h3>
                <p className="text-[#334155] text-sm">
                  Fixed-price delivery with agreed functionality and timeline commitments
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
            Ready to Implement Your Solution?
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get professional implementation services with guaranteed delivery and business-focused outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Implementation Quote
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

export default ImplementationServices
