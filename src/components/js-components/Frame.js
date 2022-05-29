import React from 'react'
import '../css-components/Frame.css'

const Frame = ({ testID, TestoPavadinimas, Data, Rezultatas }) => {
    return (
        <center>
            <div className="div">

                <p>Testo numeris : {testID}. </p>

                <p>Testo pavadinimas : {TestoPavadinimas}</p>

                <p>Data : {Data}</p>

                <p>Rezultatas : {Rezultatas}</p>

            </div>
        </center>
    );

}

export default Frame