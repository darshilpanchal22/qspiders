import { Link, NavLink } from "react-router-dom";
import Logo from "./../assets/react.svg";

const Navbar = () => {
  return (
    <div className="flex py-5 px-2 items-center bg-blue-600">
      <div className="px-20">
        <img src={Logo} alt="" />
      </div>

      <nav className="flex items-center mx-auto gap-10 justify-between text-xl text-white">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
