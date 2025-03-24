import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actRegister from "@store/auth/actions/actRegister"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { cleanUpAuth } from "@store/auth/authSlice"
import {useForm , SubmitHandler} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { signUpSchema, signUpType } from "src/validations/signUpSchema"

const useRegister = () => {
  const {previousEmail, emailAvailabilityStatus, checkAvailability, resetPreviousEmail} = useCheckEmailAvailability()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {error, loading, accessToken} = useAppSelector(state => state.auth)

  const {register , handleSubmit, formState: {errors}, getFieldState, trigger } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched"
  })

  const submitHandler : SubmitHandler<signUpType> = async (data) => {
    const {email, firstName, lastName, password} = data
    await dispatch(actRegister({email, firstName, lastName, password})).unwrap().then(() => {
      navigate("/")
    })
  }

  useEffect(() => {
    return () => {dispatch(cleanUpAuth())}
  }, [dispatch])
  
  const errorHandler = () => {
    console.log(errors)
  }

  const checkEmailAvailabilityHandler = async(e: React.FocusEvent<HTMLInputElement>) => {
    //trigger the email to make the invalid is true at the beginning, await to make sure the trigger has completely executed before run the logic
    await trigger("email")
    const value = e.target.value
    const {isDirty, invalid} = getFieldState("email")
    if(isDirty && !invalid && previousEmail !== value){
      checkAvailability(value)
    }
    // previousEmail in the condition to prevent useless calls of reset function 
    if(invalid && previousEmail){
      resetPreviousEmail()
    }
  }

  return {emailAvailabilityStatus, error, loading, accessToken, register , handleSubmit, errorHandler, submitHandler, checkEmailAvailabilityHandler, errors}
}

export default useRegister