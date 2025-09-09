import { Link } from 'react-router-dom'

const IntegrationAutomationServices = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <div className="text-4xl mr-4">🔗</div>
          <div>
            <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A]">Integration & Automation Services</h2>
            <p className="text-xl text-[#334155]">Connect systems and automate processes for operational efficiency</p>
          </div>
        </div>

        {/* System Integration Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            System Integration Services
          </h3>
          <p className="text-[#334155] mb-8">
            Seamless connectivity between business applications
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* E-commerce Integration */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                E-commerce Integration
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Platform Connectivity:</strong> Shopify, WooCommerce, Magento integration with real-time sync</li>
                <li>• <strong>Order Automation:</strong> Automated order processing from web to fulfillment</li>
                <li>• <strong>Inventory Synchronization:</strong> Real-time stock updates across all channels</li>
                <li>• <strong>Customer Unification:</strong> Single customer view across web and ERP systems</li>
              </ul>
            </div>

            {/* Financial System Integration */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Financial System Integration
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Banking Connectivity:</strong> Acassia Bank Feeds for automated reconciliation</li>
                <li>• <strong>Payment Processing:</strong> Stripe, PayWay, and other payment gateway integration</li>
                <li>• <strong>Multi-Currency:</strong> Foreign exchange automation and currency management</li>
                <li>• <strong>Compliance Automation:</strong> GST, BAS, and ATO reporting automation</li>
              </ul>
            </div>

            {/* Business Application Integration */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Business Application Integration
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>CRM-ERP Connectivity:</strong> Salesforce and SAP Business One bidirectional sync</li>
                <li>• <strong>Document Management:</strong> SharePoint, OneDrive integration with workflow automation</li>
                <li>• <strong>HR & Payroll:</strong> Employee data synchronization and payroll automation</li>
                <li>• <strong>Logistics & Shipping:</strong> 3PL, courier, and freight provider integration</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#D8F4FA] rounded-xl p-6 mt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Approach</h5>
                <p className="text-[#334155] text-sm">API-first architecture with real-time data flow</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">📊 Monitoring</h5>
                <p className="text-[#334155] text-sm">Comprehensive dashboards for integration health and performance</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">🔒 Security</h5>
                <p className="text-[#334155] text-sm">Enterprise-grade security with audit trails and compliance</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/integration" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore Integration Services
              </Link>
              <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request Integration Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* Process Automation Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Process Automation Services
          </h3>
          <p className="text-[#334155] mb-8">
            Intelligent automation for operational efficiency
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Financial Process Automation */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                  Financial Process Automation
                </h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• <strong>Accounts Payable:</strong> Invoice processing, approval workflows, and payment automation</li>
                  <li>• <strong>Accounts Receivable:</strong> Automated invoicing, payment processing, and collections</li>
                  <li>• <strong>Bank Reconciliation:</strong> Automated matching and exception handling</li>
                  <li>• <strong>Financial Reporting:</strong> Automated report generation and distribution</li>
                </ul>
              </div>

              {/* Sales & Marketing Automation */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                  Sales & Marketing Automation
                </h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• <strong>Lead Processing:</strong> Automated lead qualification, scoring, and assignment</li>
                  <li>• <strong>Quote Generation:</strong> Automated pricing, approval workflows, and document generation</li>
                  <li>• <strong>Order Processing:</strong> End-to-end automation from quote to delivery</li>
                  <li>• <strong>Customer Communication:</strong> Automated email campaigns and follow-up sequences</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Operations Automation */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                  Operations Automation
                </h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• <strong>Inventory Management:</strong> Automated replenishment, cycle counting, and optimization</li>
                  <li>• <strong>Production Planning:</strong> Automated scheduling, material allocation, and capacity optimization</li>
                  <li>• <strong>Quality Control:</strong> Automated inspection workflows, non-conformance tracking, and corrective actions</li>
                  <li>• <strong>Warehouse Operations:</strong> Automated picking, packing, and shipping processes</li>
                </ul>
              </div>

              {/* Document & Communication Automation */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
                <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                  Document & Communication Automation
                </h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• <strong>Document Processing:</strong> OCR, automated data extraction, and routing workflows</li>
                  <li>• <strong>Approval Workflows:</strong> Multi-step approval processes with escalation and notifications</li>
                  <li>• <strong>Report Distribution:</strong> Automated report generation, formatting, and distribution</li>
                  <li>• <strong>Alert Management:</strong> Intelligent notifications based on business rules and exceptions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#D8F4FA] rounded-xl p-6 mt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Focus</h5>
                <p className="text-[#334155] text-sm">Eliminate manual tasks and reduce processing time by 60-80%</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">📈 ROI</h5>
                <p className="text-[#334155] text-sm">Typical payback period of 6-12 months through efficiency gains</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">🔄 Continuous Improvement</h5>
                <p className="text-[#334155] text-sm">Ongoing optimization and enhancement of automated processes</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/automation" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore Automation Services
              </Link>
              <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request Automation Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* EDI & B2B Integration Services */}
        <div>
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            EDI & B2B Integration Services
          </h3>
          <p className="text-[#334155] mb-8">
            Seamless B2B transaction automation with major trading partners
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Retail Partner Integration */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Retail Partner Integration
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Major Retailers:</strong> Coles, Woolworths, Bunnings, Total Tools, IGA connectivity</li>
                <li>• <strong>Document Automation:</strong> ASN, PO, Invoice, and delivery confirmation processing</li>
                <li>• <strong>Compliance Management:</strong> GS1, SSCC, and retailer-specific requirement adherence</li>
                <li>• <strong>Performance Monitoring:</strong> Real-time transaction tracking and exception management</li>
              </ul>
            </div>

            {/* EDI Platform Services */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                EDI Platform Services
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm">
                <li>• <strong>Platform Integration:</strong> Pacific Commerce, TrueCommerce, SPS Commerce, MessageXchange</li>
                <li>• <strong>Format Support:</strong> EDIFACT, X12, XML, and flat file format processing</li>
                <li>• <strong>Custom Mapping:</strong> Tailored data transformation and validation rules</li>
                <li>• <strong>Error Handling:</strong> Automated retry logic, exception management, and alerting</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#D8F4FA] rounded-xl p-6 mt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Expertise</h5>
                <p className="text-[#334155] text-sm">Deep experience with Australian retail and distribution requirements</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">⚡ Performance</h5>
                <p className="text-[#334155] text-sm">99.9% transaction success rate with automated error recovery</p>
              </div>
              <div>
                <h5 className="font-semibold text-[#0F79B9] mb-1">📋 Compliance</h5>
                <p className="text-[#334155] text-sm">Full audit trails and regulatory compliance documentation</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/edi" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore EDI Services
              </Link>
              <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request EDI Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationAutomationServices
