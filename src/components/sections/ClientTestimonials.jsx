import { useState } from 'react'

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "ThynkProcess's SAP B1 expertise transformed our production, boosting efficiency by 30%.",
      author: "Operations Director",
      company: "Food Manufacturer, Victoria",
      category: "Streamlined Manufacturing",
      avatar: "👨‍💼"
    },
    {
      quote: "Produmex WMS cut our dispatch errors by 25% with seamless integrations.",
      author: "Logistics Manager",
      company: "Warehousing Operator, Victoria",
      category: "Optimized Warehousing",
      avatar: "👨‍🔧"
    },
    {
      quote: "Their Salesforce solution shortened our sales cycle by 40%, driving growth.",
      author: "Sales Manager",
      company: "Retail Business, New South Wales",
      category: "Empowered Sales",
      avatar: "👩‍💼"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-[#0E1A6A] mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#F8FAFC] rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-6">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-[#12A8D4] font-bold text-lg mb-4">
                "{testimonials[currentTestimonial].category}"
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-[#0E1A6A] mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="border-t border-[#E2E8F0] pt-6">
                <div className="font-bold text-xl text-[#0E1A6A]">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-[#64748B]">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#0F79B9]' : 'bg-[#E2E8F0]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-[#0F79B9] hover:bg-[#0D4E9E] text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#64748B] text-sm italic">
            🖼️ Suggested Visual: Testimonial carousel or embedded video snippet
          </p>
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonials