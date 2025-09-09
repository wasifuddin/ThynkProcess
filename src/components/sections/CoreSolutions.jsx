import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CoreSolutions = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const solutions = [
    {
      title: "SAP Business One",
      description: "ERP for growing businesses",
      features: ["Financial Management", "Inventory Control", "Sales & CRM", "Manufacturing"],
      icon: "🏢",
      color: "from-[#0F79B9] to-[#0D4E9E]"
    },
    {
      title: "Salesforce", 
      description: "CRM & Marketing Automation",
      features: ["Sales Automation", "Customer Service", "Marketing Cloud", "Analytics"],
      icon: "⚡",
      color: "from-[#12A8D4] to-[#0F79B9]"
    },
    {
      title: "Business Intelligence",
      description: "Power BI, Tableau, Crystal",
      features: ["Data Visualization", "Executive Dashboards", "Predictive Analytics", "Self-Service BI"],
      icon: "📊",
      color: "from-[#0D4E9E] to-[#0C2F86]"
    },
    {
      title: "Custom Integrations",
      description: "API, Middleware, File-based",
      features: ["System Integration", "Data Synchronization", "Process Automation", "Real-time Connectivity"],
      icon: "🔗",
      color: "from-[#78D2E9] to-[#12A8D4]"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "backOut"
      }
    })
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#78D2E9] to-[#12A8D4] rounded-full opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-[#0F79B9] to-[#0D4E9E] rounded-full opacity-5"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Core Solutions
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <motion.div 
                  className={`bg-gradient-to-r ${solution.color} p-6 text-white relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }}
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "15px 15px"
                    }}
                  />
                  
                  <motion.div 
                    className="text-3xl mb-3 relative z-10"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {solution.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold font-montserrat mb-1 relative z-10">{solution.title}</h3>
                  <p className="text-white opacity-90 text-sm relative z-10">{solution.description}</p>
                </motion.div>
                
                <div className="p-6">
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                      >
                        <motion.svg 
                          className="w-4 h-4 text-[#12A8D4] mr-2" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 + featureIndex * 0.05, duration: 0.3 }}
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </motion.svg>
                        <span className="text-[#334155] text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/solutions"
                      className="w-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-center block text-sm"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/solutions"
              className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center shadow-lg"
            >
              Learn More About Our Solutions
              <motion.svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CoreSolutions
