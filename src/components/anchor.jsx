import React from "react";
import './anchor.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Button from '@mui/material/Button';


function Anchor(props){
  return <>
  <div className="nav-bar">
        <div className="options">
        <Button variant="outlined"><a href = "/">Home</a></Button>
          <Button variant="outlined"><a href = "/flavours">Flavours</a></Button>
          <Button variant="outlined"><a href = "/feedback">Feedback</a></Button>
          <Button variant="outlined"><a style={{color : "black"}} href = "/about">About</a></Button>
        </div>
        <div className="contact">
          <Button variant="contained" color="success">
            <a className="contactName" href = "/contact"> Contact Us  <FaArrowRightLong /></a>
          </Button>
        </div>
      </div>
  </>
}

export default Anchor;