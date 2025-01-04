import React from 'react';
import "../styles/bottomPrices.css";
import Footer from './Footer';

function BottomPrices() {

  const toggleDetail = () => {
    
  }

  return (
    <div className='bottomPricesMainArea'>
        <div className='bottomPricesHeader'>
          <h1>ÜCRETLERİMİZ</h1>
        </div>
        <div className='bottomPricesContent1'>
            <p>Şeffaflık ve müşteri memnuniyeti prensiplerimiz çerçevesinde 2025 yılı ücretlerimiz aşağıda sunulmaktadır.</p>
            <p>Ücretlerimiz standart olup, bütün müşterilerimiz için aynıdır.</p>
            <p>Ücretlerimiz tek seferde alınmakta olup, oturum kartının çıkmaması ve müşterimizin başvurusundan vazgeçmesi 
              halinde alınan ücretin yarısı 30 gün içerisinde iade edilmektedir.</p>
            <p>Ücretlerimize Letonya kanunları çerçevesinde KDV vergisi (%21) dahildir ve yapılan ödemeler için
              müşteri ismine fatura düzenlenmektedir.</p>
            <p>Ücretler şirketimizin Letonya'daki banka hesabına yapılmaktadır.</p>
            <p>Ücretlerimizin kapsamına ilişkin detaylı bilgilere aşağıdaki kalemlere tıklayarak ulaşabilirsiniz.</p>
        </div>
        <div className='bottomPricesContent2'>
            <div className='bottomPricesListItem' onClick={toggleDetail}>
              <span>Gayrımenkul yatırımıyla oturum kartı başvurusu: </span> 
              <span className='spanPrices'> 5000 Euro</span></div>
              <div className='subDetails'>
                <div>
                  <span>Fiyata dahil hizmetler: </span> <br/>
                -Evrak takibi, <br/>
                -Tercüme işlemleri, <br/>
                -Refakat, <br/>
                -Danışmanlık, <br/>
                -İlgili kurumlara araçla yapılacak ziyaretler, ziyaretlerde refakat <br/>
                -5 evi araçla ziyaret etme, ziyarette refakat, <br/>
                -Riga Havalimanından Riga şehrindeki otele transfer <br/>
                -İlgili kurumlara ve Noterliklere ödenecek 50 Euro altındaki harçlar  <br/>
                </div>
                <div>
                  <span>Fiyata dahil olmayan hizmetler ve durumlar: </span> <br/>
                  -Başvuruyla ilgisiz veya başvuruya etki etmeyecek durumlar kapsamında <br/>
                  uzmanlarımızın ilave olarak meşgul edilmesi. (Örnek: uzmanlarımızın bekletilmesi,<br/>
                  başka kişiler için danışmanlık istenmesi, vb.)
                </div>
              </div>
              
            <div className='bottomPricesListItem'>
              <span>Devlet tahvili yatırımıyla oturum kartı başvurusu: </span> 
              <span className='spanPrices'> 2500 Euro</span></div>
            <div className='bottomPricesListItem'>
              <span>Limited şirket yatırımıyla oturum kartı başvurusu: </span> 
              <span className='spanPrices'> 5000 Euro</span></div>
            <div className='bottomPricesListItem'>
              <span>Şirket Kurulumu: </span> 
              <span className='spanPrices'> 1000 Euro</span></div>
            <div className='bottomPricesListItem'>
              <span>İş takibi/Belge onayları (saatlik): </span> 
              <span className='spanPrices'> 80 Euro</span></div>
            <div className='bottomPricesListItem'>
              <span> Genel danışmanlık (saatlik): </span> 
              <span className='spanPrices'> 80 Euro</span></div>
            <div className='bottomPricesListItem'>
              <span>Kafile/Heyet rehberliği (günlük): </span> 
              <span className='spanPrices'> 650 Euro</span></div>
            <div className='bottomPricesListItem'>
              <span>Türkçe-Letonca-Rusça-İngilizce dillerinde yazılı tercüme sayfa başı: </span> 
              <span className='spanPrices'> 40 Euro</span></div>
            <div className='bottomPricesListItem'>
              <span>Türkçe-Letonca-Rusça-İngilizce dillerinde sözlü tercüme (saatlik): </span> 
              <span className='spanPrices'> 120 Euro</span></div>
            <div className='bottomPricesListItem'>
              <span>Türkçe-Letonca-Rusça-İngilizce dillerinde sözlü tercüme günlük (12 saat, molalı): </span> 
              <span className='spanPrices'> 680 Euro</span></div>
            
        </div>
        <div> <br/><br/><br/><br/><br/><br/><br/> </div>
        <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomPrices