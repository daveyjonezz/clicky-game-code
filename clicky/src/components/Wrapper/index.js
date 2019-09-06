import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="container body-container">{props.children}</div>;
}

export default Wrapper;
