import { setSession } from "@store/auth/authSlice"
import { useAppDispatch } from "@store/hooks"
import { User } from "@supabase/supabase-js"
import { useCallback, useEffect, useState } from "react"
import { supabase } from "src/db/supabase"

const useGetUser = () =>{
  const dispatch = useAppDispatch()
  const [user, setUser] = useState<User | null | undefined>(null)
  const [error, setError] = useState<unknown>(null)

  const fetchUser = useCallback(async () => {

    const { data: sessionData, error } = await supabase.auth.getSession();
    setError(error)
    setUser(sessionData.session?.user);

    if(!error && sessionData.session?.user){
      dispatch(setSession(sessionData))
    }

  }, [dispatch]);

  useEffect(() => {    
    fetchUser();
  }, [fetchUser])

  return {user, error}
}

export default useGetUser