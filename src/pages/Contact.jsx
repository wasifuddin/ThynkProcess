import PageHero from '../components/PageHero'

const Contact = () => {
  return (
    <div>
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with our experts to discuss your needs and learn how we can help."
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
      />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A] mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#12A8D4] mr-4 mt-1">📧</div>
                  <div>
                    <h3 className="font-semibold text-[#0E1A6A]">Email</h3>
                    <p className="text-[#64748B]">contact@yourcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#12A8D4] mr-4 mt-1">📞</div>
                  <div>
                    <h3 className="font-semibold text-[#0E1A6A]">Phone</h3>
                    <p className="text-[#64748B]">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#12A8D4] mr-4 mt-1">📍</div>
                  <div>
                    <h3 className="font-semibold text-[#0E1A6A]">Address</h3>
                    <p className="text-[#64748B]">123 Business Street<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-8">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#12A8D4] focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#12A8D4] focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#12A8D4] focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#12A8D4] focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
