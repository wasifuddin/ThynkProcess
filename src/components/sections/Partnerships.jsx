const Partnerships = () => {
  const partnerships = [
    {
      name: "SAP Silver Partner",
      description: "Expert delivery of SAP B1 for manufacturing and warehousing.",
      icon: "🏆"
    },
    {
      name: "Salesforce Consulting Partner",
      description: "Certified for CRM and automation excellence.",
      icon: "⚡"
    },
    {
      name: "Boyum IT Partner",
      description: "Specialized in Beas Manufacturing and Produmex WMS.",
      icon: "🏭"
    },
    {
      name: "BI Expertise",
      description: "Proven success with Power BI and Tableau for data insights.",
      icon: "📊"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Our Partnerships
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerships.map((partnership, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{partnership.icon}</div>
              <h4 className="font-bold text-[#0E1A6A] mb-3">{partnership.name}</h4>
              <p className="text-sm text-[#64748B]">{partnership.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#64748B] text-sm italic">
            🖼️ Suggested Visual: Certification badges for SAP, Salesforce, Boyum, Power BI, and Tableau
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partnerships
