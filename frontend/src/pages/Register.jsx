import React, { useState, useContext } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/images/register.png";

import { AuthContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
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
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="login">
      <div className="login-row">
        <div className="login-img">
          <img src={registerImg} alt="" />
        </div>
        <div className="login-form">
          <div className="user">
            <span>
              <i class="ri-user-line"></i>
            </span>
          </div>
          <h2>Register</h2>
          <form onSubmit={handleClick}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                required
                id="username"
                onChange={handleChange}
              />
            </div>
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
              Create Account
            </button>
          </form>
          <p>
            Already have an accout? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
