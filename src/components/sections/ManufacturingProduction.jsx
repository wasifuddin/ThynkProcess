import { Link } from 'react-router-dom'

const ManufacturingProduction = () => {
  const beasFeatures = [
    "Advanced MRP: Material requirements planning with capacity constraints",
    "Shop Floor Control: Real-time data collection, digital work instructions",
    "Quality Management: In-line inspections, non-conformance tracking, corrective actions",
    "Costing & Analytics: Job costing, variance analysis, production KPIs"
  ]

  const beasTechnical = [
    "SAP B1 Native: Seamless integration with all SAP Business One modules",
    "IoT Connectivity: Machine data collection and monitoring",
    "Mobile Apps: Shop floor terminals and handheld devices",
    "Barcode Support: Production tracking and material movement"
  ]

  const beasApplications = [
    "Discrete manufacturing (automotive, electronics, machinery)",
    "Process manufacturing (food, chemicals, pharmaceuticals)",
    "Make-to-order and configure-to-order environments",
    "Job shop and project-based manufacturing"
  ]

  const netronicFeatures = [
    "Visual Gantt Charts: Interactive scheduling with real-time updates",
    "Finite Capacity: Resource-constrained scheduling with bottleneck analysis",
    "Scenario Planning: What-if analysis and optimization recommendations",
    "Integration: Native connectivity with Beas Manufacturing and SAP B1"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Advanced Manufacturing & Production
          </h2>
        </div>

        {/* Beas Manufacturing */}
        <div className="bg-[#F8FAFC] rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🏭</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                Beas Manufacturing
              </h3>
              <p className="text-[#64748B]">
                Advanced manufacturing execution system for SAP Business One
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Production Management:</h4>
              <div className="space-y-2">
                {beasFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Technical Integration:</h4>
              <div className="space-y-2">
                {beasTechnical.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Industry Applications:</h4>
              <div className="space-y-2">
                {beasApplications.map((app, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products/beas-manufacturing"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View Beas Manufacturing Details
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Netronic Scheduling */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#E2E8F0]">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">📅</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                Netronic Scheduling
              </h3>
              <p className="text-[#64748B]">
                Visual production scheduling with drag-and-drop Gantt charts
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Scheduling Capabilities:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {netronicFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#334155] text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products/netronic"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View Netronic Details
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManufacturingProduction
