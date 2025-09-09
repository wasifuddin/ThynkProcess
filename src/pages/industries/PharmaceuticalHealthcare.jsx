import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const PharmaceuticalHealthcare = () => {
  const subIndustries = [
    {
      title: "Pharmaceutical Manufacturing",
      icon: "💉",
      description: "GMP documentation workflows with TGA compliance",
      features: [
        "GMP documentation workflows (can be configured for TGA compliance)",
        "ARTG management and documentation support",
        "Pharmacovigilance and adverse event documentation",
        "Clinical trial material tracking and documentation",
        "Quality Person (QP) release documentation workflows"
      ],
      solutions: [
        "SAP Business One + TGA GMP Module + Validation Documentation + Crystal Reports",
        "ARTG Module + Registration Management + Document Control",
        "Pharmacovigilance Module + Adverse Event Tracking + Salesforce",
        "Clinical Trial Module + Material Tracking + Batch Control",
        "QP Release Module + Release Documentation + Approval Workflows"
      ]
    },
    {
      title: "Biotechnology & Medical Devices",
      icon: "🧬",
      description: "Medical device classification and documentation with TGA registration workflows",
      features: [
        "Medical device classification and documentation (can support TGA registration workflows)",
        "Quality management documentation (can be configured for ISO 13485 compliance)",
        "Clinical evaluation and post-market surveillance documentation",
        "Device identification (UDI) tracking and management",
        "International compliance documentation support"
      ],
      solutions: [
        "SAP Business One + Medical Device Module + TGA Registration + Classification Engine",
        "ISO 13485 Module + Quality Management + Document Control",
        "Clinical Evaluation Module + Surveillance Tracking + Power BI",
        "UDI Module + Device Tracking + Barcode Integration",
        "International Compliance Module + Multi-Jurisdiction Support"
      ]
    },
    {
      title: "Healthcare Distribution",
      icon: "🏥",
      description: "Pharmaceutical distribution documentation with PBS compliance workflows",
      features: [
        "Pharmaceutical distribution documentation (can support PBS compliance workflows)",
        "Controlled drug scheduling and tracking capabilities",
        "Trading terms and pricing management",
        "Cold chain distribution validation documentation",
        "Healthcare provider documentation and tracking"
      ],
      solutions: [
        "SAP Business One + PBS Module + Distribution Documentation + Pricing Integration",
        "Controlled Substance Module + Schedule Tracking + Chain of Custody",
        "Healthcare Pricing Module + Terms Management + Guild Integration",
        "Cold Chain Module + IoT Temperature + Validation Documentation",
        "Provider Module + Accreditation Tracking + Salesforce"
      ]
    },
    {
      title: "Contract Research & Testing",
      icon: "🔬",
      description: "Laboratory accreditation documentation support with NATA requirements",
      features: [
        "Laboratory accreditation documentation support (can be configured for NATA requirements)",
        "Good Laboratory Practice (GLP) documentation workflows",
        "Clinical trial monitoring and data integrity documentation",
        "Regulatory submission documentation support",
        "Quality assurance and audit documentation management"
      ],
      solutions: [
        "SAP Business One + NATA Module + Accreditation Documentation + Laboratory Management",
        "GLP Module + Practice Documentation + Quality Control",
        "Clinical Monitoring Module + Data Integrity + Audit Trail",
        "Regulatory Submission Module + Document Management + Workflow Engine",
        "QA Module + Audit Management + Crystal Reports"
      ]
    },
    {
      title: "Complementary Medicines",
      icon: "🌿",
      description: "Medicine registration documentation with listed/registered requirements",
      features: [
        "Medicine registration documentation (can support listed/registered requirements)",
        "GMP documentation for complementary medicines",
        "Advertising compliance and therapeutic claims documentation",
        "Import and export licensing documentation",
        "Pharmacovigilance documentation for natural products"
      ],
      solutions: [
        "SAP Business One + Complementary Medicine Module + Registration Documentation + TGA Integration",
        "Complementary GMP Module + Manufacturing Documentation",
        "Advertising Compliance Module + Claims Management",
        "Import/Export Module + Licensing Documentation + Customs Integration",
        "Natural Product PV Module + Adverse Event Tracking"
      ]
    }
  ]

  const healthcareFeatures = [
    {
      title: "TGA Compliance",
      description: "Comprehensive TGA compliance and regulatory management",
      icon: "📋",
      features: [
        "TGA registration and ARTG management",
        "GMP compliance and validation documentation",
        "Pharmacovigilance and adverse event reporting",
        "Regulatory submission and approval workflows"
      ]
    },
    {
      title: "Quality Management",
      description: "Advanced quality management and control systems",
      icon: "🏆",
      features: [
        "ISO 13485 quality management systems",
        "Good Manufacturing Practice (GMP) compliance",
        "Quality control and testing management",
        "Audit management and documentation"
      ]
    },
    {
      title: "Clinical & Research",
      description: "Clinical trial and research management",
      icon: "🔬",
      features: [
        "Clinical trial material tracking",
        "Research data management and integrity",
        "Post-market surveillance and monitoring",
        "Regulatory compliance and reporting"
      ]
    },
    {
      title: "Supply Chain",
      description: "Pharmaceutical supply chain and distribution",
      icon: "🚚",
      features: [
        "Cold chain management and validation",
        "Controlled substance tracking and compliance",
        "Distribution and logistics management",
        "Provider and customer management"
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Pharmaceutical & Healthcare Industry Solutions"
        subtitle="Supporting TGA compliance and Australian therapeutic goods requirements with comprehensive regulatory management"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Healthcare Assessment"
        ctaLink="/contact"
      />

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              💊 Pharmaceutical & Healthcare Industry Solutions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Supporting TGA compliance and Australian therapeutic goods requirements with comprehensive regulatory management and quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareFeatures.map((feature, index) => (
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
              Healthcare Sub-Industries
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized solutions for each segment of the pharmaceutical and healthcare industry with industry-specific compliance and regulatory management.
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

      {/* Healthcare Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose ThynkProcess for Pharmaceutical & Healthcare
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  TGA Compliance
                </h3>
                <p className="text-[#334155] text-sm">
                  Comprehensive TGA compliance and regulatory management
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Quality Excellence
                </h3>
                <p className="text-[#334155] text-sm">
                  ISO 13485 and GMP compliance management
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Clinical Research
                </h3>
                <p className="text-[#334155] text-sm">
                  Clinical trial and research management capabilities
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🚚</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Supply Chain
                </h3>
                <p className="text-[#334155] text-sm">
                  Pharmaceutical supply chain and distribution management
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
            Transform Your Healthcare Operations
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get comprehensive digital transformation solutions designed specifically for Australia's pharmaceutical and healthcare industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Healthcare Assessment
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

export default PharmaceuticalHealthcare
