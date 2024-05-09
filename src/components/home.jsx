import React from "react";
import './Home.css';


export default function Home(){
  return(
    <div id="home">
      <div className="homeInfo">
        <p className="text1">#vrindavankulfiicecream</p>
        <p className="text2">Serving sweetness since 40 years...</p>
        <p className="text3">Indulge in moments of bliss with our delectable range of ice creams! From classic flavors to innovative delights, we have something to satisfy every craving. Dive into a world of creamy goodness and treat yourself to a scoop of happiness today! </p>
      </div>
      <div className="homeImage">
        <img src="/images/homeImage.png" alt="" />
      </div>
    </div>
  )
}

