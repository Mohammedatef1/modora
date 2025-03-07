import Heading from "@components/common/Heading"
import CartItem from "@components/eCommerce/CartItem"
import CartTotal from "@components/eCommerce/CartTotal"

const Cart = () => {
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