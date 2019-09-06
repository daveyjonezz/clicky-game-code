import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-align">
            <img src="/images/Ice-King Header.png" id="icekingheader" alt="ice-king" data-toggle="popover" data-placement="left" data-content="Click on a character below to earn points, but don't click on any more than once or the Ice King will freeze you!" />
            <span id="press">Press me</span>
        </div>
        {props.children}
    </div>
  )
  }

export default Title;
