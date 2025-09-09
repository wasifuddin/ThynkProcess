import { Link } from 'react-router-dom'

const CustomerSuccessStories = () => {
  const successStories = [
    {
      title: "Food Manufacturer Reduces Recall Risk by 40%",
      industry: "Food & Beverage Manufacturing",
      companySize: "150 employees",
      description: "How a Victorian food manufacturer implemented SAP B1 + Beas + GS1 barcode automation to achieve complete traceability and reduce recall risk.",
      keyResults: [
        "40% reduction in recall risk",
        "60% faster lot identification",
        "100% traceability compliance"
      ],
      link: "/resources/case-study/food-manufacturer"
    },
    {
      title: "Wholesale Distributor Cuts Fulfillment Time by 30%",
      industry: "Wholesale Distribution",
      companySize: "85 employees",
      description: "Implementation of Produmex WMS + B1UP transformed warehouse operations and improved customer satisfaction.",
      keyResults: [
        "30% faster fulfillment",
        "25% reduction in picking errors",
        "50% improvement in inventory accuracy"
      ],
      link: "/resources/case-study/wholesale-distributor"
    },
    {
      title: "Retailer Boosts Online Sales with Shopify + SAP",
      industry: "Retail & eCommerce",
      companySize: "45 employees",
      description: "Integrated e-commerce platform with SAP B1 + Perfion PIM for seamless omnichannel operations.",
      keyResults: [
        "200% increase in online sales",
        "75% reduction in inventory sync issues",
        "90% faster product launches"
      ],
      link: "/resources/case-study/retailer-ecommerce"
    },
    {
      title: "Agribusiness Gains Traceability from Farm to Port",
      industry: "Agriculture & Export",
      companySize: "120 employees",
      description: "SAP B1 + Analytics + Custom Export Tools enabled complete supply chain visibility and compliance.",
      keyResults: [
        "100% export compliance",
        "50% reduction in documentation time",
        "35% improvement in margin visibility"
      ],
      link: "/resources/case-study/agribusiness"
    },
    {
      title: "Pharmaceutical Company Achieves TGA Compliance",
      industry: "Pharmaceutical Manufacturing",
      companySize: "200 employees",
      description: "Comprehensive GMP-compliant system with batch tracking, quality management, and regulatory reporting.",
      keyResults: [
        "100% TGA audit success",
        "45% reduction in compliance costs",
        "60% faster batch release"
      ],
      link: "/resources/case-study/pharmaceutical"
    },
    {
      title: "Professional Services Firm Improves Project Profitability",
      industry: "Professional Services",
      companySize: "65 employees",
      description: "Salesforce + SAP B1 integration for project management, time tracking, and billing automation.",
      keyResults: [
        "30% improvement in project profitability",
        "50% reduction in billing cycle time",
        "95% time tracking accuracy"
      ],
      link: "/resources/case-study/professional-services"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            👤 Customer Success Stories
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Real results from Australian businesses that have transformed their operations with our solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🏆</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A]">
                  {story.title}
                </h3>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-[#64748B] mb-1">
                  <strong>Industry:</strong> {story.industry}
                </p>
                <p className="text-sm text-[#64748B]">
                  <strong>Company Size:</strong> {story.companySize}
                </p>
              </div>

              <p className="text-[#334155] mb-4 text-sm">
                {story.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-[#0F79B9] mb-2 text-sm">Key Results:</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  {story.keyResults.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start">
                      <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to={story.link}
                className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
              >
                Read Case Study
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/resources/case-studies"
            className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore All Case Studies
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CustomerSuccessStories
