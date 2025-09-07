import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#D8F4FA] via-[#AEE7F2] to-[#78D2E9] min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[#0E1A6A] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-[#0E1A6A] mb-6 leading-tight">
              Scale Smarter with 
              <span className="text-[#12A8D4] block">Tailored ERP, CRM, and Analytics Solutions</span>
            </h1>
            <p className="text-xl text-[#334155] mb-8 max-w-2xl mx-auto lg:mx-0">
              Say goodbye to disconnected systems and manual processes. We help growing companies 
              streamline operations, enhance customer experiences, and make better decisions with 
              SAP Business One, Salesforce, and BI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                See a Demo
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#12A8D4] rounded-lg p-4 text-white text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Businesses Transformed</div>
                </div>
                <div className="bg-[#0F79B9] rounded-lg p-4 text-white text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm">Years Expertise</div>
                </div>
                <div className="bg-[#0D4E9E] rounded-lg p-4 text-white text-center">
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-sm">Efficiency Gains</div>
                </div>
                <div className="bg-[#0C2F86] rounded-lg p-4 text-white text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Local Support</div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#78D2E9] rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#12A8D4] rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
