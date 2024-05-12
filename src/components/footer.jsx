import React, { useState } from "react";
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { SiThunderbird } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";





export default function Footer(props){
  const year = new Date().getFullYear();
  const t1 = new Date().toLocaleTimeString();
  const [time , setTime] = useState(t1);

  function timer(){
    const t2 = new Date().toLocaleTimeString();
    setTime(t2);
  }
  setInterval( timer,1000);
  return(
    <footer>
      <div className="footerContainer">
        <hr />
        <div className="anchorLinks">
          <h2 className="largeName"><SiThunderbird /> Vrindavan Kulfi Ice-Cream</h2>
          <div className="mainLinks">
            <h2>Main Links</h2>
            <ul className="links">
              <li><a href="#home">Home</a></li>
              <li><a href="#flavours">Flavours</a></li>
              <li><a href="#locations">Locations</a></li>
            </ul>
          </div>
          <div className="businessInfo">
            <h2>Other Links</h2>
            <ul className="links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="socialsContainer">
          <div className="line-1"></div>
          <ul className="links">
            <li><a href="https://www.facebook.com"><FaFacebook/></a></li>
          </ul>
          <div className="line-2"></div>
        </div>
        <div className="endFooter">
          <p>{time} IST</p>
          <p><FaRegCopyright />{year} Vrindavan Kulfi Ice-Cream. All Rights Reserved </p> 
        </div>
      </div>
    </footer>
  )
}