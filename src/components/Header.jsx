import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        { name: 'SAP Business One', href: '/products/sap-business-one' },
        { name: 'Salesforce CRM', href: '/products/salesforce' },
        { name: 'Power BI', href: '/products/power-bi' },
        { name: 'Tableau', href: '/products/tableau' },
        { name: 'SAP Analytics Cloud', href: '/products/sap-analytics-cloud' },
        { name: 'Add-Ons & Extensions', href: '/products/add-ons' },
        { name: 'View All Products', href: '/products' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'ERP Solutions', href: '/solutions/erp-solutions' },
        { name: 'CRM Solutions', href: '/solutions/crm-solutions' },
        { name: 'Analytics Solutions', href: '/solutions/analytics-solutions' },
        { name: 'Integration Solutions', href: '/solutions/integration-solutions' },
        { name: 'By Industry', href: '/solutions#by-industry' },
        { name: 'By Role', href: '/solutions#by-role' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Implementation Services', href: '/services/implementation' },
        { name: 'Integration & Automation', href: '/services/integration-automation' },
        { name: 'Support & Managed Services', href: '/services/support' },
        { name: 'Strategic Advisory', href: '/services/strategic-advisory' }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      dropdown: [
        { name: 'Food & Beverage', href: '/industries/food-beverage' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Wholesale Distribution', href: '/industries/wholesale-distribution' },
        { name: 'Logistics & Warehousing', href: '/industries/logistics-warehousing' },
        { name: 'Agriculture & Agribusiness', href: '/industries/agriculture-agribusiness' },
        { name: 'Pharmaceutical & Healthcare', href: '/industries/pharmaceutical-healthcare' },
        { name: 'Retail & eCommerce', href: '/industries/retail-ecommerce' },
        { name: 'View All Industries', href: '/industries' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { name: 'Guides & Toolkits', href: '/resources/guides' },
        { name: 'Webinars', href: '/resources/webinars' },
        { name: 'Thought Leadership', href: '/resources/thought-leadership' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header className="bg-[#0C2F86] sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold font-montserrat">
              ThynkProcess
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="text-white hover:text-[#12A8D4] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                    {item.dropdown && (
                      <span className="ml-1 text-xs">▼</span>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D8F4FA] hover:text-[#0E1A6A] transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#12A8D4] focus:outline-none focus:text-[#12A8D4]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0C2F86]">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white hover:text-[#12A8D4] block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="text-gray-300 hover:text-[#12A8D4] block px-3 py-2 rounded-md text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
