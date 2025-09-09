import { Link } from 'react-router-dom'

const GetStartedWithIndustrySolutions = () => {
  const assessments = [
    {
      title: "Download Industry Capability Guide",
      description: "Overview of industry-specific solutions and potential compliance support",
      icon: "📥",
      link: "/resources"
    },
    {
      title: "Speak with Industry Specialist",
      description: "Discuss specific requirements and compliance needs for your industry",
      icon: "📞",
      link: "/contact"
    },
    {
      title: "Integration Capabilities Demo",
      description: "See laboratory and testing workflow integration possibilities",
      icon: "🔬",
      link: "/contact"
    },
    {
      title: "Compliance Assessment",
      description: "Evaluation of current systems and improvement opportunities",
      icon: "📊",
      link: "/contact"
    }
  ]

  return (
    <section className="py-16 bg-[#AEE7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            Get Started with Industry & Standards-Specific Solutions
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Take the first step towards industry-specific digital transformation with our comprehensive assessment and consultation services.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6 text-center">
            Comprehensive Assessment
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessments.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="bg-[#F8FAFC] hover:bg-[#D8F4FA] rounded-lg p-6 border border-[#E2E8F0] transition-colors group text-center"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-[#0E1A6A] mb-2 group-hover:text-[#0F79B9] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-[#334155]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStartedWithIndustrySolutions
