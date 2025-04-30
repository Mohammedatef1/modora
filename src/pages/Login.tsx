import Heading from "@components/common/Heading"
import MaxWidthWrapper from "@components/common/MaxWidthWrapper"
import Input from "@components/form/Input"
import useLogin from "@hooks/useLogin"
import { Navigate } from "react-router-dom"

const Login = () => {
  
  const {error, loading, accessToken, register, handleSubmit, errorHandler, submitHandler, errors} = useLogin()

  if(accessToken) {
    return <Navigate to={"/"} />
  }

  return (
    <MaxWidthWrapper>
      <Heading title="User Login" className="text-center"></Heading>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(submitHandler, errorHandler)} className="flex flex-col gap-y-3 w-full md:w-1/2">
          <Input label="Email Address" name="email" register={register} error={errors.email?.message} type="email"></Input>
          <Input label="Password" name="password" register={register} error={errors.password?.message} type="password"></Input>
          <button type="submit" className="w-fit px-4 py-1.5 bg-primary text-background font-semibold rounded-sm mt-2 disabled:opacity-75 transition-opacity" disabled={loading === "pending"}>Login</button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>    
    </MaxWidthWrapper>
    )
}

export default Login