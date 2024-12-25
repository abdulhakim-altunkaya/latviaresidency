import React from 'react';
import {useNavigate} from "react-router-dom";

function TopTitle() {
  
  const navigate = useNavigate();

  return (
    <div className='AreaTopTitle'>
      <span onClick={ () => navigate("/")} className='titleSpan'>Letonya Oturum - Riga Danışmanlık</span> &nbsp;&nbsp;
      <span><img src='/iconLV.png' alt='Latvia Flag'/></span> &nbsp;&nbsp;
      <span><img src='/iconTR.png' alt='Turkey Flag'/></span>
    </div>
  )
}

export default TopTitle