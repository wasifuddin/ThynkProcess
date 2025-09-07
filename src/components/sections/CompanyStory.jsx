const CompanyStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-[#64748B]">
              <p className="text-lg">
                Founded in 2010, YourCompany began as a small team of passionate technologists 
                who believed that businesses deserved better software solutions. We started 
                with a simple mission: to create technology that actually works for people, 
                not against them.
              </p>
              <p className="text-lg">
                Over the years, we've grown from a startup to a global leader, serving 
                organizations across 50+ countries. Our success is built on three core 
                principles: innovation, reliability, and exceptional customer service.
              </p>
              <p className="text-lg">
                Today, we're proud to be at the forefront of digital transformation, 
                helping businesses of all sizes leverage cutting-edge technology to 
                achieve their goals and drive meaningful change in their industries.
              </p>
            </div>
          </div>
          <div className="bg-[#F8FAFC] rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Our Mission
            </h3>
            <p className="text-[#64748B] mb-6">
              To empower businesses worldwide with innovative technology solutions that 
              drive efficiency, growth, and success in an ever-evolving digital landscape.
            </p>
            <h3 className="text-2xl font-bold font-montserrat text-[#0E1A6A] mb-6">
              Our Vision
            </h3>
            <p className="text-[#64748B]">
              To be the global leader in business technology solutions, recognized for 
              our innovation, reliability, and commitment to customer success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory
