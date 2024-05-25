import React, { useState } from "react";
import './contactUs.css';
import Button from '@mui/material/Button';
import emailjs from "@emailjs/browser"



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
  const fullName = contact.fullName;
  const email = contact.email;
  const message = contact.message;
  emailjs.init({publicKey : "_mSA0duO6o1tB1-ou" ,  })
  const [status , setStatus] = useState("")
 

  async function sendMessage(){
    const template_id ="template_3jcotrn" 
    sendFeedback(template_id , { message_html : message , from_name : fullName , from_email : email})
       
  }
  
   function sendFeedback (templateId, variables) {
   emailjs.send(
      'service_ovo4lmo',
      templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
      setStatus('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  
  }
 
  

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
          <h2>CONTACT NO</h2>
          <p>+91 1234567890</p>
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
            <input autoComplete="off" spellCheck ={false} onChange={handleContactChange} id="fullName" name="fullName" value={contact.fullName}  />
          </>
          <>
            <label  htmlFor="email">Email</label>
            <input autoComplete="off" spellCheck ={false} onChange={handleContactChange} id="email" name="email" value={contact.email} />
          </>
          <>
            <label  htmlFor="message">Type your message here</label>
            <textarea autoComplete="off" spellCheck ={false} onChange={handleContactChange} rows={3} name="message" id="message" value={contact.message}  />
          </>
        </div>
        <div className="submitBox">
          <Button onClick={sendMessage} variant="contained">SUBMIT</Button>
        </div>
        <p className="status">{status}</p>
      </div>

    </div>
)
}
