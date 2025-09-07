const LeadershipTeam = () => {
  const team = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      bio: "15+ years in technology leadership, former VP at Microsoft",
      avatar: "👩‍💼",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Expert in cloud architecture and AI/ML, PhD in Computer Science",
      avatar: "👨‍💻",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      position: "Chief Operating Officer",
      bio: "Operations excellence leader with 20+ years global experience",
      avatar: "👩‍⚕️",
      linkedin: "#"
    },
    {
      name: "David Thompson",
      position: "Chief Financial Officer",
      bio: "Former investment banker, expert in scaling technology companies",
      avatar: "👨‍💼",
      linkedin: "#"
    },
    {
      name: "Lisa Wang",
      position: "Chief Marketing Officer",
      bio: "Brand strategist and growth expert, former Google executive",
      avatar: "👩‍🎨",
      linkedin: "#"
    },
    {
      name: "James Wilson",
      position: "VP of Engineering",
      bio: "Full-stack development expert, leads our 200+ engineering team",
      avatar: "👨‍🔬",
      linkedin: "#"
    }
  ]

  return (
    <section className="py-20 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Meet the visionary leaders who drive our company's success and innovation 
            across all aspects of our business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-2">
                  {member.name}
                </h3>
                <div className="text-[#12A8D4] font-semibold mb-4">
                  {member.position}
                </div>
                <p className="text-[#64748B] text-sm mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
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
