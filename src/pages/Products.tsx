import Product from "@components/eCommerce/Product";
import Loading from "@feedback/Loading";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts } from "@store/products/actions/actGetProducts";
import { productsCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  useEffect(()=>{
    dispatch(actGetProducts(params.prefix as string))
    return () => {
      dispatch(productsCleanUp())
    }
  },[dispatch, params])
  const {records , loading , error} = useAppSelector((state => state.Products))
  return ( 
    <Loading error={error} loading={loading}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12">
        {records.map(product => (
          <Product key={product.id} {...product}/>
        ))}
      </div> 
    </Loading>
  );
}
 
export default Products;