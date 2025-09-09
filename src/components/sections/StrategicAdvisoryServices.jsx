import { Link } from 'react-router-dom'

const StrategicAdvisoryServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <div className="text-4xl mr-4">🎯</div>
          <div>
            <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A]">Strategic Advisory Services</h2>
            <p className="text-xl text-[#334155]">Executive-level guidance for technology strategy and digital transformation</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fractional CIO Services */}
          <div className="space-y-8">
            <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Fractional CIO Services
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• <strong>Technology Strategy:</strong> IT roadmap development aligned with business objectives</li>
                <li>• <strong>Investment Planning:</strong> Technology budget optimization and prioritization</li>
                <li>• <strong>Vendor Management:</strong> Strategic relationships and contract negotiation</li>
                <li>• <strong>Digital Transformation:</strong> Innovation strategy and competitive advantage development</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Executive Advisory Services
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• <strong>Board Presentations:</strong> Technology strategy communication and investment justification</li>
                <li>• <strong>Risk Management:</strong> Cybersecurity, compliance, and business continuity planning</li>
                <li>• <strong>Team Development:</strong> IT capability building and skill development programs</li>
                <li>• <strong>Change Leadership:</strong> Organizational transformation and adoption strategies</li>
              </ul>
            </div>
          </div>

          {/* Business Transformation Services */}
          <div className="space-y-8">
            <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Business Transformation Services
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• <strong>Process Reengineering:</strong> Business process optimization and automation opportunities</li>
                <li>• <strong>Organizational Design:</strong> Technology-enabled organizational structure optimization</li>
                <li>• <strong>Performance Measurement:</strong> KPI development and value realization tracking</li>
                <li>• <strong>Innovation Planning:</strong> Emerging technology evaluation and adoption strategies</li>
              </ul>
            </div>

            <div className="bg-[#D8F4FA] rounded-xl p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-1">🎯 Experience Level</h4>
                  <p className="text-[#334155] text-sm">Senior executives with 20+ years of technology leadership</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-1">📊 Business Focus</h4>
                  <p className="text-[#334155] text-sm">Technology strategy aligned with business outcomes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-1">🤝 Partnership</h4>
                  <p className="text-[#334155] text-sm">Ongoing relationship with quarterly strategic reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services/advisory" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Advisory Services
            </Link>
            <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request Strategic Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrategicAdvisoryServices
