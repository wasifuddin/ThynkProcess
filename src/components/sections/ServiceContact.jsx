const ServiceContact = () => {
  const guarantees = [
    "Certified Delivery Teams - Platform-certified professionals with proven expertise",
    "Proven Methodology - 20+ years of refined delivery processes and best practices",
    "Australian Focus - Local team with deep market and regulatory knowledge",
    "Transparent Pricing - Fixed-price delivery with clear scope and deliverables",
    "100% Success Rate - Commitment to project success and client satisfaction"
  ]

  const successMetrics = [
    "100% on-time project delivery record",
    "98% client satisfaction rating",
    "90% of clients achieve ROI within 12 months",
    "25% average reduction in operational costs",
    "40% improvement in process efficiency"
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
          Contact ThynkProcess
        </h2>
        <p className="text-xl text-[#AEE7F2] mb-6">
          Your trusted service delivery partner
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
              <p className="font-semibold">Melbourne-based service team with national coverage</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
          Ensure your digital transformation success with professional services designed for Australian businesses and delivered by certified experts.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service Excellence Guarantee */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold font-montserrat text-white mb-4">
              Service Excellence Guarantee:
            </h3>
            <div className="space-y-3 text-left">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start text-[#AEE7F2]">
                  <span className="text-[#12A8D4] mr-2 mt-1">✅</span>
                  <span className="text-sm">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Success Metrics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold font-montserrat text-white mb-4">
              Client Success Metrics:
            </h3>
            <div className="space-y-3 text-left">
              {successMetrics.map((metric, index) => (
                <div key={index} className="flex items-start text-[#AEE7F2]">
                  <span className="text-[#12A8D4] mr-2 mt-1">📊</span>
                  <span className="text-sm">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <p className="text-lg text-[#AEE7F2] font-medium">
            Transform your business with confidence using services proven by Australia's most successful digital transformation projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceContact
