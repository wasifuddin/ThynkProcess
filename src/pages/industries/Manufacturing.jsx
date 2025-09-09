import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const Manufacturing = () => {
  const subIndustries = [
    {
      title: "Precision Engineering & Machining",
      icon: "⚙️",
      description: "Quality management system support with AS/NZS ISO 9001 compliance",
      features: [
        "Quality management system support (can be configured for AS/NZS ISO 9001)",
        "Calibration tracking and measurement uncertainty documentation",
        "Testing data integration (can connect with NATA-accredited testing)",
        "CNC programming and tool management",
        "Statistical process control and quality monitoring"
      ],
      solutions: [
        "SAP Business One + ISO 9001 Module + Quality Management + Crystal Reports",
        "Calibration Module + Measurement Tracking",
        "Laboratory APIs + Testing Integration",
        "CNC Integration + Tool Management Module",
        "SPC Module + Power BI + Quality Analytics"
      ]
    },
    {
      title: "Steel Fabrication & Structural",
      icon: "🏗️",
      description: "Welding standards documentation with AS/NZS 1554 compliance workflows",
      features: [
        "Welding standards documentation (can support AS/NZS 1554 compliance workflows)",
        "Material certification and mill test certificate management",
        "Welding procedure specification (WPS) documentation",
        "Non-destructive testing (NDT) data integration capabilities",
        "Structural certification tracking and documentation"
      ],
      solutions: [
        "SAP Business One + Welding Module + Standards Documentation + Crystal Reports",
        "Material Certification + Document Management",
        "WPS Module + Procedure Management",
        "NDT Integration + Testing APIs",
        "Structural Module + Certification Tracking"
      ]
    },
    {
      title: "Chemical Manufacturing & Processing",
      icon: "🧪",
      description: "Chemical compliance documentation with NICNAS requirements",
      features: [
        "Chemical compliance documentation (can be configured for NICNAS requirements)",
        "GHS classification and labeling workflow support",
        "Process safety documentation (similar to AS 61511 requirements)",
        "Environmental monitoring and emissions data tracking",
        "Dangerous goods classification and documentation"
      ],
      solutions: [
        "SAP Business One + Chemical Compliance Module + NICNAS Documentation",
        "GHS Module + Label Management + Perfion PIM",
        "Process Safety Module + Beas Manufacturing",
        "Environmental Module + IoT Sensors + Power BI",
        "Dangerous Goods Module + Classification Engine"
      ]
    },
    {
      title: "Food Equipment & Processing Machinery",
      icon: "🍽️",
      description: "Food-grade material certification tracking",
      features: [
        "Food-grade material certification tracking",
        "Sanitary design compliance documentation (can support AS 4674 workflows)",
        "Equipment validation documentation (similar to HACCP requirements)",
        "Maintenance scheduling with food safety protocol support",
        "Export certification documentation for equipment"
      ],
      solutions: [
        "SAP Business One + Material Certification + Food Grade Module",
        "Sanitary Design Module + Compliance Documentation",
        "Equipment Validation + HACCP Module",
        "Maintenance Module + Food Safety Protocols",
        "Export Certification + Document Management"
      ]
    },
    {
      title: "Electrical Equipment Manufacturing",
      icon: "🔌",
      description: "Electrical safety testing documentation with AS/NZS 61010 compliance",
      features: [
        "Electrical safety testing documentation (can track AS/NZS 61010 compliance)",
        "EMC compliance testing and certification record management",
        "Energy efficiency standards documentation support",
        "Product safety recall and corrective action management",
        "Technical file management for compliance documentation"
      ],
      solutions: [
        "SAP Business One + Electrical Safety Module + Testing Documentation + Crystal Reports",
        "EMC Module + Testing Integration + Certificate Management",
        "Energy Efficiency Module + Standards Documentation",
        "Recall Management + Corrective Action Module",
        "Technical File Module + Document Management + Perfion PIM"
      ]
    },
    {
      title: "Building Products & Materials",
      icon: "🧱",
      description: "Certification tracking workflows with CodeMark requirements",
      features: [
        "Certification tracking workflows (can be configured for CodeMark requirements)",
        "Building codes compliance documentation support",
        "Fire resistance testing data management (can track AS 1530 series)",
        "Environmental product declaration management",
        "Sustainability and green building documentation support"
      ],
      solutions: [
        "SAP Business One + CodeMark Module + Certification Tracking",
        "Building Codes Module + Compliance Documentation",
        "Fire Testing Module + Laboratory Integration",
        "EPD Module + Environmental Documentation",
        "Sustainability Module + Green Building Documentation + Power BI"
      ]
    }
  ]

  const manufacturingFeatures = [
    {
      title: "Quality Management Systems",
      description: "Comprehensive quality management with ISO compliance",
      icon: "📊",
      features: [
        "ISO 9001 quality management system implementation",
        "Statistical process control and quality monitoring",
        "Non-conformance tracking and corrective actions",
        "Quality audit management and documentation"
      ]
    },
    {
      title: "Production Planning & Control",
      description: "Advanced manufacturing planning and scheduling",
      icon: "📅",
      features: [
        "Master production scheduling and capacity planning",
        "Material requirements planning (MRP) and MRP II",
        "Shop floor control and work order management",
        "Production performance monitoring and analytics"
      ]
    },
    {
      title: "Compliance & Certification",
      description: "Australian standards and certification management",
      icon: "📋",
      features: [
        "Australian Standards (AS/NZS) compliance tracking",
        "Product certification and testing documentation",
        "Regulatory compliance monitoring and reporting",
        "Audit preparation and documentation management"
      ]
    },
    {
      title: "Supply Chain Integration",
      description: "End-to-end supply chain visibility and control",
      icon: "🔗",
      features: [
        "Supplier management and performance tracking",
        "Procurement automation and purchase order management",
        "Inventory optimization and demand forecasting",
        "Logistics coordination and delivery management"
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Manufacturing Industry Solutions"
        subtitle="Supporting Australian manufacturing standards and quality frameworks with comprehensive compliance management"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Manufacturing Assessment"
        ctaLink="/contact"
      />

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🏭 Manufacturing Industry Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Supporting Australian manufacturing standards and quality frameworks with comprehensive compliance management and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingFeatures.map((feature, index) => (
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
              Manufacturing Sub-Industries
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized solutions for each segment of the manufacturing industry with industry-specific compliance and quality management.
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

      {/* Manufacturing Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose ThynkProcess for Manufacturing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Quality Excellence
                </h3>
                <p className="text-[#334155] text-sm">
                  ISO 9001 implementation and continuous quality improvement
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
                  Australian Standards compliance and certification management
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Operational Efficiency
                </h3>
                <p className="text-[#334155] text-sm">
                  Advanced production planning and shop floor control
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Testing Integration
                </h3>
                <p className="text-[#334155] text-sm">
                  NATA-accredited testing integration and quality analytics
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
            Transform Your Manufacturing Operations
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get comprehensive digital transformation solutions designed specifically for Australia's manufacturing industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Manufacturing Assessment
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

export default Manufacturing

