const MissionValues = () => {
  const values = [
    {
      title: "Client Success",
      description: "Your goals drive our solutions, delivering results like 30% faster processes.",
      icon: "🎯"
    },
    {
      title: "ERP Expertise",
      description: "Deep SAP B1 knowledge ensures industry-specific impact.",
      icon: "🏆"
    },
    {
      title: "Innovative Integration",
      description: "Seamless systems tailored to your unique needs.",
      icon: "🔗"
    },
    {
      title: "Trusted Accountability",
      description: "We own the process, delivering measurable outcomes.",
      icon: "✅"
    },
    {
      title: "Simplified Solutions",
      description: "User-friendly ERP, CRM, and BI for real-world success.",
      icon: "💡"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Our Mission
            </h2>
            <h3 className="text-2xl font-semibold text-[#0F79B9] mb-6">
              Simplify Business with Powerful ERP and Beyond
            </h3>
            <p className="text-xl text-[#64748B] leading-relaxed">
              We provide affordable, scalable solutions that help small and mid-sized businesses excel. 
              From SAP B1 expertise to modern CRM and BI, we bridge strategy and technology with clarity, 
              agility, and lasting partnerships.
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold font-montserrat text-[#0E1A6A] mb-8">
              Our Values
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-3xl mr-4">{value.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0E1A6A] mb-2">{value.title}</h4>
                    <p className="text-[#64748B]">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionValues
