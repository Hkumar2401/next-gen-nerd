import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5 flex justify-between">
      <div className="text-[#a9bac2] flex gap-14 justify-center items-center">
        <a className="text-3xl text-white" href="">
          NextGenNerd
        </a>
      </div>
      <div className="flex justify-center items-center">
        <Link
          className="text-white p-2 bg-[#0d1325] w-20 text-center rounded-md"
          to={"/login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
