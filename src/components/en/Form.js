import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Submit",
    err: "",
    n1: 0,
    n2: 0,
    correctSum: "",
    ans: "",
  });
  const arr1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ];
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [errorsState, setErrorsState] = useState("");
  const reg = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const capcha = () => {
    let n11 = arr1[Math.floor(Math.random() * arr1.length)];
    let n21 = arr2[Math.floor(Math.random() * arr2.length)];

    let sum = n11 + n21;
    return {
      n11,
      n21,
      sum,
    };
  };

  useEffect(() => {
    let { n11, n21, sum } = capcha();
    setData({
      ...data,
      n1: n11,
      n2: n21,
      correctSum: sum.toString(),
    });
  }, []);

  const checkErrors = () => {
    const { name, email, message } = data;

    if (!reg.test(email)) {
      setErrorsState("Email is not valid!");
      return false;
    }
    if (!name) {
      setErrorsState("Name is required!");
      return false;
    }
    if (!message) {
      setErrorsState("Message is required!");
      return false;
    }
    if (data.ans !== data.correctSum) {
      setErrorsState("Sum is not correct!");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      buttonText: "Sending...",
    });
    if (checkErrors()) {
      axios
        .post("/api/sendmail", data)
        .then((res) => {
          if (res.data.result !== "success") {
            setData({
              ...data,
              buttonText: "Failed to send",
              sent: false,
              err: "Something went wrong, try again.",
            });

            setTimeout(() => {
              resetForm();
            }, 1000);
          } else {
            setData({
              ...data,
              sent: true,
              buttonText: "Sent",
              err: "success",
            });
            setTimeout(() => {
              resetForm();
            }, 1000);
          }
        })
        .catch((err) => {
          setData({
            ...data,
            buttonText: "Failed to send",
            err: "Failed to send,check connection.",
          });

          setTimeout(() => {
            resetForm();
          }, 1000);
        });
    }
  };

  const resetForm = () => {
    let { n11, n21, sum } = capcha();
    setData({
      ...data,
      name: "",
      email: "",
      message: "",
      sent: false,
      buttonText: "Submit",
      err: "",
      n1: n11,
      n2: n21,
      correctSum: sum.toString(),
      ans: 0,
    });

    setErrorsState("");
  };

  return (
    <>
      <div className="signup-form">
        <form method="post">
          <h2>Message</h2>
          <p className="hint-text">Contact us.</p>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your email"
              className="form-control"
              required="required"
              maxLength="100"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your name"
              className="form-control"
              aria-autocomplete="list"
              maxLength="100"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="message"
              value={data.message}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your message"
              className="form-control"
              aria-autocomplete="list"
              maxLength="200"
            />
          </div>
          <div className="row">
            <label style={{ padding: "10px" }}>
              Enter the sum: {data.n1} + {data.n2} =
            </label>
            <input
              type="text"
              name="ans"
              value={data.ans}
              onChange={(e) => handleChange(e)}
              className="form-control"
              aria-autocomplete="list"
              maxLength="5"
              style={{ width: "70px" }}
            />
          </div>
          {errorsState ? (
            <div className="alert alert-danger ">{errorsState}</div>
          ) : (
            <div className="alert alert-light"></div>
          )}
          {data.err ? (
            <div className="alert alert-danger ">{data.err}</div>
          ) : (
            <div className="alert alert-light"></div>
          )}
          <div className="form-group">
            <button
              type="submit"
              onClick={(e) => formSubmit(e)}
              className="btn btn-success btn-lg btn-block"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
