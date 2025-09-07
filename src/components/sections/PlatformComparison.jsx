const PlatformComparison = () => {
  const platforms = [
    {
      name: "Platform A",
      features: {
        "AI Analytics": "Advanced",
        "Security": "Enterprise",
        "Scalability": "Unlimited",
        "Support": "24/7 Premium",
        "Pricing": "Custom"
      }
    },
    {
      name: "Platform B",
      features: {
        "AI Analytics": "Standard",
        "Security": "Professional",
        "Scalability": "High",
        "Support": "Business Hours",
        "Pricing": "Per User"
      }
    },
    {
      name: "Platform C",
      features: {
        "AI Analytics": "Basic",
        "Security": "Standard",
        "Scalability": "Medium",
        "Support": "Email",
        "Pricing": "Fixed"
      }
    }
  ]

  const featureList = ["AI Analytics", "Security", "Scalability", "Support", "Pricing"]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Platform Comparison
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Compare our platforms to find the perfect solution for your business needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-[#0E1A6A] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Features</th>
                {platforms.map((platform, index) => (
                  <th key={index} className="px-6 py-4 text-center font-semibold">
                    {platform.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureList.map((feature, featureIndex) => (
                <tr key={featureIndex} className={featureIndex % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-[#0E1A6A]">{feature}</td>
                  {platforms.map((platform, platformIndex) => (
                    <td key={platformIndex} className="px-6 py-4 text-center text-[#64748B]">
                      {platform.features[feature]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <div className="bg-[#D8F4FA] rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-[#64748B] mb-6">
              Our experts can help you select the right platform based on your specific 
              requirements, budget, and growth plans.
            </p>
            <button className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformComparison
