import Logo from '../../assets/svg/cart.svg?react'

const ShoppingCart = () => {
  return ( 
  <div className='relative'>
    <Logo></Logo>
    <div className='p-1 bg-primary rounded-full aspect-square absolute -top-3 -right-3 flex items-center justify-center h-6 text-sm'>0</div>
  </div> );
}
 
export default ShoppingCart;