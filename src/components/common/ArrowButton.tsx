import { Link } from "react-router-dom";
import Arrow from "@assets/svg/arrow.svg?react"

interface ArrowButtonProps {
  label: string;
  link?: string;
  className? :string;
}

const ArrowButton = ({label, link="/", className} : ArrowButtonProps) => {
  return (
    <Link to={link} className={`text-xs md:text-sm text-primary flex items-center gap-3 ${className}`}>
      <span>{label}</span>
      <Arrow className="text-primary fill-primary stroke-primary"/>
    </Link>
  )
}

export default ArrowButton