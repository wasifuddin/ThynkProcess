import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FloatingCTA = () => {
  return (
    <motion.div 
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-[#0F79B9] text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-white/20"
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        boxShadow: [
          "0 10px 25px rgba(15, 121, 185, 0.3)",
          "0 15px 35px rgba(15, 121, 185, 0.4)",
          "0 10px 25px rgba(15, 121, 185, 0.3)"
        ]
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#0D4E9E",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-3">
        <motion.span 
          className="text-lg"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💡
        </motion.span>
        <span className="font-medium">Find the Right ERP/CRM for You</span>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="bg-white text-[#0F79B9] px-4 py-1 rounded-full font-semibold hover:bg-[#F8FAFC] transition-colors duration-300 block"
          >
            Start Here
          </Link>
        </motion.div>
      </div>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#12A8D4] to-[#0F79B9] opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default FloatingCTA
