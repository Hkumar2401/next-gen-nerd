import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () =>{
    setIsLoading(true);
    const {data} = await axios.post('https://next-gen-nerd.hemantk240103.workers.dev/user/signup', signupData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setIsLoading(false);
    
    localStorage.setItem('token', data.token);

    if(data.success){
      navigate('/blogs');
    }

    console.log(data);
    
  }

  return (
    <div className="w-full h-screen text-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl">NextGenNerd</p>
        <p className="text-4xl mt-2">Welcome</p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col border-[1px] border-gray-700 p-10 rounded-lg w-1/2 h-fit mt-5"
      >
        <label className="text-[#7f8ea3] mt-5" htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          onChange={(e) =>
            setSignupData((prevState) => ({
              ...prevState,
              firstName: e.target.value,
            }))
          }
          value={signupData.firstName}
          className="bg-[#030711] border-[1px] mt-3 border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md"
          type="text"
          placeholder="John"
        />

        <label className="text-[#7f8ea3] mt-5" htmlFor="lastName">
          Last Name
        </label>
        <input
          id="lastName"
          value={signupData.lastName}
          onChange={(e) =>
            setSignupData((prevState) => ({
              ...prevState,
              lastName: e.target.value,
            }))
          }
          className="bg-[#030711] border-[1px] mt-3 border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md"
          type="text"
          placeholder="Doe"
        />

        <label className="text-[#7f8ea3] mt-5" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          value={signupData.email}
          onChange={(e) => {
            setSignupData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
          className="bg-[#030711] border-[1px] mt-3 border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md"
          type="text"
          placeholder="name@example.com"
        />

        <label className="text-[#7f8ea3] mt-8" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          value={signupData.password}
          onChange={(e) => {
            setSignupData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
          className="bg-[#030711] mt-3 border-[1px] border-gray-700 outline-4 outline-offset-2 focus:outline outline-gray-800 p-3 px-5 rounded-md"
          type="password"
          placeholder="******"
        />

        <button
          type="submit"
          className="w-full bg-[#dfe2e5] mt-10 p-2 rounded-md text-black"
          onClick={handleSignup}
        >
          {
            isLoading ? <span className="loader"></span> : "Signup"
          }
        </button>

        <Link
          to={"/login"}
          className="underline text-[#7f8ea3] mt-5 text-center p-5"
        >
          Already have an account? Sign In
        </Link>
      </form>
    </div>
  );
};

export default Signup;
