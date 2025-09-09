import { Link } from 'react-router-dom'

const CoreIndustries = () => {
  const industries = [
    {
      name: "Food & Beverage",
      icon: "🥫",
      description: "Supporting compliance with Food Standards Australia New Zealand (FSANZ) requirements",
      subIndustries: [
        {
          name: "Meat Processing & Abattoirs",
          icon: "🍖",
          features: [
            "HACCP workflow support (can be configured for AS 4696:2007 compliance)",
            "Laboratory integration capabilities for microbiological testing results",
            "Export documentation workflows (similar to export register requirements)",
            "Cold chain monitoring and temperature validation tracking",
            "Certification tracking (can be configured for Halal and Kosher requirements)"
          ],
          solutions: "SAP Business One + Beas Manufacturing + Custom HACCP Module, Laboratory Integration APIs + Crystal Reports, Export Documentation Module, IoT Temperature Monitoring + Produmex WMS, Certificate Management Module"
        },
        {
          name: "Dairy & Dairy Products",
          icon: "🐄",
          features: [
            "Quality testing data integration (can connect with laboratory systems)",
            "Process monitoring and validation documentation",
            "Export documentation workflows (similar to export dairy establishment requirements)",
            "Nutritional panel data management and labeling support",
            "Allergen management and traceability workflows"
          ],
          solutions: "SAP Business One + Laboratory Integration APIs, Beas Manufacturing + Process Control Module, Export Documentation Module, Perfion PIM + Label Management, Batch Tracking + Allergen Module"
        },
        {
          name: "Bakery & Confectionery",
          icon: "🍞",
          features: [
            "Ingredient allergen tracking and labeling workflows",
            "Shelf-life management and expiry tracking",
            "Recipe management with scaling capabilities",
            "Production workflow management for artisan and commercial operations"
          ],
          solutions: "SAP Business One + Batch Management + Allergen Tracking, Expiry Management + Alert Systems, Beas Manufacturing + Recipe Management, Production Planning Module"
        },
        {
          name: "Beverages & Brewing",
          icon: "🍺",
          features: [
            "Excise and licensing documentation support (custom configuration available)",
            "Quality testing data integration and alcohol content tracking",
            "Compliance documentation workflows (can be configured for AWBC requirements)",
            "Production management for craft brewing and distillery operations",
            "Export documentation support"
          ],
          solutions: "SAP Business One + Custom Excise Module, Laboratory Integration + Quality Module, Compliance Module + Crystal Reports, Beas Manufacturing + Batch Control, Export Module + Document Automation"
        },
        {
          name: "Grain Processing & Milling",
          icon: "🌾",
          features: [
            "Quality testing and grading data integration",
            "Chemical treatment and fumigation record keeping",
            "Export documentation workflows (can support grain standards compliance)",
            "Storage management with monitoring capabilities",
            "Bulk handling and logistics coordination"
          ],
          solutions: "SAP Business One + Laboratory APIs + Quality Management, Chemical Tracking + Compliance Module, Export Documentation + Compliance, Warehouse Management + IoT Integration, Produmex WMS + Transport Integration"
        },
        {
          name: "Seafood & Aquaculture",
          icon: "🐟",
          features: [
            "Seafood safety documentation workflows (can be configured for scheme compliance)",
            "Catch documentation and traceability management",
            "Export documentation support (similar to establishment requirements)",
            "Laboratory data integration capabilities",
            "Aquaculture management and feed tracking"
          ],
          solutions: "SAP Business One + Safety Module + Document Management, Traceability Module + Batch Tracking, Export Module + Compliance, Laboratory APIs + Quality Management, Aquaculture Module + Inventory Management"
        }
      ]
    },
    {
      name: "Wholesale Distribution",
      icon: "📦",
      description: "Configured for Australian distribution and logistics workflows",
      subIndustries: [
        {
          name: "Industrial & Trade Supplies",
          icon: "🔧",
          features: [
            "Safety Data Sheet (SDS) management and document control",
            "Dangerous goods documentation workflows (can be configured for transport compliance)",
            "Trade account and contractor management",
            "Pricing and volume discount automation",
            "Technical specification and documentation management"
          ],
          solutions: "SAP Business One + Document Management + SDS Module, Dangerous Goods Module + Transport Documentation, CRM Module + Customer Management, Pricing Engine + Volume Discount Module, Perfion PIM + Technical Documentation"
        },
        {
          name: "Medical & Pharmaceutical Distribution",
          icon: "🏥",
          features: [
            "Controlled substance tracking workflows (can be configured for TGA scheduling)",
            "Cold chain monitoring and temperature validation",
            "Pricing structure management (can be configured for guild compliance)",
            "Medical device tracking and classification support",
            "Pricing integration capabilities (similar to PBS/RPBS requirements)"
          ],
          solutions: "SAP Business One + Controlled Substance Module + Compliance Tracking, IoT Temperature Monitoring + Produmex WMS, Pricing Module + Guild Compliance, Device Classification + Inventory Management, PBS Integration Module + Pricing Engine"
        },
        {
          name: "Hardware & Building Materials",
          icon: "🛠️",
          features: [
            "Compliance documentation tracking (can support Building Codes verification)",
            "Safety certification and standards tracking workflows",
            "Trade account management with credit terms",
            "Delivery optimization and scheduling",
            "Warranty and product liability documentation",
            "Dangerous goods classification for chemicals and adhesives",
            "Product specification management for technical products"
          ],
          solutions: "SAP Business One + Compliance Module + Document Management, Certificate Management + Standards Tracking, Trade Account Module + Credit Management, Delivery Optimization + Scheduling Module, Warranty Management + Document Control, Dangerous Goods Module + Classification Engine, Perfion PIM + Technical Specifications"
        },
        {
          name: "Electrical & Electronics",
          icon: "⚡",
          features: [
            "Safety compliance documentation (can track AS/NZS 3000 series compliance)",
            "Testing and certification record management",
            "Energy rating and efficiency data tracking",
            "Regulatory compliance mark (RCM) documentation support",
            "Technical documentation and specification management"
          ],
          solutions: "SAP Business One + Safety Compliance Module + Standards Tracking, Testing Module + Certificate Management, Energy Rating Module + Efficiency Tracking, RCM Module + Compliance Documentation, Perfion PIM + Technical Documentation"
        },
        {
          name: "Automotive Parts & Accessories",
          icon: "🚗",
          features: [
            "Compliance verification workflows (can be configured for ADR requirements)",
            "Vehicle identification and parts compatibility tracking",
            "Warranty management and recall procedure documentation",
            "Technical service bulletin management",
            "Parts certification and documentation tracking"
          ],
          solutions: "SAP Business One + ADR Compliance Module + Verification Workflows, VIN Module + Compatibility Engine, Warranty Module + Recall Management, TSB Module + Document Management, Certification Module + Document Control"
        }
      ]
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Supporting Australian manufacturing standards and quality frameworks",
      subIndustries: [
        {
          name: "Precision Engineering & Machining",
          icon: "⚙️",
          features: [
            "Quality management system support (can be configured for AS/NZS ISO 9001)",
            "Calibration tracking and measurement uncertainty documentation",
            "Testing data integration (can connect with NATA-accredited testing)",
            "CNC programming and tool management",
            "Statistical process control and quality monitoring"
          ],
          solutions: "SAP Business One + ISO 9001 Module + Quality Management + Crystal Reports, Calibration Module + Measurement Tracking, Laboratory APIs + Testing Integration, CNC Integration + Tool Management Module, SPC Module + Power BI + Quality Analytics"
        },
        {
          name: "Steel Fabrication & Structural",
          icon: "🏗️",
          features: [
            "Welding standards documentation (can support AS/NZS 1554 compliance workflows)",
            "Material certification and mill test certificate management",
            "Welding procedure specification (WPS) documentation",
            "Non-destructive testing (NDT) data integration capabilities",
            "Structural certification tracking and documentation"
          ],
          solutions: "SAP Business One + Welding Module + Standards Documentation + Crystal Reports, Material Certification + Document Management, WPS Module + Procedure Management, NDT Integration + Testing APIs, Structural Module + Certification Tracking"
        },
        {
          name: "Chemical Manufacturing & Processing",
          icon: "🧪",
          features: [
            "Chemical compliance documentation (can be configured for NICNAS requirements)",
            "GHS classification and labeling workflow support",
            "Process safety documentation (similar to AS 61511 requirements)",
            "Environmental monitoring and emissions data tracking",
            "Dangerous goods classification and documentation"
          ],
          solutions: "SAP Business One + Chemical Compliance Module + NICNAS Documentation, GHS Module + Label Management + Perfion PIM, Process Safety Module + Beas Manufacturing, Environmental Module + IoT Sensors + Power BI, Dangerous Goods Module + Classification Engine"
        },
        {
          name: "Food Equipment & Processing Machinery",
          icon: "🍽️",
          features: [
            "Food-grade material certification tracking",
            "Sanitary design compliance documentation (can support AS 4674 workflows)",
            "Equipment validation documentation (similar to HACCP requirements)",
            "Maintenance scheduling with food safety protocol support",
            "Export certification documentation for equipment"
          ],
          solutions: "SAP Business One + Material Certification + Food Grade Module, Sanitary Design Module + Compliance Documentation, Equipment Validation + HACCP Module, Maintenance Module + Food Safety Protocols, Export Certification + Document Management"
        },
        {
          name: "Electrical Equipment Manufacturing",
          icon: "🔌",
          features: [
            "Electrical safety testing documentation (can track AS/NZS 61010 compliance)",
            "EMC compliance testing and certification record management",
            "Energy efficiency standards documentation support",
            "Product safety recall and corrective action management",
            "Technical file management for compliance documentation"
          ],
          solutions: "SAP Business One + Electrical Safety Module + Testing Documentation + Crystal Reports, EMC Module + Testing Integration + Certificate Management, Energy Efficiency Module + Standards Documentation, Recall Management + Corrective Action Module, Technical File Module + Document Management + Perfion PIM"
        },
        {
          name: "Building Products & Materials",
          icon: "🧱",
          features: [
            "Certification tracking workflows (can be configured for CodeMark requirements)",
            "Building codes compliance documentation support",
            "Fire resistance testing data management (can track AS 1530 series)",
            "Environmental product declaration management",
            "Sustainability and green building documentation support"
          ],
          solutions: "SAP Business One + CodeMark Module + Certification Tracking, Building Codes Module + Compliance Documentation, Fire Testing Module + Laboratory Integration, EPD Module + Environmental Documentation, Sustainability Module + Green Building Documentation + Power BI"
        }
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Core Industries & Sub-Industries
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Comprehensive industry-specific solutions with Australian compliance and standards support.
          </p>
        </div>

        {industries.map((industry, industryIndex) => (
          <div key={industryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">{industry.icon}</div>
              <div>
                <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A]">{industry.name}</h3>
                <p className="text-[#334155]">{industry.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.subIndustries.map((subIndustry, subIndex) => (
                <div key={subIndex} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">{subIndustry.icon}</div>
                    <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A]">
                      {subIndustry.name}
                    </h4>
                  </div>
                  
                  <ul className="text-[#334155] space-y-2 mb-4">
                    {subIndustry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="p-3 bg-[#D8F4FA] rounded-lg">
                    <p className="text-xs text-[#0E1A6A] font-semibold">
                      <strong>Solutions:</strong> {subIndustry.solutions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreIndustries
