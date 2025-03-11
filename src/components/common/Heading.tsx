import { memo } from "react"

const Heading = memo(({title} : {title : string}) => {
  return (
    <h2 className="mb-6 font-bold text-2xl">{title}</h2>
  )
})

export default Heading