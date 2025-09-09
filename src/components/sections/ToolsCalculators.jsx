import { Link } from 'react-router-dom'

const ToolsCalculators = () => {
  const assessmentTools = [
    {
      title: "ERP Readiness Assessment",
      description: "Evaluate your organization's readiness for ERP implementation with our comprehensive 40-point assessment.",
      duration: "10 minutes",
      output: "Instant results with recommendations",
      link: "/tools/erp-readiness-assessment"
    },
    {
      title: "CRM Maturity Assessment",
      description: "Assess your current CRM capabilities and identify improvement opportunities.",
      duration: "8 minutes",
      output: "Personalized improvement roadmap",
      link: "/tools/crm-maturity-assessment"
    },
    {
      title: "Analytics Maturity Assessment",
      description: "Evaluate your business intelligence capabilities and identify gaps.",
      duration: "12 minutes",
      output: "Custom analytics roadmap",
      link: "/tools/analytics-maturity-assessment"
    },
    {
      title: "Integration Complexity Assessment",
      description: "Understand the complexity of your system integration requirements.",
      duration: "15 minutes",
      output: "Detailed integration strategy",
      link: "/tools/integration-complexity-assessment"
    }
  ]

  const roiCalculators = [
    {
      title: "ERP ROI Calculator",
      description: "Calculate the potential return on investment for your ERP implementation.",
      inputs: "Company size, industry, current challenges",
      output: "5-year ROI projection",
      link: "/tools/erp-roi-calculator"
    },
    {
      title: "CRM ROI Calculator",
      description: "Estimate the financial impact of implementing Salesforce CRM.",
      inputs: "Sales team size, current conversion rates",
      output: "Revenue impact analysis",
      link: "/tools/crm-roi-calculator"
    },
    {
      title: "Automation ROI Calculator",
      description: "Quantify the savings from process automation initiatives.",
      inputs: "Process volume, labor costs, error rates",
      output: "Cost savings analysis",
      link: "/tools/automation-roi-calculator"
    },
    {
      title: "BI ROI Calculator",
      description: "Measure the value of implementing business intelligence solutions.",
      inputs: "Decision complexity, reporting overhead",
      output: "Productivity gains analysis",
      link: "/tools/bi-roi-calculator"
    }
  ]

  const planningTools = [
    {
      title: "Implementation Planning Template",
      description: "Comprehensive project planning template for ERP implementations.",
      format: "Excel",
      includes: "Timeline, resources, milestones, risks",
      link: "/tools/download/implementation-planning-template"
    },
    {
      title: "Data Migration Checklist",
      description: "Step-by-step checklist for successful data migration projects.",
      format: "PDF",
      includes: "Validation steps, testing procedures, rollback plans",
      link: "/tools/download/data-migration-checklist"
    },
    {
      title: "Go-Live Readiness Checklist",
      description: "Ensure your team is ready for ERP go-live with our comprehensive checklist.",
      format: "PDF",
      includes: "Training validation, system checks, support procedures",
      link: "/tools/download/golive-readiness-checklist"
    },
    {
      title: "Post-Implementation Review Template",
      description: "Evaluate project success and identify optimization opportunities.",
      format: "Excel",
      includes: "KPI tracking, user feedback, improvement plans",
      link: "/tools/download/post-implementation-template"
    }
  ]

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🛠️ Tools & Calculators
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Interactive tools and calculators to help you assess, plan, and measure your digital transformation success.
          </p>
        </div>

        {/* Assessment Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Assessment Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">⚖️</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {tool.title}
                    </h4>
                    <p className="text-[#334155] mb-3 text-sm">
                      {tool.description}
                    </p>
                    <div className="text-xs text-[#64748B] mb-4">
                      <p><strong>Duration:</strong> {tool.duration}</p>
                      <p><strong>Output:</strong> {tool.output}</p>
                    </div>
                    <Link 
                      to={tool.link}
                      className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                    >
                      Take Assessment
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

        {/* ROI Calculators */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            ROI Calculators
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {roiCalculators.map((calculator, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">💰</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {calculator.title}
                    </h4>
                    <p className="text-[#334155] mb-3 text-sm">
                      {calculator.description}
                    </p>
                    <div className="text-xs text-[#64748B] mb-4">
                      <p><strong>Inputs:</strong> {calculator.inputs}</p>
                      <p><strong>Output:</strong> {calculator.output}</p>
                    </div>
                    <Link 
                      to={calculator.link}
                      className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                    >
                      Calculate ROI
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

        {/* Planning Tools */}
        <div>
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Planning Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {planningTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📋</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {tool.title}
                    </h4>
                    <p className="text-[#334155] mb-3 text-sm">
                      {tool.description}
                    </p>
                    <div className="text-xs text-[#64748B] mb-4">
                      <p><strong>Format:</strong> {tool.format}</p>
                      <p><strong>Includes:</strong> {tool.includes}</p>
                    </div>
                    <Link 
                      to={tool.link}
                      className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                    >
                      Download Template
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
      </div>
    </section>
  )
}

export default ToolsCalculators
