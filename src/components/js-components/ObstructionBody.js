import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import Example1 from '../images/example1.png'
import Example2 from '../images/example2.png'
import Example3 from '../images/example3.png'
import Example4 from '../images/example4.png'

function ObstructionBody() {
    return (

        <div id='sides'>
            <h1 className='BodyH1'>Kategorija - kliūtis</h1>
            <div className='BodyText1'>
                <text>
                    Apgaulingų šablonų kategorija - kliūtis (angl. Obstruction).
                    Šiai kategorijai priklausančių tipų tikslas yra apsunkinti vartotojui atlikti norimus veiksmus.
                    Šių sąsajų kūrėjai siekia manipuliuoti vartotoju, kad jis priimtų tokius veiksmus,
                    kurie atneštų naudos būtent jiems,
                    nors pats vartotojas to nesuprasdamas ir nenorėdamas pakliūva būtent į tokius spąstus.
                </text>
            </div>
            <div className='BodyText2'>
                <text>
                    Šiai kategorijai priklauso 2 pagrindiniai tipai: <br></br>
                    Roach motelis (angl. Roach Motel);<br></br>
                    Kainų palyginimo prevencija (angl. Price Comparison Prevention). <br></br>
                </text>
            </div>
            <div id='leftside'>
                <h1 className='obstructionTypesH1'>Tipas - Roach motelis</h1>
                <div className='obstructionTexts'>
                    <text>Šis tipas pasižymi tuo, kad į tam tikras situacijas yra lengva pakliūti,
                        tačiau iš jų išeiti ypač sudėtinga. Daugelis internete esančių svetainių,
                        elektroninių parduotuvių, programėlių leidžia vartotojui pakankamai lengvai prisiregistruoti prie jų sistemos,
                        nusipirkti tam tikras paslaugas bei naudotis jų suteiktomis funkcijomis,
                        tačiau kai vartotojas nusprendžia atsisakyti jam suteiktų paslaugų, neretai tenka suprasti,
                        kad pakliuvo į Roach motelio apgaulingo šablono pinkles.
                    </text>
                </div>

                <div>
                    <h1 className='example1'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example1} alt='example1' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,Amazon” svetainės lengvas paskyros priregistravimas</h1>
                </div>
                <div>
                    <img src={Example2} alt='example2' />
                </div>
                <div>
                    <h1 className='exampleExplanation2'>,,Amazon” svetainės paskyros išregistravimo ieškojimas, nėra lengvo kelio</h1>
                </div>
                <div>
                    <img src={Example3} alt='example3' />
                </div>
                <div>
                    <h1 className='exampleExplanation3'>,,Amazon” paskyros išregistravimas yra įmanomas tik pateikiant prašymą.</h1>
                </div>
                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Puikus pavyzdys yra elektroninė parduotuvė - ,,Amazon“.
                        Norint prisiregistruoti prie šios svetainės,
                        užtenka įeiti į ,,Amazon“ puslapį, rasti registruotis (angl. sign in) skiltį bei sekti nurodymus.
                        Tačiau sunkumai iškyla tuomet, kai vartotojas nori deaktyvuoti savo paskyrą ar ją ištrinti.
                        Norint tai padaryti, greičiausias būdas būtų pasinaudoti ,,Google“ paieška,
                        o pačioje ,,Amazon“ svetainėje tiesiogiai ir greitai to padaryti nepavyksta.
                        Dviejuose apatiniuose paveikslėliuose parodyta, kaip galima išregistruoti paskyrą,
                        tačiau vartotojui nežinant šių žingsnių, jis gali užtrukti daug laiko ieškant jų,
                        palyginus su paskyros registravimu.
                    </text>
                </div>
            </div>


            <div id='middlesideOb'>
            </div>

            <div id='rightside'>
                <h1 className='obstructionTypesH1'>Tipas - Kainų palyginimo prevencija</h1>
                <div className='obstructionTexts'>
                    <text>Šis šablonas specifiškai sunkina prekių kainų palyginimą.
                        Norint apsipirkti internetu, dažnai vartotojas ieško optimaliausios kainos prekei,
                        paslaugai įsigyti, tačiau kai kurios elektroninės parduotuvės,
                        svetainės apsunkina prekių kainos įvertinimo procesą.
                    </text>
                </div>
                <div>
                    <h1 className='example2'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example4} alt='example4' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,LinkedIn” paslaugos aprašas - nėra konkrečiai apibūdintos planų kainos.</h1>
                </div>
                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>LinkedIn 2019 metais buvo galima pasirinkti iš 4 planų variantų,
                        duoti jų aprašymai bei kokias paslaugas galima gauti, tačiau nutylimas kainos faktorius,
                        o tokiu būdu vartotojas gali apsirikti rinkdamasis paslaugą.
                        Tai ne tik sugaišta vartotojui laiko,
                        tačiau verčia tarsi lysti gilyn ieškant informacijos,
                        ko sąsajos kūrėjai ir tikisi.
                    </text>
                </div>
            </div>
        </div>
    )
}

export default ObstructionBody