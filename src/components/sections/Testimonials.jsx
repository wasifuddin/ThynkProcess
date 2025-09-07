import { useState } from 'react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "YourCompany's platform transformed our operations completely. We've seen a 40% increase in efficiency and our team productivity has never been higher.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Solutions",
      avatar: "👩‍💼"
    },
    {
      quote: "The implementation was seamless and the support team is outstanding. They truly understand our business needs and deliver solutions that work.",
      author: "Michael Chen",
      position: "CTO",
      company: "Global Manufacturing Inc",
      avatar: "👨‍💻"
    },
    {
      quote: "We've been using their services for over 3 years and the ROI has been incredible. The platform scales with our growth and adapts to our changing needs.",
      author: "Emily Rodriguez",
      position: "Operations Director",
      company: "Healthcare Partners",
      avatar: "👩‍⚕️"
    },
    {
      quote: "The security and compliance features give us peace of mind. We can focus on our core business knowing our data is protected and our processes are compliant.",
      author: "David Thompson",
      position: "IT Director",
      company: "Financial Services Group",
      avatar: "👨‍💼"
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
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with YourCompany.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#F8FAFC] rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-6">
                {testimonials[currentTestimonial].avatar}
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-[#0E1A6A] mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="border-t border-[#E2E8F0] pt-6">
                <div className="font-bold text-xl text-[#0E1A6A]">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-[#12A8D4] font-semibold">
                  {testimonials[currentTestimonial].position}
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0F79B9] mb-2">500+</div>
            <div className="text-[#64748B]">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0F79B9] mb-2">99.9%</div>
            <div className="text-[#64748B]">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0F79B9] mb-2">24/7</div>
            <div className="text-[#64748B]">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0F79B9] mb-2">50+</div>
            <div className="text-[#64748B]">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
