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
                <th>Şirket</th>
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
                <td>%5</td>
                <td>10.000 Euro</td>
                <td>38.000</td>
                <td>25.000 Euro</td>
              </tr>
              <tr>
                <td><strong>Yatırımın değer kazanması</strong></td>
                <td>Mümkündür</td>
                <td>Değildir</td>
                <td>Değildir</td>
                <td>Mümkündür</td>
              </tr>
              <tr>
                <td><strong>Yatırımdan aylık/senelik kâr</strong></td>
                <td>Mümkündür</td>
                <td>Değildir</td>
                <td>Değildir</td>
                <td>Mümkündür</td>
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

          <div className='bottomCompanyText'>
            <h3>1. Gayrımenkul Yatırımı</h3>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Minimum yatırım 250.000 + Harç 12.500 
              + Danışmalığımız 5.000 = Toplam 267.000</p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Letonya emlak fiyatları diğer AB
              ülkelerine kıyasla oldukça uygun olup, 2025 yılı itibariyle ülkemizden bile ucuzdur. En çok tavsiye ettiğimiz 
              yatırım türüdür.
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Program kapsamında herşey dahil anahtar
              ve oturum kartı teslim fiyatımız 5000 Euro'dur. Alacağınız emlakın en az 250.000 Euro olacağı olacağı düşünüldüğünde,
              harçlar ve danışmanlık ücretimiz ile birlikte ödeyeceğiniz toplam para yaklaşık 280.000 Euro olacaktır.
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Program kapsamında sadece Letonya'da 
              vergi ödeyen bir şirketten veya Letonya'da yaşayan bir yabancıdan emlak alabilirsiniz. Emlak bedelinin banka transferi
              ile yapılması gerekmekte olup, alacağınız gayrımenkulün satış bedelinin en az 250.000 Euro ve tapuda kayıtlı değerinin
              de en az 80.000 Euro olması gerekmektedir.
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Gayrımenkul yatırımı en çok tavsiye ettiğimiz
              yatırım türü olup, alacağınız emlakın her sene değer kazanması ve üstüne kira geliri elde etmeniz mümkündür. 
              Riga emlak piyasasını yakından takip eden uzman ekibimiz doğru gayrımenkul seçiminde size pekçok opsiyon sunacaktır.
              </p>
            <h3>2. Şirket Yatırımı</h3>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Minimum yatırım 50.000 + Harç 10.000 
              + Danışmalığımız 5.000 = Toplam 65.000</p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Letonya'da kayıtlı bir şirkete yatırım 
              yapılarak alınan, en ucuz ama pek tavsiye etmediğimiz yatırım türüdür. Şirket yatırımı 2 şekilde olabilir: <br/>
              <strong>50.000 Euro</strong>: En fazla 50 çalışanı ve senelik cirosu 10 milyon Euro'dan az şirketler <br/>
              <strong>100.000 Euro</strong>: Diğer şirketler
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Şirket yatırımı ucuz olsa da
              yatırımızın değer kazanması ve yatırımınızdan aylık veya senelik kâr elde etmeniz pratikte pek mümkün olmayabilir.
              Ayrıca, yatırımınızın karşılığı olarak aldığınız hisseleri birgün satmak istemeniz halinde, aldığınız bedelin
              çok altında ve hatta hiç alıcı olmazsa sıfır bedelle satmanız gerekebilir. Dahası, hissesini aldığınız şirket
              eğer iflas ederse alacağınız oturum kartı iptal edilecektir. Özetle, şirket yatırımı için ayırdığınız para size
              sadece oturum kartı verecek olup, o paranın geri dönüşünün ve kârının olmayabileceğini gözönünde bulundurmanızı 
              tavsiye ederiz.</p>
            <h3>3. Faizsiz Devlet Tahvili</h3>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Minimum yatırım 250.000 + Harç 38.000 
              + Danışmalığımız 5.000 = Toplam 293.000</p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Letonya'da kayıtlı bir şirkete yatırım 
              yapılarak alınan, en ucuz ama pek tavsiye etmediğimiz yatırım türüdür. Şirket yatırımı 2 şekilde olabilir: <br/>
              <strong>50.000 Euro</strong>: En fazla 50 çalışanı ve senelik cirosu 10 milyon Euro'dan az şirketler <br/>
              <strong>100.000 Euro</strong>: Diğer şirketler
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Şirket yatırımı ucuz olsa da
              yatırımızın değer kazanması ve yatırımınızdan aylık veya senelik kâr elde etmeniz pratikte pek mümkün olmayabilir.
              Ayrıca, yatırımınızın karşılığı olarak aldığınız hisseleri birgün satmak istemeniz halinde, aldığınız bedelin
              çok altında ve hatta hiç alıcı olmazsa sıfır bedelle satmanız gerekebilir. Dahası, hissesini aldığınız şirket
              eğer iflas ederse alacağınız oturum kartı iptal edilecektir. Özetle, şirket yatırımı için ayırdığınız para size
              sadece oturum kartı verecek olup, o paranın geri dönüşünün ve kârının olmayabileceğini gözönünde bulundurmanızı 
              tavsiye ederiz.</p>   
            <h3>4. Banka Mevduatı</h3>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Minimum yatırım 280.000 + Harç 25.000 
              + Danışmalığımız 5.000 = Toplam 310.000</p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Banka mevduatı oldukça güvenli bir
              yatırım türü olup, ayrıca senelik %8'e varan faiz geliri de elde etmeniz mümkündür. Yani 280.000 Euroluk yatırımınızı
              5 sene sonra 390.000 Euro olarak geri alabilirsiniz.
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Letonya'daki bankalara yapacağınız 
              mevduat transferinin en az 280.000 Euro olması gerekmektedir. Mevduatınız banka sisteminde 
              "ikincil yükümlülük" ("Subordinate liability") olarak kayıt edilecek olup, bunun manası olur da banka iflas 
              ederse bankadan birincil alacağı olan kişi ve kurumlar bittikten sonra sıranın size gelmesidir. Bankanın 
              iflas etmesini düşük bir ihtimal olarak değerlendirirsek, bu detayın çok da önemli olmayabileceği düşünülebilir.</p> 
            <h2>Süreç</h2>
            Devlet harçları, oturum izniniz onaylandıktan sonra ödenir.
            <h2>Gerekli Belgeler</h2>
            Devlet harçları, oturum izniniz onaylandıktan sonra ödenir.
          </div>
    </div>
  )
}

export default BottomResidency