
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { QuestionContainer } from './components/QuestionContainer'
import { Card } from './components/card'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

function App() {



  let questionsArray= [
    {
      "question": "Qual estrutura de dados é mais adequada para representar uma conjunto de elementos com comportamento 'primeiro a entrar, primeiro a sair' (FIFO)?",
      "a1": "Pilha",
      "a2": "Lista Ligada",
      "a3": "Fila",
      "v1": false,
      "v2": false,
      "v3": true,
    },
    {
      "question": "Quanto é 3 + 5?",
      "a1": "6",
      "a2": "35",
      "a3": "8",
      "v1": false,
      "v2": false,
      "v3": true,
    },
  ];

  const [revealedState, setRevealedState]=useState(false);
  const [points, setPoints]=useState(0);
  const [questionNumber, setQuestionNumber] =useState(0);

  const nextQuestion = () =>{
    setQuestionNumber(questionNumber+1);
    setRevealedState(false);
  }

  function handleClick(bool){
    setRevealedState(true);
    if(bool){
      setPoints(points+1);
    }
  }

  return (
    <div className='bg-grey-5 w-screen h-screen flex justify-center items-center text-grey-1'>
    <div className='bg-grey-6 px-36 py-16 rounded-md w-3/5'>
    <div className=''>
      <Header correctAnswers={points}/>
      <QuestionContainer question={questionsArray[questionNumber].question}>
        <Card value={questionsArray[questionNumber].v1} revealed={revealedState} answer={questionsArray[questionNumber].a1} imgLabel={reactLogo} handleClick={handleClick}/>
         <Card value={questionsArray[questionNumber].v2} revealed={revealedState} answer={questionsArray[questionNumber].a2} imgLabel={reactLogo} handleClick={handleClick}/>
        <Card value={questionsArray[questionNumber].v3} revealed={revealedState} answer={questionsArray[questionNumber].a3} imgLabel={reactLogo} handleClick={handleClick}/>
      </QuestionContainer>
      <Footer active={revealedState} questionNumber={questionNumber} totalNumber={questionsArray.length} handleClick={nextQuestion} />
    </div>
      
    </div>
    </div>
  )
}

export default App
