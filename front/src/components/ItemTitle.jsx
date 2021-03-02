import React from "react";

const ItemTitle = ({ title, description }) => {
  return (
    <div className="info_container">
      <p className="text-center">
        {title}
      </p>
    </div>
  );
};

export default ItemTitle;
