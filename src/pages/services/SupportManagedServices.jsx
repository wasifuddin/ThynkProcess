import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const SupportManagedServices = () => {
  const supportLevels = [
    {
      title: "Bronze Support",
      description: "Business hours assistance with basic troubleshooting",
      icon: "🥉",
      features: [
        "Business hours assistance",
        "Monthly health checks",
        "Basic troubleshooting",
        "Email and phone support",
        "Standard response times"
      ],
      responseTime: "24-hour response for standard issues",
      pricing: "Cost-effective support for small businesses"
    },
    {
      title: "Silver Support",
      description: "Extended hours coverage with priority response",
      icon: "🥈",
      features: [
        "Extended hours coverage",
        "Priority response",
        "Quarterly reviews",
        "Performance optimization",
        "Proactive monitoring"
      ],
      responseTime: "8-hour response for standard issues",
      pricing: "Professional support for growing businesses"
    },
    {
      title: "Gold Support",
      description: "24/7 emergency support with dedicated account management",
      icon: "🥇",
      features: [
        "24/7 emergency support",
        "Dedicated account management",
        "Proactive monitoring",
        "Strategic planning",
        "Priority escalation"
      ],
      responseTime: "4-hour response for critical issues",
      pricing: "Premium support for mission-critical systems"
    }
  ]

  const managedServices = [
    {
      title: "System Administration Services",
      description: "Complete operational management of business-critical systems",
      icon: "💻",
      features: [
        "Database Management: Backup, recovery, maintenance, and optimization",
        "Security Administration: User management, access control, and compliance monitoring",
        "Infrastructure Management: Server management, capacity planning, and disaster recovery",
        "Vendor Coordination: Third-party relationship management and support escalation"
      ],
      value: "Reduced IT overhead with enterprise-grade system management"
    },
    {
      title: "Business Process Management",
      description: "Optimize workflows and ensure compliance",
      icon: "⚙️",
      features: [
        "Workflow Optimization: Process analysis and improvement recommendations",
        "Change Management: System updates, configuration changes, and testing coordination",
        "Compliance Management: Regulatory adherence monitoring and documentation",
        "Performance Monitoring: KPI tracking and business value measurement"
      ],
      value: "Continuous improvement and enhancement initiatives"
    },
    {
      title: "Strategic Technology Management",
      description: "Technology roadmap and investment planning",
      icon: "🎯",
      features: [
        "Roadmap Planning: Technology evolution and upgrade planning",
        "Enhancement Planning: Business-driven improvements and feature prioritization",
        "Investment Analysis: ROI evaluation and technology investment recommendations",
        "Stakeholder Communication: Regular reporting and strategic planning sessions"
      ],
      value: "Dedicated team acting as extension of your IT department"
    }
  ]

  const proactiveServices = [
    {
      title: "System Monitoring",
      description: "Real-time alerts and performance tracking",
      icon: "📊",
      features: [
        "Real-time alerts and performance tracking",
        "Automated issue detection and resolution",
        "Performance analytics and reporting",
        "Capacity planning and optimization"
      ]
    },
    {
      title: "Preventive Maintenance",
      description: "Regular optimization and system tuning",
      icon: "🔧",
      features: [
        "Regular optimization and system tuning",
        "Security updates and patches",
        "Performance optimization",
        "System health assessments"
      ]
    },
    {
      title: "User Support",
      description: "Helpdesk services and training",
      icon: "👥",
      features: [
        "Helpdesk services and training refreshers",
        "Adoption improvement programs",
        "User documentation and guides",
        "Training and certification support"
      ]
    },
    {
      title: "Documentation",
      description: "System documentation and user guides",
      icon: "📚",
      features: [
        "System documentation maintenance",
        "User guide updates",
        "Process documentation",
        "Knowledge base management"
      ]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Support & Managed Services"
        subtitle="Comprehensive support for system reliability and business continuity"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Support Proposal"
        ctaLink="/contact"
      />

      {/* Technical Support Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🛠️ Technical Support Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Multi-tier support for optimal system performance with guaranteed response times and proactive monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{level.icon}</div>
                  <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                    {level.title}
                  </h3>
                  <p className="text-[#334155] text-sm">
                    {level.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#0F79B9] mb-3">Features:</h4>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Response Time:</h4>
                  <p className="text-[#334155] text-sm mb-2">{level.responseTime}</p>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Pricing:</h4>
                  <p className="text-[#334155] text-sm">{level.pricing}</p>
                </div>

                <Link 
                  to="/contact"
                  className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors block"
                >
                  Get {level.title} Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proactive Management Services */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Proactive Management Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Prevent issues before they impact your business with comprehensive monitoring and maintenance services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {proactiveServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#334155] text-sm mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="text-[#334155] space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Managed Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Complete operational management of business-critical systems with dedicated team support.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {managedServices.map((service, index) => (
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
                    <h4 className="font-semibold text-[#0F79B9] mb-2">Value Proposition:</h4>
                    <p className="text-[#334155] text-sm mb-4">{service.value}</p>
                    <div className="text-xs text-[#64748B]">
                      <p><strong>Service Model:</strong> Dedicated team acting as extension of your IT department</p>
                      <p><strong>Continuous Improvement:</strong> Regular optimization and enhancement initiatives</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Request Service Assessment
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

      {/* Performance Optimization Services */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Performance Optimization Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Ensure your systems perform at peak efficiency with comprehensive optimization and monitoring services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Health Assessments
              </h3>
              <p className="text-[#334155] text-sm">
                Comprehensive system audits and optimization recommendations
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Database Tuning
              </h3>
              <p className="text-[#334155] text-sm">
                Query optimization, index management, and performance enhancement
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                User Adoption Analysis
              </h3>
              <p className="text-[#334155] text-sm">
                Usage analytics and improvement recommendations
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Capacity Planning
              </h3>
              <p className="text-[#334155] text-sm">
                Growth planning and infrastructure scaling recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Service Guarantees
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Response Time
                </h3>
                <p className="text-[#334155] text-sm">
                  4-hour response for critical issues, 24-hour for standard issues
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Reporting
                </h3>
                <p className="text-[#334155] text-sm">
                  Monthly health reports with KPIs and recommendations
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Guarantee
                </h3>
                <p className="text-[#334155] text-sm">
                  99.5% system uptime with proactive issue resolution
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
            Ensure System Reliability and Performance
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Get comprehensive support and managed services to keep your systems running smoothly and efficiently.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Support Proposal
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

export default SupportManagedServices
