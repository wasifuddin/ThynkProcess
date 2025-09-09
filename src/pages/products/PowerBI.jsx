import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const PowerBI = () => {
  return (
    <div>
      <PageHero 
        title="Power BI"
        subtitle="Microsoft's enterprise analytics platform with self-service capabilities"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Request Demo"
        ctaLink="/contact"
      />

      {/* Core Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Core Features
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Comprehensive analytics platform for data-driven decision making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Data Connectivity
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• 500+ connectors</li>
                <li>• SAP HANA integration</li>
                <li>• Salesforce connectivity</li>
                <li>• Excel, SQL databases</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Visualization
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Interactive dashboards</li>
                <li>• Custom visuals</li>
                <li>• Mobile-optimized reports</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                AI Integration
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Microsoft Copilot</li>
                <li>• Natural language queries</li>
                <li>• Automated insights</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3">
                Collaboration
              </h3>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• Teams integration</li>
                <li>• Shared workspaces</li>
                <li>• Automated distribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Advanced Analytics
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Predictive Models
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• Forecasting</li>
                <li>• Clustering</li>
                <li>• Trend analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Real-Time Dashboards
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• Live data streaming</li>
                <li>• Alerts</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Embedded Analytics
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• White-label dashboards</li>
                <li>• Custom applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Service Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Self-Service Capabilities
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Empower business users with drag-and-drop report creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#F8FAFC] rounded-xl p-8">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Business User Features
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• Drag-and-drop interface</li>
                <li>• Pre-built templates</li>
                <li>• Natural language queries</li>
                <li>• Mobile access</li>
                <li>• Sharing and collaboration</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-8">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                IT Governance
              </h3>
              <ul className="text-[#334155] space-y-3">
                <li>• Data security controls</li>
                <li>• User access management</li>
                <li>• Performance monitoring</li>
                <li>• Data lineage tracking</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Integration Options
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="font-bold text-[#0E1A6A] mb-2">SAP Business One</h3>
              <p className="text-[#334155] text-sm">Native connectivity</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="font-bold text-[#0E1A6A] mb-2">Salesforce</h3>
              <p className="text-[#334155] text-sm">Direct integration</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-bold text-[#0E1A6A] mb-2">Excel</h3>
              <p className="text-[#334155] text-sm">Seamless import</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-2xl mb-3">🗄️</div>
              <h3 className="font-bold text-[#0E1A6A] mb-2">SQL Databases</h3>
              <p className="text-[#334155] text-sm">Direct connection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Transform Your Data into Insights
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how Power BI can help you make data-driven decisions and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Power BI Details
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PowerBI
