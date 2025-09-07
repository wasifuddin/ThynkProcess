const TechnicalSpecs = () => {
  const specs = [
    {
      category: "Performance",
      items: [
        { name: "Response Time", value: "< 100ms" },
        { name: "Throughput", value: "10,000+ requests/sec" },
        { name: "Uptime SLA", value: "99.9%" },
        { name: "Scalability", value: "Auto-scaling" }
      ]
    },
    {
      category: "Security",
      items: [
        { name: "Encryption", value: "AES-256" },
        { name: "Authentication", value: "Multi-factor" },
        { name: "Compliance", value: "SOC 2, ISO 27001" },
        { name: "Data Protection", value: "GDPR Compliant" }
      ]
    },
    {
      category: "Integration",
      items: [
        { name: "APIs", value: "REST & GraphQL" },
        { name: "Webhooks", value: "Real-time events" },
        { name: "SDKs", value: "JavaScript, Python, Java" },
        { name: "Third-party", value: "100+ integrations" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Built with enterprise-grade technology and security standards to ensure 
            reliability, performance, and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center border-b border-[#E2E8F0] pb-3">
                    <span className="text-[#64748B] font-medium">{item.name}</span>
                    <span className="text-[#0F79B9] font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSpecs
