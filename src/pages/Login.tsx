import Heading from "@components/common/Heading"

const Login = () => {
  return (
    <>
    <Heading title="User Login"></Heading>
    <div className="flex justify-center">
      <form action="" className="flex flex-col gap-y-3 w-full md:w-1/2">
        <div className="flex flex-col gap-y-1 ">
          <label htmlFor="email" className="text-sm md:text-base text-slate-700">Email address</label>
          <input type="email" id="email" className="px-4 py-1.5 text-sm md:text-base border border-gray-300 rounded-sm bg-gray-50" />
        </div>
        <div className="flex flex-col gap-y-1 ">
          <label htmlFor="password" className="text-sm md:text-base text-slate-700">Password</label>
          <input type="password" id="password" className="px-4 py-1.5 text-sm md:text-base border border-gray-300 rounded-sm bg-gray-50" />
        </div>
        <button type="button" className="w-fit px-4 py-1.5 bg-primary text-background font-semibold rounded-sm mt-2">Login</button>
      </form>
    </div>    
  </>
  )
}

export default Login