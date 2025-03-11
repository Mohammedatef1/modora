import GridList from "@components/common/GridList"
import Heading from "@components/common/Heading"
import Product from "@components/eCommerce/Product"
import useWishlist from "@hooks/useWishlist"

const Wishlist = () => {
  const {productsFullInfo} = useWishlist()

  return (
  <>
    <Heading title="Your Wishlist"></Heading>
    <GridList records={productsFullInfo} renderedElementFunction={(record) => (<Product {...record} key={record.id}/>)}/>
  </>
  )
}

export default Wishlist