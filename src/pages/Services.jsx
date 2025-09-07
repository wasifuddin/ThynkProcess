import PageHero from '../components/PageHero'

const Services = () => {
  return (
    <div>
      <PageHero 
        title="Services"
        subtitle="Expert implementation, support, and specialized services to ensure your success."
        backgroundClass="bg-gradient-to-br from-[#12A8D4] to-[#0F79B9]"
      />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-8">
            Services Coming Soon
          </h2>
          <p className="text-xl text-[#64748B]">
            We're developing detailed service pages for implementation services, 
            support & managed services, and specialized services.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
