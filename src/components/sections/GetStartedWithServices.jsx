import { Link } from 'react-router-dom'

const GetStartedWithServices = () => {
  const serviceAssessment = [
    {
      title: "Schedule Service Consultation",
      description: "Discuss your specific service needs",
      icon: "📞",
      link: "/contact"
    },
    {
      title: "Service Assessment",
      description: "Free evaluation of your requirements and options",
      icon: "📊",
      link: "/contact"
    },
    {
      title: "Service Pricing Guide",
      description: "Transparent pricing for all service offerings",
      icon: "💰",
      link: "/contact"
    },
    {
      title: "Custom Service Proposal",
      description: "Tailored service package for your needs",
      icon: "🎯",
      link: "/contact"
    }
  ]

  const serviceResources = [
    {
      title: "Service Comparison Guide",
      description: "Compare different service levels and options",
      icon: "📋",
      link: "/resources"
    },
    {
      title: "Service Methodology",
      description: "Understand our proven delivery approach",
      icon: "📈",
      link: "/resources"
    },
    {
      title: "Meet Our Team",
      description: "Connect with service specialists and consultants",
      icon: "👥",
      link: "/about"
    },
    {
      title: "Service Case Studies",
      description: "Success stories from similar service engagements",
      icon: "📚",
      link: "/resources"
    }
  ]

  return (
    <section className="py-16 bg-[#AEE7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🚀 Getting Started with Services
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Take the first step towards professional service delivery with our comprehensive service framework.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Assessment */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Service Assessment
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {serviceAssessment.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="bg-[#F8FAFC] hover:bg-[#D8F4FA] rounded-lg p-4 border border-[#E2E8F0] transition-colors group"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-[#0E1A6A] mb-1 group-hover:text-[#0F79B9] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#334155]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Resources */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Service Resources
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {serviceResources.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="bg-[#F8FAFC] hover:bg-[#D8F4FA] rounded-lg p-4 border border-[#E2E8F0] transition-colors group"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-[#0E1A6A] mb-1 group-hover:text-[#0F79B9] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#334155]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStartedWithServices
