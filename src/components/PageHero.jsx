import { Link } from 'react-router-dom'

const PageHero = ({ title, subtitle, backgroundClass = "bg-gradient-to-br from-[#D8F4FA] to-[#AEE7F2]", ctaText, ctaLink }) => {
  return (
    <section className={`${backgroundClass} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-[#0E1A6A] mb-6">
          {title}
        </h1>
        <p className="text-xl text-[#334155] max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="inline-flex items-center bg-[#0F79B9] hover:bg-[#0D4E9E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {ctaText}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  )
}

export default PageHero
