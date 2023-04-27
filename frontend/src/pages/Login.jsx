import React, { useState, useContext } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });

      // console.log(result.data);

      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  return (
    <section className="login">
      <div className="login-row">
        <div className="login-img">
          <img src={loginImg} alt="" />
        </div>
        <div className="login-form">
          <div className="user">
            <span>
              <i class="ri-user-line"></i>
            </span>
          </div>
          <h2>Login</h2>
          <form onSubmit={handleClick}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                required
                id="password"
                onChange={handleChange}
              />
            </div>
            <button
              style={{ color: "white" }}
              type="submit"
              className="btn primary__btn auth-btn"
            >
              Login
            </button>
          </form>
          <p>
            Don't have an accout? <Link to="/register">Create</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
