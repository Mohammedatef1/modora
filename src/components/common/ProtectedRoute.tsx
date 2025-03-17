import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({children} : ProtectedRouteProps) => {
  const {user} = useAppSelector(state => state.auth)
  const navigate = useNavigate()

  // useEffect(() => {
  //   console.log(user)
  //   if (!user) {
  //     navigate("/login");
  //   }

  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  return user && (<>{children}</>);
}

export default ProtectedRoute