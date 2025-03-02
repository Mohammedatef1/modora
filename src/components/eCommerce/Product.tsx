import { TProduct } from "src/customTypes/product";

const Product = ({id, img , price , title}: TProduct) => {
  return (  
  <div product-id={`${id}`} className="flex flex-col items-center gap-4">
    <div className="aspect-[1/1.2] w-full">
      <img src={img} loading="lazy" alt={title} className="w-full h-full" />
    </div>
    <p className="text-lg">{title}</p>
    <p className="text-lg">{price}</p>
    <button className="bg-primary rounded-md px-6 py-2 text-lg text-background font-semibold">Add to cart</button>
  </div> );
}
 
export default Product;