import React, { Component } from "react";
import Form from "./Form";
import MapContainer from "./Maps";
import Nav from "./Nav";
import Footer from "./Footer";

class Contacts extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Nav />

        <MapContainer />
        <hr />
        <div
          className="row "
          style={{
            marginLeft: "0",
            marginRight: "0",
            marginBottom: "20px",
            // backgroundColor: "#9ba3a8",
          }}
        >
          <div
            className="col-12"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              color: "#fff",
              backgroundColor: "#00a7e1",
              paddingTop: "15px",
              boxShadow: "0px 2px 2px rgb(0 0 0 / 30%)",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                textShadow: " 1px 2px rgb(0 0 0 / 30%) ",
              }}
            >
              Contact Us
            </h3>
            <p
              style={{
                fontSize: "1.5em ",
                textAlign: "center",
                textShadow: " 1px 2px rgb(0 0 0 / 30%) ",
              }}
            >
              If we can assist you in any way with your tax, audit, review,
              payroll, bookkeeping <br />
              or other accounting needs, please contact us via this form or by
              telephone.
            </p>
          </div>

          <div
            className="col-sm my-auto"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <div
              className="widget no-box"
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h3 className="widget-title" style={{ color: "#999" }}>
                Click to Call or Google Direction
              </h3>

              <p>
                <a
                  href="tel:+359889460604"
                  style={{
                    textDecoration: "none",
                    color: "#999",
                    fontSize: "1.5em",
                  }}
                >
                  <i className="fas fa-phone"></i> +359 889 460 604
                </a>
              </p>
              <p>
                <a
                  href="tel:+359894310130"
                  style={{
                    textDecoration: "none",
                    color: "#999",
                    fontSize: "1.5em",
                  }}
                >
                  <i className="fas fa-phone "></i> +359 894 310 130
                </a>
              </p>
              <p>
                <a
                  href="mailto:derbidv@gmail.com"
                  style={{
                    textDecoration: "none",
                    color: "#999",
                    fontSize: "1.5em",
                  }}
                >
                  <i className="far fa-envelope "></i> derbidv@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="http://www.google.com/maps/place/42.054747,25.591243"
                  style={{
                    textDecoration: "none",
                    color: "#999",
                    fontSize: "1.5em",
                  }}
                >
                  <i className="fas fa-map-marker-alt "></i> ul."1-vi May" 46-3
                  , 6400 Dimitrovgrad
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm">
            {" "}
            <Form />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contacts;
