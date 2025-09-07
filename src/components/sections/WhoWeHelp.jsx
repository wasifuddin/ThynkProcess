import { Link } from 'react-router-dom'

const WhoWeHelp = () => {
  const businessTypes = [
    {
      title: "Modernize Operations for Small to Mid-Sized Manufacturers & Distributors",
      description: "Replace spreadsheets and legacy systems with SAP Business One, Beas Manufacturing, and Produmex WMS.",
      icon: "🏭"
    },
    {
      title: "Optimize Exports for Traders & Agribusinesses",
      description: "Streamline inventory, pricing, and partner management with tailored ERP solutions.",
      icon: "🌾"
    },
    {
      title: "Enhance Efficiency for Logistics & Warehousing Operators",
      description: "Integrate WMS and handheld scanning for barcode accuracy and faster dispatch.",
      icon: "📦"
    },
    {
      title: "Boost Sales for Sales-Driven Organizations",
      description: "Streamline pipelines, onboarding, and renewals with Salesforce and automation tools.",
      icon: "📈"
    },
    {
      title: "Ensure Compliance for Pharma, Food, and Chemical Companies",
      description: "Implement traceability, batch control, and audit-ready processes.",
      icon: "✅"
    }
  ]

  const roles = [
    {
      title: "Drive Transformation for CEOs/Managing Directors",
      description: "Gain full business visibility without technical overload.",
      icon: "👔"
    },
    {
      title: "Scale Operations for Founders/COOs/GMs",
      description: "Standardize workflows and reduce risk.",
      icon: "⚙️"
    },
    {
      title: "Improve Reporting for CFOs & Finance Teams",
      description: "Achieve faster, audit-ready reports and margin control.",
      icon: "💰"
    },
    {
      title: "Automate Processes for Operations Managers",
      description: "Eliminate paper-based chaos with streamlined systems.",
      icon: "🔄"
    },
    {
      title: "Enhance Pipelines for Sales & Service Teams",
      description: "Get smarter quoting tools and 360° customer visibility.",
      icon: "🎯"
    },
    {
      title: "Secure Systems for IT Leaders & ERP Champions",
      description: "Deploy scalable, supportable solutions.",
      icon: "🔒"
    }
  ]

  const bestForCompanies = [
    "Outgrown Basic Systems like MYOB, Xero, or spreadsheets",
    "Scaling Fast and need integrated ERP, CRM, or analytics",
    "Seek Expert Guidance to streamline and support growth",
    "Reduce Manual Work with process automation",
    "Value Partnerships with responsive, local support",
    "Prioritize Visibility for compliance and agility"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Who We Help
          </h2>
        </div>

        {/* By Business Type */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-montserrat text-[#0E1A6A] mb-4 text-center">
            By Business Type
          </h3>
          <p className="text-xl text-[#64748B] text-center mb-12 max-w-4xl mx-auto">
            We empower growing, process-driven businesses across Australia with smart, scalable systems.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessTypes.map((type, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{type.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0E1A6A] mb-2">{type.title}</h4>
                    <p className="text-[#64748B]">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* By Role */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-montserrat text-[#0E1A6A] mb-4 text-center">
            By Role
          </h3>
          <p className="text-xl text-[#64748B] text-center mb-12 max-w-4xl mx-auto">
            We partner with:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-4">{role.icon}</div>
                <h4 className="text-lg font-bold text-[#0E1A6A] mb-3">{role.title}</h4>
                <p className="text-[#64748B] text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* We're Best for Companies That... */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold font-montserrat text-[#0E1A6A] mb-8 text-center">
            We're Best for Companies That…
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bestForCompanies.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-[#F8FAFC] rounded-lg">
                <svg className="w-5 h-5 text-[#12A8D4] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#334155] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0E1A6A] to-[#0C2F86] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              Not sure what system you need?
            </h3>
            <p className="text-[#AEE7F2] mb-6">
              Let's find the perfect fit for your business.
            </p>
            <Link
              to="/contact"
              className="bg-[#12A8D4] hover:bg-[#0F79B9] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Request a Free Systems Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeHelp
