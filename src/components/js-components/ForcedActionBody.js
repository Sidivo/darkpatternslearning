import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import Example15 from '../images/example15.png'
import Example16 from '../images/example16.png'
import Example17 from '../images/example17.png'

function ForcedActionBody() {
    return (

        <div id='sides'>
            <h1 className='BodyH1'>Kategorija - priverstinis veiksmas</h1>
            <div className='BodyText1'>
                <text>
                    Apgaulingų šablonų kategorija - priverstinis veiksmas (angl. Forced action).
                    Šios kategorijos priskirti tipai išsiskiria tuo,
                    kad reikalauja, jog vartotojas atliktų tam tikrus
                    veiksmus norint pasiekti arba toliau prieiti
                    prie tam tikro funkcionalumo.
                    Vartotojas norėdamas pasinaudoti
                    tam tikru funkcionalumu neretai yra
                    verčiamas atlikti tam tikrus veikmus, kurie gali kenkti jo privatumui.
                </text>
            </div>
            <div className='BodyText2'>
                <text>
                    Šiai kategorijai priklauso 2 pagrindiniai tipai: <br></br>
                    Zuckerinimas (angl. Privacy Zuckering);<br></br>
                    Klaidinantis žinučių siuntinėjimas draugams (angl. Friend Spam). <br></br>
                </text>
            </div>
            <div id='leftside'>
                <h1 className='obstructionTypesH1'>Tipas - Zuckerinimas</h1>
                <div className='obstructionTexts'>
                    <text>Tai tipas, kuris yra pavadintas socialinio tinklo
                        ,,Facebook“ įkūrėjo Mark‘o Zuckenberg‘o „garbei“.
                        Šis apgaulingas šablonas priverčia vartotojus
                        pasidalinti privačia informacija apie save daugiau,
                        negu sutiktų. Vartotojas, kuris naudojasi elektroninėmis paslaugomis,
                        socialiniais tinklais,
                        programėlėmis dažnai net nesusimąstydamas
                        ir iki galo neįsigilindamas sutinka su iškeltais
                        jų terminais ir sąlygomis, tokiu būdu duodamas
                        asmeninį leidimą šioms kompanijoms parduoti jų
                        sukauptą privačia informaciją, dalintis su kitomis
                        trečiosiomis šalimis.
                    </text>
                </div>

                <div>
                    <h1 className='example1'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example15} alt='example15' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,WhatsApp” kompanijos terminai ir sąlygos</h1>
                </div>
                <div>
                    <img src={Example16} alt='example16' />
                </div>
                <div>
                    <h1 className='exampleExplanation2'>,,WhatsApp” kompanijos terminai ir sąlygos apie privačia informaciją </h1>
                </div>
                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Pavyzdyje vaizduojamas 2016 metų populiarios programėlės ,,WhatsApp” terminų ir sąlygų langas,
                        kuriame nėra akivaizdžiai parašyta,
                        kaip bus naudojama sukaupta privati vartotojų informacija,
                        tačiau perskaičius sąlygas ir privatumo politiką galima matyti, kad duomenimis bus dalinamasi.
                    </text>
                </div>

            </div>

            <div id='middlesideFA'>
            </div>

            <div id='rightside'>
                <h1 className='obstructionTypesH1'>Tipas - Klaidinantis žinučių siuntinėjimas draugams</h1>
                <div className='obstructionTexts'>
                    <text>Šio apgaulingo šablono pagrindinis tikslas – prašyti
                        vartotojo elektroninio pašto ar socialinių tinklų
                        leidimo apsimetant, kad bus naudojama pageidaujamiems
                        rezultatams gauti, o iš tikrųjų bus naudojama
                        siųsti klaidingą informaciją vartotojo kontaktams
                        apsimetant juo pačiu. Vartotojas, kuris sutinka šiam
                        apgaulingui šablonui duoti leidimą prie jo susisiekimo
                        priemonių gali pakliūti į spąstus, juo bus naudojamasi
                        skleisti įvairias reklamas, klaidinančias žinias.
                    </text>
                </div>
                <div>
                    <h1 className='example2'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example17} alt='example17' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,LinkedIn” kompanijos pasiūlumas</h1>
                </div>

                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>2013 metų garsios kompanijos ,,LinkedIn“ naudojamo apgaulingo šablono pavyzdys.
                        Vartotojas suteikdamas savo elektroninio
                        pašto adresą duodavo galimybę siųsti laiškus.
                        2015 metais ,,LinkedIn” dėl šio apgaulingo šablono
                        tipo naudojimas buvo pripažintas nelegalus,
                        pralaimėjo bylą ir buvo priversti sumokėti 13 milijonų dolerių.
                    </text>
                </div>
            </div>
        </div>
    )
}

export default ForcedActionBody