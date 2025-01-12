import React from 'react';
import "../styles/bottomCompany.css";
import Footer from "./Footer.js";

function BottomCompany() {
  return (
    <div className='bottomCompanyMainArea'>
        <div className='bottomCompanyHeader'>
          <h1>ŞİRKET KURULUMU</h1>
        </div>
        <div>

          <h3>Şirket Türleri</h3>
          <div>
            <p>Letonya'daki belli başlı şirket türleri aşağıda karşılaştırmalı olarak sunulmaktadır.</p>
            <table className='companyTypesTable'>
              <tr>
                <th></th>
                <th>Limited Şirket (Standart Sermaye)</th>
                <th>Limited Şirket (Küçük Sermaye)</th>
                <th>Anomim Şirket</th>
                <th>Şahıs Şirketi</th>
              </tr>
              <tr>
                <td><strong>Letonca isim</strong></td>
                <td>Sabiedrība ar ierobežotu atbildību SIA</td>
                <td>Mazkapitāla SIA</td>
                <td>Akciju sabiedrība AS</td>
                <td>Individuālais komersants IK</td>
              </tr>
              <tr>
                <td><strong>Minimum Sermaye Tutaru</strong></td>
                <td>2800 Euro</td>
                <td>1-2799 Euro</td>
                <td>25000</td>
                <td>-</td>
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

          
          <div className='bottomCompanyText'>
          <h3>Limited Şirket (Sabiedrība ar ierobežotu atbildību  SIA)</h3>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Limited Şirket Letonya'da popüler 
              ve kurulması kolay bir şirket türüdür.
              Limited Şirketler kendi içinde ikiye ayrılır: Standart sermayeli (minimum sermaye 2800 Euro) ve 
              Küçük sermayeli (1 ila 2799 Euro arası).
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Standart sermayeli Limited şirketler, 
              bir veya birden çok gerçek veya tüzel kişiler tarafından kurulabilir.
              Küçük sermayeli Limited şirketler başka bir Küçük sermayeli Limited şirkette hissedar olmayan maksimum 5 kişi 
              tarafından kurulabilir. İleride oturum izni almak isteyen vatandaşlarımızın standart sermayeli Limited şirket
              kurması gerekmektedir.
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Limited Şirket kurucuları şirket 
              kurulduktan sonra şirket hissedarı olurlar. Şirket kurucusu/hissedarı olmak 
              için Letonya vatandaşı olma veya Letonya'da ikamet etme şartı yoktur. Limited Şirkete verilecek adın Letonya'da
              başka bir şirket adıyla veya marka ismiyle aynı olmaması gerekmektedir. Kurucular şirketin yönetim kuruluna en 
              az bir kişiyi atarlar. Yönetim kurulu üyesi olmak için Letonya vatandaşı olma veya Letonya'da yaşama şartı yoktur.
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Limited Şirket Ticaret Siciline 
              kaydedildiği anda vergi mükellefi de olur. Limited Şirketini için KDV numarasını
              kayıt işlemleri yapılırken alınabilir.
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Limited şirket kurulumu için Letonya'yı 
              ziyaret edebilir, süreci yakından takip edebilir ve ileride çok
              işinize yarayacak elektronik imzanızı da alabilir ve şirketin geçici banka hesabını kalıcı banka hesabına 
              dönüştürebilirsiniz.
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Şirket kurulumu bitince, müşterimize 
              kaşelerini temsil ediyoruz. Müşterimiz arzu ederse, güvenilir muhasebeci ve
              personel bulması konusunda yardımcı da oluyoruz. Ayrıca, faaliyet ve yatırım konusunda net bir planı olmayan 
              müşterilerimize iş planı, iş fikirleri ve lisanslar konusunda da yardımcı olabiliriz.
            </p>
            
            <div className='processTable'>
              <div className='processTableRows'>
                <span className='processTableBox'>Müşterimizin bilgi ve belgeleri alınır.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Şirket belgeleri hazırlanır, müşteri tarafından imzalanır.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Şirket adresi belirlenir, başvuru dosyası hazırlanır.
                </span>
              </div>
              <div className='processTableRows processTableRowMiddle'>
                <span className='processTableBox'>Geçici banka hesabı açılır. Müşterimiz tarafından 
                şirket sermayesi transfer edilir.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Devlet Şirket Sicil Kurumu'na başvuru
                  dosyası sunulur (3 gün). </span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Sicil Kurumu şirketin kurulmasına onay verdikten sonra KDV 
                  numarası çıkarılır </span>
              </div>
              <div className='processTableRows'>
                <span className='processTableBox'>Opsiyonel: Müşterimiz Letonya'ya gelip e-imza başvurusu yapabilir.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Opsiyonel: Müşterimiz Letonya'ya gelip geçici hesabı normal banka hesabına 
                  dönüştürebilir.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Müşterimize kaşeleri ve şirket belgeleri teslim edilir.</span>
              </div>
            </div>
            <br/>
            <ol>
              <strong>Gerekli Belge ve Bilgiler:</strong>
              <li>Kurucuların geçerli pasaport bilgileri (Pasaportun önsayfasının taranmış hali)</li>
              <li>Kurucuların ikamet adresi bilgisi (E-devlet yerleşim yeri belgesi)</li>
              <li>Kurucuların temsilcilerinin bilgileri (Temsicileriniz olarak kendi
                kişisel bilgilerimizi Şirket Sicil Kurumu'na sunuyoruz)</li>
              <li>Yönetim Kurulu üyelerinin geçerli pasaport ve ikamet adresi bilgileri</li>
              <li>Şirketin sözleşmesi (Biz hazırlayacağız)</li>
              <li>Şirketin ana sermayesinin yatırıldığına dair banka belgesi (Biz hazırlayacağız)</li>
              <li>Şirketin adres bilgisi (Biz hazırlayacağız)</li>
              <li>Kurucu ve YK üyelerinin şart olmasa da Türkiye'den alacakları apostilli ve Letonca'ya tercümeli adli sicil belgesi
                veya Riga Büyükelçiliği Konsolosluğundan alacağınız apostilsiz ve Letonca adli sicil belgesi
              </li>
              <li>Kuruculardan biri tüzel kişilik ise (Türkiye'de kayıtlı bir şirket gibi), 
                <br/> - Şirket kuruluş belgesi (Ticaret Sicil Gazetesi)
                <br/> - Şirket adres bilgisi (Ticaret Kütük Kaydı)
                <br/> - Şirket iyi hal belgesi (Ticaret Sicil Memurlukları)
                <br/> - Şirket kuruluş sözleşmesi
                <br/> - İmza sirküleri
                <br/> - Faaliyet belgesi
              </li>
            </ol>
            <div className='bottomCompanyLinks'>
              <br/>
              <ul>
              Daha detaylı bilgi için:
                <li>
                  <a href='https://www.ur.gov.lv/en/register/company-or-merchant/limited-liability-company-sia/founding/registration-with-the-enterprise-register/'>
                    Şirket Sicil Kurumu (Latvijas Republikas Uzņēmumu reģistrs)
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
                  <a href='https://www.njordlaw.com/lv'>
                    Njord Letonya Kurumsal Hizmetler Firması
                  </a>
                </li>
                <li>
                  <a href='https://www.minioffice.lv/en/company-formation-latvia/how-to-open-company-latvia/'>
                    Minioffice Kurumsal Hizmetler Firması
                  </a>
                </li>
                <li>
                  <a href='https://gramatvedis24.lv/en/company-registration-in-latvia/'>
                    Grāmatvedis24 Kurumsal Hizmetler Firması
                  </a>
                </li>
              </ul>
            </div>
          </div> 
          <div> <br/><br/><br/><br/><br/><br/><br/> </div>
          <div className='footerArea'> <Footer /> </div>
        </div>
    </div>
  )
}

export default BottomCompany