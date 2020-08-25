import React, { Component } from "react";
import "./ScrollIcon.css";

let ScrollIcon = (props) => {
  return (
    <div className="icon-wrapper">
      <img className="down-icon" src={props.icon} alt="" />
    </div>
  );
};

export default ScrollIcon;

