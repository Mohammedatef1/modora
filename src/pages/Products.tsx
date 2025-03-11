import GridList from "@components/common/GridList";
import Heading from "@components/common/Heading";
import Product from "@components/eCommerce/Product";
import Loading from "@feedback/Loading";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts } from "@store/products/actions/actGetProducts";
import { productsCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch() 
  const {records , loading , error} = useAppSelector((state => state.products))
  const {items} = useAppSelector(state => state.cart)
  const likedProducts = useAppSelector(state => state.wishlist.productsIds)
  const params = useParams()

  const productsFullInfo = records.map(el =>({
      ...el,
      quantity: items[el.id] || 0,
      isLiked : likedProducts.includes(el.id)
    })
  )

  useEffect(()=>{
    dispatch(actGetProducts(params.prefix as string))
    return () => {
      dispatch(productsCleanUp())
    }
  },[dispatch, params])

  return ( 
    <>
      <Heading title={`${params.prefix?.charAt(0).toUpperCase()}${params.prefix?.slice(1)} Products`} />
      <Loading error={error} loading={loading}>
        <GridList records={productsFullInfo} renderedElementFunction={(record) => (<Product key={record.id} {...record}/>)}/>
      </Loading>
    </>
  );
}
 
export default Products;