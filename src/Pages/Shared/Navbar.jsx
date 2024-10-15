import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 h-11  ">
      <div className="flex justify-center gap-10 font-bold text-white text-xl">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
