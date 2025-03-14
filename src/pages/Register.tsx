import Heading from "@components/common/Heading"
import {useForm , SubmitHandler} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { signUpSchema, signUpType } from "src/validations/signUpSchema"

const Register = () => {
  const {register , handleSubmit, formState: {errors} } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur"
  })

  const submitHandler : SubmitHandler<signUpType> = (data) => {
    console.log(data);
  }
  
  const errorHandler = () => {
    console.log(errors)
  }

  return (
    <>
      <Heading title="User Register"></Heading>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(submitHandler , errorHandler)} className="flex flex-col gap-y-3 w-full md:w-1/2">
          <div className="flex flex-col gap-y-px ">
            <label htmlFor="firstName" className="text-sm md:text-base mb-0.5 text-slate-700">First Name</label>
            <input type="text" id="firstName" className={`px-3 py-1 text-sm md:text-base border rounded-sm bg-gray-50 ${errors.firstName ? 'border-red-500 ' : 'border-gray-300'}`} {...register("firstName")} />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
          </div>
          <div className="flex flex-col gap-y-px ">
            <label htmlFor="lastName" className="text-sm md:text-base mb-0.5 text-slate-700">Last Name</label>
            <input type="text" id="lastName" className={`px-3 py-1 text-sm md:text-base border rounded-sm bg-gray-50 ${errors.lastName ? 'border-red-500 ' : 'border-gray-300'}`} {...register("lastName")}/>
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
          </div>
          <div className="flex flex-col gap-y-px ">
            <label htmlFor="email" className="text-sm md:text-base mb-0.5 text-slate-700">Email address</label>
            <input type="email" id="email" className={`px-3 py-1 text-sm md:text-base border rounded-sm bg-gray-50 ${errors.email ? 'border-red-500 ' : 'border-gray-300'}`} {...register("email")}/>
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col gap-y-px ">
            <label htmlFor="password" className="text-sm md:text-base mb-0.5 text-slate-700">Password</label>
            <input type="password" id="password" className={`px-3 py-1 text-sm md:text-base border rounded-sm bg-gray-50 ${errors.password ? 'border-red-500 ' : 'border-gray-300'}`} {...register("password")}/>
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <div className="flex flex-col gap-y-px ">
            <label htmlFor="repeatPassword" className="text-sm md:text-base mb-0.5 text-slate-700">Repeat Password</label>
            <input type="password" id="repeatPassword" className={`px-3 py-1 text-sm md:text-base border rounded-sm bg-gray-50 ${errors.repeatPassword ? 'border-red-500 ' : 'border-gray-300'}`} {...register("repeatPassword")}/>
            {errors.repeatPassword && <span className="text-red-500 text-sm">{errors.repeatPassword.message}</span>}
          </div>
          <button type="submit" className="w-fit px-4 py-1.5 bg-primary text-background font-semibold rounded-sm mt-2">Register</button>
        </form>
      </div>    
    </>
  )
}

export default Register