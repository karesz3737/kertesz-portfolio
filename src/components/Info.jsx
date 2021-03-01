import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal";

const Info = ({ id, type }) => {
  const [modalShow, setModalShow] = useState(false);
  const onclose = () => setModalShow(false);
  return (
    <div className={type === "mobile" ? "info_row" : "info_row_web"}>
      <Link onClick={() => setModalShow(true)}>
        <i class="fas fa-info-circle icon solid fa-2x  icon-project"></i>
      </Link>
      <Link to={`/${id}`}>
        <i className="far fa-images solid fa-2x icon-project"></i>
      </Link>
      <span style={{ display: "none" }}>
        <ProjectModal show={modalShow} id={id} onclose={onclose} />
      </span>
    </div>
  );
};

export default Info;
