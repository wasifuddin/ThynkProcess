import { Link } from 'react-router-dom'

const SpecializedServices = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <div className="text-4xl mr-4">⚙️</div>
          <div>
            <h2 className="text-3xl font-bold font-montserrat text-[#0E1A6A]">Specialized Services</h2>
            <p className="text-xl text-[#334155]">Industry-specific and compliance-focused services</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Compliance & Regulatory Services */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#E2E8F0]">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Compliance & Regulatory Services
              </h3>
              <p className="text-[#334155] mb-6">
                Ensure adherence to Australian and international standards
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    Industry Compliance Services
                  </h4>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>Food Safety:</strong> HACCP implementation, allergen management, and food safety protocols</li>
                    <li>• <strong>Pharmaceutical:</strong> TGA compliance, GMP workflows, and validation documentation</li>
                    <li>• <strong>Manufacturing:</strong> ISO 9001, quality management, and safety standard adherence</li>
                    <li>• <strong>Financial:</strong> ATO compliance, GST automation, and audit preparation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    Standards Implementation Services
                  </h4>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>Australian Standards:</strong> AS/NZS compliance framework implementation</li>
                    <li>• <strong>Quality Management:</strong> ISO certification support and documentation</li>
                    <li>• <strong>Environmental:</strong> Sustainability reporting and environmental management</li>
                    <li>• <strong>Safety:</strong> Workplace safety compliance and risk management</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    Audit & Documentation Services
                  </h4>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>Audit Preparation:</strong> Comprehensive documentation and process validation</li>
                    <li>• <strong>Compliance Monitoring:</strong> Ongoing adherence tracking and reporting</li>
                    <li>• <strong>Documentation Management:</strong> Version control, approval workflows, and maintenance</li>
                    <li>• <strong>Training & Certification:</strong> Staff training and competency management</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#D8F4FA] rounded-xl p-4 mt-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Expertise</h5>
                    <p className="text-[#334155] text-xs">Deep knowledge of Australian regulatory requirements</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">✅ Success Rate</h5>
                    <p className="text-[#334155] text-xs">100% audit success rate for implemented compliance frameworks</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">📋 Documentation</h5>
                    <p className="text-[#334155] text-xs">Complete audit trails and compliance documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Management Services */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#E2E8F0]">
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Project Management Services
              </h3>
              <p className="text-[#334155] mb-6">
                Professional project leadership for complex implementations
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    Certified Project Management
                  </h4>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>Methodology Expertise:</strong> Agile, Waterfall, and hybrid project management approaches</li>
                    <li>• <strong>Risk Management:</strong> Comprehensive risk identification, assessment, and mitigation</li>
                    <li>• <strong>Stakeholder Management:</strong> Communication planning and expectation management</li>
                    <li>• <strong>Quality Assurance:</strong> Deliverable validation and acceptance criteria management</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    Specialized Project Types
                  </h4>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>Multi-Site Rollouts:</strong> Coordinated implementation across multiple locations</li>
                    <li>• <strong>Complex Integrations:</strong> Large-scale system integration projects</li>
                    <li>• <strong>Digital Transformation:</strong> End-to-end transformation program management</li>
                    <li>• <strong>Compliance Projects:</strong> Regulatory compliance and certification projects</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-3">
                    Project Support Services
                  </h4>
                  <ul className="text-[#334155] space-y-2 text-sm">
                    <li>• <strong>Project Office Setup:</strong> PMO establishment and governance framework development</li>
                    <li>• <strong>Resource Management:</strong> Team coordination and capacity planning</li>
                    <li>• <strong>Vendor Management:</strong> Third-party coordination and contract management</li>
                    <li>• <strong>Knowledge Transfer:</strong> Documentation and training program delivery</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#D8F4FA] rounded-xl p-4 mt-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">🎯 Certification</h5>
                    <p className="text-[#334155] text-xs">PMI-certified project managers with industry expertise</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">📊 Track Record</h5>
                    <p className="text-[#334155] text-xs">100% on-time delivery rate with scope and budget adherence</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F79B9] mb-1">🔄 Methodology</h5>
                    <p className="text-[#334155] text-xs">Proven delivery framework with regular checkpoint reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services/compliance" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Explore Compliance Services
            </Link>
            <Link to="/services/project-management" className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Explore Project Management
            </Link>
            <Link to="/contact" className="border border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Request Service Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecializedServices
