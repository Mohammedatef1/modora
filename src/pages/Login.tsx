import Heading from "@components/common/Heading"
import Input from "@components/form/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { loginSchema, LogInType } from "src/validations/LoginValidation"

const Login = () => {
  const {register, handleSubmit , formState : {errors}} = useForm<LogInType>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched"
  })

  const errorHandler = () => {
    console.log(errors)
  }

  const submitHandler : SubmitHandler<LogInType>  = (data)=> {
    console.log(data)
  }

  return (
    <>
    <Heading title="User Login"></Heading>
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(submitHandler, errorHandler)} className="flex flex-col gap-y-3 w-full md:w-1/2">
        <Input label="Email Address" name="email" register={register} error={errors.email?.message} type="email"></Input>
        <Input label="Password" name="password" register={register} error={errors.password?.message} type="password"></Input>
        <button type="submit" className="w-fit px-4 py-1.5 bg-primary text-background font-semibold rounded-sm mt-2">Login</button>
      </form>
    </div>    
  </>
  )
}

export default Login