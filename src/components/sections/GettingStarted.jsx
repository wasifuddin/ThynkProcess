import { Link } from 'react-router-dom'

const GettingStarted = () => {
  const evaluationOptions = [
    {
      icon: "📞",
      title: "Schedule Product Demo",
      description: "See any product in action with your data",
      link: "/contact"
    },
    {
      icon: "📥",
      title: "Download Product Comparison",
      description: "Side-by-side feature comparison",
      link: "/contact"
    },
    {
      icon: "🔍",
      title: "Product Assessment",
      description: "Free evaluation of your current needs",
      link: "/contact"
    },
    {
      icon: "💻",
      title: "Trial Access",
      description: "Hands-on experience with selected products",
      link: "/contact"
    }
  ]

  const technicalResources = [
    {
      icon: "📋",
      title: "System Requirements",
      description: "Hardware and software specifications",
      link: "/products/system-requirements"
    },
    {
      icon: "🔧",
      title: "Integration Guide",
      description: "Technical integration documentation",
      link: "/products/integration-guide"
    },
    {
      icon: "👨‍💻",
      title: "Developer Resources",
      description: "APIs, SDKs, and code samples",
      link: "/products/developer-resources"
    },
    {
      icon: "📚",
      title: "Product Documentation",
      description: "Complete user and admin guides",
      link: "/products/documentation"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Getting Started
          </h2>
        </div>

        {/* Product Evaluation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8 text-center">
            Product Evaluation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evaluationOptions.map((option, index) => (
              <Link
                key={index}
                to={option.link}
                className="bg-[#F8FAFC] rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0E1A6A] mb-2">
                  {option.title}
                </h4>
                <p className="text-[#64748B] text-sm">
                  {option.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Technical Resources */}
        <div>
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8 text-center">
            Technical Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalResources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="bg-[#D8F4FA] rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0E1A6A] mb-2">
                  {resource.title}
                </h4>
                <p className="text-[#64748B] text-sm">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GettingStarted
