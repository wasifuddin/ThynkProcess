import { Link } from 'react-router-dom'

const AdditionalIndustries = () => {
  const industries = [
    {
      name: "Logistics & Warehousing",
      icon: "🚛",
      description: "Supporting Australian transport and logistics compliance frameworks",
      subIndustries: [
        {
          name: "Third-Party Logistics (3PL)",
          icon: "📦",
          features: [
            "Transport operator documentation (can be configured for licensing compliance)",
            "Chain of Responsibility (CoR) documentation workflows",
            "Dangerous goods documentation (can support transport certification workflows)",
            "Customer SLA management and performance tracking",
            "Multi-client inventory segregation and management"
          ],
          solutions: "SAP Business One + Transport Licensing Module + Document Management, CoR Module + Responsibility Tracking + Crystal Reports, Dangerous Goods Module + Transport Documentation, SLA Module + Performance Analytics + Power BI, Produmex WMS + Client Segregation Module"
        },
        {
          name: "Freight Forwarding & Customs",
          icon: "🚢",
          features: [
            "Border compliance documentation workflows (can support ABF requirements)",
            "Customs documentation and declaration management",
            "International trade documentation automation",
            "Quarantine and biosecurity documentation support",
            "Free trade agreement documentation and utilization tracking"
          ],
          solutions: "SAP Business One + ABF Module + Border Documentation + Vision33 Saltbox, Customs Module + Declaration Management, Trade Documentation + Document Automation, Quarantine Module + Biosecurity Documentation, FTA Module + Trade Agreement Tracking"
        },
        {
          name: "Cold Chain & Temperature-Controlled",
          icon: "❄️",
          features: [
            "HACCP-style documentation for cold storage workflows",
            "Temperature validation and continuous monitoring",
            "Cold chain documentation (can be configured for GDP compliance)",
            "Energy efficiency monitoring and reporting",
            "Emergency response procedure documentation"
          ],
          solutions: "SAP Business One + Cold Chain HACCP Module + Temperature Documentation, IoT Temperature Sensors + Monitoring Dashboard + Power BI, GDP Module + Cold Chain Documentation, Energy Monitoring + IoT Integration + Power BI, Emergency Response Module + Procedure Management"
        },
        {
          name: "E-commerce Fulfillment",
          icon: "🏪",
          features: [
            "Consumer law compliance documentation support",
            "Pick and pack optimization workflows",
            "Multi-channel inventory allocation and management",
            "Returns processing and refurbishment tracking",
            "Customer service integration and management"
          ],
          solutions: "SAP Business One + Consumer Law Module + Compliance Documentation, Produmex WMS + Pick Optimization + Produmex Scan, Multi-Channel Module + Inventory Allocation + Vision33 Saltbox, Returns Module + Refurbishment Tracking + Produmex WMS, Salesforce Service Cloud + Customer Service Integration"
        },
        {
          name: "Heavy Transport & Logistics",
          icon: "🚛",
          features: [
            "Heavy vehicle compliance documentation (can support NHVR requirements)",
            "Fatigue management documentation and tracking",
            "Vehicle maintenance scheduling and record keeping",
            "Load planning and weight distribution documentation",
            "Route optimization with restriction management"
          ],
          solutions: "SAP Business One + NHVR Module + Vehicle Compliance + Document Management, Fatigue Management Module + Driver Tracking, Vehicle Maintenance Module + Scheduling Engine, Load Planning Module + Weight Distribution Calculator, Route Optimization + Restriction Engine + Mapping Integration"
        }
      ]
    },
    {
      name: "Agriculture & Agribusiness",
      icon: "🌾",
      description: "Supporting Australian agricultural compliance and standards",
      subIndustries: [
        {
          name: "Livestock & Meat Production",
          icon: "🐄",
          features: [
            "Livestock identification tracking (can be configured for NLIS-style compliance)",
            "Animal health and welfare documentation",
            "Production assurance documentation (similar to LPA requirements)",
            "Meat quality grading and classification tracking",
            "Export health certificate documentation management"
          ],
          solutions: "SAP Business One + NLIS Module + Animal Tracking + RFID Integration, Animal Health Module + Welfare Tracking + Document Management, LPA Module + Production Assurance + Crystal Reports, Quality Grading Module + Classification Engine, Health Certificate Module + Export Documentation"
        },
        {
          name: "Crop Production & Horticulture",
          icon: "🌱",
          features: [
            "Chemical registration and usage tracking (can support APVMA-style workflows)",
            "Crop protection and pest management documentation",
            "Organic certification documentation (can be configured for ACO, NASAA workflows)",
            "Good Agricultural Practice (GAP) documentation support",
            "Seasonal worker management and compliance tracking"
          ],
          solutions: "SAP Business One + Chemical Tracking Module + APVMA Documentation + Usage Analytics, Crop Protection Module + Pest Management + IoT Sensors, Organic Certification Module + ACO/NASAA Documentation, GAP Module + Practice Documentation + Crystal Reports, Worker Management + Compliance Tracking + HR Integration"
        },
        {
          name: "Wine & Viticulture",
          icon: "🍇",
          features: [
            "Wine industry documentation (can support Wine Australia levy requirements)",
            "Geographic indication and labeling compliance tracking",
            "Vintage records and quality documentation",
            "Cellar door sales and tourism management",
            "Export certification and documentation workflows"
          ],
          solutions: "SAP Business One + Wine Australia Module + Levy Management + Document Control, Geographic Indication Module + Label Compliance, Vintage Module + Quality Documentation + Batch Tracking, Cellar Door Module + Tourism Management + POS Integration, Wine Export Module + Certification Workflows"
        },
        {
          name: "Grain & Pulse Production",
          icon: "🌾",
          features: [
            "Grain quality testing and classification data management",
            "Export grain standards documentation support",
            "Storage and handling quality assurance workflows",
            "Crop insurance and risk management documentation",
            "Commodity trading and pricing management"
          ],
          solutions: "SAP Business One + Grain Quality Module + Laboratory Integration + Classification Engine, Grain Export Module + Standards Documentation, Storage QA Module + Handling Procedures + IoT Monitoring, Insurance Module + Risk Management + Document Control, Commodity Trading Module + Pricing Engine + Market Integration"
        },
        {
          name: "Aquaculture & Fisheries",
          icon: "🦐",
          features: [
            "Aquaculture license documentation and management",
            "Fish health monitoring and reporting workflows",
            "Environmental impact documentation",
            "Seafood safety documentation (can be configured for scheme compliance)",
            "Export establishment documentation support"
          ],
          solutions: "SAP Business One + Aquaculture License Module + Document Management, Fish Health Module + Monitoring Dashboard + Power BI, Environmental Impact Module + Impact Documentation, Seafood Safety Module + Scheme Documentation, Seafood Export Module + Establishment Documentation"
        }
      ]
    },
    {
      name: "Pharmaceutical & Healthcare",
      icon: "💊",
      description: "Supporting TGA compliance and Australian therapeutic goods requirements",
      subIndustries: [
        {
          name: "Pharmaceutical Manufacturing",
          icon: "💉",
          features: [
            "GMP documentation workflows (can be configured for TGA compliance)",
            "ARTG management and documentation support",
            "Pharmacovigilance and adverse event documentation",
            "Clinical trial material tracking and documentation",
            "Quality Person (QP) release documentation workflows"
          ],
          solutions: "SAP Business One + TGA GMP Module + Validation Documentation + Crystal Reports, ARTG Module + Registration Management + Document Control, Pharmacovigilance Module + Adverse Event Tracking + Salesforce, Clinical Trial Module + Material Tracking + Batch Control, QP Release Module + Release Documentation + Approval Workflows"
        },
        {
          name: "Biotechnology & Medical Devices",
          icon: "🧬",
          features: [
            "Medical device classification and documentation (can support TGA registration workflows)",
            "Quality management documentation (can be configured for ISO 13485 compliance)",
            "Clinical evaluation and post-market surveillance documentation",
            "Device identification (UDI) tracking and management",
            "International compliance documentation support"
          ],
          solutions: "SAP Business One + Medical Device Module + TGA Registration + Classification Engine, ISO 13485 Module + Quality Management + Document Control, Clinical Evaluation Module + Surveillance Tracking + Power BI, UDI Module + Device Tracking + Barcode Integration, International Compliance Module + Multi-Jurisdiction Support"
        },
        {
          name: "Healthcare Distribution",
          icon: "🏥",
          features: [
            "Pharmaceutical distribution documentation (can support PBS compliance workflows)",
            "Controlled drug scheduling and tracking capabilities",
            "Trading terms and pricing management",
            "Cold chain distribution validation documentation",
            "Healthcare provider documentation and tracking"
          ],
          solutions: "SAP Business One + PBS Module + Distribution Documentation + Pricing Integration, Controlled Substance Module + Schedule Tracking + Chain of Custody, Healthcare Pricing Module + Terms Management + Guild Integration, Cold Chain Module + IoT Temperature + Validation Documentation, Provider Module + Accreditation Tracking + Salesforce"
        },
        {
          name: "Contract Research & Testing",
          icon: "🔬",
          features: [
            "Laboratory accreditation documentation support (can be configured for NATA requirements)",
            "Good Laboratory Practice (GLP) documentation workflows",
            "Clinical trial monitoring and data integrity documentation",
            "Regulatory submission documentation support",
            "Quality assurance and audit documentation management"
          ],
          solutions: "SAP Business One + NATA Module + Accreditation Documentation + Laboratory Management, GLP Module + Practice Documentation + Quality Control, Clinical Monitoring Module + Data Integrity + Audit Trail, Regulatory Submission Module + Document Management + Workflow Engine, QA Module + Audit Management + Crystal Reports"
        },
        {
          name: "Complementary Medicines",
          icon: "🌿",
          features: [
            "Medicine registration documentation (can support listed/registered requirements)",
            "GMP documentation for complementary medicines",
            "Advertising compliance and therapeutic claims documentation",
            "Import and export licensing documentation",
            "Pharmacovigilance documentation for natural products"
          ],
          solutions: "SAP Business One + Complementary Medicine Module + Registration Documentation + TGA Integration, Complementary GMP Module + Manufacturing Documentation, Advertising Compliance Module + Claims Management, Import/Export Module + Licensing Documentation + Customs Integration, Natural Product PV Module + Adverse Event Tracking"
        }
      ]
    },
    {
      name: "Retail & eCommerce",
      icon: "🛍",
      description: "Supporting Australian Consumer Law and retail standards compliance",
      subIndustries: [
        {
          name: "Grocery & Supermarket",
          icon: "🛒",
          features: [
            "Australian Consumer Law compliance",
            "Unit pricing and country of origin labeling",
            "Fresh produce quality and safety",
            "Promotional compliance and pricing accuracy",
            "Supply chain sustainability reporting"
          ],
          solutions: "SAP Business One + Consumer Law Module + Compliance Documentation + Legal Framework, Pricing Module + Origin Labeling + Perfion PIM, Produce Quality Module + Safety Tracking + Temperature Monitoring, Promotion Module + Pricing Validation + Compliance Engine, Sustainability Module + Supply Chain Tracking + Power BI"
        },
        {
          name: "Fashion & Apparel",
          icon: "👕",
          features: [
            "Textile labeling and care instructions",
            "Ethical sourcing and supply chain transparency",
            "Size standardization and fit guidelines",
            "Returns and warranty compliance",
            "Sustainable fashion certification"
          ],
          solutions: "SAP Business One + Textile Module + Label Management + Perfion PIM, Ethical Sourcing Module + Supply Chain Transparency + Traceability, Size Module + Standardization Engine + Product Management, Returns Module + Warranty Management + Consumer Law Compliance, Sustainability Certification + Fashion Module + Document Management"
        },
        {
          name: "Electronics & Technology Retail",
          icon: "💻",
          features: [
            "Electrical safety compliance and certification",
            "Energy rating labels and efficiency standards",
            "Telecommunications equipment certification",
            "E-waste management and recycling",
            "Extended warranty and service agreements"
          ],
          solutions: "SAP Business One + Electrical Safety Module + Certification Tracking + RCM Management, Energy Rating Module + Efficiency Standards + Label Management, Telecom Certification + ACMA Compliance + Equipment Tracking, E-Waste Module + Recycling Tracking + Environmental Compliance, Extended Warranty Module + Service Agreement Management + Salesforce"
        },
        {
          name: "Home & Garden",
          icon: "🏠",
          features: [
            "Product safety standards compliance",
            "Chemical and hazardous product management",
            "Building materials certification",
            "Outdoor equipment safety standards",
            "Plant health and quarantine compliance"
          ],
          solutions: "SAP Business One + Product Safety Module + Standards Compliance + Safety Documentation, Chemical Management + Hazardous Goods + SDS Integration, Building Materials Module + Certification Tracking + CodeMark Integration, Outdoor Safety Module + Equipment Standards + Safety Certification, Plant Health Module + Quarantine Compliance + Biosecurity Documentation"
        },
        {
          name: "Sports & Recreation",
          icon: "⚽",
          features: [
            "Sports equipment safety standards",
            "Fitness equipment certification",
            "Recreational vehicle compliance",
            "Sports supplement regulation",
            "Event management and insurance"
          ],
          solutions: "SAP Business One + Sports Safety Module + Equipment Standards + Safety Certification, Fitness Equipment Module + Certification Tracking + Safety Standards, RV Compliance Module + Vehicle Standards + ADR Integration, Supplement Module + TGA Compliance + Regulation Tracking, Event Management + Insurance Module + Risk Management + Salesforce"
        }
      ]
    }
  ]

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Additional Industries
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Comprehensive solutions for diverse Australian industries with specialized compliance requirements.
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
                <div key={subIndex} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-lg transition-shadow">
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

export default AdditionalIndustries
