import Heading from "@components/common/Heading"
import {useForm , SubmitHandler} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { signUpSchema, signUpType } from "src/validations/signUpSchema"
import Input from "@components/form/Input"
import React from "react"
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability"

const Register = () => {
  const {previousEmail, emailAvailabilityStatus, checkAvailability, resetPreviousEmail} = useCheckEmailAvailability()

  const {register , handleSubmit, formState: {errors}, getFieldState, trigger } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched"
  })

  const submitHandler : SubmitHandler<signUpType> = (data) => {
    console.log(data);
  }
  
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

  return (
    <>
      <Heading title="User Register"></Heading>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(submitHandler , errorHandler)} className="flex flex-col gap-y-3 w-full md:w-1/2">
          <Input error={errors.firstName?.message} label="First Name" name="firstName" register={register}></Input>
          <Input error={errors.lastName?.message} label="Last Name" name="lastName" register={register}></Input>
          <Input error={errors.email?.message ? errors.email.message : emailAvailabilityStatus === "notAvailable" ? 'this email is already in use' : emailAvailabilityStatus === 'error' ? 'Error from the server' : '' } loadingText={emailAvailabilityStatus === "checking" ? "checking the availability of the email..." : ""} label="Email Address" name="email" register={register} type="email" onBlur={checkEmailAvailabilityHandler} disabled={emailAvailabilityStatus === "checking" ? true: false} isAvailable={emailAvailabilityStatus === "available" ? true : false}></Input>
          <Input error={errors.password?.message} label="Password" name="password" register={register} type="password"></Input>
          <Input error={errors.repeatPassword?.message} label="Repeat Password" name="repeatPassword" register={register} type="password"></Input>
          <button type="submit" className="w-fit px-4 py-1.5 bg-primary text-background font-semibold rounded-sm mt-2" disabled={emailAvailabilityStatus === "checking" || emailAvailabilityStatus === "notAvailable" || emailAvailabilityStatus === "error" ? true: false}>Register</button>
        </form>
      </div>    
    </>
  )
}

export default Register