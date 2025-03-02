import Product from "@components/eCommerce/Product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts } from "@store/products/actions/actGetProducts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  useEffect(()=>{
    dispatch(actGetProducts(params.prefix as string))
  },[dispatch, params])
  const {records , loading , error} = useAppSelector((state => state.Products))
  return ( 
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12">
    {records.map(product => (
      <Product key={product.id} {...product}/>
    ))}
  </div> );
}
 
export default Products;