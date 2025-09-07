import { Link } from 'react-router-dom'

const FloatingCTA = () => {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-[#0F79B9] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#0D4E9E] transition-colors duration-300">
      <div className="flex items-center space-x-3">
        <span className="text-lg">💡</span>
        <span className="font-medium">Find the Right ERP/CRM for You</span>
        <Link
          to="/contact"
          className="bg-white text-[#0F79B9] px-4 py-1 rounded-full font-semibold hover:bg-[#F8FAFC] transition-colors duration-300"
        >
          Start Here
        </Link>
      </div>
    </div>
  )
}

export default FloatingCTA
