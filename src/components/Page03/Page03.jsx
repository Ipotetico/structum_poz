import React, {useState} from 'react'
import '../Page01/Page01.scss'

const Page03 = ({setPage}) => {

    const [open, setOpen] = useState(false)
  return (
<>

    <img onClick={()=>setPage(4)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">1. Choroba zwyrodnieniowa stawów – niepokojące symptomy | Reumatologia - mp.pl 2. Romanowski W. Jak skutecznie leczyć w chorobie zwyrodnieniowej stawów.  Od ciągłości przyjmowania leków zależy  efektywność terapii. Puls Medycyny  </p>
</div>
    <div className="page__container">
<h1>Choroba zwyrodnieniowa stawów<span> stanowi</span> globalny problem <span>medyczny o narastającej skali. <sup>(1)</sup></span> </h1>
    </div>



    <div className="central__container page03">


    <div onClick={() => setOpen( !open)}lick={() => !open} className={!open ? "circle" : "circle open"}>
<h1>
 <span>Pierwszy krok kierowany do gabinetu <br /> </span>lekarza POZ
 </h1>
    </div>
    
     {/* ########### */}

     <div onClick={() => setOpen( !open)}  className="button page03">
      <h1>
ChZS <span> należy do </span>
najczęstszych 
schorzeń <span>
u osób <br /> po 60. 
roku życia.<sup>(2)</sup></span>
      </h1>
     </div>

          {/* ########### */}

     <div onClick={() => setOpen( !open)} className="button page03">
       <h1>
<span>W Polsce na</span> ChZS <span>
choruje blisko</span> <br /> 2 miliony osób.<sup>(1)</sup>
      </h1>
     </div>

          {/* ########### */}

     <div onClick={() => setOpen( !open)} className="button page03">
        <h1>Ograniczony dostęp <span>pacjentów do lekarzy</span> <br /> specjalistów.<sup>(2)</sup>
      </h1>
     </div>

          {/* ########### */}

     <div onClick={() => setOpen( !open)} className="button page03">
    <h1>
<span>ChZS jest jedną <br />
z </span> najczęstszych 
przyczyn niepełnosprawności ruchowej.<sup>(1)</sup>
      </h1>
     </div>


    </div>

    
</>
  )
}

export default Page03