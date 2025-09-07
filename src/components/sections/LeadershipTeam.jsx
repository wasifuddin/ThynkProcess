const LeadershipTeam = () => {
  const team = [
    {
      name: "Kalaiy Veerasamy",
      position: "Chief Operating Officer (COO) & Solution Architect",
      bio: "Kalaiy brings 16 years of hands-on experience in ERP architecture, warehousing automation, and systems integration. As COO, he oversees delivery operations, technical solution design, and business intelligence strategy across SAP B1, Salesforce, and custom integrations. Having worked across India, Singapore, Malaysia, and Australia, Kalaiy bridges business needs with scalable digital solutions for growing enterprises.",
      interests: "Personal Interests: TBA",
      avatar: "👨‍💻",
      linkedin: "#"
    },
    {
      name: "Pritesh Shah",
      position: "Chief Executive Officer (CEO) & ERP Strategy Lead",
      bio: "With over 22 years of experience in ERP strategy and manufacturing system design, Pritesh leads the strategic vision of ThynkProcess. A seasoned SAP Business One expert, he has architected complex ERP solutions across India, the USA, and Australia, delivering measurable value to manufacturing and production businesses. His deep understanding of shopfloor operations and process automation enables clients to scale with confidence.",
      interests: "Personal Interests: TBA",
      avatar: "👨‍💼",
      linkedin: "#"
    },
    {
      name: "Rafi Mustafa",
      position: "Director of Sales & Client Growth",
      bio: "Rafi is an accomplished business leader with a strong track record in sales, marketing, and commercial operations across leading Australian firms. With past leadership roles in global tech environments including Amazon, he brings deep expertise in ERP/CRM adoption, client engagement, and go-to-market execution. Having worked in Australia, England, and South Africa, Rafi leads all growth, marketing, and customer success functions at ThynkProcess.",
      interests: "Personal Interests: TBA",
      avatar: "👨‍🎯",
      linkedin: "#"
    }
  ]

  return (
    <section className="py-20 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="text-6xl mb-6">{member.avatar}</div>
                <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                  {member.name}
                </h3>
                <div className="text-[#12A8D4] font-semibold mb-4 text-sm">
                  {member.position}
                </div>
                <p className="text-[#64748B] text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <p className="text-[#64748B] text-xs mb-4 italic">
                  {member.interests}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipTeam
