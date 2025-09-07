const GlobalExperience = () => {
  const stats = [
    { number: "50+", label: "Countries Served", icon: "🌍" },
    { number: "500+", label: "Global Clients", icon: "🏢" },
    { number: "24/7", label: "Support Coverage", icon: "🕐" },
    { number: "15+", label: "Languages Supported", icon: "🗣️" }
  ]

  const offices = [
    { city: "San Francisco", country: "USA", role: "Headquarters" },
    { city: "London", country: "UK", role: "European Hub" },
    { city: "Singapore", country: "Singapore", role: "Asia-Pacific" },
    { city: "Sydney", country: "Australia", role: "Oceania" },
    { city: "Toronto", country: "Canada", role: "North America" },
    { city: "Berlin", country: "Germany", role: "Central Europe" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Global Experience
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            With a worldwide presence and deep local expertise, we deliver solutions 
            that work seamlessly across cultures, time zones, and regulatory environments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#0F79B9] mb-2">{stat.number}</div>
              <div className="text-[#64748B]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8 text-center">
            Our Global Offices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center">
                <div className="font-bold text-[#0E1A6A]">{office.city}</div>
                <div className="text-[#64748B]">{office.country}</div>
                <div className="text-sm text-[#12A8D4] font-semibold">{office.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalExperience
