import React, { Component } from "react";
import Nav from "./Nav";
//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./Home.css";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Nav />

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="first-slide img-carusel"
                src={process.env.PUBLIC_URL + "/c1.jpg"}
                alt="First slide"
              />
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1 className="carousel1">
                    WELCOME TO
                    <span
                      style={{
                        color: "#00a7e1",
                        textShadow: "1px 2px #7a7a7a",
                      }}
                    >
                      {" "}
                      SVETOVIT61
                    </span>{" "}
                    ACCOUNTING SERVICES!
                  </h1>
                  <p>
                    STOP WORRYING ABOUT YOUR ACCOUNTING. WE MAKE YOUR ACCOUNTING
                    AND PAYROLL EASY, SO YOU CAN FOCUS ON GROWING YOUR BUSINESS
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="second-slide img-carusel"
                src={process.env.PUBLIC_URL + "/c2.jpg"}
                alt="Second slide"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1 className="carousel2">SMALL BUSINESS ACCOUNTING</h1>
                  <p>
                    IN ORDER TO RUN A SUCCESSFUL BUSINESS, YOU NEED TO MANAGE
                    YOUR FINANCES. WORKING WITH A QUALIFIED CPA FIRM LIKE
                    SVETOVIT61 LTD YOU CAN DO THIS WITH CONFIDENCE.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="third-slide img-carusel"
                src={process.env.PUBLIC_URL + "/c3.jpg"}
                alt="Third slide"
              />
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1 style={{ fontSize: "1.5em" }}>
                    WHY TO OUTSOURCE YOUR ACCOUNTING OPERATIONS?
                  </h1>
                  <p>
                    BETTER USE OF TIME. <br />
                    CUT DOWN ON COSTS. <br />
                    ACCOUNTANTS KNOW ACCOUNTING. <br />
                    COLLABORATIVE ACCOUNTING IS BETTER. <br />
                    SCALABLE OPTIONS.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                src={process.env.PUBLIC_URL + "/truck150.png"}
                alt="Generic placeholder"
                width="160"
                height="160"
              />
              <h3>Тransport and Logistics companies</h3>
              <p>
                We specialize in accounting for logistics and transportation
                companies. Logistics companies have always had to contend with
                uncertainties in operational costs. <br />
                With our many years of experience, we will help you cope better.
              </p>
              <p>
                <button className="btn btn-primary">
                  <Link
                    className=""
                    to="/en/services#truck"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    View details &raquo;
                  </Link>
                </button>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src={process.env.PUBLIC_URL + "/shop150.png"}
                alt="Generic placeholder"
                width="160"
                height="160"
              />
              <h3>Retail companies</h3>
              <p>
                Retailers are facing more challenges than ever to stay
                competitive while maintaining strong profitability. Our team has
                extensive experience in the marketplace to guide you through any
                operational, financial and management challenges.
              </p>
              <p>
                <button className="btn btn-primary">
                  <Link
                    className=""
                    to="/en/services#shop"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    View details &raquo;
                  </Link>
                </button>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src={process.env.PUBLIC_URL + "/factory150.png"}
                alt="Generic placeholder"
                width="160"
                height="160"
              />
              <h3>Manufacturing companies</h3>
              <p>
                If you are looking accounting service for your manufacturing
                business, we are here to help. At SVETOVIT61, we implement the
                finest accounting practices to improve cost-effectiveness for
                our manufacturing clients.
              </p>
              <p>
                <button className="btn btn-primary">
                  <Link
                    className=""
                    to="/en/services#factory"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    View details &raquo;
                  </Link>
                </button>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
