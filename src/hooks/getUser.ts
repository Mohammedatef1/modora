import { User } from "@supabase/supabase-js"
import { useCallback, useEffect, useState } from "react"
import { supabase } from "src/db/supabase"

const useGetUser = () =>{
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<unknown>(null)
  const [accessToken, setAccessToken] = useState<string>()

  const fetchUser = useCallback(async () => {
    const { data: sessionData, error } = await supabase.auth.getSession();

    setError(error)
    setUser(sessionData.session?.user);
    setAccessToken(sessionData.session?.access_token)

  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser])

  return {user, error, accessToken}
}

export default useGetUser