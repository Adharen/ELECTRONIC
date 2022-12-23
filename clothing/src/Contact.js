import React, { useState } from 'react'
import './Contact.css'
function Contact() { 
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [phone,setphone]=useState();
  const[message,setmessage]=useState("");

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("http://127.0.0.1:4000/", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         phone:phone,
  //         message: message
  //       }),
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setname("");
  //       setemail("");
  //       setmessage("User created successfully");
  //     } else {
  //       setmessage("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  return (
    <>
   <div className="contact-section">

<h1>Contact Us</h1>
<div className="border"></div>
<form className="contact-form" action="index.html" method="post">
  <input type="text" value={name}   onChange={(e) => setname(e.target.value)} className="contact-form-text" placeholder="Your name"/>
  <input type="email" value={email}   onChange={(e) => setemail(e.target.value)} className="contact-form-text" placeholder="Your email"/>
  <input type="text" value={phone}   onChange={(e) => setphone(e.target.value)} className="contact-form-text" placeholder="Your phone"/>
  <textarea className="contact-form-text" value={message}  onChange={(e) => setmessage(e.target.value)}placeholder="Your message"></textarea>
  <input type="submit" className="contact-form-btn" value="Send" />
</form>
</div>   
</>
  )
}

export default Contact