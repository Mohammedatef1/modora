const CartItem = () => {
  return (
    <div className="grid grid-cols-6 min-h-[200px] py-3 border-b gap-x-2 border-gray-400 last:border-b-0 items-center">
      <div className="product-image bg-gray-200 w-full h-full">
        <img src="" className="w-full h-full object-contain" alt="" />
      </div>
      <div className="col-span-2">
        <h2>Product name</h2>
      </div>
      <div>
        <h3>50.00 EGP</h3>
      </div>
      <div>
        <p>Quantity</p>
        <input type="number" className="w-16 p-1 max-w-[60%]" defaultValue={1} max={3} />
      </div>
      <div>
        <button onClick={() => {}} className="bg-red-500 px-4 py-2 rounded-sm text-white">Remove</button>
      </div>
    </div>
  )
}

export default CartItem