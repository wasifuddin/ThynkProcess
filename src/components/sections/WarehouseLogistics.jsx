import { Link } from 'react-router-dom'

const WarehouseLogistics = () => {
  const produmexWMSFeatures = [
    "Inbound Processing: ASN receiving, guided putaway, quality inspection",
    "Outbound Processing: Wave picking, packing, shipping label generation",
    "Inventory Control: Bin-level tracking, cycle counting, FIFO/LIFO logic",
    "Barcode Integration: GS1/SSCC compliance, mobile scanning devices"
  ]

  const produmexAdvanced = [
    "3PL Integration: Carrier connectivity, tracking updates, delivery confirmation",
    "Labor Management: Productivity tracking, task optimization, performance analytics",
    "Cross-Docking: Direct transfer workflows, staging optimization",
    "Returns Processing: Reverse logistics, refurbishment tracking, disposal management"
  ]

  const produmexScanFeatures = [
    "Transaction Processing: GRPO, deliveries, inventory transfers, production issues",
    "Mobile Platform: Android devices, handheld scanners, wearable devices",
    "Barcode Standards: Support for all standard formats including GS1",
    "Real-Time Updates: Instant posting to SAP Business One with validation"
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Warehouse & Logistics
          </h2>
        </div>

        {/* Produmex WMS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">📦</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                Produmex WMS
              </h3>
              <p className="text-[#64748B]">
                Complete warehouse management system for SAP Business One
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Warehouse Operations:</h4>
              <div className="space-y-2">
                {produmexWMSFeatures.map((feature, index) => (
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
              <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Advanced Features:</h4>
              <div className="space-y-2">
                {produmexAdvanced.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-[#12A8D4] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#334155] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products/produmex-wms"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View Produmex WMS Details
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Produmex Scan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#E2E8F0]">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">📱</div>
            <div>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">
                Produmex Scan
              </h3>
              <p className="text-[#64748B]">
                Mobile barcode scanning for real-time SAP Business One transactions
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-[#0E1A6A] mb-4">Scanning Capabilities:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {produmexScanFeatures.map((feature, index) => (
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
              to="/products/produmex-scan"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4"
            >
              View Produmex Scan Details
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

export default WarehouseLogistics
