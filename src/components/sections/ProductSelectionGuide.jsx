const ProductSelectionGuide = () => {
  const businessSizes = [
    {
      size: "Small Business (5-25 users)",
      products: "SAP Business One Starter, Salesforce Essentials, Power BI Pro"
    },
    {
      size: "Mid-Market (25-100 users)",
      products: "SAP Business One Professional, Salesforce Professional, Advanced Analytics"
    },
    {
      size: "Enterprise (100+ users)",
      products: "SAP Business One Enterprise, Salesforce Enterprise, Premium Analytics"
    }
  ]

  const industries = [
    {
      industry: "Manufacturing",
      products: "SAP B1 + Beas Manufacturing + Produmex WMS + Netronic"
    },
    {
      industry: "Distribution",
      products: "SAP B1 + Produmex WMS + Saltbox + EDI Integration"
    },
    {
      industry: "Retail",
      products: "SAP B1 + Salesforce + E-commerce Integration + PIM"
    },
    {
      industry: "Services",
      products: "SAP B1 + Salesforce + Field Service + Analytics"
    }
  ]

  const departments = [
    {
      department: "Finance",
      products: "SAP Business One + Power BI + Acassia Bank Feeds"
    },
    {
      department: "Sales",
      products: "Salesforce CRM + SAP B1 Integration + Mobile Apps"
    },
    {
      department: "Operations",
      products: "SAP B1 + Beas Manufacturing + Produmex WMS"
    },
    {
      department: "IT",
      products: "Platform APIs + Integration Tools + Monitoring Dashboards"
    }
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Product Selection Guide
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Choose by Business Size */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Choose by Business Size
            </h3>
            <div className="space-y-4">
              {businessSizes.map((size, index) => (
                <div key={index} className="border-l-4 border-[#12A8D4] pl-4">
                  <h4 className="font-semibold text-[#0E1A6A] mb-1">{size.size}</h4>
                  <p className="text-[#64748B] text-sm">{size.products}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Choose by Industry */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Choose by Industry
            </h3>
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <div key={index} className="border-l-4 border-[#0F79B9] pl-4">
                  <h4 className="font-semibold text-[#0E1A6A] mb-1">{industry.industry}</h4>
                  <p className="text-[#64748B] text-sm">{industry.products}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Choose by Department */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Choose by Department
            </h3>
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div key={index} className="border-l-4 border-[#0D4E9E] pl-4">
                  <h4 className="font-semibold text-[#0E1A6A] mb-1">{dept.department}</h4>
                  <p className="text-[#64748B] text-sm">{dept.products}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSelectionGuide
