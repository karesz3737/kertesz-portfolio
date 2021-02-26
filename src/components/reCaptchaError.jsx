import React from "react";
import { Modal, Button } from "react-bootstrap";

const ReCaptchaError = (props) => {
  return (
    <div>
      <Modal
        show={props.show}
        size="md"
        className="modal"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-90w"
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`w-100 ${
              props.title !== null ? "modal_title_warning" : "modal_title"
            }`}
          >
            <p className="text-center my-auto text-uppercase">
              {props.title === null ? "Your Email Was Sent!" : "ERROR"}
            </p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <p
            className={`text-center text-uppercase fs-4 ${
              props.title !== null ? "text-warning" : "text-dark"
            }`}
          >
           
          </p> */}
          {props.title ? (
            Object.values(props.title)
              .filter((i) => i !== null)
              .map((err, indx) => (
                <p
                  key={indx}
                  className="text-warning fs-5 text-center text-uppercase"
                >
                  {err}
                </p>
              ))
          ) : (
            <p className="text-center text-uppercase fs-5">Thank You!</p>
          )}
        </Modal.Body>
        <Modal.Footer
          className={`${
            props.title !== null ? "modal_title_warning" : "modal_title"
          }`}
        >
          <Button
            className={
              props.title === null ? "btn btn-success" : "btn btn-danger"
            }
            onClick={props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReCaptchaError;
