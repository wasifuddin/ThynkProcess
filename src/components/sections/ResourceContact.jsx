const ResourceContact = () => {
  const guarantees = [
    "Always Current - Resources updated regularly with latest features and best practices",
    "Practical Focus - Real-world templates and guides based on successful implementations",
    "Expert Authored - Content created by certified consultants with hands-on experience",
    "Free Access - Majority of resources available at no cost",
    "Ongoing Support - Follow-up assistance and clarification available"
  ]

  const resourceStats = [
    "5,000+ Downloads per month across all resources",
    "95% User Satisfaction rating for resource quality and relevance",
    "50+ New Resources added quarterly",
    "24/7 Availability for all digital resources",
    "Expert Validation - All resources reviewed by certified consultants"
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
          Contact ThynkProcess
        </h2>
        <p className="text-xl text-[#AEE7F2] mb-6">
          Your resource and learning partner
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
              <p className="font-semibold">Melbourne-based team with deep expertise across all platforms</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
          Accelerate your digital transformation with Australia's most comprehensive resource library and expert guidance.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resource Guarantee */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold font-montserrat text-white mb-4">
              Resource Guarantee:
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

          {/* Resource Statistics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold font-montserrat text-white mb-4">
              Resource Statistics:
            </h3>
            <div className="space-y-3 text-left">
              {resourceStats.map((stat, index) => (
                <div key={index} className="flex items-start text-[#AEE7F2]">
                  <span className="text-[#12A8D4] mr-2 mt-1">📊</span>
                  <span className="text-sm">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <p className="text-lg text-[#AEE7F2] font-medium">
            Transform your knowledge into results with resources designed by practitioners for practitioners.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ResourceContact
