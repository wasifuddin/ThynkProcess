import { Link } from 'react-router-dom'

const IndustriesServed = () => {
  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.",
      icon: "🏥",
      stats: "500+ Healthcare Organizations"
    },
    {
      name: "Finance",
      description: "Secure, compliant platforms for banks, insurance, and financial services.",
      icon: "🏦",
      stats: "200+ Financial Institutions"
    },
    {
      name: "Manufacturing",
      description: "IoT-enabled solutions for smart manufacturing and supply chain optimization.",
      icon: "🏭",
      stats: "300+ Manufacturing Plants"
    },
    {
      name: "Retail",
      description: "Omnichannel solutions for e-commerce, inventory, and customer experience.",
      icon: "🛍️",
      stats: "1000+ Retail Locations"
    },
    {
      name: "Education",
      description: "Learning management systems and educational technology platforms.",
      icon: "🎓",
      stats: "800+ Educational Institutions"
    },
    {
      name: "Government",
      description: "Secure, scalable solutions for public sector and government agencies.",
      icon: "🏛️",
      stats: "150+ Government Agencies"
    }
  ]

  return (
    <section className="py-20 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Our solutions are trusted by organizations across diverse industries, 
            each with unique requirements and compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                {industry.name}
              </h3>
              <p className="text-[#64748B] mb-4">
                {industry.description}
              </p>
              <div className="text-sm font-semibold text-[#12A8D4] mb-4">
                {industry.stats}
              </div>
              <Link
                to="/industries"
                className="text-[#0F79B9] hover:text-[#0D4E9E] font-semibold transition-colors inline-flex items-center"
              >
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-[#64748B] mb-6">
              Our flexible platforms can be customized to meet the unique requirements 
              of any industry. Contact us to discuss your specific needs.
            </p>
            <Link
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
            >
              Contact Our Experts
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesServed
