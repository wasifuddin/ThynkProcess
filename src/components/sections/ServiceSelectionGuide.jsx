import { Link } from 'react-router-dom'

const ServiceSelectionGuide = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🎯 Service Selection Guide
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Choose the right services for your business needs and implementation phase.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Choose by Implementation Phase */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Choose by Implementation Phase
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">Pre-Implementation Services</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Business assessment and readiness evaluation</li>
                  <li>• Solution design and architecture planning</li>
                  <li>• Vendor selection and procurement support</li>
                  <li>• Project planning and resource allocation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">Implementation Services</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Platform deployment and configuration</li>
                  <li>• Data migration and system integration</li>
                  <li>• User training and change management</li>
                  <li>• Testing and quality assurance</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">Post-Implementation Services</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• System optimization and performance tuning</li>
                  <li>• User adoption support and training</li>
                  <li>• Ongoing maintenance and support</li>
                  <li>• Continuous improvement and enhancement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Choose by Business Need */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Choose by Business Need
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">New System Implementation</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Full implementation services with project management</li>
                  <li>• Data migration and integration services</li>
                  <li>• User training and change management</li>
                  <li>• Go-live support and stabilization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">System Optimization</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Performance tuning and optimization</li>
                  <li>• Process improvement and automation</li>
                  <li>• User adoption enhancement</li>
                  <li>• Advanced feature implementation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">Ongoing Support</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Technical support and maintenance</li>
                  <li>• Managed services and administration</li>
                  <li>• Strategic advisory and planning</li>
                  <li>• Compliance and regulatory support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Choose by Organization Size */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Choose by Organization Size
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">Small Business (5-25 users)</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Essential implementation services</li>
                  <li>• Basic integration and automation</li>
                  <li>• Standard support and training</li>
                  <li>• Cost-effective service packages</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">Mid-Market (25-100 users)</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Comprehensive implementation services</li>
                  <li>• Advanced integration and automation</li>
                  <li>• Professional support and managed services</li>
                  <li>• Strategic advisory and planning</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#0F79B9] mb-2">Enterprise (100+ users)</h4>
                <ul className="text-[#334155] space-y-1 text-sm">
                  <li>• Enterprise implementation services</li>
                  <li>• Complex integration and automation</li>
                  <li>• Premium support and managed services</li>
                  <li>• Executive advisory and strategic planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSelectionGuide
