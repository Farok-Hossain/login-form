import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link className="mr-4 ml-4" to="/home">
        Home
      </Link>
      <Link to="/login">Login</Link>
      <h1 className="text-center text-green-400 text-4xl font-bold">Hello</h1>
    </div>
  );
};

export default App;
