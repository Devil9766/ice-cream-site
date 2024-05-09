import React from "react";
import Anchor from "./anchor";
import './header.css';

function Header (props){
  return(
    <header>
      <div id="webName">
        <img className="web-Image" src="/images/peacock.png" alt="peacock image" />
        <a className="siteName" href="/">VRINDAVAN KULFI ICE-CREAM</a>
      </div>
      <Anchor />
      
    </header>
  ) 
}

export default Header ;