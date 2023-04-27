import React, { useContext } from "react";
import "./Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo1.png";

import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();

  const { user, dispatch, error, loading } = useContext(AuthContext);

  // console.log(user, error, loading);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <div className="head-wrap">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navi">
            <li>
              <NavLink
                className={(navClass) =>
                  navClass.isActive ? "active__link" : ""
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navClass) =>
                  navClass.isActive ? "active__link" : ""
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navClass) =>
                  navClass.isActive ? "active__link" : ""
                }
                to="/tours"
              >
                Tours
              </NavLink>
            </li>
          </div>
          <div className="userAuth">
            {user ? (
              <div className="logout-section">
                <h5>{user.username}</h5>
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </button>
                <button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
