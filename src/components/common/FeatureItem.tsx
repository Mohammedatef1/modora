import { Link } from "react-router-dom";
import Arrow from "@assets/svg/arrow.svg?react"

interface FeatureItemProps {
  title: string;
  desc: string;
  buttonLabel?: string;
  buttonLink?: string 
}
const FeatureItem = ({title, buttonLabel = "More info", buttonLink = "/", desc} : FeatureItemProps) => {
  return (
    <div>
      <h3 className="text-lg md:text-xl lg:text-2xl mb-5">{title}</h3>
      <p className="text-sm md:text-base mb-4">{desc}</p>
      <Link to={buttonLink} className="text-xs md:text-sm text-primary flex items-center gap-3">
        <span>{buttonLabel}</span>
        <Arrow className="text-primary fill-primary stroke-primary"/>
      </Link>
    </div>
  )
}

export default FeatureItem