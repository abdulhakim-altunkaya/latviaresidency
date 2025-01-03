import React from 'react';
import "../styles/bottomContactForm.css";
import { useState } from 'react';
import axios from "axios";

function BottomContactForm() {
  const [inputMessage, setInputMessage] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [resultArea, setResultArea] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const messageObject = {
        inputName,
        inputMail,
        inputMessage
      };
      console.log(messageObject);
      const res = await axios.post("http://localhost:5000/api/save-message", messageObject);
      setResultArea(res.data.message);
    } catch (error) {
      if (error.response) {
        setResultArea(error.response.data.message);
        console.log(error.message);
      } else {
        setResultArea("Mesaj gönderilirken hata oluştu. Lütfen doğrudan mail gönderiniz.");
        console.log(error.message);
      }
    } 
  };
  
  
  return (
    <div>
        <form className='contactFormArea' onSubmit={handleSubmit}>

          <div className='formUpperInputs'>
              <input className='formInputs' type='text' placeholder='İsim-soyisim'
                value={inputName} onChange={(e) => setInputName(e.target.value)} required/> 
              <input className='formInputs' type='text' placeholder='E-mail'
                value={inputMail} onChange={(e) => setInputMail(e.target.value)} required/>
          </div>

          <div className='formTextArea'>
              <textarea cols="30" rows="10" placeholder="Mesajınız"
              value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} required></textarea>
          </div>

          <div className='formButtonArea'><button type="submit" className='button1111'>Gönder</button></div>
          <div>{resultArea}</div>
        </form>
    </div>
  )
}

export default BottomContactForm;