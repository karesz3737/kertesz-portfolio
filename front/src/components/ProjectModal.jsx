import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import DTobj from "../data/data";

const ProjectModal = (props) => {
  const modalItem = DTobj.find((item) => item.id === props.id);

  return (
    <div className="project_modal my-0">
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        size="md"
        dialogClassName="modal-90w"
        className="modal fade"
      >
        <Modal.Header onClick={() => props.onclose()} closeButton>
          <Modal.Title className="modal_head w-100 text-center">
            <p className="modal_txt_title">{modalItem.title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <Container>
            <Row>
              <Col xs={8} className="d-flex flex-column">
                <p className="modal_txt_desc">{modalItem.description}</p>
                <br></br>
                <p className="modal_text_prj">
                  Tech used: {modalItem.technologies.join(", ")}
                </p>
              </Col>
              <Col xs={4}>
                <img src={modalItem.modalPhoto} alt="id" className="md_img" />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="modal_head w-100">
          <Button onClick={() => props.onclose()} className="ici">
            <i className="fas fa-times-circle fa-2x"></i>
          </Button>
          <Button className="ici">
            <a href={`${modalItem.gitHub}`} className="text-white">
              <i className=" fab fa-github-square fa-2x"></i>
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectModal;
