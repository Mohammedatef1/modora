import { useState } from "react"

type TEmailAvailabilityStatus = "idle" | "checking" | "available" | "notAvailable" | "error" 

const useCheckEmailAvailability = () => {
  const [previousEmail, setPreviousEmail] = useState<null|string>(null)
  const [emailAvailabilityStatus, setEmailAvailabilityStatus] = useState<TEmailAvailabilityStatus>("idle")

  const checkAvailability = async (email: string) => {
    setPreviousEmail(email)
    try {
      setEmailAvailabilityStatus("checking");
      //const response = await axios.get(`/users?email=${email}`)

      setEmailAvailabilityStatus("available");
 
    } catch (error) {
      console.log(error)
      setEmailAvailabilityStatus("error")
    }
  }

  const resetPreviousEmail = () => {
    setEmailAvailabilityStatus("idle")
    setPreviousEmail(null)
  }

  return {previousEmail, emailAvailabilityStatus, checkAvailability, resetPreviousEmail}
}

export default useCheckEmailAvailability