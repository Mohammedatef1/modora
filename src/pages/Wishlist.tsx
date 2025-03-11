import GridList from "@components/common/GridList"
import Heading from "@components/common/Heading"
import Product from "@components/eCommerce/Product"
import Loading from "@feedback/Loading"
import useWishlist from "@hooks/useWishlist"

const Wishlist = () => {
  const {productsFullInfo, error, loading} = useWishlist()

  return (
  <>
    <Heading title="Your Wishlist"></Heading>
    <Loading error={error} loading={loading}>
      <GridList records={productsFullInfo} renderedElementFunction={(record) => (<Product {...record} key={record.id}/>)}/>
    </Loading>
  </>
  )
}

export default Wishlist