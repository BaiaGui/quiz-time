import './App.css'
import { useState } from 'react'
import { QuestionsPage } from './components/pages/QuestionsPage';
import { InitialPage } from './components/pages/InitialPage';
import { ResultPage } from './components/pages/ResultPage';
//q1 img
import img1Q1 from './assets/question_images/Img_quest (1).png';
import img2Q1 from './assets/question_images/Img_quest (2).png';
import img3Q1 from './assets/question_images/Img_quest (3).png';

//q2 img
import img1Q2 from './assets/question_images/Img_quest (4).png';
import img2Q2 from './assets/question_images/Img_quest (5).png';
import img3Q2 from './assets/question_images/Img_quest (6).png';
//q3 img
import img1Q3 from './assets/question_images/Img_quest (7).png';
import img2Q3 from './assets/question_images/Img_quest (8).png';
import img3Q3 from './assets/question_images/Img_quest (9).png';

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
      "img1": img1Q1,
      "img2": img2Q1,
      "img3": img3Q1,
    },
    {
      "question": "Quanto é 3 + 5?",
      "a1": "6",
      "a2": "35",
      "a3": "8",
      "v1": false,
      "v2": false,
      "v3": true,
      "img1": img1Q2,
      "img2": img2Q2,
      "img3": img3Q2,
    },
    {
      "question": "Quão distante está a Terra do Sol?",
      "a1": "10 minutos",
      "a2": "149.600.000 km",
      "a3": "42m/s",
      "v1": false,
      "v2": true,
      "v3": false,
      "img1": img1Q3,
      "img2": img2Q3,
      "img3": img3Q3,
    },
  ];


  const [points, setPoints]=useState(0);

  //pages State
  const [page, setPage]=useState('initialPage');

  function resetGame(){
    setPage('initialPage');
    setPoints(0);
  }

  switch(page){
    case 'initialPage':
      return <InitialPage handleClick={()=>setPage('questionsPage')}/> ;break;
    case 'questionsPage':
      return <QuestionsPage resultsFunction={()=>setPage('resultPage')} points={points} setPoints={setPoints} questionsArray={questionsArray}/>;break;
    case 'resultPage':
      return <ResultPage result={[points/questionsArray.length, points]} handleClick={()=>resetGame()}/>;break;

  }
  
 

  
}
export default App







