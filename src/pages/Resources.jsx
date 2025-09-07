import PageHero from '../components/PageHero'

const Resources = () => {
  return (
    <div>
      <PageHero 
        title="Resources"
        subtitle="Guides, toolkits, webinars, and thought leadership to help you succeed."
        backgroundClass="bg-gradient-to-br from-[#0D4E9E] to-[#0C2F86]"
      />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Resources Coming Soon
          </h2>
          <p className="text-xl text-[#64748B]">
            We're building comprehensive resource pages with guides, toolkits, 
            webinars, and thought leadership content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Resources
