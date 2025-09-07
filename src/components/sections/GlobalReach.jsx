const GlobalReach = () => {
  const globalExperience = [
    {
      title: "Global ERP Expertise",
      description: "Delivered SAP B1 ERP for manufacturers in India, cutting production costs by 25%.",
      location: "India",
      icon: "🏭"
    },
    {
      title: "Industry Versatility",
      description: "Streamlined warehousing in Southeast Asia with Produmex WMS, reducing errors by 20%.",
      location: "Southeast Asia",
      icon: "📦"
    },
    {
      title: "BI Innovation",
      description: "Empowered retail in the USA with Power BI dashboards for real-time insights.",
      location: "USA",
      icon: "📊"
    }
  ]

  const countries = [
    "Australia", "India", "Singapore", "Malaysia", "USA", "Canada", "England", "South Africa"
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Global Reach, Local Commitment
          </h2>
          <h3 className="text-2xl font-semibold text-[#0F79B9] mb-8">
            Proudly Australian, Globally Experienced
          </h3>
          <p className="text-xl text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            Our founders and experts have worked in Australia, India, Singapore, Southeast Asia (Malaysia, Singapore), 
            USA, Canada, England, and South Africa — delivering tailored solutions across continents. From manufacturing 
            in India to logistics in Southeast Asia, retail in the USA, and agribusiness in South Africa, we've driven 
            success in diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {globalExperience.map((experience, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{experience.icon}</div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-3">{experience.title}</h4>
              <p className="text-[#64748B] text-sm mb-3">{experience.description}</p>
              <div className="text-[#12A8D4] font-semibold text-sm">{experience.location}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6 text-center">
            Australian Focus
          </h3>
          <p className="text-[#64748B] text-center max-w-3xl mx-auto mb-8">
            As a Melbourne-based, Australian-owned team, we prioritize businesses Australia-wide — delivering 
            world-class solutions tailored to local needs like compliance and scalability.
          </p>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-[#0E1A6A] mb-4">Countries We've Worked In:</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {countries.map((country, index) => (
                <span 
                  key={index}
                  className="bg-[#D8F4FA] text-[#0E1A6A] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#64748B] text-sm italic">
            🖼️ Suggested Visual: Map graphic highlighting Australia, India, Singapore, Southeast Asia, USA, Canada, England, and South Africa — with an Australian flag or marker emphasizing local roots
          </p>
        </div>
      </div>
    </section>
  )
}

export default GlobalReach
