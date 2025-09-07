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
        { name: 'Platform A', href: '/products/platform-a' },
        { name: 'Platform B', href: '/products/platform-b' },
        { name: 'Platform C', href: '/products/platform-c' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'Business Solutions', href: '/solutions/business' },
        { name: 'Industry Solutions', href: '/solutions/industry' },
        { name: 'Role-based Solutions', href: '/solutions/role-based' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Implementation', href: '/services/implementation' },
        { name: 'Support & Managed', href: '/services/support' },
        { name: 'Specialized Services', href: '/services/specialized' }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      dropdown: [
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Finance', href: '/industries/finance' },
        { name: 'Manufacturing', href: '/industries/manufacturing' }
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
              YourCompany
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-white hover:text-[#12A8D4] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    {item.dropdown && (
                      <span className="ml-1 text-xs">▼</span>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
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
