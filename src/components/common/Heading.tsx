import { memo } from "react"

interface HeadingProps {
  title: string;
  className?: string
}

const Heading : React.FC<HeadingProps> = memo(({title, className}) => {
  return (
    <h2 className={`mb-6 font-bold text-2xl ${className}`}>{title}</h2>
  )
})

export default Heading