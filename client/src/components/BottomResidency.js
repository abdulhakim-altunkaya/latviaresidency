import React from 'react';
import "../styles/bottomResidency.css"
import "../styles/bottomCompany.css";

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

        <div>
            <p>Letonya'da yatırım yoluyla oturum iznine ilişkin bilgiler karşılaştırmalı olarak aşağıda sunulmaktadır.</p>
            <table className='companyTypesTable'>
              <tr>
                <th></th>
                <th>Gayrımenkul</th>
                <th>Limited Şirket</th>
                <th>Faizsiz Devlet Tahvili</th>
                <th>Banka Mevduatı</th>
              </tr>
              <tr>
                <td><strong>Minimum Yatırım</strong></td>
                <td>250.000 Euro</td>
                <td>50.000 Euro</td>
                <td>250.000 Euro</td>
                <td>280.000 Euro</td>
              </tr>
              <tr>
                <td><strong>Devlet Harcı</strong></td>
                <td>2800 Euro</td>
                <td>1-2799 Euro</td>
                <td>25000</td>
                <td>25.000 Euro</td>
              </tr>
              <tr>
                <td><strong>Oturum Hakkı</strong></td>
                <td>Verir</td>
                <td>Vermez</td>
                <td>Verir</td>
                <td>Vermez</td>
              </tr>
              <tr>
                <td><strong>Kurucu Sayısı</strong></td>
                <td>Birden çok</td>
                <td>1-5 arası</td>
                <td>Birden çok</td>
                <td>1</td>
              </tr>
              <tr>
                <td><strong>Kurucu Tipi</strong></td>
                <td>Gerçek ve/veya Tüzel</td>
                <td>Sadece Gerçek</td>
                <td>Gerçek ve/veya Tüzel</td>
                <td>Sadece Gerçek</td>
              </tr>
              <tr>
                <td><strong>Yönetim Kurulu (YK) Üyeleri</strong></td>
                <td>Kurucular en az bir YK üyesi atar.</td>
                <td>Bütün Kurucular aynı zamanda YK üyesidir</td>
                <td>Kurucular ve YK üyeleri farklı olabilir</td>
                <td>Yönetim kurulu yoktur.</td>
              </tr>
              <tr>
                <td><strong>Kurumlar Vergisi (Yıllık karın %20-%25'i)</strong></td>
                <td>Öder</td>
                <td>Öder</td>
                <td>Öder</td>
                <td>Ödemez</td>
              </tr>
              <tr>
                <td><strong>KDV</strong></td>
                <td>Öder</td>
                <td>Öder</td>
                <td>Öder</td>
                <td>Öder</td>
              </tr>
            </table>
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