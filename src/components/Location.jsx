import React from "react";
import './Location.css';
import location from "./locations";



export default function Location(props){

  function handleLocation(item){
    return(
      <div className="cards">
        <div className="card">
              <img
                className="card__background"
                src="https://i.imgur.com/QYWAcXk.jpeg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{item.name}</h2>
                </div>
                <a href={item.location} className="card__button">Click Here</a>
              </div>
        </div>
      </div>
    )
  }

    return(
      <div id="locations">
        <h1>Locations</h1>
        <div className="locationLinksBox">
          {location.map(handleLocation)}
        </div>
      </div>
    )
}