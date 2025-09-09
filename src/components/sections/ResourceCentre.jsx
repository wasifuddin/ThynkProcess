import { Link } from 'react-router-dom'

const ResourceCentre = () => {
  const resourceCategories = [
    {
      title: "Guides & Playbooks",
      icon: "📘",
      description: "Download ERP/CRM readiness checklists, transformation frameworks, and step-by-step implementation guides",
      link: "/resources/guides",
      linkText: "Explore Guides"
    },
    {
      title: "Industry Toolkits",
      icon: "📖",
      description: "Access industry-specific toolkits with templates, workflows, and compliance checklists for your sector",
      link: "/resources/toolkits",
      linkText: "Explore Toolkits"
    },
    {
      title: "AI & Automation",
      icon: "🤖",
      description: "Discover automation strategies, AI implementation guides, and intelligent process optimization",
      link: "/resources/automation",
      linkText: "Explore AI Resources"
    },
    {
      title: "Learning Hub",
      icon: "📅",
      description: "Join live workshops, on-demand webinars, and certification programs",
      link: "/resources/learning",
      linkText: "Register Now"
    },
    {
      title: "Expert Insights",
      icon: "📈",
      description: "Stay ahead with trend analysis, implementation insights, and strategic guidance",
      link: "/resources/insights",
      linkText: "Visit Blog"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🧭 Resource Centre
          </h2>
          <p className="text-xl text-[#334155] max-w-4xl mx-auto">
            Your comprehensive digital transformation knowledge hub with industry-specific resources, proven methodologies, and expert insights to accelerate your ERP, CRM, and BI success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-4">
                {category.title}
              </h3>
              <p className="text-[#334155] mb-6">
                {category.description}
              </p>
              <Link 
                to={category.link}
                className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {category.linkText}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourceCentre
