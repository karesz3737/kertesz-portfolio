import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import ReCaptchaError from "../components/reCaptchaError";
import validate from "../data/validate";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, Setmessage] = useState("");
  const [error, setErreor] = useState(null);
  const [token, SetToken] = useState("");
  const [showError, setShowError] = useState(false);
  const reRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const subREf = useRef();
  const nameRef = useRef();
  const AxioAsync = async (v) => {
    const response = await axios.post("/api", v);
    console.log(response);
  };
  const reChange = (value) => {
    SetToken(value);
  };
  const setRefBack = useCallback(() => {
    setEmail("");
    setName("");
    setSubject("");
    Setmessage("");
  }, [setEmail, setName, setSubject, Setmessage]);
  useEffect(() => {}, [setRefBack]);
  const onSubmit = async (e) => {
    e.preventDefault();

    const tokenR = token && token;
    const DataObj = {
      name,
      email,
      subject,
      text,
      tokenR,
    };
    const errorItem = await validate(DataObj);
    if (errorItem) {
      setErreor(errorItem);
      setShowError(true);
      return;
    } else {
      if (token) {
        setErreor(null);
        setShowError(true);
        AxioAsync(DataObj);
      }
    }
    setRefBack();
    reRef.current.reset();
  };

  return (
    <div
      className="reg_background"
      style={{
        float: "left",
      }}
    >
      <div className="container-fluid">
        <div className="contact-form">
          <section id="four">
            <div className="container">
              <span className="contact-text">
                <h3 className="text-center">Contact Me</h3>
                <p>
                  If you would like to chat about a project or are interested in
                  hiring me, please send me a message.
                </p>
              </span>
              <form id="form" onSubmit={onSubmit}>
                <div className="row gtr-uniform">
                  <div className="col-6 col-12-xsmall">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      ref={nameRef}
                      className="form-control w-100"
                    />
                  </div>
                  <div className="col-6 col-12-xsmall">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      ref={emailRef}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={subject}
                      ref={subREf}
                      onChange={(e) => setSubject(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="6"
                      value={text}
                      ref={textRef}
                      onChange={(e) => Setmessage(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <ul className="actions">
                      <li>
                        <input
                          type="submit"
                          className="primary"
                          value="Send Message"
                          onClick={() => onSubmit}
                        />
                      </li>
                      <li onClick={() => setRefBack()}>
                        <input type="reset" value="Reset Form" />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div className="g-recaptcha text-left">
          <div className="text-right my-2">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_GOOGLE_FRONT_RECAPCHA}
              size="normal"
              ref={reRef}
              onChange={reChange}
              // badge="bottomleft"
            />
          </div>
        </div>
        <ReCaptchaError
          title={error}
          show={showError}
          onHide={() => setShowError(false)}
        />
      </div>
    </div>
  );
};

export default Contact;
