import GridList from "@components/common/GridList"
import Heading from "@components/common/Heading"
import Product from "@components/eCommerce/Product"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetWishlistProducts from "@store/wishlist/actions/actGetWishlistProducts"
import { useEffect } from "react"

const Wishlist = () => {
  const dispatch = useAppDispatch()
  const wishlist = useAppSelector(state => state.wishlist)
  const {items} = useAppSelector(state => state.cart)
  const {productsIds , products} = wishlist
  const productsFullInfo = products.map(el =>  ({...el , isLiked : productsIds.includes(el.id), quantity: items[el.id] }))
  useEffect(() => {
    dispatch(actGetWishlistProducts())
  }, [dispatch])
  return (
  <>
    <Heading>Your Wishlist</Heading>
    <GridList records={productsFullInfo} renderedElementFunction={(record) => (<Product {...record} key={record.id}/>)}/>
  </>
  )
}

export default Wishlist