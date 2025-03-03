import GridList from "@components/common/GridList";
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
  const {records , loading , error} = useAppSelector((state => state.products))
  return ( 
    <Loading error={error} loading={loading}>
      <GridList records={records} renderedElementFunction={(record) => (<Product key={record.id} {...record}/>)}/>
    </Loading>
  );
}
 
export default Products;