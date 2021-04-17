import React from "react";
import "./Navbg.css";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#00a7e1" };
  }
};

const Navbg = ({ history }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light bg-light "
        style={{ borderBottom: "1px solid #b1b1b1" }}
      >
        <Link className="navbar-brand" to="/">
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
                style={isActive(history, "/")}
                className="nav-link active"
                to="/"
              >
                Начало
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={isActive(history, "/services")}
                className="nav-link"
                to="/services"
              >
                Услуги
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={isActive(history, "/contacts")}
                className="nav-link"
                to="/contacts"
              >
                Контакти
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

export default withRouter(Navbg);
