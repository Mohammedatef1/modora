import FeatureItem from "./FeatureItem"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Features = () => {
  return (
    <MaxWidthWrapper className="py-10 md:py-20 lg:py-32 flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-1/4 flex items-center justify-center md:justify-start">
        <h2 className="text-4xl font-bold">Why choosing us</h2>
      </div>
      <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <FeatureItem title="Luxury facilitate" desc="The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." buttonLink="/" />
        <FeatureItem title="Luxury facilitate" desc="The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." buttonLink="/" />
        <FeatureItem title="Luxury facilitate" desc="The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." buttonLink="/" />
      </div>
    </MaxWidthWrapper>
  )
}

export default Features