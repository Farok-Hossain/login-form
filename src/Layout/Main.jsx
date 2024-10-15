import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
