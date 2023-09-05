import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VerticalNav = () => {
    const favorites=useSelector((state)=>state.favorites)
  return (
      <div className="d-block d-md-none">
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Zaid Book Store
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addBook"} className="nav-link" >
                  Add Book
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/favorite"} className="nav-link">
                  Favorites {favorites.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default VerticalNav;
