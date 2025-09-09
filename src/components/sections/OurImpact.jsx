import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const OurImpact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const impactStats = [
    { number: "50+", label: "Businesses Transformed", sublabel: "across Australia", color: "from-[#12A8D4] to-[#0F79B9]" },
    { number: "20+", label: "Years of Expertise", sublabel: "in ERP, CRM, and BI", color: "from-[#0F79B9] to-[#0D4E9E]" },
    { number: "90%", label: "Efficiency Gains", sublabel: "reported by clients within 6 months", color: "from-[#0D4E9E] to-[#0C2F86]" }
  ]

  const trustedBy = [
    "SAP", "Salesforce", "Tableau", "Boyum", "leading Australian businesses"
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

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 30 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "backOut"
      }
    })
  }

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  }

  const companyVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#78D2E9] to-[#12A8D4] rounded-full opacity-5"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-[#0F79B9] to-[#0D4E9E] rounded-full opacity-5"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 8,
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
            Our Impact
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={statVariants}
              custom={index}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 shadow-lg mb-4 relative overflow-hidden`}
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
                
                <motion.div 
                  className="text-5xl font-bold text-white mb-2 relative z-10"
                  variants={numberVariants}
                  custom={index}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl font-semibold text-white mb-1 relative z-10">{stat.label}</div>
                <div className="text-white/80 text-sm relative z-10">{stat.sublabel}</div>
                
                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" variants={itemVariants}>
          <motion.h3 
            className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Trusted by:
          </motion.h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustedBy.map((company, index) => (
              <motion.div 
                key={index} 
                className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                variants={companyVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[#0E1A6A] font-semibold">{company}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default OurImpact
