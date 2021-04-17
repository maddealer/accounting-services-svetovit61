import React, { Component } from "react";
import Formbg from "./Formbg";
import MapContainer from "./Maps";
import Navbg from "./Navbg";
import Footerbg from "./Footerbg";

class Contacts extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Navbg />

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
              Свържете се с нас
            </h3>
            <p
              style={{
                fontSize: "1.2em ",
                textAlign: "center",
                textShadow: " 1px 2px rgb(0 0 0 / 30%) ",
              }}
            >
              Ако можем да Ви помогнем по какъвто и да е начин с Вашите
              счетоводство, данъци, одит, ведомости, <br />
              или каквито и да са други счетоводни нужди, моля свържете се с нас
              чрез тази форма или по телефон.
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
              <h3
                className="widget-title"
                style={{ color: "#999", fontSize: "1.2em" }}
              >
                Натиснете за да позвъните или адресът за локация
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
                  <i className="fas fa-map-marker-alt "></i> ул."1-ви Май" 46-3
                  , 6400 Димитровград
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm">
            {" "}
            <Formbg />
          </div>
        </div>

        <Footerbg />
      </div>
    );
  }
}

export default Contacts;
