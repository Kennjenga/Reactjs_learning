import React from "react";
import memh from "../assets/mem.png";
import "./style.css";

const Header = () => {
  return (
    <div className="headr">
      <img src={memh} alt="meme head" className="mem-img"/>
      <h1 className="header-title">Meme Generator</h1>
      <h4 className="header-project">React-Course-Project 3</h4>
    </div>
  );
};

export default Header;
