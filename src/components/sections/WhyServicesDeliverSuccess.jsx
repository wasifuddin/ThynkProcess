const WhyServicesDeliverSuccess = () => {
  const benefits = [
    {
      title: "Proven Methodology",
      icon: "✅",
      description: "20+ Years Experience: Refined delivery methodology with 100% success rate",
      features: [
        "Industry Expertise: Deep knowledge across Australian sectors and regulations",
        "Certified Professionals: Platform-certified consultants with advanced expertise",
        "Best Practices: Proven templates and frameworks for accelerated delivery"
      ]
    },
    {
      title: "Business-Focused Approach",
      icon: "✅",
      description: "Outcome Oriented: Services designed around business results, not just technology",
      features: [
        "Change Management: Comprehensive user adoption and organizational change support",
        "ROI Focus: Clear value measurement and continuous optimization",
        "Partnership: Long-term relationship focused on sustainable success"
      ]
    },
    {
      title: "Australian Excellence",
      icon: "✅",
      description: "Local Team: Melbourne-based consultants with national coverage",
      features: [
        "Regulatory Knowledge: Deep understanding of Australian compliance requirements",
        "Business Culture: Understanding of Australian business practices and expectations",
        "Responsive Support: Local time zone support with rapid response capabilities"
      ]
    },
    {
      title: "Quality Assurance",
      icon: "✅",
      description: "Fixed-Price Delivery: Transparent pricing with no hidden costs or surprises",
      features: [
        "Milestone Management: Regular checkpoints with stakeholder validation",
        "Quality Gates: Rigorous testing and validation at each delivery phase",
        "Satisfaction Guarantee: Commitment to client satisfaction and project success"
      ]
    }
  ]

  return (
    <section className="py-16 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            💡 Why Our Services Deliver Success
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Our approach combines proven methodology with business focus to deliver services that drive real, measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
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

export default WhyServicesDeliverSuccess
