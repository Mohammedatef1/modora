import { Link } from "react-router-dom";

const Error = () => {
  return ( 
  <div className="h-screen w-full flex items-center justify-center flex-col gap-y-1 md:gap-y-2 text-center">
      <h2 className="text-4xl md:text-7xl font-bold">404</h2>
      <p className="text-lg md:text-2xl">Sorry, we were unable to find that page</p>
      <Link to="/" className="cursor-pointer hover:underline mt-2 md:mt-4 text-base md:text-xl" >How about going back to safety?</Link>
  </div> );
}
 
export default Error;