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
  
  props.giveKey()
  function iceContainer(item){
    props.giveKey(item.id);
    return(
     <div className="flavourItems">
       {/* <div className="itemList">
         <img className="flavourImage" src="/images/demo.jpg" alt="ice cream flavours" />
         <div className="flavourInfo">
           <p>Name : {item.name}</p>
           <p>Rate per 100gm : {item.price100GM}</p>
           <p>Rate per 1kg : {item.price1kg} </p>
           <p>Info : {item.info}</p>
         </div>
       </div> */}
       <div className="main">
          <div className = "card">
            <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="image" />
            <div className="card-content">
              <h2>
                {item.name}
              </h2>
              <p>
                100gm : {item.price100GM}/-
                <br />
                1kg : {item.price1kg}/-
                <br />
                {item.info}
              </p>
            </div>
          </div>
        </div>
     </div>
   )}
   function kulContainer(item){
    props.giveKey(item.id);
     return(
       <div className="flavourItems">
         {/* <div className="itemList">
           <img className="flavourImage" src="/images/demo.jpg" alt="ice cream flavours" />
           <div className="flavourInfo">
             <p>Name : {item.name}</p>
             <p>Rate: {item.price} </p>
             <p>Info : {item.info}</p>
           </div>
         </div> */}
         <div className="main">
          <div className = "card">
            <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="image" />
            <div className="card-content">
              <h2>
                {item.name}
              </h2>
              <p>
                Qt-1 : {item.price}/-
                <br />
                {item.info}
              </p>
            </div>
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