import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import Example10 from '../images/example10.png'
import Example11 from '../images/example11.png'
import Example12 from '../images/example12.png'
import Example13 from '../images/example13.png'
import Example14 from '../images/example14.png'

function InterfaceInterferenceBody() {
    return (

        <div id='sides'>
            <h1 className='BodyH1'>Kategorija - sąsajos trukdžiai</h1>
            <div className='BodyText1'>
                <text>
                    Sąsajos trukdžiai (angl. Interface interference).
                    Ši kategorija pasižymi tuo, kad jai priklausantys tipai manipuliuoja vartotojų sąsaja tokiu būdu,
                    jog kai kurios funkcijos yra labiau pabrėžiamos nei kitos.
                    Šių tipų pagrindinė savybė yra naudotis neatidžiais vartotojais,
                    kurie iki galo neįsiskaito į klausimus, sutinka su įvairiomis sąlygomis,
                    reklamomis, nenorimų programų parsisiuntimais.
                </text>
            </div>
            <div className='BodyText2'>
                <text>
                    Šiai kategorijai priklauso 4 pagrindiniai tipai: <br></br>
                    Apgaulingi klausimai (angl. Trick questions);<br></br>
                    Užmaskuotos reklamos (angl. Disguised Ads);<br></br>
                    Nesutikimo gėda (angl. Confirmshaming);<br></br>
                    Neteisingas nukreipimas (angl. Misdirection).<br></br>
                </text>
            </div>
            <div id='leftside'>
                <h1 className='obstructionTypesH1'>Tipas - Apgaulingi klausimai </h1>
                <div className='obstructionTexts'>
                    <text>
                        Šis tipas pasižymi tuo,
                        kad net ir protingiems vartotojams sunku suprasti,
                        kaip jie turi pasiekti norimą tikslą.
                        Šio tipo vartotojų sąsajos pasižymi sunkiai
                        suprantamais klausimais, sąlygomis,
                        kurios klaidina nuolatinius vartotojus
                        bei priverčia sutikti su įvairiais veiksmais,
                        kurių vartotojas nenorėjo.
                    </text>
                </div>
                <div>
                    <h1 className='example1'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example10} alt='example10' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,Currys PC World” kompanijos pirkinių krepšelio vienas iš rezervavimo langų</h1>
                </div>

                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Pavyzdys, kuriame prieš rezervuojant prekes,
                        reikia sutikti su sąlygomis.
                        Viena sąlyga teigia, kad nesiųstų
                        informacijos apie produktus
                        iš naudojamos svetainės,
                        o kita sąlyga atvirkščiai – gauti informaciją
                        apie produktus ir pasiūlymus iš
                        trečiųjų šalių organizacijų.
                    </text>
                </div>
                <h1 className='obstructionTypesH1'>Tipas – Nesutikimo gėda</h1>
                <div className='obstructionTexts'>
                    <text>
                        Pagrindinė šio apgaulingo šablono idėja – vartotojo
                        sąsajos su priminimais,
                        kurie praneša,
                        kad jeigu bus atsisakyta tam tikrų paslaugų ar
                        prenumeratų,
                        vartotojas gali prarasti vertingų galimybių
                        sutaupyti pinigų. Šis tipas bando vartotojams
                        įsiūlyti savo paslaugas,
                        prekes pasitelkdamas įvairius pasiūlymus.
                    </text>
                </div>
                <div>
                    <h1 className='example1'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example12} alt='example12' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,FTD” kompanijos pasiūlymas</h1>
                </div>
                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Pavyzdys rodo elektroninės parduotuvės
                        pasiūlymą sutaupyti pinigų pirmam savo
                        pirkiniui įrašant elektroninį paštą
                        ir tokiu būdu gaunant vienkartinę nuolaidą.
                        Nors tai nėra pavojingas apgaulingas šablonas,
                        tačiau vis tiek bandoma manipuliuoti naudotoju
                        bei paveikti psichologiškai.
                    </text>
                </div>
            </div>

            <div id='middlesideII'>
            </div>

            <div id='rightside'>
                <h1 className='obstructionTypesH1'>Tipas – Užmaskuotos reklamos</h1>
                <div className='obstructionTexts'>
                    <text>Šio apgaulingo šablono pagrindinė savybė – užmaskuoti
                        reklamas, skelbimus taip,
                        kad jie atrodytų lyg interaktyvūs žaidimai,
                        atsisiuntimo mygtukas, ar kita svarbi sąveika,
                        kurios vartotojas ieško.
                        Šis tipas klaidina vartotojus paspausti ant svetainės dalių,
                        kurios nukelia į visiškai kitus reklaminius puslapius,
                        taip bandydamos privilioti vartotojus.
                    </text>
                </div>
                <div>
                    <h1 className='example2'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example11} alt='example11' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,CCleaner” kompanijos programos parsisiuntimo langas </h1>
                </div>
                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Pavyzdys iš 2019 metų rodo,
                        jog norint parsisiųsti norimą programą,
                        reikia atskirti tinkamą parsisiuntimo mygtuką
                        iš trijų galimų. Tai ne tik klaidina naudotoją,
                        bet ir priverčia gaišti laiką ieškant teisingos nuorodos.
                        Taip pat yra galimybė paspaudus ant neteisingos nuorodos
                        parsisiųsti kenksmingą programą.
                    </text>
                </div>

                <h1 className='obstructionTypesH1'>Tipas – Neteisingas nukreipimas</h1>
                <div className='obstructionTexts'>
                    <text>Šis dizainas tikslingai stengiasi sutelkti
                        vartotojo dėmesį į vieną dalyką,
                        kad atitrauktų dėmesį nuo kito.
                        Šių vartotojų sąsajų kūrėjai stengiasi,
                        kad vartotojas nepamatytų svarbios
                        informacijos tokiu būdu priversdami
                        vartotoją atlikti veiksmus,
                        kurių jis galbūt nenori ar pasirinkti paslaugas,
                        kurios jo nedomina.
                    </text>
                </div>
                <div>
                    <h1 className='example2'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example13} alt='example13' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,Jetstar” kompanijos automatinis parinkimas</h1>
                </div>
                <div>
                    <img src={Example14} alt='example14' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,Jetstar” kompanijos dėmesio nukreipimas</h1>
                </div>

                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Pavyzdyje galima matyti,
                        kad ,,Jetstar” kompanijos puslapyje
                        pasirenkant skrydžio vietas, jos
                        yra automatiškai parenkamos su tam tikru mokesčiu, o
                        nenorint tokios paslaugos - mažomis raidėmis vaizduojamas šio automatinio vietų parinkimo mokesčio atsisakymas, kurį pakankamai sudėtinga pastebėti.
                    </text>
                </div>
            </div>
        </div>
    )
}

export default InterfaceInterferenceBody