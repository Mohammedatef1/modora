import ArrowButton from "./ArrowButton";

interface FeatureItemProps {
  title: string;
  desc: string;
  buttonLabel?: string;
  buttonLink?: string 
}
const FeatureItem = ({title, buttonLabel = "More info", buttonLink = "/", desc} : FeatureItemProps) => {
  return (
    <div>
      <h3 className="text-lg md:text-xl lg:text-2xl mb-1.5 md:mb-5">{title}</h3>
      <p className="text-sm md:text-base mb-1.5 md:mb-4">{desc}</p>
      <ArrowButton label={buttonLabel} link={buttonLink}/>
    </div>
  )
}

export default FeatureItem