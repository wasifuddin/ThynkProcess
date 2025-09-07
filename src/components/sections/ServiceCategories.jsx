import { Link } from 'react-router-dom'

const ServiceCategories = () => {
  const services = [
    {
      name: "Implementation Services",
      description: "Expert implementation and deployment of our technology platforms with minimal disruption to your business.",
      features: [
        "Project Planning & Management",
        "System Configuration",
        "Data Migration",
        "User Training",
        "Go-Live Support"
      ],
      icon: "🚀",
      color: "from-[#0F79B9] to-[#0D4E9E]"
    },
    {
      name: "Support & Managed Services",
      description: "Comprehensive ongoing support and managed services to ensure optimal performance and continuous improvement.",
      features: [
        "24/7 Technical Support",
        "System Monitoring",
        "Performance Optimization",
        "Regular Updates",
        "Proactive Maintenance"
      ],
      icon: "🛡️",
      color: "from-[#12A8D4] to-[#0F79B9]"
    },
    {
      name: "Specialized Services",
      description: "Custom development, integration, and specialized consulting services tailored to your unique requirements.",
      features: [
        "Custom Development",
        "System Integration",
        "Business Process Consulting",
        "Compliance Consulting",
        "Change Management"
      ],
      icon: "⚙️",
      color: "from-[#0D4E9E] to-[#0C2F86]"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Our Service Categories
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Comprehensive services designed to ensure successful implementation, 
            optimal performance, and continuous value from your technology investments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold font-montserrat mb-2">{service.name}</h3>
                <p className="text-white opacity-90">{service.description}</p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-semibold text-[#0E1A6A] mb-4">Key Services:</h4>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-[#12A8D4] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#334155]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#F8FAFC] rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Choose Our Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-semibold text-[#0E1A6A] mb-2">Certified Experts</h4>
                <p className="text-[#64748B] text-sm">Certified professionals with deep expertise in all our platforms</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-[#0E1A6A] mb-2">Fast Implementation</h4>
                <p className="text-[#64748B] text-sm">Proven methodologies for rapid, successful deployments</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-semibold text-[#0E1A6A] mb-2">Proven Results</h4>
                <p className="text-[#64748B] text-sm">Track record of successful implementations and satisfied clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories
