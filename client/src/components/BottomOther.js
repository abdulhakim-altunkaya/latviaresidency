import React from 'react';
import {useNavigate} from "react-router-dom";
import Footer from './Footer'; 

function BottomOther() {
  
  const navigate = useNavigate();

  return (
    <div className='bottomHomeArea'>

      <div className='infoHeaderArea'>
        <h1>DİĞER HİZMETLERİMİZ</h1>
      </div>

      <div className='infoAreas'>
        <div className='infoSheets' id='companyBox'>
          <span className='infoSVG'><img src='/svg_translation.svg' alt='Translation icon'/></span>
          <span className='infoTitle'>Tercüme</span>
          <span className='infoText'>Alanında tecrübeli Letonya'da yaşayan tercümanlarımız 
            gerek yazılı gerek sözlü Letonca-Rusça-Türkçe-İngilizce dillerinde çeviri hizmetleri sunmaktadırlar.
            Letonya'daki tercümanlarımız aynı zamanda Konsolosluk ve Noterliklere de yeminli tercüman olarak
            hizmet etmektedirler. 
          </span>
        </div>
        <div className='infoSheets' id='companyBox2'>
          <span className='infoSVG'><img src='/svg_tourist.svg' alt='Tourist icon'/></span>
          <span className='infoTitle'>Kafile Rehberliği</span>
          <span className='infoText'>İşadamı ve bürokrat heyetlerimiz, turistik kafileler ve vatandaşlarımıza Letonya'ya 
            yapacakları seyahat boyunca tecrübeli ve dil bilen rehberlerimiz hizmet etmektedir. Rehberlerimiz Rusya,
            Belarus, Estonya, Litvanya, Baltıklar ve İskandinav ülkelerinde görev alabilmektedir.  
          </span>
        </div>
        <div className='infoSheets' id='companyBox3' onClick={ () => navigate("/sirket-firma-kurulus")}>
          <span className='infoSVG'><img src='/svg_company.svg' alt='Company icon'/></span>
          <span className='infoTitle'>Şirket Kurulum</span>
          <span className='infoText'>Letonya'da şirket kurmak isteyen vatandaşlarımıza bu alanda oldukça tecrübeli personelimiz
            hizmet sunmakta olup, detaylı bilgi için tıklayabilirsiniz.
          </span>
        </div>
      </div>

      <div className='infoAreas'>
        <div className='infoSheets' id='companyBox2'>
          <span className='infoSVG'><img src='/svg_court.svg' alt='Judicial icon'/></span>
          <span className='infoTitle'>Avukatlık Hizmetleri</span>
          <span className='infoText'>Letonya'da kişisel veya kurumsal olarak ihtiyaç duyabileceğiniz avukatlık hizmetleri
            konusunda sizleri alanında tecrübeli uzman avukatlarla tanıştırmakta, adli süreçleriniz takibini yapabilmekteyiz.
          </span>
        </div>
        <div className='infoSheets' id='companyBox'>
          <span className='infoSVG'><img src='/svg_certification.svg' alt='Certification icon'/></span>
          <span className='infoTitle'>İş takibi & Belge Onayları</span>
          <span className='infoText'>Şirketlerimiz ve vatandaşlarımızın Letonya'da ihtiyaç duyacakları Konsolosluk,
            Noterlik belge onayları, apostil işlemleri, randevu takipleri, yabancı kurumların aranması gibi konularda 
            dil bilen personelimiz ile hizmet sunmaktayız.
          </span>
        </div>
        <div className='infoSheets' id='companyBox2'>
          <span className='infoSVG'><img src='/svg_customs1.svg' alt='Customs, tax, accounting icon'/></span>
          <span className='infoTitle'>Gümrük, Vergi, Muhasebe</span>
          <span className='infoText'>Letonya gümrüklerinden mal çekme, gerekli vergileri ödeme, şirketinizin muhasebe
            işlemlerinin takibi ve vergi işlemleri konularında uzmanlarımızla kurumsal hizmetler sunmaktayız.
          </span>
        </div>
      </div>
      <div> <br/><br/><br/><br/><br/><br/><br/> </div>
      <div className='footerArea'> <Footer /> </div>
      
    </div>
  )
}

export default BottomOther