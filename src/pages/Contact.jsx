import PageHero from '../components/PageHero'
import ProductGuarantee from '../components/sections/ProductGuarantee'

const Contact = () => {
  return (
    <div>
      <PageHero 
        title="Contact ThynkProcess"
        subtitle="Your technology platform specialists"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
      />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center bg-white rounded-lg px-6 py-3 shadow-md">
                <span className="text-2xl mr-3">📧</span>
                <span className="font-bold text-[#0E1A6A] text-lg">info@thynkprocess.com.au</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-6 py-3 shadow-md">
                <span className="text-2xl mr-3">📞</span>
                <span className="font-bold text-[#0E1A6A] text-lg">(03) 7075 3900</span>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#D8F4FA] rounded-lg px-6 py-3 mb-6 mx-auto max-w-2xl">
              <span className="text-2xl mr-3">🏢</span>
              <span className="font-bold text-[#0E1A6A] text-lg">Melbourne-based team with deep product expertise</span>
            </div>
            <p className="text-xl text-[#334155] max-w-4xl mx-auto leading-relaxed font-medium">
              Discover the right technology stack for your business with guidance from Australia's leading platform implementation specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A] mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start bg-[#F8FAFC] rounded-lg p-4">
                  <div className="text-[#0F79B9] mr-4 mt-1 text-2xl">📧</div>
                  <div>
                    <h3 className="font-bold text-[#0E1A6A] text-lg mb-1">Email</h3>
                    <p className="text-[#334155] font-medium">info@thynkprocess.com.au</p>
                  </div>
                </div>
                <div className="flex items-start bg-[#F8FAFC] rounded-lg p-4">
                  <div className="text-[#0F79B9] mr-4 mt-1 text-2xl">📞</div>
                  <div>
                    <h3 className="font-bold text-[#0E1A6A] text-lg mb-1">Phone</h3>
                    <p className="text-[#334155] font-medium">(03) 7075 3900</p>
                  </div>
                </div>
                <div className="flex items-start bg-[#F8FAFC] rounded-lg p-4">
                  <div className="text-[#0F79B9] mr-4 mt-1 text-2xl">🏢</div>
                  <div>
                    <h3 className="font-bold text-[#0E1A6A] text-lg mb-1">Location</h3>
                    <p className="text-[#334155] font-medium">Melbourne, Australia<br />Australian-owned and operated</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#E2E8F0]">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#0F79B9] focus:border-[#0F79B9] bg-white text-[#334155] placeholder-[#64748B]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#0F79B9] focus:border-[#0F79B9] bg-white text-[#334155] placeholder-[#64748B]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#0F79B9] focus:border-[#0F79B9] bg-white text-[#334155] placeholder-[#64748B]"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#0F79B9] focus:border-[#0F79B9] bg-white text-[#334155] placeholder-[#64748B]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ProductGuarantee />
    </div>
  )
}

export default Contact
