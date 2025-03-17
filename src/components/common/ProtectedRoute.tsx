import { useAppSelector } from "@store/hooks";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({children} : ProtectedRouteProps) => {
  const {user} = useAppSelector(state => state.auth)

  // useEffect(() => {
  //   console.log(user)
  //   if (!user) {
  //     navigate("/login");
  //   }

  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);
  if(!user) return

  return user && (<>{children}</>);
}

export default ProtectedRoute