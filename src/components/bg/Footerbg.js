import React from "react";
import { Link } from "react-router-dom";

import "./Footerbg.css";

const Footerbg = () => {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-sm ">
              <div className="widget subscribe no-box justify-content-center">
                <h5 className="widget-title">СВЕТОВИТ61 ООД</h5>
                <p>
                  Нашият всеотдаен и изключително опитен счетоводен екип от
                  професионалистите познава в детайли счетоводните практики в
                  България. <br />
                  Това гарантира, че сме в състояние да се погрижим за
                  цялостните счетоводни нужди на нашите клиенти безпроблемно,
                  точно и бързо.
                </p>
              </div>
            </div>

            <div className="col-sm">
              <div className="widget no-box">
                <h5 className="widget-title">ВРЪЗКИ</h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <Link to="/services">&nbsp;Услуги</Link>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <Link to="/contacts">&nbsp;Контакти</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <br />
            <br />

            <div className="col-sm">
              <div
                className="widget no-box"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h5 className="widget-title">Свържете се с нас</h5>

                <p>
                  <a
                    href="tel:+359889460604"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <i className="fas fa-phone"></i> +359 889 460 604
                  </a>
                </p>
                <p>
                  <a
                    href="tel:++359894310130"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <i className="fas fa-phone"></i> +359 894 310 130
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:derbidv@gmail.com"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <i className="far fa-envelope"></i> derbidv@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="http://www.google.com/maps/place/42.054747,25.591243"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <i className="fas fa-map-marker-alt"></i> ул."1-ви Май" 46-3
                    , <br />
                    6400 Димитровград
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright SVETOVIT61 LTD © 2021. All rights reserved.</p>
                <p style={{ fontSize: "0.5em" }}>H.H./maddealer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerbg;
