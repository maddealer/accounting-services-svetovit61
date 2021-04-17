import React, { Component } from "react";
import Navbg from "./Navbg";
import { HashLink as Link } from "react-router-hash-link";
import "./Home.css";
import Footerbg from "./Footerbg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navbg />

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
                    ! Добре дошли на сайта на
                    <span
                      style={{
                        color: "#00a7e1",
                        textShadow: "1px 2px #7a7a7a",
                      }}
                    >
                      {" "}
                      СВЕТОВИТ61
                    </span>{" "}
                    СЧЕТОВОДНИ УСЛУГИ!
                  </h1>
                  <p>
                    СПРЕТЕ ДА СЕ ПРИТЕСНЯВАТЕ ЗА СЧЕТОВОДСТВОТО СИ. НИЕ ЩЕ СЕ
                    ПОГРИЖИМ ЗА ТОВА, ЗА ДА МОЖЕ ВИЕ ДА РАЗВИВАТЕ ВАШИЯ БИЗНЕС
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
                  <h1 className="carousel2">СЧЕТОВОДСТВО НА МАЛКИЯ БИЗНЕС</h1>
                  <p>
                    ЗА ДА РЪКОВОДИТЕ УСПЕШЕН БИЗНЕС, ТРЯБВА РАЗУМНО ДА
                    УПРАВЛЯВАТЕ ВАШИТЕ ФИНАНСИ. С УВЕРЕНОСТ МОЖЕ ДА ПОВЕРИТЕ
                    ТАЗИ РАБОТА НА КВАЛИФИЦИРАНА ФИРМА, КАТО <br />
                    СВЕТОВИТ61 ООД .
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
                    ЗАЩО ДА ДЕЛЕГИРАТЕ СЧЕТОВОДСТВОТО СИ НА ВЪНШНА ФИРМА?
                  </h1>
                  <p>
                    ПО-ДОБРЕ ЩЕ ИЗПОЛЗВАТЕ ВАШЕТО ВРЕМЕ. <br />
                    НАМАЛЯВАНЕ НА РАЗХОДИТЕ. <br />
                    СЧЕТОВОДИТЕЛИТЕ РАЗБИРАТ ОТ СЧЕТОВОДСТВО. <br />
                    РАЗНООБРАЗНИ ОПЦИИ.
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
              <h3>Транспортни и логистични компании</h3>
              <p>
                Ние сме специализирани в счетоводството на транспортни фирми.
                Тези компании винаги е трябвало да се борят с несигурност в
                оперативните разходи. <br />С дългогодишния ни опит, ние ще ви
                помогнем да се справите по-добре.
              </p>
              <p>
                <button className="btn btn-primary">
                  <Link
                    className=""
                    to="/services#truck"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    детайли &raquo;
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
              <h3>Фирми за търговия</h3>
              <p>
                Търговците са изправени пред повече предизвикателства от всякога
                да останат конкурентни, като същевременно се поддържа силна
                рентабилност. Нашият екип има богат опит на пазара, за да ви
                преведе през каквито и да е оперативни, финансови и управленски
                предизвикателства.
              </p>
              <p>
                <button className="btn btn-primary">
                  <Link
                    className=""
                    to="/services#shop"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    детайли &raquo;
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
              <h3>Производствени компании</h3>
              <p>
                Ако търсите счетоводно обслужване за вашият бизнес от сферата
                производството , ние сме тук, за да помогнем. В SVETOVIT61 ние
                прилагаме най - добрите счетоводни практики за подобряване на
                ефективността на разходите за нашите клиенти за производство.
              </p>
              <p>
                <button className="btn btn-primary">
                  <Link
                    className=""
                    to="/services#factory"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    детайли &raquo;
                  </Link>
                </button>
              </p>
            </div>
          </div>
        </div>
        <Footerbg />
      </div>
    );
  }
}

export default Home;
