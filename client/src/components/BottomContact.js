import React from 'react';
import "../styles/bottomContact.css"
import Footer from './Footer'; 
import BottomContactForm from './BottomContactForm';

function BottomContact() {
  return (
    <div>
    <div className='bottomContact'>
      <div>
        <div className='contactTitleArea'>
          <span className='bottomContactSVG'> <img src='/svg_book.svg' alt='About Icon'/></span>
          <span className='titleSpan2'>HAKKIMIZDA</span>
        </div>
        <div className='bottomAboutText'>
          <p>Riga Danışmanlık Letonya'da yatırım yoluyla oturum alma ve kurumsal hizmetler alanında faaliyet
            gösteren bir danışmanlık firmasıdır. </p>
          <p>Firmamız, alanında tecrübeli uzmanlarımız, tercümanlarımız, takipçilerimiz, avukatlarımız ve muhasebecilerimiz 
            tarafından 2025 yılında kurulmuştur. </p>
          <p>Amacımız müşterilerimize en güzel hizmeti sunmak, yapacakları yatırımın değerini korumasını sağlamak, bunu yaparken
            de Letonya oturum kartı imkanı sunmaktır.</p>
          <p>Bu çerçevede, müşterilerimizi en iyi şekilde ağırlamaya, kapsamlı bilgi sunmaya, başta fiyatlarımız olmak üzere
            her noktada oldukça şeffaf olmaya çalışıyoruz. </p>
          <p>Çalışmalarımızda, müşterilerimizin mahremiyetine özel önem veriyor, yatırımcılarımızın kişisel bilgileri ile 
            yatırımlarına ilişkin bilgileri en iyi şekilde koruyoruz. </p>
        </div>
      </div>
      
      <div>
        <div className='contactTitleArea'>
          <span className='bottomContactSVG2'> <img src='/svg_whatsapp.svg' alt='Whatsapp Icon'/></span>
          <span className='titleSpan4'>Whatsapp: </span>
          <span className='titleSpan3'>+371 22288999</span>
        </div>
      </div>

      <div>
        <div className='contactTitleArea'>
          <span className='bottomContactSVG2'> <img src='/svg_mail.svg' alt='Email Icon'/></span>
          <span className='titleSpan4'>E-mail: </span>
          <span className='titleSpan3'>info@letonyaoturum.com</span>
        </div>
      </div>

      <div>
        <div className='contactTitleArea'>
          <span className='bottomContactSVG2'> <img src='/svg_form.svg' alt='Form Icon'/></span>
          <span className='titleSpan4'>İletişim Formu</span>
        </div>
      </div>
      <div> <BottomContactForm /> </div>
      <div> <br/><br/><br/><br/> </div>
      
      </div>
      <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomContact