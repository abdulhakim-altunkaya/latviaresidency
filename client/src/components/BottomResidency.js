import React from 'react';
import "../styles/bottomResidency.css"
import "../styles/bottomCompany.css";
import "../styles/bottomResList.css";
import Footer from './Footer';
import { Helmet } from "react-helmet";

function BottomResidency() {
return (
  <div>
    {/* Helmet for SEO */}
    <Helmet>
      <title>SIK SORULAN SORULAR | Letonya Oturum</title>
      <meta
        name="description"
        content="Letonya'da yatırım yoluyla oturum türleri, vatandaşlık ve yatırım konularında en çok 
        merak edilen soruların yanıtlarını burada bulabilirsiniz."
      />
      <meta
        name="keywords"
        content="Letonya, oturum izni, vatandaşlık, yatırım, gayrımenkul yatırımı, banka mevduatı, faizsiz devlet tahvilleri,
          karşılaştırmalı tablo, yatırım yoluyla oturum, süreç, gerekli evrak listesi, lazım belgeler"
      />
    </Helmet>
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
                <span>İlk 5 yıl geçici oturumlarla Letonya'da ikamet eden yatırımcılarımız, 5 yılın 
                  sonunda süresiz oturuma başvurabilirler.</span>
                <span>Süresiz oturum için ilk 5 yılın 4 yılını Letonya'da geçirmiş olmak, ulusal marş,
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
                  <span>Vatandaşlık başvurusu için ilk 5 yıl boyunca geçici oturum, sonra süresiz oturum 
                    almış olmak ve 10 yıllık sürenin 
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
            <p className='bottomResUpperText'>2010 yılında başlayan Yatırım Yoluyla Oturum programı kapsamında bugüne kadar yaklaşık 20.000 başvuru yapılmıştır.
              Program kapsamında Letonya'ya yaklaşık 1.5 milyar Euroluk yatırım yapılmıştır.
              Letonya'da yatırım yoluyla oturum iznine ilişkin bilgiler karşılaştırmalı olarak aşağıda sunulmaktadır.</p>
            <table className='companyTypesTable companyTypesTable2'>
              <tr>
                <th></th>
                <th>Gayrımenkul</th>
                <th>Şirket</th>
                <th>Faizsiz Devlet Tahvili</th>
                <th>Banka Mevduatı</th>
              </tr>
              <tr>
                <td><strong>Minimum Yatırım</strong></td>
                <td>250.000</td>
                <td>50.000</td>
                <td>250.000</td>
                <td>280.000</td>
              </tr>
              <tr>
                <td><strong>Devlet Harcı</strong></td>
                <td>%1,5 + 12.500</td>
                <td>10.000</td>
                <td>38.000</td>
                <td>25.000</td>
              </tr>
              <tr>
                <td><strong>Yatırımın değer kazanması</strong></td>
                <td>Mümkün</td>
                <td>Değil</td>
                <td>Mümkün</td>
                <td>Mümkün</td>
              </tr>
              <tr>
                <td><strong>Yatırımdan aylık/senelik kâr</strong></td>
                <td>Mümkün</td>
                <td>Değil</td>
                <td>Değil</td>
                <td>Mümkün</td>
              </tr>
              <tr>
                <td><strong>Risk Seviyesi</strong></td>
                <td className='greenCube'>Düşük</td>
                <td className='redCube'>Yüksek</td>
                <td className='greenCube'>Çok düşük</td>
                <td className='greenCube'>Çok düşük</td>
              </tr>
            </table>
          </div>
          <div className='bottomCompanyText bottomCompanyText2'>
            <h3>1. Gayrımenkul Yatırımı</h3>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Minimum yatırım 250.000 
              + %1,5 tapu harcı + Harç 12.500 + Danışmanlık 15.000 = Toplam 280.750 Euro</p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Letonya emlak fiyatları diğer AB
              ülkelerine kıyasla oldukça uygun olup, 2025 yılı itibariyle ülkemizden bile ucuzdur. En çok tavsiye ettiğimiz 
              yatırım türüdür.
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Program kapsamında herşey dahil anahtar
              ve oturum kartı teslim danışmanlık fiyatımız 15.000 Euro'dur. Alacağınız emlakın en az 250.000 Euro olacağı 
              olacağı düşünüldüğünde,
              harçlar ile birlikte ödeyeceğiniz toplam para yaklaşık 280.000 Euro olacaktır.
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Program kapsamında sadece Letonya'da 
              vergi ödeyen bir şirketten, Leton vatandaşlarından veya Letonya'da yaşayan bir yabancıdan
               (AB vatandaşı ve uzun süre oturum izinli) 
              emlak alabilirsiniz. Emlak bedelinin banka transferi
              ile yapılması gerekmekte olup, alacağınız gayrımenkulün satış bedelinin en az 250.000 Euro ve tapuda kayıtlı 
              kadastro değerinin de en az 80.000 Euro olması gerekmektedir. Tarım ve orman arazileri program kapsamı
               dışındadır. Üzerine ev ve apartman inşa edilebilecek arsalar program dahilindedir. 
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Gayrımenkul yatırımı en çok tavsiye ettiğimiz
              yatırım türü olup, alacağınız emlakın her sene değer kazanması ve üstüne kira geliri elde etmeniz mümkündür. 
              Riga emlak piyasasını yakından takip eden uzman ekibimiz doğru gayrımenkul seçiminde size pekçok opsiyon sunacaktır.
              </p>
            <h3>2. Şirket Yatırımı</h3>
              <p><img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  Minimum yatırım 50.000 + Harç 10.000 
              + Danışmalığımız 15.000 = Toplam 75.000</p>
              <p><img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  Letonya'da kayıtlı bir şirkete yatırım 
              yapılarak alınan, en ucuz ama pek tavsiye etmediğimiz yatırım türüdür. Şirket yatırımı 2 şekilde olabilir: <br/>
              <strong>50.000 Euro</strong>: En fazla 50 çalışanı ve senelik cirosu 10 milyon Euro'dan az şirketler <br/>
              <strong>100.000 Euro</strong>: Diğer şirketler
              </p>
              <p><img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  Şirket yatırımı ucuz olsa da
              yatırımızın değer kazanması ve yatırımınızdan aylık veya senelik kâr elde etmeniz pratikte pek mümkün olmayabilir.
              Ayrıca, yatırımınızın karşılığı olarak aldığınız hisseleri birgün satmak istemeniz halinde, aldığınız bedelin
              çok altında ve hatta hiç alıcı olmazsa sıfır bedelle satmanız gerekebilir. Dahası, hissesini aldığınız şirket
              eğer iflas ederse alacağınız oturum kartı iptal edilecektir. Özetle, şirket yatırımı için ayırdığınız para size
              sadece oturum kartı verecek olup, o paranın geri dönüşünün ve kârının olmayabileceğini gözönünde bulundurmanızı 
              tavsiye ederiz.</p>
              <p>Bir şirkete oturum izni amacıyla en fazla 10 yabancı başvurabilir.</p>
            <h3>3. Faizsiz Devlet Tahvili</h3>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Minimum yatırım 250.000 + Harç 38.000 
              + Danışmalığımız 15.000 = Toplam 303.000</p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/> Bu yatırım türü için Letonya'da 
              banka hesabı açmanız gerekecek olup, Ukrayna'daki savaşın başlangıcından
               bu yana yabancıların banka hesabı açması oldukça zorlaşmıştır. Bu yüzden bu yatırım türü malesef halihazırda 
               (2025 yılı itibariyle) kullanılamamaktadır.
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Faizsiz devlet tahvillerine yapacağınız
              yatırım sayesinde oturum alabilirsiniz. Gayrımenkul ve Şirket yatırımlarına göre daha kolay, 
              banka mevduatı yatırımına göre daha garanti bir opsiyon olarak görülebilir. 
              </p>
              <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Faizsiz devlet tahvillerinin faiz geliri
              olmasa da tahvillerin alış fiyatı ile tahvil süresi sonundaki nominal fiyatı arasındaki farktan kâr elde edilebilir.
              Örnek olarak: <br/> <br/>
              Alış fiyatı: 900 <br/>
              Nominal fiyat: 1000 <br/>
              Kar: 100 <br/> <br/>
              Müşteri alış fiyatından tahvili alır. Devlet de tahvil süresi sonunda nominal fiyattan tahvili geri alır. 
              Nominal fiyat ile alış fiyatı arasındaki farktan elde edilen kâr, genelde banka mevduatı faizinden elde edilen 
              kârdan biraz daha yüksektir.  
              </p>   
            <h3>4. Banka Mevduatı</h3>
              <p><img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  Minimum yatırım 280.000 + Harç 25.000 
              + Danışmalığımız 15.000 = Toplam 320.000</p>
              <p><img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/> Bu yatırım türü için Letonya'da
               banka hesabı açmanız gerekecek olup, Ukrayna'daki savaşın başlangıcından
               bu yana yabancıların banka hesabı açması oldukça zorlaşmıştır. Bu yüzden bu yatırım türü malesef halihazırda 
               (2025 yılı itibariyle) kullanılamamaktadır.
              </p>
              <p><img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  Banka mevduatı oldukça güvenli bir
              yatırım türü olup, ayrıca senelik %8'e varan faiz geliri de elde etmeniz mümkündür. 
              Yani 280.000 Euroluk yatırımınızı 5 sene sonra 390.000 Euro olarak geri alabilirsiniz.
              </p>
              <p><img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  Letonya'daki bankalara yapacağınız 
              mevduat transferinin en az 280.000 Euro olması gerekmektedir. Mevduatınız banka sisteminde 
              "ikincil yükümlülük" ("Subordinate liability") olarak kayıt edilecek olup, bunun manası olur da banka iflas 
              ederse bankadan birincil alacağı olan kişi ve kurumlar bittikten sonra sıranın size gelmesidir. Bankanın 
              iflas etmesini düşük bir ihtimal olarak değerlendirirsek, bu detayın çok da önemli olmayabileceği düşünülebilir.</p> 
            <h2>Gerekli Belgeler</h2>
            <div className="list-type5">
              <ol>
              
                <li>Pasaport</li>
                <li>Başvuru sahibinin Letonya'da yaşayacağı adres</li>
                <li>Sağlık sigortası</li>
                <li>Fotoğraf</li>
                <li>Başvuru harçlarının ödendiğine ilişkin makbuzlar. Başvuru harçları genel 
                  olarak 100-500 Euro arasında değişir.
                  Başvurunuza aile üyeleriniz de dahilse, her aile üyesi için ayrı ayrı harç ödenir.
                   (Başvuru harçları ile Devlet harçları farklıdır. Devlet
                  harçları başvuru onaylandıktan sonra ödenir)</li>
                <li>Yatırım türüne göre düzenlenen belgeler: Tapu belgesi, devlet tahvil alımını gösterir 
                  belgeler, banka mevduatını gösterir belgeler, şirket yatırımını gösterir ticaret sicil kayıtları vb.</li>
                <li>Adli sicil kaydınız olmadığına dair belge. Türkiye'den alırsanız belgeyi Letonca'ya tercüme ettirmeniz
                  ve apostil yapmanız gerekecektir. Bunun yerine belgeyi Letonya'daki Riga Büyükelçiliğinden alabilirsiniz. 
                  Böylelikle apostil veya tercüme yapmanıza gerek kalmaz, üstelik ücretsiz.
                </li>
                <li>Yatırım meblağını nasıl kazandığınıza ilişkin belgeler. Şirket sahibiyseniz, şirketiniz bilanço, kâr
                  belgeleri vb gibi. Yada Türkiye'deki evinizi satıp, satış meblağını gösterebilirsiniz.
                </li>
                <li>Letonya'da hayat masraflarını karşılayacak kadar bankada paranız olduğunu gösterir belge. Gayrımenkul için
                  başvuru sahibi 2220, eşi 740, her bir çocuk 222 Euro. Diğer yatırımlar için başvuru sahibi 740, eşi 740, her
                  bir çocuk 222 Euro. Aylık olan bu meblağlar yıllık bazda çarpılarak toplam meblağ bulunur.
                </li>
                <li>Başvuruya eş ve çocuklar da dahilse, evlilik belgeleri ve doğum belgeleri gerekecektir. 
                </li>
                <li>İstenilen bütün belgelerin orijinallerinin, Letonca tercümelerinin ve fotokopilerinin sunulması
                  gerekmektedir. Devlet kurumlarımız tarafından verilen bazı belgelerin ayrıyeten apostilli olması gerekmektedir.
                </li>
                <li>Başvuru evraklarının hazırlanması konusunda uzman ekibimiz her türlü yardımı ve kolaylığı sağlayacaktır.</li>
              </ol>
            </div>

            <h2>Süreç</h2>
            <p><strong>Birinci Ay</strong>: Müşterimizle iletişim, yatırım aracının seçilmesi, Müşterimizin danışmanlık 
            ücretini ödemesi, vize başvuru ve oturum kartı başvuruları 
            için evrak hazırlığı</p>
            <p><strong>İkinci Ay</strong>: Müşterimizin Letonya'ya gelmesi, yatırım türüne göre ziyaretlerin ve 
              görüşmelerin yapılması. Başvuru ile ilgili prosedürlerin ve belgelerin imzalanması, yatırım tutarının 
              ilgili hesaplara transferi, başvuru dosyasının PMLP'ye sunulması</p>
            <p><strong>Dördüncü Ay</strong>: Başvurunun PMLP tarafından değerlendirilmesi yaklaşık 450 Euro harç ödenmesi
              durumunda 5 gün, diğer durumlarda yaklaşık 50 gün sürebilmektedir. Genel olarak ise 30 günde başvuru
              sonuçlandırılmaktadır.
               Başvuru olumlu sonuçlandığında, yatırım için ödenmesi gereken devlet harçları da ilgili hesaplara
              transfer edilir. Müşterimiz tekrar Letonya'ya gelir ve hayırlı olması dileklerimizle oturum 
              kartını elden teslim alır.</p>
            <p>Süreç en az 4 ay sürmekte olup, bazı durumlarda başvuru sahibinden
              ilave evrak ve bilgi istenebilmekte, bu yüzden süreç 10 ay bile sürebilmektedir. Uzmanlarımız bu sürecin 
              en hızlı ve en rahat şekilde bitmesi için sürecin en başından en sonuna kadar sizlerin yanında olacaktır. </p>
              
          </div>

          <div className='bottomCompanyLinks bottomCompanyLinks2'>
              <br/>
              Daha detaylı bilgi için:
                <li>
                  <a href='https://www.pmlp.gov.lv/en/real-estate-owner-01072016'>
                    Letonya Göç İdaresi Kurumu (Pilsonības un migrācijas lietu pārvalde PMLP)
                  </a>
                </li>

                <li>
                  <a href='https://www.vid.gov.lv/en'>
                    Devlet Gelir İdaresi (Valsts ieņēmumu dienests VID)
                  </a>
                </li>
                <li>
                  <a href='https://www.liaa.gov.lv/en/invest-latvia'>
                    Letonya Yatırım ve Kalkınma Ajansı (Latvijas Investīciju un attīstības aģentūra LIAA)
                  </a>
                </li>
                <li>
                  <a href='https://lawyerslatvia.com/latvia-citizenship-by-investment/'>
                    Lawyers Latvia Kurumsal Hizmetler Firması
                  </a>
                </li>
                <li>
                  <a href='https://immigrantinvest.com/blog/latvia-residence-permit-by-investment-en/'>
                    Immigrant Invest Kurumsal Hizmetler Firması
                  </a>
                </li>
                <li>
                  <a href='https://passports.io/'>
                    Passports.io Kurumsal Hizmetler Firması
                  </a>
                </li>
                <li>
                  <a href='https://www.goldenvisas.com/latvia'>
                    La Vida Kurumsal Hizmetler Firması
                  </a>
                </li>
                <li>
                  <a href='https://www.residency-bond.eu/latvia-bank.html'>
                    RCP Kurumsal Hizmetler Firması
                  </a>
                </li>
                <li>
                  <a href='https://www.henleyglobal.com/'>
                    Henley Global Kurumsal Hizmetler Firması
                  </a>
                </li>
            </div>
          
            <div> <br/><br/><br/><br/><br/><br/><br/> </div>
            </div>
            <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomResidency