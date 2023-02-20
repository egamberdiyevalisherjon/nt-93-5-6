import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/products");
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();

    if (!values.email)
      return toast("Email is required!!! 😡", { type: "error" });

    if (!values.password)
      return toast("Password is required!!! 😡", { type: "error" });

    if (values.email.length < 4)
      return toast("Email must be at least 4 character long!!! 😡", {
        type: "error",
      });

    if (values.password.length < 4)
      return toast("Password must be at least 4 character long!!! 😡", {
        type: "error",
      });

    try {
      let { data } = await axios.post("https://reqres.in/api/login", values);

      let { token } = data;

      if (!token)
        return toast("Something went wrong! Please contact developer!!!", {
          type: "error",
        });

      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = token;
      toast("Logged in Successfully", { type: "success" });
      navigate("/products");
    } catch (error) {
      console.log(error);
      let message = error.response.data.message;
      toast(message, { type: "error" });
    }
  }

  function handleInputChange(e) {
    setValues((ov) => ({ ...ov, [e.target.name]: e.target.value }));
  }

  return (
    <div className="bg-black min-vh-100 d-flex align-items-center justify-content-center">
      <form
        onSubmit={handleLogin}
        className="text-bg-dark w-50 p-5 rounded-5 border border-success"
      >
        <h1 className="display-1 fw-bold text-center text-success">Login</h1>
        <div className="my-5">
          <label htmlFor="email" className="form-label">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="eshmat@gmail.com"
            className="form-control"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-5">
          <label htmlFor="password" className="form-label">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={values.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
