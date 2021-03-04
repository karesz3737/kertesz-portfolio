import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import validate from "../data/validate";
import ReCaptchaError from "../components/reCaptchaError";

const FormModal = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, SetText] = useState("");
  const [subject, setSubject] = useState("");
  const [token, SetToken] = useState("");
  const [error, setErreor] = useState(null);
  const [showError, setShowError] = useState(false);

  const AxioAsync = async (v) => {
    const response = await axios.post("/api", v);
  };
  const reChange = (value) => {
    SetToken(value);
  };
  const formRef = useRef();
  const formSubmit = async (e) => {
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
      props.onHide();
      setShowError(true);
      return;
    } else {
      if (token) {
        setErreor(null);
        setShowError(true);
        AxioAsync(DataObj);
      }
    }
    setEmail("");
    SetText("");
    setName("");
    setSubject("");
    props.onHide();
    formRef.current.reset();
  };

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        dialogClassName="modal-90w"
        className="modal fade"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal_title w-100"
          >
            Your Email
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2018/01/13/04/40/brick-wall-3079574_960_720.jpg")`,
            backgroundPosition: "center bottom",
            backgroundAttachment: "fixed",
            // height: "100vh",
            backgroundSize: " contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form onSubmit={formSubmit} ref={formRef}>
            <div className="form-floating my-2">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-floating my-2">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-floating my-2">
              <input
                type="text"
                placeholder="Subject"
                className="form-control"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-floating my-2">
              <input
                type="textarea"
                placeholder="Your Message"
                className="form-control"
                name="text"
                value={text}
                onChange={(e) => SetText(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btn btn-warning">
            Close
          </Button>
          <Button onClick={(e) => formSubmit(e)} className="btn btn-success">
            Send
          </Button>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_GOOGLE_FRONT_RECAPCHA}
            size="normal"
            ref={formRef}
            onChange={reChange}
            // badge="bottomleft"
          />
        </Modal.Footer>
      </Modal>
      <ReCaptchaError
        title={error}
        show={showError}
        onHide={() => setShowError(false)}
      />
    </div>
  );
};

export default FormModal;
