import Heading from "@components/common/Heading"
import ListCartItems from "@components/common/ListCartItems"
import CartItem from "@components/eCommerce/CartItem"
import CartTotal from "@components/eCommerce/CartTotal"
import Loading from "@feedback/Loading"
import useCart from "@hooks/useCart"

const Cart = () => {
  const  {products, loading, error}  = useCart()
  return (
    <>
      <Heading title="Cart" />
      <Loading error={error} type="cart" loading={loading}><ListCartItems records={products} renderedItemFunction={(product) => (<CartItem key={product.id} {...product}></CartItem>)}></ListCartItems></Loading>
      <CartTotal></CartTotal>
      <div className="flex flex-col items-center">
        <button className="ms-auto bg-blue-500 px-4 py-2 rounded-sm text-white">Place order</button>
      </div>
    </>
  )
}

export default Cart