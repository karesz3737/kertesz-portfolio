import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const FormModal = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, SetText] = useState("");
  const [subject, setSubject] = useState("");
  const formRef = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    const DataObj = {
      name,
      email,
      subject,
      text,
    };
    setEmail("");
    SetText("");
    setName("");
    setSubject("");
    props.onHide();
  };

  return (
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
      <Modal.Body>
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
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
