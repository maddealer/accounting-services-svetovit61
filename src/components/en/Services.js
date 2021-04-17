import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div
          className="jumbotron"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/New-features-released-Team-People-and-Delay-teamwork-planning.jpg`,
          }}
        ></div>
        <div
          className="container-fluid mx-auto mt-5 mb-5 col-12"
          style={{ textAlign: "center" }}
        >
          <div className="hd">Why People Believe in Us</div>
          <p>
            <small className="text-muted">
              Our dedicated and extremely proficient team of accounting
              professionals has hands-on and exhaustive experience of accounting
              practices in Bulgaria. <br />
              This ensures we are able to take care of all the accounting needs
              of your clients seamlessly, accurately and quickly.
            </small>
          </p>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="card col-md-3 col-12" id="truck">
              <div className="card-content">
                <div className="card-body">
                  {" "}
                  <i
                    className="fas fa-truck fa-5x"
                    style={{ color: "#c7d2d6" }}
                  ></i>
                  <div className="shadow"></div>
                  <div className="card-title">
                    {" "}
                    Тransport and Logistics companies{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        Full service to the Executive Agency "Automotive
                        Administration": Obtaining a license, financial
                        stability, changing circumstances.
                        <br />
                        With our many years of experience, we will help you cope
                        better.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 col-12 ml-2">
              <div className="card-content">
                <div className="card-body">
                  {" "}
                  <i
                    className="fas fa-calculator fa-5x"
                    style={{ color: "#c7d2d6" }}
                  ></i>
                  <div className="card-title"> Accounting & Tax Services </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Comprehensive accounting and tax services for companies
                        from all industries. <br />
                        Annual financial statements and tax returns.{" "}
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 col-12 ml-2">
              <div className="card-content">
                <div className="card-body">
                  {" "}
                  <i
                    className="fas fa-file-invoice fa-5x"
                    style={{ color: "#c7d2d6" }}
                  ></i>
                  <div className="card-title"> Employees & Payroll </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        Labor and wages - complete administration of labor and
                        wages and self-employed persons. Preparation of
                        payrolls, insurance declarations and taxes.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="card col-md-3 col-12">
              <div className="card-content">
                <div className="card-body">
                  {" "}
                  <i
                    className="fas fa-euro-sign fa-5x"
                    style={{ color: "#c7d2d6" }}
                  ></i>
                  <div className="shadow"></div>
                  <div className="card-title">
                    {" "}
                    VAT & Administrative Services{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        VAT refunds from countries in the European Union.
                        Financial and tax consultations. Administrative
                        services.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card col-md-3 col-12 ml-2" id="shop">
              <div className="card-content">
                <div className="card-body">
                  {" "}
                  <i
                    className="fas fa-store-alt fa-5x"
                    style={{ color: "#c7d2d6" }}
                  ></i>
                  <div className="card-title"> Retail companies </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Retailers are facing more challenges than ever to stay
                        competitive while maintaining strong profitability. Out
                        team has extensive experience in the marketplace to
                        guide you through any operational, financial and
                        management challenges.{" "}
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 col-12 ml-2" id="factory">
              <div className="card-content">
                <div className="card-body">
                  {" "}
                  <i
                    className="fas fa-industry fa-5x"
                    style={{ color: "#c7d2d6" }}
                  ></i>
                  <div className="card-title"> Manufacturing companies </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        If you are looking accounting service for your
                        manufacturing business, we are here to help. At
                        SVETOVIT61, we implement the finest accounting practices
                        to improve cost-effectiveness for our manufacturing
                        clients.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ft">
            <p className="chk">
              <small className="text-muted">Still not sure?</small>
            </p>
            <div className="btn btn-primary">
              <Link
                to="/en/contacts"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Services;
