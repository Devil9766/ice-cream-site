import React, { useState } from "react";
import './flavours.css'
import Button from '@mui/material/Button';
import flavours from "./flavourList";
import candyList from "./Candylist";



export default function Flavours(props){
  const [ handle , setHandle]  = useState(false)
  function handleIceCreamToggle(value){
    setHandle(value)
  }
  
  function iceContainer(item){
    return(
     <div className="flavourItems">
       <div className="itemList">
         <img className="flavourImage" src="/images/demo.jpg" alt="ice cream flavours" />
         <div className="flavourInfo">
           <p>Name : {item.name}</p>
           <p>Rate per 100gm : {item.price100GM}</p>
           <p>Rate per 1kg : {item.price1kg} </p>
           <p>Info : {item.info}</p>
         </div>
       </div>
     </div>
   )
   }
   function kulContainer(item){
     return(
       <div className="flavourItems">
         <div className="itemList">
           <img className="flavourImage" src="/images/demo.jpg" alt="ice cream flavours" />
           <div className="flavourInfo">
             <p>Name : {item.name}</p>
             <p>Rate: {item.price} </p>
             <p>Info : {item.info}</p>
           </div>
         </div>
       </div>
     )
     }
  return(
    <div id="flavours">
      <h1>What we offer...</h1>
      <div className="flavourContainer">
        <div className="buttonOption">
          <Button style={{color : "white"}} onClick={()=>{
            handleIceCreamToggle(false)
          }} variant="contained" size="medium">
            Kulfi Candy
          </Button>
          <Button style={{color : "white"}} onClick={()=>{
            handleIceCreamToggle(true)
          }} variant="contained" size="medium">
            Kulfi Ice cream
          </Button>
        </div>
        <div className="flavourChoices">
           { handle ? flavours.map(iceContainer) : candyList.map(kulContainer)}
        </div>  
      </div>
    </div>
  )
}