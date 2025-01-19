import React, {useState} from 'react';
import "../styles/bottomSSS.css";
import Footer from "./Footer"

function BottomSSS() {

    const [isVisible21, setIsVisible21] = useState(false);
    const [isVisible22, setIsVisible22] = useState(false);
    const [isVisible23, setIsVisible23] = useState(false);
    const [isVisible24, setIsVisible24] = useState(false);
    const [isVisible25, setIsVisible25] = useState(false);
    const [isVisible26, setIsVisible26] = useState(false);
    const [isVisible27, setIsVisible27] = useState(false);
    const [isVisible28, setIsVisible28] = useState(false);
    const [isVisible29, setIsVisible29] = useState(false);
    const [isVisible30, setIsVisible30] = useState(false);
    const [isVisible31, setIsVisible31] = useState(false);
  
    const toggleAnswer = (num) => {
      if(num === 21) {
        setIsVisible21(!isVisible21);
      } else if (num === 22) {
        setIsVisible22(!isVisible22);
      } else if (num === 23) {
        setIsVisible23(!isVisible23);
      } else if (num === 24) {
        setIsVisible24(!isVisible24);
      } else if (num === 25) {
        setIsVisible25(!isVisible25);
      } else if (num === 26) {
        setIsVisible26(!isVisible26);
      } else if (num === 27) {
        setIsVisible27(!isVisible27);
      } else if (num === 28) {
        setIsVisible28(!isVisible28);
      } else if (num === 29) {
        setIsVisible29(!isVisible29);
      } else if (num === 30) {
        setIsVisible30(!isVisible30);
      } else if (num === 31) {
        setIsVisible31(!isVisible31);
      }
      
    }

  return (
    <div>
      
      <div className='questionsArea'>
        <h2>SIK SORULAN SORULAR</h2>
        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(21)}>
            <div>5 yıllık oturum izni bitince tekrardan 5 yıllık oturum izni alabilir miyim?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible21 ? 
            <div className='questionAtbildi'>
            Evet. Eğer süresiz oturum izni şartlarını sağlayamıyorsanız, o zaman pekala tekrardan 5 yıllık oturum 
            iznini alabilirsiniz. Bunun için yatırımını olduğu gibi muhafaza etmiş olmanız gerekmektedir.</div>
          : <></> }

        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(22)}>
            <div>Letonya vatandaşlığı alabilir miyim?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible22 ? 
          <div className='questionAtbildi'>
            Vatandaşlık için önce 5 yıllık oturum, sonra süresiz oturum almalısınız. Letonya'daki
            sürenizin 10.yılında vatandaşlık için başvurabilirsiniz. Vatandaşlık için Letonya tarihini, dilini ve genel kültürünü de 
            bilmeniz gerekmektedir.</div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(23)}>
            <div>5 yıllık oturum iznini 5 yıl sonra süresiz oturum iznine çevirebilir miyim?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible23 ? 
          <div className='questionAtbildi'>
              Evet, A2 seviyesinde Letonca bilmeniz, 5 yıllık oturum süresinin 4 yılını Letonya'da geçirmiş olmanız,
              Letonya milli marşı ve Letonya genel tarihini biraz bilmeniz halinde süresiz 
              oturum alabilirsiniz. Yoksa, tekrardan 5 yıllık oturum alırsınız.  </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(24)}>
            <div>5 yıllık oturum izni bitince tekrardan 5 yıllık oturum izni alabilir miyim?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible24 ? 
          <div className='questionAtbildi'>
            Evet. Eğer süresiz oturum izni şartlarını sağlayamıyorsanız, o zaman pekala tekrardan 5 yıllık oturum 
            iznini alabilirsiniz. Bunun için yatırımınızı olduğu gibi muhafaza etmiş olmanız gerekmektedir. 
            Alacağınız ikinci 5 yıllık oturum kartı için 5000 Euro başvuru harcı ödenir. İkinci oturum kartı 
            için başvurunuzu ilk oturum kartınızın süresi bitmeden veya süresi bittikten sonraki
            40 gün içerisinde yapmanız gerekmektedir. Eğer su süreyi kaçırırsanız, o zaman sil baştan 
            yeni başvuru yapar gibi başvuru yapmanız gerekir, ki bu durumda bütün harçları tekrar ödemek 
            durumunda kalırsınız. Yatırımınızı koruduğunuz sürece, her beş yılda bir 5 yıllık 
            oturum kartı alabilirsiniz. 5 yıllık geçici oturum kartları 
            için Letonca bilmeniz veya Letonya'da yaşamanız şart değildir.</div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(25)}>
            <div>Başvurum reddedilirse veya başvurudan vazgeçersem danışmanlık ücretim iade edilir mi?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible25 ? 
          <div className='questionAtbildi'>
              Başvurunuzun reddedilmesi veya başvurudan vazgeçmeniz halinde firmamıza ödediğiniz ücretin yarısı
              30 gün içerisinde iade edilir.</div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(26)}>
            <div>5 yıllık oturum izniyle başka bir AB ülkesinde çalışabilir miyim?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible26 ? 
          <div className='questionAtbildi'>
            Hayır. Uzun süreli oturum izinleriyle başka bir AB ülkesinde çalışmak istemeniz halinde, 
            o ülkenin koyduğu ilave şartları karşılamak durumundasınız. Sözkonusu şartlar her AB ülkesinde 
            farklılık göstermektedir.</div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(27)}>
            <div>Yatırım yoluyla oturum programına bütün ülkeler başvurabilir mi?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible27 ? 
          <div className='questionAtbildi'>
              Bütün yabancılar başvurabilir. Herhangi bir sınırlama bulunmamaktadır</div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(28)}>
            <div>Vatandaşlık şartlarını sağlarsam, çifte vatandaşlık alabilir miyim?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible28 ? 
          <div className='questionAtbildi'>
            NATO ve AB ülke vatandaşları çifte vatandaşlık alabilirler. Yani Türk vatandaşı olarak çifte
            vatandaşlık alabilirsiniz.</div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(29)}>
            <div>Vize konusunda yardımcı oluyor musunuz?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible29 ? 
          <div className='questionAtbildi'>
            Evet, müşterilerimize davetiye gönderiyor, başvuru formunu doldurmasına, 
            evraklarını hazırlamasına ve randevu almasına yardımcı oluyoruz.</div>
          : <></> }
        </div>
        
      
        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(30)}>
            <div>5 yıllık oturum kartını aldıktan hemen sonra yatırımımı satabilir miyim?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible30 ? 
          <div className='questionAtbildi'>
            5 yıllık oturum aldıktan sonra yatırımınızı satmanız halinde oturumunuz iptal edilir.</div>
          : <></> }
        </div>   
      
        
      </div>
      <div> <br/><br/><br/><br/><br/><br/><br/> </div>
      <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomSSS;