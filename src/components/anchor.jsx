import React from "react";
import './anchor.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Button from '@mui/material/Button';


function Anchor(props){
  return <>
  <div className="nav-bar">
        <div className="options">
          <Button variant="text"><a href = "#home">Home</a></Button>
          <Button variant="text"><a href = "#flavours">Flavours</a></Button>
          <Button variant="text"><a href = "/locations">Locations</a></Button>
          <Button variant="text"><a href = "/about">About</a></Button>
        </div>
        <Button variant="contained" color="success">
          <a className="contactName" href = "/contact"> Contact Us  <FaArrowRightLong /></a>
        </Button>
      </div>
  </>
}

export default Anchor;