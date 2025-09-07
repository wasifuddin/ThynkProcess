import PageHero from '../components/PageHero'

const Solutions = () => {
  return (
    <div>
      <PageHero 
        title="Solutions"
        subtitle="Comprehensive business solutions tailored to your industry, role, and specific requirements."
        backgroundClass="bg-gradient-to-br from-[#78D2E9] to-[#12A8D4]"
      />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Solutions Coming Soon
          </h2>
          <p className="text-xl text-[#64748B]">
            We're working on comprehensive solution pages for business categories, 
            industry-specific solutions, and role-based solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Solutions
