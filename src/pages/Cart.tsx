import Heading from "@components/common/Heading"
import ListCartItems from "@components/common/ListCartItems"
import CartItem from "@components/eCommerce/CartItem"
import CartTotal from "@components/eCommerce/CartTotal"
import Loading from "@feedback/Loading"
import actGetFullProductsData from "@store/cart/actions/actGetFullProductsData"
import { cleanUpCartProducts } from "@store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react"

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart)
  const {products} = cart
  useEffect(() => {
    dispatch(actGetFullProductsData())

    return () => {dispatch(cleanUpCartProducts())}
  }, [dispatch])
  return (
    <>
      <Heading title="Cart" />
      <Loading error={cart.error} loading={cart.loading}><ListCartItems records={products} renderedItemFunction={(product) => (<CartItem key={product.id} {...product}></CartItem>)}></ListCartItems></Loading>
      <CartTotal></CartTotal>
    </>
  )
}

export default Cart