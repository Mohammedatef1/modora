import { useAppSelector } from '@store/hooks';
import Cart from '../../assets/svg/cart.svg?react'
import { getTotalCartQuantity } from '@store/cart/selectors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const navigate = useNavigate()

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
  <div className='flex items-center gap-x-2 cursor-pointer' onClick={() => {navigate('cart')}}>
    <div className='relative'>
      <Cart></Cart>
      <div className={` ${isAnimated? 'pulseAnimation' : ''} p-1 bg-primary rounded-full aspect-square absolute -top-3 -right-3 flex items-center justify-center h-6 text-sm`}>{totalQuantity}</div>
    </div>
    <h3 className="font-semibold">Cart</h3>
  </div>
 );
}
 
export default ShoppingCart;