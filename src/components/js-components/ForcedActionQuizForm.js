import React, { useReducer } from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useState } from 'react';
import { db } from '../../firebase';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



function ForcedActionQuizForm() {

  const questions = [
    {
      questionText: 'Kokia pagrindinė apgaulingų šablonų priverstinio veiksmo kategorijos savybė?',
      answerOptions: [
        { answerText: 'Versti atlikti nenorimus veiksmus', isCorrect: true },
        { answerText: 'Paslėpti išlaidas', isCorrect: false },
        { answerText: 'Paslėpti reklamas', isCorrect: false },
        { answerText: 'Sugėdinti vartotoją', isCorrect: false },
      ],
    },
    {
      questionText: 'Kiek pagrindinių tipų priklauso apgaulingų šablonų kliūties kategorijai?',
      answerOptions: [
        { answerText: '4', isCorrect: false },
        { answerText: '1', isCorrect: false },
        { answerText: '2', isCorrect: true },
        { answerText: '3', isCorrect: false },
      ],
    },
    {
      questionText: 'Kokia yra pagrindinė apgaulingų šablonų tipo - Zuckerinimo savybė?',
      answerOptions: [
        { answerText: 'Pasidalinti privačia informacija', isCorrect: true },
        { answerText: 'Erzinimas', isCorrect: false },
        { answerText: 'Pridėti prekių į krepšelį', isCorrect: false },
        { answerText: 'Užslėptas funkcionalumas', isCorrect: false },
      ],
    },
    {
      questionText: 'Kokia yra pagrindinė apgaulingų šablonų tipo - klaidinančio žinučių siuntinėjimo draugams savybė?',
      answerOptions: [
        { answerText: 'Siuntinėjama informacija vartotojo kontaktams', isCorrect: true },
        { answerText: 'Užmaskuojamos reklamos', isCorrect: false },
        { answerText: 'Sudėtingas funkcionalumas', isCorrect: false },
        { answerText: 'Lengva pakliūti į situaciją', isCorrect: false },

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
      .add({ TestoPavadinimas: "Priverstinio veiksmo kategorijos testas", Data: CurrentDate, Rezultatas: score + "/4 teisingi atsakymai" })
    //
  };

  const saveHistory2 = (user) => {
    const CurrentDate = (new Date().toLocaleString() + "")
    db
      .collection("UserHistory")
      .doc(user.uid)
      .collection("Results")
      .add({ TestoPavadinimas: "Priverstinio veiksmo kategorijos testas", Data: CurrentDate, Rezultatas: score + 1 + "/4 teisingi atsakymai" })
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

export default ForcedActionQuizForm