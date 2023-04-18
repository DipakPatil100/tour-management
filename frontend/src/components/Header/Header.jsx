import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
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
            <button className="btn secondary__btn">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn primary__btn">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
