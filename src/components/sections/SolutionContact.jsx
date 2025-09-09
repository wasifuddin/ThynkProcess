const SolutionContact = () => {
  const guarantees = [
    "Business Outcome Focus - Solutions designed around your specific goals",
    "Proven Methodology - Tested approach with 100% success rate",
    "Local Expertise - Deep Australian market and regulatory knowledge",
    "Ongoing Partnership - Long-term support for continuous improvement",
    "Measurable Results - Clear KPIs and regular progress reporting"
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
          Contact ThynkProcess
        </h2>
        <p className="text-xl text-[#AEE7F2] mb-6">
          Your business solution specialists
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
              <p className="font-semibold">Melbourne-based team with deep solution expertise</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
          Transform your business with solutions designed for measurable results and sustainable growth.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold font-montserrat text-white mb-4">
            Solution Guarantee:
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-left">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start text-[#AEE7F2]">
                <span className="text-[#12A8D4] mr-2 mt-1">✅</span>
                <span className="text-sm">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionContact
