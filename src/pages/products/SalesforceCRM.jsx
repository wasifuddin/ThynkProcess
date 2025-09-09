import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const SalesforceCRM = () => {
  return (
    <div>
      <PageHero 
        title="Salesforce CRM"
        subtitle="World's #1 CRM platform with AI-powered customer engagement"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Request Demo"
        ctaLink="/contact"
      />

      {/* Platform Editions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Platform Editions
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Comprehensive CRM solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Sales Cloud
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Pipeline management</li>
                <li>• CPQ</li>
                <li>• Einstein AI forecasting</li>
                <li>• Territory management</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">🎧</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Service Cloud
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Case management</li>
                <li>• Omni-channel support</li>
                <li>• Field service</li>
                <li>• Knowledge base</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">📢</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Marketing Cloud
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Journey automation</li>
                <li>• Email marketing</li>
                <li>• Lead nurturing</li>
                <li>• Campaign ROI</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Commerce Cloud
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• E-commerce platform</li>
                <li>• Personalization</li>
                <li>• Mobile optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Advanced Capabilities
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Einstein AI
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• Predictive lead scoring</li>
                <li>• Next-best-action recommendations</li>
                <li>• Automated insights</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Flow Automation
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• No-code workflow builder</li>
                <li>• Complex business processes</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Slack Integration
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• CRM data within collaboration workflows</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                AppExchange
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• 3,000+ pre-built business applications</li>
                <li>• Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Technical Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] mb-4">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Architecture
                </h3>
                <p className="text-[#334155] text-sm">
                  Cloud-native, multi-tenant platform
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] mb-4">
                <div className="text-3xl mb-4">🔌</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  APIs
                </h3>
                <p className="text-[#334155] text-sm">
                  REST, SOAP, Bulk APIs for custom integrations
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] mb-4">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Mobile
                </h3>
                <p className="text-[#334155] text-sm">
                  Native iOS/Android apps with offline capability
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] mb-4">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Security
                </h3>
                <p className="text-[#334155] text-sm">
                  Enterprise-grade with role-based permissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Integration Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="font-bold text-[#0E1A6A] mb-2">SAP Business One</h3>
              <p className="text-[#334155] text-sm">Native integration</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-2xl mb-3">🛒</div>
              <h3 className="font-bold text-[#0E1A6A] mb-2">E-commerce</h3>
              <p className="text-[#334155] text-sm">Platform connectivity</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-2xl mb-3">📢</div>
              <h3 className="font-bold text-[#0E1A6A] mb-2">Marketing</h3>
              <p className="text-[#334155] text-sm">Automation tools</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="font-bold text-[#0E1A6A] mb-2">Financial</h3>
              <p className="text-[#334155] text-sm">Systems synchronization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Transform Your Customer Relationships
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how Salesforce CRM can accelerate your sales and improve customer satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Salesforce Details
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </Link>
            <Link 
              to="/resources/download/salesforce-comparison"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Download Comparison Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SalesforceCRM
