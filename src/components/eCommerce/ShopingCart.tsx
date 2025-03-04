import { useAppSelector } from '@store/hooks';
import Logo from '../../assets/svg/cart.svg?react'
import { getTotalCartQuantity } from '@store/cart/selectors';
import { useEffect, useState } from 'react';

const ShoppingCart = () => {

  const totalQuantity = useAppSelector(getTotalCartQuantity)

  const [isAnimated, setIsAnimated] = useState(false)
  useEffect(() =>{
    if (totalQuantity == 0) return;
    setIsAnimated(true);
    const delay = setTimeout(() => {
      setIsAnimated(false)
    }, 300)

    return () => clearTimeout(delay)
  }, [totalQuantity])
  

  return ( 
  <div className='relative'>
    <Logo></Logo>
    <div className={` ${isAnimated? 'pulseAnimation' : ''} p-1 bg-primary rounded-full aspect-square absolute -top-3 -right-3 flex items-center justify-center h-6 text-sm`}>{totalQuantity}</div>
  </div> );
}
 
export default ShoppingCart;