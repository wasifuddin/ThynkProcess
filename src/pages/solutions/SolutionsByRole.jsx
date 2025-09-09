import PageHero from '../../components/PageHero'
import { Link } from 'react-router-dom'

const SolutionsByRole = () => {
  const roleSolutions = [
    {
      title: "For CEOs & Managing Directors",
      description: "Strategic visibility and control for executive decision-making",
      icon: "👔",
      features: [
        "Company-wide performance dashboards",
        "Financial and operational KPIs",
        "Strategic planning and forecasting",
        "Board reporting and communication",
        "Growth tracking and analysis"
      ],
      link: "/solutions/ceo-solutions"
    },
    {
      title: "For CFOs & Finance Teams",
      description: "Financial control, compliance, and reporting for fiscal excellence",
      icon: "💰",
      features: [
        "Automated financial management",
        "Compliance and regulatory reporting",
        "Cash flow management and forecasting",
        "Cost control and profitability analysis",
        "Audit preparation and support"
      ],
      link: "/solutions/cfo-solutions"
    },
    {
      title: "For Sales Managers",
      description: "Sales acceleration and customer management for revenue growth",
      icon: "📈",
      features: [
        "Pipeline management and forecasting",
        "Customer relationship optimization",
        "Sales performance analytics",
        "Territory and commission management",
        "Mobile sales enablement"
      ],
      link: "/solutions/sales-solutions"
    },
    {
      title: "For Operations Managers",
      description: "Operational efficiency and control for performance optimization",
      icon: "⚙️",
      features: [
        "Production planning and scheduling",
        "Inventory management and optimization",
        "Quality control and compliance",
        "Performance monitoring and analytics",
        "Process improvement and automation"
      ],
      link: "/solutions/operations-solutions"
    },
    {
      title: "For IT Leaders",
      description: "Technology management and integration for system excellence",
      icon: "💻",
      features: [
        "System integration and automation",
        "Security and compliance management",
        "Performance monitoring and optimization",
        "User management and support",
        "Technology roadmap planning"
      ],
      link: "/solutions/it-solutions"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Solutions by Role"
        subtitle="Tailored solutions designed for your specific role and responsibilities"
        backgroundClass="bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]"
        ctaText="Explore Role-Based Solutions"
        ctaLink="/contact"
      />

      {/* Role-Based Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              👥 Solutions by Role
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Role-specific solutions designed to empower your team with the tools and insights they need to excel in their responsibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roleSolutions.map((solution, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-3 group-hover:text-[#0F79B9] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-[#334155] mb-4 text-sm">
                  {solution.description}
                </p>
                <ul className="text-[#334155] space-y-2 text-sm mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-[#0F79B9] mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={solution.link}
                  className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Explore {solution.title.split(' ')[1]} Solutions
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Role-Based Solutions */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              Why Role-Based Solutions Work
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Different roles have different needs, priorities, and workflows. Our role-based solutions are designed to match how you actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Role-Specific Focus
                </h3>
                <p className="text-[#334155] text-sm">
                  Solutions designed around your specific responsibilities and goals
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Relevant KPIs
                </h3>
                <p className="text-[#334155] text-sm">
                  Dashboards and reports that matter to your role and objectives
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Faster Adoption
                </h3>
                <p className="text-[#334155] text-sm">
                  Intuitive interfaces that match your workflow and thinking
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                  Immediate Value
                </h3>
                <p className="text-[#334155] text-sm">
                  Quick wins and measurable improvements from day one
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              💡 Why Our Solutions Deliver Results
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-2xl mr-4">✅</div>
                <div>
                  <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                    Business-First Approach
                  </h3>
                  <ul className="text-[#334155] text-sm space-y-1">
                    <li>• Focus on business outcomes, not just technology features</li>
                    <li>• Proven methodologies based on 50+ successful implementations</li>
                    <li>• Industry-specific best practices and templates</li>
                    <li>• Change management and user adoption strategies</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-4">🔗</div>
                <div>
                  <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                    Integrated Architecture
                  </h3>
                  <ul className="text-[#334155] text-sm space-y-1">
                    <li>• Seamless connectivity between all solution components</li>
                    <li>• Real-time data flow and synchronization</li>
                    <li>• Unified user experience across platforms</li>
                    <li>• Scalable architecture for future growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🇦🇺</div>
                <div>
                  <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                    Australian Expertise
                  </h3>
                  <ul className="text-[#334155] text-sm space-y-1">
                    <li>• Deep understanding of Australian business requirements</li>
                    <li>• Local compliance and regulatory knowledge</li>
                    <li>• Responsive support during Australian business hours</li>
                    <li>• Strong relationships with local technology ecosystem</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-4">📊</div>
                <div>
                  <h3 className="text-lg font-bold font-montserrat text-[#0E1A6A] mb-2">
                    Proven Results
                  </h3>
                  <ul className="text-[#334155] text-sm space-y-1">
                    <li>• 90% of clients achieve efficiency gains within 6 months</li>
                    <li>• Average 40% reduction in processing time</li>
                    <li>• 25% improvement in operational accuracy</li>
                    <li>• 100% success rate in achieving business objectives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
              🎯 Get Started with Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Solution Discovery
              </h3>
              <div className="space-y-4">
                <Link 
                  to="/contact"
                  className="flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <span className="text-2xl mr-3">📞</span>
                  <span>Book Solution Consultation - Discuss your specific business challenges</span>
                </Link>
                <Link 
                  to="/contact"
                  className="flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <span className="text-2xl mr-3">📊</span>
                  <span>Solution Assessment - Free evaluation of your needs and opportunities</span>
                </Link>
                <Link 
                  to="/contact"
                  className="flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <span className="text-2xl mr-3">🎯</span>
                  <span>Custom Solution Design - Tailored solution architecture for your business</span>
                </Link>
                <Link 
                  to="/contact"
                  className="flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <span className="text-2xl mr-3">💰</span>
                  <span>ROI Calculator - Estimate benefits and return on investment</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold font-montserrat text-[#0E1A6A] mb-6">
                Solution Resources
              </h3>
              <div className="space-y-4">
                <Link 
                  to="/resources/guides"
                  className="flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <span className="text-2xl mr-3">📋</span>
                  <span>Solution Comparison Guide - Compare different solution approaches</span>
                </Link>
                <Link 
                  to="/resources/guides"
                  className="flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <span className="text-2xl mr-3">📈</span>
                  <span>Business Case Templates - Build internal justification for investment</span>
                </Link>
                <Link 
                  to="/resources/webinars"
                  className="flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <span className="text-2xl mr-3">🎥</span>
                  <span>Solution Demonstrations - See solutions in action with real scenarios</span>
                </Link>
                <Link 
                  to="/resources/guides"
                  className="flex items-center text-[#0F79B9] hover:text-[#0D4E9E] transition-colors"
                >
                  <span className="text-2xl mr-3">📚</span>
                  <span>Implementation Methodology - Understand our proven delivery approach</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C2F86] to-[#0E1A6A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Transform Your Role with the Right Solutions
          </h2>
          <p className="text-xl text-[#AEE7F2] mb-8 max-w-3xl mx-auto">
            Discover how our role-based solutions can empower you and your team to achieve better results and drive business success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Role-Based Consultation
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#0E1A6A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Solution Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionsByRole
