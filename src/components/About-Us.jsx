import React from "react";
import './About-us.css'


export default function AboutUs(props){
  return(
    <div id="about">
      <div className="aboutUsImage">
        <img src="/images/background2.jpg" alt="" className="aboutImage1" />
      </div>
      <div className="aboutUsInfo">
        <h1>ABOUT US</h1>
        <div className="aboutUsP">
          <p>Welcome to our ice cream haven, where every scoop tells a story of 45 years of passion and dedication. Since our humble beginnings, we've been crafting frozen delights that capture the essence of joy and nostalgia.</p>
          <p> With each lick, you taste the expertise honed over decades, the commitment to quality ingredients, and the love that goes into every batch. From classic flavors that evoke childhood memories to innovative creations that push the boundaries of taste, our journey is etched into every creamy swirl. Join us as we continue to scoop happiness into cones and cups, sharing our tradition with each new generation of ice cream enthusiasts.</p>
        </div>
        <div className="aboutUsDesign1"></div>
      </div>
    </div>
  )
}