import React from "react";
// import Link from "next/link";
// import { Button } from "react-bootstrap";

const InvestorGuideCard = ({ data, handleModal, handleShow }) => {
  const { title, text, iconName, url, modal } = data;
  return (
    <div className="icon_box_2 text-center align-self-stretch">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>
      <div f={"#iddd"} id="iddd" onClick={e => handleShow(modal)} className="common_btn red_bg text-white">
        <span>Download</span>
      </div>
    </div>
  );
};

export default InvestorGuideCard;
