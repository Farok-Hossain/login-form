import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-blue-500 h-11  ">
      <div className="flex justify-center gap-10 font-bold text-white text-xl uppercase">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/category">Category</Link>
        <Link to="/order">Order</Link>
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="btn btn-ghost font-bold text-white text-xl uppercase mt-[-10px]"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
