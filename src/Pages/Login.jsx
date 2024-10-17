import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { singInUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singInUser(email, password).then((result) => {
      const users = result.user;
      console.log(users);
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="ml-10 text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold text-green-600">
            Login now<span className="text-pink-600">!</span>
          </h1>
        </div>
        <div className="card md:w-full shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link text-sm link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* captcha validate */}
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                placeholder="type the captcha above"
                name="captcha"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              {/* TODO: apply disabled for re captcha */}
              <input
                disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className=" px-6">
            <small>
              New Here?{" "}
              <Link className=" text-blue-600" to="/signup">
                Create an account
              </Link>
            </small>
          </p>
          <div className="text-center mt-5 mb-5">
            <button className="btn text-blue-600 text-md w-40 h-16 bg-slate-200">
              <FcGoogle className="mr-2 text-3xl"></FcGoogle>
              <h1 className="text-2xl">
                G<span className="text-red-600">o</span>
                <span className="text-yellow-400">o</span>
                <span>g</span>
                <span className="text-green-600">l</span>
                <span className="text-red-600">e</span>
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
