import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-center text-red-700 font-bold text-3xl">
        404 Not Found
      </h1>
      <Link to="/">
        <p className="text-center text-green-500 font-bold">
          Back to Home Page
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
