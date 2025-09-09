import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const StrategicAdvisory = () => {
  const advisoryServices = [
    {
      title: "Fractional CIO Services",
      description: "Technology strategy and digital transformation leadership",
      icon: "👔",
      features: [
        "Technology Strategy: IT roadmap development aligned with business objectives",
        "Investment Planning: Technology budget optimization and prioritization",
        "Vendor Management: Strategic relationships and contract negotiation",
        "Digital Transformation: Innovation strategy and competitive advantage development"
      ],
      experience: "Senior executives with 20+ years of technology leadership"
    },
    {
      title: "Executive Advisory Services",
      description: "Board-level technology strategy and risk management",
      icon: "🎯",
      features: [
        "Board Presentations: Technology strategy communication and investment justification",
        "Risk Management: Cybersecurity, compliance, and business continuity planning",
        "Team Development: IT capability building and skill development programs",
        "Change Leadership: Organizational transformation and adoption strategies"
      ],
      focus: "Technology strategy aligned with business outcomes"
    },
    {
      title: "Business Transformation Services",
      description: "Process optimization and organizational design",
      icon: "🔄",
      features: [
        "Process Reengineering: Business process optimization and automation opportunities",
        "Organizational Design: Technology-enabled organizational structure optimization",
        "Performance Measurement: KPI development and value realization tracking",
        "Innovation Planning: Emerging technology evaluation and adoption strategies"
      ],
      partnership: "Ongoing relationship with quarterly strategic reviews"
    }
  ]

  const specializedServices = [
    {
      title: "Compliance & Regulatory Services",
      description: "Ensure adherence to Australian and international standards",
      icon: "📋",
      features: [
        "Industry Compliance Services: Food Safety, Pharmaceutical, Manufacturing, Financial",
        "Standards Implementation: Australian Standards, ISO certification, Environmental, Safety",
        "Audit & Documentation: Comprehensive documentation and process validation",
        "Training & Certification: Staff training and competency management"
      ],
      expertise: "Deep knowledge of Australian regulatory requirements",
      successRate: "100% audit success rate for implemented compliance frameworks"
    },
    {
      title: "Project Management Services",
      description: "Professional project leadership for complex implementations",
      icon: "📊",
      features: [
        "Certified Project Management: Agile, Waterfall, and hybrid approaches",
        "Specialized Project Types: Multi-Site Rollouts, Complex Integrations, Digital Transformation",
        "Project Support Services: PMO establishment, Resource Management, Vendor Management",
        "Knowledge Transfer: Documentation and training program delivery"
      ],
      certification: "PMI-certified project managers with industry expertise",
      trackRecord: "100% on-time delivery rate with scope and budget adherence"
    }
  ]

  const serviceSelection = [
    {
      title: "Choose by Implementation Phase",
      phases: [
        {
          name: "Pre-Implementation Services",
          services: [
            "Business assessment and readiness evaluation",
            "Solution design and architecture planning",
            "Vendor selection and procurement support",
            "Project planning and resource allocation"
          ]
        },
        {
          name: "Implementation Services",
          services: [
            "Platform deployment and configuration",
            "Data migration and system integration",
            "User training and change management",
            "Testing and quality assurance"
          ]
        },
        {
          name: "Post-Implementation Services",
          services: [
            "System optimization and performance tuning",
            "User adoption support and training",
            "Ongoing maintenance and support",
            "Continuous improvement and enhancement"
          ]
        }
      ]
    },
    {
      title: "Choose by Business Need",
      needs: [
        {
          name: "New System Implementation",
          services: [
            "Full implementation services with project management",
            "Data migration and integration services",
            "User training and change management",
            "Go-live support and stabilization"
          ]
        },
        {
          name: "System Optimization",
          services: [
            "Performance tuning and optimization",
            "Process improvement and automation",
            "User adoption enhancement",
            "Advanced feature implementation"
          ]
        },
        {
          name: "Ongoing Support",
          services: [
            "Technical support and maintenance",
            "Managed services and administration",
            "Strategic advisory and planning",
            "Compliance and regulatory support"
          ]
        }
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Strategic Advisory Services"
        subtitle="Executive-level guidance for technology strategy and digital transformation"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Request Strategic Consultation"
        ctaLink="/contact"
      />

      {/* Strategic Advisory Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Strategic Advisory Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Executive-level guidance for technology strategy and digital transformation with senior leadership expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {advisoryServices.map((service, index) => (
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
                    <h4 className="font-semibold text-[#0F79B9] mb-2">Key Benefits:</h4>
                    <p className="text-[#334155] text-sm mb-4">{service.experience || service.focus || service.partnership}</p>
                    <div className="text-xs text-[#64748B]">
                      <p><strong>Experience Level:</strong> Senior executives with 20+ years of technology leadership</p>
                      <p><strong>Business Focus:</strong> Technology strategy aligned with business outcomes</p>
                      <p><strong>Partnership:</strong> Ongoing relationship with quarterly strategic reviews</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Request Strategic Consultation
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

      {/* Specialized Services */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              ⚙️ Specialized Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Industry-specific and compliance-focused services with deep regulatory expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
                    <h4 className="font-semibold text-[#0F79B9] mb-2">Key Benefits:</h4>
                    <p className="text-[#334155] text-sm mb-2">{service.expertise || service.certification}</p>
                    <p className="text-[#334155] text-sm mb-4">{service.successRate || service.trackRecord}</p>
                    <div className="text-xs text-[#64748B]">
                      <p><strong>Expertise:</strong> Deep knowledge of Australian regulatory requirements</p>
                      <p><strong>Success Rate:</strong> 100% audit success rate for implemented compliance frameworks</p>
                      <p><strong>Documentation:</strong> Complete audit trails and compliance documentation</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Request Assessment
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

      {/* Service Selection Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🎯 Service Selection Guide
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Choose the right services based on your implementation phase, business needs, and organization size.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {serviceSelection.map((category, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-8">
                <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {(category.phases || category.needs).map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-semibold text-[#0F79B9] mb-3">{item.name}</h4>
                      <ul className="text-[#334155] space-y-1 text-sm">
                        {item.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start">
                            <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services Deliver Success */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              💡 Why Our Services Deliver Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Proven Methodology
                </h3>
                <ul className="text-[#334155] text-sm space-y-1 text-left">
                  <li>• 20+ Years Experience</li>
                  <li>• Industry Expertise</li>
                  <li>• Certified Professionals</li>
                  <li>• Best Practices</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Business-Focused Approach
                </h3>
                <ul className="text-[#334155] text-sm space-y-1 text-left">
                  <li>• Outcome Oriented</li>
                  <li>• Change Management</li>
                  <li>• ROI Focus</li>
                  <li>• Partnership</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🇦🇺</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Australian Excellence
                </h3>
                <ul className="text-[#334155] text-sm space-y-1 text-left">
                  <li>• Local Team</li>
                  <li>• Regulatory Knowledge</li>
                  <li>• Business Culture</li>
                  <li>• Responsive Support</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Quality Assurance
                </h3>
                <ul className="text-[#334155] text-sm space-y-1 text-left">
                  <li>• Fixed-Price Delivery</li>
                  <li>• Milestone Management</li>
                  <li>• Quality Gates</li>
                  <li>• Satisfaction Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Transform Your Business with Strategic Guidance
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get executive-level advisory services to guide your technology strategy and digital transformation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request Strategic Consultation
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Service Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StrategicAdvisory
