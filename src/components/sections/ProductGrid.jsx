import { Link } from 'react-router-dom'

const ProductGrid = () => {
  const products = [
    {
      name: "Platform A",
      description: "Enterprise-grade platform for large organizations with advanced AI capabilities and comprehensive analytics.",
      features: ["AI-Powered Analytics", "Advanced Security", "Scalable Architecture", "24/7 Support"],
      pricing: "Enterprise",
      icon: "🚀",
      color: "from-[#0F79B9] to-[#0D4E9E]"
    },
    {
      name: "Platform B",
      description: "Flexible solution for mid-market companies with customizable workflows and seamless integrations.",
      features: ["Custom Workflows", "API Integrations", "Flexible Deployment", "Dedicated Support"],
      pricing: "Professional",
      icon: "⚡",
      color: "from-[#12A8D4] to-[#0F79B9]"
    },
    {
      name: "Platform C",
      description: "Specialized platform for specific industries with built-in compliance and regulatory features.",
      features: ["Industry Compliance", "Regulatory Features", "Specialized Tools", "Expert Consultation"],
      pricing: "Specialized",
      icon: "🎯",
      color: "from-[#0D4E9E] to-[#0C2F86]"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Our Technology Platforms
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Choose from our comprehensive suite of platforms, each designed to address 
            specific business needs and industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${product.color} p-8 text-white`}>
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold font-montserrat mb-2">{product.name}</h3>
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm font-semibold inline-block">
                  {product.pricing}
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#64748B] mb-6">{product.description}</p>
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
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
      </div>
    </section>
  )
}

export default ProductGrid
