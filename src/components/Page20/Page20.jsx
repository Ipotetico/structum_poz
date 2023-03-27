import React from 'react'
import '../Page01/Page01.scss'

const Page20 = ({setPage}) => {

  return (
<>

    <img onClick={()=>setPage(21)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">1. Bruyere O, Honvo G, Veronese N et al.: An updated algorithm recommendation for the management of knee osteoarthritis from the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis and Musculoskeletal Diseases (ESCEO). Seminars in Arthritis and Rheumatism 2019; 49: 337-350 2. Kloppenburg M, Kroon FPB, Blanco FJ et al.: 2018 update of the EULAR recommendations for the management of hand osteoarthritis. Ann Rheum Dis 2019; 78: 16-24 * Europejskie Towarzystwo  Klinicznych i Ekonomicznych Aspektów Osteoporozy,  Chzs i Chorób Mięśniowo-Szkieletowych </p>
</div>
    <div className="page__container">
<h1>Spełnia europejskie standardy<span> <br /> leczenia ChZS małych i dużych stawów.<sup>(1,2)</sup> </span> </h1>
    </div>



    <div className="central__container page06">
    
<div className="container">
    <img src={process.env.PUBLIC_URL + `/images/piguly.png`} alt="" />
</div>

<div className="container page12">
    <h1 style={{color: 'white', fontWeight:400, textAlign:'left', fontSize:'calc(18px + 0.5vw)'}}>
Suplementy diety nie leczą, nie są 
alternatywą dla leków, <span style={{color: '#ffca00'}}> nie podlegają badaniom klinicznym</span> zgodnym 
z EBM*.
<br />
<br />
Stosowane niewłaściwie, wraz 
z niektórymi lekami, <span style={{color: '#ffca00'}}>mogą 
powodować ciężkie działania 
niepożądane.</span> Ryzyko interakcji 
z lekami nie jest oceniane.
<br />
<br />
Brak badań parametrów farmakokinetycznych, nawet jeśli dawka SYSADOA jest tożsama w produkcie leczniczym i suplemencie diety, to<span style={{color: '#ffca00'}}> nie wiadomo, jaka ilość substancji czynnej zostanie wchłonięta (jaka jest biodostępność).</span>
    </h1>
</div>
</div>
</>
  )
}

export default Page20