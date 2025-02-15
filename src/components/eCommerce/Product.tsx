const Product = () => {
  return (  
  <div className="flex flex-col items-center gap-4">
    <div className="aspect-[1/1.2] w-full">
      <img src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg" loading="lazy" alt="product image" className="w-full h-full" />
    </div>
    <p className="text-lg">title</p>
    <p className="text-lg">15$</p>
    <button className="bg-primary rounded-md px-6 py-2 text-lg text-background font-semibold">Add to cart</button>
  </div> );
}
 
export default Product;