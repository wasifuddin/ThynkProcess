const IndustryContact = () => {
  const commitments = [
    "Industry-specific configuration and support",
    "Australian standards documentation capabilities",
    "Laboratory and testing workflow integration",
    "Compliance framework support (configured on request)",
    "Ongoing standards and regulatory update support"
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
          Contact ThynkProcess
        </h2>
        <p className="text-xl text-[#AEE7F2] mb-6">
          Your Australian industry and compliance solution partner
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-2xl mb-2">📧</div>
              <p className="font-semibold">info@thynkprocess.com.au</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <p className="font-semibold">(03) 7075 3900</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏢</div>
              <p className="font-semibold">Melbourne-based team with Australian regulatory knowledge</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
          Transform your business with solutions designed for Australian industries. Our comprehensive approach supports compliance, quality, and competitive advantage in the Australian market.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold font-montserrat text-white mb-4">
            Our Commitment:
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-left">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start text-[#AEE7F2]">
                <span className="text-[#12A8D4] mr-2 mt-1">✅</span>
                <span className="text-sm">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryContact
