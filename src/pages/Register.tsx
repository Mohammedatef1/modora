import Heading from "@components/common/Heading"
import {useForm , SubmitHandler} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { signUpSchema, signUpType } from "src/validations/signUpSchema"
import Input from "@components/form/Input"

const Register = () => {
  const {register , handleSubmit, formState: {errors} } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "all"
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
          <Input error={errors.firstName?.message} label="First Name" name="firstName" register={register}></Input>
          <Input error={errors.lastName?.message} label="Last Name" name="lastName" register={register}></Input>
          <Input error={errors.email?.message} label="Email Address" name="email" register={register} type="email"></Input>
          <Input error={errors.password?.message} label="Password" name="password" register={register} type="password"></Input>
          <Input error={errors.repeatPassword?.message} label="Repeat Password" name="repeatPassword" register={register} type="password"></Input>
          <button type="submit" className="w-fit px-4 py-1.5 bg-primary text-background font-semibold rounded-sm mt-2">Register</button>
        </form>
      </div>    
    </>
  )
}

export default Register