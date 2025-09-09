import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const SAPBusinessOne = () => {
  return (
    <div>
      <PageHero 
        title="SAP Business One"
        subtitle="Complete ERP platform built on SAP HANA for intelligent business management"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Request Demo"
        ctaLink="/contact"
      />

      {/* Core Platform Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Core Platform Capabilities
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Comprehensive business management solution designed for growing companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Financial Management
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Multi-company GL</li>
                <li>• Automated compliance (GST, BAS, FBT)</li>
                <li>• Cash flow forecasting</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Sales & CRM
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Lead-to-cash automation</li>
                <li>• Mobile CRM</li>
                <li>• Pipeline management</li>
                <li>• Customer 360° view</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Purchasing & Inventory
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Multi-warehouse control</li>
                <li>• Batch/serial tracking</li>
                <li>• Automated replenishment</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Manufacturing
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Advanced MRP</li>
                <li>• BOM management</li>
                <li>• Shop floor control</li>
                <li>• Quality management</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Business Intelligence
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Real-time dashboards</li>
                <li>• Predictive analytics</li>
                <li>• Embedded reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Platform Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Database</h4>
                  <p className="text-[#334155]">SAP HANA in-memory platform for real-time processing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Access Methods</h4>
                  <p className="text-[#334155]">Web client, mobile apps (iOS/Android), desktop client</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Scalability</h4>
                  <p className="text-[#334155]">5 to 500+ concurrent users</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Integration</h4>
                  <p className="text-[#334155]">REST API, Service Layer, native connectors</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F79B9] mb-2">Compliance</h4>
                  <p className="text-[#334155]">Australian ATO, GST, BAS, Single Touch Payroll Phase 2</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Industry Configurations
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🥫</div>
                  <div>
                    <h4 className="font-semibold text-[#0E1A6A]">Food & Beverage</h4>
                    <p className="text-[#334155] text-sm">with HACCP compliance</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🏭</div>
                  <div>
                    <h4 className="font-semibold text-[#0E1A6A]">Manufacturing</h4>
                    <p className="text-[#334155] text-sm">with advanced MRP</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">📦</div>
                  <div>
                    <h4 className="font-semibold text-[#0E1A6A]">Distribution</h4>
                    <p className="text-[#334155] text-sm">with multi-warehouse management</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">💊</div>
                  <div>
                    <h4 className="font-semibold text-[#0E1A6A]">Pharmaceutical</h4>
                    <p className="text-[#334155] text-sm">with TGA compliance</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🛍</div>
                  <div>
                    <h4 className="font-semibold text-[#0E1A6A]">Retail</h4>
                    <p className="text-[#334155] text-sm">with POS integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how SAP Business One can streamline your operations and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View SAP Business One Details
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </Link>
            <Link 
              to="/resources/download/sap-b1-datasheet"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Download Datasheet
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SAPBusinessOne
