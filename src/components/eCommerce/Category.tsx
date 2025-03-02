import { Link } from "react-router-dom";

interface IProps {
  title: string,
  prefix: string,
  img: string
}

const Category = ({title , prefix , img}: IProps) => {
  return ( 
  <div className="flex flex-col items-center gap-y-4">
    <Link to={`/categories/products/${prefix}`}>
      <div className="aspect-square w-full">
        <img src={img} loading="lazy" alt={title} className="w-full h-full rounded-full" />
      </div>
      <p className="text-lg">{title}</p>
    </Link>
  </div> );
}
 
export default Category;