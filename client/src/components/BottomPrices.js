import React, {useState} from 'react';
import "../styles/bottomPrices.css";
import Footer from './Footer';

function BottomPrices() {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);

  const toggleDetail = (num) => {
    if(num === 1) {
      setIsVisible1(!isVisible1);
    } else if (num === 2) {
      setIsVisible2(!isVisible2);
    } else if (num === 3) {
      setIsVisible3(!isVisible3);
    } else if (num === 4) {
      setIsVisible4(!isVisible4);
    } else if (num === 5) {
      setIsVisible5(!isVisible5);
    } else if (num === 6) {
      setIsVisible6(!isVisible6);
    } else if (num === 7) {
      setIsVisible7(!isVisible7);
    } else if (num === 8) {
      setIsVisible8(!isVisible8);
    } else if (num === 9) {
      setIsVisible9(!isVisible9);
    } else if (num === 10) {
      setIsVisible10(!isVisible10);
    }
    
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

            <div className='bottomPricesListItem' onClick={() => toggleDetail(1)}>
              <span className='spanListTitle'>Gayrımenkul yatırımıyla oturum kartı başvurusu: </span> 
              <span className='spanPrices'> 5000 Euro</span></div>  
              {isVisible1 ? 
              <div className='subDetails'>
                <span>Fiyata dahil hizmetler: </span> <br/>
                <ul>
                  <li>Evrak takibi,</li>
                  <li>Tercüme işlemleri,</li>
                  <li>Refakat,</li>
                  <li>Danışmanlık,</li>
                  <li>İlgili kurumlara araçla yapılacak ziyaretler, ziyaretlerde refakat</li>
                  <li>5 evi ziyaret ve ziyaret süresince refakat</li>
                  <li>Riga Havalimanından Riga şehrindeki otele transfer</li>
                  <li>İlgili kurumlara ve Noterliklere ödenecek 50 Euro altındaki harçlar</li>
                </ul>
              </div>
              : <></>}
            
            <div className='bottomPricesListItem' onClick={() => toggleDetail(2)}>
              <span className='spanListTitle'>Devlet tahvili yatırımıyla oturum kartı başvurusu: </span> 
              <span className='spanPrices'> 2500 Euro</span></div>
              {isVisible2 ? 
              <div className='subDetails'>
                  <span>Fiyata dahil hizmetler: </span> <br/>
                  <ul>
                    <li>Evrak takibi,</li>
                    <li>Tercüme işlemleri,</li>
                    <li>Refakat,</li>
                    <li>Danışmanlık,</li>
                    <li>İlgili kurumlara araçla yapılacak ziyaretler, ziyaretlerde refakat</li>
                    <li>Riga Havalimanından Riga şehrindeki otele transfer</li>
                    <li>İlgili kurumlara ve Noterliklere ödenecek 50 Euro altındaki harçlar</li>
                  </ul>
              </div>
              : <></>}

            <div className='bottomPricesListItem' onClick={() => toggleDetail(3)}>
              <span className='spanListTitle'>Limited şirket yatırımıyla oturum kartı başvurusu: </span> 
              <span className='spanPrices'> 6000 Euro</span></div>
              {isVisible3 ? 
              <div className='subDetails'>
                  <span>Fiyata dahil hizmetler: </span> <br/>
                  <ul>
                    <li>Evrak takibi,</li>
                    <li>Tercüme işlemleri,</li>
                    <li>Refakat,</li>
                    <li>Danışmanlık,</li>
                    <li>İlgili kurumlara araçla yapılacak ziyaretler, ziyaretlerde refakat</li>
                    <li>Riga Havalimanından Riga şehrindeki otele transfer</li>
                    <li>İlgili kurumlara ve Noterliklere ödenecek 50 Euro altındaki harçlar</li>
                  </ul>
              </div>
              : <></>}

            <div className='bottomPricesListItem' onClick={() => toggleDetail(4)}>
              <span className='spanListTitle'>Şirket Kurulumu: </span> 
              <span className='spanPrices'> 1000 Euro</span></div>
              {isVisible4 ? 
              <div className='subDetails'>
                  <span>Fiyata dahil hizmetler: </span> <br/>
                  <ul>
                    <li>Evrak takibi,</li>
                    <li>Tercüme işlemleri,</li>
                    <li>Refakat,</li>
                    <li>Danışmanlık,</li>
                    <li>Şirket için 1 yıllık adres</li>
                    <li>Şirket için mühür ve kaşe çıkarılması</li>
                    <li>İlgili kurumlara ve Noterliklere ödenecek 50 Euro altındaki harçlar</li>
                    <li>Banka hesabı açılması fiyata dahil değildir. Banka hesabı açmak istemeniz halinde 
                      ayrıca fiyat teklifi isteyebilirsiniz</li>
                  </ul>
              </div>
              : <></>}

            <div className='bottomPricesListItem' onClick={() => toggleDetail(5)}>
              <span className='spanListTitle'>İş takibi/Belge onayları (saatlik): </span> 
              <span className='spanPrices'> 80 Euro</span></div>
              {isVisible5 ? 
              <div className='subDetails'>
                  <ul>
                    <li>Letonya'da takip gerektiren herhangi bir durumunuz olması halinde bu hizmetimize başvurabilirsiniz.</li>
                    <li>Saatlik 80 kısa süreli işler için belirlenen fiyat olup, uzun süreli takip gerektirecek 
                      bir işiniz olması halinde ayrıca fiyat teklifi sunabiliriz.</li>
                    <li>Bu hizmetimiz kapsamında yakınlarınızın, çocuklarınızın durumlarını takip etmemizi de isteyebilirsiniz.</li>
                    <li>Letonya'da hastalanan veya hastanelik olan ve yakınlarınız için bu hizmetimizden faydalanabilirsiniz.</li>
                  </ul>
              </div>
              : <></>}

            <div className='bottomPricesListItem' onClick={() => toggleDetail(6)}>
              <span className='spanListTitle'> Genel danışmanlık (saatlik): </span> 
              <span className='spanPrices'> 80 Euro</span></div>
              {isVisible6 ? 
              <div className='subDetails'>
                  <ul>
                    <li>Aklınızdaki bütün soruları, danışmak istediğiniz bütün konuları bize sorabilirsiniz.</li>
                  </ul>
              </div>
              : <></>}

            <div className='bottomPricesListItem' onClick={() => toggleDetail(7)}>
              <span className='spanListTitle'>Kafile/Heyet rehberliği (günlük): </span> 
              <span className='spanPrices'> 650 Euro</span></div>
              {isVisible7 ? 
              <div className='subDetails'>
                  <ul>
                    <li>Rehberlerimiz Türkçe, Letonca, Rusça, İngilizce dillerinde hizmet vermektedirler.</li>
                    <li>Rehberlerimiz arzu edilmesi halinde sadece Letonya değil, Litvanya, Estonya, İsveç,
                      Norveç, Rusya ve Belarus'ta görev alabilmektedir.</li>
                    <li>Rehberimizin bir günden uzun süre programları için kalacak yeri ve yemekleri heyet/kafile
                      tarafından karşılanır.
                    </li>
                    <li>Rehberlerimiz ülkenin tarihi, coğrafyası, turistik yerleri ve alışveriş merkezleri hakkında
                      oldukça kapsamlı bilgiye sahip, istenilen her yerde heyet/kafileye refakat eder. 
                    </li>
                  </ul>
              </div>
              : <></>}

            <div className='bottomPricesListItem' onClick={() => toggleDetail(8)}>
              <span className='spanListTitle'>Türkçe-Letonca-Rusça-İngilizce dillerinde yazılı tercüme sayfa başı: </span> 
              <span className='spanPrices'> 50 Euro</span></div>
              {isVisible8 ? 
              <div className='subDetails'>
                  <ul>
                    <li>Tercümeler isterseniz kağıt olarak isterseniz e-mail olarak yapılabilir.</li>
                    <li>Tercümelerde sadece Tercümanın onayı ve imzası bulunmaktadır.</li>
                    <li>Tercümelere Noterlik, Konsolosluk veya apostil onayı alınabilmekte olup,
                      bu işlemler ilgili ücretler ayrıca ödenir. 
                    </li>
                    <li>Müşterilerimizin bilgileri ve tercümenin konusu dışarı ile paylaşılmaz.</li>
                    <li>Fiyata KDV dahildir ve müşteri adına fatura düzenlenir.</li>
                  </ul>
              </div>
              : <></>}

            <div className='bottomPricesListItem' onClick={() => toggleDetail(9)}>
              <span className='spanListTitle'>Türkçe-Letonca-Rusça-İngilizce dillerinde sözlü tercüme (saatlik): </span> 
              <span className='spanPrices'> 120 Euro</span></div>
              {isVisible9 ? 
              <div className='subDetails'>
                  <ul>
                    <li>Tercümanın şehir içi seyahat masrafları fiyata dahildir.</li>
                    <li>Müşterilerimizin bilgileri ve tercümenin konusu dışarı ile paylaşılmaz.</li>
                    <li>Fiyata KDV dahildir ve müşteri adına fatura düzenlenir.</li>
                  </ul>
              </div>
              : <></>}

            <div className='bottomPricesListItem' onClick={() => toggleDetail(10)}>
              <span className='spanListTitle'>Türkçe-Letonca-Rusça-İngilizce dillerinde sözlü tercüme günlük (12 saat, molalı): </span> 
              <span className='spanPrices'> 680 Euro</span></div>
              {isVisible10 ? 
              <div className='subDetails'>
                  <ul>
                    <li>Tercümanın şehir içi seyahat masrafları fiyata dahildir.</li>
                    <li>Tercüman 45 dakika tercüme, 15 dakika mola şeklinde çalışır.</li>
                    <li>Müşterilerimizin bilgileri ve tercümenin konusu dışarı ile paylaşılmaz.</li>
                    <li>Fiyata KDV dahildir ve müşteri adına fatura düzenlenir.</li>
                  </ul>
              </div>
              : <></>}
            
        </div>
        <div> <br/><br/><br/><br/><br/><br/><br/> </div>
        <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomPrices