import { Link } from 'react-router-dom'

const ResourceLibrary = () => {
  const erpGuides = [
    {
      title: "SAP Business One Buyers Guide",
      description: "A complete roadmap to selecting, evaluating, and implementing SAP B1 for SMEs.",
      link: "/resources/download/sap-b1-buyers-guide"
    },
    {
      title: "Salesforce CRM Essentials for Australian Businesses",
      description: "Learn how to modernize sales, service, and marketing with automation.",
      link: "/resources/download/salesforce-essentials"
    },
    {
      title: "ERP Readiness Checklist",
      description: "A 40-point checklist to assess if your business is ready for ERP.",
      link: "/resources/download/erp-readiness-checklist"
    },
    {
      title: "Digital Transformation Framework",
      description: "Strategy-to-execution blueprint to drive scalable, measurable business outcomes.",
      link: "/resources/download/digital-transformation-framework"
    },
    {
      title: "CRM vs ERP: Integration Best Practices",
      description: "How to seamlessly connect customer-facing and back-office systems.",
      link: "/resources/download/crm-erp-integration"
    },
    {
      title: "Cloud vs On-Premise: Decision Framework",
      description: "Comprehensive guide to choosing the right deployment model for your business.",
      link: "/resources/download/cloud-vs-onpremise"
    },
    {
      title: "ERP Implementation Timeline & Milestones",
      description: "Detailed project timeline with critical checkpoints and deliverables.",
      link: "/resources/download/erp-implementation-timeline"
    },
    {
      title: "Change Management for ERP Success",
      description: "Proven strategies for user adoption and organizational transformation.",
      link: "/resources/download/change-management"
    }
  ]

  const industryToolkits = [
    {
      title: "Food & Beverage ERP Toolkit",
      icon: "🥫",
      description: "Batch traceability, HACCP workflows, and quality dashboards for compliance.",
      includes: "HACCP checklist, batch tracking templates, quality control workflows, compliance reporting formats",
      link: "/resources/download/food-beverage-toolkit"
    },
    {
      title: "Wholesale Distribution Toolkit",
      icon: "📦",
      description: "Inventory control templates, WMS workflows, and order fulfillment optimizers.",
      includes: "Inventory templates, EDI setup guides, 3PL integration checklists, customer portal workflows",
      link: "/resources/download/distribution-toolkit"
    },
    {
      title: "Manufacturing (Discrete & Process) Toolkit",
      icon: "🏭",
      description: "MRP planning sheets, BOM templates, shop floor tracking dashboards.",
      includes: "MRP configuration guides, BOM templates, shop floor dashboards, quality control checklists",
      link: "/resources/download/manufacturing-toolkit"
    },
    {
      title: "Retail & eCommerce Toolkit",
      icon: "🛍",
      description: "POS sync flows, inventory-to-Shopify mappings, Perfion PIM guides.",
      includes: "E-commerce integration templates, POS setup guides, inventory sync workflows, customer journey maps",
      link: "/resources/download/retail-ecommerce-toolkit"
    },
    {
      title: "Agribusiness Toolkit",
      icon: "🌾",
      description: "Grower payment workflows, export documentation, lot control sheets.",
      includes: "Grower management templates, export documentation guides, traceability workflows, compliance checklists",
      link: "/resources/download/agribusiness-toolkit"
    },
    {
      title: "Pharmaceutical & Chemical Toolkit",
      icon: "💊",
      description: "TGA/GMP-ready checklists, serialization flowcharts, batch QC templates.",
      includes: "TGA compliance guides, GMP workflows, serialization templates, quality control procedures",
      link: "/resources/download/pharmaceutical-toolkit"
    },
    {
      title: "Professional Services Toolkit",
      icon: "🏢",
      description: "Time tracking templates, billing automations, and utilization dashboards.",
      includes: "Project templates, time tracking workflows, billing automation guides, utilization analytics",
      link: "/resources/download/professional-services-toolkit"
    }
  ]

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            📚 Resource Library
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Comprehensive guides, toolkits, and resources to support your digital transformation journey.
          </p>
        </div>

        {/* ERP & CRM Guides */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            ERP & CRM Guides
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {erpGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📋</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {guide.title}
                    </h4>
                    <p className="text-[#334155] mb-4 text-sm">
                      {guide.description}
                    </p>
                    <Link 
                      to={guide.link}
                      className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                    >
                      Download PDF
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry-Specific Toolkits */}
        <div>
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            🧩 Industry-Specific Toolkits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryToolkits.map((toolkit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{toolkit.icon}</div>
                  <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A]">
                    {toolkit.title}
                  </h4>
                </div>
                <p className="text-[#334155] mb-4 text-sm">
                  {toolkit.description}
                </p>
                <div className="mb-4">
                  <h5 className="font-semibold text-[#0F79B9] mb-2 text-sm">Includes:</h5>
                  <p className="text-[#334155] text-xs">
                    {toolkit.includes}
                  </p>
                </div>
                <Link 
                  to={toolkit.link}
                  className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                >
                  Download Toolkit
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResourceLibrary
