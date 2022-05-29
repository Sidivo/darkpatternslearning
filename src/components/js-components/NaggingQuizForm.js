import React, { useReducer } from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useState } from 'react';
import { db } from '../../firebase';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



function NaggingQuizForm() {

  const questions = [
    {
      questionText: 'Kokia yra pagrindinė kibimo kategorijos apgaulingus šablonus išskirianti savybė?',
      answerOptions: [
        { answerText: 'Apgaulingas dizainas', isCorrect: false },
        { answerText: 'Užmaskuotos reklamos', isCorrect: false },
        { answerText: 'Neaiškiai pateikiama informacija', isCorrect: false },
        { answerText: 'Pasikartojantis veiksmų nutraukimas', isCorrect: true },
      ],
    },
    {
      questionText: 'Koks yra populiariausias būdas panaudoti šios kategorijos apgaulingus šablonus?',
      answerOptions: [
        { answerText: 'Sudėtingas funkcionalumas', isCorrect: false },
        { answerText: 'Prekių reklamavimas', isCorrect: false },
        { answerText: 'Iššokantys langai', isCorrect: true },
        { answerText: 'Dėmesio nukreipimas', isCorrect: false },
      ],
    },
    {
      questionText: 'Kiek pagrindinių tipų priklauso apgaulingų šablonų kibimo kategorijai?',
      answerOptions: [
        { answerText: '0', isCorrect: true },
        { answerText: '2', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '3', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  let navigate = useNavigate()

  function handleClickGoToTestHistory() {
    navigate("/account")
  }


  const auth = getAuth();
  const user = auth.currentUser;


  const saveHistory = (user) => {
    const CurrentDate = (new Date().toLocaleString() + "")
    db
      .collection("UserHistory")
      .doc(user.uid)
      .collection("Results")
      .add({ TestoPavadinimas: "Kibimo kategorijos testas", Data: CurrentDate, Rezultatas: score + "/3 teisingi atsakymai" })
  };

  const saveHistory2 = (user) => {
    const CurrentDate = (new Date().toLocaleString() + "")
    db
      .collection("UserHistory")
      .doc(user.uid)
      .collection("Results")
      .add({ TestoPavadinimas: "Kibimo kategorijos testas", Data: CurrentDate, Rezultatas: score + 1 + "/3 teisingi atsakymai" })
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }


    const nextQuestion = currentQuestion + 1;

    if (nextQuestion === questions.length) {
      //   
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

export default NaggingQuizForm