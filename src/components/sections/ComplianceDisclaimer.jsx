const ComplianceDisclaimer = () => {
  return (
    <section className="py-16 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-[#E2E8F0]">
          <h2 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
            Compliance Disclaimer
          </h2>
          
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#92400E] mb-4">
              Important Note
            </h3>
            <p className="text-[#92400E] leading-relaxed">
              While our solutions can be configured to support Australian standards and compliance requirements, specific compliance outcomes depend on proper implementation, user processes, and ongoing maintenance. We recommend consulting with relevant regulatory bodies and compliance experts for specific requirements. All compliance configurations are developed based on client requirements and may require additional development or third-party integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComplianceDisclaimer
