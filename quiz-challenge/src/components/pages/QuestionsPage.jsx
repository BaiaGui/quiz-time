import {Card} from '../Card.jsx'
import {Header} from '../Header.jsx'
import {Footer} from '../Footer.jsx'
import {QuestionContainer} from '../QuestionContainer.jsx'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'

export function QuestionsPage({resultsFunction, points, setPoints, questionsArray}){
  

    const [revealedState, setRevealedState]=useState(false);
  
    const [questionNumber, setQuestionNumber] =useState(0);
  
    const nextQuestion = () =>{
      console.log(questionsArray[questionNumber+1]);
      if(questionsArray[questionNumber+1] != undefined){
      setQuestionNumber(questionNumber+1);
      setRevealedState(false);
      }
       else{
        console.log(resultsFunction);
         resultsFunction();
       }
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
          <Card value={questionsArray[questionNumber].v1} revealed={revealedState} answer={questionsArray[questionNumber].a1} imgLabel={questionsArray[questionNumber].img1} handleClick={handleClick}/>
           <Card value={questionsArray[questionNumber].v2} revealed={revealedState} answer={questionsArray[questionNumber].a2} imgLabel={questionsArray[questionNumber].img2} handleClick={handleClick}/>
          <Card value={questionsArray[questionNumber].v3} revealed={revealedState} answer={questionsArray[questionNumber].a3} imgLabel={questionsArray[questionNumber].img3} handleClick={handleClick}/>
        </QuestionContainer>
        <Footer active={revealedState} questionNumber={questionNumber} totalNumber={questionsArray.length} handleClick={nextQuestion} />
      </div>
        
      </div>
      </div>
    )
  }