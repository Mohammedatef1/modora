import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import LottieHandler from "@feedback/LottieHandler";

const Error = () => {
  const error = useRouteError();
  //let responseCode:number;
  let responseMessage:string;

  if (isRouteErrorResponse(error) && error.status !== 404){
    //responseCode = error.status;
    responseMessage = error.statusText;
  } else{
    //responseCode = 404;
    responseMessage = "Sorry, we were unable to find that page"
  }
  
  return ( 
    <div className="h-screen w-full flex items-center justify-center flex-col gap-y-1 md:gap-y-2 text-center">
      <LottieHandler type="notfound" message={responseMessage} className="max-w-xl text-lg md:text-2xl"/>
      <Link to="/" replace={true} className="cursor-pointer hover:underline mt-2 md:mt-4 text-base md:text-xl text-blue-700" >How about going back to safety?</Link>
    </div> );
}
 
export default Error;