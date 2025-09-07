const PageHero = ({ title, subtitle, backgroundClass = "bg-gradient-to-br from-[#D8F4FA] to-[#AEE7F2]" }) => {
  return (
    <section className={`${backgroundClass} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-[#0E1A6A] mb-6">
          {title}
        </h1>
        <p className="text-xl text-[#334155] max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default PageHero
