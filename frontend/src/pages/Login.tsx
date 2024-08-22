import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignin = async () =>{
    setIsLoading(true);
    const {data} = await axios.post('https://next-gen-nerd.hemantk240103.workers.dev/user/signin', loginData, {
      headers: {
        'Content-Type': 'application'
      }
    });
    setIsLoading(false);
    if(data.success){
      navigate("/blogs");
    }

    console.log(data);
    
  }

  return (
    <div className="w-full h-screen text-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl">NextGenNerd</p>
        <p className="text-3xl mt-2">Welcome back</p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col border-[1px] border-gray-700 p-10 rounded-lg w-1/2 h-fit mt-5"
      >
        <label className="text-[#7f8ea3] mt-5" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          onChange={(e) => {
            setLoginData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
          value={loginData.email}
          className="bg-[#030711] border-[1px] mt-3 border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md"
          type="text"
          placeholder="name@example.com"
        />

        <label className="text-[#7f8ea3] mt-8" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          onChange={(e) => {
            setLoginData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
          value={loginData.password}
          className="bg-[#030711] mt-3 border-[1px] border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md"
          type="password"
          placeholder="******"
        />

        <button
          type="submit"
          className="w-full bg-[#dfe2e5] mt-10 p-2 rounded-md text-black"
          onClick={handleSignin}
        >
          {
            isLoading ? <span className="loader"></span> : "Signin"
          }
        </button>

        <Link
          to={"/register"}
          className="underline text-[#7f8ea3] mt-5 text-center p-5"
        >
          Don't have an account? Sign up
        </Link>
      </form>
    </div>
  );
};

export default Login;
