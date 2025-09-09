import { Link } from 'react-router-dom'

const AIAutomationResourcePack = () => {
  const aiResources = [
    {
      title: "Top 10 Business Processes to Automate in SAP B1",
      description: "Identify high-impact automation opportunities in your ERP system.",
      link: "/resources/download/automation-processes",
      linkText: "Download PDF"
    },
    {
      title: "AI in ERP: Forecasting, Insights & Efficiency",
      description: "Comprehensive guide to AI capabilities in modern ERP systems.",
      link: "/resources/access/ai-erp-guide",
      linkText: "Access Brief"
    },
    {
      title: "Automation as a Service (AaaS) Overview",
      description: "How to scale operations without adding headcount through intelligent automation.",
      link: "/resources/download/automation-service",
      linkText: "Download Guide"
    },
    {
      title: "Chatbots & Workflow Triggers in Salesforce",
      description: "Implement intelligent automation in your CRM processes.",
      link: "/resources/watch/salesforce-automation",
      linkText: "Watch Demo"
    },
    {
      title: "Smart Alerts & Exception Reports in Power BI",
      description: "Create proactive analytics that notify you of critical business events.",
      link: "/resources/view/powerbi-alerts",
      linkText: "View Examples"
    },
    {
      title: "AI-Enabled Procurement & Inventory Automation",
      description: "Leverage artificial intelligence for smarter purchasing and inventory management.",
      link: "/resources/download/ai-procurement",
      linkText: "Download Whitepaper"
    },
    {
      title: "Machine Learning for Demand Forecasting",
      description: "Improve inventory planning with predictive analytics and machine learning.",
      link: "/resources/download/ml-forecasting",
      linkText: "Download Guide"
    },
    {
      title: "Process Mining for ERP Optimization",
      description: "Discover hidden inefficiencies in your business processes using process mining.",
      link: "/resources/access/process-mining",
      linkText: "Access Report"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🤖 AI & Automation Resource Pack
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Discover automation strategies, AI implementation guides, and intelligent process optimization to transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiResources.map((resource, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="text-2xl mr-4">📋</div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-[#334155] mb-4 text-sm">
                    {resource.description}
                  </p>
                  <Link 
                    to={resource.link}
                    className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                  >
                    {resource.linkText}
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
    </section>
  )
}

export default AIAutomationResourcePack
