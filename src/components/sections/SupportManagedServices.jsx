import { Link } from 'react-router-dom'

const SupportManagedServices = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <div className="text-4xl mr-4">🛠️</div>
          <div>
            <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A]">Support & Managed Services</h2>
            <p className="text-xl text-[#334155]">Comprehensive support for system reliability and business continuity</p>
          </div>
        </div>

        {/* Technical Support Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Technical Support Services
          </h3>
          <p className="text-[#334155] mb-8">
            Multi-tier support for optimal system performance
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Support Service Levels */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                  Support Service Levels
                </h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-[#12A8D4] pl-4">
                    <h5 className="font-semibold text-[#0E1A6A] mb-1">Bronze Support</h5>
                    <p className="text-[#334155] text-sm">Business hours assistance, monthly health checks, basic troubleshooting</p>
                  </div>
                  
                  <div className="border-l-4 border-[#0F79B9] pl-4">
                    <h5 className="font-semibold text-[#0E1A6A] mb-1">Silver Support</h5>
                    <p className="text-[#334155] text-sm">Extended hours coverage, priority response, quarterly reviews, performance optimization</p>
                  </div>
                  
                  <div className="border-l-4 border-[#0D4E9E] pl-4">
                    <h5 className="font-semibold text-[#0E1A6A] mb-1">Gold Support</h5>
                    <p className="text-[#334155] text-sm">24/7 emergency support, dedicated account management, proactive monitoring, strategic planning</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                  Proactive Management Services
                </h4>
                <ul className="text-[#334155] space-y-2 text-sm">
                  <li>• <strong>System Monitoring:</strong> Real-time alerts, performance tracking, and automated issue detection</li>
                  <li>• <strong>Preventive Maintenance:</strong> Regular optimization, security updates, and system tuning</li>
                  <li>• <strong>User Support:</strong> Helpdesk services, training refreshers, and adoption improvement</li>
                  <li>• <strong>Documentation:</strong> System documentation maintenance and user guide updates</li>
                </ul>
              </div>
            </div>

            {/* Performance Optimization Services */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                  Performance Optimization Services
                </h4>
                <ul className="text-[#334155] space-y-2 text-sm">
                  <li>• <strong>Health Assessments:</strong> Comprehensive system audits and optimization recommendations</li>
                  <li>• <strong>Database Tuning:</strong> Query optimization, index management, and performance enhancement</li>
                  <li>• <strong>User Adoption Analysis:</strong> Usage analytics and improvement recommendations</li>
                  <li>• <strong>Capacity Planning:</strong> Growth planning and infrastructure scaling recommendations</li>
                </ul>
              </div>

              <div className="bg-[#D8F4FA] rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Response Time</h5>
                    <p className="text-[#334155] text-sm">4-hour response for critical issues, 24-hour for standard issues</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">📊 Reporting</h5>
                    <p className="text-[#334155] text-sm">Monthly health reports with KPIs and recommendations</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">✅ Guarantee</h5>
                    <p className="text-[#334155] text-sm">99.5% system uptime with proactive issue resolution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/support" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore Support Services
              </Link>
              <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request Support Proposal
              </Link>
            </div>
          </div>
        </div>

        {/* Managed Services */}
        <div>
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Managed Services
          </h3>
          <p className="text-[#334155] mb-8">
            Complete operational management of business-critical systems
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* System Administration Services */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                System Administration Services
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Database Management:</strong> Backup, recovery, maintenance, and optimization</li>
                <li>• <strong>Security Administration:</strong> User management, access control, and compliance monitoring</li>
                <li>• <strong>Infrastructure Management:</strong> Server management, capacity planning, and disaster recovery</li>
                <li>• <strong>Vendor Coordination:</strong> Third-party relationship management and support escalation</li>
              </ul>
            </div>

            {/* Business Process Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Business Process Management
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Workflow Optimization:</strong> Process analysis and improvement recommendations</li>
                <li>• <strong>Change Management:</strong> System updates, configuration changes, and testing coordination</li>
                <li>• <strong>Compliance Management:</strong> Regulatory adherence monitoring and documentation</li>
                <li>• <strong>Performance Monitoring:</strong> KPI tracking and business value measurement</li>
              </ul>
            </div>

            {/* Strategic Technology Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Strategic Technology Management
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Roadmap Planning:</strong> Technology evolution and upgrade planning</li>
                <li>• <strong>Enhancement Planning:</strong> Business-driven improvements and feature prioritization</li>
                <li>• <strong>Investment Analysis:</strong> ROI evaluation and technology investment recommendations</li>
                <li>• <strong>Stakeholder Communication:</strong> Regular reporting and strategic planning sessions</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#D8F4FA] rounded-xl p-6 mt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Service Model</h5>
                <p className="text-[#334155] text-sm">Dedicated team acting as extension of your IT department</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">📈 Value</h5>
                <p className="text-[#334155] text-sm">Reduced IT overhead with enterprise-grade system management</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">🔄 Continuous Improvement</h5>
                <p className="text-[#334155] text-sm">Regular optimization and enhancement initiatives</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/managed" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore Managed Services
              </Link>
              <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request Service Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportManagedServices
