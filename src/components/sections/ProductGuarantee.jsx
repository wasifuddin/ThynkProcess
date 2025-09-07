const ProductGuarantee = () => {
  const guarantees = [
    {
      title: "Certified Expertise",
      description: "Certified professionals for every platform",
      icon: "✅"
    },
    {
      title: "Integration Excellence",
      description: "Seamless connectivity between all products",
      icon: "✅"
    },
    {
      title: "Australian Support",
      description: "Local implementation and ongoing assistance",
      icon: "✅"
    },
    {
      title: "Scalable Solutions",
      description: "Products that grow with your business",
      icon: "✅"
    },
    {
      title: "Proven Performance",
      description: "Trusted by 50+ Australian businesses",
      icon: "✅"
    }
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Product Guarantee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{guarantee.icon}</div>
              <h3 className="text-lg font-bold text-[#0E1A6A] mb-2">
                {guarantee.title}
              </h3>
              <p className="text-[#64748B] text-sm">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGuarantee
