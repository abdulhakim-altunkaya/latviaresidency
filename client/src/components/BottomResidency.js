import React from 'react';
import "../styles/bottomResidency.css"

function BottomResidency() {
  return (
    <div className='bottomResidencyMain'>
        <div className='bottomResidencyHeader'>
          <h1>YATIRIM YOLUYLA OTURMA İZNİ</h1>
        </div>
        <div className='infoResidencyCardsMain'>

          <div className='infoResidencyCardsRows'>

            <div className='infoResidencyCards1'>
              <div className='infoCardUpper'>
                <img src='/svg_family.svg' alt='family icon' className='infoResidencySvg'/>
                <span className='infoCardTitle'>Bütün Ailenize Oturum Hakkı</span>
              </div>
              <div className='infoCardLower'>
                <span>Yatırımınız sayesinde hem siz hem de eşiniz ve hem de 18 yaş altındaki çocuklarınız
                  oturum kartı sahibi olur.</span>
                <span>Ayrıca, anne babanınızın engelli veya sürekli bakıma muhtaç olmaları halinde onlar için 
                  de oturum kartı alabilirsiniz. </span>
              </div>
            </div>

            <div className='infoResidencyCards2'>
              <div className='infoCardUpper'>
                <img src='/svg_id.svg' alt='ID Card , Residency card icon' className='infoResidencySvg'/>
                <span className='infoCardTitle'>Önce Geçici sonra Süresiz Oturum</span>
              </div>
              <div className='infoCardLower'>
                <span>İlk olarak 5 yıllık oturum alan yatırımcılarımız, 5 yılın sonunda süresiz oturuma 
                  ve 10. yılın sonunda da Letonya vatandaşlığına başvurabilirler.</span>
                <span>Süresiz oturum için 5 yıllık oturumun 4 yılını Letonya'da geçirmiş olmak, ulusal marş,
                   genel tarih ve biraz Letonca bilmek gerekmektedir.</span>
              </div>
            </div>

          </div>

          <div className='infoResidencyCardsRows'>

            <div className='infoResidencyCards3'>
                <div className='infoCardUpper'>
                  <img src='/svg_latvia.svg' alt='application and folder icon' className='infoResidencySvg'/>
                  <span className='infoCardTitle'>Letonya Vatandaşlığı</span>
                </div>
                <div className='infoCardLower'>
                  <span>Vatandaşlık başvurusu için ilk olarak geçici oturum, sonra süresiz oturum almış olmak ve 10 yıllık sürenin 
                    çoğunu Letonya'da geçirmiş olmak gerekmektedir. 
                  </span>
                  <span>Şartları sağlayan Türk vatandaşları, kendi vatandaşlığını kaybetmeden,
                  Letonya vatandaşı olabilirler.</span>
                </div>
            </div>

            <div className='infoResidencyCards4'>
                <div className='infoCardUpper'>
                  <img src='/svg_folder.svg' alt='application and folder icon' className='infoResidencySvg'/>
                  <span className='infoCardTitle'>Kolay Başvuru Şartları</span>
                </div>
                <div className='infoCardLower'>
                  <span>Program bütün yabancılara açık olup, başvuran kişinin 18 yaş üstü olması ve adli sicil kaydının 
                    bulunmaması gerekmektedir.
                  </span>
                  <span>Başvurular genellikle 2 ila 4 ay arasında sonuçlandırılmakta olup, uzman ekibimiz bu süreci 
                    daha da kolaylaştırmaktadır.</span>
                </div>
            </div>

          </div>

        </div>

        <div>Yatırım Yoluyla Oturum izni türleri</div>
        <div>1. Gayrımenkul yoluyla oturum izni - sartlar - gerekli belgeler - süreç</div>
        <div>1. Şirket yatırımı yoluyla oturum izni - sartlar - gerekli belgeler - süreç</div>
        <div>1. Devlet Tahvili yoluyla oturum izni - sartlar - gerekli belgeler - süreç</div>
        <div>1. Finansal yatırım yoluyla oturum izni - sartlar - gerekli belgeler - süreç</div>
        <div>tablo genel karşılaştırma</div>
    </div>
  )
}

export default BottomResidency