import Product from "@components/eCommerce/Product";

const Products = () => {
  return ( 
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12">
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
  </div> );
}
 
export default Products;