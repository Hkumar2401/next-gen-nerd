import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="w-full h-screen text-white flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <p className="text-xl">NextGenNerd</p>
      <p className="text-4xl mt-2">Welcome</p>
    </div>

      <form onSubmit={(e)=> e.preventDefault()} className="flex flex-col border-[1px] border-gray-700 p-10 rounded-lg w-1/2 h-fit mt-5">
          <label className="text-[#7f8ea3] mt-5" htmlFor="firstName">First Name</label>
          <input id="firstName" className="bg-[#030711] border-[1px] mt-3 border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md" type="text" placeholder="John" />

          <label className="text-[#7f8ea3] mt-5" htmlFor="lastName">Last Name</label>
          <input id="lastName" className="bg-[#030711] border-[1px] mt-3 border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md" type="text" placeholder="Doe" />

          <label className="text-[#7f8ea3] mt-5" htmlFor="email">Email</label>
          <input id="email" className="bg-[#030711] border-[1px] mt-3 border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md" type="text" placeholder="name@example.com" />

          <label className="text-[#7f8ea3] mt-8" htmlFor="password">Password</label>
          <input id="password" className="bg-[#030711] mt-3 border-[1px] border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md" type="password" placeholder="******" />

          <button type="submit" className="w-full bg-[#dfe2e5] mt-10 p-2 rounded-md text-black">Signup</button>

          <Link to={'/login'} className="underline text-[#7f8ea3] mt-5 text-center p-5">Already have an account? Sign In</Link>
      </form>
    
  </div>
  )
}

export default Signup