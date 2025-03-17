import { useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  authority?: "user" | "notUser"
}

const ProtectedRoute = ({children, authority = "user"} : ProtectedRouteProps) => {
  const {user} = useAppSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (authority === "user" && !user) {
      navigate("/login");
    }

    if (authority === "notUser" && user) {
      navigate("/");
    }
  }, [authority, user, navigate]);

  if ((authority === "user" && !user) || (authority === "notUser" && user)) {
    return;
  }

  return <>{children}</>;
}

export default ProtectedRoute