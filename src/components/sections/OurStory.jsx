const OurStory = () => {
  const milestones = [
    {
      title: "Mastered ERP",
      description: "Pioneered SAP B1 solutions for manufacturers, streamlining production and inventory.",
      icon: "🏭"
    },
    {
      title: "Enhanced Warehousing",
      description: "Deployed Produmex WMS for faster, error-free logistics.",
      icon: "📦"
    },
    {
      title: "Expanded Expertise",
      description: "Integrated Salesforce and BI tools to empower sales and data-driven decisions.",
      icon: "📊"
    },
    {
      title: "Scaled Globally",
      description: "Delivered solutions across diverse industries, from startups to mid-market firms.",
      icon: "🌍"
    }
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-6">
            Our Story
          </h2>
          <h3 className="text-2xl font-semibold text-[#0F79B9] mb-8">
            From SAP B1 Pioneers to Full-Suite Innovators
          </h3>
          <p className="text-xl text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            Founded by ERP experts with over 20 years of experience, ThynkProcess began as an SAP B1 specialist, 
            solving complex challenges in manufacturing and warehousing with tools like Beas Manufacturing and 
            Produmex WMS. Our journey evolved to embrace Salesforce, Power BI, Tableau, and custom integrations 
            — delivering end-to-end digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4 text-center">{milestone.icon}</div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-3 text-center">{milestone.title}</h4>
              <p className="text-[#64748B] text-sm text-center">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurStory
