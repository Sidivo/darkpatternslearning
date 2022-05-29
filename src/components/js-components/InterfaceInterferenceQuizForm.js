import React, { useReducer } from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useState } from 'react';
import { db } from '../../firebase';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function InterfaceInterferenceQuizForm() {

  const questions = [
    {
      questionText: 'Kokia pagrindinė apgaulingų šablonų sąsajos trukdžių kategorijos savybė?',
      answerOptions: [
        { answerText: 'Sugėdinti vartotoją', isCorrect: false },
        { answerText: 'Pertraukti vartotojo veiksmus', isCorrect: false },
        { answerText: 'Nukreipti dėmesį', isCorrect: false },
        { answerText: 'Pabrėžti vienas funkcijas labiau už kitas', isCorrect: true },
      ],
    },

    {
      questionText: 'Koks yra pagrindinis apgaulingų šablonų tipo - apgaulingi šablonai tikslas?',
      answerOptions: [
        { answerText: 'Nukreipti vartotoją', isCorrect: false },
        { answerText: 'Įsiūlyti vartotojui prekę/paslaugą', isCorrect: false },
        { answerText: 'Suklaidinti vartotoją', isCorrect: true },
        { answerText: 'Išgauti vartotojo informaciją', isCorrect: false },
      ],
    },
    {
      questionText: 'Kokio tipo pagrindinė savybė - nukreipti vartotojo dėmesį?',
      answerOptions: [
        { answerText: 'Neteisingas nukreipimas', isCorrect: true },
        { answerText: 'Užmaskuotos reklamos', isCorrect: false },
        { answerText: 'Apgaulingi klausimai', isCorrect: true },
        { answerText: 'Nesutikimo gėda', isCorrect: false },

      ],
    },
    {
      questionText: 'Kiek pagrindinių tipų priklauso apgaulingų šablonų sąsajos trukdžių kategorijai?',
      answerOptions: [
        { answerText: '5', isCorrect: false },
        { answerText: '7', isCorrect: false },
        { answerText: '10', isCorrect: false },
        { answerText: '4', isCorrect: true },
      ],
    },

    {
      questionText: 'Kuris tipas yra mažiausiai pavojingas?',
      answerOptions: [
        { answerText: 'Nesutikimo gėda', isCorrect: true },
        { answerText: 'Apgaulingi klausimai', isCorrect: false },
        { answerText: 'Užmaskuotos reklamos', isCorrect: false },
        { answerText: 'Neteisingas nukreipimas', isCorrect: false },

      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);


  const auth = getAuth();
  const user = auth.currentUser;

  let navigate = useNavigate()

  function handleClickGoToTestHistory() {
    navigate("/account")
  }

  const saveHistory = (user) => {
    const CurrentDate = (new Date().toLocaleString() + "")
    db
      .collection("UserHistory")
      .doc(user.uid)
      .collection("Results")
      .add({ TestoPavadinimas: "Sąsajos trukdžių kategorijos testas", Data: CurrentDate, Rezultatas: score + "/5 teisingi atsakymai" })
  };

  const saveHistory2 = (user) => {
    const CurrentDate = (new Date().toLocaleString() + "")
    db
      .collection("UserHistory")
      .doc(user.uid)
      .collection("Results")
      .add({ TestoPavadinimas: "Sąsajos trukdžių kategorijos testas", Data: CurrentDate, Rezultatas: score + 1 + "/5 teisingi atsakymai" })
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion === questions.length) {
      if (isCorrect) {
        saveHistory2(user);
        setShowScore(true);
      }
      else {
        setShowScore(true);
        saveHistory(user);
      }
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <div className='obstructionQuiz'>
      <h1 className='obstructionQuizH1'>
        Išspręskite šį testą ir sužinokite, kaip gerai suprantate kliūties kategoriją!
        <h1 className='obstructionQuizH1Underline'>
          (turi tik po vieną teisingą atsakymą)
        </h1>
      </h1>
      <div className='obstructionQuizTopMargin'>
        <div className='obstructionQuizForm'>
          {showScore ? (
            <div className='score-section'>
              Jūsų rezultatas: {score}/{questions.length} teisingai.
              <div className='customButtonGoToHistoryDiv'>
                <button className='customButtonGoToHistory' onClick={handleClickGoToTestHistory}>Eiti į testų istoriją</button>
              </div>
            </div>
          ) : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Klausimas {currentQuestion + 1}</span>.
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button className='obstructionQuizButton' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default InterfaceInterferenceQuizForm
