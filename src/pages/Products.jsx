import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const Products = () => {
  const products = [
    {
      title: "SAP Business One",
      description: "Complete ERP platform built on SAP HANA for intelligent business management",
      icon: "🏢",
      link: "/products/sap-business-one",
      features: ["Financial Management", "Sales & CRM", "Manufacturing", "Inventory Control"]
    },
    {
      title: "Salesforce CRM",
      description: "World's #1 CRM platform with AI-powered customer engagement",
      icon: "🤝",
      link: "/products/salesforce",
      features: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Commerce Cloud"]
    },
    {
      title: "Power BI",
      description: "Microsoft's enterprise analytics platform with self-service capabilities",
      icon: "📊",
      link: "/products/power-bi",
      features: ["Data Visualization", "AI Integration", "Real-time Dashboards", "Self-Service BI"]
    },
    {
      title: "Tableau",
      description: "Leading data visualization platform for advanced analytics",
      icon: "📈",
      link: "/products/tableau",
      features: ["Visual Analytics", "Advanced Analytics", "Enterprise Deployment", "AI & ML"]
    },
    {
      title: "SAP Analytics Cloud",
      description: "Unified planning, BI, and predictive analytics for SAP environments",
      icon: "☁️",
      link: "/products/sap-analytics",
      features: ["Business Intelligence", "Enterprise Planning", "Predictive Analytics", "SAP Integration"]
    },
    {
      title: "Beas Manufacturing",
      description: "Advanced manufacturing execution system for SAP Business One",
      icon: "🏭",
      link: "/products/beas-manufacturing",
      features: ["Advanced MRP", "Shop Floor Control", "Quality Management", "Costing & Analytics"]
    },
    {
      title: "Produmex WMS",
      description: "Complete warehouse management system for SAP Business One",
      icon: "📦",
      link: "/products/produmex-wms",
      features: ["Warehouse Operations", "Barcode Integration", "3PL Integration", "Labor Management"]
    },
    {
      title: "Integration & Automation",
      description: "Connect systems and automate processes for seamless operations",
      icon: "🔗",
      link: "/products/integration-automation",
      features: ["Vision33 Saltbox", "Service Layer APIs", "Workflow Automation", "Real-time Sync"]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Products"
        subtitle="World-class technology platforms designed for growing Australian businesses"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Explore Product Demonstrations"
        ctaLink="/contact"
      />

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Enterprise Technology Stack
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Discover our comprehensive suite of business technology platforms, each designed to solve specific operational challenges while integrating seamlessly with your existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3 group-hover:text-[#0F79B9] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[#334155] mb-4 text-sm">
                  {product.description}
                </p>
                <ul className="text-[#334155] space-y-1 text-sm">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-[#0F79B9] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center text-[#0F79B9] font-medium group-hover:text-[#0D4E9E] transition-colors">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Get started with our products through demos, assessments, and expert consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Product Demos
              </h3>
              <p className="text-[#334155] mb-6">
                See our products in action with personalized demonstrations tailored to your business needs.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Schedule Demo
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Product Assessment
              </h3>
              <p className="text-[#334155] mb-6">
                Free evaluation of your current needs and recommendations for the right technology stack.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get Assessment
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Trial Access
              </h3>
              <p className="text-[#334155] mb-6">
                Hands-on experience with selected products to evaluate their fit for your business.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Request Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
