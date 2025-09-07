const Partnerships = () => {
  const partnerships = [
    {
      category: "Technology Partners",
      partners: [
        { name: "Microsoft", logo: "🔷", description: "Azure Cloud Solutions" },
        { name: "Amazon Web Services", logo: "☁️", description: "Cloud Infrastructure" },
        { name: "Google Cloud", logo: "🔍", description: "AI & Analytics" },
        { name: "Salesforce", logo: "⚡", description: "CRM Integration" }
      ]
    },
    {
      category: "Certifications",
      certifications: [
        { name: "ISO 27001", description: "Information Security Management" },
        { name: "SOC 2 Type II", description: "Security & Availability" },
        { name: "GDPR Compliant", description: "Data Protection" },
        { name: "HIPAA Certified", description: "Healthcare Compliance" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Partnerships & Certifications
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            We work with industry leaders and maintain the highest standards of 
            security, compliance, and quality to deliver exceptional results.
          </p>
        </div>

        <div className="space-y-16">
          {partnerships.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8 text-center">
                {section.category}
              </h3>
              
              {section.partners && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.partners.map((partner, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{partner.logo}</div>
                      <h4 className="font-bold text-[#0E1A6A] mb-2">{partner.name}</h4>
                      <p className="text-sm text-[#64748B]">{partner.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.certifications && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.certifications.map((cert, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">🏆</div>
                      <h4 className="font-bold text-[#0E1A6A] mb-2">{cert.name}</h4>
                      <p className="text-sm text-[#64748B]">{cert.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partnerships
