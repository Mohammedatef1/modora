import Heading from "@components/common/Heading"
import CartItem from "@components/eCommerce/CartItem"
import CartTotal from "@components/eCommerce/CartTotal"
import actGetFullProductsData from "@store/cart/actions/actGetFullProductsData"
import { useAppDispatch } from "@store/hooks"
import { useEffect } from "react"

const Cart = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(actGetFullProductsData())
  }, [dispatch])
  return (
    <>
      <Heading>Cart</Heading>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartTotal></CartTotal>
    </>
  )
}

export default Cart