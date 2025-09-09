import { Link } from 'react-router-dom'

const SolutionSelectionGuide = () => {
  return (
    <section className="py-16 bg-[#D8F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            🚀 Solution Selection Guide
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Our proven methodology helps you select the right solution for your business needs and growth objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Assessment Framework */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Assessment Framework
            </h3>
            <p className="text-[#334155] mb-6">
              Our proven methodology helps you select the right solution for your business:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#0F79B9] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-[#0E1A6A] mb-1">Business Assessment</h4>
                  <p className="text-[#334155] text-sm">Understand current challenges and future goals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0F79B9] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-[#0E1A6A] mb-1">Process Analysis</h4>
                  <p className="text-[#334155] text-sm">Map existing workflows and identify improvements</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0F79B9] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-[#0E1A6A] mb-1">Technology Evaluation</h4>
                  <p className="text-[#334155] text-sm">Assess current systems and integration needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0F79B9] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-[#0E1A6A] mb-1">Solution Design</h4>
                  <p className="text-[#334155] text-sm">Create customized solution architecture</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0F79B9] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-[#0E1A6A] mb-1">Implementation Planning</h4>
                  <p className="text-[#334155] text-sm">Develop phased rollout strategy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Packages */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Solution Packages
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#12A8D4] pl-4">
                <h4 className="font-bold text-[#0E1A6A] mb-2">Starter Solutions</h4>
                <p className="text-[#334155] text-sm mb-2">Essential functionality for growing businesses</p>
                <ul className="text-[#334155] text-sm space-y-1">
                  <li>• Core ERP or CRM platform</li>
                  <li>• Basic integrations and reporting</li>
                  <li>• Standard implementation and training</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-[#0F79B9] pl-4">
                <h4 className="font-bold text-[#0E1A6A] mb-2">Professional Solutions</h4>
                <p className="text-[#334155] text-sm mb-2">Advanced capabilities for established businesses</p>
                <ul className="text-[#334155] text-sm space-y-1">
                  <li>• Extended platform functionality</li>
                  <li>• Advanced analytics and automation</li>
                  <li>• Custom integrations and workflows</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-[#0D4E9E] pl-4">
                <h4 className="font-bold text-[#0E1A6A] mb-2">Enterprise Solutions</h4>
                <p className="text-[#334155] text-sm mb-2">Comprehensive solutions for complex organizations</p>
                <ul className="text-[#334155] text-sm space-y-1">
                  <li>• Full platform suite with all modules</li>
                  <li>• Advanced analytics and AI capabilities</li>
                  <li>• Custom development and extensive integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSelectionGuide
