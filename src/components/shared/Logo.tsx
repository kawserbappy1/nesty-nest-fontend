import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="" className="w-30 md:w-auto" />
    </Link>
  );
};

export default Logo;
