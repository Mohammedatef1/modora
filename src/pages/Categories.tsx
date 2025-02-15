import Category from "@components/eCommerce/Category";

const Categories = () => {
  return ( 
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12">
    <Category/>
    <Category/>
    <Category/>
    <Category/>
    <Category/>
    <Category/>
    <Category/>
    <Category/>
  </div> );
}
 
export default Categories;