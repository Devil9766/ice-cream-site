import React, { useState } from "react";
import './contactUs.css'

import Button from '@mui/material/Button';



export default function ContactUs(props){

  const [contact , setContact] = useState({
    fullName :"",
    email : "",
    message : ""
  })
  function handleContactChange(event){
    const{name , value} = event.target;
    setContact((prevValue)=>{
      return{
        ...prevValue,
        [name] :value,
      }
    })
  }
  const[contactList , setContactList] = useState([])

  return(
    <div id="contact">
      <div className="contactBox1">
        <div className="upperBox">
          <h1>Let's Talk...</h1>
          <p>Want to know more about us and our product?</p>
        </div>
        <div className="middleBox">
          <h2>EMAIL</h2>
          <p>sjahjdhkcdjkj@ndjnd.com</p>
        </div>
        <div className="bottomBox">
          <h2>CHECK US OUT</h2>
          <a href="https://www.google.com">Instagram</a>
          <a href="https://www.google.com">Facebook</a>
        </div>
      </div>
      <div className="contactBox2">
        <div className="inputBox">
          <>
            <label  htmlFor="fullName">Full Name</label>
            <input spellCheck ={false} onChange={handleContactChange} id="fullName" name="fullName" value={contact.fullName}  />
          </>
          <>
            <label  htmlFor="email">Email</label>
            <input spellCheck ={false} onChange={handleContactChange} id="email" name="email" value={contact.email} />
          </>
          <>
            <label  htmlFor="message">Type your message here</label>
            <textarea spellCheck ={false} onChange={handleContactChange} rows={3} name="message" id="message" value={contact.message}  />
          </>
        </div>
        <div className="submitBox">
          <Button onClick={()=>{
            setContactList(contact)
          }} variant="contained">SUBMIT</Button>
        </div>
      </div>
    </div>
  )
}