import React from "react";
import "./Nav.css";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#00a7e1" };
  }
};

const Nav = ({ history }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light bg-light "
        style={{ borderBottom: "1px solid #b1b1b1" }}
      >
        <Link className="navbar-brand" to="/en">
          <img
            src={process.env.PUBLIC_URL + "/logoSvetovitNew1.png"}
            className="img-responsive "
            style={{ width: "200px" }}
            alt=""
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={isActive(history, "/en")}
                className="nav-link active"
                to="/en"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={isActive(history, "/en/services")}
                className="nav-link"
                to="/en/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={isActive(history, "/en/contacts")}
                className="nav-link"
                to="/en/contacts"
              >
                Contacts
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0 d-flex  w-auto">
            <li>
              <Link className="nav-item nav-link" to="/">
                <img
                  src={process.env.PUBLIC_URL + "/bulFlag.png"}
                  className="img-responsive "
                  style={{ width: "24px", paddingBottom: "4px" }}
                  alt=""
                />
              </Link>
            </li>

            <li>
              <Link className="nav-item nav-link" to="/en">
                <img
                  src={process.env.PUBLIC_URL + "/ukFlag.png"}
                  className="img-responsive "
                  style={{ width: "24px", paddingBottom: "4px" }}
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Nav);
