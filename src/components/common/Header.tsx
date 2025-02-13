const Header = () => {
  return (
  <header>
    <div className="flex align-center justify-between ">
      <h1 className="logo text-slate-800">our <span className="text-white bg-blue-500 rounded-md ">Ecom</span></h1>
      <div className="relative ">
        <svg></svg>
        <span className="absolute -top-1 -right-1 p-0.5 rounded-full bg-blue-500 ">0</span>
      </div>
    </div>
    <div className="flex items-center justify-between ">
      <nav className="">
        
      </nav>
    </div>
  </header> );
}
 
export default Header;