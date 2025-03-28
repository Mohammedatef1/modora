import heroImg from "@assets/images/hero image.jpg"

const Hero = () => {
  return (
    <div className="relative">
      <img src={heroImg} width={1440} height={716} className="w-full h-full object-cover absolute top-0 left-0 z-0" alt="background image for hero section" />
      <div className="hero-section-content w-full md:w-1/2 ms-auto h-full flex items-center px-10 md:ps-0 md:pe-10 lg:pe-16">
        <div className="pt-16 p-10 rounded-xl bg-light-gold relative z-1 md:max-w-xl">
          <p className="text-sm md:text-base font-semibold">New Arrival</p>
          <h2 className="text-primary-dark font-bold text-3xl md:text-4xl lg:text-5xl mt-1">Discover Our New Collection</h2>
          <p className="text-base md:text-lg mt-3 font-semibold">Upgrade your space with our newest designs, crafted for style, comfort, and durability. Find the perfect pieces to transform your home.</p>
          <button className="py-4 lg:py-5 px-11 md:px-14 lg:px-16 text-sm md:text-base text-background font-bold bg-primary-dark text-uppercase mt-7 md:mt-11">Buy Now</button>
      </div>
      </div>
    </div>
  )
}

export default Hero