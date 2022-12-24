import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-outline-dark" to="/login">
                  <i className="fa fa-sign-in me-1" /> Login
                </NavLink>
                <NavLink className="btn btn-outline-dark" to="/login">
                  <i className="fa fa-user-plus me-1" /> Register
                </NavLink>
                <NavLink className="btn btn-outline-dark" to="/login">
                  <i className="fa fa-shopping-cart me-1" /> Cart(0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;