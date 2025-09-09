import { Link } from 'react-router-dom'

const WebinarsWorkshops = () => {
  const solutionSessions = [
    {
      title: "SAP B1 for Manufacturing: Shop Floor to Finance",
      description: "Hands-on walkthrough showing Beas, B1UP, and dashboards in action.",
      duration: "45 minutes",
      format: "Live demo with Q&A",
      link: "/resources/watch/sap-b1-manufacturing"
    },
    {
      title: "Salesforce CRM in Action",
      description: "See pipeline, SLA management, marketing workflows, and 360° customer view.",
      duration: "40 minutes",
      format: "Interactive demonstration",
      link: "/resources/watch/salesforce-demo"
    },
    {
      title: "Power BI + SAP: Real-Time Executive Dashboards",
      description: "Turn your business data into boardroom-ready visualizations.",
      duration: "35 minutes",
      format: "Live dashboard creation",
      link: "/resources/watch/powerbi-dashboards"
    },
    {
      title: "Warehouse Automation with Produmex WMS",
      description: "Live picking, packing, and 3PL sync with handheld devices.",
      duration: "50 minutes",
      format: "Live warehouse demo",
      link: "/resources/watch/produmex-wms"
    },
    {
      title: "Integration Masterclass: Connecting SAP B1 to Everything",
      description: "Real-world integration scenarios with Salesforce, Shopify, and banking systems.",
      duration: "60 minutes",
      format: "Technical deep-dive",
      link: "/resources/watch/integration-masterclass"
    }
  ]

  const liveWebinars = [
    {
      title: "Scaling with SAP B1 & Salesforce: 2025 Outlook",
      description: "Panel discussion on ERP & CRM strategy for growing businesses.",
      nextSession: "February 15, 2025 | 2:00 PM AEDT",
      link: "/resources/register/scaling-outlook"
    },
    {
      title: "How to Prepare for Your ERP Implementation",
      description: "On-demand session with ThynkProcess delivery experts.",
      nextSession: "Available 24/7 | Duration: 45 minutes",
      link: "/resources/watch/erp-preparation"
    },
    {
      title: "Manufacturing Excellence: Beas + SAP B1 Success Stories",
      description: "Real customer case studies and lessons learned.",
      nextSession: "February 28, 2025 | 11:00 AM AEDT",
      link: "/resources/register/manufacturing-excellence"
    },
    {
      title: "BI Best Practices: From Data to Decisions",
      description: "Advanced analytics strategies for executive decision-making.",
      nextSession: "March 7, 2025 | 3:00 PM AEDT",
      link: "/resources/register/bi-best-practices"
    }
  ]

  const workshops = [
    {
      title: "ERP Implementation Workshop (2-Day)",
      description: "Hands-on workshop covering the complete ERP implementation lifecycle.",
      location: "Melbourne",
      nextSession: "March 14-15, 2025",
      link: "/resources/register/erp-workshop"
    },
    {
      title: "CRM Optimization Workshop (1-Day)",
      description: "Advanced Salesforce configuration and automation techniques.",
      location: "Sydney",
      nextSession: "March 21, 2025",
      link: "/resources/register/crm-workshop"
    },
    {
      title: "Analytics & Reporting Workshop (1-Day)",
      description: "Build executive dashboards and operational reports.",
      location: "Brisbane",
      nextSession: "March 28, 2025",
      link: "/resources/register/analytics-workshop"
    }
  ]

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🎬 Webinars & Workshops
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Learn from experts through live sessions, on-demand content, and hands-on workshops.
          </p>
        </div>

        {/* Solution Sessions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Solution Sessions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionSessions.map((session, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🎥</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {session.title}
                    </h4>
                    <p className="text-[#334155] mb-3 text-sm">
                      {session.description}
                    </p>
                    <div className="text-xs text-[#64748B] mb-4">
                      <p><strong>Duration:</strong> {session.duration}</p>
                      <p><strong>Format:</strong> {session.format}</p>
                    </div>
                    <Link 
                      to={session.link}
                      className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                    >
                      Watch on YouTube
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Webinars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Live Webinars
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {liveWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📅</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {webinar.title}
                    </h4>
                    <p className="text-[#334155] mb-3 text-sm">
                      {webinar.description}
                    </p>
                    <div className="text-xs text-[#64748B] mb-4">
                      <p><strong>Next Session:</strong> {webinar.nextSession}</p>
                    </div>
                    <Link 
                      to={webinar.link}
                      className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                    >
                      Register Now
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Series */}
        <div>
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Workshop Series
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🎓</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                      {workshop.title}
                    </h4>
                    <p className="text-[#334155] mb-3 text-sm">
                      {workshop.description}
                    </p>
                    <div className="text-xs text-[#64748B] mb-4">
                      <p><strong>Location:</strong> {workshop.location}</p>
                      <p><strong>Next Session:</strong> {workshop.nextSession}</p>
                    </div>
                    <Link 
                      to={workshop.link}
                      className="inline-flex items-center text-[#0F79B9] hover:text-[#0D4E9E] font-medium transition-colors"
                    >
                      Register Now
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebinarsWorkshops
