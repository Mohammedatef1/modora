import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "src/db/supabase";
import { User } from "@supabase/supabase-js";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({children} : ProtectedRouteProps) => {
  
  const navigate = useNavigate()
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<unknown>()

  const fetchUser = useCallback( async() => {
    const { data: {session}, error } = await supabase.auth.getSession()
    
    setError(error);

    if (!session) {
      navigate('/login', {replace: true})
      return
    }

    setUser(session?.user)
  }, [navigate])

  useEffect(() => {    
    fetchUser();
  }, [fetchUser])
  
  return !error && user ? (<>{children}</>) : null;
}

export default ProtectedRoute