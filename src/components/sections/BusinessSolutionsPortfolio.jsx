import { Link } from 'react-router-dom'

const BusinessSolutionsPortfolio = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Business Solutions Portfolio
          </h2>
          <p className="text-xl text-[#334155] max-w-4xl mx-auto">
            Transform your operations with our comprehensive solution framework designed around business outcomes, not just technology. Each solution combines multiple products and services to deliver measurable results.
          </p>
        </div>

        {/* ERP Solutions */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">🏢</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">ERP Solutions</h3>
              <p className="text-[#334155]">Complete business management solutions for operational excellence</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Financial Management Solutions */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                Financial Management Solutions
              </h4>
              <p className="text-[#334155] mb-4">
                Streamline accounting, compliance, and financial reporting
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-[#0F79B9] mb-2">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• 40% faster month-end closing processes</li>
                  <li>• Automated Australian tax compliance (GST, BAS, FBT)</li>
                  <li>• Real-time cash flow visibility and forecasting</li>
                  <li>• Reduced audit preparation time by 60%</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-[#0F79B9] mb-2">Solution Components:</h5>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• SAP Business One financial modules</li>
                  <li>• Acassia Bank Feeds for automated reconciliation</li>
                  <li>• Power BI financial dashboards</li>
                  <li>• Automated compliance reporting</li>
                </ul>
              </div>

              <p className="text-sm text-[#64748B] mb-4">
                <strong>Ideal For:</strong> CFOs seeking accurate, compliant, and timely financial reporting
              </p>

              <div className="flex flex-wrap gap-2">
                <Link to="/solutions/financial" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Explore Financial Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Manufacturing Solutions */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                Manufacturing Solutions
              </h4>
              <p className="text-[#334155] mb-4">
                End-to-end production management from planning to delivery
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-[#0F79B9] mb-2">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• 25% reduction in production costs</li>
                  <li>• 30% improvement in on-time delivery</li>
                  <li>• Real-time visibility across shop floor operations</li>
                  <li>• Integrated quality management and compliance</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-[#0F79B9] mb-2">Solution Components:</h5>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• SAP Business One with Beas Manufacturing</li>
                  <li>• Produmex WMS for materials management</li>
                  <li>• Netronic visual scheduling</li>
                  <li>• Quality management workflows</li>
                  <li>• Production analytics and KPI dashboards</li>
                </ul>
              </div>

              <p className="text-sm text-[#64748B] mb-4">
                <strong>Ideal For:</strong> Manufacturers needing integrated planning, execution, and control
              </p>

              <div className="flex flex-wrap gap-2">
                <Link to="/solutions/manufacturing" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Explore Manufacturing Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Distribution Solutions */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                Distribution Solutions
              </h4>
              <p className="text-[#334155] mb-4">
                Optimize inventory, warehousing, and fulfillment operations
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-[#0F79B9] mb-2">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• 25% reduction in inventory carrying costs</li>
                  <li>• 30% improvement in order fulfillment accuracy</li>
                  <li>• Automated supplier and customer management</li>
                  <li>• Real-time inventory visibility across locations</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-[#0F79B9] mb-2">Solution Components:</h5>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• SAP Business One inventory management</li>
                  <li>• Produmex WMS with barcode scanning</li>
                  <li>• EDI integration with major retailers</li>
                  <li>• 3PL and logistics integration</li>
                  <li>• Customer portal for self-service</li>
                </ul>
              </div>

              <p className="text-sm text-[#64748B] mb-4">
                <strong>Ideal For:</strong> Distributors managing complex inventory across multiple channels
              </p>

              <div className="flex flex-wrap gap-2">
                <Link to="/solutions/distribution" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Explore Distribution Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Compliance Solutions */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                Compliance Solutions
              </h4>
              <p className="text-[#334155] mb-4">
                Ensure regulatory adherence with automated documentation
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-[#0F79B9] mb-2">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• 100% audit readiness with automated compliance</li>
                  <li>• Reduced compliance costs by 50%</li>
                  <li>• Complete traceability and recall capabilities</li>
                  <li>• Simplified regulatory reporting</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-[#0F79B9] mb-2">Solution Components:</h5>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Industry-specific compliance modules</li>
                  <li>• Batch tracking and traceability systems</li>
                  <li>• Automated regulatory reporting</li>
                  <li>• Document management and audit trails</li>
                  <li>• Laboratory integration capabilities</li>
                </ul>
              </div>

              <p className="text-sm text-[#64748B] mb-4">
                <strong>Ideal For:</strong> Regulated industries requiring strict compliance (Food, Pharma, Chemical)
              </p>

              <div className="flex flex-wrap gap-2">
                <Link to="/solutions/compliance" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Explore Compliance Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CRM Solutions */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">🤝</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">CRM Solutions</h3>
              <p className="text-[#334155]">Intelligent customer relationship management for revenue growth</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Sales Automation Solutions */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Sales Automation Solutions
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Accelerate sales cycles with intelligent automation
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• 40% shorter sales cycles</li>
                  <li>• 35% increase in conversion rates</li>
                  <li>• Automated quote-to-cash processes</li>
                  <li>• Complete sales pipeline visibility</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Sales-driven organizations needing pipeline acceleration
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/sales" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore Sales Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Customer Service Solutions */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Customer Service Solutions
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Deliver exceptional service with omnichannel support
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• 50% faster case resolution times</li>
                  <li>• 95% first-call resolution rates</li>
                  <li>• Proactive service with predictive analytics</li>
                  <li>• Complete service history visibility</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Service organizations focusing on customer satisfaction
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/service" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore Service Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Marketing Automation Solutions */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Marketing Automation Solutions
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Drive demand generation with intelligent campaigns
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• 60% improvement in lead quality</li>
                  <li>• 45% increase in marketing ROI</li>
                  <li>• Automated nurturing and scoring</li>
                  <li>• Complete campaign attribution</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Marketing teams driving demand generation and lead quality
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/marketing" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore Marketing Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Solutions */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">📊</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">Analytics Solutions</h3>
              <p className="text-[#334155]">Transform data into actionable insights for better decisions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Executive Dashboards */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Executive Dashboards
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Real-time business intelligence for strategic decision-making
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• Single source of truth for all business metrics</li>
                  <li>• Real-time visibility into company performance</li>
                  <li>• Data-driven strategic decision making</li>
                  <li>• Improved stakeholder communication</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Executives needing comprehensive business visibility
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/executive-analytics" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore Executive Analytics
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Operational Analytics */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Operational Analytics
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Optimize day-to-day operations with real-time insights
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• 30% improvement in operational efficiency</li>
                  <li>• Proactive identification of bottlenecks</li>
                  <li>• Optimized resource allocation</li>
                  <li>• Continuous process improvement</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Operations managers optimizing daily performance
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/operational-analytics" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore Operational Analytics
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Predictive Analytics
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Forecast future trends and make proactive decisions
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• 25% improvement in forecast accuracy</li>
                  <li>• Proactive inventory management</li>
                  <li>• Predictive maintenance scheduling</li>
                  <li>• Risk identification and mitigation</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Strategic planners needing predictive insights
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/predictive-analytics" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore Predictive Analytics
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Solutions */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">🔗</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">Integration Solutions</h3>
              <p className="text-[#334155]">Connect systems and automate processes for seamless operations</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* System Integration */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                System Integration
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Unify your technology ecosystem with seamless connectivity
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• 70% reduction in manual data entry</li>
                  <li>• Real-time data synchronization across systems</li>
                  <li>• Improved data accuracy and consistency</li>
                  <li>• Simplified IT management</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Organizations with multiple disconnected systems
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/integration" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore Integration Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Process Automation */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                Process Automation
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Automate repetitive tasks and workflows for efficiency
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• 60% reduction in manual processing time</li>
                  <li>• Improved accuracy and consistency</li>
                  <li>• Faster approval cycles</li>
                  <li>• Enhanced compliance and audit trails</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Businesses seeking to eliminate manual processes
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/automation" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore Automation Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* E-commerce Integration */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                E-commerce Integration
              </h4>
              <p className="text-[#334155] mb-3 text-sm">
                Connect online sales channels with back-office systems
              </p>
              
              <div className="mb-3">
                <h5 className="font-semibold text-[#0F79B9] mb-1 text-sm">Business Outcomes:</h5>
                <ul className="text-[#334155] space-y-1 text-xs">
                  <li>• Real-time inventory synchronization</li>
                  <li>• Automated order processing</li>
                  <li>• Unified customer experience</li>
                  <li>• Scalable multi-channel operations</li>
                </ul>
              </div>

              <p className="text-xs text-[#64748B] mb-3">
                <strong>Ideal For:</strong> Retailers selling across multiple online channels
              </p>

              <div className="flex flex-col gap-2">
                <Link to="/solutions/ecommerce" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Explore E-commerce Solutions
                </Link>
                <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessSolutionsPortfolio
