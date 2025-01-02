import React from 'react';
import "../styles/bottomContactForm.css";

function BottomContactForm() {
  return (
    <div>
        <form className='contactFormArea'>

          <div className='formUpperInputs'>
              <input className='formInputs'
                type='text' placeholder='İsim-soyisim'/> 
              <input className='formInputs'
                type='text' placeholder='E-mail'/>
          </div>

          <div className='formTextArea'>
              <textarea cols="30" rows="10" placeholder="Mesajınız"></textarea>

          </div>

          <div className='formButtonArea'><button className='button1111'>Gönder</button></div>

        </form>
    </div>
  )
}

export default BottomContactForm;