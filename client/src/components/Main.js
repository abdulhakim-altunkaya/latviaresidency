import React from 'react';
import TopArea from "./TopArea";


function Main() {
  return (
    <div className='mainArea'>
        <TopArea />
        <Navbar />
        <ContentArea />
        <Footer />
    </div>
  )
}

export default Main