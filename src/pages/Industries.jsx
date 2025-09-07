import PageHero from '../components/PageHero'

const Industries = () => {
  return (
    <div>
      <PageHero 
        title="Industries"
        subtitle="Sector-specific solutions with compliance and standards expertise."
        backgroundClass="bg-gradient-to-br from-[#0F79B9] to-[#0D4E9E]"
      />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Industry Solutions Coming Soon
          </h2>
          <p className="text-xl text-[#64748B]">
            We're creating detailed industry pages with sector-specific content, 
            compliance information, and standards expertise.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Industries
