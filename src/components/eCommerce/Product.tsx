import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { useEffect, useState } from "react";
import { TProduct } from "src/customTypes/product";


const Product = ({id, img , price , title}: TProduct) => {
  const dispatch = useAppDispatch()
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(0);

  useEffect(() => {
    if(!isBtnClicked){
      return
    }
    setIsDisabled(true)
    const debounce = setTimeout(() => {
      setIsDisabled(false)
    }, 300);

    return () => clearTimeout(debounce)
  }, [isBtnClicked])

  const addToCartHandler = ()=>{
    dispatch(addToCart(id));
    setIsBtnClicked(prev => prev + 1)
  }

  return (  
  <div product-id={`${id}`} className="flex flex-col items-center gap-4">
    <div className="aspect-[1/1.2] w-full">
      <img src={img} loading="lazy" alt={title} className="w-full h-full" />
    </div>
    <p className="text-lg">{title}</p>
    <p className="text-lg">{price}</p>
    <button disabled={isDisabled} onClick={addToCartHandler} className="bg-primary rounded-md px-6 py-2 text-lg text-background font-semibold transition-opacity disabled:opacity-60">Add to cart</button>
  </div> );
}
 
export default Product;