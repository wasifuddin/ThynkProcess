import { Link } from 'react-router-dom'

const AnalyticsIntelligenceServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <div className="text-4xl mr-4">📊</div>
          <div>
            <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A]">Analytics & Intelligence Services</h2>
            <p className="text-xl text-[#334155]">Transform data into actionable insights for strategic advantage</p>
          </div>
        </div>

        {/* Business Intelligence Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Business Intelligence Services
          </h3>
          <p className="text-[#334155] mb-8">
            Professional analytics implementation and optimization
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dashboard Development Services */}
            <div className="space-y-6">
              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                  Dashboard Development Services
                </h4>
                <ul className="text-[#334155] space-y-2 text-sm">
                  <li>• <strong>Executive Dashboards:</strong> Board-ready visualizations with strategic KPIs</li>
                  <li>• <strong>Operational Dashboards:</strong> Real-time monitoring for day-to-day management</li>
                  <li>• <strong>Financial Dashboards:</strong> P&L, cash flow, and budget variance analysis</li>
                  <li>• <strong>Sales Dashboards:</strong> Pipeline tracking, performance analytics, and forecasting</li>
                </ul>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                  Data Architecture Services
                </h4>
                <ul className="text-[#334155] space-y-2 text-sm">
                  <li>• <strong>Data Modeling:</strong> Robust semantic layers and dimensional modeling</li>
                  <li>• <strong>ETL Development:</strong> Automated data extraction, transformation, and loading</li>
                  <li>• <strong>Data Governance:</strong> Quality controls, security, and compliance frameworks</li>
                  <li>• <strong>Performance Optimization:</strong> Query tuning and infrastructure optimization</li>
                </ul>
              </div>
            </div>

            {/* Advanced Analytics Services */}
            <div className="space-y-6">
              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                  Advanced Analytics Services
                </h4>
                <ul className="text-[#334155] space-y-2 text-sm">
                  <li>• <strong>Predictive Modeling:</strong> Forecasting, trend analysis, and scenario planning</li>
                  <li>• <strong>Machine Learning:</strong> Automated insights, anomaly detection, and recommendations</li>
                  <li>• <strong>Statistical Analysis:</strong> Advanced analytics for process optimization and quality control</li>
                  <li>• <strong>Custom Analytics:</strong> Tailored analytical solutions for specific business needs</li>
                </ul>
              </div>

              <div className="bg-[#D8F4FA] rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Outcome Focus</h5>
                    <p className="text-[#334155] text-sm">Dashboards designed around business decisions, not just data display</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">📱 Mobile First</h5>
                    <p className="text-[#334155] text-sm">Responsive design optimized for executive mobile access</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">🔄 Self-Service</h5>
                    <p className="text-[#334155] text-sm">Empower business users with tools for independent analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/analytics" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore BI Services
              </Link>
              <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request Analytics Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* BI as a Service */}
        <div>
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            BI as a Service (BIaaS)
          </h3>
          <p className="text-[#334155] mb-8">
            Ongoing analytics support without internal team overhead
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Managed Analytics Platform */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Managed Analytics Platform
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Infrastructure Management:</strong> Cloud hosting, security, and performance optimization</li>
                <li>• <strong>Data Pipeline Management:</strong> Automated data refresh, quality monitoring, and error handling</li>
                <li>• <strong>User Access Management:</strong> Role-based security and permission administration</li>
                <li>• <strong>Platform Updates:</strong> Regular system updates and feature enhancement</li>
              </ul>
            </div>

            {/* Ongoing Analytics Support */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Ongoing Analytics Support
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Dashboard Maintenance:</strong> Regular updates, enhancements, and optimization</li>
                <li>• <strong>New Metric Development:</strong> Business-driven KPI creation and refinement</li>
                <li>• <strong>User Training:</strong> Ongoing education and adoption improvement programs</li>
                <li>• <strong>Performance Monitoring:</strong> System health checks and optimization recommendations</li>
              </ul>
            </div>

            {/* Strategic Analytics Partnership */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Strategic Analytics Partnership
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Business Reviews:</strong> Monthly analytics reviews with actionable insights</li>
                <li>• <strong>Trend Analysis:</strong> Market intelligence and competitive benchmarking</li>
                <li>• <strong>Executive Reporting:</strong> Board presentations and strategic communication support</li>
                <li>• <strong>ROI Measurement:</strong> Value demonstration and business case development</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#D8F4FA] rounded-xl p-6 mt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Service Level</h5>
                <p className="text-[#334155] text-sm">Dedicated analytics team extension for your business</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">📊 Expertise</h5>
                <p className="text-[#334155] text-sm">Senior BI consultants with industry-specific knowledge</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">💰 Value</h5>
                <p className="text-[#334155] text-sm">Professional analytics capability at fraction of internal team cost</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/biaas" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore BIaaS
              </Link>
              <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request Service Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsIntelligenceServices
