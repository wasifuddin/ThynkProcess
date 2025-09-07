import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0E1A6A] to-[#0C2F86]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8">
            Join hundreds of companies that have already revolutionized their operations 
            with our innovative solutions. Get started today and see the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-[#12A8D4] hover:bg-[#0F79B9] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/solutions"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
              <p className="text-[#AEE7F2]">Get up and running in days, not months</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-[#AEE7F2]">Bank-level security and compliance</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-[#AEE7F2]">Average 40% efficiency improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
