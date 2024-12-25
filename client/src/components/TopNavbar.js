import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopNavbar() {
  const navigate = useNavigate();
  return (
    <div className='AreaTopNavbar'>
      <span onClick={() => navigate("/yatirim-ikamet")}>Oturum İzni-Yatırım</span>
      <span onClick={() => navigate("/diger-hizmetler")}>Diğer Hizmetler</span>
      <span onClick={() => navigate("/fiyatlar")}>Ücretlerimiz</span>
      <span onClick={() => navigate("/sorular")}>SSS</span>
      <span onClick={() => navigate("/iletisim")}>İletişim</span>
    </div>
  )
}

export default TopNavbar