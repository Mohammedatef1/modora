import { Link } from "react-router-dom";
import { TCategories } from "src/customTypes/category";

const Category = ({title , prefix , img}: TCategories) => {
  return ( 
  <div>
    <Link className="group flex flex-col items-center gap-y-4" to={`/categories/products/${prefix}`}>
      <div className="aspect-square w-full">
        <img src={img} loading="lazy" alt={title} className="w-full h-full rounded-full" />
      </div>
      <p className="text-lg font-semibold text-center group-hover:underline">{title}</p>
    </Link>
  </div> );
}
 
export default Category;