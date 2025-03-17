import Heading from "@components/common/Heading"
import Input from "@components/form/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import actLogin from "@store/auth/actions/actLogin"
import { cleanUpAuth } from "@store/auth/authSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"
import { loginSchema, LogInType } from "src/validations/LoginValidation"

const Login = () => {
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

  if(accessToken) {
    return <Navigate to={"/"} />
  }

  return (
    <>
    <Heading title="User Login"></Heading>
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(submitHandler, errorHandler)} className="flex flex-col gap-y-3 w-full md:w-1/2">
        <Input label="Email Address" name="email" register={register} error={errors.email?.message} type="email"></Input>
        <Input label="Password" name="password" register={register} error={errors.password?.message} type="password"></Input>
        <button type="submit" className="w-fit px-4 py-1.5 bg-primary text-background font-semibold rounded-sm mt-2 disabled:opacity-75 transition-opacity" disabled={loading === "pending"}>Login</button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>    
  </>
  )
}

export default Login