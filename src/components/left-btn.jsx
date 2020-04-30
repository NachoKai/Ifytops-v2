import React from "react";

const LeftBtn = (props) => (
  <a className="nav-links" href={props.link} id="inicio-btn">
    <i className={props.icon}></i>
    <span>{props.title}</span>
  </a>
);

export default LeftBtn;
