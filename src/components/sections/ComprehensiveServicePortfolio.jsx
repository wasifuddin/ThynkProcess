import { Link } from 'react-router-dom'

const ComprehensiveServicePortfolio = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-[#334155] max-w-4xl mx-auto">
            Our services bridge the gap between technology capabilities and business outcomes. From initial assessment through ongoing optimization, we ensure your investment delivers maximum value and sustainable results.
          </p>
        </div>

        {/* Implementation Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">🚀</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">Implementation Services</h3>
              <p className="text-[#334155]">Professional deployment of technology platforms with business-focused outcomes</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Platform Implementation */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Platform Implementation
              </h4>
              <p className="text-[#334155] mb-6">
                Expert deployment of core technology platforms
              </p>

              <div className="space-y-6">
                {/* ERP Implementation */}
                <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                  <h5 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    ERP Implementation Services
                  </h5>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>SAP Business One Implementation:</strong> Complete deployment from planning to go-live</li>
                    <li>• <strong>Industry Configuration:</strong> Sector-specific setup for compliance and best practices</li>
                    <li>• <strong>Data Migration:</strong> Secure transfer from legacy systems with validation</li>
                    <li>• <strong>Integration Setup:</strong> Connect with existing systems and third-party platforms</li>
                    <li>• <strong>User Training:</strong> Role-based training programs for optimal adoption</li>
                  </ul>
                </div>

                {/* CRM Implementation */}
                <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                  <h5 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    CRM Implementation Services
                  </h5>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>Salesforce Deployment:</strong> Sales, Service, and Marketing Cloud implementation</li>
                    <li>• <strong>Customization:</strong> Custom objects, workflows, and automation setup</li>
                    <li>• <strong>Data Integration:</strong> Seamless connectivity with ERP and other business systems</li>
                    <li>• <strong>User Enablement:</strong> Training and change management for successful adoption</li>
                    <li>• <strong>Mobile Configuration:</strong> Field sales and service team enablement</li>
                  </ul>
                </div>

                {/* Analytics Implementation */}
                <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                  <h5 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    Analytics Implementation Services
                  </h5>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>Platform Setup:</strong> Power BI, Tableau, or SAP Analytics Cloud deployment</li>
                    <li>• <strong>Dashboard Development:</strong> Executive and operational reporting solutions</li>
                    <li>• <strong>Data Architecture:</strong> Robust data models and governance frameworks</li>
                    <li>• <strong>Self-Service Enablement:</strong> Training users for independent analytics creation</li>
                    <li>• <strong>Performance Optimization:</strong> Ongoing tuning for optimal performance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Details */}
            <div className="bg-[#D8F4FA] rounded-xl p-6">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Implementation Details
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Delivery Approach</h5>
                  <p className="text-[#334155] text-sm">Agile methodology with frequent validation checkpoints</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-[#0F79B9] mb-1">📅 Timeline</h5>
                  <p className="text-[#334155] text-sm">8-16 weeks depending on complexity and scope</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-[#0F79B9] mb-1">✅ Guarantee</h5>
                  <p className="text-[#334155] text-sm">Fixed-price delivery with agreed functionality and timeline</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link to="/services/implementation" className="block w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center">
                  Explore Implementation Services
                </Link>
                <Link to="/contact" className="block w-full border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center">
                  Request Implementation Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Add-On Integration Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">🔧</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">Add-On Integration Services</h3>
              <p className="text-[#334155]">Specialized deployment of manufacturing, warehouse, and productivity extensions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Manufacturing Extensions */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Manufacturing Extensions
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm mb-4">
                <li>• <strong>Beas Manufacturing:</strong> Advanced MRP, shop floor control, and quality management</li>
                <li>• <strong>Netronic Scheduling:</strong> Visual production planning with drag-and-drop scheduling</li>
                <li>• <strong>Quality Management:</strong> Inspection workflows, compliance documentation, and corrective actions</li>
              </ul>
              <div className="text-xs text-[#64748B]">
                <strong>Specialization:</strong> Deep expertise in each add-on platform
              </div>
            </div>

            {/* Warehouse & Logistics */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Warehouse & Logistics
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm mb-4">
                <li>• <strong>Produmex WMS:</strong> Complete warehouse management with barcode scanning</li>
                <li>• <strong>Produmex Scan:</strong> Mobile transaction processing for real-time inventory updates</li>
                <li>• <strong>3PL Integration:</strong> Connectivity with logistics providers and shipping carriers</li>
              </ul>
              <div className="text-xs text-[#64748B]">
                <strong>Timeline:</strong> 4-12 weeks for most add-on implementations
              </div>
            </div>

            {/* Productivity & Automation */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
              <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-4">
                Productivity & Automation
              </h4>
              <ul className="text-[#334155] space-y-2 text-sm mb-4">
                <li>• <strong>B1 Usability Package:</strong> UI customization, workflow automation, and user productivity</li>
                <li>• <strong>Perfion PIM:</strong> Product information management with multi-channel syndication</li>
                <li>• <strong>Vision33 Saltbox:</strong> Low-code integration platform for system connectivity</li>
              </ul>
              <div className="text-xs text-[#64748B]">
                <strong>Value:</strong> Enhanced functionality with seamless ERP integration
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/add-ons" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore Add-On Services
              </Link>
              <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request Add-On Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComprehensiveServicePortfolio
