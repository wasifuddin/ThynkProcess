import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "backOut"
      }
    })
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-[#D8F4FA] via-[#AEE7F2] to-[#78D2E9] min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#78D2E9] rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-[#12A8D4] rounded-full opacity-15"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#0F79B9] rounded-full opacity-25"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.25, 0.1, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[#0E1A6A] opacity-5"></div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="text-center lg:text-left" variants={itemVariants}>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-montserrat text-[#0E1A6A] mb-6 leading-tight"
              variants={itemVariants}
            >
              Scale Smarter with 
              <motion.span 
                className="text-[#12A8D4] block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Tailored ERP, CRM, and Analytics Solutions
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-[#334155] mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Say goodbye to disconnected systems and manual processes. We help growing companies 
              streamline operations, enhance customer experiences, and make better decisions with 
              SAP Business One, Salesforce, and BI tools.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg block"
                >
                  Book a Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="border-2 border-[#0F79B9] text-[#0F79B9] hover:bg-[#0F79B9] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 block"
                >
                  See a Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Professional Statistics Display */}
          <motion.div 
            className="relative"
            variants={cardVariants}
          >
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/30 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Subtle background pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "radial-gradient(circle, #0F79B9 1px, transparent 1px)",
                  backgroundSize: "30px 30px"
                }}
              />
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { 
                    number: "50+", 
                    label: "Businesses Transformed", 
                    gradient: "from-[#12A8D4] to-[#0F79B9]",
                    icon: "🏢"
                  },
                  { 
                    number: "20+", 
                    label: "Years Expertise", 
                    gradient: "from-[#0F79B9] to-[#0D4E9E]",
                    icon: "⭐"
                  },
                  { 
                    number: "90%", 
                    label: "Efficiency Gains", 
                    gradient: "from-[#0D4E9E] to-[#0C2F86]",
                    icon: "📈"
                  },
                  { 
                    number: "100%", 
                    label: "Local Support", 
                    gradient: "from-[#0C2F86] to-[#0E1A6A]",
                    icon: "🇦🇺"
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    variants={statVariants}
                    custom={index}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-6 text-white relative overflow-hidden shadow-lg`}
                      whileHover={{ 
                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Animated background shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Icon */}
                      <motion.div 
                        className="text-2xl mb-3 relative z-10"
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      
                      {/* Number with counter animation */}
                      <motion.div 
                        className="text-3xl font-bold mb-2 relative z-10"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 1 + index * 0.15, 
                          duration: 0.8, 
                          ease: "backOut" 
                        }}
                      >
                        {stat.number}
                      </motion.div>
                      
                      {/* Label */}
                      <motion.div 
                        className="text-sm font-medium opacity-90 relative z-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.9, y: 0 }}
                        transition={{ 
                          delay: 1.2 + index * 0.15, 
                          duration: 0.6 
                        }}
                      >
                        {stat.label}
                      </motion.div>
                      
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Professional floating elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#78D2E9] to-[#12A8D4] rounded-full opacity-20 blur-sm"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#12A8D4] to-[#0F79B9] rounded-full opacity-20 blur-sm"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/2 -right-10 w-16 h-16 bg-gradient-to-br from-[#0F79B9] to-[#0D4E9E] rounded-full opacity-15 blur-sm"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
