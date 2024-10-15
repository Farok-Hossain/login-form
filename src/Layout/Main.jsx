import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  //   const noNavbar =
  //     location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {/* {noNavbar || <Navbar></Navbar>} */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
