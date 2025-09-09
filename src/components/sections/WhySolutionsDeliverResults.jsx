const WhySolutionsDeliverResults = () => {
  const benefits = [
    {
      title: "Business-First Approach",
      icon: "✅",
      description: "Focus on business outcomes, not just technology features",
      features: [
        "Proven methodologies based on 50+ successful implementations",
        "Industry-specific best practices and templates",
        "Change management and user adoption strategies"
      ]
    },
    {
      title: "Integrated Architecture",
      icon: "✅",
      description: "Seamless connectivity between all solution components",
      features: [
        "Real-time data flow and synchronization",
        "Unified user experience across platforms",
        "Scalable architecture for future growth"
      ]
    },
    {
      title: "Australian Expertise",
      icon: "✅",
      description: "Deep understanding of Australian business requirements",
      features: [
        "Local compliance and regulatory knowledge",
        "Responsive support during Australian business hours",
        "Strong relationships with local technology ecosystem"
      ]
    },
    {
      title: "Proven Results",
      icon: "✅",
      description: "Measurable outcomes that drive business success",
      features: [
        "90% of clients achieve efficiency gains within 6 months",
        "Average 40% reduction in processing time",
        "25% improvement in operational accuracy",
        "100% success rate in achieving business objectives"
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            💡 Why Our Solutions Deliver Results
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Our approach combines deep technical expertise with business acumen to deliver solutions that drive real, measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="flex items-start mb-4">
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
              
              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-[#334155]">
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
  )
}

export default WhySolutionsDeliverResults
