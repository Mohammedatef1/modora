import { useAppSelector } from "@store/hooks";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({children} : ProtectedRouteProps) => {
  const {accessToken} = useAppSelector(state => state.auth)

  if(!accessToken){
    return <Navigate to="/login"/>
  } 

  return accessToken && (<>{children}</>);
}

export default ProtectedRoute