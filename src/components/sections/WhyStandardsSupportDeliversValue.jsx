const WhyStandardsSupportDeliversValue = () => {
  const benefits = [
    {
      title: "Compliance Framework Support",
      icon: "✅",
      description: "Documentation assurance: Comprehensive documentation and traceability capabilities",
      features: [
        "Audit preparation: Complete audit trail and documentation management",
        "Risk management: Automated monitoring and alert capabilities",
        "Process efficiency: Streamlined compliance processes and reduced administrative overhead"
      ],
      solutions: "SAP Business One + Document Management + Audit Trail + Crystal Reports, Audit Module + Document Control + Compliance Tracking, Risk Management + Alert System + Power BI, Workflow Engine + Process Automation + B1 Usability Package"
    },
    {
      title: "Market Readiness",
      icon: "✅",
      description: "Export documentation: Automated generation of export documentation",
      features: [
        "Certification tracking: Comprehensive tracking of product certifications and compliance",
        "International standards: Can be configured for international standard requirements",
        "Supply chain transparency: Complete traceability capabilities for verification"
      ],
      solutions: "SAP Business One + Export Module + Document Automation + Crystal Reports, Certification Module + Tracking System + Document Management, International Standards Module + Multi-Jurisdiction Support, Traceability Module + Supply Chain Tracking + Power BI"
    },
    {
      title: "Quality Management",
      icon: "✅",
      description: "Testing integration: Laboratory data integration and management capabilities",
      features: [
        "Quality systems: ISO-compliant quality management system support",
        "Continuous improvement: Statistical analysis and trending for quality enhancement",
        "Customer assurance: Demonstrated compliance capabilities building customer confidence"
      ],
      solutions: "SAP Business One + Laboratory APIs + Data Integration + Quality Management, ISO Module + Quality Management + Document Control, Power BI + Statistical Analysis + Quality Analytics, Compliance Dashboard + Customer Portal + Salesforce"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Why Standards Support Integration Delivers Value
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Our integrated approach to standards and compliance support delivers measurable business value and competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="text-3xl mr-4">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#334155] mb-4">
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-[#334155]">
                    <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-[#D8F4FA] rounded-lg">
                <p className="text-xs text-[#0E1A6A] font-semibold">
                  <strong>Solutions:</strong> {benefit.solutions}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyStandardsSupportDeliversValue
