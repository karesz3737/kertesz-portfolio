import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal";
import DTobj from "../data/data";

const Info = ({ id, type }) => {
  const item = DTobj.find((i) => i.id === id);
  const [modalShow, setModalShow] = useState(false);
  const onclose = () => setModalShow(false);
  return (
    <div className={type === "mobile" ? "info_row" : "info_row_web"}>
      <a onClick={() => setModalShow(true)}>
        <i className="fas fa-info-circle icon solid fa-2x  icon-project"></i>
      </a>
      <Link to={`/${id}`}>
        <i className="far fa-images solid fa-2x icon-project"></i>
      </Link>
      <a href={`${item.gitHub}`}>
        <i className="fab fa-github-square solid fa-2x icon-project"></i>
      </a>
      <span style={{ display: "none" }}>
        <ProjectModal show={modalShow} id={id} onclose={onclose} />
      </span>
    </div>
  );
};

export default Info;
