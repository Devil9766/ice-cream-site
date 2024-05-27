import React from "react";
import './anchor.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Button from '@mui/material/Button';


function Anchor(props){
  return <>
  <div className="nav-bar">
        <div className="options">
          <a href = "#home">Home</a>
          <a href = "#flavours">Flavours</a>
          <a href = "#locations">Locations</a>
          <a href = "#about">About</a>
        </div>
          <a href = "#contact"> Contact Us </a>
      </div>
  </>
}

export default Anchor;