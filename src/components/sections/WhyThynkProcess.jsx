import { Link } from 'react-router-dom'

const WhyThynkProcess = () => {
  const whyChooseUs = [
    {
      title: "Tailored Solutions",
      description: "Custom ERP, CRM, and BI designed for your unique processes.",
      icon: "🎯"
    },
    {
      title: "Proven Expertise",
      description: "Certified SAP, Salesforce, and Tableau partners with deep platform knowledge.",
      icon: "🏆"
    },
    {
      title: "Local Support",
      description: "Melbourne-based, Australian-owned, delivering with speed and clarity.",
      icon: "🇦🇺"
    },
    {
      title: "Collaborative Approach",
      description: "Fast, transparent delivery with your team at the center.",
      icon: "🤝"
    },
    {
      title: "Ongoing Partnership",
      description: "Post-launch support that evolves with your business.",
      icon: "🔄"
    }
  ]

  const whatYouWontGet = [
    {
      title: "No Inflated Costs",
      description: "Transparent pricing, no hidden fees.",
      icon: "💰"
    },
    {
      title: "No Offshore Delays",
      description: "Local delivery for faster results.",
      icon: "⚡"
    },
    {
      title: "No One-Size-Fits-All",
      description: "Solutions built for your business, not templates.",
      icon: "🔧"
    },
    {
      title: "No Tech Jargon",
      description: "Clear communication, not complexity.",
      icon: "💬"
    }
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Why ThynkProcess?
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            We don't just implement systems—we help you scale, simplify, and succeed with clarity.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8 text-center">
            What You Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-[#0E1A6A] mb-3">{item.title}</h4>
                <p className="text-[#64748B]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Won't Get */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8 text-center">
            What You Won't Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatYouWontGet.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0E1A6A] mb-2">{item.title}</h4>
                    <p className="text-[#64748B]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Talk to an Expert
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Download Our ERP/CRM Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyThynkProcess
