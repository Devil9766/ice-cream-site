import React from "react";
import Anchor from "./anchor";
import './header.css';

function Header (){
  return(
    <header>
      <a href="/" id="webName">
        <img className="web-Image" src="/images/peacock.png" alt="peacock image" />
      </a>
      <Anchor />
      
    </header>
  ) 
}

export default Header ;