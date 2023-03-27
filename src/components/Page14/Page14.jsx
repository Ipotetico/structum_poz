import React from 'react'
import '../Page01/Page01.scss'

const text = "Skrócona informacja o leku: Nazwa produktu leczniczego: STRUCTUM, 500 mg, kapsułki Skład: 1 kapsułka zawiera 500 mg sodu chondroityny siarczanu, 7,5 mg etanolu i 54,6 mg sodu. Pełny wykaz substancji pomocniczych, patrz ChPL. Wskazania do stosowania: Leczenie uzupełniające objawów choroby zwyrodnieniowej stawów. Dawkowanie i sposób podawania: nie ma dowodów naukowych na pozytywne działanie siarczanu chondroityny u dzieci i młodzieży w wieku 0-18 lat. Lek należy stosować wyłącznie u dorosłych (>18 lat). Zwykle stosuje się 1 kapsułkę 500 mg dwa razy na dobę (1 g/dobę). Do stosowania doustnego. Kapsułki połykać w całości, popijając szklanką wody. Przeciwwskazania: Nadwrażliwość na substancję czynną lub którąkolwiek substancję pomocniczą. Specjalne ostrzeżenia i środki ostrożności: Lek zawiera 54,6 mg sodu w każdej kapsułce, co odpowiada 3% zalecanej przez WHO maksymalnej 2 g dobowej dawki sodu u dorosłych. Ten produkt leczniczy zawiera 7,5 mg alkoholu (etanolu) w każdej kapsułce, co jest równoważne z 0,11 mg/kg. Ilość alkoholu w jednej kapsułce jest równoważna mniej niż 1 ml piwa lub 1 ml wina..  Działania niepożądane: Działania niepożądane odnotowane w 7 badaniach klinicznych obejmujących 2244 pacjentów (w tym 1154 stosowało Structum)występowały z następującą częstością: często (≥1/100; <1/10); niezbyt często (≥1/1000; <1/100), rzadko (≥1/10000). Często: zawroty głowy, biegunka, ból brzucha, nudności. Niezbyt często: pokrzywka, wysypka, świąd, obrzęk twarzy. Rzadko: wymioty, obrzęk naczynioruchowy, rumień. Zgłaszanie podejrzewanych działań niepożądanych:  Działania niepożądane należy zgłaszać za pośrednictwem Departamentu Monitorowania Niepożądanych Działań Produktów Leczniczych Urzędu Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych, Al. Jerozolimskie 181C, 02-222 Warszawa, tel.: +48 22 49 21 301, fax: +48 22 49 21 309, strona internetowa: https://smz.ezdrowie.gov.pl. Działania niepożądane można również zgłaszać podmiotowi odpowiedzialnemu. Podmiot odpowiedzialny: Pierre Fabre Medicament,  Les Cauquillous, 81500 Lavaur, Francja. Pozwolenie URPL nr: 10822 Data aktualnej ChPL: 01/2022. Kategoria dostępności: Lek wydawany z przepisu lekarza - Rp.  Szczegółowe informacje dostępne na życzenie: Pierre Fabre Medicament Polska Sp. z o.o.; ul. Belwederska 20/22; 00-762 Warszawa; tel.: 22 559 63 00, fax: 22 559 63 59, e-mail: office@pierre-fabre.pl Przed zastosowaniem leku należy zapoznać się z pełną treścią Charakterystyki Produktu Leczniczego. Materiał skierowany do osób uprawnionych do wystawiania recept lub osób prowadzących obrót produktami leczniczymi."

const Page14 = () => {
  return (
<>
<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
        <p className="warning two">PFM/48/2023</p>
<p className="notes page02"></p>
</div>

    {/* <img src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" /> */}


    <div className="page__container">
    </div>

    <div className="central__container page05">
<p>{text}</p>
    </div>

    
</>
  )
}

export default Page14