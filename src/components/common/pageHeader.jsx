import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header-container">
      <hr className="header-left-line"></hr>
      <h2 className="page-header-heading">{title}</h2>
      <hr className="header-right-line"></hr>
    </div>
  );
};

export default PageHeader;
