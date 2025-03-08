import Heading from "@components/common/Heading"
import ListCartItems from "@components/common/ListCartItems"
import CartItem from "@components/eCommerce/CartItem"
import CartTotal from "@components/eCommerce/CartTotal"
import Loading from "@feedback/Loading"
import actGetFullProductsData from "@store/cart/actions/actGetFullProductsData"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react"

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart)
  const {products} = cart
  useEffect(() => {
    dispatch(actGetFullProductsData())
  }, [dispatch])
  return (
    <>
      <Heading>Cart</Heading>
      <Loading error={cart.error} loading={cart.loading}><ListCartItems records={products} renderedItemFunction={(product) => (<CartItem key={product.id} {...product}></CartItem>)}></ListCartItems></Loading>
      <CartTotal></CartTotal>
    </>
  )
}

export default Cart