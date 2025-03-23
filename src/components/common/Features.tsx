import FeatureItem from "./FeatureItem"

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 py-32">
      <div className="w-full md:w-1/4 flex items-center justify-center md:justify-start">
        <h2 className="text-4xl font-bold">Why choosing us</h2>
      </div>
      <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        <FeatureItem title="Luxury facilitate" desc="The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." buttonLink="/" />
        <FeatureItem title="Luxury facilitate" desc="The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." buttonLink="/" />
        <FeatureItem title="Luxury facilitate" desc="The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." buttonLink="/" />
      </div>
    </div>
  )
}

export default Features