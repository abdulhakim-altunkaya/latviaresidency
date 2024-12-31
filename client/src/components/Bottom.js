import React from 'react';
import {Routes, Route} from "react-router-dom";
import BottomContact from "./BottomContact";
import BottomPrices from "./BottomPrices";
import BottomOther from "./BottomOther";
import BottomSSS from "./BottomSSS";
import BottomResidency from "./BottomResidency";
import BottomHome from "./BottomHome";
import BottomCompany from "./BottomCompany";
import "../styles/infosheets.css";

function Bottom() {
  return (
    <div className='AreaBottom'>
      <Routes>
        <Route path="/iletisim" element={<BottomContact/>} />
        <Route path="/diger-hizmetler" element={<BottomOther/>} />
        <Route path="/fiyatlar" element={<BottomPrices/>} />
        <Route path="/yatirim-ikamet" element={<BottomResidency/>} />
        <Route path="/sorular" element={<BottomSSS/>} />
        <Route path="/sirket-firma-kurulus" element={<BottomCompany/>} />
        <Route path="*" element={<BottomHome/>} />
      </Routes>
    </div>
  )
}

export default Bottom;