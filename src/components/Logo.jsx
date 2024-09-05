/* eslint-disable react/prop-types */
import logo from "../assets/logo.png";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={logo} alt="logo" width={width} />
      <h1 className="text-s font-bold text-gray-800 text-center">Blog</h1>
    </div>
  );
}

export default Logo;
