import { Link } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Link className="flex justify-end mr-10 text-purple-700" to="/login">
        Login
      </Link>
      <Home />

      <h1 className="text-center text-green-400 text-4xl font-bold">Hello</h1>
    </div>
  );
};

export default App;
