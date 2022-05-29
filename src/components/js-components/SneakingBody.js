import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import Example6 from '../images/example6.png'
import Example7 from '../images/example7.png'
import Example8 from '../images/example8.png'
import Example9 from '../images/example9.png'

function SneakingBody() {
    return (

        <div id='sides'>
            <h1 className='BodyH1'>Kategorija - sėlinimas</h1>
            <div className='BodyText1'>
                <text>
                    Apgaulinų šablonų kategorija - sėlinimas (angl. Sneaking).
                    Jos tikslas – įvairiais būdais bandyti paslėpti,
                    užmaskuoti ar atidėti priėjimą prie informacijos,
                    kuri vartotojui yra aktuali.
                    Šiai kategorijai priklauso tokie apgaulingų šablonų tipai,
                    kurie verčia vartotojus atlikti veiksmus,
                    apie kuriuos jeigu būtų tiksliai žinoję,
                    nebūtų sąmoningai atlikę.
                    Tai vieni iš populiariausių tipų visuose apgaulinguose šablonuose.
                </text>
            </div>
            <div className='BodyText2'>
                <text>
                    Šiai kategorijai priklauso 4 pagrindiniai tipai: <br></br>
                    Priverstinis tęstinumas (angl. Forced Continuity);<br></br>
                    Įlindimas į krepšelį (angl. Sneak into Basket);<br></br>
                    Apgaulė (angl. Bait and Switch);<br></br>
                    Paslėptos išlaidos (angl. Hidden Costs).<br></br>
                </text>
            </div>
            <div id='leftside'>
                <h1 className='obstructionTypesH1'>Tipas - Priverstinis tęstinumas</h1>
                <div className='obstructionTexts'>
                    <text>
                        Tai toks apgaulingų šablonų tipas,
                        kurio pagrindinis tikslas yra ir
                        toliau versti vartotoją mokėti už paslaugas be jokio perspėjimo.
                        Su šiuo tipu yra susidurę daugelis vartotojų, pavyzdžiui,
                        išbando paslaugą vienam mėnesiui,
                        tačiau nesuprasdami pratęsia paslaugą ir toliau moka už ją pinigus.
                    </text>
                </div>

                <div>
                    <h1 className='example1'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example6} alt='example6' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,Audiobooks” paslaugos pasiūlymas su nemokama bandomąja versija </h1>
                </div>

                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Pavyzdys rodo,
                        kaip pirkėjas yra suviliojamas paslaugos su bandomąja versija,
                        tačiau jeigu po 30 dienų pamirš nutraukti paslaugas,
                        yra galimybė, kad paslaugos bus pratęstos,
                        bet tik nuskaičiavus pinigus iš kreditinės kortelės.
                    </text>
                </div>


                <h1 className='obstructionTypesH1'>Tipas – Apgaulė</h1>
                <div className='obstructionTexts'>
                    <text>
                        Tai toks šablonas,
                        kurio metu tikimės gauti norimą rezultatą atlikę tam tikrą veiksmą,
                        tačiau gauname visai kitokį, atvirkščią rezultatą.
                    </text>
                </div>

                <div>
                    <h1 className='example1'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example8} alt='example8' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,Microsoft” kompanijos operacinės sistemos atnaujinimas</h1>
                </div>

                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Garsiai pasaulyje nuskambėjęs pavyzdys su apgaulės apgaulingu šablonu įvyko 2016 metais,
                        kuomet ,,Microsoft” kompanija išleido naujos operacinės sistemos atnaujinimą,
                        tačiau žmonės nenorėję sutikti su juo
                        bei spausdami ženkliuką ,,X“ gavo visai atvirkščią rezultatą – sutikimą su atnaujinimu.
                    </text>
                </div>

            </div>

            <div id='middleside'>
            </div>

            <div id='rightside'>
                <h1 className='obstructionTypesH1'>Tipas – Įlindimas į krepšelį</h1>
                <div className='obstructionTexts'>
                    <text>Šio apgaulingo šablono pagrindinis
                        tikslas – pridėti papildomų prekių
                        į vartotojo pirkinių krepšelį be jo
                        sutikimo tikėdamiesi, kad pirkėjui prireiks
                        pridėtos prekės. Kartais vartotojas gali ir nepamatyti,
                        jog į pirkinių krepšelį prisidėjo prekė,
                        ypač jeigu prekių yra daugiau.
                    </text>
                </div>
                <div>
                    <h1 className='example2'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example7} alt='example7' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,SportsDirectUK” papildoma prekė pirkinių krepšelyje</h1>
                </div>

                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Nors pavyzdys yra iš 2014 metų, tačiau vis tiek aktualus.
                        Naudojantis elektroninėmis parduotuvės gali būti ir tokių atvejų,
                        kai apgaulingų šablonų kūrėjas tyčia įdeda kažkokią prekę į pirkinių krepšelį
                        naudotojui nežinant, o tokiu būdu tikimasi dviejų dalykų: kad žmogus pirkdamas paprasčiausiai
                        nenorimos prekės nepamatys, arba kaip tik užsimanys.
                    </text>
                </div>

                <h1 className='obstructionTypesH1'>Tipas – Paslėptos išlaidos</h1>
                <div className='obstructionTexts'>
                    <text>Šio tipo pagrindinė savybė – suteikti vėlyvą informaciją apie didesnes išlaidas nei buvo manyta.
                        Vartotojo sąsajos yra sukurtos taip,
                        kad dažnai reklamuojamai prekei ar paslaugai yra nurodyta viena kaina,
                        tačiau apmokant pirkinių krepšelį apmokama suma padidėja dėl įvairių priežasčių.
                    </text>
                </div>
                <div>
                    <h1 className='example2'>Pavyzdys:</h1>
                </div>
                <div>
                    <img src={Example9} alt='example9' />
                </div>
                <div>
                    <h1 className='exampleExplanation1'>,,ProFlowers” kompanijos pirkinių krepšelio išlaidos </h1>
                </div>

                <div>
                    <h1 className='example1'>Paaiškinimas:</h1>
                </div>
                <div className='obstructionTexts2'>
                    <text>Pavaizduota situacija, kai perkant gėlių puokstę galutinė užsakymo kaina padidėja dėl pristatymo paslaugos,
                        tokiu būdu tikimasi, kad pirkėjas nepamatys pakitusios kainos
                        ar vis tiek nuspręs tęsti apmokėjimą.
                    </text>
                </div>


            </div>

        </div>
    )
}

export default SneakingBody