import {  memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

interface CounterItemProps {
  Icon : React.FunctionComponent;
  totalQuantity: number;
  title: string;
  to: string;
}


const CounterItem = memo(({Icon, totalQuantity, title, to} : CounterItemProps) => {
  const navigate = useNavigate()

  const [isAnimated, setIsAnimated] = useState(false);

  const handleNavigate = useCallback(() => {
    navigate(to)
  }, [navigate , to])

  useEffect(() =>{
    if (totalQuantity == 0) return;
    setIsAnimated(true);
    const delay = setTimeout(() => {
      setIsAnimated(false)
    }, 300)

    return () => clearTimeout(delay)
  }, [totalQuantity])

  return (
    <div className='flex items-center gap-x-2 cursor-pointer' onClick={handleNavigate}>
    <div className='relative'>
      <Icon/>
      { totalQuantity > 0 && <div className={` ${isAnimated? 'pulseAnimation' : ''} p-1 bg-primary rounded-full aspect-square absolute -top-3 -right-3 flex items-center justify-center h-6 text-sm`}>{totalQuantity}</div>}
    </div>
    <h3 className="font-semibold">{title}</h3>
  </div>
  )
})

export default CounterItem