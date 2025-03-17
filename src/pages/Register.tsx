import Heading from "@components/common/Heading"
import Input from "@components/form/Input"
import useRegister from "@hooks/useRegister"
import { Navigate } from "react-router-dom"


const Register = () => {

  const {emailAvailabilityStatus, error, loading, accessToken, register , handleSubmit, errorHandler, submitHandler, checkEmailAvailabilityHandler, errors} = useRegister()

  if(accessToken) {
    return <Navigate to={"/"} />
  }

  return (
    <>
      <Heading title="User Register"></Heading>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(submitHandler , errorHandler)} className="flex flex-col gap-y-3 w-full md:w-1/2">
          <Input error={errors.firstName?.message} label="First Name" name="firstName" register={register}></Input>
          <Input error={errors.lastName?.message} label="Last Name" name="lastName" register={register}></Input>
          <Input error={errors.email?.message ? errors.email.message : emailAvailabilityStatus === "notAvailable" ? 'this email is already in use' : emailAvailabilityStatus === 'error' ? 'Error from the server' : '' } loadingText={emailAvailabilityStatus === "checking" ? "checking the availability of the email..." : ""} label="Email Address" name="email" register={register} type="email" onBlur={checkEmailAvailabilityHandler} disabled={emailAvailabilityStatus === "checking" ? true: false} availableText={emailAvailabilityStatus === "available" ? "this email is available" : ""}></Input>
          <Input error={errors.password?.message} label="Password" name="password" register={register} type="password"></Input>
          <Input error={errors.repeatPassword?.message} label="Repeat Password" name="repeatPassword" register={register} type="password"></Input>
          <button type="submit" className="w-fit px-4 py-1.5 bg-primary text-background font-semibold rounded-sm mt-2 disabled:opacity-75 transition-opacity" disabled={emailAvailabilityStatus === "checking" || emailAvailabilityStatus === "notAvailable" || emailAvailabilityStatus === "error" || loading === "pending" ? true: false}>Register</button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>    
    </>
  )
}

export default Register