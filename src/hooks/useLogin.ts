import { zodResolver } from "@hookform/resolvers/zod"
import actLogin from "@store/auth/actions/actLogin"
import { cleanUpAuth } from "@store/auth/authSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { loginSchema, LogInType } from "src/validations/LoginValidation"

const useLogin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {error, loading, accessToken} = useAppSelector(state => state.auth)
  const {register, handleSubmit , formState : {errors}} = useForm<LogInType>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched"
  })

  useEffect(() => {
    return () => {dispatch(cleanUpAuth())}
  }, [dispatch])

  const errorHandler = () => {
    console.log(errors)
  }

  const submitHandler : SubmitHandler<LogInType>  = (data)=> {
    dispatch(actLogin(data)).unwrap().then(() => {
      navigate("/")
    })
  }

  return {error, loading, accessToken, register, handleSubmit, errorHandler, submitHandler, errors}
}

export default useLogin