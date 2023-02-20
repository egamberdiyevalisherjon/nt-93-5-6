import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  function handleLogout() {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["x-auth-token"];
    navigate("/");
  }

  return (
    <header className="text-bg-primary py-3 sticky-top shadow-lg">
      <nav className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="text-decoration-none fs-2 text-warning">
          Najot Market
        </Link>
        <ul className="list-unstyled m-0 d-flex align-items-center gap-3">
          <li className="fs-3">
            <Link to={"/products"} className="text-reset text-decoration-none">
              Products
            </Link>
          </li>
          <li className="fs-3">
            <Link to={"/products"} className="text-reset text-decoration-none">
              Shop
            </Link>
          </li>
          <li className="fs-3">
            <button onClick={handleLogout} className="btn btn-warning">
              <i className="fa-solid fa-arrow-right-from-bracket fa-2x"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
