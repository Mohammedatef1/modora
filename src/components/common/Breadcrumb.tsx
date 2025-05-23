import breadcrumbBackground from "@assets/images/breadcrumb background.png"
import { memo } from "react"
import { Link } from "react-router-dom"
import { capitalizeFirstLetter } from "src/utils"

interface BreadcrumbProps {
  path: string
}

const Breadcrumb = memo(({ path }: BreadcrumbProps) => {
  const pathItems = path.split('/')
  console.log(pathItems)
  return (
    <div className="relative h-56 md:h-72 lg:h-80 flex flex-col items-center justify-center text-center overflow-hidden">
      <img loading="lazy" src={breadcrumbBackground} alt="breadcrumb background image" className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-50 blur-sm" />
      <div className="relative z-5 text-center">
        <h3 className="font-semibold text-2xl md:text-4xl lg:text-5xl mb-3">{capitalizeFirstLetter(pathItems[pathItems.length -1])}</h3>
        <div className="breadcrumb-path flex items-center justify-center gap-x-1.5">
          {pathItems.map((item, index) => (
            <span className="flex items-center gap-x-1.5" key={index}>
              { pathItems.length === index + 1 ? <p>{capitalizeFirstLetter(item)}</p> : <Link className="font-semibold" to={item === 'home' ? '/' : `/${item}`}>{capitalizeFirstLetter(item)}</Link> }
              <span className="font-semibold">{`>`}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Breadcrumb