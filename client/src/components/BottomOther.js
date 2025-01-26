import React from 'react';
import {useNavigate} from "react-router-dom";
import Footer from './Footer'; 
import "../styles/bottomOther.css"

function BottomOther() {
  
  const navigate = useNavigate();

  return (
    <div className='bottomOtherArea'>

      <div className='infoHeaderArea2'>
        <h1>DİĞER HİZMETLERİMİZ</h1>
      </div>

      <div className='infoAreas2'>
        <div className='infoSheets2' id='companyBox'>
          <span className='infoSVG2'><img src='/svg_translation.svg' alt='Translation icon'/></span>
          <span className='infoTitle2'>Tercüme</span>
          <span className='infoText2'>Alanında tecrübeli Letonya'da yaşayan tercümanlarımız 
            gerek yazılı gerek sözlü Letonca-Rusça-Türkçe-İngilizce dillerinde çeviri hizmetleri sunmaktadırlar.
            Letonya'daki tercümanlarımız aynı zamanda Konsolosluk ve Noterliklere de yeminli tercüman olarak
            hizmet etmektedirler. 
          </span>
        </div>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_tourist.svg' alt='Tourist icon'/></span>
          <span className='infoTitle2'>Kafile Rehberliği</span>
          <span className='infoText2'>İşadamı ve bürokrat heyetlerimiz, turistik kafileler ve vatandaşlarımıza Letonya'ya 
            yapacakları seyahat boyunca tecrübeli ve dil bilen rehberlerimiz hizmet etmektedir. Rehberlerimiz Rusya,
            Belarus, Estonya, Litvanya, Baltıklar ve İskandinav ülkelerinde görev alabilmektedir.  
          </span>
        </div>
        <div className='infoSheets2' id='companyBox3' onClick={ () => navigate("/sirket-firma-kurulus")}>
          <span className='infoSVG2'><img src='/svg_company.svg' alt='Company icon'/></span>
          <span className='infoTitle2'>Şirket Kurulum</span>
          <span className='infoText2'>Letonya'da şirket kurmak isteyen vatandaşlarımıza bu alanda oldukça tecrübeli personelimiz
            hizmet sunmakta olup, detaylı bilgi için tıklayabilirsiniz.
          </span>
        </div>
      </div>

      <div className='infoAreas2'>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_accounting.svg' alt='Accounting icon'/></span>
          <span className='infoTitle2'>Şirket İşlemleri</span>
          <span className='infoText2'>Şirketinizin ihtiyaç duyacağı banka hesabı açma, muhasebe hizmetleri, insan kaynakları, 
            ihalelere katılım, ticari alan kiralama, reklam, pazar araştırması ve diğer teknik konularda 
            detaylı hizmetler sunmaktayız.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox'>
          <span className='infoSVG2'><img src='/svg_certification.svg' alt='Certification icon'/></span>
          <span className='infoTitle2'>İş takibi & Belge Onayları</span>
          <span className='infoText2'>Şirketlerimiz ve vatandaşlarımızın Letonya'da ihtiyaç duyacakları Konsolosluk,
            Noterlik belge onayları, apostil işlemleri, randevu takipleri, yabancı kurumların aranması gibi konularda 
            dil bilen personelimiz ile hizmet sunmaktayız.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_customs1.svg' alt='Customs, tax, accounting icon'/></span>
          <span className='infoTitle2'>Gümrük, Vergi</span>
          <span className='infoText2'>Letonya gümrüklerinden mal çekme ve vergi işlemleri konularında uzmanlarımızla 
            kurumsal hizmetler sunmaktayız.
          </span>
        </div>
      </div>

      <div className='infoAreas2'>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_car.svg' alt='Car icon'/></span>
          <span className='infoTitle2'>Araç Kiralama </span>
          <span className='infoText2'>Lüks sedan, normal sedan, SUV,
            minibüs ve otobüs klasmanlarında şoförlü veya şoförsüz araç kiralama hizmeti sunmaktayız. Araç kiralama hizmetimiz
            bütün Baltıkları kapsamaktadır.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox'>
          <span className='infoSVG2'><img src='/svg_hotel.svg' alt='Hotel icon'/></span>
          <span className='infoTitle2'>Otel Rezervasyon</span>
          <span className='infoText2'>Büyük veya küçük gruplar için talebinize göre otel rezervasyon hizmeti sunmaktayız. Turistik, 
            tarihi, doğal güzellik, iş görüşmeleri, resmi görüşmeler gibi temalar için ayrı ayrı opsiyonlarımız bulunmaktadır.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_transfer.svg' alt='Airport transfer icon'/></span>
          <span className='infoTitle2'>Transfer Hizmetleri</span>
          <span className='infoText2'>Havalimanı, deniz limanı, tren garları ile ikamet edeceğiniz yer arasında 
            transfer hizmeti sunmaktayız. Ayrıca havalimanı karşılama hizmetimiz de bulunmaktadır. Transfer hizmetimiz Litvanya, 
            Letonya ve Estonya'yı kapsamaktadır.
          </span>
        </div>
      </div>
      <div> <br/><br/><br/><br/><br/></div>
      <div className='footerArea'> <Footer /> </div>
      
    </div>
  )
}

export default BottomOther