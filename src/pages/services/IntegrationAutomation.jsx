import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const IntegrationAutomation = () => {
  const integrationServices = [
    {
      title: "E-commerce Integration",
      description: "Platform connectivity with real-time sync",
      icon: "🛒",
      features: [
        "Platform Connectivity: Shopify, WooCommerce, Magento integration with real-time sync",
        "Order Automation: Automated order processing from web to fulfillment",
        "Inventory Synchronization: Real-time stock updates across all channels",
        "Customer Unification: Single customer view across web and ERP systems"
      ],
      approach: "API-first architecture with real-time data flow"
    },
    {
      title: "Financial System Integration",
      description: "Banking connectivity and payment processing",
      icon: "💰",
      features: [
        "Banking Connectivity: Acassia Bank Feeds for automated reconciliation",
        "Payment Processing: Stripe, PayWay, and other payment gateway integration",
        "Multi-Currency: Foreign exchange automation and currency management",
        "Compliance Automation: GST, BAS, and ATO reporting automation"
      ],
      approach: "Secure financial data integration with compliance focus"
    },
    {
      title: "Business Application Integration",
      description: "Connect CRM, ERP, and other business systems",
      icon: "🔗",
      features: [
        "CRM-ERP Connectivity: Salesforce and SAP Business One bidirectional sync",
        "Document Management: SharePoint, OneDrive integration with workflow automation",
        "HR & Payroll: Employee data synchronization and payroll automation",
        "Logistics & Shipping: 3PL, courier, and freight provider integration"
      ],
      approach: "Comprehensive monitoring with enterprise-grade security"
    }
  ]

  const automationServices = [
    {
      title: "Financial Process Automation",
      description: "Automate accounting and financial workflows",
      icon: "💳",
      features: [
        "Accounts Payable: Invoice processing, approval workflows, and payment automation",
        "Accounts Receivable: Automated invoicing, payment processing, and collections",
        "Bank Reconciliation: Automated matching and exception handling",
        "Financial Reporting: Automated report generation and distribution"
      ],
      focus: "Eliminate manual tasks and reduce processing time by 60-80%"
    },
    {
      title: "Sales & Marketing Automation",
      description: "Streamline sales and marketing processes",
      icon: "📢",
      features: [
        "Lead Processing: Automated lead qualification, scoring, and assignment",
        "Quote Generation: Automated pricing, approval workflows, and document generation",
        "Order Processing: End-to-end automation from quote to delivery",
        "Customer Communication: Automated email campaigns and follow-up sequences"
      ],
      focus: "Accelerate sales cycles and improve conversion rates"
    },
    {
      title: "Operations Automation",
      description: "Automate operational processes and workflows",
      icon: "⚙️",
      features: [
        "Inventory Management: Automated replenishment, cycle counting, and optimization",
        "Production Planning: Automated scheduling, material allocation, and capacity optimization",
        "Quality Control: Automated inspection workflows, non-conformance tracking, and corrective actions",
        "Warehouse Operations: Automated picking, packing, and shipping processes"
      ],
      focus: "Optimize operational efficiency and reduce manual errors"
    }
  ]

  const ediServices = [
    {
      title: "Retail Partner Integration",
      description: "Seamless B2B transaction automation with major trading partners",
      icon: "🏪",
      features: [
        "Major Retailers: Coles, Woolworths, Bunnings, Total Tools, IGA connectivity",
        "Document Automation: ASN, PO, Invoice, and delivery confirmation processing",
        "Compliance Management: GS1, SSCC, and retailer-specific requirement adherence",
        "Performance Monitoring: Real-time transaction tracking and exception management"
      ],
      expertise: "Deep experience with Australian retail and distribution requirements"
    },
    {
      title: "EDI Platform Services",
      description: "Comprehensive EDI platform integration and management",
      icon: "📋",
      features: [
        "Platform Integration: Pacific Commerce, TrueCommerce, SPS Commerce, MessageXchange",
        "Format Support: EDIFACT, X12, XML, and flat file format processing",
        "Custom Mapping: Tailored data transformation and validation rules",
        "Error Handling: Automated retry logic, exception management, and alerting"
      ],
      performance: "99.9% transaction success rate with automated error recovery"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Integration & Automation Services"
        subtitle="Connect systems and automate processes for operational efficiency"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Get Integration Assessment"
        ctaLink="/contact"
      />

      {/* System Integration Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🔗 System Integration Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Seamless connectivity between business applications with real-time data synchronization and enterprise-grade security.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {integrationServices.map((service, index) => (
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
                    <h4 className="font-semibold text-[#0F79B9] mb-3">Integration Features:</h4>
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
                    <h4 className="font-semibold text-[#0F79B9] mb-2">Approach:</h4>
                    <p className="text-[#334155] text-sm mb-4">{service.approach}</p>
                    <div className="text-xs text-[#64748B]">
                      <p><strong>Monitoring:</strong> Comprehensive dashboards for integration health and performance</p>
                      <p><strong>Security:</strong> Enterprise-grade security with audit trails and compliance</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Explore Integration
                  </Link>
                  <Link 
                    to="/contact"
                    className="flex-1 border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Request Assessment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Automation Services */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Process Automation Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Intelligent automation for operational efficiency with focus on eliminating manual tasks and reducing processing time.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {automationServices.map((service, index) => (
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
                    <h4 className="font-semibold text-[#0F79B9] mb-3">Automation Features:</h4>
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
                    <h4 className="font-semibold text-[#0F79B9] mb-2">Focus:</h4>
                    <p className="text-[#334155] text-sm mb-4">{service.focus}</p>
                    <div className="text-xs text-[#64748B]">
                      <p><strong>ROI:</strong> Typical payback period of 6-12 months through efficiency gains</p>
                      <p><strong>Improvement:</strong> Ongoing optimization and enhancement of automated processes</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Explore Automation
                  </Link>
                  <Link 
                    to="/contact"
                    className="flex-1 border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Request Assessment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDI & B2B Integration Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              EDI & B2B Integration Services
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Seamless B2B transaction automation with major trading partners and comprehensive EDI platform services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ediServices.map((service, index) => (
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

                <div className="mb-6">
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

                <div className="mb-6">
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Key Benefits:</h4>
                  <p className="text-[#334155] text-sm mb-2">{service.expertise || service.performance}</p>
                  <div className="text-xs text-[#64748B]">
                    <p><strong>Compliance:</strong> Full audit trails and regulatory compliance documentation</p>
                  </div>
                </div>

                <Link 
                  to="/contact"
                  className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                >
                  Request EDI Consultation
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Connect and Automate Your Systems
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how our integration and automation services can streamline your operations and eliminate manual processes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Integration Assessment
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

export default IntegrationAutomation
