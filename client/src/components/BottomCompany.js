import React from 'react';
import "../styles/bottomCompany.css";

function BottomCompany() {
  return (
    <div className='bottomCompanyMainArea'>
        <div className='bottomCompanyHeader'>
          <h1>ŞİRKET KURULUMU</h1>
        </div>
        <div>

          <h3>Şirket Türleri</h3>
          <div>
            <table className='companyTypesTable'>
              <tr>
                <th></th>
                <th>Limited Şirket (Standart Sermaye)</th>
                <th>Limited Şirket (Küçük Sermaye)</th>
                <th>Anomim Şirket</th>
                <th>Şahıs Şirketi</th>
              </tr>
              <tr>
                <td>Letonca isim</td>
                <td>Sabiedrība ar ierobežotu atbildību SIA</td>
                <td>Mazkapitāla SIA</td>
                <td>Akciju sabiedrība AS</td>
                <td>Individuālais komersants IK</td>
              </tr>
              <tr>
                <td>Minimum Sermaye Tutaru</td>
                <td>2800 Euro</td>
                <td>1-2799 Euro</td>
                <td>25000</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Oturum Hakkı</td>
                <td>Verir</td>
                <td>Vermez</td>
                <td>Verir</td>
                <td>Vermez</td>
              </tr>
              <tr>
                <td>Kurucu Sayısı</td>
                <td>Birden çok</td>
                <td>1-5 arası</td>
                <td>Birden çok</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Kurucu Tipi</td>
                <td>Gerçek ve/veya Tüzel</td>
                <td>Sadece Gerçek</td>
                <td>Gerçek ve/veya Tüzel</td>
                <td>Sadece Gerçek</td>
              </tr>
            </table>
          </div>

          <h3>Limited Şirket ("Sabiedrība ar ierobežotu atbildību (SIA)")</h3>
          <div>
            <p>Limited Şirket Letonya'da popüler ve kurulması kolay bir şirket türüdür.
              Limited Şirketler kendi içinde ikiye ayrılır: Standart sermayeli (minimum sermaye 2800 Euro) ve 
              Küçük sermayeli (1 ila 2799 Euro arası).
            </p>
            <p>Standart sermayeli Limited şirketler, bir veya birden çok gerçek veya tüzel kişiler tarafından kurulabilir.
              Küçük sermayeli Limited şirketler başka bir Küçük sermayeli Limited şirkette hissedar olmayan maksimum 5 kişi 
              tarafından kurulabilir. İleride oturum izni almak isteyen vatandaşlarımızın standart sermayeli Limited şirket
              kurması gerekmektedir.
            </p>
            <p>Limited Şirket kurucuları şirket kurulduktan sonra şirket hissedarı olurlar. Şirket kurucusu/hissedarı olmak 
              için Letonya vatandaşı olma veya Letonya'da ikamet etme şartı yoktur. Limited Şirkete verilecek adın Letonya'da
              başka bir şirket adıyla veya marka ismiyle aynı olmaması gerekmektedir.
            </p>
            <p>Limited Şirket Ticaret Siciline kaydedildiği anda vergi mükellefi de olur. Limited Şirketini için KDV numarasını
              kayıt işlemleri yapılırken alınabilir.
            </p>
            <p>Limited şirket kurulumu için Letonya'yı ziyaret edebilir, süreci yakından takip edebilir ve ileride çok
              işinize yarayacak elektronik imzanızı da alabilirsiniz.
            </p>
            <p><strong>Süreç:</strong></p>
            <div className='processTable'>
              <div className='processTableRows'>
                <span className='processTableBox'>Müşterimizin bilgi ve belgeleri alınır.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Müşterimiz şirketimize vekaletname verir.</span>
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
                <span className='processTableBox'>Opsiyonel: Müşterimiz Letonya'ya gelip asıl banka hesabı 
                  başvurusu yapabilir.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Müşterimize kaşeleri ve şirket belgeleri teslim edilir.</span>
              </div>
            </div>

            
              <ol>
                <li></li>
              </ol>
          </div> 
          
        </div>
    </div>
  )
}

export default BottomCompany