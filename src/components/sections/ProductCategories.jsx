import { Link } from 'react-router-dom'

const ProductCategories = () => {
  const productCategories = [
    {
      category: "ERP Solutions",
      products: [
        { name: "SAP Business One", link: "/products/sap-business-one", description: "Complete ERP for SMBs" },
        { name: "SAP Analytics Cloud", link: "/products/sap-analytics-cloud", description: "Cloud-based analytics" }
      ]
    },
    {
      category: "CRM Solutions", 
      products: [
        { name: "Salesforce CRM", link: "/products/salesforce", description: "Leading CRM platform" }
      ]
    },
    {
      category: "Business Intelligence",
      products: [
        { name: "Power BI", link: "/products/power-bi", description: "Microsoft BI platform" },
        { name: "Tableau", link: "/products/tableau", description: "Advanced data visualization" },
        { name: "SAP Analytics Cloud", link: "/products/sap-analytics-cloud", description: "Cloud-based analytics" }
      ]
    },
    {
      category: "Manufacturing & WMS",
      products: [
        { name: "BEA Manufacturing", link: "/products/beas-manufacturing", description: "Manufacturing extensions" },
        { name: "Produmex WMS", link: "/products/produmex-wms", description: "Warehouse management" }
      ]
    },
    {
      category: "Integration & Automation",
      products: [
        { name: "Integration Automation", link: "/products/integration-automation", description: "System integration platform" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Explore our comprehensive range of technology solutions organized by category 
            to find the perfect fit for your business needs.
          </p>
        </div>

        <div className="space-y-12">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <Link
                    key={productIndex}
                    to={product.link}
                    className="group bg-[#F8FAFC] rounded-lg p-6 hover:bg-[#D8F4FA] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-semibold text-[#0E1A6A] mb-2 group-hover:text-[#0F79B9] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[#64748B] text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center text-[#0F79B9] font-semibold text-sm">
                      Learn More
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Need Help Choosing the Right Product?
            </h3>
            <p className="text-[#64748B] mb-6">
              Our technology experts can help you select the perfect platform based on your 
              business requirements, industry, and growth plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View Business Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
