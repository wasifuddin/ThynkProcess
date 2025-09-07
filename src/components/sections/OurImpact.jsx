const OurImpact = () => {
  const impactStats = [
    { number: "50+", label: "Businesses Transformed", sublabel: "across Australia" },
    { number: "20+", label: "Years of Expertise", sublabel: "in ERP, CRM, and BI" },
    { number: "90%", label: "Efficiency Gains", sublabel: "reported by clients within 6 months" }
  ]

  const trustedBy = [
    "SAP", "Salesforce", "Tableau", "Boyum", "leading Australian businesses"
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Our Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[#0F79B9] mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-[#0E1A6A] mb-1">{stat.label}</div>
              <div className="text-[#64748B]">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
            Trusted by:
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustedBy.map((company, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="text-[#0E1A6A] font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurImpact
