import { Link } from 'react-router-dom'

const GetStartedWithSolutions = () => {
  const solutionDiscovery = [
    {
      title: "Book Solution Consultation",
      description: "Discuss your specific business challenges",
      icon: "📞",
      link: "/contact"
    },
    {
      title: "Solution Assessment",
      description: "Free evaluation of your needs and opportunities",
      icon: "📊",
      link: "/contact"
    },
    {
      title: "Custom Solution Design",
      description: "Tailored solution architecture for your business",
      icon: "🎯",
      link: "/contact"
    },
    {
      title: "ROI Calculator",
      description: "Estimate benefits and return on investment",
      icon: "💰",
      link: "/contact"
    }
  ]

  const solutionResources = [
    {
      title: "Solution Comparison Guide",
      description: "Compare different solution approaches",
      icon: "📋",
      link: "/resources"
    },
    {
      title: "Business Case Templates",
      description: "Build internal justification for investment",
      icon: "📈",
      link: "/resources"
    },
    {
      title: "Solution Demonstrations",
      description: "See solutions in action with real scenarios",
      icon: "🎥",
      link: "/contact"
    },
    {
      title: "Implementation Methodology",
      description: "Understand our proven delivery approach",
      icon: "📚",
      link: "/resources"
    }
  ]

  return (
    <section className="py-16 bg-[#AEE7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🎯 Get Started with Solutions
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Take the first step towards transforming your business with our comprehensive solution framework.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Solution Discovery */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Solution Discovery
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {solutionDiscovery.map((item, index) => (
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

          {/* Solution Resources */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Solution Resources
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {solutionResources.map((item, index) => (
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

export default GetStartedWithSolutions
