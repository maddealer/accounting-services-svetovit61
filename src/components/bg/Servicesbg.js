import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footerbg from "./Footerbg";
import Navbg from "./Navbg";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="container">
        <Navbg />
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
          <div className="hd">Защо хората вярват в нас</div>
          <p>
            <small className="text-muted">
              Нашият всеотдаен и изключително опитен счетоводен екип от
              професионалистите познава в детайли счетоводните практики в
              България. <br />
              Това гарантира, че сме в състояние да се погрижим за цялостните
              счетоводни нужди на нашите клиенти безпроблемно, точно и бързо.
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
                    Транспортни и логистични компании{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        Пълно обслужване пред Изпълнителна агенция „Автомобилна
                        Администрация " (ДАИ): Изкарване на лиценз , финасова
                        стабилност , промяна на обстоятелствата.
                        <br />С дългогодишния ни опит ние ще ви помогнем да се
                        справите по-добре.
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
                  <div className="card-title">
                    {" "}
                    Счетоводни и данъчни услуги{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Цялостни счетоводни и данъчни услуги за компании от
                        всички отрасли. <br />
                        Годишен финансов отчет и данъчни декларации.
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
                  <div className="card-title"> Служители и ТРЗ </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        Труд и заплати - пълно администриране на труд и работна
                        заплата, счетоводно обслужване на самонаети лица.
                        Изготвяне на ведомости за заплати, декларации и данъци.
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
                    ДДС и Административни услуги{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        Възстановяване на ДДС от страни в Европейския съюз.
                        Финансови и данъчни консултации. Регистрация на фирми.
                        Административни услуги.
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
                  <div className="card-title"> Фирми за търговия </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Търговците са изправени пред повече предизвикателства от
                        всякога да останат конкурентни, като същевременно се
                        поддържа силна рентабилност. Нашият екип има богат опит
                        на пазара, за да ви преведе през каквито и да е
                        оперативни, финансови и управленски предизвикателства.{" "}
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
                  <div className="card-title"> Производствени компании </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        Ако търсите счетоводно обслужване за вашият бизнес от
                        сферата производството , ние сме тук, за да помогнем. В
                        СВЕТОВИТ61 ние прилагаме най - добрите счетоводни
                        практики за подобряване на ефективността на разходите за
                        нашите клиенти за производство.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ft">
            <p className="chk">
              <small className="text-muted">Още се чудите?</small>
            </p>
            <div className="btn btn-primary">
              <Link
                to="/en/contacts"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Свържете се с нас
              </Link>
            </div>
          </div>
        </div>

        <Footerbg />
      </div>
    );
  }
}

export default Services;
