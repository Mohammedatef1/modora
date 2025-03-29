import GridList from "@components/common/GridList";
import Heading from "@components/common/Heading";
import ProductCard from "@components/eCommerce/ProductCard";
import Loading from "@feedback/Loading";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const {error, loading, productsFullInfo, params} = useProducts()

  return ( 
    <>
      <Heading title={`${params.prefix?.charAt(0).toUpperCase()}${params.prefix?.slice(1)} Products`} />
      <Loading type="product" error={error} loading={loading}>
        <GridList records={productsFullInfo} renderedElementFunction={(record) => (<ProductCard key={record.id} product={{...record}} />)} />
      </Loading>
    </>
  );
}
 
export default Products;