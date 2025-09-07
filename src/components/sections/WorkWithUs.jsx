import { Link } from 'react-router-dom'

const WorkWithUs = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0E1A6A] to-[#0C2F86]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            Want to Work with Us?
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-12">
            Whether you need a robust SAP B1 ERP, seamless Salesforce CRM, or actionable BI insights, 
            our Melbourne-based team is ready to transform your business Australia-wide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-[#12A8D4] hover:bg-[#0F79B9] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Download Our ERP/CRM Guide
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#AEE7F2] text-[#AEE7F2] hover:bg-[#AEE7F2] hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🇦🇺</div>
              <h3 className="text-xl font-bold text-white mb-2">Melbourne-Based</h3>
              <p className="text-[#AEE7F2]">Local expertise with global experience</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Certified Partners</h3>
              <p className="text-[#AEE7F2]">SAP Silver, Salesforce, Boyum IT</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-[#AEE7F2]">30% efficiency gains, 25% error reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkWithUs
